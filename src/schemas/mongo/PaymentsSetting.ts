import { TypesObjectId } from '@schemas';
import { Document, Model } from 'mongoose';

interface IPaymentMethodDetails {
    [key: string]: string;
}

export interface IPaymentsSetting {
    payment: {
        paymentMethod: string;
        description: string;
        paymentCurrency: string;
        currencyDescription: string;
        minimumPayment: string;
    };

    legalDetails: {
        paymentRecipient: string;
        countryOfResidence: string;
        primaryAddressOfResidence: string;
        TaxpayerIdentificationNumber: string;
        VATNumber: {
            isEnable: boolean;
            value: string;
        };
    };

    paymentMethodDetails: IPaymentMethodDetails;
}

export interface IPaymentsSettingDoc extends IPaymentsSetting, Document {
    _id: TypesObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type IPaymentsSettingsModel = Model<IPaymentsSettingDoc>;
