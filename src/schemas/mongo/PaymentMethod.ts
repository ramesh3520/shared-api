import { Status } from '@enums';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IPaymentMethod {
    name: string;
    paymentCurrency: string[];
    minimumPayment: string;
    details: string[];
    Status: Status;
}

export interface IPaymentMethodDoc extends IPaymentMethod, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IPaymentMethodsModel = Model<IPaymentMethodDoc>;
