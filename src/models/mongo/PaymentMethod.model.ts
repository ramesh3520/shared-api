import { Schema, model } from 'mongoose';
import { IPaymentMethodDoc, IPaymentMethodsModel } from '@schemas';
import { Status } from '@enums';

const paymentMethodSchema = new Schema<IPaymentMethodDoc>(
    {
        name: { type: String, required: true },
        Status: { type: String, enum: Object.values(Status), default: Status.ACTIVE },
        paymentCurrency: [{ type: String, required: true }],
        minimumPayment: { type: String, required: true },
        details: [{ type: String, required: true }],
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

export const PaymentsMethod = model<IPaymentMethodDoc, IPaymentMethodsModel>(
    'paymentMethod',
    paymentMethodSchema,
    'PaymentMethods'
);
