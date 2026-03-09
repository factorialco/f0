import { colord } from "colord"

import { baseColors } from "../../../../../core/src/tokens/colors"

// ---------------------------------------------------------------------------
// Chart color tokens — constrained to the chromatic baseColors palette
// ---------------------------------------------------------------------------

/**
 * The 15 chromatic color names from the F0 design token palette.
 * These are the only colors allowed for custom series / data-point colors.
 */
export const chartColorTokens = [
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel",
  "radical",
  "viridian",
  "orange",
  "red",
  "grass",
  "malibu",
  "yellow",
  "purple",
] as const

/** A valid chart color token — one of the 15 chromatic F0 base-color names. */
export type ChartColorToken = (typeof chartColorTokens)[number]

/**
 * Map from token name → HSL string (shade 50, the base variant).
 * Used internally to resolve a `ChartColorToken` to a hex color for Canvas.
 */
const chartColorHslMap: Record<ChartColorToken, string> = {
  lilac: baseColors.lilac[50],
  barbie: baseColors.barbie[50],
  smoke: baseColors.smoke[50],
  army: baseColors.army[50],
  flubber: baseColors.flubber[50],
  indigo: baseColors.indigo[50],
  camel: baseColors.camel[50],
  radical: baseColors.radical[50],
  viridian: baseColors.viridian[50],
  orange: baseColors.orange[50],
  red: baseColors.red[50],
  grass: baseColors.grass[50],
  malibu: baseColors.malibu[50],
  yellow: baseColors.yellow[50],
  purple: baseColors.purple[50],
}

/**
 * Resolve a `ChartColorToken` to a hex color string for Canvas rendering.
 *
 * @example
 * ```ts
 * resolveChartColorToken("viridian") // → "#0aa69b"
 * ```
 */
export function resolveChartColorToken(token: ChartColorToken): string {
  return chartColor(chartColorHslMap[token])
}

/**
 * Convert an HSL token value (e.g. "174 52% 38%") to a hex color string
 * that ECharts (Canvas) can render directly.
 */
export function chartColor(hslValue: string): string {
  return colord(`hsl(${hslValue})`).toHex()
}

/**
 * Resolve a CSS custom property to a hex color for Canvas rendering.
 *
 * When `element` is provided, `getComputedStyle(element)` is used so that
 * the resolved value respects any `.dark` ancestor in the DOM tree (the
 * `:root .dark` selector in `base.css` flips all semantic tokens).
 * Falls back to `document.documentElement` when no element is given, and
 * to the provided HSL token during SSR.
 */
export function resolveCssColor(
  varName: string,
  fallbackHsl: string,
  element?: Element | null
): string {
  if (typeof document === "undefined") {
    return chartColor(fallbackHsl)
  }
  const target = element ?? document.documentElement
  const raw = getComputedStyle(target).getPropertyValue(varName).trim()
  if (!raw) {
    return chartColor(fallbackHsl)
  }
  return colord(`hsl(${raw})`).toHex()
}

/**
 * 10-color palette for ECharts-based chart components,
 * derived from F0 design token baseColors.
 */
export const echartsColorPalette = [
  chartColor(baseColors.viridian[50]),
  chartColor(baseColors.purple[50]),
  chartColor(baseColors.barbie[50]),
  chartColor(baseColors.yellow[50]),
  chartColor(baseColors.indigo[50]),
  chartColor(baseColors.lilac[70]),
  chartColor(baseColors.smoke[60]),
  chartColor(baseColors.malibu[70]),
  chartColor(baseColors.grass[50]),
  chartColor(baseColors.red[60]),
]

/** Look up a palette color by index (wraps around) */
export function paletteColor(index: number): string {
  return echartsColorPalette[index % echartsColorPalette.length] ?? "#999"
}
