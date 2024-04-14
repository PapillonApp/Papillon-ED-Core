import bodyToString from "~/utils/body";
import {Session} from "~/session";
import {schoolLifeRequestData} from "~/types/v3/requests/student";
import {schoolLifeRes, EDCoreSchoolLifeResData} from "~/utils/types/schoollife";
import {dateStringAsTimeInterval} from "~/utils/dates";

class GetSchoolLife {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    async fetch(): Promise<EDCoreSchoolLifeResData> {
        const url = `/eleves/${this.session.student.id}/viescolaire.awp`;
        const data = {} as schoolLifeRequestData;
        return await this.session.request.get(url, bodyToString(data)).then((response: schoolLifeRes) => {
            const res = response.data as EDCoreSchoolLifeResData;
            for (let i = 0; i < res.absencesRetards.length; i++) {
                res.absencesRetards[i].interval = dateStringAsTimeInterval(res.absencesRetards[i].displayDate);
            }
            return res;
        }) as EDCoreSchoolLifeResData;
    }
}

export {
    GetSchoolLife
};

