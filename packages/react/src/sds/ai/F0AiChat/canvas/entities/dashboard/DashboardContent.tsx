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

import type { NumberFilterValue } from "@/patterns/OneFilterPicker/filterTypes/NumberFilter/NumberFilter"

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

/**
 * True when the dashboard is effectively a table — a single item of type
 * `collection`. Shared by the action bar copy, the inline report card and
 * the canvas-level export gate so the UX stays consistent across surfaces.
 */
export function isSingleCollectionDashboard(
  config: Pick<ChatDashboardConfig, "items">
): boolean {
  return config.items.length === 1 && config.items[0]?.type === "collection"
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
  apiConfig: {
    baseUrl: string
    headers: Record<string, string>
    runtimeFetch?: typeof fetch
  }
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
  const { fetchItem, getFilterOptions, getDerivedFilters } =
    useDashboardCompute(config, apiConfig, refreshKey)

  // Filter definitions + options from the first compute response.
  // Filters are derived server-side (no longer authored by the agent), so the
  // initial render has no filter chips until the first /dashboard/compute
  // response lands — we poll briefly to surface them, then stop.
  // - `in` filters → array of distinct string values
  // - `numericRange` filters → `{ min, max }` bounds for the range picker
  const [filterOptions, setFilterOptions] = useState<
    Record<string, string[] | { min: number; max: number }> | undefined
  >()
  const [derivedFilters, setDerivedFilters] = useState<{
    filters?: Record<string, import("./types").ChatDashboardFilterDefinition>
    navigationFilters?: Record<
      string,
      import("./types").ChatDashboardNavigationFilterDefinition
    >
  }>({})

  // Bumped once when the first compute response lands. F0AnalyticsDashboard
  // captures `navigationFilters` into its internal state only on mount
  // (initialNavState `useMemo` with empty deps), so when filters arrive
  // asynchronously we have to force a remount — otherwise the date navigator
  // renders with an undefined value and crashes inside DateNavigation.
  const [filterRevision, setFilterRevision] = useState(0)

  const filterOptionsPolledRef = useRef(false)

  // Reset polling flag when refreshKey changes so filter options are re-polled
  useEffect(() => {
    filterOptionsPolledRef.current = false
  }, [refreshKey])

  useEffect(() => {
    if (filterOptionsPolledRef.current) return
    const interval = setInterval(() => {
      const opts = getFilterOptions()
      const derived = getDerivedFilters()
      if (opts || derived.filters || derived.navigationFilters) {
        if (opts) setFilterOptions(opts)
        setDerivedFilters(derived)
        setFilterRevision((n) => n + 1)
        filterOptionsPolledRef.current = true
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [getFilterOptions, getDerivedFilters, refreshKey])

  // Filter bar skeleton while the first compute response is in flight: we
  // don't know yet whether the dataset will produce any filters, so we keep
  // the skeleton up until the response lands.
  const filtersLoading = !filterOptions && !derivedFilters.filters

  const filterDefinitions = useMemo(() => {
    const filterSpecs = derivedFilters.filters
    if (!filterSpecs || Object.keys(filterSpecs).length === 0) return undefined
    if (!filterOptions) return undefined

    const result: Record<
      string,
      | {
          type: "in"
          label: string
          options: { options: Array<{ value: string; label: string }> }
        }
      | {
          type: "number"
          label: string
          options: {
            min: number
            max: number
            modes: ReadonlyArray<"range" | "single">
          }
        }
      | {
          type: "date"
          label: string
          options: { mode: "range" }
        }
    > = {}

    for (const [key, spec] of Object.entries(filterSpecs)) {
      // `date` filters use F0's open-domain DateFilter — no precomputed
      // distinct/min-max options are emitted, so don't require a matching
      // filterOptions entry. Every other type needs its options to render.
      const options = filterOptions[key]
      if (spec.type !== "date" && options === undefined) continue

      if (spec.type === "numericRange") {
        if (Array.isArray(options)) continue
        if (options.min === options.max) continue
        result[key] = {
          type: "number",
          label: spec.label,
          options: {
            min: options.min,
            max: options.max,
            modes: ["range"],
          },
        }
        continue
      }

      if (spec.type === "date") {
        result[key] = {
          type: "date",
          label: spec.label,
          options: { mode: "range" },
        }
        continue
      }

      if (spec.type === "in") {
        if (!Array.isArray(options) || options.length === 0) continue
        result[key] = {
          type: "in",
          label: spec.label,
          options: {
            options: options.map((v) => ({ value: v, label: v })),
          },
        }
      }
    }

    if (Object.keys(result).length === 0) return undefined

    return result as FiltersDefinition
  }, [derivedFilters.filters, filterOptions])

  /**
   * Build the F0AnalyticsDashboard `navigationFilters` prop from the
   * compute response's derived navigation filters. The backend ships
   * `{ type: "dateNavigation", column, datasetId, granularities,
   * defaultGranularity? }` but F0's slot expects `{ type: "date-navigator",
   * defaultValue, granularity, defaultGranularity? }` — we strip `column`
   * and `datasetId` (server-side metadata used only by the compute SQL
   * builder) and supply `defaultValue: new Date()` so the navigator
   * initializes to the current period at the chosen granularity.
   */
  const dashboardNavigationFilters = useMemo<
    NavigationFiltersDefinition | undefined
  >(() => {
    const navSpecs = derivedFilters.navigationFilters
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
  }, [derivedFilters.navigationFilters])

  // Set of keys belonging to navigation filters — used to split the merged
  // filters object that F0AnalyticsDashboard passes to fetchData into the two
  // separate compute payloads (`filterValues` for `in` filters,
  // `navigationFilterValues` for the date navigator).
  const navigationFilterKeys = useMemo(
    () => new Set(Object.keys(derivedFilters.navigationFilters ?? {})),
    [derivedFilters.navigationFilters]
  )

  // Set of keys whose backing filter is `numericRange` — their state ships as
  // `NumberFilterValue` and must be flattened into `[min, max]` strings before
  // hitting the compute payload.
  const numericRangeFilterKeys = useMemo(() => {
    const keys = new Set<string>()
    const specs = derivedFilters.filters
    if (specs) {
      for (const [key, spec] of Object.entries(specs)) {
        if (spec.type === "numericRange") keys.add(key)
      }
    }
    return keys
  }, [derivedFilters.filters])

  // Set of keys whose backing filter is `date` — their state ships as F0's
  // `DateRange { from, to? }` and must be flattened into `[fromISO, toISO]`
  // strings, mirroring the date-navigator pill flatten path.
  const dateFilterKeys = useMemo(() => {
    const keys = new Set<string>()
    const specs = derivedFilters.filters
    if (specs) {
      for (const [key, spec] of Object.entries(specs)) {
        if (spec.type === "date") keys.add(key)
      }
    }
    return keys
  }, [derivedFilters.filters])

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
          if (numericRangeFilterKeys.has(key)) {
            const nfv = value as NumberFilterValue
            if (!nfv) continue
            const from = nfv.mode === "range" ? nfv.from?.value : nfv.value
            const to = nfv.mode === "range" ? nfv.to?.value : nfv.value
            const fromStr =
              typeof from === "number" && Number.isFinite(from)
                ? String(from)
                : ""
            const toStr =
              typeof to === "number" && Number.isFinite(to) ? String(to) : ""
            if (fromStr || toStr) {
              filterValues[key] = [fromStr, toStr]
            }
            continue
          }
          if (dateFilterKeys.has(key)) {
            // F0 DateFilter value shape (range mode): `{ from: Date, to?: Date }`.
            // Flatten to `[fromISO, toISO]` for the backend, mirroring the
            // date-navigator pill so the SQL builder can reuse one helper.
            const range = value as
              | { from?: Date | string; to?: Date | string }
              | undefined
            if (!range) continue
            const toIso = (d: Date | string | undefined): string => {
              if (!d) return ""
              const date = d instanceof Date ? d : new Date(d)
              if (Number.isNaN(date.getTime())) return ""
              return date.toISOString().slice(0, 10)
            }
            const fromIso = toIso(range.from)
            const toIsoStr = toIso(range.to)
            if (fromIso || toIsoStr) {
              filterValues[key] = [fromIso, toIsoStr]
            }
            continue
          }
          if (Array.isArray(value) && value.length > 0) {
            filterValues[key] = value as unknown[]
          }
        }

        return fetchItem(itemId, filterValues, navigationFilterValues).then(
          (result) => {
            // Update filter options + derived filter definitions from the
            // response so the chips reflect the latest compute pass.
            const opts = getFilterOptions()
            const derived = getDerivedFilters()
            if (
              (opts || derived.filters || derived.navigationFilters) &&
              !filterOptionsPolledRef.current
            ) {
              if (opts) setFilterOptions(opts)
              setDerivedFilters(derived)
              filterOptionsPolledRef.current = true
            }
            return result
          }
        )
      }
    },
    [
      dateFilterKeys,
      fetchItem,
      getFilterOptions,
      getDerivedFilters,
      navigationFilterKeys,
      numericRangeFilterKeys,
    ]
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
      key={`${refreshKey}:${filterRevision}`}
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
import { savedDashboardMetaStore } from "./configStore"
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
    saveConfigToHistory,
    registerExport,
  } = useDashboardCanvas()
  const { canvasActions, openCanvas } = useAiChat()
  const translations = useI18n()
  const [isSaveAsDialogOpen, setIsSaveAsDialogOpen] = useState(false)

  // Treat a dashboard as "saved" only when both id AND category are present —
  // `handleSave` needs both to persist externally, so `id` alone is an
  // incomplete state that shouldn't unlock the saved-dashboard UI.
  const isSavedDashboard =
    !!content.savedDashboardId && !!content.savedDashboardCategory
  const isUnsaved = !!content.savedDashboardUnsaved
  const hasDashboardActions = !!canvasActions?.dashboard

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

  const handleSaveAs = useCallback(
    async (title: string, description: string) => {
      // Persist the config the user is actually looking at, including any
      // pending chart-type transforms. Using `content.config` here would
      // silently drop those transforms.
      const created = await canvasActions?.dashboard?.create(
        title,
        description,
        effectiveConfig,
        content.savedDashboardCategory
      )
      // After creating, transition to "saved" state (state 1 → state 2).
      // Both id and category are required: `isSavedDashboard` gates on both,
      // and `handleSave` needs the category to call the backend save endpoint.
      if (created) {
        const meta = {
          savedDashboardId: created.id,
          savedDashboardCategory: created.category,
          savedDashboardDescription: description,
          savedDashboardUnsaved: false,
        }

        openCanvas({ ...content, config: effectiveConfig, ...meta })

        // Update meta store so close/re-open preserves the saved state
        if (content.toolCallId) {
          savedDashboardMetaStore.set(content.toolCallId, meta)
        }

        // Persist to chat history so it survives reload
        void saveConfigToHistory({ ...effectiveConfig, ...meta })
      }
    },
    [canvasActions, content, effectiveConfig, openCanvas, saveConfigToHistory]
  )

  // Derive a refresh key tied only to the data identity (fetchSpecs reference).
  // The canvas-level refreshKey from CanvasPanel bumps on every content
  // reference change, which includes save (layout/transform persistence). On
  // save, fetchSpecs is preserved by reference (handleSave only spreads the
  // config / items), so this key stays stable and we avoid a redundant
  // dashboard remount + recompute. LLM regeneration produces a new fetchSpecs
  // reference, which correctly bumps this key and triggers a real refetch.
  const dataRefreshKey = useMemo(() => Date.now(), [content.config.fetchSpecs])

  return (
    <div className="flex h-full flex-col">
      {/*
       * Scrollable region: the dashboard takes the remaining height after the
       * action bar. A single-item dashboard fills this region exactly via
       * `flex-1` (see `F0AnalyticsDashboard` — no scroll needed); multi-item
       * dashboards stack their rows naturally and scroll inside this wrapper.
       */}
      <div className="flex min-h-0 flex-1 flex-col overflow-auto">
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
      </div>
      {/* State A: New dashboard with canvasActions — always-visible Save bar */}
      {!isSavedDashboard && hasDashboardActions && (
        <F0ActionBar
          label={
            // A single-collection dashboard is really a table; the generic
            // "Save the dashboard in Analytics" copy confuses users in that
            // case. Swap to the table-specific label so the call-to-action
            // matches what they're looking at.
            isSingleCollectionDashboard(effectiveConfig)
              ? translations.ai.dashboard.saveTableToAnalytics
              : translations.ai.dashboard.saveToAnalytics
          }
          isOpen
          primaryActions={[
            {
              label: translations.ai.dashboard.save,
              onClick: () => setIsSaveAsDialogOpen(true),
              icon: Save,
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
      {/* State B1: Saved dashboard, user edited layout — Save + Discard */}
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
              label: translations.ai.saveAsChanges,
              onClick: () => setIsSaveAsDialogOpen(true),
            },
            {
              label: translations.ai.discardChanges,
              onClick: handleDiscard,
            },
          ]}
        />
      )}
      {/* State B2: Saved dashboard, agent iterated (unsaved) but no manual edits — Save only */}
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
          secondaryActions={[
            {
              label: translations.ai.saveAsChanges,
              onClick: () => setIsSaveAsDialogOpen(true),
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
      {hasDashboardActions && (
        <SaveDashboardDialog
          isOpen={isSaveAsDialogOpen}
          onClose={() => setIsSaveAsDialogOpen(false)}
          onSave={handleSaveAs}
          defaultTitle={content.title}
          // Prefer the persisted saved-dashboard description when editing an
          // already-saved dashboard; fall back to the AI-generated summary on
          // the config for first-time saves so the user doesn't start from a
          // blank textarea.
          defaultDescription={
            content.savedDashboardDescription ?? content.config.description
          }
        />
      )}
    </div>
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
  // Declare every column as sortable. OneDataCollection requires a sort key
  // per column in the source's `sortings` record — the key mirrors the
  // column id so header clicks map 1:1 back to the field being sorted.
  const sortingDefs = item.columns.reduce<Record<string, { label: string }>>(
    (acc, col) => {
      acc[col.id] = { label: col.label }
      return acc
    },
    {}
  )

  // Client-side comparator. Rows were eagerly fetched by the dashboard
  // batch-compute so sort + search + pagination all run in memory — no
  // server round-trip. Numbers and strings get type-aware ordering;
  // everything else falls back to stringified compare.
  const applySortings = (
    rows: RecordType[],
    sortings: Array<{ field: string; order: "asc" | "desc" }> | undefined
  ): RecordType[] => {
    if (!sortings || sortings.length === 0) return rows
    const sorted = [...rows]
    sorted.sort((a, b) => {
      for (const { field, order } of sortings) {
        const av = a[field]
        const bv = b[field]
        if (av === bv) continue
        if (av == null) return order === "asc" ? -1 : 1
        if (bv == null) return order === "asc" ? 1 : -1
        let cmp: number
        if (typeof av === "number" && typeof bv === "number") {
          cmp = av - bv
        } else {
          cmp = String(av).localeCompare(String(bv), undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (cmp !== 0) return order === "asc" ? cmp : -cmp
      }
      return 0
    })
    return sorted
  }

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
        sortings: sortingDefs,
        dataAdapter: {
          paginationType: "pages" as const,
          perPage: COLLECTION_PER_PAGE,
          fetchData: async ({
            sortings,
            pagination,
            search,
          }: {
            filters: Record<string, unknown>
            sortings?: Array<{ field: string; order: "asc" | "desc" }>
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
            rows = applySortings(rows, sortings)
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
          // Header click toggles sort; gear menu toggles visibility and
          // column order. The dashboard-item download hook reads those
          // settings via `onStateChange`, so the exported file always
          // mirrors what the user is seeing.
          allowColumnHiding: true,
          allowColumnReordering: true,
          // The first column is always the row's anchor (typically
          // "Full Name", an id, or a primary label) — pin it so it stays
          // visible while the user scrolls wide tables horizontally.
          // Frozen columns are implicitly non-hidable / non-reorderable,
          // which is exactly the behaviour we want for the anchor.
          frozenColumns: 1 as const,
          columns: item.columns.map((col) => ({
            label: col.label,
            id: col.id,
            sorting: col.id,
            ...(col.width ? { width: col.width } : {}),
            ...(col.info ? { info: col.info } : {}),
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
