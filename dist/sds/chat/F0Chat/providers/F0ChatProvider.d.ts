import { ReactNode } from 'react';
import { F0ChatCapabilities, F0ChatChannelType, F0ChatEditInput, F0ChatEmit, F0ChatEvents, F0ChatRuntime, F0ChatUser } from '../types';
/**
 * The slow-moving slice of the runtime, behind a SEPARATE context with a
 * stable value. The full runtime object is rebuilt by the host on every
 * transport event (each websocket packet re-renders the adapter), so anything
 * mounted per-message that reads `useF0Chat()` re-renders on every event —
 * reads, typing, presence — defeating the row memoization. Per-row components
 * read THIS context instead: its identity only changes when the user,
 * capabilities or edit window actually change; the action callbacks are
 * identity-stable delegates into the latest runtime.
 */
export type F0ChatStable = {
    currentUserId: string;
    /** The channel's type, not the channel: per-message components resolve
     * permissions with it (see `utils/capabilities.ts`) and it only changes when
     * the conversation does. */
    channelType: F0ChatChannelType;
    capabilities?: F0ChatCapabilities;
    editWindowMs?: number;
    toggleReaction: (messageId: string, emoji: string) => void;
    loadReactionUsers?: (messageId: string, emoji: string, count: number) => Promise<F0ChatUser[]>;
    retryMessage: (id: string) => void;
    deleteMessage: (id: string) => void;
    deleteFailedMessage?: (id: string) => void;
    editMessage?: (id: string, input: F0ChatEditInput) => void;
};
/**
 * "Has this voice note already been reported as played?" — kept above the
 * transcript because Virtuoso unmounts offscreen rows, so a ref inside the
 * row would forget on every scroll and re-report the same note.
 */
export type F0ChatVoicePlayLog = {
    hasReported: (key: string) => boolean;
    markReported: (key: string) => void;
};
/**
 * Makes a chat {@link F0ChatRuntime} available to the F0Chat UI. The host owns
 * the runtime (mock in stories, GetStream adapter in factorial); F0 only reads it.
 */
export declare const F0ChatProvider: ({ runtime, events, children, }: {
    runtime: F0ChatRuntime;
    /** Observe interactions F0Chat resolves internally — see {@link F0ChatEvents}.
     * Rebuild it freely: it is read through a ref, never as a context value. */
    events?: F0ChatEvents;
    children: ReactNode;
}) => ReactNode;
/** Read the chat runtime. Throws when used outside an {@link F0ChatProvider}. */
export declare function useF0Chat(): F0ChatRuntime;
/**
 * Read the slow-moving runtime slice (identity, capabilities, per-message
 * actions). Per-message components use this instead of {@link useF0Chat} so a
 * transport event doesn't re-render every mounted row.
 */
export declare function useF0ChatStable(): F0ChatStable;
/**
 * The current channel's type, or `"dm"` outside a provider.
 *
 * Non-throwing on purpose, like the emit context's `NO_EMIT`: leaf components
 * that read it (the message meta, the media cards) are unit-tested on their own
 * with no runtime around them, and `"dm"` is the neutral shape.
 */
export declare function useF0ChatChannelType(): F0ChatChannelType;
/**
 * Report an interaction to the host (see {@link F0ChatEvents}). Every handler
 * is always present — no optional chaining at the call site — and the value
 * never changes identity, so reading it costs a `memo`ed row nothing. Outside a
 * provider every handler is a no-op.
 */
export declare function useF0ChatEmit(): F0ChatEmit;
/** See {@link F0ChatVoicePlayLog}. Constant identity, like the emit context. */
export declare function useF0ChatVoicePlayLog(): F0ChatVoicePlayLog;
