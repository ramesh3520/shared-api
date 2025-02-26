import { ReportContentType } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

interface IReportBy {
    userId: TypesObjectId;
    contentId: TypesObjectId;
    reportType: ReportContentType;
    description: string;
    reportTime: Date;
}

export interface IReportcontent {
    modelId: TypesObjectId;
    reportBy: IReportBy[];
}
export interface IReportContentDoc extends IReportcontent, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IReportContent = Model<IReportContentDoc>;
