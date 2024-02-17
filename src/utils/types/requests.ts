interface RequestOptions {
    headers: HeadersInit & EDHeaders
}

interface EDHeaders {
    "X-token"?: string
}

export type {
    RequestOptions
}
