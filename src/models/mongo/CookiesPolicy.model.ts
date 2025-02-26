import { ICookiesPolicies, ICookiesPolicyDoc } from '@schemas';
import { model, Schema } from 'mongoose';

const CookiesPolicySchema = new Schema<ICookiesPolicyDoc>(
    {
        title: { type: String, required: true, trim: true },
        content: { type: String, required: true },
        manage: [
            {
                title: { type: String, required: true, trim: true },
                isActive: { type: Boolean },
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

export const CookiesPolicy = model<ICookiesPolicyDoc, ICookiesPolicies>(
    'CookiesPolicy',
    CookiesPolicySchema,
    'cookies-policys'
);
