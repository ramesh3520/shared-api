import { TypesOfToken, TokenTransactionType } from '@enums';

export interface IStudioTokenHistory {
    id: string;
    studioId: string;
    totalToken: number;
    createdAt: Date;
    updatedAt: Date;
    tokenHistoryInsideStudio: ITokenHistoryInsideStudio[]; // Array of token history
}

export interface ITokenHistoryInsideStudio {
    id: string;
    modelId: string | null;
    token: number;
    typeOfToken: TypesOfToken;
    tokenTransactionType: TokenTransactionType;
    date: Date;
    deleted: boolean;
    studioTokenHistory: IStudioTokenHistory; // Foreign key to StudioTokenHistory (user_token_history_id)
}
