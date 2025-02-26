import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

// interface for album
export interface IUserCollection {
    userId: TypesObjectId;
    modelId: TypesObjectId;
    albumIds: TypesObjectId[];
    videoIds: TypesObjectId[];
    postIds: TypesObjectId[];
}

export interface IUserCollectionDoc extends IUserCollection, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IUserCollectionModel = Model<IUserCollectionDoc>;
