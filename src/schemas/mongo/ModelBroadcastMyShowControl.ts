import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IModelBroadcastMyShowControl {
    modelId?: TypesObjectId;
    twitterAutoPost: boolean;
    topicOfTheShow: string;
    recordShow: {
        publicShow: {
            record: boolean;
            tokenPerMinutes: number;
        };
        privateShow: {
            record: boolean;
            tokenPerMinutes: number;
        };
    };
    whoCanChat: string;
    tipsMenu: {
        enable: boolean;
        previews: {
            previewName: string;
            activities: {
                activityName: string;
                token: number;
            }[];
        };
    };
    kingOfTheRoom: number;
}

export interface IModelBroadcastMyShowControlDoc extends IModelBroadcastMyShowControl, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IModelBroadcastMyShowControlModel = Model<IModelBroadcastMyShowControlDoc>;
