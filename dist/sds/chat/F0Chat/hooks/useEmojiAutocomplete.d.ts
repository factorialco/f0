import { EmojiEntry } from '../utils/emoji-index';
import { EmojiLocaleTerms } from '../utils/emoji-locale';
import { PopoverPosition } from './useMentions';
/** The list rows only need these three; the shared index carries more. */
export type EmojiAutocompleteCandidate = Pick<EmojiEntry, "id" | "name" | "native">;
type EmojiTrigger = {
    colonIndex: number;
    query: string;
};
export type UseEmojiAutocompleteOptions = {
    inputValue: string;
    setInputValue: (value: string) => void;
    cursorPosition: number;
    setCursorPosition: (position: number) => void;
    textareaRef: React.RefObject<HTMLTextAreaElement | null>;
};
export type UseEmojiAutocompleteReturn = {
    isOpen: boolean;
    query: string;
    results: EmojiAutocompleteCandidate[];
    selectedIndex: number;
    popoverPosition: PopoverPosition;
    listboxId: string;
    activeDescendantId: string | undefined;
    handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => boolean;
    selectCandidate: (candidate: EmojiAutocompleteCandidate) => void;
    setSelectedIndex: (index: number) => void;
    close: () => void;
};
/**
 * Shortcode results for the composer, capped at {@link MAX_RESULTS}.
 *
 * The ranking used to live here on its own copy of the dataset, which meant the
 * `:` list and the picker's search box could — and did — disagree. Both now go
 * through the one index in `../utils/emoji-index`.
 *
 * Filtered to what this platform can draw: an autocomplete that offers an emoji
 * arriving as a tofu box is worse than one that doesn't offer it.
 */
export declare const searchEmojiCandidates: (rawQuery: string, localizedTerms?: EmojiLocaleTerms) => EmojiAutocompleteCandidate[];
export declare const findEmojiTrigger: (text: string, cursorPosition: number) => EmojiTrigger | null;
export declare const replaceClosedEmojiShortcode: (text: string, cursorPosition: number) => {
    value: string;
    cursorPosition: number;
} | null;
export declare const getEmojiAutocompleteOptionId: (listboxId: string, id: string) => string;
export declare function useEmojiAutocomplete({ inputValue, setInputValue, cursorPosition, setCursorPosition, textareaRef, }: UseEmojiAutocompleteOptions): UseEmojiAutocompleteReturn;
export {};
