import {EDCore} from "../index";
import {studentAccount} from "~/types";
import { v4 as uuidv4 } from "uuid";

export const ED = new EDCore();

export async function login() {
    await ED.auth.login("jean", "jean%", uuidv4()).then(() => {
        const account = ED.student as studentAccount;
        console.log(`Logged in as ${account.particule} ${account.prenom} ${account.nom}`);
    }).catch(err => {
        console.error(`Failed to login: Error ${err.code}: ${err.message}`);
        process.exit();
    });
}
