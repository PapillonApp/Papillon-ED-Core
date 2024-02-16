import {AuthRequestBody, AuthRequestResponse} from "./types/auth";
import bodyToString from "./utils/body"
import {Account, ParsedAccount, ParsedEstablishment} from "./types/accounts";
import {Session} from "./session";

class Auth {

    session: Session

    constructor(session: Session) {
        this.session = session;
    }

    async login(username: string, password: string) {
        const url = `/login.awp?v=4.37.1`
        const body = {
            identifiant: username,
            motdepasse: encodeURIComponent(password),
            isRelogin: false,
            uuid: ""
        } as AuthRequestBody
        return await this.session.request.post(url, bodyToString(body)).then((res: AuthRequestResponse) => {
            if(res.code == 200) {
                this.session._token = res.token;
                const accounts = res.data.accounts[0];

                this.session.modules = accounts.modules;
                this.session.settings = accounts.parametresIndividuels;
                this.session.school = this.getEtabInfo(accounts);
                this.session.student = this.getStudentInfo(accounts);
                this.session.isLoggedIn = true;
            } else {
                return null;
            }

        })
    }

    setToken(token: string, id: number) {
        this.session._token = token;
        this.session.student = { id: id };
        this.session.isLoggedIn = true;
        return true;
    }

    getEtabInfo(data: Account): ParsedEstablishment {
        return {
            name: data.profile.nomEtablissement,
            id: data.profile.idEtablissement,
            rne: data.profile.rneEtablissement,
            logo: data.logoEtablissement,
        }
    }

    getStudentInfo(data: Account): ParsedAccount {
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
            tel: data.profile.telPortable,
            sexe: data.profile.sexe,
            classe: data.profile.classe,
            photo: data.profile.photo
        }
    }
}

export {
    Auth
}