import { ObjectId } from '@schemas';
import { IUserCollectionDoc, IUserCollectionModel } from '@schemas/mongo/UserCollection';
import { model, Schema } from 'mongoose';

const UserCollectionSchema = new Schema<IUserCollectionDoc>(
    {
        userId: { type: ObjectId, ref: 'User', index: 1 },
        modelId: { type: ObjectId, ref: 'User' },
        albumIds: [{ type: ObjectId }],
        videoIds: [{ type: ObjectId }],
        postIds: [{ type: ObjectId }],
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

export const UserCollection = model<IUserCollectionDoc, IUserCollectionModel>(
    'UserCollection',
    UserCollectionSchema,
    'usercollections'
);
