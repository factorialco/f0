import { MentionCandidate, PopoverPosition } from '../hooks/useMentions';
export type ChatMentionPopoverProps = {
    isOpen: boolean;
    listboxId: string;
    /** Rows to display: the "everyone" option (when matching) then members. */
    results: MentionCandidate[];
    isLoading: boolean;
    selectedIndex: number;
    position: PopoverPosition;
    onSelect: (candidate: MentionCandidate) => void;
    /** Localized "Notify everyone in this group" description for the @here row. */
    everyoneDescription: string;
};
export declare const getChatMentionOptionId: (listboxId: string, candidate: MentionCandidate) => string;
/**
 * Inline `@`-mention autocomplete, positioned above the textarea — the comms
 * twin of the AI chat's MentionPopover (same chrome, positioning and skeletons).
 * Renders group members, with the "everyone" (`@here`) option pinned on top.
 */
export declare function ChatMentionPopover({ isOpen, listboxId, results, isLoading, selectedIndex, position, onSelect, everyoneDescription, }: ChatMentionPopoverProps): import("react").JSX.Element | null;
