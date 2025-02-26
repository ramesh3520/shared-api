import { StripScoreFactor } from '@enums';
import { IModelStripScoreHistoryDoc, IModelStripScoreHistoryModel, ObjectId } from '@schemas';
import { model, Schema } from 'mongoose';

const ModelStripScoreSchema = new Schema<IModelStripScoreHistoryDoc>(
    {
        modelId: { type: ObjectId, required: true, unique: true, ref: 'User' },
        totalStripScore: { type: Number, default: 0 },
        stripHistory: [
            {
                stripScore: { type: Number, required: true },
                stripScoreFactor: { type: String, enum: Object.values(StripScoreFactor), required: true },
                date: { type: Date, default: Date.now },
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

export const ModelStripScoreHistory = model<IModelStripScoreHistoryDoc, IModelStripScoreHistoryModel>(
    'ModelStripScore',
    ModelStripScoreSchema,
    'modelstripscorehistory'
);
