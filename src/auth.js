class Auth {
    constructor(session) {
        this.session = session;
    }

    login(username, password) {
        let url = `/login.awp?v=4.37.1`
        let body = `data={
            "identifiant": "${username}",
            "motdepasse": "${encodeURIComponent(password)}",
            "isReLogin": false,
            "uuid": ""
        }`
        return this.session.request.post(url, body).then(res => {
            if(res.code == 200) {
                this.session._token = res.token;
                let accounts = res.data.accounts[0];

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

    setToken(token, id) {
        this.session._token = token;
        this.session.student = { id: id };
        this.session.isLoggedIn = true;
        return true;
    }

    getEtabInfo(data) {
        return {
            name: data.profile.nomEtablissement,
            id: data.profile.idEtablissement,
            rne: data.profile.rneEtablissement,
            logo: data.logoEtablissement,
        }
    }

    getStudentInfo(data) {
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

module.exports = Auth