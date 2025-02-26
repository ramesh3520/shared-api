import Templates from './templates';
import twilioService from './services/twilio';

const prepareSMSBody = (template: string, smsData: string[]) => {
    let smsBody = Templates[template] ?? '';

    if (!smsBody) {
        return template;
    }

    smsData.forEach((param: string, index: number) => {
        smsBody = smsBody.replace(new RegExp(`\\{${index}}`), param);
    });

    return smsBody;
};

const sendSMS = async (
    template: string,
    toMobile: string,
    smsData: string[],
    fromMobile: string = process.env.FROM_MOBILE ?? 'FROM_MOBILE'
) => {
    let smsService;

    switch (process.env.SMS_SERVICE) {
        case 'twilio':
            smsService = twilioService;
            break;
        default:
            throw new Error('Allowed sms service values are: "twilio"');
    }

    const smsBody = prepareSMSBody(template, smsData);
    await smsService(toMobile, fromMobile, smsBody);
};

export { sendSMS };
