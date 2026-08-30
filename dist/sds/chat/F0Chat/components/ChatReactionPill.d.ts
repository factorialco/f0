import { ReactNode } from 'react';
type ReactionUser = {
    name: string;
};
export type ChatReactionPillProps = {
    emoji: string;
    initialCount: number;
    hasReacted?: boolean;
    users?: ReactionUser[];
    /** Resolve the complete user list on first hover or keyboard focus. */
    loadUsers?: () => Promise<ReactionUser[]>;
    onInteraction?: (emoji: string) => void;
    size?: "sm" | "md" | "lg";
};
/**
 * A reaction pill for the chat transcript.
 *
 * The Reactions kit has one of these, and F0Chat used it until the chat started
 * drawing emoji with the reader's own system font. Rather than teach the shared
 * pill about a mode only the chat wants — and change how post reactions look
 * everywhere else in the product — the conversation gets its own.
 *
 * Two things differ from the kit's version, and both are because this one lives
 * in a **virtualized** transcript:
 *
 * - the emoji is the system glyph, matching the bubble it sits under;
 * - the tooltip wrapper is unconditional (see below).
 */
export declare const ChatReactionPill: ({ emoji, initialCount, hasReacted, users, loadUsers, onInteraction, size, }: ChatReactionPillProps) => ReactNode;
export {};
