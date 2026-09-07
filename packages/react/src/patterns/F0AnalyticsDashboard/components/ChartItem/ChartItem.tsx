import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import type { IconType } from "@/components/F0Icon"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"
import type { RecordType } from "@/hooks/datasource"
import type { F0DataChartProps } from "@/kits/F0DataChart"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import {
  ChartFunnel,
  ChartHorizontalBars,
  ChartLine,
  ChartPie,
  ChartVerticalBars,
  Table as TableIcon,
} from "@/icons/app"
import { DataChartEmptyStateView, F0DataChart } from "@/kits/F0DataChart"
import { tooltipValueFormat } from "@/kits/F0DataChart/utils/options"
import {
  BarChartSkeleton,
  FunnelChartSkeleton,
  GaugeChartSkeleton,
  HeatmapChartSkeleton,
  LineChartSkeleton,
  PieChartSkeleton,
  RadarChartSkeleton,
  ScatterChartSkeleton,
} from "@/kits/F0DataChart"
import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { useI18n } from "@/lib/providers/i18n"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import type {
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
  DashboardItemFiltersConfig,
  F0AnalyticsDashboardAskAiTarget,
  F0AnalyticsDashboardAskAiTargetWithQuote,
  F0AnalyticsDashboardPointClick,
} from "../../types"

import { useChartDownloadActions } from "../../hooks/useChartDownloadActions"
import { useDashboardItemData } from "../../hooks/useDashboardItemData"
import {
  defaultChartConfig,
  detectDataShape,
  isRenderableChart,
  fromCanonical,
  compatibleTargetTypes,
  toCanonical,
} from "../../utils/chartDataAdapter"
import { chartDataToTabular } from "../../utils/chartDataToTabular"
import { DashboardItem } from "../DashboardItem/DashboardItem"
import { PointActionPopover } from "./PointActionPopover"

// ---------------------------------------------------------------------------
// Chart type option registry
// ---------------------------------------------------------------------------

type ChartTypeOption = {
  label: string
  value: string
  icon: IconType
  /** The DashboardChartConfig type, or "table" for the table view mode */
  type: DashboardChartConfig["type"] | "table"
  orientation?: "vertical" | "horizontal"
}

function buildChartTypeOptions(
  t: ReturnType<typeof useI18n>
): ChartTypeOption[] {
  return [
    {
      label: t.dataChart.barChartVertical,
      value: "bar-vertical",
      icon: ChartVerticalBars,
      type: "bar",
      orientation: "vertical",
    },
    {
      label: t.dataChart.barChartHorizontal,
      value: "bar-horizontal",
      icon: ChartHorizontalBars,
      type: "bar",
      orientation: "horizontal",
    },
    {
      label: t.dataChart.lineChart,
      value: "line",
      icon: ChartLine,
      type: "line",
    },
    {
      label: t.dataChart.funnel,
      value: "funnel",
      icon: ChartFunnel,
      type: "funnel",
    },
    {
      label: t.dataChart.pieChart,
      value: "pie",
      icon: ChartPie,
      type: "pie",
    },
    {
      label: t.dataChart.table,
      value: "table",
      icon: TableIcon,
      type: "table",
    },
  ]
}

function formatPointValue(
  chart: F0DataChartProps,
  value: number,
  axis: "x" | "y" = "y"
): string {
  return axis === "x" && chart.type === "scatter"
    ? tooltipValueFormat(
        chart.xTooltipValueFormatter,
        chart.xValueFormatter
      )(value)
    : tooltipValueFormat(
        chart.tooltipValueFormatter,
        chart.valueFormatter
      )(value)
}

