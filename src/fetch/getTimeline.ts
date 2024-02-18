import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {studCommonTlRes, studTlRes} from "~/types/v3";
import {timelineRequestData} from "~/types/v3/requests";

class GetTimeline {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(): Promise<studTlRes> {
        const url = `/E/${this.session.student.id}/timeline.awp?verbe=get`;
        const data = {} as timelineRequestData;
        return await this.session.request.post(url, bodyToString(data)).then(response => response as studTlRes);
    }

    async fetchCommonTimeline(): Promise<studCommonTlRes> {
        const url = `/E/${this.session.student.id}/timelineAccueilCommun.awp?verbe=get`;
        const data = {} as timelineRequestData;
        return await this.session.request.post(url, bodyToString(data)).then(response => response as studCommonTlRes);
    }
}

export {
    GetTimeline
};
