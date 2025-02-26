import { TypesOfToken, TokenTransactionType } from '@enums';
import { IStudioTokenHistory, ITokenHistoryInsideStudio } from '@schemas';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('studio_token_history') // Table for StudioTokenHistory
export class StudioTokenHistory implements IStudioTokenHistory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: false })
    studioId: string;

    @Column({ type: 'int', default: 0 })
    totalToken: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(
        () => TokenHistoryInsideStudio,
        tokenHistoryInsideStudio => tokenHistoryInsideStudio.studioTokenHistory,
        {
            cascade: true,
        }
    )
    tokenHistoryInsideStudio: TokenHistoryInsideStudio[];
}

@Entity('token_history_inside_studio') // Table for TokenHistoryInsideStudio
export class TokenHistoryInsideStudio implements ITokenHistoryInsideStudio {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: true })
    modelId: string | null;

    @Column({ type: 'int' })
    token: number;

    @Column({ type: 'enum', enum: TypesOfToken })
    typeOfToken: TypesOfToken;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @Column({ type: 'enum', enum: TokenTransactionType })
    tokenTransactionType: TokenTransactionType;

    @Column({ type: 'boolean', default: false })
    deleted: boolean;

    @ManyToOne(() => StudioTokenHistory, StudioTokenHistory => StudioTokenHistory.tokenHistoryInsideStudio)
    @JoinColumn({ name: 'user_token_history_id' }) // Foreign key column
    studioTokenHistory: StudioTokenHistory;
}
