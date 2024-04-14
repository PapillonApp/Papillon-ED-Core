import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {mailboxRes, mailboxResData} from "~/types/v3";
import {mailboxRequestData} from "~/types/v3/requests/student/mailbox";

class GetMessaging {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    async fetchReceivedMessages(anneeMessages: string = "2023-2024"): Promise<mailboxResData> {
        const url = `/eleves/${this.session.student.id}/messages.awp`;
        const parameters = "force=false&typeRecuperation=received&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0";
        const data = {
            "anneeMessages": anneeMessages
        } as mailboxRequestData;
        return await this.session.request.get(url, bodyToString(data), parameters).then((response: mailboxRes) => {
            return response.data;
        }) as Promise<mailboxResData>;
    }

    async fetchSentMessages(anneeMessages: string = "2023-2024"): Promise<mailboxResData> {
        const url = `/eleves/${this.session.student.id}/messages.awp`;
        const parameters = "force=false&typeRecuperation=sent&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0";
        const data = {
            "anneeMessages": anneeMessages
        } as mailboxRequestData;
        return await this.session.request.get(url, bodyToString(data), parameters).then((response: mailboxRes) => {
            return response.data;
        }) as Promise<mailboxResData>;
    }

    async fetchMessageContentReceived(messageId: number, anneeMessages = "2023-2024"): Promise<mailboxResData> {
        const url = `/eleves/${this.session.student.id}/messages/${messageId}.awp`;
        const parameters = "mode=destinataire";
        const data = {
            "anneeMessages": anneeMessages
        } as mailboxRequestData;
        return await this.session.request.get(url, bodyToString(data), parameters).then((response: mailboxRes) => {
            return response.data;
        }) as Promise<mailboxResData>;
    }

    async fetchMessageContentSent(messageId: number, anneeMessages = "2023-2024"): Promise<mailboxResData> {
        const url = `/eleves/${this.session.student.id}/messages/${messageId}.awp`;
        const parameters = "mode=expediteur";
        const data = {
            "anneeMessages": anneeMessages
        } as mailboxRequestData;
        return await this.session.request.get(url, bodyToString(data), parameters).then((response: mailboxRes) => {
            return response.data;
        }) as Promise<mailboxResData>;
    }
}

export {
    GetMessaging
};
