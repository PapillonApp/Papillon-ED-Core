import {MODULE_DISABLE} from  "~/errors";
import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {manualsRequestData} from "~/types/v3/requests/student";
import {manualsRes} from "~/types";

class GetDigitalManuals {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    async fetch(): Promise<manualsRes> {
        if(!this.session.findModule("MANUELS_SCOLAIRES").enable) throw MODULE_DISABLE.drop("MANUELS_SCOLAIRES");
        const url = `/Eleves/${this.session.student.id}/manuelsNumeriques.awp?verbe=get`;
        const data = {} as manualsRequestData;
        return await this.session.request.post(url, bodyToString(data)).then(response => response as manualsRes);
    }

}

export {
    GetDigitalManuals
};
