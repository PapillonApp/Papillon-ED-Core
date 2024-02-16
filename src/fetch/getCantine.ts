import {Session} from "../session";


class GetCantine {

    session: Session

    constructor(session: Session) {
        this.session = session;

    }

    getBarcode() {
        const mod = this.session.findModule("CANTINE_BARCODE")
        if(mod.enable) {
            return mod.params.numeroBadge;
        } else {
            return null;
        }
    }

    getReservations() {
        const mod = this.session.findModule("RESERVATIONS")
        if(mod.enable) {
            return mod.params;
        } else {
            return null;
        }
    }
    
}

export {
    GetCantine
}
