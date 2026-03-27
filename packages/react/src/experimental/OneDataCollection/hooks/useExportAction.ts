import { useState, useCallback } from "react"

import {
  RecordType,
  FiltersDefinition,
  SortingsDefinition,
  SortingsStateMultiple,
  GroupingDefinition,
  BaseResponse,
  PaginatedResponse,
} from "@/hooks/datasource"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { PromiseState } from "@/lib/promise-to-observable"

import type { Visualization } from "../visualizations/collection"

import { SecondaryActionItem } from "../actions"
import { DataCollectionSource } from "../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { useDataCollectionSettings } from "../Settings/SettingsProvider"
import { SummariesDefinition } from "../summary"
import { downloadAsCSV } from "../utils/csvExport"

/** Maximum number of records to export as a safety cap */
const MAX_EXPORT_ROWS = 10_000

/** Page size used when fetching all pages for export */
const EXPORT_PAGE_SIZE = 100

interface UseExportActionProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> {
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  currentVisualization:
    | Visualization<
        R,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    | undefined
  filename?: string
  /** When false the hook returns a disabled no-op export action for
   *  collections that don't use export. Due to the Rules of Hooks, internal
   *  state, callbacks, and i18n are still initialized. Defaults to `true`. */
  enabled?: boolean
}

/**
 * Resolve a fetchData result that may be a plain value, a Promise, or an
 * Observable (zen-observable-ts wrapping PromiseState).
 *
 * For Observables we subscribe and wait for the first emission where
 * `loading` is `false`, then return its `data` payload.
 */
async function resolveResult<T>(
  result: T | Promise<T> | { subscribe?: unknown }
): Promise<T> {
  // Promise
  if (result && typeof (result as Promise<T>).then === "function") {
    return result as Promise<T>
  }

  // Observable<PromiseState<T>> — duck-type via `subscribe`
  if (
    result &&
    typeof (result as { subscribe?: unknown }).subscribe === "function"
  ) {
    const observable = result as {
      subscribe: (observer: {
        next: (value: PromiseState<T>) => void
        error: (err: unknown) => void
        complete: () => void
      }) => { unsubscribe: () => void }
    }

    return new Promise<T>((resolve, reject) => {
      const subscription = observable.subscribe({
        next(state: PromiseState<T>) {
          if (!state.loading) {
            subscription.unsubscribe()
            if (state.error) {
              reject(state.error)
            } else if (state.data != null) {
              resolve(state.data)
            } else {
              reject(new Error("Observable resolved with no data"))
            }
          }
        },
        error(err: unknown) {
          reject(err instanceof Error ? err : new Error(String(err)))
        },
        complete() {
          reject(new Error("Observable completed without emitting data"))
        },
      })
    })
  }

  // Plain value
  return result as T
}

/**
 * Fetch *all* records from a data adapter, transparently handling both
 * non-paginated and paginated (pages / infinite-scroll) adapters.
 */
async function fetchAllRecords<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
): Promise<R[]> {
  const { dataAdapter } = source

  // Build sortings array matching the format useData.ts passes to fetchData:
  // combines currentSortings + currentGrouping into SortingsStateMultiple
  const sortings: SortingsStateMultiple = [
    ...(source.currentSortings
      ? [
          {
            field: source.currentSortings.field as string,
            order: source.currentSortings.order,
          },
        ]
      : []),
    ...(source.currentGrouping
      ? [
          {
            field: source.currentGrouping.field as string,
            order: source.currentGrouping.order ?? "asc",
          },
        ]
      : []),
  ]

  const baseParams = {
    filters: source.currentFilters,
    sortings,
    search: source.currentSearch,
    navigationFilters: source.currentNavigationFilters,
  }

  // ── Non-paginated adapter ────────────────────────────────────────
  if (!dataAdapter.paginationType) {
    const fetchFn = dataAdapter.exportFetchData ?? dataAdapter.fetchData
    const result = await resolveResult(fetchFn(baseParams))
    const response = result as BaseResponse<R>
    return response.records ?? []
  }

  // ── Paginated adapters ───────────────────────────────────────────
  const fetchFn = dataAdapter.exportFetchData ?? dataAdapter.fetchData

  // ── Page-based pagination ────────────────────────────────────────
  if (dataAdapter.paginationType === "pages") {
    const allRecords: R[] = []
    let currentPage = 1

    while (allRecords.length < MAX_EXPORT_ROWS) {
      const result = await resolveResult(
        fetchFn({
          ...baseParams,
          pagination: { currentPage, perPage: EXPORT_PAGE_SIZE },
        })
      )

      const response = result as PaginatedResponse<R>
      if (!response.records || response.records.length === 0) break

      allRecords.push(...response.records)

      if ("pagesCount" in response && currentPage >= response.pagesCount) break
      currentPage++
    }

    return allRecords.slice(0, MAX_EXPORT_ROWS)
  }

  // ── Infinite-scroll pagination ───────────────────────────────────
  if (dataAdapter.paginationType === "infinite-scroll") {
    const allRecords: R[] = []
    let cursor: string | null = null

    while (allRecords.length < MAX_EXPORT_ROWS) {
      const result = await resolveResult(
        fetchFn({
          ...baseParams,
          pagination: { cursor, perPage: EXPORT_PAGE_SIZE },
        })
      )

      const response = result as PaginatedResponse<R>
      if (!response.records || response.records.length === 0) break

      allRecords.push(...response.records)

      if ("hasMore" in response && !response.hasMore) break
      if ("cursor" in response) {
        cursor = response.cursor ?? null
      } else {
        break
      }
    }

    return allRecords.slice(0, MAX_EXPORT_ROWS)
  }

  // ── no-pagination type ───────────────────────────────────────────
  // paginationType is "no-pagination" — treat like base adapter
  const result = await resolveResult(
    fetchFn({
      ...baseParams,
      pagination: { perPage: MAX_EXPORT_ROWS, currentPage: 1 },
    })
  )
  const response = result as BaseResponse<R>
  return response.records ?? []
}

export function useExportAction<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  source,
  currentVisualization,
  filename,
  enabled = true,
}: UseExportActionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>): SecondaryActionItem {
  const [isExporting, setIsExporting] = useState(false)
  const i18n = useI18n()
  const { settings } = useDataCollectionSettings()

  const handleExport = useCallback(async () => {
    if (!enabled) return

    setIsExporting(true)

    try {
      const allRecords = await fetchAllRecords(source)

      // Read settings for the active visualization type (table or editableTable)
      const vizType = currentVisualization?.type ?? "table"
      const vizSettings =
        vizType === "table" || vizType === "editableTable"
          ? (
              settings.visualization as Record<
                string,
                { hidden?: string[]; order?: string[] }
              >
            )[vizType]
          : undefined

      // Respect column visibility — hidden columns are excluded from export
      const hiddenColumnIds = vizSettings?.hidden
        ? new Set(vizSettings.hidden)
        : undefined

      // Respect column order — reordered columns appear in the user's order
      const columnOrder = vizSettings?.order

      await downloadAsCSV(allRecords, currentVisualization, {
        filename: filename || "data_collection_export",
        hiddenColumnIds,
        columnOrder,
      })
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }, [enabled, source, currentVisualization, filename, settings])

  return {
    label: i18n.collections?.export?.label ?? "Export to CSV",
    icon: Download,
    onClick: handleExport,
    loading: isExporting,
    disabled: !enabled || isExporting || source.isLoading,
    description:
      i18n.collections?.export?.description ??
      "Download all data as a CSV file",
  }
}
