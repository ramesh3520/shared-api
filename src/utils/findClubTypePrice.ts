import { ClubType } from '@enums';
import { fanClubPrice } from './fanClubPrice';

export const findClubTokenPrice = (clubType: ClubType, duration: number): number => {
    const clubData = fanClubPrice[clubType];
    if (!clubData) {
        throw new Error(`Invalid club type: ${clubType}`);
    }

    const plan = clubData.find(item => item.duration === duration);
    if (!plan) {
        throw new Error(`Duration ${duration} months not available for ${clubType}`);
    }

    return plan.token;
};
