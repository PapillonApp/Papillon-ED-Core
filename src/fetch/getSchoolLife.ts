import bodyToString from "~/utils/body";
import {Session} from "~/session";
import {schoolLifeRequestData} from "~/types/v3/requests/student";
import {schoolLifeRes, EDCoreSchoolLifeResData} from "~/utils/types/schoollife";
import {Timeinterval} from "~/utils/types/timeinterval";

function dateAsISO860(str: string): string {
    const parts = str.split(" ");
    let month = "01";
    switch (parts[2]) {
        case "janvier":
            month = "01";
            break;
        case "février":
            month = "02";
            break;
        case "mars":
            month = "03";
            break;
        case "avril":
            month = "04";
            break;
        case "mai":
            month = "05";
            break;
        case "juin":
            month = "06";
            break;
        case "juillet":
            month = "07";
            break;
        case "août":
            month = "08";
            break;
        case "septembre":
            month = "09";
            break;
        case "octobre":
            month = "10";
            break;
        case "novembre":
            month = "11";
            break;
        case "décembre":
            month = "12";
            break;
    }
    return parts[3] + "-" + month + "-" + parts[1] + "T" + parts[5] + ":00.000+02:00";
}

function dateStringAsTimeInterval(str: string): Timeinterval | undefined {
    if (str.includes("du")) {
        const parts = str.split("au");
        const start = dateAsISO860(parts[0].replace("du", "").trim());
        const end = dateAsISO860(parts[1].trim());
        return {start: start, end: end} as Timeinterval;
    }
    if (str.includes("le")) {
        const parts = str.split("à");
        const firstDate = parts[0].replace("le", "").trim();
        const secondDate = parts[0].split("de")[0].replace("le", "").trim() + " de " + parts[1].trim();
        const start = dateAsISO860(firstDate);
        const end = dateAsISO860(secondDate);
        return {start: start, end: end} as Timeinterval;
    }
    return undefined;
}

class GetSchoolLife {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    async fetch(): Promise<EDCoreSchoolLifeResData> {
        const url = `/eleves/${this.session.student.id}/viescolaire.awp?verbe=get`;
        const data = {} as schoolLifeRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: schoolLifeRes) => {
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

