/** Semantic colors used by every chart type */
export interface ChartThemeColors {
    /** Primary text — tooltip body, strong labels. Resolves from --neutral-80 */
    foreground: string;
    /** Secondary text — legend labels. Resolves from --neutral-50 */
    foregroundSecondary: string;
    /** Tertiary text — axis tick labels. Resolves from --neutral-40 */
    foregroundTertiary: string;
    /** Grid / split lines, category axis line. Resolves from --neutral-10 */
    borderSecondary: string;
    /** Axis pointer line, subtle dividers. Resolves from --neutral-30 */
    border: string;
    /** Tooltip background color (CSS rgba string) */
    tooltipBackground: string;
    /** Page-level background token for the active mode */
    background: string;
    /**
     * The color actually painted behind the chart — the nearest ancestor with a
     * non-transparent background, falling back to {@link background}. Use this
     * when a chart needs to blend into its own surface (a tinted card, a modal)
     * rather than into the page.
     *
     * Always set by {@link resolveChartTheme}; optional only so that themes built
     * by hand (test fixtures, consumer overrides) keep compiling — read it as
     * `containerBackground ?? background`.
     */
    containerBackground?: string;
    /**
     * Positive delta text (e.g. tooltip "+x% from previous"). Resolves from
     * --positive-70. Optional so a hand-built theme stays valid — tooltip rows
     * fall back to `foreground` when it is absent.
     */
    positive?: string;
    /** Negative delta text. Resolves from --critical-70. Optional, as `positive`. */
    critical?: string;
}
/** Tooltip visual configuration */
export interface ChartThemeTooltip {
    padding: number[];
    borderWidth: number;
    borderRadius: number;
    transitionDuration: number;
    /** CSS box-shadow applied via extraCssText */
    boxShadow: string;
    /** Full CSS background string (may include rgba + filters) */
    background: string;
}
/** Axis pointer visual configuration */
export interface ChartThemeAxisPointer {
    color: string;
    type: "dashed" | "solid";
}
/** Typography configuration */
export interface ChartThemeTextStyle {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
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
    mode: "light" | "dark";
    /** Semantic colors */
    colors: ChartThemeColors;
    /** Default series color palette (hex strings) */
    palette: string[];
    /** Tooltip visual config */
    tooltip: ChartThemeTooltip;
    /** Axis pointer visual config */
    axisPointer: ChartThemeAxisPointer;
    /** Base text style applied to the entire ECharts instance */
    textStyle: ChartThemeTextStyle;
}
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
export declare function resolveChartTheme(element?: Element | null): ChartTheme;
