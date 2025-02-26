import { BannedType } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';
import { Gender } from '@enums';
import { Days } from '@enums/Days.enum';

interface IInterests {
    sexualIn: string[];
    creativity: string[];
    sport: string[];
    socialLive: string[];
    homeTime: string[];
    moviesTime: string[];
    music: string[];
    foodDrinks: string[];
    travelling: string[];
}

interface ISocialLinks {
    twitterUrl: string;
    instagramUrl: string;
    facebookUrl: string;
    myfanClubUrl: string;
    amazonWishListUrl: string;
    fanCentroUrl: string;
}

interface IBannedCountryAndRegion {
    country: string[];
    banned: string;
    region: {
        [countryName: string]: string[];
    };
}
interface ICountryAndAgeCategory {
    showInAgeCategory: boolean;
    showInCountryCategory: boolean;
    showCountryAndFlagInProfile: boolean;
}

interface IMessageTranslation {
    enable: boolean;
    language: string; //example engliss
}

interface IActiveSession {
    deviceOs: string; //example windows
    browser: string; // chrome
    country: string;
    Date: string;
    logout: boolean;
}

type email = {
    offlineTips: boolean;
    privateMessages: boolean;
    productUpdates: boolean;
};

type webPush = {
    offlineTips: boolean;
    privateMessages: boolean;
    productUpdates: boolean;
};

interface INotification {
    email: email;
    webPush: webPush;
    telegramCamBot: string; // Discuss,
}

type blockWordsAndPhrases = {
    enable: boolean;
    wordsAndPhrases: string[];
};

interface studio {
    studioId: TypesObjectId;
    isRemove?: boolean;
    isDelete?: boolean;
}

interface ISettingAndPrivacy {
    bannedCountyAndRegion: IBannedCountryAndRegion;
    countryAndAgeCategory: ICountryAndAgeCategory;
    messageTranslation: IMessageTranslation;
    twoFactorAuthentication: boolean;
    activeSession: IActiveSession;
    notification: INotification;
    blockWordsAndPhrases: blockWordsAndPhrases;
    timeZone: string;
    contentInPromos: boolean;
    DMCA: string[]; // example :link of your vidoes,photos on third party url
    copyContentToMyClub: boolean;
}

interface IBannedUser {
    userId: TypesObjectId;
    bannedType: BannedType;
    lastAction: Date;
}

interface IBroadcastSchedule {
    isEnable: boolean;
    broadCastDetails: {
        dayType: Days;
        isActive: boolean;
        timings: [
            {
                start_time: Date;
                end_time: Date;
                isDeleted: boolean;
            },
        ];
    };
}
// export interface IDeleteMyAccount {
//     isMyAccountDeleted: boolean;
//     description: string;
// }

export interface IModelProfile {
    modelId: TypesObjectId; //  reference to users Collection
    modelName: string;
    interestedIn: string;
    DOB: Date;
    language: string[]; // string[] of strings
    bodyType: string; // enums
    ethinicity: string; // enums
    specifics: string[]; // string[] of string
    hairColor: string; // enum
    eyeColor: string; // enums
    subCulture: string; // enums
    description: string;
    profilePhoto: string;
    coverPhoto: string;
    idIssuingCountry: string;
    idType: string; //  enums: identification according to country
    gender: Gender;
    studio?: studio; // reference to Studio Collection
    favoritedBy: TypesObjectId[];
    reviewIds?: TypesObjectId[]; // reference to Reviews  Collection
    socialLinks: ISocialLinks;
    interests: IInterests;
    albumId?: TypesObjectId;
    settingAndPrivacy: ISettingAndPrivacy;
    deleteMyAccount: {
        isMyAccountDeleted: boolean;
        description: string;
    };
    friends?: TypesObjectId[];
    flirtingMode: boolean;
    posts?: TypesObjectId;
    broadcastCenter: {
        broadcastModelDetail?: TypesObjectId;
        broadcastMyShowCOntrol?: TypesObjectId;
    };
    myPersons: TypesObjectId[];
    enquiryId: string;
    myCustomPanel: {
        panelTitle: string;
        imageUrl: string;
        description: string;
        linkToTheImage: string;
    }[];
    location: {
        countryId: TypesObjectId;
    };
    bannedUsers: IBannedUser;
    knights: TypesObjectId[];
    broadcastSchedule: IBroadcastSchedule[];
}

export interface IModelProfileDoc extends IModelProfile, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IModelProfileModel = Model<IModelProfileDoc>;
