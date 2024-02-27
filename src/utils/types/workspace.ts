type body = {
    [key: string]: unknown;
};


interface DiaryRequestData extends body {
    nbProchainsEvents: number
}

type DiaryReponseSuccess = {
    code: 200;
    token: string;
    host: string;
    data: DiaryResponseData;
};

type DiaryResponseData = {
    evenements: unknown;
};


type TopicsResponseSuccess = {
    code: 200;
    token: string;
    host: string;
    data: TopicsResponseData
};

type TopicsResponseData = {
    nomEspaceTravail: string;
    topics: unknown; // Array
    parametrage:{
        droitUtilisateur: 0 | 1 | 2 | number;
    }
};


type MembersResponseSuccess = {
    code: 200;
    token: string;
    host: string;
    data: MembersResponseData
};

type MembersResponseData = {
    idEspaceTravail: number;
    titreEspaceTravail: string;
    creePar: string;
    droitUtilisateur:  0 | 1 | 2 | number;
    nbMembresTotal: number;
    membres: Array<Member>;
};

type Member = {
    idMembre: number;
    nom: string;
    prenom: string;
    profil: "E";
    civilite: string;
    libelleClasse: string;
    droit: 0 | 1 | 2 | number;
    isAdministrateur: boolean;
    messagerieActive: boolean;
    fonction: {
        id: number;
        libelle: string;
    }
};


export type {
    DiaryRequestData,
    DiaryReponseSuccess,
    DiaryResponseData,

    TopicsResponseSuccess,
    TopicsResponseData,

    MembersResponseSuccess,
    MembersResponseData
};

