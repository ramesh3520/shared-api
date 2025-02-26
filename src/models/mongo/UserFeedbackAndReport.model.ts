import { UserFeedback } from '@enums/UserFeedback.enum';
import { ObjectId } from '@schemas';
import { IUserFeedbackAndReportDoc, IUserFeedbackAndReportModel } from '@schemas/mongo/UserFeedbackAndReport';
import { model, Schema } from 'mongoose';

const UserFeedbackAndReportSchema = new Schema<IUserFeedbackAndReportDoc>(
    {
        userId: { type: ObjectId, ref: 'User', index: 1 },
        feedbacks: [
            {
                title: { type: String, enum: Object.values(UserFeedback), required: true },
                description: { type: String, required: true },
            },
        ],
        reportModels: [
            {
                modelId: { type: ObjectId, required: true, ref: 'User' },
                reason: { type: String, required: true },
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

export const UserFeedbackAndReport = model<IUserFeedbackAndReportDoc, IUserFeedbackAndReportModel>(
    'FeedbackAndReport',
    UserFeedbackAndReportSchema,
    'feedbackandreports'
);
