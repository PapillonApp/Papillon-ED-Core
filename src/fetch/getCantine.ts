import {Session} from "~/session";


class GetCantine {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    getBarcode() {
        const module = this.session.findModule("CANTINE_BARCODE");
        if(module.enable) {
            return module.params.numeroBadge;
        } else {
            return null;
        }
    }

    getReservations() {
        const module = this.session.findModule("RESERVATIONS");
        if(module.enable) {
            return module.params;
        } else {
            return null;
        }
    }

}

export {
    GetCantine
};
