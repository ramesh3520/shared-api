import Joi from 'joi';
import moment from 'moment-timezone';
import { isValidObjectId } from '@utils';
import { Status } from '@enums';

export const patterns = {
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,15}$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //NOSONAR,
    number: /^\d+$/,
    countryCode: /^\+\d{1,4}$/,
    phone: /^\d{4,15}$/,
    timeIn24Hours: /^([01]\d|2[0-3]):([0-5]\d)$/,
    otp: /^\d{6}$/,
    utcDateTime: /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
    version: /^\d+\.\d+\.\d+$/,
};

export const joi = Joi.extend(joi => {
    return {
        type: 'objectId',
        base: joi.string(),
        rules: {
            isValid: {
                alias: 'valid',
                method() {
                    return this.$_addRule('isValid');
                },
                validate(value, helpers) {
                    if (!isValidObjectId(value)) {
                        return helpers.error('objectId.isValid');
                    }
                    return value;
                },
            },
        },
    };
});

export const commonValidations = {
    id: joi.objectId().valid().required(),
    optionalId: joi.objectId().valid().optional(),
    email: joi.string().trim().lowercase().regex(patterns.email, 'emailPattern').required(),
    password: joi.string().trim().min(8).max(72).regex(patterns.password, 'passwordPattern').required(),
    otp: joi.string().trim().regex(patterns.otp, 'otpPattern').required(),
    token: joi.string().trim().hex().required(),
    country: joi.string().trim().required(),
    countryCode: joi.string().trim().regex(patterns.countryCode, 'countryCodePattern').required(),
    phone: joi.string().trim().regex(patterns.phone, 'phonePattern').required(),
    page: joi.number().integer().min(1).required(),
    perPage: joi.number().integer().min(1).required(),
    timeIn24Hours: joi.string().trim().regex(patterns.timeIn24Hours, 'timeIn24Hours').required(),
    fileString: joi.string().trim().required(),
    dob: joi.date().min(moment().subtract(100, 'years').format('YYYY-MM-DD')).required(),
    todayDate: joi.date().min(moment().format('YYYY-MM-DD')).required(),
    deviceToken: joi.string().trim().required(),
    coordinates: joi.array().items(joi.number()).length(2).required(),
    status: joi.string().trim().valid(Status.ACTIVE, Status.INACTIVE).required(),
};
