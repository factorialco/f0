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

import type { Visualization } from "../visualizations/collection"

import { SecondaryActionItem } from "../actions"
import { DataCollectionSource } from "../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../navigationFilters/types"
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
async function fetchAllRecords<
  R extends RecordType,
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
>(source: {
  dataAdapter: DataCollectionSource<
    R,
    Filters,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<R>,
    NavigationFilters,
    GroupingDefinition<R>
  >["dataAdapter"]
  currentFilters: DataCollectionSource<
    R,
    Filters,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<R>,
    NavigationFilters,
    GroupingDefinition<R>
  >["currentFilters"]
  currentSortings: unknown
  currentSearch: string | undefined
  currentNavigationFilters: NavigationFiltersState<NavigationFilters>
}): Promise<R[]> {
  const { dataAdapter } = source

  const baseParams = {
    filters: source.currentFilters,
    sortings: source.currentSortings,
    search: source.currentSearch,
    navigationFilters: source.currentNavigationFilters,
  }

  // ── Non-paginated adapter ────────────────────────────────────────
  if (!dataAdapter.paginationType) {
    const result = await resolveResult(
      dataAdapter.fetchData(
        baseParams as Parameters<typeof dataAdapter.fetchData>[0]
      )
    )
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
        } as Parameters<typeof dataAdapter.fetchData>[0])
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
        } as Parameters<typeof dataAdapter.fetchData>[0])
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
    } as Parameters<typeof dataAdapter.fetchData>[0])
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

  const handleExport = useCallback(async () => {
    setIsExporting(true)

    try {
      const allRecords = await fetchAllRecords<R, Filters, NavigationFilters>(
        source as unknown as Parameters<
          typeof fetchAllRecords<R, Filters, NavigationFilters>
        >[0]
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
  }, [source, currentVisualization, filename])

  return {
    label: "Export to CSV",
    icon: Download,
    onClick: handleExport,
    loading: isExporting,
    disabled: isExporting || source.isLoading,
    description: "Download all data as CSV file",
  }
}
