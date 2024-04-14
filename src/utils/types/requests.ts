interface RequestOptions {
    headers: HeadersInit & EDHeaders
}

interface EDHeaders {
    "X-token"?: string
    "Referer"?: string
}

export type {
    RequestOptions
};
