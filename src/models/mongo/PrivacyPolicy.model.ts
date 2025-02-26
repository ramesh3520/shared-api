import { IPrivacyPolicies, IPrivacyPolicyDoc } from '@schemas';
import { model, Schema } from 'mongoose';

const PrivacyPolicySchema = new Schema<IPrivacyPolicyDoc>(
    {
        title: { type: String, required: true, trim: true },
        content: { type: String, require: true },
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

export const PrivacyPolicy = model<IPrivacyPolicyDoc, IPrivacyPolicies>(
    'PrivacyPolicy',
    PrivacyPolicySchema,
    'Privacy-policys'
);
