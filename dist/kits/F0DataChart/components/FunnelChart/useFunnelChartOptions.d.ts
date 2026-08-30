import { RefObject } from 'react';
import { F0DataChartFunnelProps } from '../../types';
import type * as echarts from "echarts";
export declare function useFunnelChartOptions(containerRef: RefObject<HTMLDivElement | null>, { series, sort, gap, orient, showLegend, showLabels, showConversion, colorScale, valueFormatter, tooltipValueFormatter, echartsOptions, }: F0DataChartFunnelProps): echarts.EChartsOption;
