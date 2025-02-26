import { MastersStatus } from '@enums/MastersStatus.enum';
import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

export interface IFoodAndDrinks {
    name: string;
    icon: string;
    status: MastersStatus;
}

export interface IFoodAndDrinksDoc extends IFoodAndDrinks, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IFoodAndDrinksModel = Model<IFoodAndDrinksDoc>;
