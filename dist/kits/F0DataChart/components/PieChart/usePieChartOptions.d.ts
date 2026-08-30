import { RefObject } from 'react';
import { F0DataChartPieProps } from '../../types';
import { ChartResponsiveSize } from '../../utils/responsive';
import type * as echarts from "echarts";
/** Discrete responsive size for the pie chart */
export type PieChartSize = ChartResponsiveSize;
export declare function usePieChartOptions(containerRef: RefObject<HTMLDivElement | null>, { series, innerRadius, showLegend, showLabels, showPercentage, valueFormatter, tooltipValueFormatter, echartsOptions, }: F0DataChartPieProps, size: PieChartSize): echarts.EChartsOption;
