import { TypesObjectId } from '@schemas';
import { Model, ObjectId } from 'mongoose';
import { Document } from 'typeorm';
// import { ObjectId, Types } from 'mongoose'
export interface IMessage {
    message: string;
    messageType?: string; // Defaults to "text"
    modelId?: ObjectId;
    senderName?: string;
    isDeleted?: boolean; // Defaults to false
    action?: string | null; // Defaults to null
    receiverId?: string; // For private messages
    senderId?: string; // For private messages
}

export interface IPublicMessage {
    isDeleted?: boolean; // Defaults to false
    messages: IMessage[];
}

export interface IPrivateMessage {
    isDeleted?: boolean; // Defaults to false
    messages: IMessage[];
}

export interface IRoom {
    // chatRoomId: ObjectId;
    chatRoomType: string; // Defaults to "public"
    modelId: ObjectId;
    contentViewtype: string;
    status: boolean; // Defaults to true
    viewersCount: number;
    startedAt: Date;
    endedAt?: string; // Optional, as it might not be set initially
    message: {
        public: IPublicMessage;
        private: IPrivateMessage;
    };
    isdelete?: boolean; // Defaults to false
    created?: Date;
    updated?: Date;
}
export interface IRoomDoc extends IRoom, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IRoomModel = Model<IRoomDoc>;
