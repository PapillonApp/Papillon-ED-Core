

class getGrades {
    constructor(session) {
        this.session = session;

    }

    fetch() {
        let url = `/eleves/${this.session.student.id}/notes.awp?verbe=get`
        let body = `data={
            "anneeScolaire": ""
        }`
        return this.session.request.post(url, body).then(r => {
            return {
                "foStat": r.data.foStat,
                "periodes": r.data.periodes,
                "grades": r.data.notes,
                "parametrage": r.data.parametrage,
                "LSUN": r.data.LSUN
            }
        })
    }
}

module.exports = getGrades;