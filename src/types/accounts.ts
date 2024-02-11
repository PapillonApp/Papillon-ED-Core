// Types grâce à https://github.com/EduWireApps/ecoledirecte-api-docs/?tab=readme-ov-file#accounts-objects

interface Account {
    idLogin: number
    id: number
    uid: string
    identifiant: string
    typeCompte: AccountType
    codeOgec: string
    main: boolean
    lastConnexion: string
    civilite: string
    prenom: string
    particule: string
    nom: string
    email: string
    anneeScolaireCourante: string
    nomEtablissement: string
    logoEtablissement: string
    couleurAgendaEtablissement: string
    dicoEnLigneLeRobert: boolean
    socketToken: string
    profile: AccountProfile
    // TODO; type modules
    modules: any[]
    parametresIndividuels
}

interface AccountProfile {
    sexe: Genre
    infoEDT: string
    nomEtablissement: string
    idEtablissement: string
    rneEtablissement: string
    telPortable: string
    idReelEtab: string
    photo: string
    classe: Class
}

interface Class {
    id: string
    code: string
    libelle: string
    estNote: number
}

interface AccountIndividualParameters {
    lsuPoilDansLaMainBorne1: string | number // Paramètre parcoursup
    lsuPoilDansLaMainBorne2: string | number // Paramètre parcoursup
    lsuPoilDansLaMainBorne3: string | number // Paramètre parcoursup
    modeCalculLSU: any // Inconnu
    isQrcode: boolean
    accessibilitéVisuelle: boolean // Pour les personnes malvoyantes
    typeSaisieNotesDefaut: any // Inconnu
    nbJoursMaxRenduDevoirCDT: any // Inconnu
    typeViewCDTDefaut: any // Inconnu
}

// TODO; connaitre tous les types de comptes
type AccountType  = "E" | "P"


// TODO; connaitre tous les champs sexe possibles
type Genre  = "M" | "F"

export type {
    Account
}
