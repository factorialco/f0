import { EmojiAutocompleteCandidate } from '../hooks/useEmojiAutocomplete';
import { PopoverPosition } from '../hooks/useMentions';
export type ChatEmojiAutocompleteProps = {
    isOpen: boolean;
    results: EmojiAutocompleteCandidate[];
    selectedIndex: number;
    position: PopoverPosition;
    listboxId: string;
    label: string;
    onSelect: (candidate: EmojiAutocompleteCandidate) => void;
    onHighlight: (index: number) => void;
};
/**
 * Slack-style `:` emoji autocomplete. Focus remains in the textarea while the
 * active row follows keyboard or pointer navigation.
 */
export declare function ChatEmojiAutocomplete({ isOpen, results, selectedIndex, position, listboxId, label, onSelect, onHighlight, }: ChatEmojiAutocompleteProps): import("react").JSX.Element | null;
