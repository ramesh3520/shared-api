import { TypesOfToken, TokenTransactionType } from '@enums'; // Assuming the enum is defined
import { IUserTokenHistory, ITokenHistoryInsideUser } from '@schemas';
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

@Entity('user_token_history') // Table for UserTokenHistory
export class UserTokenHistory implements IUserTokenHistory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: false })
    userId: string;

    @Column({ type: 'int', default: 0 })
    totalToken: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => TokenHistoryInsideUser, tokenHistoryInsideUser => tokenHistoryInsideUser.userTokenHistory, {
        cascade: true,
    })
    tokenHistoryInsideUser: TokenHistoryInsideUser[];
}

@Entity('token_history_inside_user') // Table for TokenHistoryInsideUser
export class TokenHistoryInsideUser implements ITokenHistoryInsideUser {
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

    @ManyToOne(() => UserTokenHistory, userTokenHistory => userTokenHistory.tokenHistoryInsideUser)
    @JoinColumn({ name: 'user_token_history_id' }) // Foreign key column
    userTokenHistory: UserTokenHistory;
}
