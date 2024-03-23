import { login, ED } from "./login";

// Exemple de schoolLife

login().then(() => {
    ED.schoolLife.fetch().then(response => {
        for (const sanctionsEncouragement of response.sanctionsEncouragements) {
            console.log(`[${sanctionsEncouragement.typeElement}] ${sanctionsEncouragement.libelle} le ${sanctionsEncouragement.date} par ${sanctionsEncouragement.par}; ${sanctionsEncouragement.commentaire}`)
        }
        for (const absencesRetard of response.absencesRetards) {
            console.log(`[${absencesRetard.typeElement}] ${absencesRetard.libelle} le ${absencesRetard.date} par ${absencesRetard.par}; ${absencesRetard.commentaire}`)
        }
    });
});
