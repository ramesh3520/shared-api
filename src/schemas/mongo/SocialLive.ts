import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface ISocialLive {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface ISocialLiveDoc extends ISocialLive, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ISocialLiveModel = Model<ISocialLiveDoc>;
