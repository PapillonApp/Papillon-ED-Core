import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {timetableRes} from "~/types/v3";
import {timetableCourseList} from "~/utils/types/timetable";
import {timetableRequestData} from "~/types/v3/requests/student";

class GetTimetable {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetchByDay(date: string): Promise<timetableCourseList> {
        const url = `/E/${this.session.student.id}/emploidutemps.awp?verbe=get`;
        const data = {
            dateDebut: date,
            dateFin: date,
            avecTrous: false
        } as timetableRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: timetableRes) => {
            return {
                ...response.data
            };
        }) as Promise<timetableCourseList>;
    }

    async fetchByDate(startDate: string, endDate: string): Promise<timetableCourseList> {
        const url = `/E/${this.session.student.id}/emploidutemps.awp?verbe=get`;
        const data = {
            dateDebut: startDate,
            dateFin: endDate,
            avecTrous: false
        } as timetableRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: timetableRes) => {
            return {
                ...response.data
            };
        }) as Promise<timetableCourseList>;
    }
}

export {
    GetTimetable
};
