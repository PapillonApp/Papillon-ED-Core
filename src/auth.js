import axios from 'axios';
import errors from './errors';

const EDAPI = "https://api.ecoledirecte.com/v3"

function login(username, password) {
    var requestOptions = {
        headers: { "Content-Type": "application/x-www-form-urlencoded", "x-token": "" },
    };
    var body = `data={
        "uuid": "",
        "identifiant": "${username}",
        "motdepasse": "${password}",
        "isReLogin": false
    }`

    return axios.post(EDAPI + "/login.awp", body, requestOptions).then(data => {
        let rsp = data.data
        if(!rsp.token) {
            if(rsp.code == 505) {
                throw errors.WRONG_CREDENTIALS.drop()
            }
        } else {
            let token = rsp.token; //token
            let user = rsp.data.accounts[0]; //account info
            
            return { token, user }
        }
    })
}

module.exports = {
    login,

}