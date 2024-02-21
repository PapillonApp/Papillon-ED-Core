interface DetailedMessage {
    title: string
    message: string
}

type DynamicMessage = (arg: string) => string;
type DynamicMessageDetailed = (arg: DetailedMessage) => string;

type ErrorMessage = string | DynamicMessage | DynamicMessageDetailed;

export type {
    ErrorMessage,
    DetailedMessage
};
