import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IStudioDocument {
    studioId: TypesObjectId;
    documentIssueCountry: string;
    idType: string;
    gender: string;
    studioAccountOwner: string;
    firstName: string;
    lastName: string;
    countryOfResidence: string;
    zipCode: number;
    address: string;
    idNumber: string;
    companyName: string;
    countryOfReg: string;
    registrationAddress: string;
    registrationNumber: string;
    dateOfIncorporation: Date;
    phoneNumber: number;
    email: string;
    applyingApplicant: string;
    applicantFullName: string;
    applicantIdNumber: string;
    vatNumber: string;
    studioWebsite: string;
    additionalContact: string;
    closeUpPhotoOfYourId: string;
    photoOfYouHoldingYourId: string;
    studioName: string;
    DOB: Date;
    country: string;
    city: string;
    isEmailVerify: boolean;
    isDocumentVerify: boolean;
    status: string;
}

export interface IStudioDocumentDoc extends IStudioDocument, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IStudioDocumentModel = Model<IStudioDocumentDoc>;
