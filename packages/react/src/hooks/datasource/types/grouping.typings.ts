import { FiltersDefinition, FiltersState } from "@/components/OneFilterPicker/types"
import { RecordPaths, RecordPathValue } from "@/lib/objectPaths"
import { RecordType } from "./records.typings"
import { SortOrder } from "./sortings.typings"

/**
 * Defines the structure and configuration of a grouping options for a data source.
 * @template RecordType - The type of records in the collection
 */
export type GroupingDefinition<R extends RecordType> = {
  /** Whether grouping is mandatory or the user can chose not to group */
  mandatory?: boolean
  hideSelector?: boolean
  groupBy: {
    [K in RecordPaths<R>]?: {
      /** The label for the grouping */
      name: string
      /** The item count for the grouping */
      label: (
        groupId: RecordPathValue<R, K>,
        filters: FiltersState<FiltersDefinition>
      ) => string | Promise<string>
      defaultDirection?: SortOrder
      itemCount?: (
        groupId: RecordPathValue<R, K>,
        filters: FiltersState<FiltersDefinition>
      ) => number | undefined | Promise<number | undefined>
    }
  }
} & (
  | {
      /** Whether the grouping is non collapsible */
      collapsible: true
      /** The initial open groups */
      defaultOpenGroups?: boolean | string[]
    }
  | {
      collapsible?: false
      defaultOpenGroups?: never
    }
)

/**
 * The selected the grouping state
 * @template Grouping - The grouping definition
 */
export type GroupingState<R extends RecordType, Grouping extends GroupingDefinition<R>> =
  | {
      field: keyof Grouping["groupBy"]
      order?: SortOrder
    }
  | undefined
