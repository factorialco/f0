import { ReactNode, RefObject } from 'react';
import { AiChatCreditWarning, AiChatDisclaimer, AiChatFileAttachmentConfig, PendingContext, PendingQuote, PersonProfile, TranscribeFn, UploadedFile, F0AiChatWelcomeCard, WelcomeScreenSuggestion, WelcomeScreenSuggestionItem } from '../F0AiChat/types';
export type AttachedFile = {
    id: string;
    file: File;
    status: "uploading" | "uploaded" | "error";
    uploadedFile?: UploadedFile;
    errorMessage?: string;
};
export type UserTextPart = {
    type: "text";
    text: string;
};
export type UserBinaryPart = {
    type: "binary";
    url: string;
    filename: string;
    mimeType: string;
};
/**
 * Payload emitted by `F0AiChatTextArea` when the user submits.
 *
 * `text` contains HTML-escaped user-typed text with `<entity-ref>` tags
 * for @mentions only. The reply quote (if any) and pending context
 * travel as separate structured fields — the adapter (factorial) owns
 * the wire encoding when forwarding to the agent.
 */
export type F0AiChatTextAreaSubmitPayload = {
    text: string;
    files: UploadedFile[];
    context: PendingContext | null;
    quote: PendingQuote | null;
};
export type F0AiChatTextAreaProps = {
    ref: RefObject<HTMLDivElement>;
    /** Emitted when the user submits. Awaited so the textarea can stay disabled. */
    onSubmit: (payload: F0AiChatTextAreaSubmitPayload) => void | Promise<void>;
    /** Called when the user clicks the stop button while a response is streaming. */
    onStop?: () => void;
    /** Whether a response is currently streaming. Switches the submit button to "stop". */
    inProgress?: boolean;
    /**
     * Optional gate run before submission. Return `false` to abort the send
     * (e.g. show a quota dialog). The textarea stays focused and the input
     * is preserved.
     */
    onBeforeSubmit?: () => boolean | Promise<boolean>;
    /** Rotating placeholders for the typewriter effect. Empty/single-entry skips the typewriter. */
    placeholders?: string[];
    /** Credit warning banner shown above the composer. */
    creditWarning?: AiChatCreditWarning;
    /**
     * Optional ReactNode rendered in place of the input. When present the
     * composer enters "clarifying" mode: form submission is blocked, the
     * gradient border activates, and a nav-hint replaces the disclaimer.
     * The host owns the panel (typically `F0ClarifyingPanel`) and its
     * state — F0 just renders the slot.
     */
    clarifyingUI?: ReactNode;
    /** Pending context shown as a chip; prepended invisibly on submit. */
    pendingContext?: PendingContext | null;
    /** Called when the user dismisses pending context (or it gets consumed on submit). */
    onPendingContextChange?: (context: PendingContext | null) => void;
    /** Pending quote shown as a chip above the textarea. */
    pendingQuote?: PendingQuote | null;
    /** Called when the user dismisses the quote (or it gets consumed on submit). */
    onPendingQuoteChange?: (quote: PendingQuote | null) => void;
    /** File attachment configuration. When omitted, attachments are disabled. */
    fileAttachments?: AiChatFileAttachmentConfig;
    /**
     * Host-owned compact controls rendered after the attachment action in the
     * normal action row. Controls render inside the chat form, so buttons must
     * use `type="button"` unless they intentionally submit it. Hidden while the
     * composer is clarifying or recording.
     */
    toolbarStart?: ReactNode;
    /**
     * Voice dictation. When provided, a microphone button is shown: recorded
     * audio is transcribed and the transcript fills the textarea (the user
     * reviews and sends it manually). When omitted, the microphone is hidden.
     */
    onTranscribe?: TranscribeFn;
    /** Async search used by the @-mention popover. When omitted, mentions are disabled. */
    searchPersons?: (query: string) => Promise<PersonProfile[]>;
    /**
     * Registers a callback that lets external drop zones forward dropped
     * files to this textarea's file-attachment pipeline. The textarea calls
     * the registrar with the handler on mount and with `null` on unmount.
     */
    onProcessFilesRef?: (handler: ((files: File[]) => void) | null) => void;
    /**
     * Optional disclaimer text + link rendered below the textarea. Hidden on
     * the welcome screen of the fullscreen layout to give the footer room.
     */
    disclaimer?: AiChatDisclaimer;
    /**
     * Optional footer (e.g. powered-by, legal copy) rendered below the
     * textarea on the welcome screen.
     */
    footer?: ReactNode;
    /**
     * Whether the chat is currently in its welcome state (no messages yet).
     * Controls footer visibility and welcome-screen-only layout tweaks.
     */
    isWelcomeScreen?: boolean;
    /**
     * Grouped suggestions rendered as outline buttons above the composer on
     * the welcome screen. Clicking a group opens a single popover (above the
     * row, left-aligned, spanning the composer width) with that group's items.
     * Hovering an item previews its prompt in the textarea placeholder.
     *
     * Optional and independent of `welcomeScreenCards` — the two can have
     * different counts. No hard limit on the number of groups yet.
     */
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
    /** Called when the user clicks a sub-suggestion. Receives the picked
     *  `item` and its parent `group` (the outline-button entry). */
    onSuggestionClick?: (item: WelcomeScreenSuggestionItem, group: WelcomeScreenSuggestion) => void;
    /**
     * Where the welcome suggestions row sits relative to the composer.
     *
     * - `"above"` (the default) — its own block over the field, the arrangement
     *   every consumer has had: the row stands on the page, the field below it is
     *   a plain composer, and its popover opens upward into the welcome screen's
     *   empty space.
     *
     * - `"inside"` — the row moves INTO the field, at its foot, so the field's own
     *   border and AI focus highlight enclose it and the composer reads as a
     *   single bar about two lines tall. Its popover opens downward, because up is
     *   now the text you are about to type.
     *
     * ⚠️ `"inside"` IS A COMPOSER SHAPE, NOT JUST A POSITION. The chips do not get
     * a band of their own: they take the middle of the ACTION row, between the
     * attachment/host controls and the dictation · send pair, and One's mark goes
     * in front of the text. That is what keeps the field two bands tall — text,
     * then one row of controls — instead of three. Because the chips share that
     * line, they scroll sideways rather than wrapping, with the overflowing ends
     * faded: ten groups cost the same height as three.
     *
     * THE SHAPE FOLLOWS THE PROP, NOT THE WELCOME STATE. The suggestions
     * themselves are welcome-screen-only as they always were, but a composer that
     * dropped One's mark the moment the first message landed would change shape
     * under the reader mid-conversation. `"inside"` therefore keeps the bar for the
     * whole thread; after the welcome screen it is simply a bar with no chips in
     * it.
     *
     * @default "above"
     */
    welcomeScreenSuggestionsPlacement?: "above" | "inside";
    /**
     * Start closed, and open when the reader focuses the input — with a motion
     * reveal, the row growing into place.
     *
     * For hosts where the composer is not the thing the reader came for — a Home
     * hero, say — so the bar sits quiet until it is addressed, and the starter
     * prompts arrive at the moment they are useful.
     *
     * ⚠️ WITH `"inside"` THIS COLLAPSES THE WHOLE CONTROL ROW, not just the chips:
     * the field becomes ONE LINE — One's mark, the text, then dictation and send
     * trailing it at `sm` — and the chips, attachment and host controls arrive with
     * the row on focus. A row emptied of its chips would still be 56px of padding
     * around two buttons, which is not a quiet bar; it is the same two-band field
     * with a hole in it. Send comes along because a bar you cannot send from is not
     * a composer, and dictation because talking is a way to start a prompt without
     * typing one. With the row `"above"`, only that row collapses — the field below
     * it is a plain composer and does not change shape.
     *
     * FOCUS IS TRACKED ON THE WHOLE COMPOSER, not on the textarea: it closes when
     * focus leaves the field AND everything in it, including the suggestion panel
     * (which Radix portals outside the form). Closing on the textarea's own blur
     * would close the row the moment a chip took focus, which is every way of
     * picking one. Three things hold it open regardless of focus: anything already
     * typed or attached (a half-written prompt with no visible way to send it would
     * be a trap — and a host that forwards a dropped file can put one there without
     * the textarea ever being focused), and a recording in flight (its cancel ·
     * confirm pair lives in the row).
     *
     * ⚠️ It also suppresses the composer's own autofocus-on-mount, which would
     * otherwise open everything before the reader had touched anything and make
     * this prop a no-op. A collapsed composer starts unfocused.
     *
     * @default false
     */
    welcomeScreenSuggestionsCollapsedByDefault?: boolean;
    /**
     * Cards rendered as a grid below the composer on the fullscreen welcome
     * screen. Each card carries its own `onClick`; the host decides the behavior.
     *
     * Optional and independent of `welcomeScreenSuggestions` — the two can have
     * different counts. At most 4 cards are rendered (a 2×2 grid); extras are
     * dropped.
     */
    welcomeScreenCards?: F0AiChatWelcomeCard[];
    /**
     * The composer's own inset against whatever contains it.
     *
     * - `"default"` — the gutter the chat layouts expect (16px sides, 8px top,
     *   12px bottom). It is what keeps the field off the chat window's edges and
     *   leaves room for the focus glow, which bleeds a few pixels outside the
     *   field's border box.
     *
     * - `"none"` — no inset, for hosts that place the composer inside a container
     *   that already owns the spacing (a landing/home hero, a card). The host then
     *   owns BOTH sides of that bargain: give the composer some room of your own,
     *   and don't clip overflow around it, or the focus glow gets cut at the edge.
     *
     * Only the outer inset changes; the gap between the composer and the blocks
     * below it (suggestions, cards, footer, disclaimer) is unaffected.
     *
     * @default "default"
     */
    padding?: "default" | "none";
    /**
     * When true on the welcome screen, the composer adopts the fullscreen
     * layout: the input slot grows to claim the bottom half (so the textarea
     * rises toward the vertical center) and the welcome cards render below it.
     * The welcome suggestions row sits above the composer in both layouts.
     */
    fullscreen?: boolean;
};
