import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {
    textbookDateAssignement,
    textbookDateRes,
    textbookDateResData,
    textbookRes
} from "~/types/v3";
import {textbookRequestData, textbookSetDoneStatusRequestData} from "~/types/v3/requests/student";

class GetHomeworks {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    #transformHomeworks(homeworks: Array<textbookDateAssignement>, removeHTMLTags: boolean): Array<textbookDateAssignement> {
        homeworks.forEach((homework: textbookDateAssignement, index: number) => {
            const aFaire = homework.aFaire;
            if (!aFaire) return;
            const htmlContent = atob(aFaire.contenu);

            if (removeHTMLTags) {
                const span = document.createElement("span");
                span.innerHTML = htmlContent;
                aFaire.contenu = span.innerText.replace(/ +/g," ");
            } else {
                aFaire.contenu = htmlContent;
            }

            homeworks[index].aFaire = aFaire;
        });

        return homeworks;
    }

    async fetch(): Promise<textbookRes> {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte.awp?verbe=get`;
        const data = {} as textbookRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: textbookRes) => response as textbookRes);
    }

    async getByDay(day: string, removeHTMLTags: boolean = true): Promise<textbookDateResData> {
        const url = `/Eleves/${this.session.student.id}/cahierdetexte/${day}.awp?verbe=get`;
        const data = {} as textbookRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: textbookDateRes) => {
            if (response.code == 200) {
                const data = response.data as textbookDateResData;
                const homeworks = data.matieres;
                data.matieres = this.#transformHomeworks(homeworks, removeHTMLTags);
                return data;
            }
            return {
                date: "",
                matieres: []
            } as textbookDateResData;
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
