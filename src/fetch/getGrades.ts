import {Session} from "~/session";
import bodyToString from "../utils/body";
import {gradesRes, gradesResData} from "~/types/v3";
import {gradesRequestData} from "~/types/v3/requests/student";
import {decodeString} from "~/utils/base64";

class GetGrades {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(): Promise<gradesResData> {
        const url = `/eleves/${this.session.student.id}/notes.awp?verbe=get`;
        const body = {
            anneeScolaire: ""
        } as gradesRequestData;
        return await this.session.request.post(url, bodyToString(body)).then((response: gradesRes) => {
            const data = response.data as gradesResData;
            data.parametrage.libelleEval1 = decodeString(data.parametrage.libelleEval1)
            data.parametrage.libelleEval2 = decodeString(data.parametrage.libelleEval2)
            data.parametrage.libelleEval3 = decodeString(data.parametrage.libelleEval3)
            data.parametrage.libelleEval4 = decodeString(data.parametrage.libelleEval4)
            data.parametrage.libelleEvalCompNum1 = decodeString(data.parametrage.libelleEvalCompNum1)
            data.parametrage.libelleEvalCompNum2 = decodeString(data.parametrage.libelleEvalCompNum2)
            data.parametrage.libelleEvalCompNum3 = decodeString(data.parametrage.libelleEvalCompNum3)
            return data;
        }) as gradesResData;
    }
}

export {
    GetGrades
};
