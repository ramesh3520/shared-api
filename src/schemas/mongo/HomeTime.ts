import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IHomeTime {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface IHomeTimeDoc extends IHomeTime, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IHomeTimeModel = Model<IHomeTimeDoc>;
