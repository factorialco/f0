import { useLayoutEffect, useRef, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { F0Icon } from "@/components/F0Icon"
import { ArrowUp, ArrowDown } from "@/icons/app"
import { useContainerSize } from "@/kits/F0DataChart/utils/useContainerSize"
import { cn, focusRing } from "@/lib/utils"

import type {
  DashboardMetricData,
  DashboardMetricItem,
  MetricFormat,
} from "../../types"

import { useDashboardItemData } from "../../hooks/useDashboardItemData"
import { DashboardItem } from "../DashboardItem/DashboardItem"
import { MetricSkeleton } from "../DashboardItem/DashboardItemSkeleton"

interface MetricItemProps<Filters extends FiltersDefinition> {
  item: DashboardMetricItem<Filters>
  filters: FiltersState<Filters>
  actions?: import("@/experimental/Navigation/Dropdown").DropdownItem[]
  editMode?: boolean
  handleDelete?: (itemId: string) => void
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

type MetricTrend = { percent: number; direction: "up" | "down" | "flat" }

function computeTrend(
  value: number,
  previousValue?: number
): MetricTrend | undefined {
  if (previousValue === undefined || previousValue === 0) return undefined

  const percent = ((value - previousValue) / Math.abs(previousValue)) * 100
  const direction = percent > 0.5 ? "up" : percent < -0.5 ? "down" : "flat"

  return { percent: Math.abs(percent), direction }
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
  }, [height, trend?.direction, trend?.percent, value, width])

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
        {trend && trend.direction !== "flat" && (
          <div className="flex shrink-0 items-center">
            {trend.direction === "up" ? (
              <F0Icon
                icon={ArrowUp}
                color="positive"
                size="sm"
                aria-hidden="true"
              />
            ) : (
              <F0Icon
                icon={ArrowDown}
                color="critical"
                size="sm"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">
              {trend.direction === "up" ? "+" : "−"}
              {trend.percent.toFixed(1)}%
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "whitespace-nowrap text-base font-medium",
                trend.direction === "up"
                  ? "text-f1-foreground-positive"
                  : "text-f1-foreground-critical"
              )}
            >
              {trend.percent.toFixed(1)}%
            </span>
          </div>
        )}
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
  actions,
  editMode,
  handleDelete,
}: MetricItemProps<Filters>) {
  const enabled = item.useDashboardFilters !== false
  const { data, isLoading, error, retry } = useDashboardItemData<
    Filters,
    DashboardMetricData
  >(item.fetchData, filters, enabled)

  const trend = data ? computeTrend(data.value, data.previousValue) : undefined

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      explanation={item.explanation}
      isLoading={isLoading}
      error={error}
      onRetry={retry}
      skeleton={<MetricSkeleton />}
      actions={actions}
      editMode={editMode}
      handleDelete={handleDelete}
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
