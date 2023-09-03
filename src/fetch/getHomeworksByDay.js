import axios from 'axios';
import errors from '../errors';
import { API } from '../constants'

// get all homeworks of requested day, and extract imbedded HTML into text content
function getHomeworksByDay(token, userID, day) {

    // format of day : "2023-01-09"
    let URL = `${API}/Eleves/${userID}/cahierdetexte/${day}.awp?verbe=get`;

    var requestOptions = {
        headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Token": token },            
    };
    let body = `data={}`

    return axios.post(URL, body, requestOptions).then((response) => {
        // get homework list
        if (response.data.data.code == 525) {
            throw errors.SESSION_EXPIRED.drop()
        }
        let homeworks = response.data.data;

        // extract HTML content into text content
        homeworks.matieres.forEach((homework, index) => {
            const htmlContent = homework.aFaire.contenu;
            var span = document.createElement('span');
            span.innerHTML = htmlContent;
            homeworks.matieres[index].aFaire.contenuTexte = [span.textContent || span.innerText].toString().replace(/ +/g,' ');
        });

        return homeworks;
    })
}

module.exports = getHomeworksByDay;