import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {textbookDateAssignement, textbookDateRes, textbookDateResData, textbookRes} from "~/types/v3"

class GetHomeworks {

    session: Session

    constructor(session: Session) {
        this.session = session
    }

    fetch() {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte.awp?verbe=get`
        const data = {}
        return this.session.request.post(url, bodyToString(data)).then(response => response as textbookRes)
    }

    getByDay(day: string) {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte/${day}.awp?verbe=get`
        const data = {}
        return this.session.request.post(url, bodyToString(data)).then((response: textbookDateRes) => {

            if (response.code == 200) {
                const homeworks = response.data as textbookDateResData

                homeworks.matieres.forEach((homework: textbookDateAssignement, index: number) => {
                    const aFaire= homework.aFaire
                    if (!aFaire) return
                    const htmlContent = aFaire.contenu
                    const span = document.createElement("span");
                    span.innerHTML = htmlContent;
                    // TODO: `contenuTexte` ou `contenu`
                    aFaire.contenu = [span.textContent || span.innerText].toString().replace(/ +/g," ");
                    homeworks.matieres[index].aFaire = aFaire
                });

                return homeworks;
            } else {
                return {
                    date: "",
                    matieres: []
                } as textbookDateResData
            }
        })
    }

    setStatus(homeworkID: number, isDone: boolean) {
        const url = `/E/${this.session.student.id}/cahierdetexte.awp?verbe=put`
        const data = {
            "idDevoirsEffectues": [isDone ? homeworkID : null],
            "idDevoirsNonEffectues": [isDone ? null : homeworkID]
        }
        return this.session.request.post(url, bodyToString(data))
    }
}

export {
    GetHomeworks
}
