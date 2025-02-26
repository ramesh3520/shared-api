import { ClubType } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IModelPost {
    modelId: TypesObjectId;
    posts: {
        imageUrl: string;
        blurImageUrl: string;
        approved: boolean;
        description: string;
        likes: TypesObjectId[];
        fanClub: {
            enable: boolean;
            freeFor: ClubType[];
        };
    }[];
}

export interface IModelPostDoc extends IModelPost, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IModelPostModel = Model<IModelPostDoc>;
