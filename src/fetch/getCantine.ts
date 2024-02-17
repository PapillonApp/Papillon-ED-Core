import {Session} from "~/session";
import {modStudBarcode, modStudReservations} from "~/types";


class GetCantine {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    getBarcode() {
        const module = this.session.findModule("CANTINE_BARCODE") as modStudBarcode;
        if(module.enable) {
            return module.params.numeroBadge;
        } else {
            return null;
        }
    }

    getReservations() {
        const module = this.session.findModule("RESERVATIONS") as modStudReservations;
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
