// https://github.com/EduWireApps/ecoledirecte-api-docs?tab=readme-ov-file#notes

import {Professor} from "./accounts";

interface GradesRequestBody {
    anneeScolaire: string
}

interface GradesRequestResponse {
    foStat: string
    periodes: GradesPeriod[]
    parametrage: GradesParameters
    notes: Grade[]
}

interface GradesParameters {
    couleurEval1: string
    couleurEval2: string
    couleurEval3: string
    couleurEval4: string
    libelleEval1: Base64
    libelleEval2: Base64
    libelleEval3: Base64
    libelleEval4: Base64
    affichageMoyenne: boolean
    affichageMoyenneDevoir: boolean
    affichagePositionMatiere: boolean
    affichageNote: boolean
    affichageCompetence: boolean
    affichageEvaluationsComposantes: boolean
    affichageGraphiquesComposantes: boolean
    modeCalculGraphiquesComposantes: ModesCalculGraphiquesComposantes,
    affichageCompNum: boolean
    libelleEvalCompNum1: Base64
    libelleEvalCompNum2: Base64
    libelleEvalCompNum3: Base64
    affichageAppreciation: boolean
    appreciationsProf: boolean
    appreciationProfPrinc: boolean
    affichageMention: boolean
    affichageAppreciationCE: boolean
    affichageAppreciationVS: boolean
    affichageAppreciationCN: boolean
    affichageAppreciationClasse: boolean
    affichageAppreciationPeriodeCloturee: boolean
    moyenneUniquementPeriodeCloture: boolean
    moyennePeriodeReleve: boolean
    moyennePeriodeAnnuelle: boolean
    moyennePeriodeHorsP: boolean
    moyenneEleveDansNotes: boolean
    moyenneEleve: boolean
    moyenneEleveDansMoyenne: boolean
    moyenneGenerale: boolean
    moyenneCoefMatiere: boolean
    moyenneClasse: boolean
    moyenneMin: boolean
    moyenneMax: boolean
    moyenneRang: boolean
    moyenneSur: number
    moyenneGraphique: boolean
    moyennesSimulation: boolean
    coefficientNote: boolean
    colonneCoefficientMatiere: boolean
    noteGrasSousMoyenne: boolean
    noteGrasAudessusMoyenne: boolean
    libelleDevoir: boolean
    dateDevoir: boolean
    typeDevoir: boolean
    noteUniquementPeriodeCloture: boolean
    notePeriodeReleve: boolean
    notePeriodeAnnuelle: boolean
    notePeriodeHorsP: boolean
    libellesAppreciations: string[]
    appreciationsParametrage: AppreciationParams[]
}

interface GradesPeriod {
    idPeriode: "A001" | "A002" | "A003" | "A999Z"
    codePeriode: "A001" | "A002" | "A003" | "A999Z"
    periode: "1er Trimestre" | "2ème Trimestre" | "3ème Trimestre" | "Année"
    annuel: boolean // false pour A001..A003, true pour A999Z
    dateDebut: string // AAAA-MM-JJ
    dateFin: string // AAAA-MM-JJ
    examenBlanc: boolean
    cloture: boolean
    dateConseil?: string, // AAAA-MM-JJ - Présent pour les trimestres
    heureConseil?: string,
    heureFinConseil?: string,
    moyNbreJoursApresConseil: number, // moyenne du nombre de jours après le conseil, mais quels jours ?
    ensembleMatieres: AllSubjects
}

interface AllSubjects {
    dateCalcul: string // "AAAA-MM-JJ HH:MM"
    moyenneGenerale: string
    moyenneClasse: string
    moyenneMin: string
    moyenneMax: string
    nomPP: string
    nomCE: string
    decisionDuConseil:string
    disciplines: Subject[]
    disciplinesSimulation: []
}

interface Subject {
    id: number
    codeMatiere: string
    codeSousMatiere: string
    discipline: string
    moyenne: string
    moyenneClasse: string
    moyenneMin: string
    moyenneMax: string
    coef: number,
    effectif: number
    rang: number
    groupeMatiere: boolean
    idGroupeMatiere: number
    option: number
    sousMatiere: boolean
    saisieAppreciationSSMAT: boolean
    professeurs: Professor[]
}

interface Grade {
    id: number
    devoir: string
    codePeriode: "A001" | "A002" | "A003"
    codeMatiere: string
    libelleMatiere: string
    codeSousMatiere: string
    typeDevoir: TestType // Probablement pas renseigné par le professeur donc liste probablement fixe
    enLettre: boolean
    commentaire: string
    uncSujet: string
    uncCorrige: string
    coef: string // Mais ED ! Les nombres ne les mettez pas en string
    noteSur: string
    valeur: string
    nonSignificatif: boolean
    date: string // AAAA-MM-JJ
    dateSaisie: string //AAAA-MM-JJ
    valeurisee: boolean
    moyenneClasse: string
    minClasse: string
    maxClasse: string
    elementsProgramme: []
}

interface AppreciationParams {
    code: string
    id: number
    nbMaxCaractere: number
    libelle: string
}

type Base64 = string

type ModesCalculGraphiquesComposantes = "eval" | string

export type {
    GradesRequestBody,
    GradesRequestResponse
}
