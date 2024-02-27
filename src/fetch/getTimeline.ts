import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {studTlElem, studCommonTlResData, studTlRes, studCommonTlRes} from "~/types/v3";
import {timelineRequestData} from "~/types/v3/requests";
import {decodeString} from "~/utils/base64";

class GetTimeline {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(): Promise<Array<studTlElem>> {
        const url = `/eleves/${this.session.student.id}/timeline.awp?verbe=get`;
        const data = {} as timelineRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: studTlRes) => response.data as Array<studTlElem>);
    }

    async fetchCommonTimeline(): Promise<studCommonTlResData> {
        const url = `/E/${this.session.student.id}/timelineAccueilCommun.awp?verbe=get`;
        const data = {} as timelineRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: studCommonTlRes) => {
            if (response.code == 200) {
                const data = response.data as studCommonTlResData;
                data.evenements.forEach(event => {
                    event.description = decodeString(event.description);
                });
                data.postits.forEach(postit => {
                    postit.contenu = decodeString(postit.contenu);
                });
                return data;
            }
            return response.data as studCommonTlResData;
        });
    }
}

export {
    GetTimeline
};
