import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IPrivacyPolicy {
    title: string;
    content: string;
}

export interface IPrivacyPolicyDoc extends IPrivacyPolicy, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IPrivacyPolicies = Model<IPrivacyPolicyDoc>;
