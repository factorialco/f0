import { ReactNode } from 'react';
import { ChatRow } from '../utils/grouping';
import { TypingEntryState } from './ChatTypingBubble';
/**
 * Memoized so a container re-render (scroll state, typing, sticky date, an
 * append elsewhere) doesn't re-render every visible row — only rows whose
 * props actually changed. Row identity is real: `flattenChatRows` reuses the
 * previous build's row objects when the message and its flags are unchanged
 * (`previousRows`), and `animatedIds`/`freshIds` are stable (mutated)
 * containers, so equality holds across event-driven renders.
 */
export declare const ChatMessageRowRenderer: import('react').MemoExoticComponent<({ row, isGroup, enterAnimation, animatedIds, freshIds, typingLeaving, typingEntry, }: {
    row: ChatRow;
    isGroup: boolean;
    /** Whether enter animations are enabled at all (off for reduced motion). */
    enterAnimation: boolean;
    /** Ids already shown — seeded with the initial set so only true arrivals animate. */
    animatedIds: Set<string>;
    /** Ids appended at the tail THIS commit → their batch order. Transports
     * coalesce bursts into one render: every fresh message animates, staggered
     * by its order (before, only the last one did — the rest popped in dry). */
    freshIds: Map<string, number>;
    /** Typing row only: fade the bubble out before the row is removed. */
    typingLeaving?: boolean;
    /** Typing row only: streak-start gate for the bubble's entry pop. */
    typingEntry?: TypingEntryState;
}) => ReactNode>;
