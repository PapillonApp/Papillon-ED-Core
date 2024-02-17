import { API } from "./constants";
import {Session} from "./session";
import {SESSION_EXPIRED, TOKEN_INVALID, UNAUTHORIZED, WRONG_CREDENTIALS} from "~/errors";
import {RequestOptions} from "~/utils/types/requests";

class Request {

    session: Session;
    ua: string;
    requestOptions: RequestOptions;

    constructor(session: Session) {
        this.session = session;
        this.ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36";
        this.requestOptions = {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
    }

    get() {

    }

    post(url: string, body: string) {
        if(this.session.isLoggedIn) this.requestOptions.headers["X-token"] = this.session._token;
        const finalUrl = API + url;
        return fetch(finalUrl, {
            method: "POST",
            headers: this.requestOptions.headers,
            body: body
        }).then(res => res.text())
            .then(res => {
                const response = res.startsWith("{") ? JSON.parse(res) : res;
                if (response.code == 525) {
                    throw SESSION_EXPIRED.drop();
                }
                if (response.code == 520) {
                    throw TOKEN_INVALID.drop();
                }
                if (response.code == 505) {
                    throw WRONG_CREDENTIALS.drop();
                }
                if (response.code == 403) {
                    throw UNAUTHORIZED.drop(response.message);
                }
                return response;
            });
    }
}

export {
    Request
};
