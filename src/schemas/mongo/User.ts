import { Document, Model } from 'mongoose';
import { Status, UserRole } from '@enums';
import { TypesObjectId } from '@schemas';

interface IStudio {
    studioId: TypesObjectId;
    isRemove?: boolean;
}
export interface IUser {
    studio?: IStudio;
    username: string;
    email?: string;
    password?: string;
    profilePicture?: string;
    status: Status;
    roles: UserRole;
    vvipDetails?: {
        joinedDate?: Date;
        duration?: number;
        endDate?: Date;
    };
    isEmailVerify: boolean;
    personVerify: boolean;
    isVerified: boolean;
    isActive: boolean;
    isDeleted: boolean;
    otpDetails?: {
        otp: number;
        isUsed: boolean;
        validTill: Date;
    };
    twoFactorKey: string;
}

export interface IUserDoc extends IUser, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(password: string): Promise<boolean>;
}

export type IUserModel = Model<IUserDoc>;

// interface for filter
export interface Id {
    id: TypesObjectId;
}

export interface password extends Id {
    password: string;
}

export interface UserName {
    username: string;
}
export interface Roles {
    roles: UserRole;
}
export interface Email {
    email: string;
}
