import axios from 'axios';
import errors from '../errors';

const EDAPI = "https://api.ecoledirecte.com/v3"

function getTimetable(token, userID, date) {

    let URL = `${EDAPI}/E/${userID}/emploidutemps.awp?verbe=get`;

    var requestOptions = {
        headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Token": token },            
    };
    let body = `data={
        "dateDebut": "${date}",
        "dateFin": "${date}",
        "avecTrous": false
    }`

    return axios.post(URL, body, requestOptions).then((response) => {
        // get timetable
        if (response.data.data.code == 525) {
            throw errors.SESSION_EXPIRED.drop()
        }
        let timetable = response.data.data;
        return timetable;
    })
}

module.exports = getTimetable;