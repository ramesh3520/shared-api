import { ReportContentType } from '@enums';
import { IReportContent, IReportContentDoc, ObjectId } from '@schemas';
import { Schema, model } from 'mongoose';
const ReportContentSchema = new Schema<IReportContentDoc>(
    {
        modelId: { type: ObjectId, required: true },
        reportBy: [
            {
                userId: { type: ObjectId, required: true },
                contentId: { type: ObjectId, required: true },
                reportType: { type: String, enum: Object.values(ReportContentType), required: true },
                description: { type: String, required: true },
                reportTime: { type: Date, default: Date.now() },
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

export const ReportContent = model<IReportContentDoc, IReportContent>(
    'ReportContent',
    ReportContentSchema,
    'report-content'
);
