import { Schema, model } from 'mongoose';
import { IModelProfileDoc, IModelProfileModel, ObjectId } from '@schemas';
import {
    BannedType,
    BodyType,
    Days,
    Ethnicity,
    Eyecolor,
    Gender,
    Hair,
    InterestedIn,
    Language,
    Specific,
    Subculture,
} from '@enums';

const ModelProfileSchema = new Schema<IModelProfileDoc>(
    {
        modelId: { type: ObjectId, ref: 'User', required: true }, //  reference to users Collection
        modelName: { type: String },
        interestedIn: {
            type: String,
            enum: Object.values(InterestedIn),
        },
        DOB: { type: Date },
        language: [{ type: String, enum: Object.values(Language) }],
        bodyType: {
            type: String,
            enum: Object.values(BodyType),
        }, // enums
        ethinicity: { type: String, enum: Object.values(Ethnicity) },
        specifics: [{ type: String, enum: Object.values(Specific) }], // string[] of string
        hairColor: { type: String, enum: Object.values(Hair) },
        eyeColor: { type: String, enum: Object.values(Eyecolor) }, // enums
        subCulture: { type: String, enum: Object.values(Subculture) }, // enums
        description: { type: String },
        profilePhoto: { type: String },
        coverPhoto: { type: String },
        idIssuingCountry: { type: String },
        idType: { type: String },
        gender: { type: String, enum: Object.values(Gender) },
        studio: {
            studioId: { type: ObjectId },
            isRemove: { type: Boolean, default: false },
            isDelete: { type: Boolean, default: false },
        }, // reference to Studio Collection
        favoritedBy: [{ type: ObjectId, default: [] }],
        reviewIds: [{ type: ObjectId, default: [] }], // reference to Reviews  Collection
        socialLinks: {
            twitterUrl: { type: String, default: null },
            instagramUrl: { type: String, default: null },
            facebookUrl: { type: String, default: null },
            myfanClubUrl: { type: String, default: null },
            amazonWishListUrl: { type: String, default: null },
            fanCentroUrl: { type: String, default: null },
        },
        interests: {
            sexualIn: [{ type: String, lowercase: true }],
            creativity: [{ type: String, lowercase: true }],
            sport: [{ type: String, lowercase: true }],
            socialLive: [{ type: String, lowercase: true }],
            homeTime: [{ type: String, lowercase: true }],
            moviesTime: [{ type: String, lowercase: true }],
            music: [{ type: String, lowercase: true }],
            foodDrinks: [{ type: String, lowercase: true }],
            travelling: [{ type: String, lowercase: true }],
        },
        settingAndPrivacy: {
            bannedCountryAndRegion: {
                country: [{ type: String, default: [] }],
                banned: { type: String, default: null },
                region: { type: Map, of: [String], default: {} },
            },
            countryAndAgeCategory: {
                showInAgeCategory: { type: Boolean, default: false },
                showInCountryCategory: { type: Boolean, default: false },
                showCountryAndFlagInProfile: { type: Boolean, default: false },
            },
            messageTranslation: {
                enable: { type: Boolean, default: false },
                language: { type: String, default: 'english' }, //example engliss
            },
            twoFactorAuthentication: { type: Boolean, default: false },
            activeSession: {
                deviceOs: { type: String, default: null }, //example windows
                browser: { type: String, default: null }, // chrome
                country: { type: String, default: null },
                Date: { type: String, default: null },
                logout: { type: Boolean, default: false },
            },
            notification: {
                email: {
                    offlineTips: { type: Boolean, default: false },
                    privateMessages: { type: Boolean, default: false },
                    productUpdates: { type: Boolean, default: false },
                },
                webPush: {
                    offlineTips: { type: Boolean, default: false },
                    privateMessages: { type: Boolean, default: false },
                    productUpdates: { type: Boolean, default: false },
                },
                telegramCamBot: { type: String, default: false }, // Discuss,
            },
            blockWordsAndPhrases: {
                enable: { type: Boolean, default: false },
                wordsAndPhrases: [{ type: String, default: [] }],
            },
            timeZone: { type: String, default: 'india' },
            contentInPromos: { type: Boolean, default: false },
            DMCA: [{ type: String, default: [] }], // example :link of your vidoes,photos on third party url
            copyContentToMyClub: { type: Boolean, default: false },
        },
        deleteMyAccount: {
            isMyAccountDeleted: { type: Boolean, default: false },
            description: { type: String },
        },
        friends: [{ type: ObjectId }],
        flirtingMode: { type: Boolean, default: false },
        posts: { type: ObjectId, ref: 'ModelPost' },
        myPersons: [{ type: ObjectId, ref: 'Person', default: [] }],
        enquiryId: { type: String },
        myCustomPanel: [
            {
                panelTitle: { type: String },
                imageUrl: { type: String },
                description: { type: String },
                linkToTheImage: { type: String },
            },
        ],
        location: {
            countryId: { type: ObjectId, ref: 'Country' }, //  reference to country Collection
        },
        bannedUsers: [
            new Schema(
                {
                    userId: { type: ObjectId },
                    bannedType: {
                        type: String,
                        enum: Object.values(BannedType),
                    },
                },
                { timestamps: true }
            ),
        ],
        knights: [{ type: ObjectId }],
        broadcastSchedule: [
            {
                isEnable: { type: Boolean, default: false },
                broadCastDetails: {
                    dayType: {
                        type: String,
                        enum: Days,
                        default: 'Monday',
                    },
                    isActive: { type: Boolean, default: false },

                    timings: [
                        {
                            start_time: { type: String, required: true },
                            end_time: { type: String, required: true },
                            isDeleted: { type: Boolean, default: false },
                        },
                    ],
                },
            },
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

export const ModelProfile = model<IModelProfileDoc, IModelProfileModel>(
    'ModelProfile',
    ModelProfileSchema,
    'modelprofiles'
);
