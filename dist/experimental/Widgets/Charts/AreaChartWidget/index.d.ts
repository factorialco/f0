import { AreaChartProps } from '../../../../kits/Charts/AreaChart';
import { ComposeChartContainerProps } from '../ChartContainer';
export interface AreaChartWidgetProps extends ComposeChartContainerProps<AreaChartProps> {
    canBeBlurred?: boolean;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const AreaChartWidget: import('react').ForwardRefExoticComponent<AreaChartWidgetProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: import('react').ForwardRefExoticComponent<import('../../Widget').WidgetSkeletonProps & import('react').RefAttributes<HTMLDivElement>>;
};
