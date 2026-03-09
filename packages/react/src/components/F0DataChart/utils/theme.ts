import { baseColors } from "../../../../../core/src/tokens/colors"
import { chartColor, echartsColorPalette, resolveCssColor } from "./colors"

// ---------------------------------------------------------------------------
// Chart theme — the single source of truth for all chart styling
// ---------------------------------------------------------------------------

/** Semantic colors used by every chart type */
export interface ChartThemeColors {
  /** Primary text — tooltip body, strong labels. Resolves from --neutral-80 */
  foreground: string
  /** Secondary text — legend labels. Resolves from --neutral-50 */
  foregroundSecondary: string
  /** Tertiary text — axis tick labels. Resolves from --neutral-40 */
  foregroundTertiary: string
  /** Grid / split lines, category axis line. Resolves from --neutral-10 */
  borderSecondary: string
  /** Axis pointer line, subtle dividers. Resolves from --neutral-30 */
  border: string
  /** Tooltip background color (CSS rgba string) */
  tooltipBackground: string
  /** Chart container background — used when chart needs to know its own bg */
  background: string
}

/** Tooltip visual configuration */
export interface ChartThemeTooltip {
  padding: number[]
  borderWidth: number
  borderRadius: number
  transitionDuration: number
  /** CSS box-shadow applied via extraCssText */
  boxShadow: string
  /** Full CSS background string (may include rgba + filters) */
  background: string
}

/** Axis pointer visual configuration */
export interface ChartThemeAxisPointer {
  color: string
  type: "dashed" | "solid"
}

/** Typography configuration */
export interface ChartThemeTextStyle {
  fontFamily: string
  fontSize: number
  fontWeight: number
}

/**
 * Complete chart theme — everything a chart type needs to render correctly.
 *
 * Resolved at runtime from CSS custom properties so that it automatically
 * adapts to light / dark mode. Every chart type hook receives this object
 * and passes it through to the shared option builders.
 */
export interface ChartTheme {
  /** Current mode — useful for conditional logic in chart-type hooks */
  mode: "light" | "dark"
  /** Semantic colors */
  colors: ChartThemeColors
  /** Default series color palette (hex strings) */
  palette: string[]
  /** Tooltip visual config */
  tooltip: ChartThemeTooltip
  /** Axis pointer visual config */
  axisPointer: ChartThemeAxisPointer
  /** Base text style applied to the entire ECharts instance */
  textStyle: ChartThemeTextStyle
}

// ---------------------------------------------------------------------------
// Light theme constants
// ---------------------------------------------------------------------------

const LIGHT_TOOLTIP: ChartThemeTooltip = {
  // text size 14px, padding 8px eje x 6 en eje y
  padding: [6, 8],
  borderWidth: 1,
  borderRadius: 10,
  transitionDuration: 0.2,
  boxShadow: "0px 12px 24px -14px rgba(13, 22, 37, 0.2)",
  background: "rgba(255, 255, 255, 0.85)",
}

// ---------------------------------------------------------------------------
// Dark theme constants
// ---------------------------------------------------------------------------

const DARK_TOOLTIP: ChartThemeTooltip = {
  padding: [8, 6],
  borderWidth: 1,
  borderRadius: 10,
  transitionDuration: 0.2,
  boxShadow: "0px 12px 24px -14px rgba(0, 0, 0, 0.4)",
  background: "rgba(15, 18, 25, 0.85)",
}

// ---------------------------------------------------------------------------
// Shared constants
// ---------------------------------------------------------------------------

const TEXT_STYLE: ChartThemeTextStyle = {
  fontFamily: "Inter, sans-serif",
  fontSize: 12,
  fontWeight: 500,
}

// ---------------------------------------------------------------------------
// Detection helpers
// ---------------------------------------------------------------------------

/**
 * Check whether the given element (or the document root) is inside a dark
 * mode context. Walks up the DOM via `closest(".dark")` so it detects:
 *  - `.dark` on `<html>` (production app)
 *  - `.dark` on `<body>` (Storybook)
 *  - `.dark` on any wrapper `<div>` (dark-island components)
 */
function isDarkMode(element?: Element | null): boolean {
  if (typeof document === "undefined") return false
  const target = element ?? document.documentElement
  return target.closest(".dark") !== null
}

// ---------------------------------------------------------------------------
// Theme resolver
// ---------------------------------------------------------------------------

/**
 * Resolve the complete chart theme from CSS custom properties.
 *
 * When `element` is provided, dark mode detection uses `element.closest(".dark")`
 * and CSS variable resolution uses `getComputedStyle(element)` — this ensures
 * the theme is correct even when the chart lives inside a localized dark island
 * (a parent `<div class="dark">`).
 *
 * Call this inside a React hook — the companion `useChartTheme()` hook
 * handles reactivity via a MutationObserver.
 *
 * The color palette is shared between light and dark modes because the
 * chromatic F0 tokens have enough saturation for both backgrounds. If
 * individual tokens need per-mode adjustment in the future, the palette
 * can be split here without touching any consumer code.
 */
export function resolveChartTheme(element?: Element | null): ChartTheme {
  const dark = isDarkMode(element)

  const colors: ChartThemeColors = {
    foreground: resolveCssColor(
      "--neutral-80",
      dark ? baseColors.white[80] : baseColors.grey[80],
      element
    ),
    foregroundSecondary: resolveCssColor(
      "--neutral-50",
      dark ? baseColors.white[50] : baseColors.grey[50],
      element
    ),
    foregroundTertiary: resolveCssColor(
      "--neutral-40",
      dark ? baseColors.white[40] : baseColors.grey[40],
      element
    ),
    borderSecondary: resolveCssColor(
      "--neutral-10",
      dark ? baseColors.white[10] : baseColors.grey[10],
      element
    ),
    border: resolveCssColor(
      "--neutral-30",
      dark ? baseColors.white[30] : baseColors.grey[30],
      element
    ),
    tooltipBackground: dark
      ? DARK_TOOLTIP.background
      : LIGHT_TOOLTIP.background,
    background: dark
      ? chartColor(baseColors.grey[100])
      : chartColor(baseColors.white[100]),
  }

  return {
    mode: dark ? "dark" : "light",
    colors,
    palette: echartsColorPalette,
    tooltip: dark ? DARK_TOOLTIP : LIGHT_TOOLTIP,
    axisPointer: {
      color: colors.border,
      type: "dashed",
    },
    textStyle: TEXT_STYLE,
  }
}
