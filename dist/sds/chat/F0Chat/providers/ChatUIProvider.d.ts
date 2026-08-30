import { ReactNode } from 'react';
import { F0ChatFileAttachment, F0ChatImageAttachment, F0ChatMessage } from '../types';
import { ChatDocumentKind } from '../utils/attachments';
/**
 * Ephemeral chat UI state is split into focused contexts so a change in one
 * concern doesn't re-render consumers of another. In particular, message rows
 * subscribe to `useChatHighlight` only — typing in search, changing the reply
 * target, or opening the image lightbox no longer re-renders the transcript.
 */
type ChatJumpContextValue = {
    /** Scroll to a message and briefly highlight it. */
    jumpToMessage: (id: string) => void;
    /** The message list registers how to scroll to a given message id. */
    registerScrollToMessage: (fn: (id: string) => void) => void;
};
type ChatHighlightedIdContextValue = {
    /** Message currently highlighted after a jump (reply quote or active search hit). */
    highlightedId: string | null;
};
/** One value, not a reply target plus an edit target: as two nullable states
 * "both set" is representable and has to be prevented by hand at each caller. */
export type ChatComposeTarget = {
    kind: "none";
} | {
    kind: "reply";
    message: F0ChatMessage;
} | {
    kind: "edit";
    message: F0ChatMessage;
};
type ChatComposeTargetContextValue = {
    target: ChatComposeTarget;
};
/**
 * Called on every target move, inside the user's gesture. Not an effect: that
 * runs a frame late, losing the gesture so iOS opens no keyboard, and cannot
 * see the previous target — which is what says whether to discard the draft.
 */
export type ChatComposerHandle = {
    retarget: (previous: ChatComposeTarget, next: ChatComposeTarget) => void;
    /** Drop the whole draft — text, attachments, mentions — not just an edit's. */
    abandonDraft: () => void;
};
/** Identity-stable for the provider's lifetime, so message rows can move the
 * target without subscribing to it and re-rendering on every change. */
type ChatComposeActionsContextValue = {
    startReply: (message: F0ChatMessage) => void;
    startEdit: (message: F0ChatMessage) => void;
    clearComposeTarget: () => void;
    registerComposerHandle: (handle: ChatComposerHandle | null) => void;
};
type ChatDropContextValue = {
    /** The composer registers how to attach dropped files (window-wide drop). */
    registerFileDropHandler: (fn: (files: File[]) => void) => void;
    /** Route files dropped anywhere on the panel to the composer. */
    dropFiles: (files: File[]) => void;
};
type ChatImagePreviewContextValue = {
    /** The clicked message's images + the active index, or null when closed. */
    imagePreview: {
        images: F0ChatImageAttachment[];
        index: number;
    } | null;
    /** Open the lightbox on a message's images, starting at `index`. */
    openImagePreview: (images: F0ChatImageAttachment[], index: number) => void;
    closeImagePreview: () => void;
    /** Move the lightbox to another image of the same message (wraps around). */
    setImagePreviewIndex: (index: number) => void;
};
type ChatDocumentPreviewContextValue = {
    /** The document being previewed fullscreen, or null when closed. */
    documentPreview: {
        file: F0ChatFileAttachment;
        kind: ChatDocumentKind;
    } | null;
    /** Open the fullscreen viewer on a previewable attachment (no-op otherwise). */
    openDocumentPreview: (file: F0ChatFileAttachment) => void;
    closeDocumentPreview: () => void;
};
type ChatSearchContextValue = {
    /** Whether the header is in search mode. */
    searchOpen: boolean;
    openSearch: () => void;
    closeSearch: () => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    /** True while a (debounced/async) search is in flight — show a spinner, not "no results". */
    searching: boolean;
    /** 1-based index of the active match (0 when there are none). */
    matchCurrent: number;
    /** Total number of matches for the current query. */
    matchTotal: number;
    /** Move to the next (newer) / previous (older) match, wrapping around. */
    goToNextMatch: () => void;
    goToPrevMatch: () => void;
};
/** Ephemeral, presentation-only chat UI state (reply target, jump-to-message, search). */
export declare const ChatUIProvider: ({ children, }: {
    children: ReactNode;
}) => ReactNode;
/** Stable jump API (scroll-to + register). Consumed by the transcript, reply
 * quotes and the reply chip — none re-render when the highlight moves. */
export declare const useChatJump: () => ChatJumpContextValue;
/** The currently highlighted message id. Consumed only by the message row so a
 * jump re-renders just that row. */
export declare const useChatHighlightedId: () => ChatHighlightedIdContextValue;
/** Composer only: a row reading this re-renders on every target change. */
export declare const useChatComposeTarget: () => ChatComposeTargetContextValue;
export declare const useChatComposeActions: () => ChatComposeActionsContextValue;
/** Window-wide file-drop routing. Consumed by the shell and composer. */
export declare const useChatDrop: () => ChatDropContextValue;
/** Image lightbox state. Consumed by attachments and the preview overlay. */
export declare const useChatImagePreview: () => ChatImagePreviewContextValue;
/** Document fullscreen-viewer state (pdf/sheet/docx/text). Consumed by the
 * document card and its overlay. */
export declare const useChatDocumentPreview: () => ChatDocumentPreviewContextValue;
/** In-conversation search state. Consumed by the header and its search bar. */
export declare const useChatSearch: () => ChatSearchContextValue;
export {};
