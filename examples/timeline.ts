import { login, ED } from "./login";

// Exemple de la timeline

login().then(() => {
    ED.timeline.fetch().then(timeline => {
        console.log("[Timeline personnelle]");
        timeline.forEach(event => {
            console.log(`\t${event.titre}, ${event.date} (${event.soustitre}, ${event.contenu}).`);
        });
    });
    ED.timeline.fetchCommonTimeline().then(data => {
        console.log("[Timeline commune]");
        data.postits.forEach(postit => {
            console.log(`\t[POSTIT] ${postit.contenu} par ${postit.auteur.particule} ${postit.auteur.nom}`);
        });
        data.evenements.forEach(event => {
            console.log(`\t[EVENT] "${event.libelle}" ${event.description} du ${event.dateDebut} à ${event.heureDebut} au ${event.dateFin} à ${event.heureFin}`);
        });
    });
});
