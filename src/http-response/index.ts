import { Response } from 'express';
import { logger } from '@utils';

enum HttpResponseCode {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    SERVER_ERROR = 500,
    URL_NOT_FOUND = 404,
}

export interface ResponseTypes {
    success: (data: object | null, message?: string) => void;
    warn: (data: object | null, message?: string) => void;
    badRequest: (data: object | null, message?: string) => void;
    unauthorized: (data: object | null, message?: string) => void;
    forbidden: (data: object | null, message?: string) => void;
    notFound: (data: object | null, message?: string) => void;
    urlNotFound: (data: object | null, message?: string) => void;
    serverError: (data: object | null, message?: string, err?: Error | null) => void;
}

const response: ResponseTypes = {
    success(data = null, message = '') {
        (this as unknown as Response).status(HttpResponseCode.OK).send({
            success: true,
            data,
            message,
        });
    },
    warn(data = null, message = '') {
        (this as unknown as Response).status(HttpResponseCode.OK).send({
            success: false,
            data,
            message,
        });
    },
    badRequest(data = null, message = '') {
        (this as unknown as Response).status(HttpResponseCode.BAD_REQUEST).send({
            success: false,
            data,
            message,
        });
    },
    unauthorized(data = null, message = '') {
        (this as unknown as Response).status(HttpResponseCode.UNAUTHORIZED).send({
            success: false,
            data,
            message,
        });
    },
    forbidden(data = null, message = '') {
        (this as unknown as Response).status(HttpResponseCode.FORBIDDEN).send({
            success: false,
            data,
            message,
        });
    },
    notFound(data = null, message = '') {
        (this as unknown as Response).status(200).send({
            success: false,
            data,
            message,
        });
    },
    urlNotFound(data = null, message = '') {
        (this as unknown as Response).status(HttpResponseCode.URL_NOT_FOUND).send({
            success: false,
            data,
            message,
        });
    },
    serverError(data = null, message = '', err = null) {
        if (err) logger.error('Server error', err);
        (this as unknown as Response).status(HttpResponseCode.SERVER_ERROR).send({
            success: false,
            data,
            message,
        });
    },
};

export { response };
