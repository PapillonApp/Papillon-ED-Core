import { login, ED } from "./login";

// Exemple du cloud

login().then(() => {
    ED.cloud.fetch().then(baseFolder => {
        console.log("Contenu du cloud:");
        console.log(baseFolder);
        /*baseFolder[0].children.forEach(item => {
            console.log(`\t[${item.type.toUpperCase()}] ${item.libelle}`);
        });*/
    });
});
