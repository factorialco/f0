import { ComponentProps, ForwardedRef } from 'react';
import { ChartContainer } from '../../../ui/chart';
import { ChartConfig } from '../utils/types';
export type PieChartItem = {
    label: string;
    value: number;
    color?: string;
};
export type PieChartProps = {
    dataConfig: ChartConfig;
    data: PieChartItem[];
    tickFormatter?: (value: string) => string;
    overview?: {
        number: number;
        label: string;
    };
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};
export declare const _PieChart: ({ data, dataConfig, overview, aspect, tickFormatter }: PieChartProps, ref: ForwardedRef<HTMLDivElement>) => import("react").JSX.Element;
export declare const PieChart: (props: PieChartProps & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
