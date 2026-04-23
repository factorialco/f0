import { useCallback, useMemo, useState } from "react"

import type { DropdownItem } from "@/experimental/Navigation/Dropdown"

import { Table } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type {
  BaseResponse,
  PaginatedResponse,
  RecordType,
  SortingsStateMultiple,
} from "@/hooks/datasource"

import { downloadAsCsv, downloadAsExcel } from "../utils/downloadHelpers"

// Mirrors the caps used by OneDataCollection's own `useExportAction` so the
// dashboard-item download has identical rollover behaviour (safety limit on
// huge tables, modest page size while paginating).
const MAX_EXPORT_ROWS = 10_000
const EXPORT_PAGE_SIZE = 100

/**
 * Minimum source shape we need to honour the view state at click-time.
 * Purposely loose (`unknown`) — this hook sits in dashboard land and must
 * accept any `DataCollectionSource` without dragging every generic
 * through the component tree.
 */
type DownloadableSource = {
  dataAdapter: {
    paginationType?: "pages" | "infinite-scroll" | undefined
    fetchData: (params: Record<string, unknown>) => unknown
    exportFetchData?: (params: Record<string, unknown>) => unknown
  }
  currentFilters?: unknown
  currentSortings?: { field: string; order: "asc" | "desc" } | null
  currentGrouping?: { field: string; order?: "asc" | "desc" } | null
  currentSearch?: string
  currentNavigationFilters?: unknown
}

/**
 * Optional per-column metadata declared by the dashboard collection item.
 * Used to (a) produce human-readable headers and (b) anchor the export
 * column order when the user has not tweaked visualization settings.
 */
export type DownloadableColumn = {
  id: string
  label: string
}

interface UseCollectionDownloadActionsOptions {
  /** Active data source — read at click-time to respect latest state. */
  source: DownloadableSource | null | undefined
  /** Filename base (no extension). */
  title: string
  /** Declarative column list from the dashboard item (id + label). */
  columns: DownloadableColumn[]
  /**
   * Settings snapshot from OneDataCollection's `onStateChange`. When
   * present we filter out hidden columns and apply the user's preferred
   * order. The shape matches OneDataCollection's internal
   * `TableVisualizationSettings`.
   */
  tableSettings?: { hidden?: string[]; order?: string[] }
}

async function resolvePromiseLike<T>(value: T | Promise<T>): Promise<T> {
  return value instanceof Promise ? await value : value
}

/**
 * Walk every page of the source using its declared pagination type and
 * the user's current filters/sortings/search. Mirrors the loop in
 * OneDataCollection's `useExportAction` so the dashboard-item download
 * returns the same full record set that the collection's built-in export
 * would return.
 */
