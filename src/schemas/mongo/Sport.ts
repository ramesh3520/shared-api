import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface ISport {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface ISportDoc extends ISport, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ISportModel = Model<ISportDoc>;
