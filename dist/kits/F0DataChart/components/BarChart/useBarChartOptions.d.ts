import { RefObject } from 'react';
import { F0DataChartBarProps, F0DataChartBarSeries } from '../../types';
import { ChartResponsiveSize } from '../../utils/responsive';
import * as echarts from "echarts";
/**
 * Height (px) a horizontal chart needs to draw every category at
 * {@link EXPANDED_MIN_BAR_THICKNESS}, or `undefined` when the chart isn't in
 * `showAllCategories` mode (where the window handles density instead).
 *
 * Applied by `BarChart` as a `min-height` on the ECharts host inside a
 * scrolling wrapper: below its container the chart still fills it and the bars
 * come out thicker; above it the container scrolls.
 */
export declare function expandedHorizontalChartHeight(props: Pick<F0DataChartBarProps, "orientation" | "stacked" | "categories" | "showAllCategories"> & {
    series?: F0DataChartBarSeries[];
}): number | undefined;
/**
 * How many categories a horizontal chart can show at
 * {@link MIN_BAR_THICKNESS}, or `undefined` when every category already fits.
 *
 * The alternative — growing the canvas past its container and letting the DOM
 * scroll — drags the value axis and legend along with the rows, because ECharts
 * paints them into the same canvas. Windowing the category axis instead keeps
 * the axis pinned to the top of the chart and the legend to the bottom, and
 * only the rows move.
 */
export declare function horizontalCategoryWindow({ isVertical, windowCategories, showAllCategories, stacked, categoryCount, seriesCount, containerHeight, }: {
    isVertical: boolean;
    windowCategories: boolean;
    showAllCategories: boolean;
    stacked: boolean;
    categoryCount: number;
    seriesCount: number;
    containerHeight: number | undefined;
}): number | undefined;
/** Discrete responsive size for the bar chart (mirrors LineChart's `LineChartSize`) */
export type BarChartSize = ChartResponsiveSize;
/**
 * Converts typed bar chart props into a full ECharts option object.
 */
export declare function useBarChartOptions(containerRef: RefObject<HTMLDivElement | null>, { categories, series, orientation, stacked, highlightOverachievement, showTargetProgress, showLegend, showGrid, showLabels, hideOverflowingLabels, labelFitPadding, hideAllLabelsOnOverflow, windowCategories, showAllCategories, valueFormatter, tooltipValueFormatter, categoryFormatter, labelFontSize, valueAxisSplitNumber, echartsOptions, }: F0DataChartBarProps, size: BarChartSize, 
/**
 * Which series the legend has selected, or `null` for all of them. Numbers
 * derived from more than one series are computed from these, so they keep
 * describing the bars the reader can actually see.
 */
legendSelection?: Record<string, boolean> | null): echarts.EChartsOption;
