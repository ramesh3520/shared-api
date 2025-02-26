import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

// interface for image inside album
interface IStudioAlbumImage {
    imageUrl: string;
    blurImageUrl: string;
    approved: boolean;
}

// interface for album
export interface IStudioAlbum {
    albumName: string;
    access: string;
    images: IStudioAlbumImage[];
    studioId: TypesObjectId;
    likes: TypesObjectId[];
}

export interface IStudioAlbumDoc extends IStudioAlbum, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IStudioAlbumModel = Model<IStudioAlbumDoc>;
