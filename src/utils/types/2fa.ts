import { body } from "~/types/v3/requests/default/body";

import {authRequestData} from "~/types/v3/requests/student";


export type EDCore2FALogin = authRequestData & {
    fa: [
        {
            cn: string,
            cv: string
        }
    ]
};

export type EDCore2FAData = {
    code: 200;
    token: string;
    message: "";
    data: {
        question: string,
        propositions: Array<string>
    }
};

export interface EDCore2FAValidationRequest extends body {
    choix: string,
}

export type EDCore2FAValidationResponse = {
    code: 200;
    message: null;
    data: {
        cn: string,
        cv: string
    }
};
