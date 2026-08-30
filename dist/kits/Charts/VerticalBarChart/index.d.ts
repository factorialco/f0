import { ChartConfig, ChartPropsBase } from '../utils/types';
type ValueFormatter = (value: string | number | undefined) => string | number;
export type VerticalBarChartProps<K extends ChartConfig = ChartConfig> = ChartPropsBase<K> & {
    label?: boolean;
    showRatio?: boolean;
    valueFormatter?: ValueFormatter;
};
export declare const VerticalBarChart: <K extends ChartConfig>(props: ChartPropsBase<K> & {
    label?: boolean;
    showRatio?: boolean;
    valueFormatter?: ValueFormatter;
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
export {};
