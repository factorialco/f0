import { RefObject } from 'react';
import { F0DataChartHeatmapProps } from '../../types';
import { ChartResponsiveSize } from '../../utils/responsive';
import type * as echarts from "echarts";
/** Discrete responsive size for the heatmap (mirrors the rest of F0DataChart) */
export type HeatmapChartSize = ChartResponsiveSize;
export declare function useHeatmapChartOptions(containerRef: RefObject<HTMLDivElement | null>, { xCategories, yCategories, data, min: minProp, max: maxProp, showLabels, showVisualMap, valueFormatter, tooltipValueFormatter, echartsOptions, }: F0DataChartHeatmapProps, size: HeatmapChartSize): echarts.EChartsOption;
