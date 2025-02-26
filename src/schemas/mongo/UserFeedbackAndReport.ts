import { UserFeedback } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IFeedbacks {
    title: UserFeedback;
    description: string;
}

export interface IReportModels {
    modelId: TypesObjectId;
    reason: string;
    description: string;
}

export interface IUserFeedBackAndReport {
    userId: TypesObjectId;
    feedbacks: IFeedbacks[];
    reportModels: IReportModels[];
}

export interface IUserFeedbackAndReportDoc extends IUserFeedBackAndReport, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IUserFeedbackAndReportModel = Model<IUserFeedbackAndReportDoc>;
