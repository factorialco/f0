import { ForwardedRef } from 'react';
import { LineChartConfig } from '../../../ui/chart';
import { LineChartPropsBase } from '../utils/types';
export type LineChartProps<K extends LineChartConfig = LineChartConfig> = LineChartPropsBase<K> & {
    lineType?: "natural" | "linear";
};
export declare const _LineChart: <K extends LineChartConfig>({ data, dataConfig, xAxis, yAxis, lineType, aspect, hideTooltip, hideGrid, }: LineChartProps<K>, ref: ForwardedRef<HTMLDivElement>) => import("react").JSX.Element;
export declare const LineChart: <K extends LineChartConfig>(props: LineChartPropsBase<K> & {
    lineType?: "natural" | "linear";
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
