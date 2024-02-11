interface AuthRequestBody {
    identifiant: string
    motdepasse: string
    isRelogin: boolean
    uuid: string
}

export type {
    AuthRequestBody
}
