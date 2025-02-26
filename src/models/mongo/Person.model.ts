import { model, Schema } from 'mongoose';
import { ObjectId } from '@schemas';
import { IPersonDoc, IPersonModel } from '@schemas/mongo/Person';
import { Gender } from '@enums/Gender.enum';

const PersonSchema = new Schema<IPersonDoc>(
    {
        userId: { type: ObjectId, ref: 'User' },
        modelIds: [{ type: ObjectId, ref: 'User' }],
        personName: { type: String },
        documentIssueCountry: { type: String, required: true },
        idType: { type: String, required: true },
        gender: {
            type: String,
            enum: Object.values(Gender),
            required: true,
        },
        city: { type: String },
        address: { type: String },
        status: { type: String, default: '' },
        dob: { type: String },
        enquiryId: { type: String },
        isVerified: { type: Boolean, default: false },
        isAccountHolder: { type: Boolean, default: false },
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

export const Person = model<IPersonDoc, IPersonModel>('Person', PersonSchema, 'persons');
