
//TODO; this is confusing .
interface DetailedMessage {
    title: string
    message: string
}

type DynamicMessage = (arg: string | DetailedMessage) => string
type DynamicMessageDetailed = (title: string, message: string) => string

type ErrorMessage = string | DynamicMessage | DynamicMessageDetailed

export type {
    ErrorMessage
}
