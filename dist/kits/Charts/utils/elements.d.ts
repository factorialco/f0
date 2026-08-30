import { ComponentProps } from 'react';
import { XAxis, YAxis } from 'recharts';
import { AxisConfig } from './types';
export declare function measureTextWidth(text: string, font?: string): number;
export declare const xAxisProps: (config?: AxisConfig) => Partial<ComponentProps<typeof XAxis>>;
export declare const yAxisProps: (config?: AxisConfig) => Partial<ComponentProps<typeof YAxis>>;
export declare const cartesianGridProps: () => {
    vertical: boolean;
    strokeDasharray: string;
};
export declare const chartTooltipProps: (horizontal?: boolean) => {
    cursor: boolean;
    offset: number;
    position: {
        y: number | undefined;
        x: number | undefined;
    };
    animationDuration: number;
    isAnimationActive: boolean;
};
