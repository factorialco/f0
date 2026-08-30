import { DropdownItem } from '../../../experimental/Navigation/Dropdown';
import { CardBookmark } from '../types';
interface CardOptionsProps {
    /**
     * Actions to display in the dropdown menu
     */
    otherActions?: DropdownItem[];
    /**
     * Whether the card is selectable
     */
    selectable?: boolean;
    /**
     * Whether the card is selected
     */
    selected?: boolean;
    /**
     * The callback to handle the selection of the card
     */
    onSelect?: (selected: boolean) => void;
    /**
     * Bookmark (save) toggle rendered alongside the other options.
     */
    bookmark?: CardBookmark;
    /**
     * Title for accessibility
     */
    title?: string;
    /**
     * Whether the options are displayed with an overlay (displayed with the image)
     */
    overlay?: boolean;
}
export declare function CardOptions({ otherActions, selectable, selected, onSelect, bookmark, title, overlay, }: CardOptionsProps): import("react").JSX.Element | null;
export {};
