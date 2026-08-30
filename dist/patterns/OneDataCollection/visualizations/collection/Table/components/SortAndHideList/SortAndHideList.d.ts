import { SortAndHideListItem } from './types';
export declare const mergeReorderedItems: (currentItems: SortAndHideListItem[], reorderedItems: SortAndHideListItem[]) => SortAndHideListItem[];
export type SortAndHideListProps = {
    items: SortAndHideListItem[];
    onChange?: (items: SortAndHideListItem[]) => void;
    /**
     * Called when the user removes an entry via its hover trash affordance. Only
     * items flagged `removable` show the affordance. Removing is distinct from
     * hiding: the caller is expected to drop the entry from its source.
     */
    onRemove?: (item: SortAndHideListItem) => void;
    /** Called when the user locks or unlocks an item. */
    onLockedChange?: (item: SortAndHideListItem, locked: boolean) => void;
    allowSorting: boolean;
    allowHiding: boolean;
};
export declare const SortAndHideList: ({ items, onChange, onRemove, onLockedChange, allowSorting, allowHiding, }: SortAndHideListProps) => import("react").JSX.Element;
