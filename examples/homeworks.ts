import { login, ED } from "./login";

// Exemple de l'EDT

login().then(() => {
    ED.homeworks.fetch().then(homeworks => {
        console.log("Devoirs:");
        Object.keys(homeworks).forEach(key =>  {
            console.log(`\tPour le ${key}:`);
            const work = homeworks[key];
            work.forEach(subject => {
                console.log(`\t\tDevoirs en ${subject.matiere} (${subject.codeMatiere}), donné le ${subject.donneLe}. ${subject.effectue ? "Effectué": "Non effectué"}, ${subject.interrogation ? "interrogation prévue": "pas d'interrogation"} et ${subject.rendreEnLigne ? "documents à rendre en ligne": "rien à rendre en ligne"}.`);
            });
        });
    });
});
