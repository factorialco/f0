import { DashboardItemFiltersConfig, DashboardItemFiltersDefinition } from '../../types';
/**
 * Widget-header filter control: an icon button (with an applied-filter
 * counter) that opens a compact anchored popover for editing this widget's
 * filters.
 *
 * The popover is single-pane with drill-in navigation — a list of available
 * filters, then the selected filter's form — reusing the OneFilterPicker
 * building blocks. Edits are held as a draft and only emitted through
 * `onChange` when the user applies; dismissing the popover discards the
 * draft.
 */
export declare function DashboardItemFilters<ItemFilters extends DashboardItemFiltersDefinition>({ filters, value, onChange, onOpenChange, }: DashboardItemFiltersConfig<ItemFilters> & {
    /** Notifies the host header when the popover opens/closes. */
    onOpenChange?: (open: boolean) => void;
}): import("react").JSX.Element | null;