/** @internal Exported for focused quote-contract tests. */
export function buildPointQuoteText(
  title: string,
  chart: F0DataChartProps,
  point: F0AnalyticsDashboardPointClick
): string {
  if (chart.type === "scatter" && point.values.length >= 2) {
    const heading = point.category ? `${title} — ${point.category}` : title
    const xLabel = chart.xAxisName ?? "X"
    const yLabel = chart.yAxisName ?? "Y"
    const series = point.seriesName ? `${point.seriesName}\n` : ""

    return `${heading}\n${series}${xLabel}: ${formatPointValue(chart, point.values[0], "x")}\n${yLabel}: ${formatPointValue(chart, point.values[1])}`
  }

  if (chart.type === "line" && point.series.length > 1) {
    const category = chart.categoryFormatter
      ? chart.categoryFormatter(point.category)
      : point.category
    const heading = category ? `${title} — ${category}` : title
    const rows = point.series.map(
      ({ name, value }) => `${name}: ${formatPointValue(chart, value)}`
    )

    return `${heading}\n${rows.join("\n")}`
  }

  if (
    chart.type === "radar" &&
    chart.indicators.length &&
    point.values.length > 1
  ) {
    const heading = point.category ? `${title} — ${point.category}` : title
    const rows = chart.indicators
      .slice(0, point.values.length)
      .map(
        ({ name }, index) =>
          `${name}: ${formatPointValue(chart, point.values[index])}`
      )

    return `${heading}\n${rows.join("\n")}`
  }

  if (chart.type === "heatmap" && point.values.length >= 3) {
    const xCategory = chart.xCategories[point.values[0]]
    const yCategory = chart.yCategories[point.values[1]]
    const context = [yCategory, xCategory].filter(Boolean).join(" — ")
    const heading = context ? `${title} — ${context}` : title

    return `${heading}\n${formatPointValue(chart, point.value)}`
  }

  const category =
    "categoryFormatter" in chart && chart.categoryFormatter
      ? chart.categoryFormatter(point.category)
      : point.category
  const heading = category ? `${title} — ${category}` : title
  const label = point.seriesName ? `${point.seriesName}: ` : ""

  return `${heading}\n${label}${formatPointValue(chart, point.value)}`
}

// ---------------------------------------------------------------------------
// Skeleton picker
// ---------------------------------------------------------------------------

/** Stands in for an unrenderable config so hooks stay on their happy path. */
const FALLBACK_CHART_CONFIG: DashboardChartConfig = { type: "bar" }

function chartSkeleton(config: DashboardChartConfig) {
  switch (config.type) {
    case "bar":
      return (
        <BarChartSkeleton
          orientation={config.orientation}
          stacked={config.stacked}
          showLegend={config.showLegend}
        />
      )
    case "line":
      return (
        <LineChartSkeleton
          lineType={config.lineType}
          showArea={config.showArea}
          showDots={config.showDots}
          showLegend={config.showLegend}
        />
      )
    case "funnel":
      return (
        <FunnelChartSkeleton
          orient={config.orient}
          sort={config.sort}
          showLegend={config.showLegend}
        />
      )
    case "pie":
      return (
        <PieChartSkeleton
          innerRadius={config.innerRadius}
          showLegend={config.showLegend}
        />
      )
    case "radar":
      return <RadarChartSkeleton showLegend={config.showLegend} />
    case "gauge":
      return <GaugeChartSkeleton />
    case "heatmap":
      return <HeatmapChartSkeleton />
    case "scatter":
      // Scatter is the only type whose legend depends on the data — it needs
      // 2+ series — and the skeleton can't see the data. Default to reserving
      // no legend row: single-series is the common case, and over-reserving
      // makes the plot jump when the real chart replaces the skeleton.
      return <ScatterChartSkeleton showLegend={config.showLegend ?? false} />
  }
}

// ---------------------------------------------------------------------------
// Build chart props using the centralized adapter
// ---------------------------------------------------------------------------

/**
 * Build F0DataChart props. When `overrideType` differs from the item's
 * original chart type, the data is converted via the canonical adapter.
 *
 * @internal Exported for unit tests — not part of the package's public API.
 */
