

class getMessaging {
    constructor(session) {
        this.session = session;

    }

    fetchReceivedMessages(anneeMessages = "2023-2024") {
        let url = `/eleves/${this.session.student.id}/messages.awp?force=false&typeRecuperation=received&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get`
        return this.session.request.post(url, `data={"anneeMessages": "${anneeMessages}"}`).then(r => {
            return {
                "classeurs": r.data.classeurs,
                "messages": r.data.messages.received,
                "parametrage": r.data.parametrage,
                "pagination": r.data.pagination
            }
        })
    }

    fetchSentMessages(anneeMessages = "2023-2024") {
        let url = `/eleves/${this.session.student.id}/messages.awp?force=false&typeRecuperation=sent&idClasseur=0&orderBy=date&order=desc&query=&onlyRead=&page=0&itemsPerPage=100&getAll=0&verbe=get`
        return this.session.request.post(url, `data={"anneeMessages": "${anneeMessages}"}`).then(r => {
            return {
                "classeurs": r.data.classeurs,
                "messages": r.data.messages.sent,
                "parametrage": r.data.parametrage,
                "pagination": r.data.pagination
            }
        })
    }

    fetchMessageContentReceived(message_id, anneeMessages = "2023-2024") {
        ///
        let url = `/eleves/${this.session.student.id}/messages/${message_id}.awp?verbe=get&mode=destinataire`
        return this.session.request.post(url, `data={"anneeMessages": "${anneeMessages}"}`).then(r => {
            return {
                ...r.data
            }
        })
    }

    fetchMessageContentSent(message_id, anneeMessages = "2023-2024") {
        ///
        let url = `/eleves/${this.session.student.id}/messages/${message_id}.awp?verbe=get&mode=expediteur`
        return this.session.request.post(url, `data={"anneeMessages": "${anneeMessages}"}`).then(r => {
            return {
                ...r.data
            }
        })
    }
}

module.exports = getMessaging;