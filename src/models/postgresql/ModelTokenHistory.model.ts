import { TypesOfToken, TokenTransactionType } from '@enums'; // Assuming the enum is defined
import { IModelTokenHistory, ITokenHistoryInsideModel } from '@schemas';
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

@Entity('model_token_history') // Table for ModelTokenHistory
export class ModelTokenHistory implements IModelTokenHistory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    modelId: string;

    @Column({ type: 'int', default: 0 })
    totalToken: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => TokenHistoryInsideModel, tokenHistoryInsideModel => tokenHistoryInsideModel.modelTokenHistory, {
        cascade: true,
    })
    tokenHistoryInsideModel: TokenHistoryInsideModel[];
}

@Entity('token_history_inside_model') // Table for TokenHistoryInsideModel
export class TokenHistoryInsideModel implements ITokenHistoryInsideModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: true })
    userId: string | null;

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

    @ManyToOne(() => ModelTokenHistory, modelTokenHistory => modelTokenHistory.tokenHistoryInsideModel)
    @JoinColumn({ name: 'model_token_history_id' })
    modelTokenHistory: ModelTokenHistory;
}
