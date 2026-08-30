import { ChartTheme } from './theme';
import type * as echarts from "echarts";
interface CategoryAxisOptions {
    data: string[];
    theme: ChartTheme;
    formatter?: (value: string) => string;
    /** Axis length in pixels — used to auto-compute label interval */
    axisLength?: number;
    /**
     * Minimum pixels each label needs along the axis before labels start being
     * skipped. Defaults to a horizontal-text width; horizontal charts (stacked
     * labels on the Y axis) should pass a line-height instead.
     */
    minLabelSpace?: number;
    /**
     * How many categories the axis actually draws, when that is fewer than
     * `data.length` — a horizontal chart with more rows than fit shows a window
     * of them and scrolls (see `horizontalCategoryWindow`). Skipping labels has
     * to be decided from the rows on screen; measuring against the whole dataset
     * thins labels for crowding the reader never sees.
     */
    visibleCount?: number;
    /**
     * Whether to leave space at the edges of the category axis.
     * - `true` (default for ECharts) — centres categories with padding at edges.
     *   Appropriate for bar charts where bars need centering space.
     * - `false` — first/last data points sit flush against the axis edges.
     *   Appropriate for line charts.
     */
    boundaryGap?: boolean;
    /** Max label width in pixels — when set, labels are truncated with ellipsis */
    maxLabelWidth?: number;
    /** Whether the axis (line, ticks, labels) is rendered at all */
    show?: boolean;
    /**
     * Enable the smart layout (compute `interval` + per-label `width` so all
     * labels appear with ellipsis instead of being skipped). Used for the
     * line/bar X axis. The legacy fixed `maxLabelWidth` path stays available
     * for callers that need a hard cap.
     */
    smartLayout?: boolean;
    /**
     * When true, anchor the first label to the left edge and the last label to
     * the right edge of the axis. Required for `boundaryGap: false` charts
     * (line charts) so that the leftmost/rightmost label cannot overflow the
     * container. The label width is automatically tightened so the anchored
     * edges don't overlap their centered neighbours.
     */
    edgeAligned?: boolean;
}
/**
 * Ceiling on the width labels may take at this container size.
 *
 * Exported for charts that measure their own labels and need to clamp the
 * result — the fallback below applies to callers that don't.
 */
export declare function labelWidthCap(containerWidth: number | undefined): number;
/**
 * Compute how many labels to skip so that they don't overlap.
 * Returns 0 (show every label) when there's enough room, or N to
 * show every (N+1)th label.
 *
 * Kept for non-line chart consumers (e.g. heatmap) that don't need the
 * smarter truncation layout.
 */
export declare function computeLabelInterval(categoryCount: number, axisLength: number | undefined, minSpace?: number): number | undefined;
interface CategoryAxisLayout {
    /** ECharts `axisLabel.interval` — 0 = show every label */
    interval: number;
    /** Max width per label in pixels (used as `axisLabel.width` for truncation) */
    labelWidth: number;
}
/**
 * Smart category axis layout: prefer showing every label with ellipsis
 * truncation. Only fall back to skipping labels when even a 3-char truncated
 * label wouldn't fit.
 *
 * `edgeAligned` (line charts with `boundaryGap: false`): the first and last
 * labels are anchored to the chart edges, so the centered neighbour two ticks
 * away constrains the maximum width. To avoid overlap we cap the width at
 * `step * 0.65`, which leaves enough breathing room on both sides.
 */
