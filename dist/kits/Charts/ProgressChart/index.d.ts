import { ChartConfig, ChartPropsBase } from '../utils/types';
export type ProgressBarProps<K extends ChartConfig = ChartConfig> = ChartPropsBase<K> & {
    value: number;
    max?: number;
    label?: string;
    color?: string;
};
export declare const ProgressBar: <K extends ChartConfig>(props: ChartPropsBase<K> & {
    value: number;
    max?: number;
    label?: string;
    color?: string;
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
