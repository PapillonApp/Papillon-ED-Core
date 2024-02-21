import { login, ED } from "./login";

// Exemple de la timeline

login().then(() => {
    ED.timeline.fetch().then(timeline => {
        console.log("Timeline personnelle:");
        timeline.forEach(event => {
            console.log(`\t${event.date} (${event.titre}).`);
        });
    });
});
