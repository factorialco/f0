import { useLayoutEffect, useRef, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { F0Icon } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ArrowUp, ArrowDown } from "@/icons/app"
import { useContainerSize } from "@/kits/F0DataChart/utils/useContainerSize"
import { cn, focusRing } from "@/lib/utils"

import type {
  DashboardItemFiltersConfig,
  DashboardMetricData,
  DashboardMetricItem,
  F0AnalyticsDashboardAskAiTarget,
  F0AnalyticsDashboardAskAiTargetWithQuote,
  MetricFormat,
} from "../../types"

import { useDashboardItemData } from "../../hooks/useDashboardItemData"
import { DashboardItem } from "../DashboardItem/DashboardItem"
import { MetricSkeleton } from "../DashboardItem/DashboardItemSkeleton"

interface MetricItemProps<Filters extends FiltersDefinition> {
  item: DashboardMetricItem<Filters>
  filters: FiltersState<Filters>
  dataKey?: string
  actions?: import("@/experimental/Navigation/Dropdown").DropdownItem[]
  itemFilters?: DashboardItemFiltersConfig
  editMode?: boolean
  handleDelete?: (itemId: string) => void
  onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void
  onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void
  isFullscreen?: boolean
  onFullscreenChange?: (fullscreen: boolean) => void
}

function formatValue(
  value: number,
  format: MetricFormat = { type: "number" },
  decimals: number = 0
): string {
  switch (format.type) {
    case "currency": {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: format.currency ?? "EUR",
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value)
    }
    case "percent": {
      return new Intl.NumberFormat(undefined, {
        style: "percent",
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value / 100)
    }
    case "custom": {
      const formatted = new Intl.NumberFormat(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value)
      return `${format.prefix ?? ""}${formatted}${format.suffix ?? ""}`
    }
    default: {
      return new Intl.NumberFormat(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value)
    }
  }
}

type MetricTrend = {
  direction: "up" | "down" | "flat"
  text: string
  /** The same change signed: the arrow that carries the sign is aria-hidden. */
  srText: string
  comparisonLabel?: string
}

function computeTrend(value: number, previousValue?: number) {
  if (previousValue === undefined || previousValue === 0) return undefined

  const percent = ((value - previousValue) / Math.abs(previousValue)) * 100
  const direction = percent > 0.5 ? "up" : percent < -0.5 ? "down" : "flat"

  return { percent: Math.abs(percent), direction } as const
}

function resolveTrend(data: DashboardMetricData): MetricTrend | undefined {
  const comparisonLabel = data.comparisonLabel || undefined
  // An empty label leaves nothing to draw, so it counts as no host trend.
  const label = data.trend?.label
  if (data.trend && label) {
    return {
      direction: data.trend.direction,
      text: label,
      srText: label,
      comparisonLabel,
    }
  }

  const computed = computeTrend(data.value, data.previousValue)
  // A computed flat trend stays hidden — drawing it would change what existing
  // dashboards show.
  if (!computed || computed.direction === "flat") return undefined

  const change = `${computed.percent.toFixed(1)}%`
  return {
    direction: computed.direction,
    text: change,
    srText: `${computed.direction === "up" ? "+" : "−"}${change}`,
    comparisonLabel,
  }
}

function MetricTrendBadge({ trend }: { trend?: MetricTrend }) {
  if (!trend) return null

  const { comparisonLabel, direction, srText, text } = trend

  const badge = (
    <div className="flex shrink-0 items-center">
      {direction === "up" && (
        <F0Icon icon={ArrowUp} color="positive" size="sm" aria-hidden="true" />
      )}
      {direction === "down" && (
        <F0Icon
          icon={ArrowDown}
          color="critical"
          size="sm"
          aria-hidden="true"
        />
      )}
      <span className="sr-only">
        {comparisonLabel ? `${srText} ${comparisonLabel}` : srText}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "whitespace-nowrap text-base font-medium",
          direction === "up" && "text-f1-foreground-positive",
          direction === "down" && "text-f1-foreground-critical",
          direction === "flat" && "text-f1-foreground-secondary"
        )}
      >
        {text}
      </span>
    </div>
  )

  return comparisonLabel ? (
    <Tooltip label={comparisonLabel}>{badge}</Tooltip>
  ) : (
    badge
  )
}

/**
 * The formatted value + optional trend, aligned within the widget body.
 *
 * Bottom-left by default; once the body grows taller than 220px it centers on
 * both axes so the number sits in the middle of a large tile instead of
 * hugging the bottom edge. Height is tracked with a `ResizeObserver`, so it
 * reacts to grid resizes and fullscreen toggles.
 */
export function MetricValue({
  value,
  trend,
}: {
  value: string
  trend?: MetricTrend
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { height, width } = useContainerSize(ref)
  const [isScrollable, setIsScrollable] = useState(false)
  const centered = height > 220

  useLayoutEffect(() => {
    const element = ref.current
    setIsScrollable(
      element !== null &&
        (element.scrollWidth > element.clientWidth ||
          element.scrollHeight > element.clientHeight)
    )
  }, [height, trend?.direction, trend?.text, value, width])

  return (
    <div
      ref={ref}
      tabIndex={isScrollable ? 0 : undefined}
      className={cn(
        "flex h-full min-h-0 overflow-auto px-4",
        centered ? "items-center py-4" : "items-end pb-4",
        isScrollable &&
          focusRing(
            "rounded-sm focus-visible:ring-inset focus-visible:ring-offset-0"
          )
      )}
    >
      <div
        className={cn(
          "flex items-baseline gap-3",
          // Nudge up to offset the widget header, so the value reads as
          // optically centered against the whole card rather than the body.
          // Auto margins center content that fits, but collapse to zero when
          // it overflows so the beginning remains reachable by scrolling.
          centered && "mx-auto -translate-y-4"
        )}
      >
        <span className="whitespace-nowrap text-3xl font-semibold leading-none tracking-tight text-f1-foreground">
          {value}
        </span>
        <MetricTrendBadge trend={trend} />
      </div>
    </div>
  )
}

/**
 * Renders a single metric (big number) dashboard item.
 *
 * Displays a large formatted number with an optional trend indicator
 * showing the change vs the previous value.
 */
export function MetricItem<Filters extends FiltersDefinition>({
  item,
  filters,
  dataKey,
  actions,
  itemFilters,
  editMode,
  handleDelete,
  onAskAi,
  onAskAiTarget,
}: MetricItemProps<Filters>) {
  const enabled = item.useDashboardFilters !== false
  const itemFiltersKey = JSON.stringify(itemFilters?.value ?? {})
  const { data, isLoading, isRefreshing, error, retry } = useDashboardItemData<
    Filters,
    DashboardMetricData
  >(item.fetchData, filters, enabled, itemFiltersKey, dataKey)

  const trend = data ? resolveTrend(data) : undefined

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      info={item.info}
      explanation={item.explanation}
      isLoading={isLoading}
      isRefreshing={isRefreshing}
      error={error}
      onRetry={retry}
      skeleton={<MetricSkeleton />}
      actions={actions}
      itemFilters={itemFilters}
      editMode={editMode}
      handleDelete={handleDelete}
      onAskAi={onAskAi}
      onAskAiTarget={onAskAiTarget}
      itemId={item.id}
    >
      {data && (
        <MetricValue
          value={
            item.valueFormatter
              ? item.valueFormatter(data.value)
              : formatValue(data.value, item.format, item.decimals)
          }
          trend={trend}
        />
      )}
    </DashboardItem>
  )
}
