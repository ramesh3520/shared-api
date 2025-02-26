import { StripScoreFactor } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

interface IStripHistory {
    stripScore: number;
    stripScoreFactor: StripScoreFactor;
    date: Date;
}

export interface IModelStripScoreHistory {
    modelId: TypesObjectId;
    totalStripScore: number;
    stripHistory: IStripHistory[];
}

export interface IModelStripScoreHistoryDoc extends IModelStripScoreHistory, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IModelStripScoreHistoryModel = Model<IModelStripScoreHistoryDoc>;
