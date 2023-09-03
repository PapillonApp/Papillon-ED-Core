import axios from 'axios';
import errors from '../errors';
import { API } from '../constants'

function setHomeworkStatus(token, userID, homeworkID, isDone) {

    let URL = `${API}/Eleves/${userID}/cahierdetexte.awp?verbe=put`;

    var requestOptions = {
        headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Token": token },            
    };
    // isDone : bool
    let body = `data={
      "idDevoirsEffectues": ${[isDone ? homeworkID : null]},
      "idDevoirsNonEffectues": ${[isDone ? null : homeworkID]}
    }`

    return axios.post(URL, body, requestOptions).then((response) => {
        // set homework status
        if (response.data.data.code == 525) {
            throw errors.SESSION_EXPIRED.drop()
        }
        return null;
    })
}

module.exports = setHomeworkStatus;