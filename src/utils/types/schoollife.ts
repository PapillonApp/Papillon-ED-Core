import { failureRes } from "~/types/v3";
import {Timeinterval} from "../types/timeinterval";

export type schoolLifeRes = schoolLifeSuccess | failureRes;

export type schoolLifeSuccess = {
    code: 200;
    token: string;
    host: string;
    data: EDCoreSchoolLifeResData;
};

export type EDCoreSchoolLifeItem = {
    id: number;
    idEleve: number;
    nomEleve: string;
    typeElement: "Punition" | "Retard" | "Absence" | string;
    date: string;
    displayDate: string;
    interval?: Timeinterval;
    libelle: "RETENUE" | string;
    motif: string;
    justifie: boolean;
    par: string;
    commentaire: string;
    typeJustification: string;
    justifieEd: boolean;
    aFaire: string;
    dateDeroulement: string;
};

export type EDCoreSchoolLifeResData = {
    sanctionsEncouragements: Array<EDCoreSchoolLifeItem>,
    absencesRetards: Array<EDCoreSchoolLifeItem>,
    parametrage: {
        justificationEnLigne: boolean;
        absenceCommentaire: boolean;
        retardCommentaire: boolean;
        sanctionsVisible: boolean;
        sanctionParQui: boolean;
        sanctionCommentaire: boolean;
        encouragementsVisible: boolean;
        encouragementParQui: boolean;
        encouragementCommentaire: boolean;
    }
};
