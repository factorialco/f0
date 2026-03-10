import { useCallback, useRef } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"

import { cn } from "@/lib/utils"

import type { DashboardItem as DashboardItemType } from "../../types"
import { ChartItem } from "../ChartItem/ChartItem"
import { CollectionItem } from "../CollectionItem/CollectionItem"
import { DashboardItem } from "../DashboardItem/DashboardItem"
import { MetricItem } from "../MetricItem/MetricItem"

const colSpanClasses: Record<1 | 2 | 3, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
}

/**
 * Aspect ratio for chart height: width / height.
 * Used for colSpan 1 and colSpan 2 charts (based on single-column width).
 */
const CHART_ASPECT_RATIO = 1

/**
 * Aspect ratio for full-width (colSpan 3) charts — taller proportion.
 * Computed from single-column width so all charts share the same base
 * metric, but full-width charts get more vertical space.
 */
const CHART_ASPECT_RATIO_FULL = 0.75

/** Gap between grid columns in pixels (Tailwind `gap-4`). */
const GRID_GAP = 16

/** Number of columns on md+ screens. */
const GRID_COLS = 3

interface DashboardGridProps<Filters extends FiltersDefinition> {
  items: DashboardItemType<Filters>[]
  filters: FiltersState<Filters>
}

/**
 * Responsive CSS grid: single column on mobile, 3 columns on md+.
 *
 * Chart cells all share the same pixel height, computed from the width
 * of a single grid column and a fixed aspect ratio. A `ResizeObserver`
 * on the grid container measures the available width and sets
 * `--chart-row-height` as a CSS custom property. Chart cells reference
 * this variable for their height, guaranteeing colSpan 1 and colSpan 2
 * charts in the same (or different) rows are always identical in height.
 *
 * Non-chart items (metrics, collections) do not use this height and
 * size naturally based on their content.
 */
export function DashboardGrid<Filters extends FiltersDefinition>({
  items,
  filters,
}: DashboardGridProps<Filters>) {
  const observerRef = useRef<ResizeObserver | null>(null)

  /**
   * Callback ref: attaches a ResizeObserver that computes the single-
   * column width and derives `--chart-row-height` from it.
   */
  const gridRef = useCallback((node: HTMLDivElement | null) => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }

    if (!node) return

    const updateHeight = () => {
      const gridWidth = node.clientWidth
      // On mobile (single column), columnWidth = full width
      // On md+ (3 columns), columnWidth = (gridWidth - gaps) / cols
      const isMd = window.matchMedia("(min-width: 768px)").matches
      const columnWidth = isMd
        ? (gridWidth - GRID_GAP * (GRID_COLS - 1)) / GRID_COLS
        : gridWidth
      const height = Math.round(columnWidth / CHART_ASPECT_RATIO)
      const heightFull = Math.round(columnWidth / CHART_ASPECT_RATIO_FULL)
      node.style.setProperty("--chart-row-height", `${height}px`)
      node.style.setProperty("--chart-row-height-full", `${heightFull}px`)
    }

    updateHeight()
    observerRef.current = new ResizeObserver(updateHeight)
    observerRef.current.observe(node)
  }, [])

  return (
    <div ref={gridRef} className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((item) => {
        const span = item.colSpan ?? 1
        const isChart = item.type === "chart"
        const heightVar =
          span === 3
            ? "var(--chart-row-height-full)"
            : "var(--chart-row-height)"
        return (
          <div
            key={item.id}
            className={cn(colSpanClasses[span])}
            style={isChart ? { height: heightVar } : undefined}
          >
            <DashboardGridItem item={item} filters={filters} />
          </div>
        )
      })}
    </div>
  )
}

/**
 * Dispatches rendering to the correct item component based on `item.type`.
 */
function DashboardGridItem<Filters extends FiltersDefinition>({
  item,
  filters,
}: {
  item: DashboardItemType<Filters>
  filters: FiltersState<Filters>
}) {
  switch (item.type) {
    case "chart":
      return <ChartItem item={item} filters={filters} />
    case "metric":
      return <MetricItem item={item} filters={filters} />
    case "collection":
      return <CollectionItem item={item} filters={filters} />
    default: {
      // Future-proof: unknown item types render an error
      const unknownItem = item as DashboardItemType<Filters>
      return (
        <DashboardItem
          title={unknownItem.title ?? "Unknown"}
          isLoading={false}
          error={
            new Error(
              `Unknown dashboard item type: "${(unknownItem as { type: string }).type}"`
            )
          }
          onRetry={() => {}}
        >
          {null}
        </DashboardItem>
      )
    }
  }
}
