import { IsAccepted } from '@enums';
import { IFriend, IFriendDoc } from '@schemas';
import { Schema, Types, model } from 'mongoose';

// Friend Request schema
const friendSchema = new Schema<IFriendDoc>(
    {
        sender: { type: Types.ObjectId, required: true }, //sender

        receiver: { type: Types.ObjectId, required: true }, // receiver

        isAccepted: { type: String, enum: Object.values(IsAccepted), default: IsAccepted.PENDING },
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

export const Friend = model<IFriendDoc, IFriend>('Friend', friendSchema, 'friends');
