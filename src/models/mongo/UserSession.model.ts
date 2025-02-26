import { model, Schema } from 'mongoose';
import { ObjectId } from '@schemas';
import { IUserSessionDoc, IUserSessionModel } from '@schemas/mongo/UserSession';

const UserSessionSchema = new Schema<IUserSessionDoc>(
    {
        userId: { type: ObjectId, required: true },
        deviceType: { type: String, required: true },
        osType: { type: String, required: true },
        isActive: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
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

export const UserSession = model<IUserSessionDoc, IUserSessionModel>('UserSession', UserSessionSchema, 'user-sessions');
