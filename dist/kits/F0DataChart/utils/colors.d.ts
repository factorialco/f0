/**
 * The 15 chromatic color names from the F0 design token palette.
 * These are the only colors allowed for custom series / data-point colors.
 */
export declare const chartColorTokens: readonly ["lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel", "radical", "viridian", "orange", "red", "grass", "malibu", "yellow", "purple"];
/** A valid chart color token — one of the 15 chromatic F0 base-color names. */
export type ChartColorToken = (typeof chartColorTokens)[number];
/**
 * Resolve a `ChartColorToken` to a hex color string for Canvas rendering.
 *
 * @example
 * ```ts
 * resolveChartColorToken("viridian") // → "#0aa69b"
 * ```
 */
export declare function resolveChartColorToken(token: ChartColorToken): string;
/**
 * Convert an HSL token value (e.g. "174 52% 38%") to a hex color string
 * that ECharts (Canvas) can render directly.
 */
export declare function chartColor(hslValue: string): string;
/**
 * Resolve a CSS custom property to a hex color for Canvas rendering.
 *
 * When `element` is provided, `getComputedStyle(element)` is used so that
 * the resolved value respects any `.dark` ancestor in the DOM tree (the
 * `:root .dark` selector in `base.css` flips all semantic tokens).
 * Falls back to `document.documentElement` when no element is given, and
 * to the provided HSL token during SSR.
 */
export declare function resolveCssColor(varName: string, fallbackHsl: string, element?: Element | null): string;
/**
 * 10-color palette for ECharts-based chart components,
 * derived from F0 design token baseColors.
 */
export declare const echartsColorPalette: string[];
/** Look up a palette color by index (wraps around) */
export declare function paletteColor(index: number): string;
/** Darker variant of a hex color, for the part of a mark that passed its target */
export declare function darkenChartColor(color: string): string;
/** Linearly interpolate between two hex colors */
export declare function lerpColor(from: string, to: string, t: number): string;
/**
 * Resolve the color for a single data point (pie, funnel, etc.).
 *
 * - Per-point `color` override takes priority.
 * - Series-level `color` override takes second priority.
 * - When `colorScale` is provided, interpolates between light and base color.
 * - Default: uses the palette color by index.
 */
export declare function resolveDataPointColor(pointColor: ChartColorToken | undefined, seriesColor: string | undefined, index: number, colorScale?: {
    ratio: number;
    lightColor: string;
    baseColor: string;
}): string;
