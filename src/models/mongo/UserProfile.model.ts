import { Ethnicity, Eyecolor, Hair, Language, Specific, Subculture } from '@enums';
import { BodyType } from '@enums/BodyType.enum';
import { Gender } from '@enums/Gender.enum';
import { InterestedIn } from '@enums/InterestedIn.enum';
import { ProfileVisibility } from '@enums/ProfileVisibility.enum';
import { StudioAdminModerator } from '@enums/StudioAdminModerator.enum';
import { TokenVisibility } from '@enums/TokenVisibility.enum';
import { IUserProfileDoc, IUserProfileModel, ObjectId } from '@schemas';
import { model, Schema } from 'mongoose';

const UserProfileSchema = new Schema<IUserProfileDoc>(
    {
        userId: { type: ObjectId, ref: 'User', required: true, unique: true, index: 1 },
        profilePic: { type: String },
        description: { type: String },
        displayName: { type: String },
        gender: { type: String, enum: Object.values(Gender) },
        interestedIn: { type: String, enum: Object.values(InterestedIn) },
        birthDate: { type: Date },
        bodyType: { type: String, enum: Object.values(BodyType) },
        ethnicity: { type: String, enum: Object.values(Ethnicity) },
        specifics: [{ type: String, enum: Object.values(Specific) }],
        hairColor: { type: String, enum: Object.values(Hair) },
        eyeColor: { type: String, enum: Object.values(Eyecolor) },
        subCulture: { type: String, enum: Object.values(Subculture) },
        interests: [{ type: String }],
        coverPicture: { type: String },
        location: {
            country: { type: ObjectId, ref: 'Country' },
            city: { type: String },
            region: { type: String },
        },
        languages: [{ type: String, enum: Object.values(Language) }],
        invisibleMode: { type: Boolean, default: false },
        friends: [{ type: ObjectId }],
        settingAndPrivacy: {
            profileVisibleTo: {
                type: String,
                enum: Object.values(ProfileVisibility),
                default: ProfileVisibility.EVERYONE,
            },
            tokenVisibleTo: {
                type: String,
                enum: Object.values(TokenVisibility),
                default: TokenVisibility.MODELS,
            },
            productsUpdateAndPromoEmail: {
                productUpdates: { type: Boolean, default: false },
                specialOffers: { type: Boolean, default: false },
            },
            autoRefill: { type: Boolean, default: false },
            twoFactorAuthentication: {
                type: Boolean,
                default: false,
            },
        },
        deleteMyAccount: {
            isMyAccountDeleted: { type: Boolean, default: false },
            description: { type: String },
        },
        notification: {
            email: { type: Boolean, default: false },
            browserNotification: { type: Boolean, default: false },
            telegramNotification: { type: Boolean, default: false },
            plasmaMessengerNotification: { type: Boolean, default: false },
            modelList: [
                {
                    modelId: { type: ObjectId, ref: 'User' },
                    email: { type: Boolean, default: false },
                    browserNotification: { type: Boolean, default: false },
                    telegramNotification: { type: Boolean, default: false },
                    plasmaMessengerNotification: { type: Boolean, default: false },
                },
            ],
        },
        myFavorites: [{ type: ObjectId }],
        notInterested: [{ type: ObjectId }],
        history: [
            {
                modelId: { type: ObjectId, required: true, ref: 'User' },
                date: { type: Date, default: Date.now },
            },
        ],
        isKnight: {
            modelId: { type: ObjectId },
            knight: { type: Boolean, default: false },
        },
        studioAdminRoleType: {
            studioId: { types: ObjectId },
            roleType: { type: String, enum: Object.values(StudioAdminModerator) },
        },
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

export const UserProfile = model<IUserProfileDoc, IUserProfileModel>('UserProfile', UserProfileSchema, 'userprofiles');
