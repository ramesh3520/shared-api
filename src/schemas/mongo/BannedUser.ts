import { BannedType } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IBanned {
    userId: TypesObjectId;
    bannedType: BannedType;
    days: string;
    bannedByUserId: TypesObjectId;
}
[];
export interface IBannedUser {
    modelId: TypesObjectId;
    bannedUsers: IBanned;
}

export interface IBannedUserDoc extends IBannedUser, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IBannedUserModel = Model<IBannedUserDoc>;
