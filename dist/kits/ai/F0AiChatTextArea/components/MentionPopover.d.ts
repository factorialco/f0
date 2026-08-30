import { PersonProfile } from '../../F0AiChat/components/markdownRenderers/entityRef/entities/person/types';
import { PopoverPosition } from '../useMentions';
export type MentionPopoverProps = {
    /** Whether the popover is visible */
    isOpen: boolean;
    /** Search results to display */
    results: PersonProfile[];
    /** Whether a search is in progress */
    isLoading: boolean;
    /** Currently highlighted index */
    selectedIndex: number;
    /** Pixel position for the popover (left / bottom relative to parent) */
    position: PopoverPosition;
    /** Callback when a person is selected */
    onSelect: (person: PersonProfile) => void;
};
/**
 * Dropdown list for @mention autocomplete, positioned above the textarea.
 *
 * Renders person results with avatars, names, and optional job titles.
 * Supports keyboard navigation (highlighted index managed externally via useMentions).
 */
export declare function MentionPopover({ isOpen, results, isLoading, selectedIndex, position, onSelect, }: MentionPopoverProps): import("react").JSX.Element | null;
