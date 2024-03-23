export type Timeinterval = {
    start: string
    end: string
};

export function dateAsISO860(str: string): string {
    const parts = str.split(" ");
    let month = "01";
    switch (parts[2]) {
        case "janvier":
            month = "01";
            break;
        case "février":
            month = "02";
            break;
        case "mars":
            month = "03";
            break;
        case "avril":
            month = "04";
            break;
        case "mai":
            month = "05";
            break;
        case "juin":
            month = "06";
            break;
        case "juillet":
            month = "07";
            break;
        case "août":
            month = "08";
            break;
        case "septembre":
            month = "09";
            break;
        case "octobre":
            month = "10";
            break;
        case "novembre":
            month = "11";
            break;
        case "décembre":
            month = "12";
            break;
    }
    return parts[3] + "-" + month + "-" + parts[1] + "T" + parts[5] + ":00.000+02:00";
}

export function dateStringAsTimeInterval(str: string): Timeinterval | undefined {
    if (str.includes("du")) {
        /**
         * @example
         * str is equal to "du mercredi 21 février 2024 au jeudi 22 février 2024"
         */
        const parts = str.split("au");
        const start = dateAsISO860(parts[0].replace("du", "").trim());
        const end = dateAsISO860(parts[1].trim());
        return {start: start, end: end} as Timeinterval;
    }
    if (str.includes("le")) {
        /**
         * @example
         * str is equal to "le mercredi 21 février 2024 de 08:55 à 09:45"
         * or "le mercredi 21 février 2024"
         */
        const parts = str.split("à");

        let startDate, endDate;

        // C'est une journée complète ("le mercredi 21 février 2024")
        if (!str.includes(":")) {
            startDate = parts[0].replace("le", "").trim() + " de 00:00";
            endDate = parts[0].split("de")[0].replace("le", "").trim() + " de 23:59";
        } else {
            startDate = parts[0].replace("le", "").trim();
            endDate = parts[0].split("de")[0].replace("le", "").trim() + " de " + parts[1].trim();
        }
        const start = dateAsISO860(startDate);
        const end = dateAsISO860(endDate);
        return { start: start, end: end } as Timeinterval;
    }
    return undefined;
}
