import { League } from '@enums';
import { IUserLeagueAndLevelDoc } from '@schemas/postgresql/UserLeagueAndLevel';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user_league_and_level') // The table name in PostgreSQL
export class UserLeagueAndLevel implements IUserLeagueAndLevelDoc {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: false })
    userId: string;

    @Column({ type: 'int', default: 1 })
    level: number;

    @Column({
        type: 'enum',
        enum: League,
        default: League.GREY,
    })
    league: League;

    @Column({ type: 'int', default: 0 })
    currentXp: number;

    @Column({ type: 'int', default: 0 })
    totalXp: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
