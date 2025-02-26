import { ClubType } from '@enums';
export interface IMember {
    id: string;
    modelFanClub: IModelFanClub;
    userId: string;
    isExpired: boolean;
    plan: {
        planName: ClubType;
        duration: number;
        token: number;
        createdAt: Date;
    };
}

export interface IModelFanClub {
    id: string;
    modelId: string;
    soldier: {
        freeSpying: number;
        tipDiscount: number;
        privateShowDiscount: number;
        exclusiveShowDiscount: number;
    };
    lord: {
        freeSpying: number;
        tipDiscount: number;
        privateShowDiscount: number;
        exclusiveShowDiscount: number;
    };
    prince: {
        freeSpying: number;
        tipDiscount: number;
        privateShowDiscount: number;
        exclusiveShowDiscount: number;
    };
    exclusiveMediaContent: boolean;
    specialBadgeDiscount: boolean;
    customBenifit: {
        benefitName: string;
        benefit: string; //visible for Fan Club subscribers only
    };
    members: IMember[];
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}