export function buildChartProps(
  item: DashboardChartItem,
  data: DashboardChartData,
  overrideType?: DashboardChartConfig["type"],
  overrideOrientation?: "vertical" | "horizontal"
): F0DataChartProps {
  const targetType = overrideType ?? item.chart.type
  // Detect actual data shape — after a transform, item.chart.type may have
  // changed but the data from fetchData still has its original shape.
  const dataShape = detectDataShape(data, targetType)

  // When the data shape matches the target and chart type, pass through
  // directly to preserve type-specific features (targets, color overrides).
  if (
    targetType === dataShape &&
    targetType === item.chart.type &&
    !overrideOrientation
  ) {
    return buildNativeChartProps(item, data)
  }

  // Cross-type transform: auto-detect source shape → canonical → target
  const canonical = toCanonical(data)
  const adapted = fromCanonical(canonical, targetType)
  const config = defaultChartConfig(targetType)

  // Preserve shared props from the original config
  const shared: Record<string, unknown> = {}
  if ("valueFormatter" in item.chart && item.chart.valueFormatter) {
    shared.valueFormatter = item.chart.valueFormatter
  }
  if (
    "tooltipValueFormatter" in item.chart &&
    item.chart.tooltipValueFormatter
  ) {
    shared.tooltipValueFormatter = item.chart.tooltipValueFormatter
  }
  if ("showLegend" in item.chart) {
    shared.showLegend = item.chart.showLegend
  }
  // Only bar targets inherit the source config's `showLabels`. Other types keep
  // their own default, so transforming a pie (labels on by default) into a line
  // doesn't drag labels along. `undefined` is not an explicit value — letting it
  // through would clobber the target's default with "unset".
  if (
    targetType === "bar" &&
    "showLabels" in item.chart &&
    item.chart.showLabels !== undefined
  ) {
    shared.showLabels = item.chart.showLabels
  }

  // Build the final props by merging config + adapted data
  switch (targetType) {
    case "bar": {
      // Resolve orientation: explicit override > item config > default config
      const orientation =
        overrideOrientation ??
        ("orientation" in item.chart
          ? (item.chart as { orientation?: string }).orientation
          : undefined) ??
        (config as { orientation?: string }).orientation
      return {
        ...config,
        ...shared,
        ...(orientation ? { orientation } : {}),
        categories: adapted.categories ?? [],
        series: adapted.series,
      } as F0DataChartProps
    }
    case "line":
      return {
        ...config,
        ...shared,
        categories: adapted.categories ?? [],
        series: adapted.series,
      } as F0DataChartProps
    case "funnel":
      return {
        ...config,
        ...shared,
        series: adapted.series,
      } as F0DataChartProps
    case "pie":
      return {
        ...config,
        ...shared,
        series: adapted.series,
      } as F0DataChartProps
    case "radar":
      return {
        ...config,
        ...shared,
        indicators: adapted.indicators ?? [],
        series: adapted.series,
      } as F0DataChartProps
    case "gauge":
      return {
        ...config,
        ...shared,
        ...(adapted.series as { value: number; name?: string }),
      } as F0DataChartProps
    case "heatmap":
      return {
        ...config,
        ...shared,
        xCategories: adapted.xCategories ?? [],
        yCategories: adapted.yCategories ?? [],
        data: adapted.data ?? [],
      } as F0DataChartProps
    case "scatter":
      // Reached only when the data doesn't look like a scatter: `detectDataShape`
      // falls through to "bar" for an empty or errored result, which sends a
      // scatter-configured item down the conversion path. Renders the empty
      // state, so losing the axis names and pointSize that `shared` drops
      // doesn't matter here.
      return {
        ...config,
        ...shared,
        series: adapted.scatterSeries ?? [],
      } as F0DataChartProps
  }
}

/**
 * Build props for the native (non-transformed) chart type.
 * This is the original buildChartProps logic that passes data through
 * as-is, preserving type-specific features.
 */
