import { ReactNode } from 'react';
interface OverflowListProps<T> {
    items: T[];
    /**
     * What to render as a list item (items outside of the overflow list)
     * @param item - The item to render
     * @param index - The index of the item
     * @param isVisible - Whether this item is in the visible list (true) or measurement container (false)
     */
    renderListItem: (item: T, index: number, isVisible?: boolean) => ReactNode;
    /**
     * What to render as a dropdown item (items inside of the overflow list)
     */
    renderDropdownItem: (item: T, index: number) => ReactNode;
    /**
     * What to render as the overflow indicator
     * If not provided, the default overflow indicator will be displayed
     */
    renderOverflowIndicator?: (count: number, isOpen: boolean) => ReactNode;
    /**
     * Whether to render the overflow indicator with a popover
     * @default false
     */
    overflowIndicatorWithPopover?: boolean;
    /**
     * Whether to force showing the overflow indicator
     * @default false
     */
    forceShowingOverflowIndicator?: boolean;
    /**
     * Additional styling for the container
     */
    className?: string;
    /**
     * The gap between items in pixels
     * Can be negative
     * @default 8
     */
    gap?: number;
    /**
     * The maximum number of items to display
     * @default undefined (means auto)
     */
    max?: number;
    /**
     * The minimum number of items to display
     * @default 0
     */
    min?: number;
    /**
     * Whether the items can change their width dynamically, for example when they have ellipsis.
     *
     * Enable it for items that can ellipsize: the row then lets them shrink, so
     * when `min` keeps an item visible that doesn't fit, it truncates inside its
     * own box instead of painting over the overflow indicator. Leave it off for
     * fixed-size items (avatars, chips), which have nothing to give and would
     * only get squeezed.
     * @default false
     */
    fluidItems?: boolean;
    /**
     * The widths of the items in pixels
     * This value is used to avoid calculating the width of the items in runtime
     * @default undefined (means auto)
     **/
    itemsWidth?: number | number[];
}
declare const OverflowList: {
    <T>({ items, renderListItem, renderDropdownItem, overflowIndicatorWithPopover, renderOverflowIndicator, forceShowingOverflowIndicator, className, gap, max, min, fluidItems, itemsWidth, }: OverflowListProps<T>): import("react").JSX.Element;
    displayName: string;
};
export { OverflowList };
