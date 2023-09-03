


class getTimetable {
    constructor(session) {
        this.session = session;
    }

    fetchByDay(date) {
        let url = `/E/${this.session.student.id}/emploidutemps.awp?verbe=get`
        let body = `data={
            "dateDebut": "${date}",
            "dateFin": "${date}",
            "avecTrous": false
        }`
        return this.session.request.post(url, body)
    }

    fetchByDate(dateD, dateF) {
        let url = `/E/${this.session.student.id}/emploidutemps.awp?verbe=get`
        let body = `data={
            "dateDebut": "${dateD}",
            "dateFin": "${dateF}",
            "avecTrous": false
        }`
        return this.session.request.post(url, body)
    }
}
module.exports = getTimetable;