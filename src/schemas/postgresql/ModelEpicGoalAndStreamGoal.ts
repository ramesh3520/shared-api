export interface IContributor {
    id: string;
    epicGoal: string | IModelEpicGoalAndStreamGoal; // Reference to the parent entity or its ID
    userId: string | null;
    token: number;
}

export interface IModelEpicGoalAndStreamGoal {
    id: string;
    modelId: string | null;
    epicGoalEnable: boolean;
    epicGoalName: string | null;
    epicGoalToken: number;
    epicGoalAchievedToken: number;
    contributors: IContributor[]; // Array of contributors
    streamTipGoalHide: boolean;
    streamTipGoalAchievedToken: number | null;
    streamTipGoalName: string | null;
    streamTipGoalToken: number | null;
    createdAt: Date;
    updatedAt: Date;
}
