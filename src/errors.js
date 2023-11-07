const DEFAULT = error(-1, ({ title, message }) => title + (title && message ? ' - ' : '') + message);
const UNAUTHORIZED = error(1, message => `Unauthorized Access : ${message}`);
const WRONG_CREDENTIALS = error(2, 'Wrong user credentials');
const UNKNOWN_ACCOUNT = error(3, typeAccount => `Unknown account type '${typeAccount}'`);
const SESSION_EXPIRED = error(4, 'Session has expired due to inactivity or error');
const RATE_LIMITED = error(5, 'You are being rate limited because of too many failed requests');
const CLOSED = error(6, 'The instance is closed, try again later');
const TOKEN_INVALID = error(7, 'The token is invalid');
const MODULE_DISABLE = error(8, moduleName => `The module is not activated in your school. Module name : ${moduleName}`);

function error(code, message)
{
    return {
        code,
        drop: (...args) => ({
            code,
            message: typeof message === 'string' ? message : message(...args)
        })
    }
}

module.exports = {
    DEFAULT,
    UNAUTHORIZED,
    WRONG_CREDENTIALS,
    UNKNOWN_ACCOUNT,
    SESSION_EXPIRED,
    RATE_LIMITED,
    CLOSED,
	TOKEN_INVALID,
    MODULE_DISABLE
};