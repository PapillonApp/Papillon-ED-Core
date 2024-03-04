import { Session } from "~/session";
import bodyToString from "~/utils/body";

class GetOrders {
    
    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    isEnabled() {
        return this.session.findModule("COMMANDE_PASSAGE").enable || false;
    }

    async fetchSchoolMenu() {
        if(!this.isEnabled()) return undefined;
        let data = {};
        let url = "/menusRestaurationScolaire.awp?verbe=get"
        return await this.session.request.post(url, bodyToString(data)).then((response) => {
            return response.data;
        })
    }

    async fetchOrders() {
        if(!this.isEnabled()) return undefined;
        let data = {};
        let url = `/E/${this.session.student.id}/commandesPassage.awp?verbe=get`
        return await this.session.request.post(url, bodyToString(data)).then((response) => {
            return response.data;
        })
    }

    async startCommand(passageId: number, date: string) {
        let splittedDate = date.split("-");
        let formattedDate = `${splittedDate[0]}${splittedDate[1]}${splittedDate[2]}`;
        let data = {};
        let url = `/E/${this.session.student.id}/commandesPassage/pointsDePassage/${passageId}/${formattedDate}.awp?verbe=get`
        return await this.session.request.post(url, bodyToString(data)).then((response) => {
            return response.data;
        })
    }
}


export {
    GetOrders
};