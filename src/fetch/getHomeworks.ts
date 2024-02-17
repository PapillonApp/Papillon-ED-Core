import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {Homework, HomeworkRequestResponse} from "~/types/homeworks";

class GetHomeworks {

    session: Session

    constructor(session: Session) {
        this.session = session
    }

    fetch() {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte.awp?verbe=get`
        const data = {}
        return this.session.request.post(url, bodyToString(data))
    }

    getByDay(day: string) {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte/${day}.awp?verbe=get`
        const data = {}
        return this.session.request.post(url, bodyToString(data)).then((response: HomeworkRequestResponse) => {

            const homeworks = response.data;

            homeworks.matieres.forEach((homework: Homework, index: number) => {
                const htmlContent = homework.aFaire.contenu;
                const span = document.createElement("span");
                span.innerHTML = htmlContent;
                homeworks.matieres[index].aFaire.contenuTexte = [span.textContent || span.innerText].toString().replace(/ +/g," ");
            });

            return homeworks;
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
