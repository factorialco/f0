import { RecordType, FiltersDefinition, SortingsDefinition, GroupingDefinition } from '../../../hooks/datasource';
import { ItemActionsDefinition } from '../item-actions';
import { NavigationFiltersDefinition } from '../navigationFilters/types';
import { SummariesDefinition } from '../summary';
import { Visualization } from '../visualizations/collection';
export interface CSVExportOptions {
    filename?: string;
    includeHeaders?: boolean;
    /** Column IDs to exclude from export (respects column visibility settings) */
    hiddenColumnIds?: Set<string>;
    /** Column ID order to apply (respects column reordering settings) */
    columnOrder?: string[];
}
export interface ColumnDefinition<R extends RecordType = RecordType> {
    label: string;
    field?: string;
    render?: (item: R) => string;
}
export declare function escapeCSVCell(value: unknown): string;
/**
 * Extract a plain-text representation from a cell value returned by a column's
 * `render` function.
 *
 * Column renderers in f0 return either:
 *  - a primitive (string / number)
 *  - a `{ type, value }` wrapper where `type` is one of the value-display cell
 *    types and `value` is the type-specific payload
 *  - a raw typed object (person, badge, date, …)
 */
export declare function extractDisplayValue(renderResult: unknown): string;
/**
 * Given a cell `type` identifier and its unwrapped `value`, return a
 * human-readable string suitable for CSV export.
 *
 * The types mirror those in `packages/react/src/components/value-display/types/`.
 */
export declare function extractTypedCellValue(type: string, value: unknown): string;
export declare function extractColumns<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> | undefined, hiddenColumnIds?: Set<string>, columnOrder?: string[]): ColumnDefinition<R>[];
export declare function generateCSVContent<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(data: R[], visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> | undefined, options?: CSVExportOptions): string;
export declare function downloadAsCSV<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(data: R[], visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> | undefined, options?: CSVExportOptions): Promise<void>;
