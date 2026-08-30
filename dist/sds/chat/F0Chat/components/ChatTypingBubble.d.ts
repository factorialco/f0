import { ReactNode } from 'react';
import { F0ChatUser } from '../types';
/** Mount-time gate shared with the container: `fresh` is armed when a typing
 * streak starts and consumed by the first bubble mount, so a remount from
 * scrolling back mid-streak renders in place (history never re-animates). */
export type TypingEntryState = {
    fresh: boolean;
};
/**
 * Typing indicator rendered inline in the transcript as an incoming message —
 * the typing user's avatar next to a bubble with animated dots. DMs read
 * "Writing…"; groups name who's typing (accessible label only; visually it's dots).
 */
export declare const ChatTypingBubble: ({ users, isGroup, leaving, spacingClass, entryState, }: {
    users: F0ChatUser[];
    isGroup: boolean;
    /** The writer paused: fade the bubble out before its row is removed. Flipping
     * back to false (typing resumed in the grace window) fades it back — the
     * bubble never remounts, so the dots don't pop. */
    leaving?: boolean;
    /** Row spacing (the virtual row's padding), applied on the bubble itself. */
    spacingClass?: string;
    /** Streak-start gate — without it every remount (scroll-back into the
     * virtual window mid-streak) would replay the entry pop. */
    entryState?: TypingEntryState;
}) => ReactNode;
