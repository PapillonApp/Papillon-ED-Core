import axios from 'axios';
import errors from '../errors';

const EDAPI = "https://api.ecoledirecte.com/v3"

function getSchoollife(token, userID) {

    let URL = `${EDAPI}/eleves/${userID}/viescolaire.awp?verbe=get`;

    var requestOptions = {
        headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Token": token },            
    };
    let body = `data={}`

    return axios.post(URL, body, requestOptions).then((response) => {
        if (response.data.data.code) {
            if (response.data.data.code == 525) {
                throw errors.SESSION_EXPIRED.drop()
            }
        }

        let schoollife = response.data.data;

        return {
            absencesRetards: schoollife.absencesRetards,
            sanctionsEncouragements: schoollife.sanctionsEncouragements
        };
    })
}

module.exports = getSchoollife;