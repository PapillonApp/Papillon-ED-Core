import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {mailboxRes, mailboxResData} from "~/types/v3";
import {messagingRequestData} from "~/types/v3/requests/student";

class GetMessaging {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    fetchReceivedMessages(anneeMessages: string = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages.awp?force=false&typeRecuperation=received&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get`;
        const data = {
            "anneeMessages": anneeMessages
        } as messagingRequestData;
        return this.session.request.post(url, bodyToString(data)).then((response: mailboxRes) => {
            if (response.code == 200) {
                const responseData = response.data as mailboxResData;
                return {
                    "classeurs": responseData.classeurs,
                    "messages": responseData.messages.received,
                    "parametrage": responseData.parametrage,
                    "pagination": responseData.pagination
                };
            }
        });
    }

    fetchSentMessages(anneeMessages: string = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages.awp?force=false&typeRecuperation=sent&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get`;
        const data = {
            "anneeMessages": anneeMessages
        } as messagingRequestData;
        return this.session.request.post(url, bodyToString(data)).then((response: mailboxRes) => {
            if (response.code == 200) {
                const responseData = response.data as mailboxResData;
                return {
                    "classeurs": responseData.classeurs,
                    "messages": responseData.messages.received,
                    "parametrage": responseData.parametrage,
                    "pagination": responseData.pagination
                };
            }
        });
    }

    fetchMessageContentReceived(message_id: number, anneeMessages = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages/${message_id}.awp?verbe=get&mode=destinataire`;
        const data = {
            "anneeMessages": anneeMessages
        } as messagingRequestData;
        return this.session.request.post(url, bodyToString(data)).then(r => {
            return {
                ...r.data
            };
        });
    }

    fetchMessageContentSent(message_id: number, anneeMessages = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages/${message_id}.awp?verbe=get&mode=expediteur`;
        const data = {
            "anneeMessages": anneeMessages
        } as messagingRequestData;
        return this.session.request.post(url, bodyToString(data)).then(r => {
            return {
                ...r.data
            };
        });
    }
}

export {
    GetMessaging
};