function buildNativeChartProps(
  item: DashboardChartItem,
  data: DashboardChartData
): F0DataChartProps {
  const { chart } = item

  switch (chart.type) {
    case "funnel": {
      let funnelSeries = data.series
      if (Array.isArray(data.series)) {
        const canonical = toCanonical(data, "bar")
        funnelSeries = fromCanonical(canonical, "funnel").series
      }
      return { ...chart, series: funnelSeries } as F0DataChartProps
    }
    case "pie":
      return { ...chart, series: data.series } as F0DataChartProps
    case "radar":
      return {
        ...chart,
        indicators: data.indicators ?? [],
        series: data.series,
      } as F0DataChartProps
    case "gauge":
      return {
        ...chart,
        ...(data.series as { value: number; name?: string }),
      } as F0DataChartProps
    case "heatmap":
      return {
        ...chart,
        xCategories: data.xCategories ?? [],
        yCategories: data.yCategories ?? [],
        data: data.data ?? [],
      } as F0DataChartProps
    case "scatter":
      return {
        ...chart,
        series: data.scatterSeries ?? [],
      } as F0DataChartProps
    case "bar":
    case "line": {
      let { series } = data
      let categories = data.categories ?? []
      if (series && !Array.isArray(series)) {
        const canonical = toCanonical(data, "funnel")
        const adapted = fromCanonical(canonical, chart.type)
        series = adapted.series
        categories = adapted.categories ?? []
      }
      return {
        ...chart,
        // Dashboard bar charts show value labels by default. Resolved after the
        // spread rather than before it: `...chart` carries `showLabels` even
        // when it is explicitly `undefined`, which would overwrite the default.
        ...(chart.type === "bar"
          ? { showLabels: chart.showLabels ?? true }
          : {}),
        categories,
        series,
      } as F0DataChartProps
    }
  }
}

// ---------------------------------------------------------------------------
// Table view — renders chart data as a OneDataCollection table
// ---------------------------------------------------------------------------

function ChartTableView({
  config,
  data,
}: {
  config: DashboardChartConfig
  data: DashboardChartData
}) {
  // After a chart type transform, item.chart.type may not match the actual
  // data shape. Use detectDataShape to pick the right tabular converter.
  const dataShape = detectDataShape(data, config.type)
  const effectiveConfig =
    dataShape !== config.type
      ? ({ ...config, type: dataShape } as DashboardChartConfig)
      : config

  const tabular = useMemo(
    () => chartDataToTabular(effectiveConfig, data),
    [effectiveConfig, data]
  )

  const sourceDefinition = useMemo(
    () => ({
      dataAdapter: {
        fetchData: () => ({ records: tabular.rows as RecordType[] }),
      },
      columns: tabular.columns.map((col) => ({
        label: col,
        id: col,
      })),
    }),
    [tabular]
  )

  const source = useDataCollectionSource<RecordType>(sourceDefinition, [
    tabular,
  ])

  const visualizations = useMemo(
    () =>
      [
        {
          type: "table" as const,
          options: {
            columns: tabular.columns.map((col, index) => ({
              label: col,
              // Look up by the stable key when the converter supplies one —
              // header labels can repeat, row keys cannot.
              render: (row: RecordType) =>
                String(row[tabular.keys?.[index] ?? col] ?? ""),
            })),
          },
        },
      ] as const,
    [tabular.columns]
  )

  return (
    <OneDataCollection
      fullHeight
      source={source}
      visualizations={visualizations}
    />
  )
}

/**
 * Whether an expanded `item` should be sized by its content rather than by the
 * viewport. Only horizontal bar charts qualify: expanding drops their scrollable
 * row window (see `showAllCategories`) and draws every category at a fixed row
 * height, which is an intrinsic height the widget has to accommodate. Shared
 * with `DashboardGrid` so the fullscreen container and the card agree.
 *
 * Guarded by `isRenderableChart` first: a host app whose type mapper has no
 * case hands over `chart: undefined`, and this runs before the render path
 * degrades that to the error state.
 */
export function chartItemFitsContent<Filters extends FiltersDefinition>(
  item: DashboardChartItem<Filters>
): boolean {
  return (
    isRenderableChart(item.chart) &&
    item.chart.type === "bar" &&
    "orientation" in item.chart &&
    item.chart.orientation === "horizontal"
  )
}

// ---------------------------------------------------------------------------
// ChartItem component
// ---------------------------------------------------------------------------

interface ChartItemProps<Filters extends FiltersDefinition> {
  item: DashboardChartItem<Filters>
  filters: FiltersState<Filters>
  actions?: DropdownItem[]
  itemFilters?: DashboardItemFiltersConfig
  editMode?: boolean
  handleDelete?: (itemId: string) => void
  onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void
  onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void
  onTransformChart?: (
    itemId: string,
    newType: string,
    orientation?: "vertical" | "horizontal"
  ) => void
  isFullscreen?: boolean
  onFullscreenChange?: (fullscreen: boolean) => void
}