export declare function computeCategoryAxisLayout(categoryCount: number, axisLength: number | undefined, edgeAligned: boolean): CategoryAxisLayout | undefined;
/** Build a styled category axis matching F0 chart conventions */
export declare function buildCategoryAxis({ data, theme, formatter, axisLength, minLabelSpace, boundaryGap, maxLabelWidth, show, smartLayout, edgeAligned, visibleCount, }: CategoryAxisOptions): {
    triggerEvent?: boolean | undefined;
    axisLine: {
        show: boolean;
        lineStyle: {
            color: string;
        };
    };
    axisTick: {
        show: boolean;
    };
    axisLabel: {
        width?: number | undefined;
        overflow?: "truncate" | undefined;
        ellipsis?: string | undefined;
        formatter?: ((_value: string | number) => string) | undefined;
        interval?: number | undefined;
        alignMinLabel?: "left" | undefined;
        alignMaxLabel?: "right" | undefined;
        showMinLabel?: boolean | undefined;
        showMaxLabel?: boolean | undefined;
        show: boolean;
        fontSize: number;
        fontWeight: number;
        color: string;
        hideOverlap: boolean;
        margin: number;
    };
    boundaryGap?: boolean | undefined;
    type: "category";
    data: string[];
};
interface ValueAxisOptions {
    theme: ChartTheme;
    showGrid: boolean;
    formatter?: (value: number) => string;
    /** Max label width in pixels — when set, labels are truncated with ellipsis */
    maxLabelWidth?: number;
    /** Whether the axis labels are rendered. Grid lines stay controlled by showGrid. */
    show?: boolean;
    /** Suggested number of value-axis segments — fewer ticks → fewer grid lines. */
    splitNumber?: number;
    /** Pins the axis maximum, replacing ECharts' rounded-up nice value. */
    max?: number;
    /**
     * Which edge the axis labels sit on. Horizontal charts pass `"top"`: their
     * value axis is the X axis, and a tall category list pushes a bottom axis
     * far away from the first rows a reader starts on.
     */
    position?: "top" | "bottom" | "left" | "right";
    /**
     * Fit the axis to the data range instead of anchoring it at zero. ECharts
     * defaults this off, which is right for bar/line (a bar not starting at zero
     * misstates its magnitude) but collapses a two-measure plot whose values sit
     * far from the origin.
     */
    scale?: boolean;
    /**
     * Anchor the first and last labels to the axis ends so they cannot overflow
     * the chart container — the value-axis counterpart of `edgeAligned` on
     * {@link buildCategoryAxis}. Needed when the axis bound coincides with the
     * plot edge, which is the normal case for a scaled axis.
     */
    alignEdgeLabels?: boolean;
}
/** Build a styled value axis with optional solid grid lines */
export declare function buildValueAxis({ theme, showGrid, formatter, maxLabelWidth, show, splitNumber, max, position, scale, alignEdgeLabels, }: ValueAxisOptions): {
    splitLine: {
        show: boolean;
        lineStyle: {
            type: "solid";
            color: string;
        };
    };
    triggerEvent?: boolean | undefined;
    axisLine: {
        show: boolean;
    };
    axisTick: {
        show: boolean;
    };
    axisLabel: {
        width?: number | undefined;
        overflow?: "truncate" | undefined;
        ellipsis?: string | undefined;
        formatter?: ((_value: string | number) => string) | undefined;
        alignMinLabel?: "left" | undefined;
        alignMaxLabel?: "right" | undefined;
        show: boolean;
        fontSize: number;
        fontWeight: number;
        color: string;
        hideOverlap: boolean;
    };
    scale?: boolean | undefined;
    position?: "top" | "left" | "bottom" | "right" | undefined;
    max?: number | undefined;
    splitNumber?: number | undefined;
    type: "value";
};
interface LegendOptions {
    show: boolean;
    data: string[];
    theme: ChartTheme;
}
/**
 * Build the standard F0 chart legend: circle icons, centered at bottom,
 * with a 16px gap between chart area and legend.
 *
 * Uses ECharts' built-in scroll legend so that when items overflow the
 * available width, the legend is paginated with left/right arrows. Only
 * the legend pages — the chart area is unaffected.
 */
