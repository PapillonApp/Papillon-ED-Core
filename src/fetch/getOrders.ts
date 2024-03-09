import { Session } from "~/session";
import bodyToString from "~/utils/body";
import {
    ordersResData,
    ordersResSuccess,
    schoolMenuResData,
    schoolMenuResSuccess,
    startOrderResData,
    startOrderResSuccess
} from "~/types";
import {body} from "~/types/v3/requests/default/body";


class GetOrders {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    isEnabled(): boolean {
        return this.session.findModule("COMMANDE_PASSAGE").enable || false;
    }

    async fetchSchoolMenu(): Promise<schoolMenuResData | undefined> {
        if(!this.isEnabled()) return undefined;
        const data = {} as body;
        const url = "/menusRestaurationScolaire.awp?verbe=get";
        return await this.session.request.post(url, bodyToString(data)).then((response: schoolMenuResSuccess) => response.data);
    }

    async fetchOrders(): Promise<ordersResData | undefined> {
        if(!this.isEnabled()) return undefined;
        const data = {} as body;
        const url = `/E/${this.session.student.id}/commandesPassage.awp?verbe=get`;
        return await this.session.request.post(url, bodyToString(data)).then((response: ordersResSuccess) => response.data);
    }

    async startCommand(passageId: number, date: string): Promise<startOrderResData> {
        const splitDate = date.split("-");
        const formattedDate = `${splitDate[0]}${splitDate[1]}${splitDate[2]}`;
        const data = {} as body;
        const url = `/E/${this.session.student.id}/commandesPassage/pointsDePassage/${passageId}/${formattedDate}.awp?verbe=get`;
        return await this.session.request.post(url, bodyToString(data)).then((response: startOrderResSuccess) => response.data);
    }
}

export {
    GetOrders
};
