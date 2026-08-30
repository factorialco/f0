import { RadialProgressProps } from '../../../../kits/Charts/RadialProgressChart';
export type RadialProgressWidgetProps = {
    header: {
        title: string;
        subtitle?: string;
        info?: string;
        link?: {
            title: string;
            url: string;
        };
    };
    chart: RadialProgressProps;
};
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const RadialProgressWidget: import('react').ForwardRefExoticComponent<RadialProgressWidgetProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: import('react').ForwardRefExoticComponent<import('../../Widget').WidgetSkeletonProps & import('react').RefAttributes<HTMLDivElement>>;
};
