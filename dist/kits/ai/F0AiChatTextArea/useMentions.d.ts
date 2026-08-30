import { PersonProfile } from '../F0AiChat/types';
/**
 * A tracked mention in the textarea text.
 */
export type MentionEntry = {
    /** Employee ID */
    id: string;
    /** Display name as inserted in the text (e.g. "Ana Garcia") */
    name: string;
};
export type UseMentionsOptions = {
    /** Current textarea value (controlled) */
    inputValue: string;
    /** Setter for the textarea value */
    setInputValue: (value: string) => void;
    /** Cursor position (selectionStart) in the textarea */
    cursorPosition: number;
    /** Search function for person mentions (@mention autocomplete) */
    searchPersons?: (query: string) => Promise<PersonProfile[]>;
    /** Ref to the textarea element for reading selection */
    textareaRef: React.RefObject<HTMLTextAreaElement | null>;
};
export type UseMentionsReturn = {
    /** Whether the mention popover should be open */
    isOpen: boolean;
    /** Current search query (text after the @) */
    query: string;
    /** Search results to display */
    results: PersonProfile[];
    /** Whether a search is in progress */
    isLoading: boolean;
    /** Currently highlighted index in the results list */
    selectedIndex: number;
    /** Active mentions in the current text */
    mentions: MentionEntry[];
    /** Pixel position for the popover, relative to the textarea's offset parent */
    popoverPosition: PopoverPosition;
    /**
     * The remaining portion of the selected person's name that hasn't been
     * typed yet. Shown as ghost text after the cursor. `null` when there is
     * no matching completion to suggest (e.g. popover closed, empty results,
     * or the query doesn't prefix-match the selected result).
     */
    inlineCompletion: string | null;
    /** Handle keyboard events — returns true if consumed */
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => boolean;
    /** Select a person from the results list */
    selectPerson: (person: PersonProfile) => void;
    /** Transform text, replacing @Name mentions with <entity-ref> tags */
    transformMentions: (text: string) => string;
    /** Close the popover */
    close: () => void;
};
export type PopoverPosition = {
    left: number;
    bottom: number;
} | null;
export declare function useMentions({ inputValue, setInputValue, cursorPosition, searchPersons, textareaRef, }: UseMentionsOptions): UseMentionsReturn;
