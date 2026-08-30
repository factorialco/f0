import { ReactNode } from 'react';
export type EmojiPickerProps = {
    /** Receives the emoji character itself, e.g. `"🎉"`. */
    onSelect: (emoji: string) => void;
    className?: string;
    /**
     * Highest Emoji release to offer. Defaults to what this platform can actually
     * draw — override only to pin behaviour in a test or a screenshot.
     */
    emojiVersion?: number;
    /** Focus the search box on mount. On by default: the picker opens from a
     * deliberate click, and typing is the fastest way through 1,800 emoji. */
    autoFocusSearch?: boolean;
    /** Language for the search terms. Defaults to the browser's. English is
     * always available regardless — it's in the bundle. */
    locale?: string;
};
/**
 * F0's emoji picker: system glyphs, F0 tokens, no shadow DOM.
 *
 * This is the panel only — every caller already owns the popover it lives in,
 * and its trigger.
 *
 * Emoji the running platform can't draw are filtered out rather than shown as
 * tofu boxes; see `lib/emoji-support`.
 */
export declare const EmojiPicker: ({ onSelect, className, emojiVersion, autoFocusSearch, locale, }: EmojiPickerProps) => ReactNode;
