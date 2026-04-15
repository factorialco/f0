import { useMemo, useRef, useState } from "react"

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
import { F0DataChart } from "@/kits/F0DataChart"
import {
  BarChartSkeleton,
  FunnelChartSkeleton,
  GaugeChartSkeleton,
  HeatmapChartSkeleton,
  LineChartSkeleton,
  PieChartSkeleton,
  RadarChartSkeleton,
} from "@/kits/F0DataChart"
import { useI18n } from "@/lib/providers/i18n"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import type {
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
} from "../../types"

import { useChartDownloadActions } from "../../hooks/useChartDownloadActions"
import { useDashboardItemData } from "../../hooks/useDashboardItemData"
import {
  defaultChartConfig,
  detectDataShape,
  fromCanonical,
  compatibleTargetTypes,
  toCanonical,
} from "../../utils/chartDataAdapter"
import { chartDataToTabular } from "../../utils/chartDataToTabular"
import { DashboardItem } from "../DashboardItem/DashboardItem"

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

// ---------------------------------------------------------------------------
// Skeleton picker
// ---------------------------------------------------------------------------

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
  }
}

// ---------------------------------------------------------------------------
// Build chart props using the centralized adapter
// ---------------------------------------------------------------------------

/**
 * Build F0DataChart props. When `overrideType` differs from the item's
 * original chart type, the data is converted via the canonical adapter.
 */
function buildChartProps(
  item: DashboardChartItem,
  data: DashboardChartData,
  overrideType?: DashboardChartConfig["type"],
  overrideOrientation?: "vertical" | "horizontal"
): F0DataChartProps {
  const targetType = overrideType ?? item.chart.type
  // Detect actual data shape — after a transform, item.chart.type may have
  // changed but the data from fetchData still has its original shape.
  const dataShape = detectDataShape(data)

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
  if ("showLegend" in item.chart) {
    shared.showLegend = item.chart.showLegend
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
      return { ...chart, categories, series } as F0DataChartProps
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
  const dataShape = detectDataShape(data)
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
            columns: tabular.columns.map((col) => ({
              label: col,
              render: (row: RecordType) => String(row[col] ?? ""),
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

// ---------------------------------------------------------------------------
// ChartItem component
// ---------------------------------------------------------------------------

interface ChartItemProps<Filters extends FiltersDefinition> {
  item: DashboardChartItem<Filters>
  filters: FiltersState<Filters>
  actions?: DropdownItem[]
  editMode?: boolean
  handleDelete?: (itemId: string) => void
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
  editMode,
  handleDelete,
  onTransformChart,
  isFullscreen,
  onFullscreenChange,
}: ChartItemProps<Filters>) {
  const translations = useI18n()
  const [viewMode, setViewMode] = useState<"chart" | "table">("chart")

  const enabled = item.useDashboardFilters !== false
  const { data, isLoading, error, retry } = useDashboardItemData<
    Filters,
    DashboardChartData
  >(item.fetchData, filters, enabled)
  const chartContainerRef = useRef<HTMLDivElement>(null)

  const CHART_TYPE_OPTIONS = useMemo(
    () => buildChartTypeOptions(translations),
    [translations]
  )

  const downloadActions = useChartDownloadActions({
    chartContainerRef,
    chartConfig: item.chart,
    data,
    title: item.title,
  })

  const allActions: DropdownItem[] = useMemo(
    () => [...(actions ?? []), ...downloadActions],
    [actions, downloadActions]
  )

  const effectiveError =
    error ?? (!isLoading && !data ? new Error("No data available") : undefined)

  // Determine which chart type options are available for this chart
  const currentOrientation =
    item.chart.type === "bar"
      ? "orientation" in item.chart
        ? (item.chart.orientation ?? "vertical")
        : "vertical"
      : undefined

  // Compute which target types are valid based on the actual data shape
  // (not item.chart.type, which may have changed after a transform)
  const dataShape = data ? detectDataShape(data) : item.chart.type
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

  const chartTypeOptions = onTransformChart
    ? CHART_TYPE_OPTIONS.filter((opt) => {
        const typeToCheck = opt.type === "bar" ? "bar" : opt.type
        if (!allowedTargets.has(typeToCheck)) return false
        // Hide pie for multi-series data — it only shows one series
        if (opt.type === "pie" && seriesCount > 1) return false
        return true
      }).map((opt) => {
        const isTable = opt.type === "table"
        const isActive = isTable
          ? viewMode === "table"
          : viewMode === "chart" &&
            item.chart.type === opt.type &&
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
                item.chart.type !== opt.type ||
                (opt.type === "bar" && currentOrientation !== opt.orientation)
              ) {
                onTransformChart(item.id, opt.type, opt.orientation)
              }
            }
          },
        }
      })
    : undefined

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      explanation={item.explanation}
      isLoading={isLoading}
      error={effectiveError}
      onRetry={retry}
      skeleton={chartSkeleton(item.chart)}
      actions={allActions}
      editMode={editMode}
      handleDelete={handleDelete}
      itemId={item.id}
      chartTypeOptions={chartTypeOptions}
      isFullscreen={isFullscreen}
      onFullscreenChange={onFullscreenChange}
    >
      {data &&
        (viewMode === "table" ? (
          <ChartTableView config={item.chart} data={data} />
        ) : (
          <div ref={chartContainerRef} className="h-full w-full px-4 py-3">
            <F0DataChart
              {...buildChartProps(item as DashboardChartItem, data)}
            />
          </div>
        ))}
    </DashboardItem>
  )
}
