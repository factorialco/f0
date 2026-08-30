import { ComponentProps } from 'react';
import { ChartContainer } from '../../../ui/chart';
import { ChartConfig, ChartItem } from '../utils/types';
export type RadarChartProps<K extends ChartConfig> = {
    dataConfig: K;
    data: ChartItem<K>[];
    scaleMin?: number;
    scaleMax?: number;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
    defaultHiddenSeries?: Array<keyof K>;
};
export declare const RadarChart: <K extends ChartConfig>(props: RadarChartProps<K> & {
    dataTestId?: string;
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
