import { RefObject } from 'react';
import { F0DataChartGaugeProps } from '../../types';
import { ChartResponsiveSize } from '../../utils/responsive';
import type * as echarts from "echarts";
/** Discrete responsive size for the gauge */
export type GaugeChartSize = ChartResponsiveSize;
export declare function useGaugeChartOptions(containerRef: RefObject<HTMLDivElement | null>, { value, min, max, name, color, showValue, valueFormatter, tooltipValueFormatter, echartsOptions, }: F0DataChartGaugeProps, size: GaugeChartSize): echarts.EChartsOption;
