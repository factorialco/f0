import {
  DateFilterDefinition,
  FilterDefinition,
  FilterValue,
  InFilterDefinition,
  NumberFilterDefinition,
  SearchFilterDefinition,
} from "./filterTypes"
export type {
  DateFilterDefinition,
  FilterDefinition,
  FilterValue,
  InFilterDefinition,
  NumberFilterDefinition,
  SearchFilterDefinition,
}

/**
 * Extracts the value type for a specific filter key from a FiltersDefinition.
 * This helper type allows for type-safe access to filter values when you know the specific filter key.
 *
 * @example
 * ```ts
 * type MyFilters = {
 *   department: InFilterDefinition<string>
 *   search: SearchFilterDefinition
 * }
 *
 * type DepartmentValue = FilterValueByKey<MyFilters, 'department'> // string[]
 * type SearchValue = FilterValueByKey<MyFilters, 'search'> // string
 * ```
 *
 * @template Definition - The FiltersDefinition type
 * @template Key - The specific filter key to extract the value type for
 */
export type FilterValueByKey<
  Definition extends Record<string, FilterDefinition>,
  Key extends keyof Definition,
> = FilterValue<Definition[Key]>

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export type FiltersState<Definition extends Record<string, FilterDefinition>> = {
  [K in keyof Definition]?: FilterValue<Definition[K]>
}

export type FiltersMode = "default" | "compact"

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export type FiltersDefinition<Keys extends string = string> = Record<Keys, FilterDefinition>

/**
 * Configuration options for filters in a collection.
 * Defines the structure and behavior of available filters.
 * @template FilterKeys - String literal type for filter keys
 */
export type FilterOptions<FilterKeys extends string> = Record<FilterKeys, FilterDefinition>

/**
 * Extracts the current filters type from filter options.
 * Creates a type mapping filter keys to their respective value types.
 * Used for type-safe access to filter values.
 * @template F - The filter options type
 */
export type CurrentFilters<F extends FilterOptions<string>> = F extends {
  fields: Record<infer K extends string, FilterDefinition>
}
  ? {
      [Key in K]?: FilterValue<F["fields"][Key]>
    }
  : Record<string, never>

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
export type PresetDefinition<Filters extends FiltersDefinition> = {
  /** Display name for the preset */
  label: string
  /** Filter configuration to apply when this preset is selected */
  filter: FiltersState<Filters>
  /** Function to count the number of items that match the filter */
  itemsCount?: (filters: FiltersState<Filters>) => Promise<number | undefined> | number | undefined
}

export type PresetsDefinition<Filters extends FiltersDefinition> = PresetDefinition<Filters>[]
