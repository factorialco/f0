import { FiltersDefinition } from '../../../patterns/OneFilterPicker/types';
import { SortingsDefinition } from '../types/sortings.typings';
import { GroupingDefinition, RecordType } from '../types';
import { UseSelectableProps, UseSelectableReturn } from './typings';
/**
 * Custom hook to manage selection state for items and groups in a data table
 * Supports single/multi selection, grouped data, pagination, and filtering
 */
export declare function useSelectable<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>>({ data, paginationInfo, source, selectionMode, selectedState, onSelectItems, disableSelectAll: disableSelectAllProp, isSearchActive, allPagesSelection, resetOnPageChange, preserveSelectionOnDatasetChange, getRenderedSelectableEntries, renderedSelectableCount, }: UseSelectableProps<R, Filters, Sortings, Grouping>): UseSelectableReturn<R, Filters>;
