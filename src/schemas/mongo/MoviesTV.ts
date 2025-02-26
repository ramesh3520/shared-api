import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IMoviesTv {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface IMoviesTvDoc extends IMoviesTv, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IMoviesTvModel = Model<IMoviesTvDoc>;
