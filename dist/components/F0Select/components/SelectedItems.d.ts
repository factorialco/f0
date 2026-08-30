import { F0SelectItemObject } from '../types';
type SelectValueProps = {
    selection: F0SelectItemObject<string>[];
    multiple?: boolean;
    /** Total count of selected items (useful when not all items are loaded) */
    totalSelectedCount?: number;
    /** Whether all items are selected */
    allSelected?: boolean | "indeterminate";
    /**
     * Whether to leave the selected item's icon out.
     *
     * Set when the FIELD already carries an `icon`: the two are drawn in different
     * places — the field's is absolutely placed at `left-2`, this one sits inside
     * the value area's `px-3` — so showing both puts two glyphs 4px apart on one
     * trigger. Options keep their icons for the rows either way.
     */
    hideItemIcon?: boolean;
};
/**
 * Component for displaying the selected item or items in the inputField
 */
export declare const SelectedItems: import('react').ForwardRefExoticComponent<SelectValueProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
