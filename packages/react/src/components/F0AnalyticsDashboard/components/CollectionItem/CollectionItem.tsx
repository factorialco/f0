import { useMemo } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import type { RecordType } from "@/hooks/datasource"

import { OneDataCollection } from "@/experimental/OneDataCollection"
import { useDataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"

import type { DashboardCollectionItem } from "../../types"

import { DashboardItem } from "../DashboardItem/DashboardItem"

interface CollectionItemProps<Filters extends FiltersDefinition> {
  item: DashboardCollectionItem<Filters>
  filters: FiltersState<Filters>
  actions?: import("@/experimental/Navigation/Dropdown").DropdownItem[]
}

/**
 * Renders a single data collection dashboard item.
 *
 * Calls `item.createSource(filters)` to produce a DataCollectionSourceDefinition,
 * then feeds it to `useDataCollectionSource` which manages the full lifecycle.
 *
 * When `item.itemFilters` is defined, the filter definitions are injected into the
 * source definition so that OneDataCollection renders them natively in its own
 * filter bar — no separate OneFilterPicker is needed.
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
    () => {
      const base = item.createSource(effectiveFilters)

      // Inject item-level filters into the source so OneDataCollection
      // renders them in its native filter bar.
      if (item.itemFilters) {
        return {
          ...base,
          filters: item.itemFilters,
          defaultFilters: item.defaultItemFilters,
        }
      }

      return base
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filtersKey, item.itemFilters, item.defaultItemFilters]
  )

  const source = useDataCollectionSource<RecordType>(sourceDefinition, [
    filtersKey,
  ])

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      isLoading={false}
      actions={actions}
    >
      <OneDataCollection
        fullHeight
        source={source}
        visualizations={item.visualizations}
      />
    </DashboardItem>
  )
}
