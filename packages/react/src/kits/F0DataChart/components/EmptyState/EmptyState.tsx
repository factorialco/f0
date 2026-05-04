import { forwardRef, type ReactNode } from "react"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { withDataTestId } from "@/lib/data-testid"

import type { F0DataChartProps } from "../../types"

import {
  BarChartSkeleton,
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
  /** Optional CTA button label. */
  buttonLabel?: string
  buttonIcon?: IconType
  buttonAction?: () => void
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
>(function DataChartEmptyState(
  { content, description, buttonLabel, buttonIcon, buttonAction, chartType },
  ref
) {
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
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 [&_*]:animate-none"
      >
        {skeletonByType[chartType]()}
      </div>
      <div className="relative flex flex-col items-center gap-1 px-6 text-center">
        <p className="text-lg font-medium text-f1-foreground">{content}</p>
        {description && (
          <p className="text-md max-w-sm text-f1-foreground-secondary">
            {description}
          </p>
        )}
        {buttonLabel && (
          <div className="mt-3">
            <F0Button
              label={buttonLabel}
              icon={buttonIcon}
              variant="default"
              onClick={buttonAction}
            />
          </div>
        )}
      </div>
    </div>
  )
})

export const DataChartEmptyState = withDataTestId(_DataChartEmptyState)
