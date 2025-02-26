import { ClubType } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IXpForJoiningFanclub {
    clubType: ClubType;
    durationInMonth: number;
    xp: number;
}

export interface ILeagueLevelAndXpRule {
    xpPerTokenSpent: number;
    xpForWatching: {
        xp: number;
        durationInMinutes: number;
        uptoLevel: number;
    };
    xpForFirstTokenPurchase: number;
    xpForEmailVerification: number;
    xpForJoiningFanclub: IXpForJoiningFanclub[];
}

export interface ILeagueLevelAndXpRuleDoc extends ILeagueLevelAndXpRule, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ILeagueLevelAndXpRuleModel = Model<ILeagueLevelAndXpRuleDoc>;
