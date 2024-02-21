import {EDCore} from "../index";

export const ED = new EDCore();

export async function login() {
    await ED.auth.login("username", "password");
}
