import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import type { RecordType } from "@/hooks/datasource"
import type {
  DashboardChartConfig,
  DashboardChartItem,
  DashboardCollectionItem,
  DashboardItem,
  DashboardItemLayout,
  DashboardMetricItem,
} from "@/patterns/F0AnalyticsDashboard/types"
import type { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { F0AnalyticsDashboard } from "@/patterns/F0AnalyticsDashboard/F0AnalyticsDashboard"

import type {
  ChatDashboardChartConfig,
  ChatDashboardChartItem,
  ChatDashboardCollectionItem,
  ChatDashboardConfig,
  ChatDashboardItem,
  ChatDashboardMetricItem,
  FormatPreset,
} from "./types"

import { useDashboardCompute, type ItemResult } from "./useDashboardCompute"

// ---------------------------------------------------------------------------
// Minimum item height per type
// ---------------------------------------------------------------------------

/**
 * Minimum item height (in pixels) enforced for every dashboard item received
 * from the agent, regardless of what config it sends. Mirrors the
 * `ROW_HEIGHTS` defaults defined in F0AnalyticsDashboard's `DashboardGrid`
 * (chart 336px, metric 144px, collection 480px). Keep both in sync.
 */
const MIN_ITEM_HEIGHT_BY_TYPE: Record<ChatDashboardItem["type"], number> = {
  chart: 336,
  metric: 144,
  collection: 480,
}

/**
 * Resolve an item's height in pixels using the same precedence as the F0
 * grid: `itemHeight` (canonical) > `rowSpan * 48` (legacy) > 0 (no value).
 */
function readItemHeightPx(item: ChatDashboardItem): number {
  if (item.itemHeight && item.itemHeight > 0) return item.itemHeight
  if (item.rowSpan && item.rowSpan > 0) return item.rowSpan * 48
  return 0
}

/**
 * Returns the item with its `itemHeight` clamped to the per-type minimum.
 *
 * Backwards compat: when the agent sends only the legacy `rowSpan`, the
 * function reads it as a fallback and writes the result into `itemHeight`
 * so the grid uses the canonical pixel field downstream. Larger values
 * (whether from `itemHeight` or `rowSpan`) are kept untouched.
 *
 * The function name is preserved for any external imports.
 */
export function clampDashboardItemRowSpan(
  item: ChatDashboardItem
): ChatDashboardItem {
  const min = MIN_ITEM_HEIGHT_BY_TYPE[item.type]
  const current = readItemHeightPx(item)
  const next = Math.max(min, current)
  if (current >= min && item.itemHeight && item.itemHeight === next) return item
  return { ...item, itemHeight: next }
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

  /**
   * Build the F0AnalyticsDashboard `navigationFilters` prop from the agent's
   * config. The agent declares `{ type: "dateNavigation", column, datasetId,
   * granularities, defaultGranularity? }` but F0's slot expects
   * `{ type: "date-navigator", defaultValue, granularity, defaultGranularity? }`
   * — we strip `column` and `datasetId` (those are agent-side metadata used
   * by the compute SQL builder) and supply `defaultValue: new Date()` so the
   * navigator initializes to the current period at the chosen granularity.
   */
  const dashboardNavigationFilters = useMemo<
    NavigationFiltersDefinition | undefined
  >(() => {
    const navSpecs = config.navigationFilters
    if (!navSpecs || Object.keys(navSpecs).length === 0) return undefined
    const today = new Date()
    const result: NavigationFiltersDefinition = {}
    for (const [key, spec] of Object.entries(navSpecs)) {
      if (spec.type !== "dateNavigation") continue
      result[key] = {
        type: "date-navigator",
        defaultValue: today,
        granularity: spec.granularities,
        ...(spec.defaultGranularity
          ? { defaultGranularity: spec.defaultGranularity }
          : {}),
      }
    }
    return Object.keys(result).length > 0 ? result : undefined
  }, [config.navigationFilters])

  // Set of keys belonging to navigation filters — used to split the merged
  // filters object that F0AnalyticsDashboard passes to fetchData into the two
  // separate compute payloads (`filterValues` for `in` filters,
  // `navigationFilterValues` for the date navigator).
  const navigationFilterKeys = useMemo(
    () => new Set(Object.keys(config.navigationFilters ?? {})),
    [config.navigationFilters]
  )

  // Create fetchData functions that call the batch compute endpoint
  const makeFetchData = useCallback(
    (itemId: string) => {
      return (
        filters: FiltersState<FiltersDefinition>
      ): Promise<ItemResult> => {
        const filterValues: Record<string, unknown[]> = {}
        const navigationFilterValues: Record<string, string[]> = {}

        for (const [key, value] of Object.entries(filters)) {
          if (navigationFilterKeys.has(key)) {
            // Date navigator value shape:
            //   { value: { from: Date, to: Date }, valueString, granularity }
            const dateValue = value as
              | {
                  value?: { from?: Date | string; to?: Date | string }
                }
              | undefined
            const range = dateValue?.value
            if (!range) continue
            const toIso = (d: Date | string | undefined): string => {
              if (!d) return ""
              const date = d instanceof Date ? d : new Date(d)
              if (Number.isNaN(date.getTime())) return ""
              // YYYY-MM-DD — DATE comparison in DuckDB ignores time-of-day.
              return date.toISOString().slice(0, 10)
            }
            const fromIso = toIso(range.from)
            const toIsoStr = toIso(range.to)
            if (fromIso || toIsoStr) {
              navigationFilterValues[key] = [fromIso, toIsoStr]
            }
            continue
          }
          if (Array.isArray(value) && value.length > 0) {
            filterValues[key] = value as unknown[]
          }
        }

        return fetchItem(itemId, filterValues, navigationFilterValues).then(
          (result) => {
            // Update filter options from the response
            const opts = getFilterOptions()
            if (opts && !filterOptionsPolledRef.current) {
              setFilterOptions(opts)
              filterOptionsPolledRef.current = true
            }
            return result
          }
        )
      }
    },
    [fetchItem, getFilterOptions, navigationFilterKeys]
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
      filtersLoading={filtersLoading}
      navigationFilters={dashboardNavigationFilters}
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
import { Save } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type { DashboardCanvasContent } from "../../../types"

import { useAiChat } from "../../../providers/AiChatStateProvider"
import { useDashboardCanvas } from "./DashboardContext"
import { SaveDashboardDialog } from "./SaveDashboardDialog"

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
  const { canvasActions, openCanvas } = useAiChat()
  const translations = useI18n()
  const [isSaveAsDialogOpen, setIsSaveAsDialogOpen] = useState(false)

  const isSavedDashboard = !!content.savedDashboardId
  const isUnsaved = !!content.savedDashboardUnsaved
  const hasDashboardActions = !!canvasActions?.dashboard

  const handleSaveAs = useCallback(
    async (title: string, description: string) => {
      const newId = await canvasActions?.dashboard?.create(
        title,
        description,
        content.config,
        content.savedDashboardCategory
      )
      // After creating, transition to "saved" state (state 1 → state 2)
      if (newId) {
        openCanvas({
          ...content,
          savedDashboardId: newId,
          savedDashboardCategory: content.savedDashboardCategory,
          savedDashboardDescription: description,
          savedDashboardUnsaved: false,
        })
      }
    },
    [canvasActions, content, openCanvas]
  )

  // Apply pending item transforms (chart type changes) to the config
  // without changing the base config reference — avoids data refetch.
  // Also clamp every item's rowSpan to its per-type minimum so the dashboard
  // always renders at a readable height regardless of the agent's config.
  const effectiveConfig = useMemo(() => {
    return {
      ...content.config,
      items: content.config.items.map((item) => {
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
      {/* State A: New dashboard with canvasActions — always-visible Save bar */}
      {!isSavedDashboard && hasDashboardActions && (
        <F0ActionBar
          label={translations.ai.dashboard.saveToAnalytics}
          isOpen
          primaryActions={[
            {
              label: translations.ai.dashboard.save,
              onClick: () => setIsSaveAsDialogOpen(true),
            },
          ]}
          secondaryActions={
            isDirty
              ? [
                  {
                    label: translations.ai.discardChanges,
                    onClick: handleDiscard,
                  },
                ]
              : undefined
          }
        />
      )}
      {/* State B1: Saved dashboard, user edited layout — Save + Save As + Discard */}
      {isSavedDashboard && hasDashboardActions && isDirty && (
        <F0ActionBar
          label={translations.forms.actionBar.unsavedChanges}
          isOpen
          primaryActions={[
            {
              label: translations.ai.dashboard.save,
              onClick: handleSave,
              icon: Save,
            },
          ]}
          secondaryActions={[
            {
              label: translations.ai.discardChanges,
              onClick: handleDiscard,
            },
          ]}
        />
      )}
      {/* State B2: Saved dashboard, agent iterated (unsaved) but no manual edits — Save + Save As */}
      {isSavedDashboard && hasDashboardActions && !isDirty && isUnsaved && (
        <F0ActionBar
          label={translations.forms.actionBar.unsavedChanges}
          isOpen
          primaryActions={[
            {
              label: translations.ai.dashboard.save,
              onClick: handleSave,
              icon: Save,
            },
          ]}
        />
      )}
      {/* State C: No canvasActions — original behavior */}
      {!hasDashboardActions && (
        <F0ActionBar
          label={translations.forms.actionBar.unsavedChanges}
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
      )}
      {hasDashboardActions && (
        <SaveDashboardDialog
          isOpen={isSaveAsDialogOpen}
          onClose={() => setIsSaveAsDialogOpen(false)}
          onSave={handleSaveAs}
          defaultTitle={content.title}
          defaultDescription={content.savedDashboardDescription}
        />
      )}
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
    explanation: item.explanation,
    colSpan: item.colSpan,
    rowSpan: item.rowSpan,
    itemHeight: item.itemHeight,
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
    explanation: item.explanation,
    colSpan: item.colSpan,
    rowSpan: item.rowSpan,
    itemHeight: item.itemHeight,
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
    explanation: item.explanation,
    colSpan: item.colSpan ?? 12,
    rowSpan: item.rowSpan,
    itemHeight: item.itemHeight,
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
