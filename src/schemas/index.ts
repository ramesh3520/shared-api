import { Schema, Types } from 'mongoose';
import { Status, FilterGender } from '@enums';

export type TypesObjectId = Types.ObjectId;
export type Role = 'vip' | 'fan' | 'vvip' | 'admin' | 'studio';
export const ObjectId = Schema.Types.ObjectId;
export type GenderType = FilterGender.MALE | FilterGender.Women | FilterGender.TRANSSEXUAL | FilterGender.COUPLE;

export interface CommonSchemaProps {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface CommonId {
    id: TypesObjectId;
}

export interface CommonStatus {
    status: Status;
}

export interface Pagination {
    page: number;
    perPage: number;
}

export * from './mongo/User';
export * from './mongo/UserSession';
export * from './mongo/UserProfile';
export * from './mongo/UserAlbum';
export * from './postgresql/UserTokenHistory';
export * from './mongo/UserCollection';
export * from './mongo/UserFeedbackAndReport';
export * from './mongo/ModelProfile';
export * from './mongo/ModelAlbum';
export * from './mongo/ModelVideo';
export * from './mongo/ModelPost';
export * from './postgresql/ModelTokenHistory';
export * from './postgresql/ModelFanClub';
export * from './mongo/ModelReview';
export * from './mongo/ModelBroadcastDetail';
export * from './mongo/ModelBroadcastMyShowControl';
export * from './mongo/PaymentsSetting';
export * from './mongo/PaymentMethod';
export * from './mongo/StudioProfile';
export * from './mongo/StudioAlbum';
export * from './postgresql/StudioTokenHistory';
export * from './mongo/Person';
export * from './mongo/StudioDocument';
export * from './mongo/Friend';
export * from './mongo/Room';
export * from './mongo/WhatsNew';
export * from './mongo/CookiesPolicy';
export * from './mongo/ModelStripScoreHistory';
export * from './mongo/Country';
export * from './mongo/PrivacyPolicy';
export * from './mongo/TermsOfUse';
export * from './mongo/RewardInTimeSlot';
export * from './mongo/LeagueLevelAndXpRule';
export * from './mongo/ReportContent';
export * from './mongo/BannedUser';
