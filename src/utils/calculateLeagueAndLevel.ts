import { League } from '@enums';

export const calculateLevelAndLeague = (totalXp: number) => {
    let level = 1;
    let requiredXpForLevel = 5;

    while (totalXp >= requiredXpForLevel) {
        totalXp -= requiredXpForLevel;
        level++;
        requiredXpForLevel += 5; // Increase the XP needed for the next level(here we are increasing by 5)
    }

    let league = League.GREY;
    if (level >= 10 && level <= 19) {
        league = League.BRONZE;
    } else if (level >= 20 && level <= 34) {
        league = League.SILVER;
    } else if (level >= 35 && level <= 54) {
        league = League.GOLD;
    } else if (level >= 55 && level <= 79) {
        league = League.DIAMOND;
    } else if (level >= 80 && level <= 99) {
        league = League.ROYAL;
    } else if (level >= 100) {
        league = League.LEGEND;
    }

    return { level, league, currentXp: totalXp };
};
