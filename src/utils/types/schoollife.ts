import {failureRes, schoolLifeItem, schoolLifeResData, schoolLifeResSuccess} from "~/types/v3";
import {Timeinterval} from "~/utils/dates";

export type schoolLifeRes = schoolLifeSuccess | failureRes;

export type schoolLifeSuccess = schoolLifeResSuccess & { data: EDCoreSchoolLifeResData };

export type EDCoreSchoolLifeItem = schoolLifeItem & { interval?: Timeinterval };

export type EDCoreSchoolLifeResData = schoolLifeResData & {
    sanctionsEncouragements: Array<EDCoreSchoolLifeItem>;
    absencesRetards: Array<EDCoreSchoolLifeItem>;
};
