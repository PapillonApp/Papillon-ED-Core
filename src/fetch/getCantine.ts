import {Session} from "~/session";
import {modStudBarcode, modStudReservations} from "~/types";


class GetCantine {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    getBarcode(): string | undefined {
        const module = this.session.findModule("CANTINE_BARCODE") as modStudBarcode;
        if(module.enable) {
            return module.params.numeroBadge;
        }
        return undefined;
    }

    getReservations(): object | undefined {
        const module = this.session.findModule("RESERVATIONS") as modStudReservations;
        if(module.enable) {
            return module.params;
        }
        return undefined;
    }

}

export {
    GetCantine
};
