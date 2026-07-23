import { forwardRef, type ReactNode } from "react"

import { withDataTestId } from "@/lib/data-testid"

import type { F0DataChartProps } from "../../types"

import {
  BarChartSkeleton,
  CategoryBarChartSkeleton,
  FunnelChartSkeleton,
  GaugeChartSkeleton,
  HeatmapChartSkeleton,
  LineChartSkeleton,
  PieChartSkeleton,
  RadarChartSkeleton,
} from "../../skeletons"

export interface DataChartEmptyStateProps {
  /** Headline text — the prominent message the user reads first. */
  content: string
  /** Optional supporting copy shown below the headline. */
  description?: string
  /** Drives the background skeleton illustration. */
  chartType: F0DataChartProps["type"]
}

const skeletonByType: Record<F0DataChartProps["type"], () => ReactNode> = {
  bar: () => <BarChartSkeleton showLegend={false} />,
  line: () => <LineChartSkeleton showLegend={false} />,
  funnel: () => <FunnelChartSkeleton showLegend={false} />,
  pie: () => <PieChartSkeleton showLegend={false} />,
  radar: () => <RadarChartSkeleton showLegend={false} />,
  gauge: () => <GaugeChartSkeleton />,
  heatmap: () => <HeatmapChartSkeleton />,
  categoryBar: () => <CategoryBarChartSkeleton showLegend={false} />,
}

/**
 * Card-less empty state used internally by `F0DataChart`. Renders the matching
 * chart skeleton (statically — animation disabled) as a faded background, with
 * the message centered on top. Designed to drop inside any wrapper (e.g.
 * `DashboardItem`) without producing card-in-card framing.
 */
const _DataChartEmptyState = forwardRef<
  HTMLDivElement,
  DataChartEmptyStateProps
>(function DataChartEmptyState({ content, description, chartType }, ref) {
  return (
    <div
      ref={ref}
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      {/*
        The skeleton is rendered statically here — `[&_*]:animate-none`
        disables the `animate-pulse` baked into both the skeleton wrappers
        and the underlying `<Skeleton>` primitives. The lack of pulse is
        what tells the user "this isn't loading, it's empty".

        We cap the skeleton size so a fullscreen dashboard tile doesn't
        stretch the illustration to absurd proportions. The wrapper is
        centered absolutely; on small chart cards it still fills normally.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-50 [&_*]:animate-none"
      >
        <div className="max-w-content h-full max-h-[360px] w-full">
          {skeletonByType[chartType]()}
        </div>
      </div>
      <div className="relative flex flex-col items-center gap-1 px-6 text-center">
        <p className="text-lg font-medium text-f1-foreground">{content}</p>
        {description && (
          <p className="text-md max-w-sm text-f1-foreground-secondary">
            {description}
          </p>
        )}
      </div>
    </div>
  )
})

export const DataChartEmptyState = withDataTestId(_DataChartEmptyState)
