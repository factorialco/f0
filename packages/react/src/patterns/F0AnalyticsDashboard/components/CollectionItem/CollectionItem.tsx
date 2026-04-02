import { useMemo } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"
import type { RecordType } from "@/hooks/datasource"

import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { useData } from "@/hooks/datasource/useData"

import type { DashboardCollectionItem } from "../../types"

import { useCollectionDownloadActions } from "../../hooks/useCollectionDownloadActions"
import { DashboardItem } from "../DashboardItem/DashboardItem"

interface CollectionItemProps<Filters extends FiltersDefinition> {
  item: DashboardCollectionItem<Filters>
  filters: FiltersState<Filters>
  actions?: DropdownItem[]
}

/**
 * Renders a single data collection dashboard item.
 *
 * Calls `item.createSource(filters)` to produce a DataCollectionSourceDefinition,
 * then feeds it to `useDataCollectionSource` which manages the full lifecycle.
 * The collection renders without its own filter bar — dashboard-level filters
 * are already baked into the source definition.
 */
export function CollectionItem<Filters extends FiltersDefinition>({
  item,
  filters,
  actions,
}: CollectionItemProps<Filters>) {
  const enabled = item.useDashboardFilters !== false
  const effectiveFilters = enabled ? filters : ({} as FiltersState<Filters>)

  // Memoize the source definition to avoid re-creating on every render.
  // Re-creates when filters change (JSON key).
  const filtersKey = JSON.stringify(effectiveFilters)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sourceDefinition = useMemo(
    () => item.createSource(effectiveFilters),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filtersKey]
  )

  const source = useDataCollectionSource<RecordType>(sourceDefinition, [
    filtersKey,
  ])

  const { data } = useData(source)

  const downloadActions = useCollectionDownloadActions({
    records: data.records,
    title: item.title,
  })

  const allActions: DropdownItem[] = useMemo(
    () => [...(actions ?? []), ...downloadActions],
    [actions, downloadActions]
  )

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      isLoading={false}
      actions={allActions}
    >
      <OneDataCollection
        fullHeight
        source={source}
        visualizations={item.visualizations}
      />
    </DashboardItem>
  )
}
