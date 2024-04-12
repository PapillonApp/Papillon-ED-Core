import {API, VERSION} from "./constants";
import {Session} from "./session";
import {
    A2F_ERROR,
    INVALID_API_URL,
    INVALID_BODY,
    INVALID_VERSION,
    OBJECT_NOT_FOUND,
    SESSION_EXPIRED,
    TOKEN_INVALID,
    UNAUTHORIZED,
    WRONG_CREDENTIALS
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

    /**
     *
     * @param url   The path to fetch
     * @param body  The string formatted body data
     * @param params    A string containing extra parameters (e.g "foo=bar&mode=auto")
     */
    async post(url: string, body: string, params?: string) {
        const paramsString = params ? "&" + params: "";
        const finalUrl = `${API}${url}${url.includes("?") ? `&verbe=post&v=${VERSION}${paramsString}` : `?verbe=post&v=${VERSION}${paramsString}`}`;
        return await this.request(finalUrl, body);
    }

    /**
     *
     * @param url   The path to fetch
     * @param body  The string formatted body data
     * @param params    A string containing extra parameters (e.g "foo=bar&mode=auto")
     */
    async get(url: string, body: string, params?: string) {
        const paramsString = params ? "&" + params: "";
        const finalUrl = `${API}${url}${url.includes("?") ? `&verbe=get&v=${VERSION}${paramsString}` : `?verbe=get&v=${VERSION}${paramsString}`}`;
        return await this.request(finalUrl, body);
    }

    /**
     *
     * @param url   The path to fetch
     * @param body  The string formatted body data
     * @param params    A string containing extra parameters (e.g "foo=bar&mode=auto")
     */
    async delete(url: string, body: string, params?: string) {
        const paramsString = params ? "&" + params: "";
        const finalUrl = `${API}${url}${url.includes("?") ? `&verbe=delete&v=${VERSION}${paramsString}` : `?verbe=delete&v=${VERSION}${paramsString}`}`;
        return await this.request(finalUrl, body);
    }

    /**
     *
     * @param url   The path to fetch
     * @param body  The string formatted body data
     * @param params    A string containing extra parameters (e.g "foo=bar&mode=auto")
     */
    async put(url: string, body: string, params?: string) {
        const paramsString = params ? "&" + params: "";
        const finalUrl = `${API}${url}${url.includes("?") ? `&verbe=put&v=${VERSION}${paramsString}` : `?verbe=put&v=${VERSION}${paramsString}`}`;
        return await this.request(finalUrl, body);
    }

    async request(url: string, body: string) {
        if(this.session.isLoggedIn) this.requestOptions.headers["X-token"] = this.session._token;
        return await fetch(url, {
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
                if(response.code == 250) {
                    throw A2F_ERROR.drop();
                }
                if(response.code == 517) {
                    throw INVALID_VERSION.drop();
                }
                return response;
            }) as Promise<response>;
    }
}

export {
    Request
};
