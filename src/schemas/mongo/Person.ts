import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IPerson {
    userId: TypesObjectId;
    modelIds: TypesObjectId[];
    personName: string;
    documentIssueCountry: string;
    idType: string;
    gender: string;
    city: string;
    address: string;
    status?: string;
    dob: string;
    enquiryId: string;
    isVerified: boolean;
    isAccountHolder: boolean;
}

export interface IPersonDoc extends IPerson, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IPersonModel = Model<IPersonDoc>;
