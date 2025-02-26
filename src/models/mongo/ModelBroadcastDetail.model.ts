import { IModelBroadcastDetailDoc, IModelBroadcastDetailModel, ObjectId } from '@schemas';
import { model, Schema } from 'mongoose';

const ModelBroadcastModelDetailSchema = new Schema<IModelBroadcastDetailDoc>(
    {
        modelId: { type: ObjectId, required: true, ref: 'User' },
        liveStatus: { type: Boolean, default: false },
        toyConnection: { type: Boolean, default: false },
        isMobile: { type: Boolean, default: false },
        isNewModel: { type: Boolean, default: true },
        isTickShowAnnounced: { type: Boolean, default: false },
        startedShow: {
            showType: { type: String, default: 'public' },
            description: { type: String, default: null },
        },
        myShowActivities: {
            publicShowIdo: [{ type: String }],
            privateShowIdo: [{ type: String }],
            exclusivePrivateShowIdo: [{ type: String }],
        },
        streamSpecifics: [
            {
                specifies: { type: String },
                verified: { type: Boolean },
                url: { type: String },
            },
        ],
        pricing: {
            privateShows: {
                isEnabled: { type: Boolean, default: false },
                token: { type: Number },
                minutes: { type: Number },
            },
            exclusivePrivate: {
                isEnabled: { type: Boolean, default: false },
                token: { type: Number },
                minutes: { type: Number },
            },
            spying: {
                isEnabled: { type: Boolean, default: false },
                token: { type: Number },
                minutes: { type: Number },
            },
            groupShow: {
                token: { type: Number },
            },
            ticketShow: {
                token: { type: Number },
            },
            advancedSetting: {
                VRPrivateShow: {
                    token: { type: Number },
                },
            },
        },
        offlineStatusInStream: { type: String },
        previews: {
            imageUrl: { type: String, required: true },
            videoUrl: { type: String, required: true },
        },
        firstBroadcastDate: { type: Date },
    },
    { timestamps: true }
);

export const ModelBroadcastDetail = model<IModelBroadcastDetailDoc, IModelBroadcastDetailModel>(
    'ModelBroadcastDetail',
    ModelBroadcastModelDetailSchema,
    'modelbroadcastdetails'
);
