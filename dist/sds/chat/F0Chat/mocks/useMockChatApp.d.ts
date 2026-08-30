import { F0ChatEditInput, F0ChatSendInput } from '../types';
import { ConvState } from './mockSeeds';
export type MockChatAppValue = {
    states: Record<string, ConvState>;
    send: (convId: string, input: F0ChatSendInput) => void;
    /** Re-send a failed message (same id) — flips back to sending, then sent. */
    retry: (convId: string, messageId: string) => void;
    markRead: (convId: string) => void;
    toggleReaction: (convId: string, messageId: string, emoji: string) => void;
    deleteMessage: (convId: string, messageId: string) => void;
    /** Discard a failed local echo — purely local, mirrors `deleteFailedMessage`. */
    discardFailed: (convId: string, messageId: string) => void;
    editMessage: (convId: string, messageId: string, input: F0ChatEditInput) => void;
    loadOlder: (convId: string) => void;
    loadingOlder: Record<string, boolean>;
    hasMoreOlder: (convId: string) => boolean;
    /** Pinned (favourite) state per conversation, toggled from the header. */
    pinned: Record<string, boolean>;
    togglePin: (convId: string) => void;
    /** Muted state per conversation, toggled from the header overflow menu. */
    muted: Record<string, boolean>;
    toggleMute: (convId: string) => void;
    /** Load state per conversation — `failsToLoad` seeds start in "error" and
     * recover via `reconnect` (drives the error state's Retry button). */
    loadState: Record<string, "ready" | "connecting" | "error">;
    reconnect: (convId: string) => void;
};
declare const MockChatAppContext: import('react').Context<MockChatAppValue | null>;
export declare const useMockChatApp: () => MockChatAppValue;
/**
 * Shared mock chat store: every conversation's messages, typing and read state
 * live here so the sidebar and the open panel stay in sync. Backs
 * `useConversationRuntime` and `useMockChatGroups`.
 */
export declare const useMockChatStore: () => MockChatAppValue;
export { MockChatAppContext };
