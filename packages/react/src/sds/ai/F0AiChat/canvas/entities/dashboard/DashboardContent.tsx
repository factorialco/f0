import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import type {
  DashboardChartConfig,
  DashboardChartItem,
  DashboardCollectionItem,
  DashboardInsightItem,
  DashboardItem,
  DashboardItemLayout,
  DashboardMetricItem,
} from "@/patterns/F0AnalyticsDashboard/types"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import type { RecordType } from "@/hooks/datasource"

import { F0AnalyticsDashboard } from "@/patterns/F0AnalyticsDashboard/F0AnalyticsDashboard"

import { F0AiInsightCard } from "@/sds/ai/F0AiInsightCard"

import type {
  ChatDashboardChartConfig,
  ChatDashboardChartItem,
  ChatDashboardCollectionItem,
  ChatDashboardConfig,
  ChatDashboardInsightItem,
  ChatDashboardItem,
  ChatDashboardMetricItem,
  FormatPreset,
} from "./types"

import { useDashboardCompute, type ItemResult } from "./useDashboardCompute"

// ---------------------------------------------------------------------------
// Minimum row span per item type
// ---------------------------------------------------------------------------

/**
 * Minimum `rowSpan` enforced for every dashboard item received from the agent,
 * regardless of what config it sends. This guarantees that every item renders
 * at least at the same height as the F0AnalyticsDashboard defaults.
 *
 * The grid renders each item at `rowSpan * 48` px, so these values mirror the
 * `ROW_HEIGHTS` defaults defined in
 * `f0/packages/react/src/patterns/F0AnalyticsDashboard/components/DashboardGrid/DashboardGrid.tsx`
 * (chart 336px, metric 144px, collection 480px). Keep both in sync.
 */
const MIN_ROW_SPAN_BY_TYPE: Record<ChatDashboardItem["type"], number> = {
  chart: 7, // 7 * 48 = 336px
  metric: 3, // 3 * 48 = 144px
  collection: 10, // 10 * 48 = 480px
  insight: 4, // 4 * 48 = 192px
}

/**
 * Returns the item with its `rowSpan` clamped to the minimum allowed for its
 * type. If the agent omits `rowSpan` or sends a value below the minimum, it is
 * raised; larger values are kept untouched.
 */
export function clampDashboardItemRowSpan(
  item: ChatDashboardItem
): ChatDashboardItem {
  const min = MIN_ROW_SPAN_BY_TYPE[item.type]
  const current = item.rowSpan ?? 0
  if (current >= min) return item
  return { ...item, rowSpan: min }
}

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

export interface ChatDashboardProps {
  config: ChatDashboardConfig
  apiConfig: { baseUrl: string; headers: Record<string, string> }
  refreshKey?: number
  /** Incrementing counter that forces the grid to reset to initial layout */
  resetKey?: number
  editMode?: boolean
  /** Called when a chart item's type is changed (e.g. bar → line) */
  onTransformChart?: (
    itemId: string,
    newType: string,
    orientation?: "vertical" | "horizontal"
  ) => void
  onLayoutChange?: (layout: DashboardItemLayout[]) => void
  onExportReady?: (exportFn: (() => Promise<void>) | undefined) => void
  exportFilename?: string
}

/**
 * Renders an F0AnalyticsDashboard from a server-computed config.
 *
 * All data computation happens server-side via POST /api/dashboard/compute.
 * Multiple widget fetchData calls within the same filter state share a
 * single batch request.
 */
export function ChatDashboard({
  config,
  apiConfig,
  refreshKey = 0,
  resetKey,
  editMode,
  onLayoutChange,
  onTransformChart,
  onExportReady,
  exportFilename,
}: ChatDashboardProps) {
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

  // True when the agent declared filters in the config but their options
  // (and therefore the FiltersDefinition we pass to F0AnalyticsDashboard) are
  // still being computed. The dashboard will render a filter bar skeleton in
  // that window so the layout matches the eventual rendered state.
  const filtersLoading =
    !!config.filters && Object.keys(config.filters).length > 0 && !filterOptions

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
      if (options.length === 0) continue
      result[key] = {
        type: "in",
        label: spec.label,
        options: {
          options: options.map((v) => ({ value: v, label: v })),
        },
      }
    }

    if (Object.keys(result).length === 0) return undefined

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
      config.items
        // During SSE streaming CopilotKit may render the dashboard before
        // every item is fully formed. Skip items that lack an `id` or `type`
        // so the grid never receives an undefined key.
        .filter(
          (item): item is ChatDashboardItem =>
            typeof item.id === "string" &&
            item.id.length > 0 &&
            typeof item.type === "string"
        )
        .map((item) => {
          switch (item.type) {
            case "chart":
              return mapChartItem(item, makeFetchData(item.id))
            case "metric":
              return mapMetricItem(item, makeFetchData(item.id))
            case "collection":
              return mapCollectionItem(item, makeFetchData(item.id))
            case "insight":
              return mapInsightItem(item)
          }
        }),
    [config.items, makeFetchData]
  )

  return (
    <F0AnalyticsDashboard
      key={refreshKey}
      filters={filterDefinitions}
      filtersLoading={filtersLoading}
      items={items}
      editMode={editMode}
      onLayoutChange={onLayoutChange}
      onTransformChart={onTransformChart}
      onExportReady={onExportReady}
      exportFilename={exportFilename}
      resetKey={resetKey}
    />
  )
}

