import {Session} from "../session";
import bodyToString from "../utils/body";
import {GradesRequestBody, GradesRequestResponse} from "../types/grades";

class GetGrades {

    session: Session

    constructor(session: Session) {
        this.session = session;
    }

    fetch() {
        const url = `/eleves/${this.session.student.id}/notes.awp?verbe=get`
        const body = {
            anneeScolaire: ""
        } as GradesRequestBody
        return this.session.request.post(url, bodyToString(body)).then((r: GradesRequestResponse) => {
            return r.data
        })
    }
}

export {
    GetGrades
}
