import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface ISexualInterest {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface ISexualInterestDoc extends ISexualInterest, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ISexualInterestModel = Model<ISexualInterestDoc>;
