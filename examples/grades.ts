import { login, ED } from "./login";

// Exemple de récupération des notes

login().then(() => {
    ED.grades.fetch().then(grades => {
        grades.notes.forEach((grade) => {
            console.log(`${grade.libelleMatiere}, ${grade.dateSaisie}: ${grade.valeur}/${grade.noteSur}`);
        });
    });
});
