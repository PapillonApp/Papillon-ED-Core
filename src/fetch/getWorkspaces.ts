import {Session} from "~/session";
import bodyToString from "~/utils/body";
import {joinWorkspaceRequestData, workspaceDiaryRequestData, workspaceRequestData} from "~/types/v3/requests";
import {
    workspacesRes,
    workspaceRes,
    workspace,
    emptyRes,
    diaryResData,
    workspaceDiaryRes,
    workspaceTopicsRes,
    workspaceMembersRes,
    membersResData,
    topicsResData
} from "~/types/v3";

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

    async getDiary(espaceId: number): Promise<diaryResData> {
        const url = `/W/${espaceId}/agendaEvenements.awp?verbe=get`;
        const data = {
            nbProchainsEvents: 0
        } as workspaceDiaryRequestData;
        return await this.session.request.post(url, bodyToString(data)).then((response: workspaceDiaryRes) => response.data as diaryResData);
    }


    async getTopics(espaceId: number): Promise<topicsResData> {
        const url = `/E/${this.session.student.id}/espacestravail/${espaceId}/topics.awp?verbe=get`;
        const data = {};
        return await this.session.request.post(url, bodyToString(data)).then((response: workspaceTopicsRes) => response.data as topicsResData);
    }


    async getMembers(espaceId: number): Promise<membersResData> {
        const url = `/E/${this.session.student.id}/espacestravail/${espaceId}/membres.awp?verbe=get`;
        const data = {};
        return await this.session.request.post(url, bodyToString(data)).then((response: workspaceMembersRes) => response.data as membersResData);
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
