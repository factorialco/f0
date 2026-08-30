import { F0ChatItem, F0ChatMessage, F0ChatSystemMessage, F0ChatUser } from '../types';
/**
 * A single flat row for the virtualized transcript. The nested
 * groups→runs→messages shape is flattened into one indexable list so a
 * windowed renderer can map an index to exactly one row.
 */
export type ChatRow = {
    type: "separator";
    key: string;
    at: string;
    forId: string;
} | {
    type: "divider";
    key: string;
} | {
    type: "system";
    key: string;
    message: F0ChatSystemMessage;
} | {
    type: "message";
    key: string;
    message: F0ChatMessage;
    /** First message of a same-author run → renders the sender name (groups). */
    isFirstOfRun: boolean;
    /** Last message of a run → renders the avatar gutter (groups). */
    isLastOfRun: boolean;
    /** Conversation's last message → renders the delivery-status footer. */
    isLastMessage: boolean;
} | {
    type: "footer";
    key: string;
    message: F0ChatMessage;
} | {
    type: "typing";
    key: string;
    users: F0ChatUser[];
};
export type FlattenedChat = {
    rows: ChatRow[];
    /** item id → index of its row (for jump-to-message + scroll anchor). */
    indexById: Map<string, number>;
    /** key → row of THIS result — feed it back as `previousRows` on the next call
     * so unchanged rows keep their identity (see below). */
    rowCache: Map<string, ChatRow>;
};
/**
 * Flattens an ordered (oldest→newest) item list into a single row array for
 * virtualization: per-day separators, the optional "new messages" divider,
 * centered system rows, and one row per user message carrying the run/last
 * flags (computed inline). Pure.
 *
 * Identity: pass the previous call's `rowCache` as `previousRows` and rows whose
 * message (by reference) and flags didn't change are returned as the SAME
 * object — an append then re-renders only the new row and the previous tail row
 * whose flags flip, instead of every visible row (the row renderer is memoized
 * on the row's identity).
 */
export declare function flattenChatRows(messages: F0ChatItem[], opts?: {
    dividerId?: string | null;
    previousRows?: Map<string, ChatRow>;
}): FlattenedChat;
/**
 * Ids of the items appended at the TAIL since the previous render (newest
 * batch), oldest→newest. Empty when nothing was appended, when the previous
 * tail id is unknown (first render, conversation/window swap, jump — those must
 * never animate) or when the tail id vanished (reload).
 */
export declare function freshTailIds(messages: F0ChatItem[], prevLastId: string | null): string[];
