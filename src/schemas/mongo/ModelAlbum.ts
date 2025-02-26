import { ModelVideoAndAlbumAccess, ModelFanClubAccess } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IModelAlbum {
    modelId: TypesObjectId;
    name: string;
    slug: string;
    access: ModelVideoAndAlbumAccess;
    fanclubAccess: ModelFanClubAccess;
    token: number;
    images:
        | {
              imageUrl: string;
              blurImageUrl: string;
              isDeleted: boolean;
              approved: boolean;
          }
        | {
              imageUrl: string;
              blurImageUrl: string;
              isDeleted: boolean;
              approved: boolean;
          }[];
    likes: TypesObjectId[];
    isDeleted: boolean;
}

export interface IModelAlbumDoc extends IModelAlbum, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IModelAlbumModel = Model<IModelAlbumDoc>;
