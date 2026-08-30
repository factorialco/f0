import { RefObject } from 'react';
import { F0DataChartRadarProps } from '../../types';
import { ChartResponsiveSize } from '../../utils/responsive';
import type * as echarts from "echarts";
/** Discrete responsive size for the radar chart */
export type RadarChartSize = ChartResponsiveSize;
export declare function useRadarChartOptions(containerRef: RefObject<HTMLDivElement | null>, { indicators, series, showArea, showLegend, showLabels, valueFormatter, tooltipValueFormatter, echartsOptions, }: F0DataChartRadarProps, size: RadarChartSize): echarts.EChartsOption;
