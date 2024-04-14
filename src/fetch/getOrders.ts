import { Session } from "~/session";
import bodyToString from "~/utils/body";
import {
    detailedArticle,
    emptyRes,
    orderPlacedResData,
    orderPlacedResSuccess,
    ordersResData,
    ordersResSuccess,
    startOrderResData,
    startOrderResSuccess
} from "~/types";
import {body} from "~/types/v3/requests/default/body";
import {orderRequestData} from "~/types/v3/requests";


class GetOrders {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    isEnabled(): boolean {
        return this.session.findModule("COMMANDE_PASSAGE").enable || false;
    }

    async fetchOrders(): Promise<ordersResData | undefined> {
        if(!this.isEnabled()) return undefined;
        const data = {} as body;
        const url = `/E/${this.session.student.id}/commandesPassage.awp`;
        return await this.session.request.get(url, bodyToString(data)).then((response: ordersResSuccess) => response.data);
    }

    /**
     *
     * @param placeId - the id of "point de passage" (probably means place)
     * @param date - a YYYY-MM-DD date like "2024-01-01"
     */
    async startOrder(placeId: number, date: string): Promise<startOrderResData> {
        const splitDate = date.split("-");
        const formattedDate = `${splitDate[0]}${splitDate[1]}${splitDate[2]}`;
        const data = {} as body;
        const url = `/E/${this.session.student.id}/commandesPassage/pointsDePassage/${placeId}/${formattedDate}.awp`;
        return await this.session.request.get(url, bodyToString(data)).then((response: startOrderResSuccess) => response.data);
    }

    /**
     *
     * @param articles - the list of article to order
     * @param hour - a 24 hours like "12:00" (hour to get the order)
     * @param date - a YYYY-MM-DD date like "2024-01-01"
     * @param placeId - the id of "point de passage" (probably means place)
     */
    async order(articles: Array<detailedArticle>, hour: string, date: string, placeId: number): Promise<orderPlacedResData> {
        const url = `/E/${this.session.student.id}/commandesPassage.awp`;
        const data = {
            articles: articles,
            creneau: hour,
            date: date,
            pointDePassage: placeId
        } as orderRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: orderPlacedResSuccess) => response.data);
    }

    async deleteOrder(orderId: number): Promise<emptyRes> {
        const url = `/E/${this.session.student.id}/commandesPassage.awp/${orderId}.awp`;
        const data = {} as body;
        return await this.session.request.delete(url, bodyToString(data)).then((response: emptyRes) => response);
    }
}

export {
    GetOrders
};
