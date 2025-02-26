import { Gender } from '@enums';
import { ProfileVisibility } from '@enums/ProfileVisibility.enum';
import { TokenVisibility } from '@enums/TokenVisibility.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

// interface for the setting and privacy
export interface ISettingAndPrivacy {
    profileVisibleTo: ProfileVisibility;
    tokenVisibleTo: TokenVisibility;
    productsUpdateAndPromoEmail: {
        productUpdates: boolean;
        specialOffers: boolean;
    };
    autoRefill: boolean;
    twoFactorAuthentication: boolean;
}

// interface for list of models for which user allow notification
export interface IModelList {
    modelId: TypesObjectId;
    username: string;
    profilePic: string;
    email: boolean;
    browserNotification: boolean;
    telegramNotification: boolean;
    plasmaMessengerNotification: boolean;
}

//interface for notification
export interface INotification {
    email: boolean;
    browserNotification: boolean;
    telegramNotification: boolean;
    plasmaMessengerNotification: boolean;
    modelList: IModelList[];
}

export interface IHistory {
    modelId: TypesObjectId;
    date: Date;
}

export interface IPurchasedVideos {
    modelId: TypesObjectId;
    videoId: TypesObjectId;
}

export interface IPurchasedAlbums {
    modelId: TypesObjectId;
    albumId: TypesObjectId;
}

export interface IPurchasedPosts {
    modelId: TypesObjectId;
    postId: TypesObjectId;
}

export interface IKnight {
    modelId: TypesObjectId;
    knight: boolean;
}

export interface IStudioAdminRoleType {
    studioId: TypesObjectId;
    roleType: string;
}
export interface IDeleteMyAccount {
    isMyAccountDeleted: boolean;
    description: string;
}

// main interface
export interface IUserProfile {
    userId: TypesObjectId;
    profilePic?: string;
    description?: string;
    displayName?: string;
    gender?: Gender;
    interestedIn?: string;
    birthDate?: Date;
    bodyType?: string;
    ethnicity?: string;
    specifics?: string[];
    hairColor?: string;
    eyeColor?: string;
    subCulture?: string;
    interests?: string[];
    coverPicture?: string;
    location?: {
        country: TypesObjectId;
        city: string;
        region: string;
    };
    invisibleMode?: boolean;
    friends?: TypesObjectId[];
    languages?: string[];
    settingAndPrivacy?: ISettingAndPrivacy;
    deleteMyAccount: IDeleteMyAccount;
    notification?: INotification;
    myFavorites?: TypesObjectId[];
    history?: IHistory[];
    notInterested?: TypesObjectId[];
    purchasedVideos?: IPurchasedVideos[];
    purchasedAlbums?: IPurchasedAlbums[];
    purchasedPosts?: IPurchasedPosts[];
    isKnight?: IKnight;
    studioAdminRoleType?: IStudioAdminRoleType;
}

export interface IUserProfileDoc extends IUserProfile, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IUserProfileModel = Model<IUserProfileDoc>;
