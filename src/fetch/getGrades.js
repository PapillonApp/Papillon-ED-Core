import axios from 'axios';
import errors from '../errors';
import { API } from '../constants'

function getGrades(token, userID) {

    let URL = `${API}/eleves/${userID}/notes.awp?verbe=get`;

    var requestOptions = {
        headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Token": token },            
    };
    let body = `data={
        "anneeScolaire": ""
    }`

    return axios.post(URL, body, requestOptions).then((response) => {
        // get grades
        if (response.data.data.code == 525) {
            throw errors.SESSION_EXPIRED.drop()
        }
        let grades = response.data.data;
        return grades;
    })
}

module.exports = getGrades;