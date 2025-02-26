import { ClubType } from '@enums';
import { ILeagueLevelAndXpRuleDoc, ILeagueLevelAndXpRuleModel } from '@schemas';
import { model, Schema } from 'mongoose';

const LeagueLevelAndXpRuleSchema = new Schema<ILeagueLevelAndXpRuleDoc>(
    {
        xpPerTokenSpent: { type: Number, required: true },
        xpForWatching: {
            xp: { type: Number, required: true },
            durationInMinutes: { type: Number, required: true },
            uptoLevel: { type: Number, required: true },
        },
        xpForFirstTokenPurchase: { type: Number, required: true },
        xpForEmailVerification: { type: Number, required: true },
        xpForJoiningFanclub: [
            {
                clubType: { type: String, required: true, enum: Object.values(ClubType) },
                durationInMonth: { type: Number, required: true },
                xp: { type: Number, required: true },
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

// Export the model
export const LeagueLevelAndXpRule = model<ILeagueLevelAndXpRuleDoc, ILeagueLevelAndXpRuleModel>(
    'LeagueLevelAndXpRule',
    LeagueLevelAndXpRuleSchema,
    'leaguelevelandxprules'
);
