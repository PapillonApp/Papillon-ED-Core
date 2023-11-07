


class getVisco {
    constructor(session) {
        this.session = session;
    }

    fetch() {
        let url = `/eleves/${this.session.student.id}/viescolaire.awp?verbe=get`
        let body = `data={}`
        return this.session.request.post(url, body)
    }
}
module.exports = getVisco;