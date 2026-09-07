import { TranslationsType } from "@/lib/providers/i18n"
import {
  DateNavigatorFilterDefinition,
  DateValue,
} from "./filterTypes/DateNavigation/types"

export type NavigationFilter<T, InitialValue = T> = {
  /**
   * Converts the initial value to the correct type for the filter.
   * This is useful for filters that have a complex internal state but the initial value is a simple type, for example a navigation filter. The initial can be a simple date but the internal state converts it to a date range based on the granularity.
   * @param defaultValue - The initial value to convert
   * @param props - The props of the filter
   * @returns The converted value
   */
  valueConverter?: (
    defaultValue: InitialValue,
    filterDef: NavigationFilterComponentProps<T>["filter"],
    i18n: TranslationsType
  ) => T
  /**
   * Renders the filter component.
   * @param props - The props of the filter
   * @returns The rendered component
   */
  render: (props: NavigationFilterComponentProps<T>) => React.ReactNode
}

export type NavigationFilterDefinitionBase<T> = {
  type: string
  defaultValue: T
}

export type NavigationFilterDefinition = DateNavigatorFilterDefinition

export type NavigationFilterComponentProps<T> = {
  filter: NavigationFilterDefinition
  value: T
  onChange: (value: T) => void
}

/**
 * Record of navigation filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available navigation filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export type NavigationFiltersDefinition<Keys extends string = string> = Record<
  Keys,
  NavigationFilterDefinition
>

/**
 * Represents a navigation filter with its current value.
 * @template T - The type of the filter value
 */
export type NavigationFilterValue<T> = T extends DateNavigatorFilterDefinition
  ? DateValue
  : T extends undefined
    ? undefined
    : never

/**
 * Current state of all navigation filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export type NavigationFiltersState<
  Definition extends Record<string, NavigationFilterDefinition>,
> = {
  [K in keyof Definition]?: NavigationFilterValue<Definition[K]>
}
