import { League } from '@enums';

export interface IUserLeagueAndLevel {
    userId: string;
    level: number;
    league: League;
    currentXp: number;
    totalXp: number;
}

// Extending the base interface to include metadata for TypeORM and Postgresql
export interface IUserLeagueAndLevelDoc extends IUserLeagueAndLevel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
