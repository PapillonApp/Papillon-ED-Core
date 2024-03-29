import { API } from "./constants";
import {Session} from "./session";
import {
    SESSION_EXPIRED,
    TOKEN_INVALID,
    UNAUTHORIZED,
    WRONG_CREDENTIALS,
    INVALID_API_URL,
    OBJECT_NOT_FOUND, INVALID_BODY
} from "~/errors";
import {RequestOptions} from "~/utils/types/requests";
import {response} from "~/types/v3/responses/default/responses";

class Request {

    session: Session;
    requestOptions: RequestOptions;

    constructor(session: Session) {
        this.session = session;
        this.requestOptions = {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "EDMOBILE"
            }
        };
    }

    async blob(url: string, body: string) {
        if(this.session.isLoggedIn) this.requestOptions.headers["X-token"] = this.session._token;
        const finalUrl = API + url;
        return await fetch(finalUrl, {
            method: "POST",
            headers: this.requestOptions.headers,
            body: body
        }).then(response => response.blob());
    }

    async post(url: string, body: string) {
        if(this.session.isLoggedIn) this.requestOptions.headers["X-token"] = this.session._token;
        const finalUrl = API + url;
        return await fetch(finalUrl, {
            method: "POST",
            headers: this.requestOptions.headers,
            body: body
        })
            .then(res => res.text())
            .then(res => {
                const response = res.startsWith("{") ? JSON.parse(res) : res;
                if(typeof response != "object" && response.includes("<title>Loading...</title>")) throw INVALID_API_URL.drop();
                if (response.code == 525) {
                    throw SESSION_EXPIRED.drop();
                }
                if (response.code == 526) {
                    throw SESSION_EXPIRED.drop();
                }
                if (response.code == 520) {
                    throw TOKEN_INVALID.drop();
                }
                if (response.code == 505) {
                    throw WRONG_CREDENTIALS.drop();
                }
                if (response.code == 512) {
                    throw INVALID_BODY.drop();
                }
                if (response.code == 403) {
                    throw UNAUTHORIZED.drop(response.message);
                }
                if (response.code == 210) {
                    throw OBJECT_NOT_FOUND.drop(response.message);
                }
                return response;
            }) as Promise<response>;
    }
}

export {
    Request
};
