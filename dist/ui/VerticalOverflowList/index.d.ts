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
     * Additional styling for the container
     */
    className?: string;
    /**
     * The gap between items in pixels
     * @default 8
     */
    gap?: number;
    /**
     * The minimum size of the container
     * @default 0
     */
    minSize: number;
    /**
     * Callback when the visible items change
     * @param visibleItems - The visible items
     */
    onVisibleItemsChange?: (visibleItems: T[]) => void;
}
declare const VerticalOverflowList: {
    <T>({ items, renderListItem, className, gap, minSize, onVisibleItemsChange, }: OverflowListProps<T>): import("react").JSX.Element;
    displayName: string;
};
export { VerticalOverflowList };
