import {Session} from "~/session";
import bodyToString from "~/utils/body";

class GetMessaging {

    session: Session

    constructor(session: Session) {
        this.session = session;

    }

    fetchReceivedMessages(anneeMessages: string = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages.awp?force=false&typeRecuperation=received&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get`
        const data = {
            "anneeMessages": anneeMessages
        }
        return this.session.request.post(url, bodyToString(data)).then(r => {
            return {
                "classeurs": r.data.classeurs,
                "messages": r.data.messages.received,
                "parametrage": r.data.parametrage,
                "pagination": r.data.pagination
            }
        })
    }

    fetchSentMessages(anneeMessages: string = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages.awp?force=false&typeRecuperation=sent&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get`
        const data = {
            "anneeMessages": anneeMessages
        }
        return this.session.request.post(url, bodyToString(data)).then(r => {
            return {
                "classeurs": r.data.classeurs,
                "messages": r.data.messages.sent,
                "parametrage": r.data.parametrage,
                "pagination": r.data.pagination
            }
        })
    }

    fetchMessageContentReceived(message_id: number, anneeMessages = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages/${message_id}.awp?verbe=get&mode=destinataire`
        const data = {
            "anneeMessages": anneeMessages
        }
        return this.session.request.post(url, bodyToString(data)).then(r => {
            return {
                ...r.data
            }
        })
    }

    fetchMessageContentSent(message_id: number, anneeMessages = "2023-2024") {
        const url = `/eleves/${this.session.student.id}/messages/${message_id}.awp?verbe=get&mode=expediteur`
        const data = {
            "anneeMessages": anneeMessages
        }
        return this.session.request.post(url, bodyToString(data)).then(r => {
            return {
                ...r.data
            }
        })
    }
}

export {
    GetMessaging
}
