import { forwardRef } from "react"

import type {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import type { ItemActionsDefinition } from "@/patterns/OneDataCollection/item-actions"
import type { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import type { SummariesDefinition } from "@/patterns/OneDataCollection/summary"
import type { TableVisualizationType } from "@/patterns/OneDataCollection/types"

import { FlatRow, type RowProps } from "./FlatRow"
import { NestedRow } from "./NestedRow"

export type {
  AddRowAction,
  NestedRowProps,
  OnAddRowConfig,
  RowProps,
} from "./FlatRow"

const RowComponentInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: RowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  ref: React.ForwardedRef<HTMLTableRowElement>
) => {
  const rowWithChildren = !!props.source.itemsWithChildren?.(props.item)
  const hasChildrenLoaded =
    props.nestedRowProps?.hasLoadedChildren === undefined ||
    props.nestedRowProps.hasLoadedChildren

  if (rowWithChildren && hasChildrenLoaded) {
    return <NestedRow {...props} ref={ref} />
  }

  return <FlatRow {...props} ref={ref} />
}

const Row = forwardRef(RowComponentInner) as <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: RowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  > & {
    ref?: React.ForwardedRef<HTMLTableRowElement>
    fromVisualization?: TableVisualizationType
  }
) => ReturnType<typeof RowComponentInner>

export { Row }
