import {Session} from "~/session";
import {modStudBarcode, modStudReservations, schoolMenu, schoolMenuResData, schoolMenuResSuccess} from "~/types";
import {body} from "~/types/v3/requests/default/body";
import bodyToString from "~/utils/body";


class Menu {

    semaine: number;
    libelle: string;
    documentId: number;

    constructor(document: schoolMenu) {
        this.semaine = document.semaine;
        this.libelle = document.doc.libelle;
        this.documentId = document.doc.id;
    }

    async getBlob() {
      // TODO get document blob
    }
}


class GetCantine {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetchSchoolMenu(): Promise<Array<Menu>> {
        const data = {} as body;
        const url = "/menusRestaurationScolaire.awp?verbe=get";
        return await this.session.request.post(url, bodyToString(data)).then((response: schoolMenuResSuccess) => {
            const menuList: Array<Menu> = [];
            for (const menu of response.data) {
                menuList.push(new Menu(menu))
            }
            return menuList
        });
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
