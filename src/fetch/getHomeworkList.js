import axios from 'axios';
import errors from '../errors';
import { API } from '../constants'

function getHomeworkList(token, userID) {

    let URL = `${API}/Eleves/${userID}/cahierdetexte.awp?verbe=get`;

    var requestOptions = {
        headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Token": token },            
    };
    let body = `data={}`

    return axios.post(URL, body, requestOptions).then((response) => {
        // get homework list
        if (response.data.data.code == 525) {
            throw errors.SESSION_EXPIRED.drop()
        }
        let homework = response.data.data;
        return homework;
    })
}

module.exports = getHomeworkList;