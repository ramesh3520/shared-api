import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

interface Ifeedback {
    feedbacktype: string;
    feedbackDescription: string;
    feedbackuser: TypesObjectId;
}
export interface IwhatsNew {
    title: string;
    content: string;
    imageUrl: string;
    like: TypesObjectId;
    disLike: TypesObjectId;
    createdAt: Date;
    feedback: Ifeedback[];
}

export interface IWhatsNewDoc extends IwhatsNew, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IWhatsNew = Model<IWhatsNewDoc>;
