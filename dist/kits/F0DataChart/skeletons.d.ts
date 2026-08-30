interface BarChartSkeletonProps {
    /** Bar orientation. @default "vertical" */
    orientation?: "vertical" | "horizontal";
    /** Show stacked bar segments. @default false */
    stacked?: boolean;
    /** Show legend below chart. @default true */
    showLegend?: boolean;
}
/**
 * Skeleton for bar chart content area.
 *
 * - `orientation: "vertical"` (default): vertical bars with varying heights.
 * - `orientation: "horizontal"`: horizontal bars extending left-to-right.
 * - `stacked: true`: each bar has 2–3 stacked segments.
 */
export declare function BarChartSkeleton({ orientation, stacked, showLegend, }?: BarChartSkeletonProps): import("react").JSX.Element;
interface LineChartSkeletonProps {
    /** Line interpolation type. @default "linear" */
    lineType?: "linear" | "smooth" | "step";
    /** Show gradient area fill below line. @default true */
    showArea?: boolean;
    /** Show data point dots on the line. @default false */
    showDots?: boolean;
    /** Show legend below chart. @default true */
    showLegend?: boolean;
}
/**
 * Skeleton for line chart content area.
 *
 * - `lineType`: controls the SVG path shape (smooth curves, straight lines, or steps).
 * - `showArea: true` (default): gradient fill below the line.
 * - `showArea: false`: line only, no fill.
 * - `showDots: true`: SVG circles at each data point.
 */
export declare function LineChartSkeleton({ lineType, showArea, showDots, showLegend, }?: LineChartSkeletonProps): import("react").JSX.Element;
interface ScatterChartSkeletonProps {
    /** Show the legend row below the plot. @default true */
    showLegend?: boolean;
}
/** Skeleton for scatter chart content area — points with no connecting path. */
export declare function ScatterChartSkeleton({ showLegend, }?: ScatterChartSkeletonProps): import("react").JSX.Element;
interface FunnelChartSkeletonProps {
    /** Funnel orientation. @default "horizontal" */
    orient?: "horizontal" | "vertical";
    /** Sort direction. @default "descending" */
    sort?: "descending" | "ascending" | "none";
    /** Show legend below chart. @default true */
    showLegend?: boolean;
}
/**
 * Skeleton for funnel chart content area.
 *
 * - `orient: "horizontal"` (default): left-to-right trapezoids with
 *   decreasing heights, centered vertically.
 * - `orient: "vertical"`: top-to-bottom trapezoids with decreasing widths,
 *   centered horizontally.
 * - `sort: "ascending"`: reverses stage order (smallest first).
 */
export declare function FunnelChartSkeleton({ orient, sort, showLegend, }?: FunnelChartSkeletonProps): import("react").JSX.Element;
interface PieChartSkeletonProps {
    /** Show legend below chart. @default true */
    showLegend?: boolean;
    /** Inner radius percentage. 0 = pie, >0 = donut. @default 0 */
    innerRadius?: number;
}
/**
 * Skeleton for pie/donut chart content area.
 *
 * - `innerRadius: 0` (default): solid pie circle.
 * - `innerRadius > 0`: donut with a hollow center.
 */
export declare function PieChartSkeleton({ showLegend, innerRadius, }?: PieChartSkeletonProps): import("react").JSX.Element;
interface RadarChartSkeletonProps {
    /** Show legend below chart. @default true */
    showLegend?: boolean;
}
/**
 * Skeleton for radar chart content area.
 *
 * Renders a hexagonal shape with concentric rings and radial lines.
 */
export declare function RadarChartSkeleton({ showLegend, }?: RadarChartSkeletonProps): import("react").JSX.Element;
/**
 * Skeleton for gauge chart content area.
 *
 * Renders a 270° arc with rounded caps and a large value placeholder,
 * matching the real gauge component style (width 18, roundCap, centered value).
 */
export declare function GaugeChartSkeleton(): import("react").JSX.Element;
/**
 * Skeleton for heatmap chart content area.
 *
 * Renders a 5×4 grid of rectangles with varied opacities to simulate
 * heatmap data, plus placeholder axis labels.
 */
export declare function HeatmapChartSkeleton(): import("react").JSX.Element;
export {};
