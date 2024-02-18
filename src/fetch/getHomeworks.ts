import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {textbookDateAssignement, textbookDateRes, textbookDateResData, textbookRes} from "~/types/v3";
import {textbookRequestData, textbookSetDoneStatusRequestData} from "~/types/v3/requests/student";

class GetHomeworks {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(): Promise<textbookRes> {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte.awp?verbe=get`;
        const data = {} as textbookRequestData;
        return await this.session.request.post(url, bodyToString(data)).then(response => response as textbookRes);
    }

    async getByDay(day: string): Promise<textbookDateResData> {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte/${day}.awp?verbe=get`;
        const data = {} as textbookRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: textbookDateRes) => {

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
        });
    }

    async setStatus(homeworkID: number, isDone: boolean): Promise<unknown> {
        const url = `/E/${this.session.student.id}/cahierdetexte.awp?verbe=put`;
        const data = {
            idDevoirsEffectues: [isDone ? homeworkID : null],
            idDevoirsNonEffectues: [isDone ? null : homeworkID]
        } as textbookSetDoneStatusRequestData;
        return await this.session.request.post(url, bodyToString(data));
    }
}

export {
    GetHomeworks
};
