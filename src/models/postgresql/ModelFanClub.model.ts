import { ClubType } from '@enums';
import { IMember, IModelFanClub } from '@schemas';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('modelfanclubs')
export class ModelFanClub implements IModelFanClub {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true })
    modelId: string;

    @Column({
        type: 'jsonb',
        nullable: false,
        default: {
            freeSpying: 0,
            tipDiscount: 0,
            privateShowDiscount: 0,
            exclusiveShowDiscount: 0,
        },
    })
    soldier: {
        freeSpying: number;
        tipDiscount: number;
        privateShowDiscount: number;
        exclusiveShowDiscount: number;
    };

    @Column({
        type: 'jsonb',
        nullable: false,
        default: {
            freeSpying: 0,
            tipDiscount: 0,
            privateShowDiscount: 0,
            exclusiveShowDiscount: 0,
        },
    })
    lord: {
        freeSpying: number;
        tipDiscount: number;
        privateShowDiscount: number;
        exclusiveShowDiscount: number;
    };

    @Column({
        type: 'jsonb',
        nullable: false,
        default: {
            freeSpying: 0,
            tipDiscount: 0,
            privateShowDiscount: 0,
            exclusiveShowDiscount: 0,
        },
    })
    prince: {
        freeSpying: number;
        tipDiscount: number;
        privateShowDiscount: number;
        exclusiveShowDiscount: number;
    };

    @Column({ type: 'boolean', default: true })
    exclusiveMediaContent: boolean;

    @Column({ type: 'boolean', default: true })
    specialBadgeDiscount: boolean;

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    customBenifit: { benefitName: string; benefit: string }; //visible for Fan Club subscribers only

    @OneToMany(() => Member, member => member.modelFanClub, { cascade: true })
    members: IMember[];

    @Column({ type: 'text', nullable: true })
    description: string | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}

@Entity('modelfanclubs_member')
export class Member implements IMember {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => ModelFanClub, modelFanClub => modelFanClub.members, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'fan_club_id' })
    modelFanClub: IModelFanClub;

    @Column({ type: 'varchar' })
    userId: string;

    @Column({ type: 'boolean', default: false })
    isExpired: boolean;

    @Column({ type: 'jsonb', nullable: false })
    plan: {
        planName: ClubType;
        duration: number;
        token: number;
        createdAt: Date;
    };
}