ChatDashboard.displayName = "ChatDashboard"

// ---------------------------------------------------------------------------
// Canvas content wrapper — bridges canvas context to ChatDashboard props
// ---------------------------------------------------------------------------

import { F0ActionBar } from "@/components/F0ActionBar"
import { useI18n } from "@/lib/providers/i18n"

import type { DashboardCanvasContent } from "../../../types"

import { useDashboardCanvas } from "./DashboardContext"

export function DashboardContent({
  content,
  refreshKey: _parentRefreshKey,
}: {
  content: DashboardCanvasContent
  refreshKey: number
}): ReactNode {
  const {
    isDirty,
    discardKey,
    itemTransforms,
    onLayoutChange,
    handleSave,
    handleDiscard,
    transformItem,
    registerExport,
  } = useDashboardCanvas()
  const translations = useI18n()

  // Apply pending item transforms (chart type changes) to the config
  // without changing the base config reference — avoids data refetch.
  // Also clamp every item's rowSpan to its per-type minimum so the dashboard
  // always renders at a readable height regardless of the agent's config.
  const effectiveConfig = useMemo(() => {
    return {
      ...content.config,
      items: content.config.items
        // Skip partially-streamed items (see filter in ChatDashboard).
        .filter(
          (item): item is ChatDashboardItem =>
            typeof item.id === "string" && item.id.length > 0
        )
        .map((item) => {
          const patch = itemTransforms.get(item.id)
          const merged = patch ? ({ ...item, ...patch } as typeof item) : item
          return clampDashboardItemRowSpan(merged)
        }),
    }
  }, [content.config, itemTransforms])

  // Derive a refresh key tied only to the data identity (fetchSpecs reference).
  // The canvas-level refreshKey from CanvasPanel bumps on every content
  // reference change, which includes save (layout/transform persistence). On
  // save, fetchSpecs is preserved by reference (handleSave only spreads the
  // config / items), so this key stays stable and we avoid a redundant
  // dashboard remount + recompute. LLM regeneration produces a new fetchSpecs
  // reference, which correctly bumps this key and triggers a real refetch.
  const dataRefreshKey = useMemo(() => Date.now(), [content.config.fetchSpecs])

  return (
    <>
      <ChatDashboard
        config={effectiveConfig}
        apiConfig={content.apiConfig}
        refreshKey={dataRefreshKey}
        resetKey={discardKey}
        editMode
        onLayoutChange={onLayoutChange}
        onTransformChart={(itemId, newType, orientation) => {
          const item = effectiveConfig.items.find((i) => i.id === itemId)
          if (!item || item.type !== "chart") return
          const updatedChart = {
            ...item.chart,
            type: newType,
            ...(newType === "bar"
              ? { orientation: orientation ?? "vertical" }
              : {}),
          } as typeof item.chart
          transformItem(itemId, { chart: updatedChart } as Partial<
            import("./types").ChatDashboardItem
          >)
        }}
        onExportReady={registerExport}
        exportFilename={content.title}
      />
      <F0ActionBar
        label="Changes detected"
        isOpen={isDirty}
        primaryActions={[
          {
            label: translations.ai.saveChanges,
            onClick: handleSave,
          },
        ]}
        secondaryActions={[
          {
            label: translations.ai.discardChanges,
            onClick: handleDiscard,
          },
        ]}
      />
    </>
  )
}

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

// ---------------------------------------------------------------------------
// Insight item mapper — static content, no server-side computation
// ---------------------------------------------------------------------------

function mapInsightItem(item: ChatDashboardInsightItem): DashboardInsightItem {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    colSpan: item.colSpan ?? 3,
    rowSpan: item.rowSpan,
    x: item.x,
    y: item.y,
    type: "insight",
    renderContent: () => {
      // Guard against partially-streamed items where insightContent
      // may not be available yet.
      if (
        !item.insightContent ||
        typeof item.insightContent.content !== "string"
      ) {
        return null
      }
      return (
        <F0AiInsightCard
          heading={item.title}
          description={item.description}
          label={item.label}
          {...item.insightContent}
        />
      )
    },
  }
}
