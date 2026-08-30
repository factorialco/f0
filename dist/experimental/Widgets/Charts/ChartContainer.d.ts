import { ReactNode } from 'react';
import { WidgetProps } from '../Widget';
export type ChartContainerPropsBase = WidgetProps;
export type ComposeChartContainerProps<T extends object> = ChartContainerPropsBase & {
    chart: T;
};
export declare const ChartContainer: import('react').ForwardRefExoticComponent<WidgetProps & {
    chart?: ReactNode;
} & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: import('react').ForwardRefExoticComponent<import('../Widget').WidgetSkeletonProps & import('react').RefAttributes<HTMLDivElement>>;
};
