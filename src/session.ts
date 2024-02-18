import {GetGrades} from "./fetch/getGrades";
import {GetCantine} from "./fetch/getCantine";
import {GetHomeworks} from "~/fetch/getHomeworks";
import {GetTimetable} from "~/fetch/getTimetable";
import {GetSchoolLife} from "~/fetch/getSchoolLife";
import {GetDigitalManuals} from "~/fetch/getDigitalManuals";
import {GetMessaging} from "~/fetch/getMessaging";

import { Request } from "./Request";
import { Auth } from "./auth";
import {account, accountModule} from "~/types/v3";
import {BlankAccount, accountParameters} from "~/utils/types/accounts";
import {EmptyModule} from "~/utils/types/modules";
import {EstablishmentInfo} from "~/utils/types/establishments";
import {GetTimeline} from "~/fetch/getTimeline";


class Session {

    _token: undefined | string;
    isLoggedIn: boolean;
    settings?: accountParameters;
    student: account | BlankAccount;
    school?: EstablishmentInfo;
    modules?: Array<accountModule>;

    homeworks: GetHomeworks;
    grades: GetGrades;
    timetable: GetTimetable;
    schoolLife: GetSchoolLife;
    cantine: GetCantine;
    digitalManuals: GetDigitalManuals;
    messaging: GetMessaging;
    timeline: GetTimeline;

    auth: Auth;
    request: Request;

    constructor() {
        this._token = undefined; // Le token
        this.isLoggedIn = false;
        this.student = { id: 0 }; // Utilisateur initialisé vide

        this.homeworks = new GetHomeworks(this);
        this.grades = new GetGrades(this);
        this.timetable = new GetTimetable(this);
        this.schoolLife = new GetSchoolLife(this);
        this.cantine = new GetCantine(this);
        this.digitalManuals = new GetDigitalManuals(this);
        this.messaging = new GetMessaging(this);
        this.timeline = new GetTimeline(this);

        this.auth = new Auth(this);
        this.request = new Request(this);
    }

    findModule(name: string): accountModule | EmptyModule {
        return (this.modules || []).find(module => module.code === name) || { code: "", enable: false, params: {} };
    }

}

export {
    Session
};
