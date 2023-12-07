

class getGrades {
    constructor(session) {
        this.session = session;

    }

    fetch() {
        let url = `/eleves/${this.session.student.id}/notes.awp?verbe=get`
        let body = `data={
            "anneeScolaire": ""
        }`
        return this.session.request.post(url, body)
    }
}

module.exports = getGrades;