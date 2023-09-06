//import { API } from './constants'
const { API } = require("./constants")
const errors = require("./errors")

module.exports = class Request {
    constructor(session) {
        this.session = session;
        this.requestOptions = {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },            
        };
    }

    get() {

    }

    post(url, body) {
        if(this.session.isLoggedIn) this.requestOptions.headers["X-Token"] = this.session._token;
        let finalUrl = API + url
        return fetch(finalUrl, {
            method: "POST",
            headers: this.requestOptions.headers,
            body: body
        }).then(res => res.json())
        .then(response => {
            if (response.code == 525) {
                throw errors.SESSION_EXPIRED.drop()
            }
            if (response.code == 520) {
                throw errors.TOKEN_INVALID.drop()
            }
            if (response.code == 505) {
                throw errors.WRONG_CREDENTIALS.drop()
            }
            return response;
        })
    }

}