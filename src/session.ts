import {Module} from "./types/modules";
import {GetGrades} from "./fetch/getGrades";
import {GetCantine} from "./fetch/getCantine";

const getHomeworks = require("./fetch/getHomeworks");
const getTimetable = require("./fetch/getTimetable");
const getSchoollife = require("./fetch/getSchoollife");
const getDigitalsManuals = require("./fetch/getDigitalsManuals");
const getMessaging = require("./fetch/getMessaging");

import { Request } from "./Request";
import { Auth } from "./auth";
import {Account, BlankAccount, ParsedAccount} from "./types/accounts";


class Session {

    _token: null | string
    isLoggedIn: boolean
    // TODO; type settings
    settings: {}
    student: Account | BlankAccount | ParsedAccount
    // TODO; type school
    school: {}
    modules: Array<Module>

    // TODO
    homeworks: any
    grades: any
    timetable: any
    schoollife: any
    cantine: any
    digitalsManuals: any
    messaging: any

    auth: Auth
    request: Request

    constructor() {
        this._token = null // Le token
        this.isLoggedIn = false
        this.settings = {} // Les paramètres de l'utilisateur
        this.school = {} // Info de l'etab
        this.modules = [] // Les modules

        this.homeworks = new getHomeworks(this)
        this.grades = new GetGrades(this)
        this.timetable = new getTimetable(this)
        this.schoollife = new getSchoollife(this)
        this.cantine = new GetCantine(this)
        this.digitalsManuals = new getDigitalsManuals(this)
        this.messaging = new getMessaging(this)

        this.auth = new Auth(this)
        this.request = new Request(this)
    }

    findModule(name: string) {
        return this.modules.find(module => module.code === name);
    }

}

export {
    Session
}
