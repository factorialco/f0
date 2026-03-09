import { useMemo } from "react"

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
import { buildFormatter } from "./utils/formatters"

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
// Chart config resolver — strips the JSON-only valueFormat preset and
// injects the resolved valueFormatter function in its place.
// ---------------------------------------------------------------------------

function resolveChartConfig(
  config: ChatDashboardChartConfig
): DashboardChartConfig {
  // All chat chart config variants replace function formatters with a
  // JSON-serializable `valueFormat` preset. Here we strip that preset key
  // and inject the resolved formatter function expected by DashboardChartConfig.
  //
  // The spread of a discriminated union requires a cast because TypeScript
  // cannot statically narrow the rest type. The result cast to DashboardChartConfig
  // is safe by construction: WithValueFormat<T> is Omit<T, formatters> + valueFormat,
  // so spreading it back with a resolved formatter produces the original T shape.
  const { valueFormat, ...chartConfig } = config as typeof config & {
    valueFormat?: FormatPreset
  }
  const valueFormatter = buildFormatter(valueFormat)
  return {
    ...chartConfig,
    ...(valueFormatter ? { valueFormatter } : {}),
  } as DashboardChartConfig
}

// ---------------------------------------------------------------------------
// Item mappers — pure functions, no factory pattern
// ---------------------------------------------------------------------------

const COLLECTION_PER_PAGE = 20

function mapChartItem(
  item: ChatDashboardChartItem,
  datasets: Record<string, ChatDashboardDataset>,
  filterSpecs: Record<string, ChatDashboardFilterDefinition> | undefined
): DashboardChartItem<FiltersDefinition> {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    colSpan: item.colSpan,
    type: "chart",
    chart: resolveChartConfig(item.chart),
    fetchData: (filters: FiltersState<FiltersDefinition>) =>
      Promise.resolve(
        computeChartData(
          item.computation,
          datasets,
          filterSpecs,
          toComputationFilters(filters)
        )
      ),
  }
}

function mapMetricItem(
  item: ChatDashboardMetricItem,
  datasets: Record<string, ChatDashboardDataset>,
  filterSpecs: Record<string, ChatDashboardFilterDefinition> | undefined
): DashboardMetricItem<FiltersDefinition> {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    colSpan: item.colSpan,
    type: "metric",
    format: item.format,
    decimals: item.decimals,
    fetchData: (filters: FiltersState<FiltersDefinition>) =>
      Promise.resolve(
        computeMetricData(
          item.computation,
          datasets,
          filterSpecs,
          toComputationFilters(filters)
        )
      ),
  }
}

function mapCollectionItem(
  item: ChatDashboardCollectionItem,
  datasets: Record<string, ChatDashboardDataset>,
  filterSpecs: Record<string, ChatDashboardFilterDefinition> | undefined
): DashboardCollectionItem<FiltersDefinition> {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    colSpan: item.colSpan ?? 3,
    type: "collection",
    createSource: (filters: FiltersState<FiltersDefinition>) => {
      const allRows = computeCollectionRows(
        item.computation,
        datasets,
        filterSpecs,
        toComputationFilters(filters)
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

  const items: DashboardItem<FiltersDefinition>[] = useMemo(
    () =>
      config.items.map((item) => {
        switch (item.type) {
          case "chart":
            return mapChartItem(item, datasets, filterSpecs)
          case "metric":
            return mapMetricItem(item, datasets, filterSpecs)
          case "collection":
            return mapCollectionItem(item, datasets, filterSpecs)
        }
      }),
    [config.items, datasets, filterSpecs]
  )

  return <F0AnalyticsDashboard filters={filterDefinitions} items={items} />
}

F0ChatDashboard.displayName = "F0ChatDashboard"
