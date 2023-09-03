

class getHomeworks {
    constructor(session) {
        this.session = session
    }

    fetch() {
        let url = `/E/${this.session.student.id}/cahierdetexte.awp?verbe=get`
        return this.session.request.post(url, `data={}`)
    }

    getByDay(day) {
        let url = `/E/${this.session.student.id}/cahierdetexte/${day}.awp?verbe=get`
        return this.session.request.post(url, `data={}`).then(response => {

            let homeworks = response.data;

            homeworks.matieres.forEach((homework, index) => {
                const htmlContent = homework.aFaire.contenu;
                var span = document.createElement('span');
                span.innerHTML = htmlContent;
                homeworks.matieres[index].aFaire.contenuTexte = [span.textContent || span.innerText].toString().replace(/ +/g,' ');
            });
    
            return homeworks;
        })
    }

    setStatus(homeworkID, isDone) {
        let url = `/E/${this.session.student.id}/cahierdetexte.awp?verbe=put`
        let body = `data={
            "idDevoirsEffectues": ${[isDone ? homeworkID : null]},
            "idDevoirsNonEffectues": ${[isDone ? null : homeworkID]}
          }`
        return this.session.request.post(url, body)
    }
}

module.exports = getHomeworks;