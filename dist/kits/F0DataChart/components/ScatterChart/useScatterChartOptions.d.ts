import { RefObject } from 'react';
import { F0DataChartScatterProps } from '../../types';
import { ChartResponsiveSize } from '../../utils/responsive';
import type * as echarts from "echarts";
/** Discrete responsive size for the scatter chart */
export type ScatterChartSize = ChartResponsiveSize;
/**
 * Converts typed scatter chart props into a full ECharts option object.
 *
 * Unlike bar and line this does not go through `buildBaseChartOptions`, which
 * always pairs a category axis with a value axis. A scatter plots two measures
 * against each other, so it builds two value axes and assembles the surrounding
 * chrome from the same shared builders.
 */
export declare function useScatterChartOptions(containerRef: RefObject<HTMLDivElement | null>, { series, pointSize, scaleAxes, showLegend, showGrid, valueFormatter, xValueFormatter, tooltipValueFormatter, xTooltipValueFormatter, xAxisName, yAxisName, echartsOptions, }: F0DataChartScatterProps, size: ScatterChartSize): echarts.EChartsOption;
