import { Session } from "~/session";
import bodyToString from "~/utils/body";
import {body} from "~/types/v3/requests/default/body";
import {encodeString} from "~/utils/base64";
import {AccountInfo} from "~/utils/types/accounts";

/**
 * ADMINISTRATIF is not supported by Ecoledirecte; it is used to programmatically add argument to request so the administrative document can be downloaded.
 */
export type fileType = "CLOUD" | "FICHIER_CDT" | "PIECE_JOINTE" | "FICHIER_MENU_RESTAURATION" | "ADMINISTRATIF" | "";

class GetDownloads {

    session: Session;

    constructor(session: Session) {
        this.session = session;
    }

    /**
     *
     * @param fileId
     * @param fileType
     * @param year two possibilities; empty if download current year message attachment / administrative document or YYYY-YYYY year range if downloading "archive" administrative document or old messages attachment
     */
    async getFileBlob(fileId: number | string, fileType: fileType, year: string = ""): Promise<Blob> {
        const endpoint = `/telechargement.awp?verbe=get&fichierId=${fileId}`;
        let url;
        switch (fileType) {
            case "ADMINISTRATIF":
                url = endpoint + year != "" ? `archive=true&anneeArchive=${year}`: "";
                break;
            case "PIECE_JOINTE":
                url = endpoint + year != "" ? `anneeMessages=${year}`: "";
                break;
            default:
                url = endpoint + `&leTypeDeFichier=${fileType}`;
        }
        const data = {
            forceDownload: 0
        } as body;
        return await this.session.request.blob(url, bodyToString(data));
    }

    /**
     *
     * @param fileId
     * @param fileType
     * @param year two possibilities; empty if download current year message attachment / administrative document or YYYY-YYYY year range if downloading "archive" administrative document or old messages attachment
     */
    async getFileBase64(fileId: number | string, fileType: fileType, year: string = ""): Promise<string> {
        const blob = await this.getFileBlob(fileId, fileType, year);
        const binaryString = String.fromCharCode(...new Uint8Array(await blob.arrayBuffer()));
        return `data:${blob.type};base64,${encodeString(binaryString, "binary")}`;
    }

    /**
     * Renvoie la photo de profil en format base64
     */
    async getProfilePictureBase64(): Promise<string> {
        const student = this.session.student as AccountInfo;
        const url = student.photo;
        this.session.request.requestOptions.headers["Referer"] = "https://www.ecoledirecte.com/";
        const blob = await this.session.request.blob(url, bodyToString({}), true, "GET");
        delete this.session.request.requestOptions.headers["Referer"];
        const binaryString = String.fromCharCode(...new Uint8Array(await blob.arrayBuffer()));
        return `data:${blob.type};base64,${encodeString(binaryString, "binary")}`;
    }
}

export {
    GetDownloads
};
