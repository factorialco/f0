import {
  Data,
  FiltersDefinition,
  GroupingDefinition,
  OnSelectItemsCallback,
  PaginationInfo,
  RecordType,
  SortingsDefinition,
  UseSelectableReturn,
  useSelectable,
} from "@/hooks/datasource"
import { useCallback, useEffect, useMemo, useState } from "react"

import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/types"
import { mergeLanesSelectItemsStatus } from "./utils"

type LaneSelectProviderProps<
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
  paginationInfo: PaginationInfo | null
  onHookUpdate: (hook: UseSelectableReturn<R, Filters>) => void
  onSelectItems: OnSelectItemsCallback<R, Filters>
}

/**
 * Creates and scopes the useSelectable hook for a given lane
 * @param props
 * @returns
 */
const LaneSelectProvider = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: LaneSelectProviderProps<R, Filters, Sortings, Summaries, NavigationFilters, Grouping>
) => {
  const hook = useSelectable<R, Filters, Sortings, Grouping>({
    data: props.data || { type: "flat", records: [], groups: [] },
    paginationInfo: props.paginationInfo,
    source: props.source,
    onSelectItems: props.onSelectItems,
    selectedState: props.source.defaultSelectedItems,
  })

  useEffect(() => {
    props.onHookUpdate(hook)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hook])

  return null
}

/**
 * Creates and scopes the useSelectable hook for a given lanes
 * @param lanes
 * @param source
 * @param onSelectItems
 * @returns
 */
export const useSelectableLanes = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  lanes: {
    id: string
    data: Data<R>
    paginationInfo: PaginationInfo | null
  }[],
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActionsDefinition<R>,
    NavigationFilters,
    Grouping
  >,
  onSelectItems?: OnSelectItemsCallback<R, Filters>
) => {
  const [lanesUseSelectable, setLanesUseSelectable] = useState<
    Map<string, UseSelectableReturn<R, Filters>>
  >(new Map())

  const [selectItemsCallbackResult, setSelectItemsCallbackResult] = useState<{
    selectItemsStatus: Map<string, Parameters<OnSelectItemsCallback<R, Filters>>[0]>
    clearCallback: Map<string, Parameters<OnSelectItemsCallback<R, Filters>>[1]>
  }>({ selectItemsStatus: new Map(), clearCallback: new Map() })

  // Clears the selection for all lanes
  const onClearCallback = useCallback(() => {
    selectItemsCallbackResult.clearCallback.forEach((callback) => callback())
  }, [selectItemsCallbackResult.clearCallback])

  useEffect(() => {
    const selectItemsStatus = Object.fromEntries(selectItemsCallbackResult.selectItemsStatus)

    onSelectItems?.(
      {
        ...mergeLanesSelectItemsStatus<R, Filters>(selectItemsCallbackResult.selectItemsStatus),
        byLane: selectItemsStatus,
      },
      onClearCallback
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps -- onSelectItems and onClearCallback are stable functions
  }, [selectItemsCallbackResult])

  const lanesSelectProvider = useMemo(() => {
    return (lanes || []).map((lane) => (
      <LaneSelectProvider
        key={lane.id}
        source={source}
        data={lane.data || { type: "flat", records: [], groups: [] }}
        paginationInfo={lane.paginationInfo}
        onHookUpdate={(x) => setLanesUseSelectable((prev) => new Map(prev).set(lane.id, x))}
        onSelectItems={(state, callback) => {
          setSelectItemsCallbackResult((prev) => {
            return {
              selectItemsStatus: new Map(prev.selectItemsStatus).set(lane.id, state),
              clearCallback: new Map(prev.clearCallback).set(lane.id, callback),
            }
          })
        }}
      />
    ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(lanes)])

  return {
    lanesUseSelectable,
    lanesSelectProvider,
  }
}
