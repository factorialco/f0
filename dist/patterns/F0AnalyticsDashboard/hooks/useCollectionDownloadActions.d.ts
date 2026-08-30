import { DropdownItem } from '../../../experimental/Navigation/Dropdown';
import { RecordType } from '../../../hooks/datasource';
/**
 * Minimum source shape we need to honour the view state at click-time.
 * Purposely loose (`unknown`) — this hook sits in dashboard land and must
 * accept any `DataCollectionSource` without dragging every generic
 * through the component tree.
 */
type DownloadableSource = {
    dataAdapter: {
        paginationType?: "pages" | "infinite-scroll" | undefined;
        fetchData: (params: Record<string, unknown>) => unknown;
        exportFetchData?: (params: Record<string, unknown>) => unknown;
    };
    currentFilters?: unknown;
    currentSortings?: {
        field: string;
        order: "asc" | "desc";
    } | null;
    currentGrouping?: {
        field: string;
        order?: "asc" | "desc";
    } | null;
    currentSearch?: string;
    currentNavigationFilters?: unknown;
};
/**
 * Optional per-column metadata declared by the dashboard collection item.
 * Used to (a) produce human-readable headers and (b) anchor the export
 * column order when the user has not tweaked visualization settings.
 */
export type DownloadableColumn = {
    id: string;
    label: string;
    /** Optional renderer from the table visualization. When present, its output
     *  is funneled through `extractDisplayValue` so typed cells (person, status,
     *  tag, …) export as human-readable strings instead of raw objects. */
    render?: (item: RecordType) => unknown;
};
interface UseCollectionDownloadActionsOptions {
    /** Active data source — read at click-time to respect latest state. */
    source: DownloadableSource | null | undefined;
    /** Filename base (no extension). */
    title: string;
    /** Declarative column list from the dashboard item (id + label). */
    columns: DownloadableColumn[];
    /**
     * Settings snapshot from OneDataCollection's `onStateChange`. When
     * present we filter out hidden columns and apply the user's preferred
     * order. The shape matches OneDataCollection's internal
     * `TableVisualizationSettings`.
     */
    tableSettings?: {
        hidden?: string[];
        order?: string[];
    };
}
/**
 * Build the Excel/CSV download actions for the DashboardItem 3-dot menu.
 * Both actions run against the current view state:
 *   - filters, sortings, search and navigation filters from `source`
 *   - hidden columns + column order from the collection's table settings
 *     (captured via OneDataCollection's `onStateChange` callback)
 *   - human-readable headers pulled from the agent-supplied `columns[].label`
 */
export declare function useCollectionDownloadActions({ source, title, columns, tableSettings, }: UseCollectionDownloadActionsOptions): DropdownItem[];
export {};
