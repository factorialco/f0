import { ChartConfig } from '../../../ui/chart';
import { ChartPropsBase } from '../utils/types';
type ChartDataPoint<K extends ChartConfig> = {
    label: string;
    values: {
        [key in keyof K]: number;
    };
};
type ChartTypeConfig<K extends ChartConfig> = {
    categories: keyof K | (keyof K)[];
    axisLabel?: string;
    hideAxis?: boolean;
    axisPosition?: "left" | "right";
};
type BarChartTypeConfig<K extends ChartConfig> = ChartTypeConfig<K> & {
    /**
     * How multiple bar categories are laid out: side by side ("simple", the
     * default), stacked into a single bar ("stacked"), or stacked with negative
     * values hanging below the zero line ("stacked-by-sign"). Mirrors BarChart's
     * `type` prop.
     */
    type?: "simple" | "stacked" | "stacked-by-sign";
};
type LineChartTypeConfig<K extends ChartConfig> = ChartTypeConfig<K> & {
    dot?: boolean;
    lineType?: "natural" | "linear";
};
export type ComboChartProps<K extends ChartConfig = ChartConfig> = ChartPropsBase<K> & {
    label?: boolean;
    legend?: boolean;
    showValueUnderLabel?: boolean;
    bar?: BarChartTypeConfig<K>;
    line?: LineChartTypeConfig<K>;
    scatter?: ChartTypeConfig<K>;
    onClick?: (data: ChartDataPoint<K>) => void;
};
export declare const ComboChart: <K extends ChartConfig>(props: ChartPropsBase<K> & {
    label?: boolean;
    legend?: boolean;
    showValueUnderLabel?: boolean;
    bar?: BarChartTypeConfig<K> | undefined;
    line?: LineChartTypeConfig<K> | undefined;
    scatter?: ChartTypeConfig<K> | undefined;
    onClick?: ((data: ChartDataPoint<K>) => void) | undefined;
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
export {};
