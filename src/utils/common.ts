import crypto from 'crypto';
import { Types } from 'mongoose';
import moment from 'moment-timezone';
import { TypesObjectId } from '@schemas';

const { ObjectId } = Types;

const isDevEnv = process.env.NODE_ENV === 'development';

const randomString = (length: number = 30): string => {
    let result: string = '';
    while (result.length < length) {
        result += crypto
            .randomBytes(length)
            .toString('hex')
            .substring(2, length + 2);
    }

    return result;
};

const escapeRegex = (text: string): string => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

const isValidObjectId = (objectId: string): boolean => {
    if (ObjectId.isValid(objectId)) {
        const id: TypesObjectId = new ObjectId(objectId);
        return id.toString() === objectId;
    }
    return false;
};

const toObjectId = (id: string): TypesObjectId => new ObjectId(id);

const generateOtp = (length: number = 6): string => {
    let result = '';
    if (isDevEnv) {
        result = crypto.randomInt(0, 9).toString();
    } else {
        while (result.length < length) {
            result += crypto.randomInt(0, 9).toString();
        }
    }

    return result.padEnd(length, '0');
};

const showDate = (
    date: Date | number = new Date(),
    timeZone: string = 'UTC',
    format: string = 'MMM DD YYYY hh:mm:ss A'
): string => moment(date).tz(timeZone).format(format);

const fromNow = (date: Date): string => moment(date).fromNow();

const getSearchRegex = (text: string | undefined): RegExp | null =>
    text
        ? new RegExp(
              text
                  .split(' ')
                  .filter(val => val)
                  .map(value => value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'))
                  .join(' '),
              'i'
          )
        : null;

export {
    isDevEnv,
    randomString,
    escapeRegex,
    isValidObjectId,
    toObjectId,
    generateOtp,
    showDate,
    fromNow,
    getSearchRegex,
};
