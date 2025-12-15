import {
  Data,
  FiltersDefinition,
  GroupingDefinition,
  OnSelectItemsCallback,
  PaginationInfo,
  RecordType,
  SortingsDefinition,
  useSelectable,
} from "@/hooks/datasource"
import { useEffect } from "react"

import {
  DataCollectionSource,
  Lane,
} from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/types"

export type LaneSelectProviderProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActionsDefinition<R>,
    NavigationFilters,
    Grouping
  >
  data: Data<R>
  lane: Lane<Filters>
  paginationInfo: PaginationInfo | null
  onSelectItems: OnSelectItemsCallback<R, Filters>
  onHandleSelectItemCallbackChange: (
    handleSelectItemChange: (item: R, checked: boolean) => void
  ) => void
  onSelectedItemsChange: (selectedItems: Map<number | string, R>) => void
}

export const LaneSelectProvider = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: LaneSelectProviderProps<R, Filters, Sortings, Summaries, NavigationFilters, Grouping>
) => {
  const { selectedItems, handleSelectItemChange } = useSelectable<R, Filters, Sortings, Grouping>({
    data: props.data || { type: "flat", records: [], groups: [] },
    paginationInfo: props.paginationInfo,
    source: props.source,
    onSelectItems: props.onSelectItems,
    selectedState: props.source.defaultSelectedItems,
  })

  useEffect(() => {
    // handleSelectItemChange now accepts R | SelectionId | readonly SelectionId[]
    // which is compatible with the expected (item: R, checked: boolean) => void
    props.onHandleSelectItemCallbackChange(
      handleSelectItemChange as (item: R, checked: boolean) => void
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSelectItemChange])

  useEffect(() => {
    props.onSelectedItemsChange(selectedItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to re-run this effect when the selected items change
  }, [selectedItems])

  return null
}
