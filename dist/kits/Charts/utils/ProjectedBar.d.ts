import { BarProps } from 'recharts';
export type ProjectedBarProps = Omit<BarProps, "shape" | "fill" | "ref"> & {
    fill: string;
    /**
     * dataKeys of every bar series in the stack, in stacking order. When set,
     * the segment rounds its outer tip only while it is the outermost same-sign
     * segment of the stack.
     */
    stackKeys?: string[];
};
export declare const ProjectedBar: (({ stackKeys, ...barProps }: ProjectedBarProps) => import("react").JSX.Element) & {
    displayName: string;
    defaultProps: {
        xAxisId: number;
        yAxisId: number;
        legendType: string;
        minPointSize: number;
        hide: boolean;
        data: import('recharts/types/cartesian/Bar').BarRectangleItem[];
        layout: string;
        activeBar: boolean;
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
    getComposedData: ({ props, item, barPosition, bandSize, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, dataStartIndex, displayedData, offset, }: {
        props: BarProps;
        item: import('react').ReactElement;
        barPosition: any;
        bandSize: number;
        xAxis: (Omit<import('recharts').XAxisProps, "scale"> & {
            scale: import('recharts/types/util/types').D3Scale<string | number>;
            x?: number;
            width?: number;
        }) | undefined;
        yAxis: (Omit<import('recharts').YAxisProps, "scale"> & {
            scale: import('recharts/types/util/types').D3Scale<string | number>;
            y?: number;
            height?: number;
        }) | undefined;
        xAxisTicks: import('recharts/types/util/types').TickItem[];
        yAxisTicks: import('recharts/types/util/types').TickItem[];
        stackedData: Array<[number, number]>;
        dataStartIndex: number;
        offset: import('recharts/types/util/types').ChartOffset;
        displayedData: any[];
    }) => {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
        width?: number;
        height?: number;
        brushBottom?: number;
        data: any[];
        layout: "horizontal" | "vertical";
    };
};
