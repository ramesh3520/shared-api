import { ObjectId } from '@schemas';
import { IModelReviewDoc, IModelReviewModel } from '@schemas/mongo/ModelReview';
import { Schema, model } from 'mongoose';

const ModelReviewSchema = new Schema<IModelReviewDoc>(
    {
        modelId: {
            type: ObjectId,
            ref: 'User',
            required: true,
            unique: true,
        },
        reviews: [
            new Schema(
                {
                    showType: { type: String, required: true }, // private, execlusive
                    userId: { type: ObjectId, ref: 'User', required: true },
                    reviews: { type: String, required: true },
                    ratings: { type: Number },
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

export const ModelReview = model<IModelReviewDoc, IModelReviewModel>('ModelReview', ModelReviewSchema, 'modelreviews');
