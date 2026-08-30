import { ActionType } from './types';
import { InternalActionType } from './ItemContainer';
/**
 * Convert simplified action type received from user to internal action format
 * @param action ActionType
 * @param defaultCopyText what to use if copy text is not present
 */
export declare const getInternalAction: (action: ActionType | undefined, defaultCopyText: string) => InternalActionType | undefined;
