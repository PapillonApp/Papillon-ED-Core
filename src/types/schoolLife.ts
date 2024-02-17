
interface Absence {
    "id": 2936, // int | Identifiant interne de l'abscence / retard
    "idEleve": 0, // int | Normalement égal à l'id de l'eleve mais 0 dans mon cas
    "nomEleve": "", // string | Normalement rempli mais vide dans mon cas
    "typeElement": "Absence", //string | Sert pour savoir si c'est une "Abscence" ou un "Retard"
    "date": "2021-11-19",
    "displayDate": "le vendredi 19 novembre 2021 de 08:30 à 16:30",
    "libelle": "2 demi-journées",
    "motif": "",
    "justifie": true, // bool | Si jamais justufié ou non (note : si jamais elle est en attente de justification, elle sera a true)
    "par": "",
    "commentaire": "Merci de bien vouloir excuser l'absence de X pour la journée, il est souffrant.\nBien cordialement,",
    "typeJustification": " en attente de prise en compte par la vie scolaire",
    "justifieEd": true, // Si on peut justifier en ligne ?
    "aFaire": "",
    "dateDeroulement": ""
}

interface SchoolLifeRequestResponse {
    "absencesRetards": Absence[]
    "sanctionsEncouragements":[
        {
            "id":48,
            "idEleve":0,
            "nomEleve":"",
            "typeElement":"Punition",
            "date":"2021-11-26",
            "displayDate":"",
            "libelle":"RETENUE",
            "motif":"Trop de mots dans le carnet",
            "justifie":false,
            "par":"",
            "commentaire":"",
            "typeJustification":"",
            "justifieEd":false,
            "aFaire":"1 heure",
            "dateDeroulement":"S'est déroulé le mer. 08 décembre<BR>de 13:00 à 14:00"
        }
    ],
    "parametrage": {
        "justificationEnLigne":true,
        "absenceCommentaire":true,
        "retardCommentaire":true,
        "sanctionsVisible":true,
        "sanctionParQui":false,
        "sanctionCommentaire":true,
        "encouragementsVisible":false,
        "encouragementParQui":false,
        "encouragementCommentaire":false
    }
}
