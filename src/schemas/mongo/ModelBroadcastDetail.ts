import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

interface IStartedShow {
    showType: string;
    description: string;
}

export interface IModelBroadcastModelDetail {
    modelId?: TypesObjectId;
    profileId?: TypesObjectId;
    liveStatus: boolean;
    toyConnection: boolean;
    isMobile: boolean;
    isNewModel: boolean;
    isTickShowAnnounced: boolean;
    startedShow: IStartedShow;
    myShowActivities: {
        publicShowIdo: string[];
        privateShowIdo: string[];
        exclusivePrivateShowIdo: string[];
    };
    streamSpecifics: {
        specifies: string;
        verified: boolean;
        url: string;
    }[];
    pricing: {
        privateShows: {
            token: number;
            minutes: number;
        };
        exclusivePrivate: {
            token: number;
            minutes: number;
        };
        spying: {
            token: number;
            minutes: number;
        };
        groupShow: {
            token: number;
        };
        ticketShow: {
            token: number;
        };
        advancedSetting: {
            VRPrivateShow: {
                token: number;
            };
        };
    };
    offlineStatusInStream: string;
    previews: {
        imageUrl: string;
        videoUrl: string;
    };
    firstBroadcastDate: Date;
}

export interface IModelBroadcastDetailDoc extends IModelBroadcastModelDetail, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IModelBroadcastDetailModel = Model<IModelBroadcastDetailDoc>;
