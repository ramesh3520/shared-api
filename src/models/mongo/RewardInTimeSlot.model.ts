import { IRewardInTimeSlotDoc, IRewardInTimeSlotModel, ObjectId } from '@schemas';
import { model, Schema } from 'mongoose';

const RewardInTimeSlotSchema = new Schema<IRewardInTimeSlotDoc>(
    {
        startTimePeriod: { type: Date, required: true },
        endTimePeriod: { type: Date, required: true },
        winners: [
            {
                modelId: { type: ObjectId, required: true },
                stripScore: { type: Number, required: true },
                amount: { type: Number, required: true },
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

export const RewardInTimeSlot = model<IRewardInTimeSlotDoc, IRewardInTimeSlotModel>(
    'RewardInTimeSlot',
    RewardInTimeSlotSchema,
    'rewardintimeslothistory'
);
