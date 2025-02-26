import { FeedbackType } from '@enums';
import { IWhatsNew, IWhatsNewDoc } from '@schemas';
import { Schema, model, Types } from 'mongoose';

const whatsNewSchema = new Schema<IWhatsNewDoc>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        imageUrl: { type: String, required: true },
        like: [{ type: Types.ObjectId }],
        disLike: [{ type: Types.ObjectId }],
        createdAt: { type: Date, default: Date.now },
        feedback: [
            {
                feedbacktype: { type: String, enum: Object.values(FeedbackType) },
                feedbackDescription: { type: String },
                feedbackuser: { type: Types.ObjectId },
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

export const whatsNew = model<IWhatsNewDoc, IWhatsNew>('whatsNew', whatsNewSchema, 'whats-news');
