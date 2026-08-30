import { ChartConfig } from '../../../ui/chart';
import { ChartPropsBase } from '../utils/types';
type ChartDataPoint<K extends ChartConfig> = {
    label: string;
    values: {
        [key in keyof K]: number;
    };
};
export type BarChartProps<K extends ChartConfig = ChartConfig> = ChartPropsBase<K> & {
    type?: "simple" | "stacked" | "stacked-by-sign";
    label?: boolean;
    legend?: boolean;
    showValueUnderLabel?: boolean;
    highlightLastBar?: boolean;
    onClick?: (data: ChartDataPoint<K>) => void;
};
export declare const BarChart: <K extends ChartConfig>(props: ChartPropsBase<K> & {
    type?: "simple" | "stacked" | "stacked-by-sign";
    label?: boolean;
    legend?: boolean;
    showValueUnderLabel?: boolean;
    highlightLastBar?: boolean;
    onClick?: ((data: ChartDataPoint<K>) => void) | undefined;
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
export {};
