import {Session} from "~/session";
import bodyToString from "../utils/body";
import {gradesRes, gradesResData} from "~/types/v3";
import {gradesRequestData} from "~/types/v3/requests/student";

class GetGrades {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    fetch() {
        const url = `/eleves/${this.session.student.id}/notes.awp?verbe=get`;
        const body = {
            anneeScolaire: ""
        } as gradesRequestData;
        return this.session.request.post(url, bodyToString(body)).then((response: gradesRes) => {
            return response.data;
        }) as Promise<gradesResData>;
    }
}

export {
    GetGrades
};
