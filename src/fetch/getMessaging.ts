import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {mailboxRes, mailboxResData} from "~/types/v3";
import {mailboxRequestData} from "~/types/v3/requests/student/mailbox";

class GetMessaging {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    fetchReceivedMessages(anneeMessages: string = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages.awp?force=false&typeRecuperation=received&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get`;
        const data = {
            "anneeMessages": anneeMessages
        } as mailboxRequestData;
        return this.session.request.post(url, bodyToString(data)).then((response: mailboxRes) => {
            return response.data;
        }) as Promise<mailboxResData>;
    }

    fetchSentMessages(anneeMessages: string = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages.awp?force=false&typeRecuperation=sent&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get`;
        const data = {
            "anneeMessages": anneeMessages
        } as mailboxRequestData;
        return this.session.request.post(url, bodyToString(data)).then((response: mailboxRes) => {
            return response.data;
        }) as Promise<mailboxResData>;
    }

    fetchMessageContentReceived(message_id: number, anneeMessages = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages/${message_id}.awp?verbe=get&mode=destinataire`;
        const data = {
            "anneeMessages": anneeMessages
        } as mailboxRequestData;
        return this.session.request.post(url, bodyToString(data)).then((response: mailboxRes) => {
            return response.data;
        }) as Promise<mailboxResData>;
    }

    fetchMessageContentSent(message_id: number, anneeMessages = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages/${message_id}.awp?verbe=get&mode=expediteur`;
        const data = {
            "anneeMessages": anneeMessages
        } as mailboxRequestData;
        return this.session.request.post(url, bodyToString(data)).then((response: mailboxRes) => {
            return response.data;
        }) as Promise<mailboxResData>;
    }
}

export {
    GetMessaging
};
