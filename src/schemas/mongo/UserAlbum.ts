import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

// interface for image inside album
export interface IAlbumImage {
    imageUrl: string;
    blurImageUrl: string;
    approved: boolean;
}

// interface for album
export interface IUserAlbum {
    albumName: string;
    access: string;
    images?: IAlbumImage[];
    userId: TypesObjectId;
    likes: TypesObjectId[];
}

export interface IUserAlbumDoc extends IUserAlbum, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IUserAlbumModel = Model<IUserAlbumDoc>;
