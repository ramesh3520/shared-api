import { Ethnicity, Eyecolor, Hair, Language, Specific, Subculture } from '@enums';
import { BodyType } from '@enums/BodyType.enum';
import { InterestedIn } from '@enums/InterestedIn.enum';
import { ProfileVisibility } from '@enums/ProfileVisibility.enum';
import { ObjectId } from '@schemas';
import { IStudioProfileDoc } from '@schemas/mongo/StudioProfile';
import { Schema, model } from 'mongoose';

const StudioMyInfromationSchema = new Schema<IStudioProfileDoc>(
    {
        studioId: { type: ObjectId, ref: 'User', required: true },
        studioName: { type: String },
        profilePhoto: { type: String },
        coverPhoto: { type: String },
        interestIn: {
            type: String,
            enum: Object.values(InterestedIn),
        },
        DOB: { type: Date },
        country: { type: String },
        region: { type: String },
        city: { type: String },
        language: [{ type: String, enum: Object.values(Language) }],
        bodyType: {
            type: String,
            enum: Object.values(BodyType),
        },
        specifics: [{ type: String, enum: Object.values(Specific) }],
        ethinicity: { type: String, enum: Object.values(Ethnicity) },
        hairColor: { type: String, enum: Object.values(Hair) },
        eyeColor: { type: String, enum: Object.values(Eyecolor) }, // enums
        subCulture: { type: String, enum: Object.values(Subculture) }, // enums
        location: {
            country: { type: ObjectId, ref: 'Country' },
            city: { type: String },
            region: { type: String },
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
        models: [{ type: ObjectId, ref: 'User' }],
        settingAndPrivacy: {
            profileVisible: {
                type: String,
                enum: Object.values(ProfileVisibility),
                default: ProfileVisibility.EVERYONE,
            },
            twoFactorAuthentication: { type: Boolean, default: false },
            notification: {
                email: {
                    modelLive: { type: Boolean, default: false },
                    privateMessages: { type: Boolean, default: false },
                    productUpdates: { type: Boolean, default: false },
                },
                webPush: {
                    modelLive: { type: Boolean, default: false },
                    privateMessages: { type: Boolean, default: false },
                    productUpdates: { type: Boolean, default: false },
                },
                telegram: {
                    telegramCamBot: { type: Boolean, default: false }, // Discuss,
                    modelLive: { type: Boolean, default: false },
                    privateMessages: { type: Boolean, default: false },
                },
            },
            timeZone: { type: String, default: 'india' },
            copyContentToMyClub: { type: Boolean, default: false },
        },
        studioAdmin: [{ type: ObjectId, ref: 'User' }],
        studioModerator: [{ type: ObjectId, ref: 'User' }],
        friends: [{ type: ObjectId }],
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

export const StudioProfile = model('StudioProfile', StudioMyInfromationSchema, 'studioprofiles');
