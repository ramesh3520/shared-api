import { IsAccepted } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IFriendAll {
    sender?: TypesObjectId;
    receiver?: TypesObjectId;
    isAccepted: IsAccepted;
}
export interface IFriendDoc extends IFriendAll, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IFriend = Model<IFriendDoc>;
