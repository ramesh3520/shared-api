import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

interface Iinterests {
    sexualIn: string[];
    creativity: string[];
    sport: string[];
    socialLive: string[];
    homeTime: string[];
    moviesTime: string[];
    music: string[];
    foodDrinks: string[];
    traveling: string[];
}

interface IActiveSession {
    deviceOs: string; //example windows
    browser: string; // chrome
    country: string;
    Date: string;
    logout: boolean;
}

type email = {
    modelLive: boolean;
    privateMessages: boolean;
    productUpdates: boolean;
};

type webPush = {
    modelLive: boolean;
    privateMessages: boolean;
    productUpdates: boolean;
};

interface INotification {
    email: email;
    webPush: webPush;
    telegramCamBot: string; // Discuss,
}

interface ISettingAndPrivacy {
    profileVisible: string;
    twoFactorAuthentication: boolean;
    activeSession: IActiveSession;
    notification: INotification;
    copyContentToMyClub: boolean;
}

interface IModel {
    model: TypesObjectId;
    persons?: TypesObjectId[];
}

export interface IStudioProfile {
    studioId: TypesObjectId;
    studioName: string;
    profilePhoto: string;
    coverPhoto: string;
    interestIn: string;
    DOB: Date;
    country: string;
    region: string;
    city: string;
    language: string[]; // string[] of strings
    location?: {
        country: string;
        city: string;
        region: string;
    };
    bodyType: string; // enums
    ethinicity: string; // enums
    specifics: string[]; // string[] of string
    hairColor: string; // enums
    eyeColor: string; // enums
    subCulture: string; // enums
    models?: IModel[];
    gender: string;
    interests: Iinterests;
    albumId?: TypesObjectId;
    settingAndPrivacy: ISettingAndPrivacy;
    friends: TypesObjectId[];
    studioAdmin: TypesObjectId[];
    studioModerator: TypesObjectId[];
}

export interface IStudioProfileDoc extends IStudioProfile, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IStudioProfileModel = Model<IStudioProfileModel>;
