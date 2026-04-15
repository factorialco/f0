/**
 * Shared responsive size resolver for every chart in the F0DataChart kit.
 *
 * Derived from the AI Analytics Figma at file `1smmEIugmR0CNeu7NvK33y` (e.g.
 * Bar/Line node `10181-31958`, Heatmap node `10218-20575`). Every chart hook
 * imports `resolveChartSize` from here so the kit behaves consistently across
 * the same three breakpoints:
 *
 * - `sm` (< 220px)  → narrow chat card: minimal chrome.
 * - `md` (220–519px) → wide chat card: legend + value-side axes.
 * - `lg` (≥ 520px)  → dashboard cell: full chrome (legend + both axes).
 */
export type ChartResponsiveSize = "sm" | "md" | "lg"

export const SM_MAX_WIDTH = 220
export const MD_MAX_WIDTH = 520

/**
 * Map a measured container width to a discrete breakpoint.
 *
 * Until the container has been measured (`width === 0`) we render the largest
 * layout — this avoids a flash of "small" chrome on the first frame for
 * charts that will end up large once measured.
 */
export function resolveChartSize(width: number): ChartResponsiveSize {
  if (width === 0) return "lg"
  if (width < SM_MAX_WIDTH) return "sm"
  if (width < MD_MAX_WIDTH) return "md"
  return "lg"
}
