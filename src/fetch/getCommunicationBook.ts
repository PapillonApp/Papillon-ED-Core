import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {communicationBookRequestData} from "~/types/v3/requests";
import {
    communicationBookResData,
    communicationBookRes
} from "~/types/v3";

class GetCommunicationBook {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(): Promise<communicationBookResData> {
        const url = `/E/${this.session.student.id}/eleveCarnetCorrespondance.awp?verbe=get`;
        const data = {} as communicationBookRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: communicationBookRes) => response.data as communicationBookResData);
    }

}

export {
    GetCommunicationBook
};
