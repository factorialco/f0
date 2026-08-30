import { DateRange } from '../../../components/OneCalendar/types';
import { RecordType } from '../../../hooks/datasource';
import { DateFilterDefinition } from './DateFilter';
import { InFilterDefinition } from './InFilter';
import { NumberFilterDefinition } from './NumberFilter';
import { NumberFilterValue } from './NumberFilter/NumberFilter';
import { SearchFilterDefinition } from './SearchFilter';
import { FilterTypeDefinition } from './types';
export type { DateFilterDefinition, InFilterDefinition, NumberFilterDefinition, SearchFilterDefinition, };
/**
 * All the available filter types
 */
export type FilterDefinitionsByType<T = unknown, R extends RecordType = RecordType> = {
    in: InFilterDefinition<T, R>;
    search: SearchFilterDefinition;
    date: DateFilterDefinition;
    number: NumberFilterDefinition;
};
export declare const filterTypes: {
    readonly in: FilterTypeDefinition<string[], import('./InFilter/types').InFilterOptions<string>>;
    readonly search: FilterTypeDefinition<string | {
        value: string;
        strict: boolean;
    }, import('./SearchFilter/SearchFilter').SearchFilterOptions, string | {
        value: string;
        strict: boolean;
    }, true>;
    readonly date: FilterTypeDefinition<Date | DateRange | undefined, import('./DateFilter/DateFilter').DateFilterOptions>;
    readonly number: FilterTypeDefinition<NumberFilterValue, import('./NumberFilter/NumberFilter').NumberFilterOptions>;
};
/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export type FilterValue<T extends FilterDefinition> = T extends InFilterDefinition<infer U> ? U[] : T extends SearchFilterDefinition ? string : T extends DateFilterDefinition ? DateRange | Date | undefined : T extends NumberFilterDefinition ? NumberFilterValue | undefined : never;
/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
export type BaseFilterDefinition<T extends FilterTypeKey> = {
    /** Human-readable label for the filter */
    label: string;
    /** The type of filter */
    type: T;
    /**
     * Whether to hide the selector for this filter
     */
    hideSelector?: boolean;
};
/**
 * Union of all available filter types.
 * Used to define possible filter configurations in a collection.
 * @template T - Type of values for the InFilterDefinition
 */
export type FilterDefinition = FilterDefinitionsByType[keyof FilterDefinitionsByType];
type ValidateFilterType<T> = T extends {
    [K: string]: FilterTypeDefinition<unknown>;
} ? T : never;
export type FilterTypesValidated = ValidateFilterType<typeof filterTypes>;
export type FilterTypes = typeof filterTypes;
export type FilterTypeKey = keyof typeof filterTypes;
