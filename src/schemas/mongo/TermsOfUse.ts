import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';
interface IContent {
    title: string;
    shortDescription: string;
    description: string;
}

export interface ITermsOfUse {
    title: string;
    content: IContent;
}

export interface ITermsOfUseDoc extends ITermsOfUse, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ITermsOfUses = Model<ITermsOfUseDoc>;
