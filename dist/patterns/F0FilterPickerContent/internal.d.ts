import { FiltersDefinition } from '../OneFilterPicker/types';
import { FilterPickerInternalProps } from './internal-types';
/**
 * Internal component that renders the filter picker content.
 * Used by both F0FilterPickerContent and FiltersControls to avoid code duplication.
 */
export declare function FilterPickerInternal<Filters extends FiltersDefinition>({ filters, tempFilters, selectedFilterKey, onFilterSelect, onFilterChange, onApply, onClear, height, showApplyButton, applyButtonLabel, className, }: FilterPickerInternalProps<Filters>): import("react").JSX.Element;
export declare namespace FilterPickerInternal {
    var displayName: string;
}
