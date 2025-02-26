import { ITermsOfUseDoc, ITermsOfUses } from '@schemas';
import { model, Schema } from 'mongoose';

const TermsOfUseSchema = new Schema<ITermsOfUseDoc>(
    {
        title: { type: String, required: true, trim: true },
        content: [
            {
                title: { type: String, required: true, trim: true },
                shortDescription: { type: String, required: true },
                description: { type: String, required: true },
            },
        ],
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

export const TermsOfUse = model<ITermsOfUseDoc, ITermsOfUses>('TermsOfUse', TermsOfUseSchema, 'Terms-Of-Use');
