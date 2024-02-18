import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {timetableRes} from "~/types/v3";
import {timetableCourseList} from "~/utils/types/timetable";

class GetTimetable {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    fetchByDay(date: string) {
        const url = `/E/${this.session.student.id}/emploidutemps.awp?verbe=get`;
        const data = {
            "dateDebut": date,
            "dateFin": date,
            "avecTrous": false
        };
        return this.session.request.post(url, bodyToString(data)).then((response: timetableRes) => {
            return {
                ...response.data
            };
        }) as Promise<timetableCourseList>;
    }

    fetchByDate(startDate: string, endDate: string) {
        const url = `/E/${this.session.student.id}/emploidutemps.awp?verbe=get`;
        const data = {
            "dateDebut": startDate,
            "dateFin": endDate,
            "avecTrous": false
        };
        return this.session.request.post(url, bodyToString(data)).then((response: timetableRes) => {
            return {
                ...response.data
            };
        }) as Promise<timetableCourseList>;
    }
}

export {
    GetTimetable
};
