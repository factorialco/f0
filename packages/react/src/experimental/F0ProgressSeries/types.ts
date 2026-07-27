import { WithDataTestIdProps } from "@/lib/data-testid"

export const f0ProgressSeriesSizes = ["sm", "md", "lg"] as const
export type F0ProgressSeriesSize = (typeof f0ProgressSeriesSizes)[number]

/**
 * One progress bar in the series — e.g. a period (Q1, Jan, 2026…). Each bar is
 * an independent progress bar (its own track + proportional fill), unlike a
 * category bar where the segments are parts of a single whole.
 */
export interface F0ProgressSeriesBar {
  /**
   * Attained value. `undefined` (or a non-finite value / `max <= 0`) renders an
   * empty/future bar: track only, no fill.
   */
  value: number | undefined
  /** Target. Defaults to 100. */
  max?: number
  /**
   * f0 color token for the fill (resolved via `getColor`). Defaults to
   * `"categorical-1"`. Ignored when `canceled` is set.
   */
  color?: string
  /** Renders a hatched grey bar (e.g. a cancelled period). */
  canceled?: boolean
  /** Title shown under the bar (e.g. "Q1", "Jan", "2026"). Optional. */
  label?: string
  /**
   * Short text shown under the bar next to the label. Optional; defaults to the
   * computed percentage (which may exceed 100%). Pass "" to hide it.
   */
  caption?: string
  /** Tooltip text. Defaults to `label · value / max (percentage)`. */
  tooltip?: string
}

/** Shared by the component and the `progressSeries` value-display cell. */
export interface F0ProgressSeriesOptions {
  /** 1..N bars (N up to 12: half-yearly = 2, quarterly = 4, monthly = 12). */
  bars: F0ProgressSeriesBar[]
  /**
   * Max labels rendered under the row. When there are more bars than this, the
   * labels are spread evenly (e.g. 12 bars → indices 0, 3, 6, 9). Defaults to 4.
   */
  maxLabels?: number
  /** Hide the per-bar tooltips. */
  hideTooltip?: boolean
  /**
   * Formats `value`/`max` in the default tooltip — the component only knows raw
   * numbers, so pass this to render currencies, separators, units…
   * Defaults to `String(value)`.
   */
  formatValue?: (value: number) => string
  /**
   * Renders a skeleton (same height as the loaded bar) instead of the series
   * while the data is still loading.
   */
  loading?: boolean
}

export interface F0ProgressSeriesProps
  extends F0ProgressSeriesOptions, WithDataTestIdProps {
  /** Bar height. Defaults to `"md"`. */
  size?: F0ProgressSeriesSize
}
