import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface ITraveling {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface ITravelingDoc extends ITraveling, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ITravelingModel = Model<ITravelingDoc>;
