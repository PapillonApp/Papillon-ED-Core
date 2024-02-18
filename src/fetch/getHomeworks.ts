import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {textbookDateAssignement, textbookDateRes, textbookDateResData, textbookRes} from "~/types/v3";
import {textbookRequestData, textbookSetDoneStatusRequestData} from "~/types/v3/requests/student";

class GetHomeworks {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    fetch() {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte.awp?verbe=get`;
        const data = {} as textbookRequestData;
        return this.session.request.post(url, bodyToString(data)).then(response => response as textbookRes) as Promise<textbookRes>;
    }

    getByDay(day: string) {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte/${day}.awp?verbe=get`;
        const data = {} as textbookRequestData;
        return this.session.request.post(url, bodyToString(data)).then((response: textbookDateRes) => {

            if (response.code == 200) {
                const homeworks = response.data as textbookDateResData;

                homeworks.matieres.forEach((homework: textbookDateAssignement, index: number) => {
                    const aFaire= homework.aFaire;
                    if (!aFaire) return;
                    const htmlContent = aFaire.contenu;
                    const span = document.createElement("span");
                    span.innerHTML = htmlContent;
                    // TODO: `contenuTexte` ou `contenu`
                    aFaire.contenu = [span.textContent || span.innerText].toString().replace(/ +/g," ");
                    homeworks.matieres[index].aFaire = aFaire;
                });

                return homeworks;
            } else {
                return {
                    date: "",
                    matieres: []
                } as textbookDateResData;
            }
        }) as Promise<textbookDateResData>;
    }

    setStatus(homeworkID: number, isDone: boolean) {
        const url = `/E/${this.session.student.id}/cahierdetexte.awp?verbe=put`;
        const data = {
            idDevoirsEffectues: [isDone ? homeworkID : null],
            idDevoirsNonEffectues: [isDone ? null : homeworkID]
        } as textbookSetDoneStatusRequestData;
        return this.session.request.post(url, bodyToString(data)) as unknown;
    }
}

export {
    GetHomeworks
};
