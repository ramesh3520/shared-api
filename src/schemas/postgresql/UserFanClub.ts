import { ClubType } from '@enums/ClubType.enum';

export interface IUserFanClub {
    id: string;
    userId: string;
    fanClubs: IFanClubInsideUser[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IFanClubInsideUser {
    id: string;
    modelId: string;
    duration: number;
    clubType: ClubType;
    freeSpying: number;
    tipDiscount: number;
    privateShowDiscount: number;
    exclusiveShowDiscount: number;
    exclusiveMediaContent: boolean;
    specialBadgeDiscount: boolean;
    token: number;
    valid: boolean;
    date: Date;
    userFanClub: IUserFanClub;
}
