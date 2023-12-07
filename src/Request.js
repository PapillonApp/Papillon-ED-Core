const { API } = require("./constants")
const errors = require("./errors")

module.exports = class Request {
    constructor(session) {
        this.session = session;
        this.ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
        this.requestOptions = {
            headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/x-www-form-urlencoded", },            
        };
    }

    get() {

    }

    post(url, body) {
        if(this.session.isLoggedIn) this.requestOptions.headers["X-Token"] = this.session._token;
        let finalUrl = API + url// + "&v=4.46.1"
        return fetch(finalUrl, {
            method: "POST",
            //mode: "cors",
            headers: this.requestOptions.headers,
            body: body
        }).then(res => res.text())
        .then(res => {
            let response = res.startsWith("{") ? JSON.parse(res) : res;
            if (response.code == 525) {
                throw errors.SESSION_EXPIRED.drop()
            }
            if (response.code == 520) {
                throw errors.TOKEN_INVALID.drop()
            }
            if (response.code == 505) {
                throw errors.WRONG_CREDENTIALS.drop()
            }
            if (response.code == 403) {
                throw errors.UNAUTHORIZED.drop(response.message)
            }
            return response;
        })
    }

}