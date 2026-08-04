import { useMemo, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"
import type { RecordType } from "@/hooks/datasource"

import { useI18n } from "@/lib/providers/i18n"
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
  const translations = useI18n()

  /**
   * Bumped by the error state's retry action. `OneDataCollection`'s built-in
   * retry re-applies the current filters to trigger a refetch, which is a
   * no-op for a dashboard collection: its source declares no filters of its
   * own (the dashboard bakes them in), so the "changed" filters compare equal,
   * nothing is refetched, and clearing the error uncovers a header-only grid
   * with no message. Rebuilding the source from here forces the fetch.
   */
  const [retryNonce, setRetryNonce] = useState(0)

  // Memoize the source definition to avoid re-creating on every render.
  // Re-creates when filters change (JSON key) or on an explicit retry.
  const filtersKey = JSON.stringify(effectiveFilters)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sourceDefinition = useMemo(
    () => item.createSource(effectiveFilters),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filtersKey, retryNonce]
  )

  const source = useDataCollectionSource<RecordType>(sourceDefinition, [
    filtersKey,
    retryNonce,
  ])

  /**
   * The collection already detects "loaded, but zero rows" and swaps the grid
   * for an empty state; this only feeds it the per-item copy and the working
   * retry. `emptyState.render` / `disabled` have no counterpart here — see the
   * per-type notes on `DashboardItemBase.emptyState`.
   */
  const emptyStates = useMemo(() => {
    const copy = {
      ...(item.emptyState?.title ? { title: item.emptyState.title } : {}),
      ...(item.emptyState?.description
        ? { description: item.emptyState.description }
        : {}),
    }

    return {
      "no-data": copy,
      "no-results": copy,
      error: {
        actions: [
          {
            label: translations.collections.emptyStates.error.retry,
            onClick: () => setRetryNonce((nonce) => nonce + 1),
            variant: "neutral" as const,
          },
        ],
      },
    }
  }, [item.emptyState?.description, item.emptyState?.title, translations])

  // We capture the current table visualization settings (hidden columns +
  // user-chosen order) via OneDataCollection's `onStateChange` callback so
  // the DashboardItem-level download can honour them. Everything else the
  // download needs (filters, sortings, search) is read directly from
  // `source` at click-time, so there is no subscription for it.
  const [tableSettings, setTableSettings] = useState<{
    hidden?: string[]
    order?: string[]
  }>()

  // Derive the column schema for the download from the item's table
  // visualization (id/label/render). Collection items don't declare a separate
  // `columns` list — the table viz is the source of truth, mirroring
  // OneDataCollection's own `extractColumns` flow.
  const downloadableColumns = useMemo(() => {
    const tableViz = item.visualizations?.find(
      (v) => (v as { type?: string })?.type === "table"
    ) as
      | {
          options?: {
            columns?: Array<{
              id?: string
              label?: string
              render?: (item: RecordType) => unknown
            }>
          }
        }
      | undefined

    return (tableViz?.options?.columns ?? [])
      .filter(
        (
          c
        ): c is {
          id: string
          label: string
          render?: (i: RecordType) => unknown
        } => typeof c?.id === "string" && typeof c?.label === "string"
      )
      .map((c) => ({ id: c.id, label: c.label, render: c.render }))
  }, [item])

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
        emptyStates={emptyStates}
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
