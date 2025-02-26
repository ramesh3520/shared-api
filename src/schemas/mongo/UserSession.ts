import { Document, Model } from 'mongoose';
import { TypesObjectId } from '@schemas';

export interface IUseression {
    userId: TypesObjectId;
    deviceType: string;
    osType: string;
    isActive: boolean;
    isDeleted: boolean;
}

export interface IUserSessionDoc extends IUseression, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IUserSessionModel = Model<IUserSessionDoc>;

// interface for filter
export interface UserId {
    userId: TypesObjectId;
}

export interface DeviceType {
    deviceType: string;
}

export interface OsType {
    osType: string;
}

export interface IsActive {
    isActive: boolean;
}

export interface IsDeleted {
    isDeleted: boolean;
}
