import { useState, useCallback } from "react"

import {
  RecordType,
  FiltersDefinition,
  SortingsDefinition,
  GroupingDefinition,
  BaseResponse,
  PaginatedResponse,
} from "@/hooks/datasource"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type { Visualization } from "../visualizations/collection"

import { SecondaryActionItem } from "../actions"
import { DataCollectionSource } from "../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
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
  /** When false the hook short-circuits and returns a stable no-op action.
   *  This avoids wasted work (state, callbacks, i18n) for collections that
   *  don't use export.  Defaults to `true`. */
  enabled?: boolean
}

/**
 * Minimal source shape needed by fetchAllRecords.
 * Uses loose types to avoid fighting the DataCollectionDataAdapter union.
 */
interface ExportableSource {
  dataAdapter: {
    paginationType?: string
    fetchData: (opts: Record<string, unknown>) => unknown
  }
  currentFilters: Record<string, unknown>
  currentSortings: unknown
  currentSearch: string | undefined
  currentNavigationFilters: Record<string, unknown>
}

/**
 * Resolve a fetchData result that may be a plain value, a Promise, or an
 * Observable (zen-observable-ts). We only support the first two for export;
 * Observables are not expected in practice for paginated adapters.
 */
async function resolveResult<T>(
  result: T | Promise<T> | { subscribe?: unknown }
): Promise<T> {
  if (result && typeof (result as Promise<T>).then === "function") {
    return result as Promise<T>
  }
  return result as T
}

/**
 * Fetch *all* records from a data adapter, transparently handling both
 * non-paginated and paginated (pages / infinite-scroll) adapters.
 */
async function fetchAllRecords<R extends RecordType>(
  source: ExportableSource
): Promise<R[]> {
  const { dataAdapter } = source

  const baseParams = {
    filters: source.currentFilters,
    sortings: source.currentSortings,
    search: source.currentSearch,
    navigationFilters: source.currentNavigationFilters,
  }

  // ── Non-paginated adapter ────────────────────────────────────────
  if (!dataAdapter.paginationType) {
    const result = await resolveResult(dataAdapter.fetchData(baseParams))
    const response = result as BaseResponse<R>
    return response.records ?? []
  }

  // ── Page-based pagination ────────────────────────────────────────
  if (dataAdapter.paginationType === "pages") {
    const allRecords: R[] = []
    let currentPage = 1

    while (allRecords.length < MAX_EXPORT_ROWS) {
      const result = await resolveResult(
        dataAdapter.fetchData({
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
        dataAdapter.fetchData({
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
    dataAdapter.fetchData({
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

  const handleExport = useCallback(async () => {
    if (!enabled) return

    setIsExporting(true)

    try {
      const allRecords = await fetchAllRecords<R>(
        source as unknown as ExportableSource
      )

      await downloadAsCSV(
        allRecords,
        currentVisualization as
          | Visualization<R, any, any, any, any, any, any>
          | undefined,
        {
          filename: filename || "data_collection_export",
        }
      )
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }, [enabled, source, currentVisualization, filename])

  return {
    label: i18n.collections.export.label,
    icon: Download,
    onClick: handleExport,
    loading: isExporting,
    disabled: !enabled || isExporting || source.isLoading,
    description: i18n.collections.export.description,
  }
}
