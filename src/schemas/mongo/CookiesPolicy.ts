import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IManage {
    title: string;
    isActive: boolean;
    description: string;
}
export interface ICookiesPolicy {
    title: string;
    content: string;
    manage: IManage;
}

export interface ICookiesPolicyDoc extends ICookiesPolicy, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ICookiesPolicies = Model<ICookiesPolicyDoc>;
