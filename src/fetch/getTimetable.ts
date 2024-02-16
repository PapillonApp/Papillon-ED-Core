import {Session} from "~/session";
import bodyToString from "~/utils/body";

class GetTimetable {

    session: Session

    constructor(session: Session) {
        this.session = session;
    }

    fetchByDay(date: string) {
        const url = `/E/${this.session.student.id}/emploidutemps.awp?verbe=get`
        const data = {
            "dateDebut": date,
            "dateFin": date,
            "avecTrous": false
        }
        return this.session.request.post(url, bodyToString(data)).then(r => {
            return {
                ...r.data
            }
        })
    }

    fetchByDate(startDate: string, endDate: string) {
        const url = `/E/${this.session.student.id}/emploidutemps.awp?verbe=get`
        const data = {
            "dateDebut": startDate,
            "dateFin": endDate,
            "avecTrous": false
        }
        return this.session.request.post(url, bodyToString(data)).then(r => {
            return {
                ...r.data
            }
        })
    }
}

export {
    GetTimetable
}
