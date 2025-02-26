import { model, Schema } from 'mongoose';
import { IModelVideoDoc, IModelVideoModel } from '@schemas/mongo/ModelVideo';
import { ObjectId } from '@schemas';
import { ModelVideoAndAlbumAccess } from '@enums/ModelVideoAndAlbumAccess';
import { ModelFanClubAccess } from '@enums/ModelFanClubAccess.enum';

const ModelVideoSchema = new Schema<IModelVideoDoc>(
    {
        modelId: { type: ObjectId, required: true },
        videoName: { type: String },
        videoUrl: { type: String, lowercase: true },
        likes: [{ type: ObjectId }],
        coverUrl: { type: String, lowercase: true },
        access: {
            type: String,
            enum: Object.values(ModelVideoAndAlbumAccess),
            required: true,
        },
        fanclubAccess: {
            type: String,
            enum: Object.values(ModelFanClubAccess),
            lowercase: true,
        },
        token: { type: Number },
        blurImageUrl: { type: String, required: false },
        approved: { type: Boolean, default: false },
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

export const ModelVideo = model<IModelVideoDoc, IModelVideoModel>('ModelVideo', ModelVideoSchema, 'modelvideos');
