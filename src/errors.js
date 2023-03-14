const DEFAULT = error(-1, ({ title, message }) => title + (title && message ? ' - ' : '') + message);
const BANNED = error(1, 'Your IP address is temporarily banned because of too many failed authentication attempts');
const WRONG_CREDENTIALS = error(2, 'Wrong user credentials');
const UNKNOWN_ACCOUNT = error(3, typeAccount => `Unknown account type '${typeAccount}'`);
const SESSION_EXPIRED = error(4, 'Session has expired due to inactivity or error');
const RATE_LIMITED = error(5, 'You are being rate limited because of too many failed requests');
const CLOSED = error(6, 'The instance is closed, try again later');
const TOKEN_INVALID = error(7, 'The token is invalid');

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
    BANNED,
    WRONG_CREDENTIALS,
    UNKNOWN_ACCOUNT,
    SESSION_EXPIRED,
    RATE_LIMITED,
    CLOSED,
	TOKEN_INVALID
};