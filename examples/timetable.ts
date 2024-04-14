import { login, ED } from "./login";

// Exemple de l'EDT

login().then(() => {
    // La date doit être donnée en YYYY-MM-DD
    const today = new Date();
    const month = today.getMonth() + 1 >= 10 ? today.getMonth(): `0${today.getMonth() + 2}`
    const todayDate = `${today.getFullYear()}-${month}-${today.getDate()}`;
    ED.timetable.fetchByDay(todayDate).then(timetable => {
        console.log("\nEmploi du temps d'aujourd'hui:");
        timetable.forEach(matiere =>  {
            console.log(`\t${matiere.text ? matiere.text: matiere.matiere} (${matiere.codeMatiere}) avec ${matiere.prof ? matiere.prof: "pas de prof"}, de ${matiere.start_date} à ${matiere.end_date} en salle ${matiere.salle ? matiere.salle: "pas de salle"}.`);
        });
    });
});
