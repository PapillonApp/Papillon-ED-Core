import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {formsRes, form} from "~/types/v3";
import {formsRequestData} from "~/types/v3/requests";

class GetForms {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(annee: string = "2023-2024"): Promise<Array<form>> {
        const url = "/v3/edforms.awp?verbe=get";
        const data = {
            anneeForms: annee,
            typeEntity: "E",
            idEntity: this.session.student.id
        } as formsRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: formsRes) => response.data as Array<form>);
    }
}

export {
    GetForms
};
