import {account, doubleauthRes, doubleauthValidationRes, loginRes, loginResData} from "~/types/v3";
import bodyToString from "./utils/body";
import {Session} from "./session";
import {EstablishmentInfo} from "~/utils/types/establishments";
import {AccountInfo, Profile} from "~/utils/types/accounts";
import {authRequestData} from "~/types/v3/requests/student";
import { body } from "~/types/v3/requests/default/body";

class Auth {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    #getEtabInfo(data: account): EstablishmentInfo {
        const profile = data.profile as Profile;
        return {
            name: profile.nomEtablissement ?? "Établissement non spécifié",
            id: profile.idEtablissement ?? "",
            rne: profile.rneEtablissement ?? "",
            logo: data.logoEtablissement,
        };
    }

    #getStudentInfo(data: account): AccountInfo {
        const profile = data.profile as Profile;
        return {
            id: data.id,
            uid: data.uid,
            identifiant: data.identifiant,
            type: data.typeCompte,
            lastConnexion: data.lastConnexion,
            civilite: data.civilite,
            prenom: data.prenom,
            nom: data.nom,
            email: data.email,
            tel: profile.telPortable ?? "",
            sexe: profile.sexe ?? "",
            classe: profile.classe,
            photo: profile.photo ?? ""
        };
    }

    #parseLoginResponse(response: loginRes) {
        if (response.code === 200) {
            const data = response.data as loginResData;
            this.session._token = response.token;

            const account = data.accounts[0];

            this.session._accessToken = account.accessToken;

            this.session.modules = account.modules;
            this.session.settings = account.parametresIndividuels;
            this.session.school = this.#getEtabInfo(account);
            this.session.student = this.#getStudentInfo(account);
            this.session.isLoggedIn = true;
        }
    }

    async login(username: string, password: string, uuid: string, fa?: { cv: string, cn: string }) {
        const url = "/login.awp";
        const body = {
            identifiant: username,
            motdepasse: encodeURIComponent(password),
            isReLogin: false,
            sesouvenirdemoi: true,
            uuid: uuid,
            fa: []
        } as authRequestData;
        if (fa?.cv && fa?.cn) {
            body.fa.push({ cv: fa.cv, cn: fa.cn });
        }
        return await this.session.request.request(url, bodyToString(body)).then((response: loginRes) => {
            this.#parseLoginResponse(response);
        });
    }

    async get2FA() {
        const url = "/connexion/doubleauth.awp";
        const body = {} as body;
        return await this.session.request.get(url, bodyToString(body)).then((response: doubleauthRes) => {

            response.data.question = Buffer.from(response.data.question, "base64").toString();
            for(let a = 0; a<response.data.propositions.length; a++) {
                response.data.propositions[a] = Buffer.from(response.data.propositions[a], "base64").toString();
            }
        });
    }

    async resolve2FA(anwser: string) {
        const url = "/connexion/doubleauth.awp";
        const body = {
            choix: Buffer.from(anwser).toString("base64")
        } as EDCore2FAValidationRequest;
        return await this.session.request.post(url, bodyToString(body)).then((response: doubleauthValidationRes) => {
            return response.data;
        });
    }

    async renewToken(username: string, uuid: string, accessToken: string) {
        const url = "/login.awp";
        const body = {
            identifiant: username,
            motdepasse: "???",
            typeCompte: "E",
            isReLogin: true,
            accesstoken: accessToken,
            uuid: uuid
        } as authRequestData;
        return await this.session.request.post(url, bodyToString(body)).then((response: loginRes) => {
            this.#parseLoginResponse(response);
        });
    }


    setToken(token: string, id: number) {
        this.session._token = token;
        this.session.student = { id: id };
        this.session.isLoggedIn = true;
        return true;
    }
}

export {
    Auth
};
