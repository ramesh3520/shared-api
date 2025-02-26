import { IContributor, IModelEpicGoalAndStreamGoal } from '@schemas/postgresql/ModelEpicGoalAndStreamGoal';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('model_epic_goal_and_stream_goal')
export class ModelEpicGoalAndStreamGoal implements IModelEpicGoalAndStreamGoal {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true })
    modelId: string;

    @Column({ type: 'boolean', default: false })
    epicGoalEnable: boolean;

    @Column({ type: 'varchar', nullable: true })
    epicGoalName: string;

    @Column({ type: 'int', default: 0 })
    epicGoalToken: number;

    @Column({ type: 'int', default: 0 })
    epicGoalAchievedToken: number;

    @OneToMany(() => Contributor, contributor => contributor.epicGoal, { cascade: true })
    contributors: Contributor[];

    @Column({ type: 'boolean', default: false })
    streamTipGoalHide: boolean;

    @Column({ type: 'int', default: 0 })
    streamTipGoalAchievedToken: number;

    @Column({ type: 'varchar', nullable: true })
    streamTipGoalName: string;

    @Column({ type: 'int', default: 0 })
    streamTipGoalToken: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

@Entity('model_epic_goal_contributors')
export class Contributor implements IContributor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => ModelEpicGoalAndStreamGoal, epicGoal => epicGoal.contributors, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'epic_goal_id' })
    epicGoal: ModelEpicGoalAndStreamGoal;

    @Column({ nullable: true })
    userId: string;

    @Column({ type: 'int' })
    token: number;
}