export declare function buildLegend({ show, data, theme, }: LegendOptions): echarts.EChartsOption["legend"];
interface GridOptions {
    showLegend: boolean;
}
/** Standard chart grid — minimal padding, containLabel keeps axis labels visible */
export declare function buildGrid({ showLegend }: GridOptions): {
    left: number;
    right: number;
    top: number;
    bottom: number;
    containLabel: boolean;
};
/** Default emphasis config: disables label and removes shadow */
export declare const DEFAULT_EMPHASIS: {
    label: {
        show: boolean;
    };
    itemStyle: {
        shadowBlur: number;
        shadowOffsetX: number;
        shadowColor: string;
    };
};
interface TooltipOptions {
    theme: ChartTheme;
    /** Filter out series whose name matches this predicate */
    filterSeries?: (seriesName: string) => boolean;
    valueFormatter?: (value: number) => string;
    /** Custom formatter — replaces the default one entirely */
    customFormatter?: (params: unknown) => string;
}
/** Escape consumer-provided tooltip text before inserting it into HTML. */
export declare function escapeTooltipText(value: unknown): string;
/** A context line below the headline value, e.g. "14.1% of total". */
export interface ValueTooltipRow {
    /** Emphasized leading text — a value, percentage, or delta. */
    value: string;
    /** Trailing description, e.g. "of total", "target", "from previous". */
    label: string;
    /** Color for the emphasized part. Defaults to the primary foreground. */
    color?: string;
    /** ECharts' colored dot, for rows that stand for a series. Trusted HTML. */
    marker?: string;
    /**
     * Render the value at headline size instead of the compact row size. For
     * charts whose data point has no single headline value but whose numbers
     * still deserve the emphasis every other chart's `value` gets — a scatter
     * point is two coordinates, neither subordinate to the other.
     */
    size?: "large";
}
export interface ValueTooltipContent {
    /**
     * ECharts' own colored dot. Trusted HTML generated per data point (it
     * reflects per-point color overrides), so it is the one part rendered
     * unescaped. Everything else is escaped.
     */
    marker?: string;
    /** Series, slice, or stage name. */
    title?: string;
    /** Secondary line under the title — usually the category. */
    subtitle?: string;
    /** Headline value, already formatted. Omit for tooltips that only list rows. */
    value?: string;
    /** Context lines below the headline. Falsy entries are skipped. */
    rows?: (ValueTooltipRow | undefined | false)[];
}
/**
 * Render the shared F0 chart tooltip: colored dot + name, category, a large
 * value, then context rows. Every chart type uses this so a tooltip reads the
 * same regardless of which visualization the user is hovering.
 */
export declare function renderValueTooltip({ marker, title, subtitle, value, rows }: ValueTooltipContent, theme: ChartTheme): string;
/**
 * The formatter every chart type uses for the values in its tooltip.
 *
 * A tooltip reads the number the same way the rest of the chart does, so it
 * takes `valueFormatter` — the one that writes the axis and the labels. That is
 * what carries a unit across: a chart whose axis says "€46,390.86" would
 * otherwise hover as "46390.863", dropping the currency and exposing raw
 * float precision.
 *
 * `tooltipValueFormatter` overrides it, for the case where the axis has to stay
 * compact ("125k") but the tooltip should be exact ("125,000"). With neither,
 * the value falls back to a plain localized number.
 */
export declare function tooltipValueFormat(tooltipValueFormatter?: (value: number) => string, valueFormatter?: (value: number) => string): (value: number) => string;
/**
 * Build a tooltip dot in an explicit color, matching the one ECharts injects
 * as `params.marker`. Needed where ECharts' own marker uses the palette rather
 * than the color actually painted (e.g. the gauge arc).
 */
export declare function renderMarker(color: string): string;
/**
 * Format a signed percentage delta ("+22.2%") and pick its semantic color.
 * Returns `undefined` when there is nothing meaningful to compare against.
 */
export declare function deltaRow(value: number, previous: number | undefined, label: string, theme: ChartTheme): ValueTooltipRow | undefined;
/**
 * Build a fully styled axis-triggered tooltip that optionally filters out
 * ghost series (e.g. target gradient bars).
 *
 * Replicates the visual style from the old f0.light theme:
 * - padding, borderWidth, borderRadius
 * - frosted glass background (light and dark variants)
 * - smart position function (flips left/right at chart midpoint)
 * - dashed axis pointer line
 * - transition duration
 */
export declare function buildTooltip({ theme, filterSeries, valueFormatter, customFormatter, }: TooltipOptions): echarts.EChartsOption["tooltip"];
interface ItemTooltipOptions {
    theme: ChartTheme;
    formatter: (params: unknown) => string;
}
/**
 * Build a styled item-triggered tooltip for non-axis charts (pie, funnel, etc.).
 *
 * Shares the same visual style as `buildTooltip` (frosted glass, shadows, etc.)
 * but uses `trigger: "item"` and accepts a custom `formatter`.
 */
export declare function buildItemTooltip({ theme, formatter, }: ItemTooltipOptions): echarts.EChartsOption["tooltip"];
/**
 * Assemble the axes for a chart that supports both vertical and horizontal
 * orientations. Returns `{ xAxis, yAxis }` with proper ECharts casts.
 */
