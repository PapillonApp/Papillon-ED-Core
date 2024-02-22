import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {studentDocsRes, studentDocsResData} from "~/types/v3";
import { body } from "~/types/v3/requests/default/body";

class GetDocuments {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    /** * @param {string} année des documents Rien pour l'année actuelle, YYYY-YYYY pour l'année scolaire YYYY-YYYY. */
    async fetch(archive: string = ""): Promise<studentDocsResData> {
        const url = `/elevesDocuments.awp?archive=${archive}&verbe=get`;
        const data = {} as body;
        return await this.session.request.post(url, bodyToString(data)).then((response: studentDocsRes) => response.data as studentDocsResData);
    }
}

export {
    GetDocuments
};
