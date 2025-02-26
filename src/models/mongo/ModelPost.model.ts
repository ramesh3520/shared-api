import { Schema, model } from 'mongoose';
import { IModelPostDoc, IModelPostModel } from '@schemas/mongo/ModelPost.js';
import { ObjectId } from '@schemas';
import { ClubType } from '@enums/ClubType.enum';

const ModelPostSchema = new Schema<IModelPostDoc>(
    {
        modelId: { type: ObjectId, ref: 'User', required: true },
        posts: [
            new Schema(
                {
                    imageUrl: { type: String, lowercase: true },
                    blurImageUrl: { type: String, lowerCase: true },
                    approved: { type: Boolean, default: false },
                    description: { type: String },
                    likes: [{ type: ObjectId }],
                    fanClub: {
                        enable: { type: Boolean, default: false },
                        freeFor: [{ type: String, enum: Object.values(ClubType) }],
                    },
                    isDeleted: { type: Boolean, default: false },
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

export const ModelPost = model<IModelPostDoc, IModelPostModel>('ModelPost', ModelPostSchema, 'modelposts');
