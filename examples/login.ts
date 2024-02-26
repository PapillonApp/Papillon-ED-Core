import {EDCore} from "../index";
import {studentAccount} from "~/types";

export const ED = new EDCore();

export async function login() {
    await ED.auth.login("jean", "jean%").then(() => {
        const account = ED.student as studentAccount;
        console.log(`Logged in as ${account.civilite} ${account.prenom} ${account.nom}`);
    }).catch(err => {
        console.error(`Failed to login: Error ${err.code}: ${err.message}`);
        process.exit();
    });
}
