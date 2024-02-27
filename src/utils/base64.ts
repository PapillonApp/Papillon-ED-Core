/*
* This function decodes the b64 input string, and decode uri escaped chars, if escape function exists
* */
export function decodeString(value: string) {
    if (escape) {
        return decodeURIComponent(escape(atob(value)));
    }
    return atob(value);
}
