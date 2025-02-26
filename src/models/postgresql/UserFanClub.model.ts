import { ClubType } from '@enums';
import { IFanClubInsideUser, IUserFanClub } from '@schemas/postgresql/UserFanClub';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity('user_fan_club') // Table for UserFanClub
export class UserFanClub implements IUserFanClub {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true })
    userId: string;

    @OneToMany(() => FanClubInsideUser, fanClub => fanClub.userFanClub, { cascade: true }) // One-to-many relationship with FanClubInsideUser
    fanClubs: FanClubInsideUser[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}

@Entity('fan_club_inside_user') // Table for FanClubInsideUser
export class FanClubInsideUser implements IFanClubInsideUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    modelId: string;

    @Column({ type: 'int' })
    duration: number;

    @Column({ type: 'enum', enum: ClubType })
    clubType: ClubType;

    @Column({ type: 'int', default: 0 })
    freeSpying: number;

    @Column({ type: 'int', default: 0 })
    tipDiscount: number;

    @Column({ type: 'int', default: 0 })
    privateShowDiscount: number;

    @Column({ type: 'int', default: 0 })
    exclusiveShowDiscount: number;

    @Column({ type: 'boolean', default: true })
    exclusiveMediaContent: boolean;

    @Column({ type: 'boolean', default: true })
    specialBadgeDiscount: boolean;

    @Column({ type: 'int', default: 0 })
    token: number;

    @Column({ type: 'boolean', default: true })
    valid: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @ManyToOne(() => UserFanClub, userFanClub => userFanClub.fanClubs) // Many-to-one relationship with UserFanClub
    @JoinColumn({ name: 'user_fan_club_id' }) // Foreign key column
    userFanClub: UserFanClub;
}
