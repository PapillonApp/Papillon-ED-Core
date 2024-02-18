import { login, ED } from "./login";

// Exemple de l'EDT

login().then(() => {
    // La date doit être donnée en YYYY-MM-DD
    const today = new Date();
    const todayDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    ED.timetable.fetchByDay(todayDate).then(timetable => {
        console.log("Emploi du temps d'aujourd'hui:");
        Object.keys(timetable).forEach(key =>  {
            const matiere = timetable[key];
            console.log(`\t${matiere.matiere} (${matiere.codeMatiere}), de ${matiere.start_date} à ${matiere.end_date} en salle ${matiere.classe}.`);
        });
    });
});
