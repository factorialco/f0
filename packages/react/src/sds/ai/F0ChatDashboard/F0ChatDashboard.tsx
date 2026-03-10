import { useCallback, useMemo } from "react"

import { F0AnalyticsDashboard } from "@/components/F0AnalyticsDashboard/F0AnalyticsDashboard"
import type {
  DashboardChartConfig,
  DashboardChartItem,
  DashboardCollectionItem,
  DashboardItem,
  DashboardMetricItem,
} from "@/components/F0AnalyticsDashboard/types"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import type { RecordType } from "@/hooks/datasource"

import {
  computeChartData,
  computeCollectionRows,
  computeMetricData,
  getUniqueValues,
} from "./computations"
import type {
  ChatDashboardChartConfig,
  ChatDashboardChartItem,
  ChatDashboardCollectionItem,
  ChatDashboardConfig,
  ChatDashboardDataset,
  ChatDashboardFilterDefinition,
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
// Build F0AnalyticsDashboard filter definitions from LLM filter specs
// ---------------------------------------------------------------------------

function buildFilterDefinitions(
  filterSpecs: Record<string, ChatDashboardFilterDefinition> | undefined,
  datasets: Record<string, ChatDashboardDataset>
): FiltersDefinition | undefined {
  if (!filterSpecs || Object.keys(filterSpecs).length === 0) return undefined

  const result: Record<
    string,
    {
      type: "in"
      label: string
      options: { options: Array<{ value: string; label: string }> }
    }
  > = {}

  for (const [key, spec] of Object.entries(filterSpecs)) {
    const uniqueValues = getUniqueValues(datasets, spec.datasetId, spec.column)
    result[key] = {
      type: "in",
      label: spec.label,
      options: {
        options: uniqueValues.map((v) => ({ value: v, label: v })),
      },
    }
  }

  return result as FiltersDefinition
}

// ---------------------------------------------------------------------------
// Filter values converter — maps FiltersState to the shape computations expect
// ---------------------------------------------------------------------------

function toComputationFilters(
  filtersState: FiltersState<FiltersDefinition>
): Record<string, unknown[] | undefined> {
  const result: Record<string, unknown[] | undefined> = {}
  for (const [key, value] of Object.entries(filtersState)) {
    if (Array.isArray(value)) {
      result[key] = value as unknown[]
    }
  }
  return result
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
  }
}

// ---------------------------------------------------------------------------
// Item mapper factory — creates mappers bound to datasets + filter specs
// ---------------------------------------------------------------------------

function createChartItemMapper(
  datasets: Record<string, ChatDashboardDataset>,
  filterSpecs: Record<string, ChatDashboardFilterDefinition> | undefined
) {
  return (
    item: ChatDashboardChartItem
  ): DashboardChartItem<FiltersDefinition> => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      colSpan: item.colSpan,
      type: "chart",
      chart: toDashboardChartConfig(item.chart),
      fetchData: (filters: FiltersState<FiltersDefinition>) => {
        const filterValues = toComputationFilters(filters)
        return Promise.resolve(
          computeChartData(
            item.computation,
            datasets,
            filterSpecs,
            filterValues
          )
        )
      },
    }
  }
}

function createMetricItemMapper(
  datasets: Record<string, ChatDashboardDataset>,
  filterSpecs: Record<string, ChatDashboardFilterDefinition> | undefined
) {
  return (
    item: ChatDashboardMetricItem
  ): DashboardMetricItem<FiltersDefinition> => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      colSpan: item.colSpan,
      type: "metric",
      format: item.format,
      decimals: item.decimals,
      fetchData: (filters: FiltersState<FiltersDefinition>) => {
        const filterValues = toComputationFilters(filters)
        return Promise.resolve(
          computeMetricData(
            item.computation,
            datasets,
            filterSpecs,
            filterValues
          )
        )
      },
    }
  }
}

const COLLECTION_PER_PAGE = 20

function createCollectionItemMapper(
  datasets: Record<string, ChatDashboardDataset>,
  filterSpecs: Record<string, ChatDashboardFilterDefinition> | undefined
) {
  return (
    item: ChatDashboardCollectionItem
  ): DashboardCollectionItem<FiltersDefinition> => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      colSpan: item.colSpan ?? 3,
      type: "collection",
      createSource: (filters: FiltersState<FiltersDefinition>) => {
        const filterValues = toComputationFilters(filters)
        const allRows = computeCollectionRows(
          item.computation,
          datasets,
          filterSpecs,
          filterValues
        ) as RecordType[]

        return {
          dataAdapter: {
            paginationType: "pages" as const,
            perPage: COLLECTION_PER_PAGE,
            fetchData: ({
              pagination,
            }: {
              filters: Record<string, unknown>
              sortings: unknown
              pagination: { currentPage: number; perPage?: number }
            }) => {
              const page = pagination?.currentPage ?? 1
              const perPage = pagination?.perPage ?? COLLECTION_PER_PAGE
              const start = (page - 1) * perPage
              const pageRecords = allRows.slice(start, start + perPage)

              return {
                type: "pages" as const,
                records: pageRecords,
                total: allRows.length,
                currentPage: page,
                perPage,
                pagesCount: Math.ceil(allRows.length / perPage),
              }
            },
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
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export interface F0ChatDashboardProps {
  config: ChatDashboardConfig
}

/**
 * Renders an F0AnalyticsDashboard from a data-driven config.
 *
 * This wrapper bridges the gap between the LLM's declarative computation
 * specs and F0AnalyticsDashboard's async fetchData interface. Each item's
 * fetchData computes from the raw dataset, applying active filters
 * client-side before aggregation.
 */
export function F0ChatDashboard({ config }: F0ChatDashboardProps) {
  const datasets = config.datasets ?? {}
  const filterSpecs = config.filters

  const filterDefinitions = useMemo(
    () => buildFilterDefinitions(filterSpecs, datasets),
    [filterSpecs, datasets]
  )

  const mapChartItem = useCallback(
    createChartItemMapper(datasets, filterSpecs),
    [datasets, filterSpecs]
  )

  const mapMetricItem = useCallback(
    createMetricItemMapper(datasets, filterSpecs),
    [datasets, filterSpecs]
  )

  const mapCollectionItem = useCallback(
    createCollectionItemMapper(datasets, filterSpecs),
    [datasets, filterSpecs]
  )

  const items: DashboardItem<FiltersDefinition>[] = useMemo(
    () =>
      config.items.map((item) => {
        switch (item.type) {
          case "chart":
            return mapChartItem(item)
          case "metric":
            return mapMetricItem(item)
          case "collection":
            return mapCollectionItem(item)
        }
      }),
    [config.items, mapChartItem, mapMetricItem, mapCollectionItem]
  )

  return <F0AnalyticsDashboard filters={filterDefinitions} items={items} />
}

F0ChatDashboard.displayName = "F0ChatDashboard"
