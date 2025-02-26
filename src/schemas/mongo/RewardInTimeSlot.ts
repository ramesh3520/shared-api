import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IWinner {
    modelId: TypesObjectId;
    stripScore: number;
    amount: number;
}

export interface IRewardInTimeSlot {
    startTimePeriod: Date;
    endTimePeriod: Date;
    winners: IWinner[];
}

export interface IRewardInTimeSlotDoc extends IRewardInTimeSlot, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IRewardInTimeSlotModel = Model<IRewardInTimeSlotDoc>;
