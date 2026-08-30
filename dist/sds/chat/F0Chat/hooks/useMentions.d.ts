import { AvatarVariant } from '../../../../components/avatars/F0Avatar';
import { F0ChatUser } from '../types';
/** Sentinel id for the "everyone" (`@here`) option — never a real user id. */
export declare const MENTION_EVERYONE_ID = "@everyone";
/** A tracked mention in the composer text. */
export type MentionEntry = {
    /** A user id, or {@link MENTION_EVERYONE_ID} for `@here`. */
    id: string;
    /** Display name as inserted in the text (e.g. "Ana García" or "here"). */
    name: string;
    /** Display data carried through to the sent message so the chip can show the
     * member's profile hover card (set when picking a member; absent for @here). */
    avatar?: AvatarVariant;
    subtitle?: string;
    profileHref?: string;
};
/** A row in the mention popover: a group member, or the "everyone" option. */
export type MentionCandidate = {
    kind: "everyone";
    label: string;
} | {
    kind: "user";
    user: F0ChatUser;
};
/** Resolved mention payload for {@link F0ChatSendInput}. */
export type MentionPayload = {
    mentions: MentionEntry[];
    mentionedEveryone: boolean;
};
export type UseMentionsOptions = {
    /** Current composer value. */
    inputValue: string;
    /** Setter for the composer value. */
    setInputValue: (value: string) => void;
    /** Cursor position (selectionStart) in the textarea. */
    cursorPosition: number;
    /** Ref to the textarea element for reading selection + caret position. */
    textareaRef: React.RefObject<HTMLTextAreaElement | null>;
    /**
     * Whether mentions are active. When false (e.g. no `searchMembers`), the hook
     * is inert and the popover never opens.
     */
    enabled: boolean;
    /** Search the conversation's members for the popover. */
    searchMembers?: (query: string) => Promise<F0ChatUser[]>;
    /**
     * Localized label for the "everyone" option (e.g. "here" / "aquí"). When set,
     * an `@here` entry is pinned at the top of the popover; omit to disable it.
     */
    everyoneLabel?: string;
};
export type PopoverPosition = {
    left: number;
    bottom: number;
} | null;
export type UseMentionsReturn = {
    isOpen: boolean;
    query: string;
    /** Popover rows: the "everyone" option (when it matches) then member matches. */
    results: MentionCandidate[];
    isLoading: boolean;
    selectedIndex: number;
    /** Tracked mentions in the current text (drives overlay highlighting). */
    mentions: MentionEntry[];
    popoverPosition: PopoverPosition;
    /** Ghost-text completion for the selected row, or null. */
    inlineCompletion: string | null;
    /** Handle a keydown — returns true when consumed. */
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => boolean;
    /** Insert the given candidate at the active `@` trigger. */
    selectCandidate: (candidate: MentionCandidate) => void;
    /** Resolve the mentions/everyone payload to attach when sending. */
    getMentions: () => MentionPayload;
    /** Replace the tracked mentions wholesale — used to rehydrate an existing
     * message's mentions when it's reloaded into the composer for editing. */
    seedMentions: (entries: MentionEntry[]) => void;
    /** Close the popover. */
    close: () => void;
    /** Dismiss the current `@` trigger until the caret leaves it. */
    dismissCurrentTrigger: () => void;
};
/** Pixel position of the character at `index`, relative to the textarea. */
export declare function getTextareaCaretCoordinates(textarea: HTMLTextAreaElement, index: number): {
    left: number;
    top: number;
};
/**
 * `@`-mention support for the communications composer — same UX as the AI chat
 * (debounced inline search, ghost-text completion, keyboard nav, caret-anchored
 * popover), but driven by the conversation's members. An "everyone" (`@here`)
 * option is pinned on top when `everyoneLabel` is given (groups only). Inert
 * unless `enabled`.
 */
export declare function useMentions({ inputValue, setInputValue, cursorPosition, textareaRef, enabled, searchMembers, everyoneLabel, }: UseMentionsOptions): UseMentionsReturn;
