import { forwardRef } from "react"

import { withDataTestId } from "@/lib/data-testid"

import type { F0DataChartProps } from "../../types"

export interface DataChartEmptyStateProps {
  /** Headline text — the prominent message the user reads first. */
  content: string
  /** Optional supporting copy shown below the headline. */
  description?: string
  /** @deprecated No longer used — the empty state renders text only. */
  chartType?: F0DataChartProps["type"]
}

/**
 * Card-less empty state used internally by `F0DataChart`. Renders the message
 * centered in the available space. Designed to drop inside any wrapper (e.g.
 * `DashboardItem`) without producing card-in-card framing.
 */
const _DataChartEmptyState = forwardRef<
  HTMLDivElement,
  DataChartEmptyStateProps
>(function DataChartEmptyState({ content, description }, ref) {
  return (
    <div
      ref={ref}
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
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
