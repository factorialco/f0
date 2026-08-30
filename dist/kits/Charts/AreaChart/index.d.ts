import { ForwardedRef } from 'react';
import { LineChartConfig } from '../../../ui/chart';
import { LineChartPropsBase } from '../utils/types';
type allowedLineTypes = "natural" | "linear" | "step" | "monotoneX";
export type AreaChartProps<K extends LineChartConfig = LineChartConfig> = LineChartPropsBase<K> & {
    lineType?: allowedLineTypes;
    marginTop?: number;
    canBeBlurred?: boolean;
    blurArea?: "l" | "r" | "lr";
};
export declare const BaseAreaChart: <K extends LineChartConfig>({ data, dataConfig, xAxis, yAxis, canBeBlurred, blurArea, lineType, aspect, marginTop, }: AreaChartProps<K>, ref: ForwardedRef<HTMLDivElement>) => import("react").JSX.Element;
export declare const AreaChart: <K extends LineChartConfig>(props: LineChartPropsBase<K> & {
    lineType?: allowedLineTypes;
    marginTop?: number;
    canBeBlurred?: boolean;
    blurArea?: "l" | "r" | "lr";
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
export {};