async function fetchAllStateAwareRecords(
  source: DownloadableSource
): Promise<RecordType[]> {
  const { dataAdapter } = source

  const sortings: SortingsStateMultiple = [
    ...(source.currentSortings
      ? [
          {
            field: source.currentSortings.field,
            order: source.currentSortings.order,
          },
        ]
      : []),
    ...(source.currentGrouping
      ? [
          {
            field: source.currentGrouping.field,
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

  const fetchFn = dataAdapter.exportFetchData ?? dataAdapter.fetchData

  if (!dataAdapter.paginationType) {
    const response = (await resolvePromiseLike(
      fetchFn(baseParams) as unknown
    )) as BaseResponse<RecordType>
    return (response.records ?? []).slice(0, MAX_EXPORT_ROWS)
  }

  if (dataAdapter.paginationType === "pages") {
    const all: RecordType[] = []
    let currentPage = 1
    while (all.length < MAX_EXPORT_ROWS) {
      const response = (await resolvePromiseLike(
        fetchFn({
          ...baseParams,
          pagination: { currentPage, perPage: EXPORT_PAGE_SIZE },
        }) as unknown
      )) as PaginatedResponse<RecordType>
      if (!response.records || response.records.length === 0) break
      all.push(...response.records)
      if ("pagesCount" in response && currentPage >= response.pagesCount) break
      currentPage++
    }
    return all.slice(0, MAX_EXPORT_ROWS)
  }

  // infinite-scroll
  const all: RecordType[] = []
  let cursor: string | null = null
  while (all.length < MAX_EXPORT_ROWS) {
    const response = (await resolvePromiseLike(
      fetchFn({
        ...baseParams,
        pagination: { cursor, perPage: EXPORT_PAGE_SIZE },
      }) as unknown
    )) as PaginatedResponse<RecordType>
    if (!response.records || response.records.length === 0) break
    all.push(...response.records)
    if ("hasMore" in response && !response.hasMore) break
    if ("cursor" in response) {
      cursor = (response.cursor as string | null) ?? null
    } else {
      break
    }
  }
  return all.slice(0, MAX_EXPORT_ROWS)
}

/**
 * Apply the user's current column visibility / ordering on top of the
 * declarative column list the dashboard item emitted. Hidden columns are
 * dropped; known ids from `order` come first (in that order), unknown
 * ids from the schema keep their original relative position at the tail.
 */
function resolveExportColumns(
  columns: DownloadableColumn[],
  tableSettings: { hidden?: string[]; order?: string[] } | undefined
): DownloadableColumn[] {
  const hidden = new Set(tableSettings?.hidden ?? [])
  const visible = columns.filter((c) => !hidden.has(c.id))

  const order = tableSettings?.order
  if (!order || order.length === 0) return visible

  const byId = new Map(visible.map((c) => [c.id, c]))
  const ordered: DownloadableColumn[] = []
  for (const id of order) {
    const col = byId.get(id)
    if (col) {
      ordered.push(col)
      byId.delete(id)
    }
  }
  // Append any column not mentioned in `order` in its original schema order.
  for (const col of visible) {
    if (byId.has(col.id)) ordered.push(col)
  }
  return ordered
}

/**
 * Build the Excel/CSV download actions for the DashboardItem 3-dot menu.
 * Both actions run against the current view state:
 *   - filters, sortings, search and navigation filters from `source`
 *   - hidden columns + column order from the collection's table settings
 *     (captured via OneDataCollection's `onStateChange` callback)
 *   - human-readable headers pulled from the agent-supplied `columns[].label`
 */
export function useCollectionDownloadActions({
  source,
  title,
  columns,
  tableSettings,
}: UseCollectionDownloadActionsOptions): DropdownItem[] {
  const { t } = useI18n()
  const [isExporting, setIsExporting] = useState(false)

  const runDownload = useCallback(
    async (fmt: "excel" | "csv") => {
      if (!source || isExporting) return
      setIsExporting(true)
      try {
        const records = await fetchAllStateAwareRecords(source)
        const exportColumns = resolveExportColumns(columns, tableSettings)
        if (exportColumns.length === 0 || records.length === 0) return

        // Re-shape records to match the resolved header order + labels so
        // downstream download helpers (which just iterate columns in order)
        // produce a file that mirrors the on-screen table.
        const labelByKey = new Map<string, string>()
        for (const col of exportColumns) labelByKey.set(col.id, col.label)
        const headerKeys = exportColumns.map((c) => c.label)
        const rows = records.map((row) => {
          const out: Record<string, unknown> = {}
          for (const col of exportColumns) out[col.label] = row[col.id]
          return out
        })

        if (fmt === "excel") downloadAsExcel(headerKeys, rows, title)
        else downloadAsCsv(headerKeys, rows, title)
        // `labelByKey` held for clarity; avoids TS "unused binding" noise.
        void labelByKey
      } finally {
        setIsExporting(false)
      }
    },
    [source, columns, tableSettings, title, isExporting]
  )

  const handleExcel = useCallback(() => runDownload("excel"), [runDownload])
  const handleCsv = useCallback(() => runDownload("csv"), [runDownload])

  return useMemo(() => {
    if (!source) return []
    return [
      {
        label: t("ai.dataDownload.download", { format: "Excel" }),
        icon: Table,
        onClick: handleExcel,
      },
      {
        label: t("ai.dataDownload.download", { format: "CSV" }),
        icon: Table,
        onClick: handleCsv,
      },
    ]
  }, [source, t, handleExcel, handleCsv])
}
