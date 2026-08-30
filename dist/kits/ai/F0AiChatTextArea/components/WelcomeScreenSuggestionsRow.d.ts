import { WelcomeScreenSuggestion, WelcomeScreenSuggestionItem } from '../../F0AiChat/types';
export type WelcomeScreenSuggestionsRowProps = {
    suggestions: WelcomeScreenSuggestion[];
    /**
     * Fired when the user picks a sub-suggestion. Receives the picked `item`
     * AND its parent `group` so callers (tracking, analytics) can attribute
     * the click to the full path the user took.
     */
    onItemClick: (item: WelcomeScreenSuggestionItem, group: WelcomeScreenSuggestion) => void;
    /**
     * Fires while the user hovers an item (passes the item) and when the
     * hover ends (passes null). Used to preview the item's prompt as the
     * textarea placeholder.
     */
    onItemHover?: (item: WelcomeScreenSuggestionItem | null) => void;
    /**
     * Side the popover opens towards. Defaults to "top" — the row sits above the
     * textarea, so the popover opens upward into the empty space rather than
     * covering the composer. "bottom" remains available for layouts that place
     * the row below the textarea.
     */
    side?: "top" | "bottom";
    /**
     * Reserve height for two chip rows so a suggestion-set swap that wraps 1↔2
     * rows cannot shift the layout above the row.
     *
     * True for the row standing above the composer, where the reservation is
     * free — it sits in the empty space the welcome screen already has. False
     * when the row is rendered INSIDE the field: there the reservation is not
     * free, it is 72px of permanent dead height inside a bordered box, and the
     * field grows and shrinks with its own text anyway.
     *
     * @default true
     */
    reserveTwoRows?: boolean;
    /**
     * What the row does when the groups do not fit its width.
     *
     * - `"wrap"` — they flow onto a second line. Right for the row standing above
     *   the composer, which has the page's height to spend.
     * - `"scroll"` — one line, scrolled sideways, with the overflowing ends faded
     *   (see {@link useHorizontalScrollFade}). Right for the row sharing the
     *   composer's action band with the send button: there the row is one cell of a
     *   single-line flex row, and a second line of chips would grow the field's
     *   whole bottom band. Ten groups then cost the same height as three.
     *
     * @default "wrap"
     */
    overflow?: "wrap" | "scroll";
};
/**
 * Group buttons + shared popover that lives next to the textarea on the
 * welcome screen. A single Popover, anchored to the row container so its
 * content spans the full textarea width and always opens above-left.
 */
export declare const WelcomeScreenSuggestionsRow: ({ suggestions, onItemClick, onItemHover, side, reserveTwoRows, overflow, }: WelcomeScreenSuggestionsRowProps) => import("react").JSX.Element | null;
