// https://github.com/EduWireApps/ecoledirecte-api-docs#account-modules

interface Module {
    code: KnownModulesCodes | string
    enable: boolean
    ordre: number
    badge: number
    params: ModuleParams
}

interface EmptyModule {
    code: string
    enable: boolean
    params: ModuleParams
}

interface ReservationModuleParams {
    regime: string
    repasmidi_1: StringBoolean
    repassoir_1: StringBoolean
    repasmidi_2: StringBoolean
    repassoir_2: StringBoolean
    repasmidi_3: StringBoolean
    repassoir_3: StringBoolean
    repasmidi_4: StringBoolean
    repassoir_4: StringBoolean
    repasmidi_5: StringBoolean
    repassoir_5: StringBoolean
    repasmidi_6: StringBoolean
    repassoir_6: StringBoolean
    repasmidi_7: StringBoolean
    repassoir_7: StringBoolean
}

interface BarCodeModuleParams {
    numeroBadge: string
}

interface CDTModuleParams {
    compteRenduSeance: StringBoolean
    compteRenduSeancePrevisionnel: StringBoolean
    isCDTPrimaire: StringBoolean
}

interface DocumentModuleParams {
    DocumentsNotesActif: StringBoolean
    DocumentsVSActif: StringBoolean
    DocumentsAdministratifActif: StringBoolean
}


interface MessagesModuleParams {
    isActif: StringBoolean
    canParentsLireMessagesEnfants: StringBoolean
    destAdmin: StringBoolean
    destEleve: StringBoolean
    destFamille: StringBoolean
    destProf: StringBoolean
    destEspTravail: StringBoolean
    disabledNotification: StringBoolean
    notificationEmailEtablissement: StringBoolean
    choixMailNotification: StringBoolean
    autreMailNotification: string
    mailPro: string
    mailPerso: string
    messagerieApiVersion: string, // "v3"
    blackListProfActive: StringBoolean
    estEnBlackList: StringBoolean
    afficherToutesLesClasses: StringBoolean
}

type ModuleParams = ReservationModuleParams | CDTModuleParams | DocumentModuleParams | MessagesModuleParams | BarCodeModuleParams | object

type KnownModulesCodes = "SITUATION_FINANCIERE" | "IMPALA" | "FUTURNESS" | "IJBOX" | "ETUDIANT" | "SACOCHE" | "AVENRIA"
    | "ONISEPSERVICES" | "VOLTAIRE" | "CLICKNPLAY" | "SUIVI_STAGE" | "EDUMALIN" | "PEARLTREES" | "ARD" | "CATER" |
    "EDUNAO" | "ESIDOC" | "CARNET_CORRESPONDANCE" | "COMMANDE_PASSAGE" | "RESERVATIONS" | "QCM" | "MANUELS_SCOLAIRES" |
    "CAHIER_DE_TEXTES" | "DOCUMENTS_ELEVE" | "EDT" | "MESSAGERIE" | "CLOUD" | "NOTES" | "VIE_DE_LA_CLASSE" |
    "VIE_SCOLAIRE" | "CANTINE_BARCODE"

// Oui, ED renvoie 1 ou 0 au lieu d'un boolean dans les paramètres modules..
type StringBoolean = "1" | "0"

export type {
    Module,
    EmptyModule
}
