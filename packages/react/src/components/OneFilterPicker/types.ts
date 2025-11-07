import { RecordType } from "@/hooks/datasource"
import { FilterDefinition, FilterValue } from "./filterTypes"
export type { FilterDefinition, FilterValue }

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export type FiltersState<
  Definition extends Record<string, FilterDefinition<unknown, RecordType>>,
> = {
  [K in keyof Definition]?: FilterValue<Definition[K]>
}

export type FiltersMode = "default" | "compact"

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available filters for a collection.
 *
 * This type accepts any record where each value is a FilterDefinition,
 * allowing different filters to have different value types and RecordTypes.
 *
 * @template FilterKeys - String literal type for filter keys (optional, defaults to string)
 * @template T - Type of values for the InFilterDefinition (optional, defaults to unknown)
 * @template R - RecordType for the InFilterDefinition (optional, defaults to RecordType)
 */
export type FiltersDefinition<
  FilterKeys extends string = string,
  T = unknown,
  R extends RecordType = RecordType,
> = Record<FilterKeys, FilterDefinition<T, R>>

export type FilterOptions<
  FilterKeys extends string,
  T = unknown,
  R extends RecordType = RecordType,
> = Record<FilterKeys, FilterDefinition<T, R>>

/**
 * Extracts the current filters type from filter options.
 * Creates a type mapping filter keys to their respective value types.
 * Used for type-safe access to filter values.
 * @template F - The filter options type
 */
export type CurrentFilters<
  F extends FilterOptions<string, unknown, RecordType>,
> = F extends {
  fields: Record<infer K extends string, FilterDefinition<unknown, RecordType>>
}
  ? {
      [Key in K]?: FilterValue<F["fields"][Key]>
    }
  : Record<string, never>

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
export type PresetDefinition<
  Filters extends Record<string, FilterDefinition<unknown, RecordType>>,
> = {
  /** Display name for the preset */
  label: string
  /** Filter configuration to apply when this preset is selected */
  filter: FiltersState<Filters>
  /** Function to count the number of items that match the filter */
  itemsCount?: (
    filters: FiltersState<Filters>
  ) => Promise<number | undefined> | number | undefined
}

export type PresetsDefinition<
  Filters extends Record<string, FilterDefinition<unknown, RecordType>>,
> = PresetDefinition<Filters>[]
