import { Schema, model } from 'mongoose';
import { IPaymentsSettingsModel, IPaymentsSettingDoc } from '@schemas';

const paymentsSettingSchema = new Schema<IPaymentsSettingDoc>(
    {
        payment: {
            paymentMethod: { type: String, required: true },
            paymentCurrency: { type: String, required: true },
            minimumPayment: { type: String, required: true },
        },
        legalDetails: {
            paymentRecipient: { type: String, required: true },
            countryOfResidence: { type: String, required: true },
            primaryAddressOfResidence: { type: String, required: true },
            TaxpayerIdentificationNumber: {
                isEnable: { type: Boolean, required: true },
                value: { type: String },
            },
            VATNumber: {
                isEnable: { type: Boolean, required: true },
                value: { type: String },
            },
        },
        paymentMethodDetails: {
            type: Schema.Types.Mixed,
            required: true,
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

export const PaymentsSetting = model<IPaymentsSettingDoc, IPaymentsSettingsModel>(
    'PaymentsSetting',
    paymentsSettingSchema,
    'paymentsSettings'
);
