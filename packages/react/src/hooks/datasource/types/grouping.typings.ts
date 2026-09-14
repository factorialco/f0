import { RecordPaths, RecordPathValue } from "@/lib/objectPaths"
import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import { RecordType } from "./records.typings"
import { SortOrder } from "./sortings.typings"

/**
 * Defines the structure and configuration of a grouping options for a data source.
 * @template RecordType - The type of records in the collection
 */
export type GroupingDefinition<R extends RecordType> = {
  /** Whether grouping is mandatory or the user can chose not to group */
  mandatory?: boolean
  /**
   * Hides the grouping picker, leaving the grouping itself in force. For a
   * grouping the product decides and the user does not: the headers render,
   * the control to change them never does.
   *
   * Pair it with `mandatory: true` and a `defaultGrouping`/`currentGrouping`,
   * or the state can still arrive as "no grouping" with no way to leave it.
   */
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
 * One level of grouping: a field of the definition's `groupBy` map, plus the
 * direction its groups are laid out in.
 * @template Grouping - The grouping definition
 */
export type GroupingLevelState<
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
> = {
  field: keyof Grouping["groupBy"]
  order?: SortOrder
}

/**
 * The selected the grouping state
 * @template Grouping - The grouping definition
 */
export type GroupingState<
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
> =
  | (GroupingLevelState<R, Grouping> & {
      /**
       * Extra grouping levels, nested inside `field` in the order given: the
       * second level splits each first-level group, the third splits each of
       * those, and so on.
       *
       * Every level names another field of the SAME `groupBy` map, so it reuses
       * that field's `name` and `label` and needs no configuration of its own.
       * A level whose field the definition doesn't declare is ignored rather
       * than thrown on, so a stale `thenBy` degrades to fewer levels instead of
       * an empty list.
       *
       * Renderers that don't know about nesting see only the first level: each
       * top-level group still carries all of its records flattened in
       * `records`, exactly as it does without `thenBy`.
       */
      thenBy?: GroupingLevelState<R, Grouping>[]
    })
  | undefined
