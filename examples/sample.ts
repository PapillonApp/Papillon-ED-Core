import {EDCore} from "../index";

const ED = new EDCore();
ED.auth.login("username", "password").then(() => {
    // Retrieve grades
    ED.grades.fetch().then(grades => {
        console.log(grades);
    });
});
