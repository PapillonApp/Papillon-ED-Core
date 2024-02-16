// Types grâce à https://github.com/EduWireApps/ecoledirecte-api-docs/?tab=readme-ov-file#accounts-objects

import {Module} from "./modules";

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
    modules: Module[]
    parametresIndividuels: AccountIndividualParameters
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

interface BlankAccount {
    id: string | number
}

interface ParsedAccount {
    id: number
    uid: string
    identifiant: string
    type: AccountType
    lastConnexion: string
    civilite: string
    prenom: string
    nom: string
    email: string
    tel: string
    sexe: string
    classe: Class
    photo: string
}

interface ParsedEstablishment {
    name: string
    id: string
    rne: string
    logo: string
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
    modeCalculLSU: unknown // Inconnu
    isQrcode: boolean
    accessibilitéVisuelle: boolean // Pour les personnes malvoyantes
    typeSaisieNotesDefaut: unknown // Inconnu
    nbJoursMaxRenduDevoirCDT: unknown // Inconnu
    typeViewCDTDefaut: unknown // Inconnu
}

// TODO; connaitre tous les types de comptes
type AccountType  = "E" | "P"


// TODO; connaitre tous les champs sexe possibles
type Genre  = "M" | "F"

interface Professor {
    id: number
    nom: string
}

export type {
    Account,
    BlankAccount,
    ParsedAccount,
    Professor,
    ParsedEstablishment,
    AccountIndividualParameters
}
