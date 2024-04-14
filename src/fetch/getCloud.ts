import {Session} from "~/session";
import bodyToString from "../utils/body";
import { cloudRes, cloudResFolder } from "~/types/v3";
import { body } from "~/types/v3/requests/default/body";

class GetCloud {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(): Promise<Array<cloudResFolder>> {
        const url = `/cloud/E/${this.session.student.id}.awp`;
        const body = {} as body;
        return await this.session.request.get(url, bodyToString(body)).then((response: cloudRes) => {
            return response.data;
        }) as Promise<Array<cloudResFolder>>;
    }
}

export {
    GetCloud
};
