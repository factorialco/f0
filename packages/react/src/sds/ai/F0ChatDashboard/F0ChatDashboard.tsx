import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { F0AnalyticsDashboard } from "@/components/F0AnalyticsDashboard/F0AnalyticsDashboard"
import type {
  DashboardChartConfig,
  DashboardChartItem,
  DashboardCollectionItem,
  DashboardItem,
  DashboardItemLayout,
  DashboardMetricItem,
} from "@/components/F0AnalyticsDashboard/types"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import type { RecordType } from "@/hooks/datasource"

import { useDashboardCompute, type ItemResult } from "./useDashboardCompute"
import type {
  ChatDashboardChartConfig,
  ChatDashboardChartItem,
  ChatDashboardCollectionItem,
  ChatDashboardConfig,
  ChatDashboardMetricItem,
  FormatPreset,
} from "./types"

// ---------------------------------------------------------------------------
// Format preset → formatter function
// ---------------------------------------------------------------------------

function buildFormatter(
  preset?: FormatPreset
): ((value: number) => string) | undefined {
  if (!preset) return undefined

  switch (preset.type) {
    case "number":
      return (v) => v.toLocaleString()

    case "currency": {
      const currency = preset.currency ?? "EUR"
      return (v) => {
        try {
          return v.toLocaleString(undefined, {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
          })
        } catch {
          return `${v}`
        }
      }
    }

    case "percent":
      return (v) => `${v}%`

    case "compact":
      return (v) => {
        if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`
        if (Math.abs(v) >= 1_000) return `${(v / 1_000).toFixed(1)}k`
        return `${v}`
      }

    default:
      return undefined
  }
}

// ---------------------------------------------------------------------------
// Chat chart config → Dashboard chart config mapper
// ---------------------------------------------------------------------------

function toDashboardChartConfig(
  chatChart: ChatDashboardChartConfig
): DashboardChartConfig {
  const valueFormatter = buildFormatter(
    "valueFormat" in chatChart ? chatChart.valueFormat : undefined
  )

  switch (chatChart.type) {
    case "bar": {
      const { valueFormat: _, ...rest } = chatChart
      return { ...rest, ...(valueFormatter ? { valueFormatter } : {}) }
    }
    case "line": {
      const { valueFormat: _, ...rest } = chatChart
      return { ...rest, ...(valueFormatter ? { valueFormatter } : {}) }
    }
    case "funnel": {
      const { valueFormat: _, ...rest } = chatChart
      return { ...rest, ...(valueFormatter ? { valueFormatter } : {}) }
    }
    case "radar": {
      const { valueFormat: _, ...rest } = chatChart
      return { ...rest, ...(valueFormatter ? { valueFormatter } : {}) }
    }
    case "pie": {
      const { valueFormat: _, ...rest } = chatChart
      return { ...rest, ...(valueFormatter ? { valueFormatter } : {}) }
    }
    case "gauge": {
      const { valueFormat: _, ...rest } = chatChart
      return { ...rest, ...(valueFormatter ? { valueFormatter } : {}) }
    }
    case "heatmap": {
      const { valueFormat: _, ...rest } = chatChart
      return { ...rest, ...(valueFormatter ? { valueFormatter } : {}) }
    }
  }
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const COLLECTION_PER_PAGE = 20

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export interface F0ChatDashboardProps {
  config: ChatDashboardConfig
  apiConfig: { baseUrl: string; headers: Record<string, string> }
  refreshKey?: number
  editMode?: boolean
  onLayoutChange?: (layout: DashboardItemLayout[]) => void
}

/**
 * Renders an F0AnalyticsDashboard from a server-computed config.
 *
 * All data computation happens server-side via POST /api/dashboard/compute.
 * Multiple widget fetchData calls within the same filter state share a
 * single batch request.
 */
export function F0ChatDashboard({
  config,
  apiConfig,
  refreshKey = 0,
  editMode,
  onLayoutChange,
}: F0ChatDashboardProps) {
  const { fetchItem, getFilterOptions } = useDashboardCompute(
    config,
    apiConfig,
    refreshKey
  )

  // Filter options from the first compute response
  const [filterOptions, setFilterOptions] = useState<
    Record<string, string[]> | undefined
  >()

  // Update filter options when they become available
  const filterOptionsPolledRef = useRef(false)

  // Reset polling flag when refreshKey changes so filter options are re-polled
  useEffect(() => {
    filterOptionsPolledRef.current = false
  }, [refreshKey])

  useEffect(() => {
    if (filterOptionsPolledRef.current) return
    // Poll briefly for filter options from the initial request
    const interval = setInterval(() => {
      const opts = getFilterOptions()
      if (opts) {
        setFilterOptions(opts)
        filterOptionsPolledRef.current = true
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [getFilterOptions, refreshKey])

  const filterDefinitions = useMemo(() => {
    const filterSpecs = config.filters
    if (!filterSpecs || Object.keys(filterSpecs).length === 0) return undefined
    if (!filterOptions) return undefined

    const result: Record<
      string,
      {
        type: "in"
        label: string
        options: { options: Array<{ value: string; label: string }> }
      }
    > = {}

    for (const [key, spec] of Object.entries(filterSpecs)) {
      const options = filterOptions[key] ?? []
      result[key] = {
        type: "in",
        label: spec.label,
        options: {
          options: options.map((v) => ({ value: v, label: v })),
        },
      }
    }

    return result as FiltersDefinition
  }, [config.filters, filterOptions])

  // Create fetchData functions that call the batch compute endpoint
  const makeFetchData = useCallback(
    (itemId: string) => {
      return (
        filters: FiltersState<FiltersDefinition>
      ): Promise<ItemResult> => {
        const filterValues: Record<string, unknown[]> = {}
        for (const [key, value] of Object.entries(filters)) {
          if (Array.isArray(value) && value.length > 0) {
            filterValues[key] = value as unknown[]
          }
        }
        return fetchItem(itemId, filterValues).then((result) => {
          // Update filter options from the response
          const opts = getFilterOptions()
          if (opts && !filterOptionsPolledRef.current) {
            setFilterOptions(opts)
            filterOptionsPolledRef.current = true
          }
          return result
        })
      }
    },
    [fetchItem, getFilterOptions]
  )

  const items: DashboardItem<FiltersDefinition>[] = useMemo(
    () =>
      config.items.map((item) => {
        switch (item.type) {
          case "chart":
            return mapChartItem(item, makeFetchData(item.id))
          case "metric":
            return mapMetricItem(item, makeFetchData(item.id))
          case "collection":
            return mapCollectionItem(item, makeFetchData(item.id))
        }
      }),
    [config.items, makeFetchData]
  )

  return (
    <F0AnalyticsDashboard
      key={refreshKey}
      filters={filterDefinitions}
      items={items}
      editMode={editMode}
      onLayoutChange={onLayoutChange}
    />
  )
}

F0ChatDashboard.displayName = "F0ChatDashboard"

// ---------------------------------------------------------------------------
// Item mappers — use server-side results via fetchData
// ---------------------------------------------------------------------------

function mapChartItem(
  item: ChatDashboardChartItem,
  fetchData: (filters: FiltersState<FiltersDefinition>) => Promise<ItemResult>
): DashboardChartItem<FiltersDefinition> {
  return {
    id: item.id,
    title: item.title,
    description: buildDescription(item.description, item.sourceDescription),
    colSpan: item.colSpan,
    rowSpan: item.rowSpan,
    x: item.x,
    y: item.y,
    type: "chart",
    chart: toDashboardChartConfig(item.chart),
    fetchData: (filters: FiltersState<FiltersDefinition>) =>
      fetchData(filters).then((r) => r.chart ?? { categories: [], series: [] }),
  }
}

function buildDescription(
  description?: string,
  sourceDescription?: string
): string | undefined {
  if (sourceDescription) {
    return description
      ? `${description}\n${sourceDescription}`
      : sourceDescription
  }
  return description
}

function mapMetricItem(
  item: ChatDashboardMetricItem,
  fetchData: (filters: FiltersState<FiltersDefinition>) => Promise<ItemResult>
): DashboardMetricItem<FiltersDefinition> {
  return {
    id: item.id,
    title: item.title,
    description: buildDescription(item.description, item.sourceDescription),
    colSpan: item.colSpan,
    rowSpan: item.rowSpan,
    x: item.x,
    y: item.y,
    type: "metric",
    format: item.format,
    decimals: item.decimals,
    fetchData: (filters: FiltersState<FiltersDefinition>) =>
      fetchData(filters).then((r) => r.metric ?? { value: 0 }),
  }
}

function mapCollectionItem(
  item: ChatDashboardCollectionItem,
  fetchData: (filters: FiltersState<FiltersDefinition>) => Promise<ItemResult>
): DashboardCollectionItem<FiltersDefinition> {
  return {
    id: item.id,
    title: item.title,
    description: buildDescription(item.description, item.sourceDescription),
    colSpan: item.colSpan ?? 12,
    rowSpan: item.rowSpan,
    x: item.x,
    y: item.y,
    type: "collection",
    createSource: (filters: FiltersState<FiltersDefinition>) => {
      // Eagerly fetch data, then paginate client-side from the result
      let cachedRows: RecordType[] | null = null
      const dataPromise = fetchData(filters).then((r) => {
        cachedRows = (r.collection?.rows ?? []) as RecordType[]
        return cachedRows
      })

      return {
        dataAdapter: {
          paginationType: "pages" as const,
          perPage: COLLECTION_PER_PAGE,
          fetchData: async ({
            pagination,
            search,
          }: {
            filters: Record<string, unknown>
            sortings: unknown
            pagination: { currentPage: number; perPage?: number }
            search?: string
          }) => {
            // Wait for the batch result if not yet available
            const allRows = cachedRows ?? (await dataPromise)

            let rows = allRows
            if (search) {
              const q = search.toLowerCase()
              rows = rows.filter((row) =>
                Object.values(row).some(
                  (v) => v != null && String(v).toLowerCase().includes(q)
                )
              )
            }
            const page = pagination?.currentPage ?? 1
            const perPage = pagination?.perPage ?? COLLECTION_PER_PAGE
            const start = (page - 1) * perPage
            const pageRecords = rows.slice(start, start + perPage)

            return {
              type: "pages" as const,
              records: pageRecords,
              total: rows.length,
              currentPage: page,
              perPage,
              pagesCount: Math.ceil(rows.length / perPage),
            }
          },
        },
        search: {
          enabled: true,
          sync: true,
        },
      }
    },
    visualizations: [
      {
        type: "table" as const,
        options: {
          columns: item.columns.map((col) => ({
            label: col.label,
            id: col.id,
            ...(col.width ? { width: col.width } : {}),
            render: (row: RecordType) => {
              const value = row[col.id]
              if (value == null) return "-"
              return String(value)
            },
          })),
        },
      },
    ],
  }
}
