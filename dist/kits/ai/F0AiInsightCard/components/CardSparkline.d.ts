import { SparklineDataPoint } from '../types';
type CardSparklineProps = {
    data: SparklineDataPoint[];
    label: string;
    invertStatus?: boolean;
};
export declare const CardSparkline: ({ data, label, invertStatus, }: CardSparklineProps) => import("react").JSX.Element;
export {};
