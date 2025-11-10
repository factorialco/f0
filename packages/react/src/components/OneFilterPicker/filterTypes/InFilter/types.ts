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
export type InFilterOptions<T, R extends RecordType = RecordType> = {
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
      source: DataSourceDefinition<
        R,
        FiltersDefinition,
        SortingsDefinition,
        GroupingDefinition<R>
      >
      mapOptions: (item: R) => InFilterOptionItem<T>
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
