import {Module} from "./types/modules";
import {GetGrades} from "./fetch/getGrades";
import {GetCantine} from "./fetch/getCantine";
import {GetHomeworks} from "~/fetch/getHomeworks";
import {GetTimetable} from "~/fetch/getTimetable";
import {GetSchoolLife} from "~/fetch/getSchoolLife";
import {GetDigitalManuals} from "~/fetch/getDigitalManuals";
import {GetMessaging} from "~/fetch/getMessaging";

import { Request } from "./Request";
import { Auth } from "./auth";
import {Account, AccountIndividualParameters, BlankAccount, ParsedAccount, ParsedEstablishment} from "./types/accounts";


class Session {

    _token: null | string
    isLoggedIn: boolean
    settings?: AccountIndividualParameters
    student: Account | BlankAccount | ParsedAccount
    school?: ParsedEstablishment
    modules?: Array<Module>

    homeworks: GetHomeworks
    grades: GetGrades
    timetable: GetTimetable
    schoolLife: GetSchoolLife
    cantine: GetCantine
    digitalManuals: GetDigitalManuals
    messaging: GetMessaging

    auth: Auth
    request: Request

    constructor() {
        this._token = null // Le token
        this.isLoggedIn = false
        this.student = { id: 0 } // Utilisateur initialisé vide

        this.homeworks = new GetHomeworks(this)
        this.grades = new GetGrades(this)
        this.timetable = new GetTimetable(this)
        this.schoolLife = new GetSchoolLife(this)
        this.cantine = new GetCantine(this)
        this.digitalManuals = new GetDigitalManuals(this)
        this.messaging = new GetMessaging(this)

        this.auth = new Auth(this)
        this.request = new Request(this)
    }

    findModule(name: string) {
        return (this.modules || []).find(module => module.code === name) || { code: "", enable: false }
    }

}

export {
    Session
}
