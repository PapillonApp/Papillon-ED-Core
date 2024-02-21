import {body} from "~/types/v3/requests/default/body";

function bodyToString(object: body) {
    return "data=" + JSON.stringify(object);
}

export default bodyToString;
