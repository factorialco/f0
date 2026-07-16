import isEqual from "lodash/isEqual"
import { useEffect, useMemo, useRef, useState } from "react"
import { useDeepCompareMemoize } from "use-deep-compare-effect"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"
import type { RecordType } from "@/hooks/datasource"

import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import type {
  DashboardCollectionItem,
  DashboardItemFiltersConfig,
} from "../../types"

import { useCollectionDownloadActions } from "../../hooks/useCollectionDownloadActions"
import { DashboardItem } from "../DashboardItem/DashboardItem"

interface CollectionItemProps<Filters extends FiltersDefinition> {
  item: DashboardCollectionItem<Filters>
  filters: FiltersState<Filters>
  actions?: DropdownItem[]
  itemFilters?: DashboardItemFiltersConfig
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
 * Dashboard-level filters are already baked into the source definition; when
 * the host provides per-widget `itemFilters`, they surface as the collection's
 * own toolbar filter picker (next to search/settings) rather than a header
 * icon, matching table filtering everywhere else in the product.
 */
export function CollectionItem<Filters extends FiltersDefinition>({
  item,
  filters,
  actions,
  itemFilters,
  editMode,
  handleDelete,
  isFullscreen,
  onFullscreenChange,
}: CollectionItemProps<Filters>) {
  const enabled = item.useDashboardFilters !== false
  const effectiveFilters = enabled ? filters : ({} as FiltersState<Filters>)

  // Collections route their per-widget filters through OneDataCollection's
  // own toolbar picker (the row with search/settings) instead of the header
  // icon that chart/metric items use — that's where table filters live
  // everywhere else in the product. The host's `onChange` is notified from
  // `onStateChange` below.
  const itemFiltersRef = useRef(itemFilters)
  itemFiltersRef.current = itemFilters

  // Memoize the source definition to avoid re-creating on every render while
  // still reacting when a catalog refresh changes labels, operators, value
  // types, or suggestions for an existing field key.
  const filtersKey = JSON.stringify(effectiveFilters)
  // Preserve function-bearing catalogs (`options`, `getLabel`, `mapOptions`)
  // in the semantic dependency. JSON serialization would erase those
  // functions and keep a stale source when a loader changes for the same key.
  const itemFiltersSnapshot = useDeepCompareMemoize(
    itemFilters
      ? { filters: itemFilters.filters, value: itemFilters.value }
      : undefined
  )
  const sourceDefinition = useMemo(
    () => {
      const definition = item.createSource(effectiveFilters)
      const config = itemFiltersRef.current
      if (!config) return definition
      return {
        ...definition,
        // Operator conditions are an opt-in dashboard extension. The generic
        // collection source keeps its stable built-in filter union while the
        // internal renderer registry understands this additional definition.
        filters: config.filters as unknown as FiltersDefinition,
        currentFilters:
          config.value as unknown as FiltersState<FiltersDefinition>,
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filtersKey, itemFiltersSnapshot]
  )

  const source = useDataCollectionSource<RecordType>(sourceDefinition, [
    filtersKey,
    itemFiltersSnapshot,
  ])

  // `onStateChange` also fires for search, sorting, and settings. Remember the
  // last filter state notified to the host so those unrelated updates cannot
  // repeatedly emit the same pending change before the controlled value is
  // reconciled back into the dashboard.
  const lastNotifiedFiltersRef = useRef<unknown>(itemFilters?.value)
  useEffect(() => {
    lastNotifiedFiltersRef.current = itemFilters?.value
    // The semantic key includes the controlled value and definitions. Depending
    // on the resolver-created object reference would reset this guard during an
    // unrelated dashboard render before the host has reconciled the change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemFiltersSnapshot])

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
        // A dashboard can render several filtered tables. OneDataCollection's
        // URL params are intentionally unscoped and assume a single collection
        // per page, so opt-in widget filters must never read or overwrite them.
        // Preserve the existing collection behavior for dashboards that do not
        // opt into item filters.
        disableUrlParams={itemFilters ? true : undefined}
        presetsAction={itemFilters ? "none" : undefined}
        // We deliberately do NOT enable `csvExport` here — the dashboard
        // surface already exposes Excel + CSV downloads from the
        // DashboardItem 3-dot menu (`downloadActions` above) and both
        // paths respect the same view state. Enabling OneDataCollection's
        // own export would create two visually identical buttons with
        // nearly identical behaviour, which is confusing.
        onStateChange={(state) => {
          // Surface toolbar filter edits to the host. Gated on an actual
          // change vs the applied value, since onStateChange also fires for
          // search/sorting/settings updates (and once on mount with the
          // seeded state).
          const itemFiltersConfig = itemFiltersRef.current
          if (
            itemFiltersConfig &&
            state.filters &&
            !isEqual(state.filters, lastNotifiedFiltersRef.current)
          ) {
            lastNotifiedFiltersRef.current = state.filters
            itemFiltersConfig.onChange(state.filters)
          }

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
