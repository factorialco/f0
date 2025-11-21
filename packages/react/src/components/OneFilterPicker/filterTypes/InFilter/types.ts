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
