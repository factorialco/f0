import {
  DataSourceDefinition,
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { FilterTypeComponentProps } from "../types"

/**
 * Represents a selectable option in filter components.
 * Used primarily with InFilterDefinition.
 * @template T - Type of the underlying value
 */
export type InFilterOptionItem<T = unknown> = {
  /** The value used for filtering */
  value: T
  /** Human-readable label for the option */
  label: string
}

/**
 * Represents the options for the InFilter component.
 * @template T - Type of the underlying value
 */
export type InFilterOptions<T, _R extends RecordType = RecordType> = {
  cache?: boolean
  /**
   * Optional function to resolve labels for specific values without fetching all options.
   * This is useful when you have a dynamic source and want to avoid fetching all options
   * just to display labels for selected values.
   * @param value - The value to get the label for
   * @returns The label for the value, or a promise that resolves to the label
   */
  getLabel?: (value: T) => string | Promise<string>
} & (
  | {
      options:
        | Array<InFilterOptionItem<T>>
        | (() =>
            | Array<InFilterOptionItem<T>>
            | Promise<Array<InFilterOptionItem<T>>>)
    }
  | {
      // Accept any DataSourceDefinition with any record type
      // The mapOptions function will handle the mapping from the specific record type
      source: DataSourceDefinition<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We need to accept any record type here
        any,
        FiltersDefinition,
        SortingsDefinition,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        GroupingDefinition<any>
      >
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The item type comes from the source's record type
      mapOptions: (item: any) => InFilterOptionItem<T>
    }
)

/**
 * Represents the component props for the InFilter component.
 * @template T - Type of the underlying value
 */
export type InFilterComponentProps = FilterTypeComponentProps<
  string[],
  InFilterOptions<string>
>
