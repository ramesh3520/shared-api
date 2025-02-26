import { Schema, model } from 'mongoose';
import { IStudioDocumentDoc, IStudioDocumentModel } from '@schemas/mongo/StudioDocument.js';
import { ObjectId } from '@schemas';
import { StudioAccountOwner } from '@enums/StudioAccountOwner.enum';
import { ApplyingApplicant } from '@enums/StudioAppyingApplicant.enum';
import { Gender } from '@enums';

const StudioDocumentSchema = new Schema<IStudioDocumentDoc>(
    {
        studioId: { type: ObjectId, required: true },
        documentIssueCountry: { type: String, required: true, lowercase: true },
        idType: { type: String, required: true },
        gender: { type: String, required: true, enum: Object.values(Gender) },
        city: { type: String, required: true, lowercase: true },
        address: { type: String, required: true },
        studioAccountOwner: { type: String, enum: Object.values(StudioAccountOwner) },
        firstName: { type: String },
        lastName: { type: String },
        DOB: { type: Date },
        countryOfResidence: { type: String },
        zipCode: { type: Number },
        idNumber: { type: String },
        companyName: { type: String },
        countryOfReg: { type: String },
        registrationAddress: { type: String },
        registrationNumber: { type: String },
        dateOfIncorporation: { type: Date },
        phoneNumber: { type: Number },
        email: { type: String, lowercase: true },
        applyingApplicant: { type: String, enum: Object.values(ApplyingApplicant) },
        applicantFullName: { type: String },
        applicantIdNumber: { type: String },
        vatNumber: { type: String },
        studioWebsite: { type: String },
        studioName: { type: String },
        additionalContact: { type: String },
        closeUpPhotoOfYourId: { type: String },
        photoOfYouHoldingYourId: { type: String },
        isEmailVerify: { type: Boolean, default: false },
        isDocumentVerify: { type: Boolean, default: false },
        status: { type: String, default: '' },
    },
    {
        id: false,
        timestamps: true,
        toJSON: {
            getters: true,
        },
        toObject: {
            getters: true,
        },
    }
);

export const StudioDocument = model<IStudioDocumentDoc, IStudioDocumentModel>(
    'StudioDocument',
    StudioDocumentSchema,
    'studiodocuments'
);
