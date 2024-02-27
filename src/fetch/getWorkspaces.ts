import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {joinWorkspaceRequestData, workspaceRequestData} from "~/types/v3/requests";
import {workspacesRes, workspaceRes, workspace, emptyRes} from "~/types/v3";

import { DiaryRequestData, DiaryReponseSuccess, DiaryResponseData } from "~/utils/types/workspace";
import { TopicsResponseSuccess, TopicsResponseData } from "~/utils/types/workspace";
import { MembersResponseSuccess, MembersResponseData } from "~/utils/types/workspace";

class GetWorkspaces {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    async fetch(): Promise<Array<workspace>> {
        const url = `/E/${this.session.student.id}/espacestravail.awp?verbe=get`;
        const data = {} as workspaceRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: workspacesRes) => response.data as Array<workspace>);
    }

    async get(id: string): Promise<workspace> {
        const url = `/E/${this.session.student.id}/espacestravail/${id}.awp?verbe=get`;
        const data = {} as workspaceRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: workspaceRes) => response.data as workspace);
    }

    async getDiary(espaceId: number): Promise<DiaryResponseData> {
        const url = `/W/${espaceId}/agendaEvenements.awp?verbe=get`;
        const data = {
            "nbProchainsEvents": 0
        } as DiaryRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: DiaryReponseSuccess) => response.data as DiaryResponseData);
    }


    async getTopics(espaceId: number): Promise<TopicsResponseData> {
        const url = `/E/${this.session.student.id}/espacestravail/${espaceId}/topics.awp?verbe=get`;
        const data = {};
        return await this.session.request.post(url, bodyToString(data)).then((response: TopicsResponseSuccess) => response.data as TopicsResponseData);
    }


    async getMembers(espaceId: number): Promise<MembersResponseData> {
        const url = `/E/${this.session.student.id}/espacestravail/${espaceId}/membres.awp?verbe=get`;
        const data = {};
        return await this.session.request.post(url, bodyToString(data)).then((response: MembersResponseSuccess) => response.data as MembersResponseData);
    }


    async join(espace: workspace): Promise<emptyRes> {
        const url = `/E/${this.session.student.id}/espacestravail/${espace.id}/acces.awp?verbe=post`;
        const data = {} as joinWorkspaceRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: emptyRes) => response);
    }

    async leave(espace: number): Promise<emptyRes> {
        const url = `/E/${this.session.student.id}/espacestravail/${espace}/acces.awp?verbe=delete`;
        const data = {} as workspaceRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: emptyRes) => response);
    }
}

export {
    GetWorkspaces
};
