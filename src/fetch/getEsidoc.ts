import {Session} from "~/session";
import {modStudEsidoc } from "~/types";


class GetEsidoc {

    session: Session;

    constructor(session: Session) {
        this.session = session;

    }

    isEnabled() {
        return this.session.findModule("ESIDOC").enable || false;
    }

    getParams(): Array<{ libelle: string, url: string }> | undefined {
        if(!this.isEnabled()) return undefined;
        const module = this.session.findModule("CANTINE_BARCODE") as modStudEsidoc;
        return module.params.tabParams;
    }
}

export {
    GetEsidoc
};
