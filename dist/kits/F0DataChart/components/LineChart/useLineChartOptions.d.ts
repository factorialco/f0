import { RefObject } from 'react';
import { F0DataChartLineProps } from '../../types';
import { ChartResponsiveSize } from '../../utils/responsive';
import * as echarts from "echarts";
/** Discrete responsive size for the line chart */
export type LineChartSize = ChartResponsiveSize;
/**
 * Converts typed line chart props into a full ECharts option object.
 */
export declare function useLineChartOptions(containerRef: RefObject<HTMLDivElement | null>, { categories, series, lineType, showArea, showDots, showLegend, showGrid, showLabels, valueFormatter, tooltipValueFormatter, categoryFormatter, echartsOptions, }: F0DataChartLineProps, size: LineChartSize): echarts.EChartsOption;