export function ChartItem<Filters extends FiltersDefinition>({
  item,
  filters,
  actions,
  itemFilters,
  editMode,
  handleDelete,
  onAskAi,
  onAskAiTarget,
  onTransformChart,
  isFullscreen,
  onFullscreenChange,
}: ChartItemProps<Filters>) {
  const translations = useI18n()
  const [viewMode, setViewMode] = useState<"chart" | "table">("chart")
  const {
    enabled: aiEnabled,
    setPendingQuote,
    setOpen: setAiChatOpen,
    focusChatInput,
  } = useAiChat()

  // An item can arrive with a chart config this build cannot render — most
  // plausibly when a host app maps a wire type it has no case for and yields
  // `undefined`. Every path below switches on `chart.type` without a default,
  // so rendering it would throw and take the whole dashboard with it. Detect
  // it once and degrade to this item's own error state.
  const unrenderableChart = !isRenderableChart(item.chart)
  const safeChart = unrenderableChart ? FALLBACK_CHART_CONFIG : item.chart

  /**
   * The mark the user last clicked, held until they either choose the action or
   * dismiss it. Clicking a chart offers to quote rather than quoting outright —
   * charts get clicked while reading, and hijacking every click to open the
   * chat would make exploring one hostile.
   */
  const [pickedPoint, setPickedPoint] =
    useState<F0AnalyticsDashboardPointClick | null>(null)
  const enabled = item.useDashboardFilters !== false
  const itemFiltersKey = JSON.stringify(itemFilters?.value ?? {})
  const { data, isLoading, error, retry } = useDashboardItemData<
    Filters,
    DashboardChartData
  >(item.fetchData, filters, enabled, itemFiltersKey)
  const chartContainerRef = useRef<HTMLDivElement>(null)

  // Keep the data used for quoting identical to the data actually rendered.
  // In particular, transformed radar charts synthesize indicators here that
  // do not exist in the raw fetch result.
  const chartProps = useMemo(
    () =>
      data && !unrenderableChart
        ? buildChartProps(item as DashboardChartItem, data)
        : undefined,
    [item, data, unrenderableChart]
  )

  // A point belongs to one exact data render. A filter/type/refetch transition
  // can retain old data while loading; never let that stale mark reappear or
  // resolve its tuple indexes against the next result. Do not key this on the
  // host's item/chart object identity: inline dashboard configs are normally
  // rebuilt on every parent render even when their semantics are unchanged.
  useEffect(() => {
    setPickedPoint(null)
  }, [data, isLoading, safeChart.type])

  const pointAskOwner = onAskAi ? "host" : aiEnabled ? "chat" : "none"
  const canAskAboutPoint =
    pointAskOwner !== "none" && item.title.trim().length > 0

  // A pending point belongs to the responder that was available when it was
  // picked. Do not let a later host/chat ownership change redirect that action
  // or leave a dead popover behind.
  useEffect(() => {
    setPickedPoint(null)
  }, [pointAskOwner])

  const handleAskAboutPoint = useCallback(
    (point: F0AnalyticsDashboardPointClick) => {
      if (onAskAi) {
        // The host answers this the same way it answers the ⋯ menu, with the
        // mark attached. It gets the raw point rather than the sentence built
        // below: it owns the phrasing, and it has the formatters too.
        onAskAi({ id: item.id, title: item.title, point })
        setPickedPoint(null)
        return
      }

      if (!chartProps) return

      const quote = {
        text: buildPointQuoteText(item.title, chartProps, point),
      }
      onAskAiTarget?.({ id: item.id, title: item.title, point, quote })
      setPendingQuote(quote)
      // Fullscreen covers the chat, matching the widget-level Ask One action.
      if (isFullscreen) onFullscreenChange?.(false)
      // Without this the quote would land in a panel the user cannot see.
      setAiChatOpen(true)
      focusChatInput()
      setPickedPoint(null)
    },
    [
      item,
      chartProps,
      onAskAi,
      onAskAiTarget,
      isFullscreen,
      onFullscreenChange,
      setPendingQuote,
      setAiChatOpen,
      focusChatInput,
    ]
  )

  const CHART_TYPE_OPTIONS = useMemo(
    () => buildChartTypeOptions(translations),
    [translations]
  )

  const downloadActions = useChartDownloadActions({
    chartContainerRef,
    chartConfig: safeChart,
    data,
    title: item.title,
  })

  const allActions: DropdownItem[] = useMemo(
    () => [...(actions ?? []), ...downloadActions],
    [actions, downloadActions]
  )

  const dismissPointAction = useCallback(() => setPickedPoint(null), [])

  // No fabricated error when data is absent — `F0DataChart` (or the explicit
  // fallback below for `!data`) renders a proper empty state instead.

  // Determine which chart type options are available for this chart
  const currentOrientation =
    safeChart.type === "bar"
      ? "orientation" in safeChart
        ? (safeChart.orientation ?? "vertical")
        : "vertical"
      : undefined

  // Compute which target types are valid based on the actual data shape
  // (not item.chart.type, which may have changed after a transform)
  const dataShape = data
    ? detectDataShape(data, safeChart.type)
    : safeChart.type
  const allowedTargets = useMemo(
    () => compatibleTargetTypes(dataShape),
    [dataShape]
  )

  // Pie only makes sense with single-series data (part-of-whole)
  const seriesCount = data
    ? Array.isArray(data.series)
      ? data.series.length
      : 1
    : 1

  const availableChartTypes = CHART_TYPE_OPTIONS.filter((opt) => {
    const typeToCheck = opt.type === "bar" ? "bar" : opt.type
    if (!allowedTargets.has(typeToCheck)) return false
    // Hide pie for multi-series data — it only shows one series
    if (opt.type === "pie" && seriesCount > 1) return false
    return true
  })

  // Scatter converts to nothing, so its picker would hold only "Table" — and
  // the group is `required`, so selecting it would leave no route back to the
  // chart. Gauge has the same shape and the same latent trap, but it also has
  // that route today; taking it away is a change existing users would see, so
  // it belongs in its own PR rather than riding along with a new chart type.
  // Keyed on the data shape, not the config, because that is what the option
  // list above is keyed on — an item configured as something else whose data
  // arrives as `scatterSeries` gets the same one-entry list and needs the same
  // treatment.
  const hidesChartTypePicker = dataShape === "scatter"

  const chartTypeOptions =
    onTransformChart && !hidesChartTypePicker
      ? availableChartTypes.map((opt) => {
          const isTable = opt.type === "table"
          const isActive = isTable
            ? viewMode === "table"
            : viewMode === "chart" &&
              safeChart.type === opt.type &&
              (opt.type !== "bar" || currentOrientation === opt.orientation)

          return {
            label: opt.label,
            value: opt.value,
            icon: opt.icon,
            isActive,
            onSelect: () => {
              if (isTable) {
                setViewMode("table")
              } else {
                setViewMode("chart")
                if (
                  safeChart.type !== opt.type ||
                  (opt.type === "bar" && currentOrientation !== opt.orientation)
                ) {
                  onTransformChart(item.id, opt.type, opt.orientation)
                }
              }
            },
          }
        })
      : undefined

  const fitContent = !!isFullscreen && chartItemFitsContent(item)

  // Reported by the chart itself: only it knows how many rows its window fits
  // at the current size. Surfaced on the expand button rather than inside the
  // chart, so the affordance sits with the action that reveals them.
  const [hiddenCategories, setHiddenCategories] = useState(0)
  const canRevealCategories = !!onFullscreenChange && chartItemFitsContent(item)
  const isWindowed =
    canRevealCategories && !isFullscreen && hiddenCategories > 0

  // Expanded, the same slot offers the way back. Derived from props rather than
  // remembered from the collapsed state: expanding swaps the grid to a different
  // tree (see `DashboardGrid`'s fullscreen branch), so this component unmounts
  // and any latched "it was windowed" flag would be gone by the time the
  // expanded view rendered.
  //
  // The cost of deriving it is that a chart short enough to have fitted whole
  // also gets the link — harmless, since collapsing is exactly what it does, and
  // it duplicates the header's collapse button rather than inventing anything.
  const canCollapseCategories = canRevealCategories && !!isFullscreen

  // While rows are windowed, the item's own description is replaced by what the
  // reader is actually looking at: a subset. Both counts come from the data and
  // the chart's reported hidden count, so they track resizes without a second
  // source of truth.
  //
  // The copy says "showing", not "top": the window takes the first rows in data
  // order, and an item is free to arrive sorted by date, alphabetically, or any
  // other way, none of which "top" would describe truthfully.
  const totalCategories = data?.categories?.length ?? 0
  const windowedDescription = isWindowed
    ? translations.dataChart.windowedCategories
        .replace(
          "{{count}}",
          String(Math.max(0, totalCategories - hiddenCategories))
        )
        .replace("{{total}}", String(totalCategories))
    : undefined

  // The same slot carries both directions of the toggle, so the control the
  // reader used to get here is the one that takes them back.
  const descriptionAction = isWindowed
    ? {
        label: translations.actions.showAll,
        onClick: () => onFullscreenChange?.(true),
      }
    : canCollapseCategories
      ? {
          label: translations.actions.showLess,
          onClick: () => onFullscreenChange?.(false),
        }
      : undefined

  return (
    <DashboardItem
      title={item.title}
      description={windowedDescription ?? item.description}
      info={item.info}
      {...(descriptionAction ? { descriptionAction } : {})}
      explanation={item.explanation}
      isLoading={isLoading}
      error={
        error ??
        // Deliberately message-less: the shared "Error loading data" title
        // already states it, and a dedicated string would add a required key
        // to `TranslationsType` — a compile break for every consumer that
        // maintains a complete dictionary. The absent Retry below is the tell
        // that distinguishes this from a fetch failure.
        (unrenderableChart ? new Error() : undefined)
      }
      // Refetching cannot conjure a chart config this build understands, so
      // an unrenderable item gets no Retry button.
      onRetry={unrenderableChart ? undefined : retry}
      skeleton={chartSkeleton(safeChart)}
      actions={allActions}
      itemFilters={itemFilters}
      editMode={editMode}
      handleDelete={handleDelete}
      onAskAi={onAskAi}
      onAskAiTarget={onAskAiTarget}
      itemId={item.id}
      chartTypeOptions={chartTypeOptions}
      isFullscreen={isFullscreen}
      fitContent={fitContent}
      onFullscreenChange={onFullscreenChange}
    >
      {data && chartProps ? (
        viewMode === "table" ? (
          <ChartTableView config={safeChart} data={data} />
        ) : (
          <div
            ref={chartContainerRef}
            className="relative h-full w-full px-4 py-3"
          >
            <F0DataChart
              {...chartProps}
              // Something has to be able to answer the click: the host, or
              // failing that a mounted chat.
              onPointClick={
                canAskAboutPoint ? (point) => setPickedPoint(point) : undefined
              }
              // Windowing rows is only offered where the reader can get them
              // back: this widget puts the count and a "show all" link in its
              // description. Without an expand handler there is nowhere for that
              // link to go, so the chart keeps every category and compresses
              // instead.
              {...(canRevealCategories
                ? {
                    windowCategories: true,
                    // Drives the count in the description; subscribed only
                    // alongside the window it describes.
                    onHiddenCategoriesChange: setHiddenCategories,
                  }
                : {})}
              // Expanding is the reader asking for the whole picture, so a
              // horizontal bar chart drops its row window and draws every
              // category at a fixed row height, growing the widget.
              {...(fitContent ? { showAllCategories: true } : {})}
            />
            <PointActionPopover
              anchor={pickedPoint}
              onAsk={() => {
                if (pickedPoint) handleAskAboutPoint(pickedPoint)
              }}
              onDismiss={dismissPointAction}
            />
          </div>
        )
      ) : !isLoading ? (
        <div className="h-full w-full px-4 py-3">
          <DataChartEmptyStateView />
        </div>
      ) : null}
    </DashboardItem>
  )
}
