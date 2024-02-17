import {role} from "~/types/v3";

interface accountStudentParameters {
    lsuPoilDansLaMainBorne1: string
    lsuPoilDansLaMainBorne2: string
    lsuPoilDansLaMainBorne3: string
    modeCalculLSU: string
    isQrcode: boolean
    modeAccessibiliteVisuelle: boolean
    typeSaisieNotesDefaut: string
    nbJoursMaxRenduDevoirCDT: string
}

type accountParameters = accountStudentParameters

interface BlankAccount {
    id: string | number
}

interface AccountInfo {
    id: number
    uid: string
    identifiant: string
    type: role
    lastConnexion: string
    civilite: string
    prenom: string
    nom: string
    email: string
    tel: string
    sexe: string
    classe: string
    photo: string
}

export type {
    accountParameters,
    BlankAccount,
    AccountInfo
}
