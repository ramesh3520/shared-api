import { ModelVideoAndAlbumAccess } from '@enums/ModelVideoAndAlbumAccess';
import { ModelFanClubAccess } from '@enums/ModelFanClubAccess.enum';
import { ObjectId } from '@schemas';
import { IModelAlbumDoc, IModelAlbumModel } from '@schemas/mongo/ModelAlbum';
import { model, Schema } from 'mongoose';

const ModelAlbumSchema = new Schema<IModelAlbumDoc>(
    {
        modelId: { type: ObjectId, ref: 'User', required: true },
        name: { type: String, required: true },
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
        token: { type: Number, default: 0 },
        images: [
            new Schema(
                {
                    imageUrl: { type: String },
                    blurImageUrl: { type: String, required: false },
                    approved: { type: Boolean, default: false },
                    isDeleted: { type: Boolean, default: false },
                },
                { timestamps: true }
            ),
        ],
        likes: [{ type: ObjectId, default: [] }],
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

ModelAlbumSchema.index({ name: 1 }, { collation: { locale: 'en', strength: 2 }, background: true });

export const ModelAlbum = model<IModelAlbumDoc, IModelAlbumModel>('ModelAlbum', ModelAlbumSchema, 'modelalbums');
