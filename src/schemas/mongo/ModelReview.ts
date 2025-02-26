import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

interface IReview {
    showType: string; // private, execlusive
    userId?: TypesObjectId;
    reviews: string;
    ratings: number;
}

export interface IModelReview {
    modelId?: TypesObjectId;
    reviews: IReview[];
}

export interface IModelReviewDoc extends IModelReview, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IModelReviewModel = Model<IModelReviewDoc>;
