import { ReactNode } from 'react';
type WidgetWidth = "sm" | "md" | "lg";
type DashboardProps = {
    widgetWidth?: WidgetWidth;
    children?: ReactNode[];
};
export declare const Dashboard: import('react').ForwardRefExoticComponent<DashboardProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: () => import("react").JSX.Element;
};
export {};
