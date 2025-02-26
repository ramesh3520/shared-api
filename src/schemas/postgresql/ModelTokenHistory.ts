import { TokenTransactionType, TypesOfToken } from '@enums'; // Ensure the correct import path

export interface ITokenHistoryInsideModel {
    id: string;
    userId: string | null;
    token: number;
    typeOfToken: TypesOfToken;
    tokenTransactionType: TokenTransactionType;
    date: Date;
    deleted: boolean;
    modelTokenHistory: IModelTokenHistory; // Reference to the ModelTokenHistory
}

export interface IModelTokenHistory {
    id: string;
    modelId: string;
    totalToken: number;
    tokenHistoryInsideModel: ITokenHistoryInsideModel[]; // List of TokenHistoryInsideModel
    createdAt: Date;
    updatedAt: Date;
}
