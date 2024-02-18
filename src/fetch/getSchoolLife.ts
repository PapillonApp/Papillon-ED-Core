import bodyToString from "~/utils/body";
import {Session} from "~/session";
import {schoolLifeRequestData} from "~/types/v3/requests/student";
import {schoolLifeRes} from "~/types";

class GetSchoolLife {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    async fetch() {
        const url = `/eleves/${this.session.student.id}/viescolaire.awp?verbe=get`;
        const data = {} as schoolLifeRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: schoolLifeRes) => {
            return response.data
        }) as Promise<schoolLifeRes>;
    }
}

export {
    GetSchoolLife
};
