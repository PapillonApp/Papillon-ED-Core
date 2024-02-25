import {EDCore} from "../index";
import {account} from "~/types";

export const ED = new EDCore();

export async function login() {
    await ED.auth.login("jean", "jean%").then(() => {
        const account = ED.student as account
        console.log(`Logged in as ${account.identifiant}`)
    }).catch(err => {
        console.error(`Failed to login: Error ${err.code}: ${err.message}`);
        process.exit();
    });
}
