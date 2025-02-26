import { ModelFanClubAccess, ModelVideoAndAlbumAccess } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IModelVideo {
    modelId: TypesObjectId;
    videoName: string;
    slug: string;
    videoUrl?: string;
    likes: TypesObjectId[];
    coverUrl?: string;
    access: ModelVideoAndAlbumAccess;
    fanclubAccess: ModelFanClubAccess;
    token: number;
    blurImageUrl: string;
    approved: boolean;
    isDeleted: boolean;
}

export interface IModelVideoDoc extends IModelVideo, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IModelVideoModel = Model<IModelVideoDoc>;
