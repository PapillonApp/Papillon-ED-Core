import {Account} from "./accounts";

interface AuthRequestBody {
    identifiant: string
    motdepasse: string
    isRelogin: boolean
    uuid: string
}

interface AuthRequestResponse {
    code: AuthRequestResponseCodes
    token: string
    message: string
    data: AuthRequestResponseData
}

// TODO add account types
interface AuthRequestResponseData {
    accounts: Account[]
}

type AuthRequestResponseCodes = 200 | 505

export type {
    AuthRequestBody
}
