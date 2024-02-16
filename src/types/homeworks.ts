interface Homework {
    entityCode: string // Classe ("1A") / groupe
    entityLibelle: string // Nom d'affichage de la classe ("PREMIERE A")
    entityType: "C" | "G" | string // C = Classe, G = Groupe, ...
    matiere: string
    codeMatiere: string // Pareils que route précédente
    nomProf: string
    id: number // Même id que idDevoir dans la route précédente
    interrogation: boolean
    blogActif: false // ?
    nbJourMaxRenduDevoir: number // Date butoir du rendu ?
    aFaire: {
        contenuTexte?: string // Propriété custom
        idDevoir: number
        contenu: string // Détail du travail à faire
        rendreEnLigne: boolean
        donneLe: "AAAA-MM-JJ"
        effectue: boolean
        ressource: "" // ? vide jusqu'ici
        ressourceDocuments: [] // ?, vide jusqu'ici
        documents: Array<{ // Pièces jointes
            id: number // Pour la télécharger via la route de téléchargement
            libelle: string // Nom
            date: "AAAA-MM-JJ"
            taille: number // En octets
            type: "FICHIER_CDT" // Autres valeurs ?
            signatureDemandee: false // ?
            signature: object // ?
        }>
        commentaires: Array<{
            id: number // identifiant du commentaire
            idAuteur: number // identifiant de l'auteur
            profilAuteur: "E" // E = Elève, autres valeurs ?
            auteur: string // Nom de l'auteur
            date: "AAAA-MM-JJ"
            message: string // Encodé en base64
            supprime: false // Si le commentaire a été supprimé ? (semble stupide)
        }>
        elementsProg: [] // ?
        liensManuel: [] // URL des manuels associés à la matière ?
        documentsRendus: [] // Fichiers rendus lorsque le formulaire est présent ?
        contenuDeSeance: {
            contenu: string
            documents: []
            commentaires: []
        }
    }
    contenuDeSeance: {
        idDevoir: number // Systématiquement le même identifiant que id plus haut
        contenu: string
        documents: [] // Pièces jointes ?
        commentaires: [] // Même structure que commentaires sur travail à faire ?
        elementsProg: []
        liensManuel: []
    }
}

interface HomeworkData {
    date: string
    matieres: Array<Homework>
}

interface HomeworkRequestResponse {
    data: HomeworkData
}

export type {
    Homework,
    HomeworkRequestResponse
}
