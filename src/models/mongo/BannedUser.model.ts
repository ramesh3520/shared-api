import { Schema, model } from 'mongoose';
import { BannedType } from '@enums';
import { ObjectId } from '@schemas';
import { IBannedUserDoc, IBannedUserModel } from '@schemas/mongo/BannedUser';

const BannedUserSchema = new Schema<IBannedUserDoc>(
    {
        modelId: { type: ObjectId, ref: 'User', required: true }, //  reference to users Collection
        bannedUsers: [
            new Schema(
                {
                    userId: { type: ObjectId, ref: 'User', required: true },
                    bannedType: {
                        type: String,
                        enum: Object.values(BannedType),
                    },
                    bannedByUserId: { type: ObjectId, ref: 'User', required: true },
                },
                { timestamps: true }
            ),
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

export const BannedUser = model<IBannedUserDoc, IBannedUserModel>('BannedUser', BannedUserSchema, 'bannedusers');