export declare function buildAxes({ isVertical, categories, theme, showGrid, valueFormatter, categoryFormatter, containerWidth, containerHeight, boundaryGap, showCategoryAxis, showValueAxis, categoryMaxLabelWidth, categoryVisibleCount, valueAxisSplitNumber, valueAxisMax, }: {
    isVertical: boolean;
    categories: string[];
    theme: ChartTheme;
    showGrid: boolean;
    valueFormatter?: (value: number) => string;
    categoryFormatter?: (value: string) => string;
    containerWidth?: number;
    containerHeight?: number;
    boundaryGap?: boolean;
    /** Hide the category axis labels and line entirely (grid space is reclaimed by ECharts) */
    showCategoryAxis?: boolean;
    /** Hide the value axis labels (grid lines stay controlled by `showGrid`) */
    showValueAxis?: boolean;
    /**
     * When set, the category axis will truncate long labels with ellipsis.
     * Used by line charts at the `lg` breakpoint so long category names like
     * "September" still get rendered horizontally and truncate gracefully.
     */
    categoryMaxLabelWidth?: number;
    /**
     * Categories the axis actually draws, when a horizontal chart windows its
     * rows. Forwarded to `buildCategoryAxis` as `visibleCount`.
     */
    categoryVisibleCount?: number;
    /** Suggested number of value-axis segments — fewer ticks → fewer grid lines. */
    valueAxisSplitNumber?: number;
    /**
     * Pins the value axis maximum instead of letting ECharts round up to a nice
     * number. Set by a chart whose value-axis labels are hidden, where that
     * rounding buys no readable ticks and only costs plot space.
     */
    valueAxisMax?: number;
}): {
    xAxis: echarts.EChartsOption["xAxis"];
    yAxis: echarts.EChartsOption["yAxis"];
};
interface BaseChartOptionsParams {
    /** Category axis labels */
    categories: string[];
    /** Resolved chart theme */
    theme: ChartTheme;
    /** ECharts series array (bar or line) — already built by the caller */
    series: echarts.EChartsOption["series"];
    /** Legend entry names (main series only, excluding ghost/target series) */
    legendData: string[];
    /** Whether the category axis is horizontal (true) or vertical (false) */
    isVertical: boolean;
    /** Show grid lines on the value axis */
    showGrid: boolean;
    /** Show the legend below the chart */
    showLegend: boolean;
    /** Format value axis labels */
    valueFormatter?: (value: number) => string;
    /** Format category axis labels */
    categoryFormatter?: (value: string) => string;
    /** Predicate to filter series out of the tooltip (e.g. target ghost bars) */
    tooltipFilterSeries?: (seriesName: string) => boolean;
    /** Custom tooltip formatter — when provided, replaces the default one */
    tooltipFormatter?: (params: unknown) => string;
    /** Value formatter used only in the tooltip (defaults to `valueFormatter`) */
    tooltipValueFormatter?: (value: number) => string;
    /** User-provided ECharts overrides (shallow-merged on top) */
    echartsOptions?: Partial<echarts.EChartsOption>;
    /** Container width in pixels — used to auto-compute category label interval */
    containerWidth?: number;
    /** Container height in pixels — used for horizontal orientation label interval */
    containerHeight?: number;
    /** Whether to leave space at the edges of the category axis */
    boundaryGap?: boolean;
    /** Whether the category axis labels/line are rendered (default true) */
    showCategoryAxis?: boolean;
    /** Whether the value axis labels are rendered (default true) */
    showValueAxis?: boolean;
    /** Optional ellipsis truncation width for the category axis labels */
    categoryMaxLabelWidth?: number;
    /**
     * Categories the axis actually draws, when a horizontal chart windows its
     * rows — label skipping is decided from these rather than the whole dataset.
     */
    categoryVisibleCount?: number;
    /** Suggested number of value-axis segments — fewer ticks → fewer grid lines. */
    valueAxisSplitNumber?: number;
    /**
     * Pins the value axis maximum instead of letting ECharts round up to a nice
     * number. Set by a chart whose value-axis labels are hidden.
     */
    valueAxisMax?: number;
}
/**
 * Assemble a complete ECharts option from pre-built series.
 *
 * Both bar and line hooks delegate here so that axes, legend, grid, tooltip,
 * and emphasis are built in exactly one place. Future chart types (pie,
 * scatter, etc.) should also delegate here for consistent styling.
 */
export declare function buildBaseChartOptions({ categories, theme, series, legendData, isVertical, showGrid, showLegend, valueFormatter, categoryFormatter, tooltipFilterSeries, tooltipFormatter, tooltipValueFormatter, echartsOptions, containerWidth, containerHeight, boundaryGap, showCategoryAxis, showValueAxis, categoryMaxLabelWidth, categoryVisibleCount, valueAxisSplitNumber, valueAxisMax, }: BaseChartOptionsParams): echarts.EChartsOption;
export {};
