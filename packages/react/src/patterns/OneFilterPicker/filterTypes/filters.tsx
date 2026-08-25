import { DateRange } from "@/components/OneCalendar/types"
import { RecordType } from "@/hooks/datasource"

import dateFilter, { DateFilterDefinition } from "./DateFilter"
import inFilter, { InFilterDefinition } from "./InFilter"
import { numberFilter, NumberFilterDefinition } from "./NumberFilter"
import { NumberFilterValue } from "./NumberFilter/NumberFilter"
import operatorFilter, { OperatorFilterDefinition } from "./OperatorFilter"
import { OperatorFilterValue } from "./OperatorFilter/OperatorFilter"
import searchFilter, { SearchFilterDefinition } from "./SearchFilter"
import { FilterTypeDefinition } from "./types"

export type {
  DateFilterDefinition,
  InFilterDefinition,
  NumberFilterDefinition,
  SearchFilterDefinition,
}

/**
 * All the available filter types
 */
export type FilterDefinitionsByType<
  T = unknown,
  R extends RecordType = RecordType,
> = {
  in: InFilterDefinition<T, R>
  search: SearchFilterDefinition
  date: DateFilterDefinition
  number: NumberFilterDefinition
}

/**
 * Filter definitions registered internally with the picker renderer.
 *
 * `FilterDefinition` deliberately remains the stable, public built-in union.
 * Dashboard item filters can opt into the operator definition without widening
 * the default union used by every existing data-source consumer.
 */
export type RegisteredFilterDefinitionsByType<
  T = unknown,
  R extends RecordType = RecordType,
> = FilterDefinitionsByType<T, R> & {
  operator: OperatorFilterDefinition
}

export const filterTypes = {
  in: inFilter,
  search: searchFilter,
  date: dateFilter,
  number: numberFilter,
} as const

/** Internal registry used by the dashboard's opt-in condition editor. */
export const registeredFilterTypes = {
  ...filterTypes,
  operator: operatorFilter,
} as const

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export type FilterValue<T extends FilterDefinition> =
  T extends InFilterDefinition<infer U>
    ? U[]
    : T extends SearchFilterDefinition
      ? string
      : T extends DateFilterDefinition
        ? DateRange | Date | undefined
        : T extends NumberFilterDefinition
          ? NumberFilterValue | undefined
          : never

/** Value mapping for definitions understood by the internal renderer. */
export type RegisteredFilterValue<T extends RegisteredFilterDefinition> =
  T extends InFilterDefinition<infer U>
    ? U[]
    : T extends SearchFilterDefinition
      ? string
      : T extends DateFilterDefinition
        ? DateRange | Date | undefined
        : T extends OperatorFilterDefinition
          ? OperatorFilterValue | undefined
          : T extends NumberFilterDefinition
            ? NumberFilterValue | undefined
            : never

/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
export type BaseFilterDefinition<T extends FilterTypeKey> = {
  /** Human-readable label for the filter */
  label: string
  /** The type of filter */
  type: T
  /**
   * Whether to hide the selector for this filter
   */
  hideSelector?: boolean
}

/**
 * Union of all available filter types.
 * Used to define possible filter configurations in a collection.
 * @template T - Type of values for the InFilterDefinition
 */
export type FilterDefinition =
  FilterDefinitionsByType[keyof FilterDefinitionsByType]

/** All definitions understood by the internal renderer registry. */
export type RegisteredFilterDefinition =
  RegisteredFilterDefinitionsByType[keyof RegisteredFilterDefinitionsByType]

export type RegisteredFiltersDefinition = Record<
  string,
  RegisteredFilterDefinition
>

export type RegisteredFiltersState<
  Definition extends RegisteredFiltersDefinition,
> = {
  [K in keyof Definition]?: RegisteredFilterValue<Definition[K]>
}

// This type ensures each filter follows FilterTypeDefinition while preserving its specific type
type ValidateFilterType<T> = T extends {
  [K: string]: FilterTypeDefinition<unknown>
}
  ? T
  : never
export type FilterTypesValidated = ValidateFilterType<typeof filterTypes>
export type FilterTypes = typeof filterTypes
export type FilterTypeKey = keyof typeof filterTypes
export type RegisteredFilterTypes = typeof registeredFilterTypes
export type RegisteredFilterTypeKey = keyof RegisteredFilterTypes
