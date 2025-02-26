import { IModelBroadcastMyShowControlDoc, IModelBroadcastMyShowControlModel, ObjectId } from '@schemas';
import { model, Schema } from 'mongoose';

const ModelBroadcastMyShowControlSchema = new Schema<IModelBroadcastMyShowControlDoc>({
    modelId: { type: ObjectId, required: true, ref: 'User' },
    twitterAutoPost: { type: Boolean, default: false },
    topicOfTheShow: { type: String },
    recordShow: {
        publicShow: {
            record: { type: Boolean, default: false },
            tokenPerMinutes: { type: Number },
        },
        privateShow: {
            record: { type: Boolean, default: false },
            tokenPerMinutes: { type: Number },
        },
    },
    whoCanChat: { type: String },
    tipsMenu: {
        enable: { type: Boolean, default: false },
        previews: {
            previewName: { type: String },
            activities: [
                {
                    activityName: { type: String },
                    token: { type: Number },
                },
            ],
        },
    },
    kingOfTheRoom: { type: Number },
});

export const ModelBroadcastMyShowControl = model<IModelBroadcastMyShowControlDoc, IModelBroadcastMyShowControlModel>(
    'ModelBroadcastMyShowControl',
    ModelBroadcastMyShowControlSchema,
    'modelbroadcastmyshowcontrols'
);
