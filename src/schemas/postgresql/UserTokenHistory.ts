import { TypesOfToken, TokenTransactionType } from '@enums';

export interface IUserTokenHistory {
    id: string;
    userId: string;
    totalToken: number;
    createdAt: Date;
    updatedAt: Date;
    tokenHistoryInsideUser: ITokenHistoryInsideUser[]; // Array of token history
}

export interface ITokenHistoryInsideUser {
    id: string;
    modelId: string | null;
    token: number;
    typeOfToken: TypesOfToken;
    tokenTransactionType: TokenTransactionType;
    date: Date;
    deleted: boolean;
    userTokenHistory: IUserTokenHistory; // Foreign key to UserTokenHistory (user_token_history_id)
}
