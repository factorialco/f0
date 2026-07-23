import { useRef } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { F0Icon } from "@/components/F0Icon"
import { ArrowUp, ArrowDown } from "@/icons/app"
import { useContainerSize } from "@/kits/F0DataChart/utils/useContainerSize"
import { cn } from "@/lib/utils"

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
function MetricValue({ value, trend }: { value: string; trend?: MetricTrend }) {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useContainerSize(ref)
  const centered = height > 220

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-full min-h-0 overflow-auto px-4",
        centered ? "items-center justify-center py-4" : "items-end pb-4"
      )}
    >
      <div
        className={cn(
          "flex items-baseline gap-3",
          // Nudge up to offset the widget header, so the value reads as
          // optically centered against the whole card rather than the body.
          centered && "-translate-y-4"
        )}
      >
        <span className="whitespace-nowrap text-3xl font-semibold leading-none tracking-tight text-f1-foreground">
          {value}
        </span>
        {trend && trend.direction !== "flat" && (
          <div className="flex shrink-0 items-center">
            {trend.direction === "up" ? (
              <F0Icon icon={ArrowUp} color="positive" size="sm" />
            ) : (
              <F0Icon icon={ArrowDown} color="critical" size="sm" />
            )}
            <span
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
