import {Session} from "~/session";
import bodyToString from "../utils/body";
import { cloudRes, cloudResFolder } from "~/types/v3";
import { body } from "~/types/v3/requests/default/body";

class GetCloud {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(): Promise<cloudResFolder> {
        const url = `/cloud/E/${this.session.student.id}.awp?verbe=get`;
        const body = {} as body;
        return await this.session.request.post(url, bodyToString(body)).then((response: cloudRes) => {
            return response.data;
        }) as Promise<cloudResFolder>;
    }
}

export {
    GetCloud
};
