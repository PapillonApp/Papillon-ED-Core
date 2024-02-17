import {MODULE_DISABLE} from  "~/errors";
import {Session} from "~/session";
import bodyToString from "~/utils/body";

class GetDigitalManuals {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    fetch() {
        if(!this.session.findModule("MANUELS_SCOLAIRES").enable) throw MODULE_DISABLE.drop("MANUELS_SCOLAIRES");
        const url = `/Eleves/${this.session.student.id}/manuelsNumeriques.awp?verbe=get`;
        const data = {};
        return this.session.request.post(url, bodyToString(data));
    }

}

export {
    GetDigitalManuals
};
