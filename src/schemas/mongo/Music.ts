import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IMusic {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface IMusicDoc extends IMusic, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IMusicModel = Model<IMusicDoc>;
