import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { cn } from "@/lib/utils"

import { DataCollectionSource } from "../../../../hooks/useDataCollectionSource"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { SummariesDefinition } from "../../../../summary"
import { ItemDefinition, ListPropertyDefinition } from "../types"
import { Row } from "./Row"

type ListGroupProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  items: R[]
  selectedItems: Map<number | string, R>
  handleSelectItemChange: (item: R, checked: boolean) => void
  fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>
  itemDefinition: (record: R) => ItemDefinition
  isLoadingMore: boolean
}

/**
 * Group List: Renders the list for a group
 */
export const ListGroup = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  items,
  selectedItems,
  handleSelectItemChange,
  fields,
  itemDefinition,
  isLoadingMore,
}: ListGroupProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary",
        isLoadingMore && "rounded-b-none"
      )}
    >
      {items.map((item, index) => (
        <Row
          key={`row-${index}`}
          source={source}
          item={item}
          selectedItems={selectedItems}
          handleSelectItemChange={handleSelectItemChange}
          fields={fields}
          itemDefinition={itemDefinition}
        />
      ))}
    </div>
  )
}
