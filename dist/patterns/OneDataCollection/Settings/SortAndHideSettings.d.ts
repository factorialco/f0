import { SortAndHideListItem } from '../visualizations/collection/Table/components/SortAndHideList/types';
import { DataCollectionSettingsContextType } from './SettingsProvider';
type VisualizationSettingsKey = Parameters<DataCollectionSettingsContextType["setVisualizationSettings"]>[0];
export type SortAndHideSettingsProps = {
    /** The list rows, already computed from the caller's domain (columns, tags…). */
    items: SortAndHideListItem[];
    /** Which visualization settings entry to read/write (`order` + `hidden`). */
    visualizationKey: VisualizationSettingsKey;
    allowSorting: boolean;
    allowHiding: boolean;
    /**
     * When set, an "Add column" entry is shown at the top of the section. The
     * caller opens its own picker and updates the underlying columns.
     */
    onAddColumn?: () => void;
    /**
     * When set, items flagged `removable` reveal a trash affordance on hover that
     * calls this with the entry id. Removing is distinct from hiding.
     */
    onRemoveColumn?: (id: string) => void;
    /** Called when the user locks or unlocks a column. */
    onLockedColumnChange?: (id: string, locked: boolean) => void;
    /**
     * Logical column order before locked rows are moved into their visual group.
     * When present, reordering unlocked rows keeps locked ids in these slots.
     */
    orderBaseline?: readonly string[];
    /** Prevents bulk hiding from removing the final scrollable table column. */
    keepOneUnlockedVisible?: boolean;
};
export declare const mergeUnlockedOrderIntoBaseline: (baseline: readonly string[], nextItems: SortAndHideListItem[]) => string[];
export declare const setAllItemsVisibility: (items: SortAndHideListItem[], visible: boolean, keepOneUnlockedVisible?: boolean) => {
    visible: boolean | undefined;
    id: string;
    label: string;
    sortable?: boolean;
    canHide?: boolean;
    order?: number;
    removable?: boolean;
    locked?: boolean;
    lockable?: boolean;
    showLockState?: boolean;
    disabledReason?: string;
}[];
/**
 * Shared settings UI for reordering and hiding a list of entries (table
 * columns, graph metadata, …). Persists `{ order, hidden }` to the given
 * visualization settings key. The caller supplies the domain-specific `items`.
 *
 * Optionally exposes column add/remove affordances via `onAddColumn` /
 * `onRemoveColumn`; these mutate the caller's column set rather than the
 * persisted hide/order state.
 */
export declare const SortAndHideSettings: ({ items, visualizationKey, allowSorting, allowHiding, onAddColumn, onRemoveColumn, onLockedColumnChange, orderBaseline, keepOneUnlockedVisible, }: SortAndHideSettingsProps) => import("react").JSX.Element;
export {};
