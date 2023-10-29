

class getCantine {
    constructor(session) {
        this.session = session;

    }

    getBarcode() {
        let mod = this.session.findModule("CANTINE_BARCODE")
        if(mod.enable) {
            return mod.params.numeroBadge;
        } else {
            return null;
        }
    }

    getReservations() {
        let mod = this.session.findModule("RESERVATIONS")
        if(mod.enable) {
            return mod.params;
        } else {
            return null;
        }
    }
    
}

module.exports = getCantine;