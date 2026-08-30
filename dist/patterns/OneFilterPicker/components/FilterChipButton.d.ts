import { ReactElement } from 'react';
import { FilterValue, FiltersDefinition } from '../types';
/**
 * Animated chip component that displays an active filter with its current value.
 */
export declare function FilterChipButton<Definition extends FiltersDefinition>({ filter, filterKey, value, onSelect, onRemove, }: {
    filter: Definition[keyof Definition];
    filterKey?: string;
    value: FilterValue<Definition[keyof Definition]> | undefined;
    onSelect: () => void;
    onRemove: () => void;
}): ReactElement;
