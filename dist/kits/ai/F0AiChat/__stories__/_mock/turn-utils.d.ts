import { F0Message } from '../../types';
export type Turn = Array<F0Message | Array<F0Message>>;
export declare function filterNonRenderableMessages(messages: F0Message[]): F0Message[];
export declare function analyzeTurn(turnMessages: Turn, turnIndex: number, turnsCount: number, inProgress: boolean): {
    isLastTurn: boolean;
    turnIsComplete: boolean;
    showActivityIndicator: boolean;
};
export declare function convertMessagesToTurns(messages: F0Message[]): Turn[];
export declare function extractThinkingGroup(turnMessages: Turn): {
    thinkingGroup: F0Message[] | null;
    restMessages: Array<F0Message | Array<F0Message>>;
};
