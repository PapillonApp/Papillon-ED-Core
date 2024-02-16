interface Response {
    host: string
    code: number
    token: string
    message: string
}

interface RequestOptions {
    headers: HeadersInit
}

export type {
    Response,
    RequestOptions
}
