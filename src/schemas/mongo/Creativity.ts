import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface ICreativity {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface ICreativityDoc extends ICreativity, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ICreativityModel = Model<ICreativityDoc>;
