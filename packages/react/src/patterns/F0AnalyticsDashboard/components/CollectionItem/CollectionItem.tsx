import { useMemo, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"
import type { RecordType } from "@/hooks/datasource"

import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import type { DashboardCollectionItem } from "../../types"

import { useCollectionDownloadActions } from "../../hooks/useCollectionDownloadActions"
import { DashboardItem } from "../DashboardItem/DashboardItem"

interface CollectionItemProps<Filters extends FiltersDefinition> {
  item: DashboardCollectionItem<Filters>
  filters: FiltersState<Filters>
  actions?: DropdownItem[]
  editMode?: boolean
  handleDelete?: (itemId: string) => void
  isFullscreen?: boolean
  onFullscreenChange?: (fullscreen: boolean) => void
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
  editMode,
  handleDelete,
  isFullscreen,
  onFullscreenChange,
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

  // We capture the current table visualization settings (hidden columns +
  // user-chosen order) via OneDataCollection's `onStateChange` callback so
  // the DashboardItem-level download can honour them. Everything else the
  // download needs (filters, sortings, search) is read directly from
  // `source` at click-time, so there is no subscription for it.
  const [tableSettings, setTableSettings] = useState<{
    hidden?: string[]
    order?: string[]
  }>()

  // Columns as declared by the dashboard item. Stable w.r.t. user
  // interactions — only re-computes when the item's schema changes.
  const downloadableColumns = useMemo(
    () =>
      (item as unknown as { columns?: { id: string; label: string }[] })
        .columns ?? [],
    [item]
  )

  const downloadActions = useCollectionDownloadActions({
    source: source as unknown as Parameters<
      typeof useCollectionDownloadActions
    >[0]["source"],
    title: item.title,
    columns: downloadableColumns,
    tableSettings,
  })

  const allActions: DropdownItem[] = useMemo(
    () => [...(actions ?? []), ...downloadActions],
    [actions, downloadActions]
  )

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      explanation={item.explanation}
      isLoading={false}
      actions={allActions}
      editMode={editMode}
      handleDelete={handleDelete}
      itemId={item.id}
      isFullscreen={isFullscreen}
      onFullscreenChange={onFullscreenChange}
    >
      <OneDataCollection
        fullHeight
        source={source}
        visualizations={item.visualizations}
        // We deliberately do NOT enable `csvExport` here — the dashboard
        // surface already exposes Excel + CSV downloads from the
        // DashboardItem 3-dot menu (`downloadActions` above) and both
        // paths respect the same view state. Enabling OneDataCollection's
        // own export would create two visually identical buttons with
        // nearly identical behaviour, which is confusing.
        onStateChange={(state) => {
          // Only the table viz settings matter for the download — other
          // visualization types (card/list/kanban) don't declare hidden /
          // order, and the download always operates on the tabular layout.
          const vizSettings = state.settings?.visualization as
            | Record<string, { hidden?: string[]; order?: string[] }>
            | undefined
          const next = vizSettings?.table
          setTableSettings((prev) => {
            // Shallow-compare to avoid unnecessary re-renders.
            const sameHidden =
              JSON.stringify(prev?.hidden) === JSON.stringify(next?.hidden)
            const sameOrder =
              JSON.stringify(prev?.order) === JSON.stringify(next?.order)
            if (sameHidden && sameOrder) return prev
            return next
          })
        }}
      />
    </DashboardItem>
  )
}
