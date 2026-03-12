import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"

import { F0Icon } from "@/components/F0Icon"
import { ArrowUp, ArrowDown } from "@/icons/app"
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

function computeTrend(
  value: number,
  previousValue?: number
): { percent: number; direction: "up" | "down" | "flat" } | undefined {
  if (previousValue === undefined || previousValue === 0) return undefined

  const percent = ((value - previousValue) / Math.abs(previousValue)) * 100
  const direction = percent > 0.5 ? "up" : percent < -0.5 ? "down" : "flat"

  return { percent: Math.abs(percent), direction }
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
      isLoading={isLoading}
      error={error}
      onRetry={retry}
      skeleton={<MetricSkeleton />}
      actions={actions}
    >
      {data && (
        <div className="flex items-end gap-3 px-4 pb-4">
          <span className="text-4xl font-semibold leading-none tracking-tight text-f1-foreground">
            {formatValue(data.value, item.format, item.decimals)}
          </span>
          {trend && trend.direction !== "flat" && (
            <div className="flex h-fit">
              {trend.direction === "up" ? (
                <F0Icon icon={ArrowUp} color="positive" size="sm" />
              ) : (
                <F0Icon icon={ArrowDown} color="critical" size="sm" />
              )}
              <span
                className={cn(
                  "text-base font-medium",
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
      )}
    </DashboardItem>
  )
}
