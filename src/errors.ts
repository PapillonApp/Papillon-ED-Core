import {ErrorMessage, DetailedMessage} from "~/utils/types/errors";

const DEFAULT = error(-1, (message: DetailedMessage) => message.title + (message.title && message.message ? " - " : "") + message.message);
const UNAUTHORIZED = error(1, (message: string) => `Unauthorized Access : ${message}`);
const WRONG_CREDENTIALS = error(2, "Wrong user credentials");
const UNKNOWN_ACCOUNT = error(3, (typeAccount: string) => `Unknown account type '${typeAccount}'`);
const SESSION_EXPIRED = error(4, "Session has expired due to inactivity or error");
const RATE_LIMITED = error(5, "You are being rate limited because of too many failed requests");
const CLOSED = error(6, "The instance is closed, try again later");
const TOKEN_INVALID = error(7, "The token is invalid");
const MODULE_DISABLE = error(8, (moduleName: string) => `The module is not activated in your school. Module name : ${moduleName}`);
const INVALID_API_URL = error(9, "The API URL provided is invalid.");
const OBJECT_NOT_FOUND = error(10, "The object you were trying to retrieve was not found by Ecoledirecte (you provided an `id`, and the request errored with code 210).");
const INVALID_BODY = error(11, "Values provided in body are wrong and the request errored with code 512.");
const A2F_ERROR = error(12, "Dual authentication required");
const ACCOUNT_DISABLED = error(13, "Disabled Account");

function error(code: number, message: ErrorMessage){
    return {
        code,
        drop: (arg?: string | DetailedMessage) => ({
            code,
            message: message instanceof Function && arg ? message(arg as string & DetailedMessage): message
        })
    };
}

export {
    DEFAULT,
    UNAUTHORIZED,
    WRONG_CREDENTIALS,
    UNKNOWN_ACCOUNT,
    SESSION_EXPIRED,
    RATE_LIMITED,
    CLOSED,
    TOKEN_INVALID,
    MODULE_DISABLE,
    INVALID_API_URL,
    OBJECT_NOT_FOUND,
    INVALID_BODY,
    A2F_ERROR,
    ACCOUNT_DISABLED,
};
