import type { StoryFn } from "@storybook/react-vite"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../F0DataChart"

export const ChartDecorator = (Story: StoryFn) => (
  <div className="h-[360px] w-[600px]">
    <Story />
  </div>
)

export const ChartDecoratorWide = (Story: StoryFn) => (
  <div className="h-[360px] w-[900px]">
    <Story />
  </div>
)

/**
 * Fixed-size decorators that mirror the responsive matrix in the AI Analytics
 * Figma (file `1smmEIugmR0CNeu7NvK33y`, node `10181-31958`). They map to the
 * three breakpoints of the line chart:
 *
 * - Small  (< 220px) — narrow chat card
 * - Medium (220–519px) — wide chat card
 * - Large  (≥ 520px) — dashboard cell
 */
export const ChartDecoratorSmall = (Story: StoryFn) => (
  <div className="h-[220px] w-[180px]">
    <Story />
  </div>
)

export const ChartDecoratorMedium = (Story: StoryFn) => (
  <div className="h-[260px] w-[320px]">
    <Story />
  </div>
)

export const ChartDecoratorLarge = (Story: StoryFn) => (
  <div className="h-[320px] w-[720px]">
    <Story />
  </div>
)

// ---------------------------------------------------------------------------
// Responsive snapshot grid
//
// A single Storybook page that renders the same chart in every breakpoint
// (small / medium / large) and series count (low / normal / large), exactly
// like the AI Analytics Figma matrix at file `1smmEIugmR0CNeu7NvK33y` node
// `10181-31958`. Used by both `Line.stories.tsx` and `Bar.stories.tsx` so
// the two chart families always document the same matrix.
// ---------------------------------------------------------------------------

const SIZES = [
  { label: "Small", widthClass: "w-[180px]" },
  { label: "Medium", widthClass: "w-[320px]" },
  { label: "Large", widthClass: "w-[720px]" },
] as const

const SERIES_COLUMNS = ["Low", "Normal", "Large"] as const

export type ResponsiveSnapshotProps = {
  /**
   * Returns the chart props for a given series-count column. Each chart in
   * the column shares the same data — only the wrapping container width
   * changes between rows.
   */
  getProps: (column: "low" | "normal" | "large") => F0DataChartProps
}

/**
 * Renders the 3×3 (size × series-count) responsive matrix described in the
 * Figma. Designed for visual review only — every cell renders an independent
 * `F0DataChart` instance so the responsive logic gets exercised end-to-end.
 */
export const ResponsiveSnapshot = ({ getProps }: ResponsiveSnapshotProps) => {
  const lowProps = getProps("low")
  const normalProps = getProps("normal")
  const largeProps = getProps("large")

  return (
    <div className="flex w-[1400px] flex-col gap-10 bg-f1-background-tertiary p-6">
      <div className="grid grid-cols-[50px_180px_320px_720px] items-center gap-6 text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
        <div />
        <div>Narrow (sm)</div>
        <div>Wide (md)</div>
        <div>Dashboard (lg)</div>
      </div>

      {[lowProps, normalProps, largeProps].map((props, rowIdx) => (
        <section
          key={SERIES_COLUMNS[rowIdx]}
          className="grid grid-cols-[50px_180px_320px_720px] items-start gap-6"
        >
          <h3 className="pt-3 text-sm font-semibold text-f1-foreground">
            {SERIES_COLUMNS[rowIdx]}
          </h3>
          {SIZES.map((size) => (
            <div
              key={size.label}
              className={`${size.widthClass} h-[260px] rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-3`}
            >
              <F0DataChart {...props} />
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
