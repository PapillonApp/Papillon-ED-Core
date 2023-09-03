

class getSchoollife {
    constructor(session) {
        this.session = session;

    }

    fetch() {
        let url = `/E/${this.session.student.id}/viescolaire.awp?verbe=get`
        return this.session.request.post(url, `data={}`).then(res => {
            return {
                absencesRetards: res.data.absencesRetards,
                sanctionsEncouragements: res.data.sanctionsEncouragements
            };
        })
    }
}

module.exports = getSchoollife;