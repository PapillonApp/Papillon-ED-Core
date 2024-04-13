import {EDCore} from "../index";
import { v4 as uuidv4 } from "uuid";
// @ts-ignore
import { Select } from "enquirer";
import ora, {Ora} from "ora";
import {AccountInfo} from "../src/utils/types/accounts";

export const ED = new EDCore();

const username = "";
const password = "";
const uid = uuidv4();

async function handle2FA() {
    const token = await ED.auth.get2FAToken(username, password);
    const QCM = await ED.auth.get2FA(token);
    const chooseAnswer = new Select({
        name: 'answer',
        message: QCM.question,
        choices: QCM.propositions
    });
    const answer = await chooseAnswer.run()
    const loader = ora('Envoie de la réponse...').start();
    const authFactors = await ED.auth.resolve2FA(answer);
    loader.succeed('Envoie de la réponse')
    loader.start('Connexion...')
    await ED.auth.login(username, password, uid, authFactors)
    loggedInHook(loader)
}

function loggedInHook(loader: Ora) {
    const account = ED.student as AccountInfo;
    loader.succeed(`Connecté en tant que ${account.prenom} ${account.nom}`);
}

export async function login() {
    const loader = ora('Authentification...').start();
    await ED.auth.login(username, password, uid).then(() => {
        loggedInHook(loader);
    }).catch(async err => {
        if (err.code == 12) {
            loader.fail('La double authentification est activée, répondez à la question pour vous connecter');
            await handle2FA();
            return;
        }
        loader.fail(`Failed to login: Error ${err.code}: ${err.message}`);
        process.exit();
    });
}
