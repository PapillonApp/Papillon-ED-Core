import {Module} from "./types/modules";
import {GetGrades} from "./fetch/getGrades";
import {GetCantine} from "./fetch/getCantine";
import {GetHomeworks} from "~/fetch/getHomeworks";
import {GetTimetable} from "~/fetch/getTimetable";
import {GetSchoollife} from "~/fetch/getSchoollife";
import {GetDigitalsManuals} from "~/fetch/getDigitalsManuals";
import {GetMessaging} from "~/fetch/getMessaging";

import { Request } from "./Request";
import { Auth } from "./auth";
import {Account, AccountIndividualParameters, BlankAccount, ParsedAccount} from "./types/accounts";


class Session {

    _token: null | string
    isLoggedIn: boolean
    // TODO; type settings
    settings: AccountIndividualParameters | object
    student: Account | BlankAccount | ParsedAccount
    // TODO; type school
    school: object
    modules: Array<Module>

    // TODO
    homeworks: object
    grades: object
    timetable: object
    schoollife: object
    cantine: object
    digitalsManuals: object
    messaging: object

    auth: Auth
    request: Request

    constructor() {
        this._token = null // Le token
        this.isLoggedIn = false
        this.settings = {} // Les paramètres de l'utilisateur
        this.student = { id: 0 } // L'utilisateur
        this.school = {} // Info de l'etab
        this.modules = [] // Les modules

        this.homeworks = new GetHomeworks(this)
        this.grades = new GetGrades(this)
        this.timetable = new GetTimetable(this)
        this.schoollife = new GetSchoollife(this)
        this.cantine = new GetCantine(this)
        this.digitalsManuals = new GetDigitalsManuals(this)
        this.messaging = new GetMessaging(this)

        this.auth = new Auth(this)
        this.request = new Request(this)
    }

    findModule(name: string) {
        return this.modules.find(module => module.code === name) || { code: "", enable: false }
    }

}

export {
    Session
}
