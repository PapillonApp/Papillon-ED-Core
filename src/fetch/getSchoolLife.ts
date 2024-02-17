import bodyToString from "~/utils/body";
import {Session} from "~/session";

class GetSchoolLife {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    fetch() {
        const url = `/eleves/${this.session.student.id}/viescolaire.awp?verbe=get`;
        const data = {};
        return this.session.request.post(url, bodyToString(data)).then((response) => {
            return {
                absencesRetards: res.data.absencesRetards,
                sanctionsEncouragements: res.data.sanctionsEncouragements
            };
        });
    }
}

export {
    GetSchoolLife
};
