export declare const AreaChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./utils/types').LineChartPropsBase<import('../../ui/chart').LineChartConfig> & {
    lineType?: "step" | "linear" | "natural" | "monotoneX";
    marginTop?: number;
    canBeBlurred?: boolean;
    blurArea?: "l" | "r" | "lr";
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const BarChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./utils/types').ChartPropsBase<import('../../ui/chart').ChartConfig> & {
    type?: "simple" | "stacked" | "stacked-by-sign";
    label?: boolean;
    legend?: boolean;
    showValueUnderLabel?: boolean;
    highlightLastBar?: boolean;
    onClick?: ((data: {
        label: string;
        values: {
            [x: string]: number;
        };
    }) => void) | undefined;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const CategoryBarChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./CategoryBarChart').CategoryBarProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const LineChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./utils/types').LineChartPropsBase<import('../../ui/chart').LineChartConfig> & {
    lineType?: "natural" | "linear";
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const PieChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./PieChart').PieChartProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const VerticalBarChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./utils/types').ChartPropsBase<import('./utils/types').ChartConfig> & {
    label?: boolean;
    showRatio?: boolean;
    valueFormatter?: (value: string | number | undefined) => string | number;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const ProgressBarChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./utils/types').ChartPropsBase<import('./utils/types').ChartConfig> & {
    value: number;
    max?: number;
    label?: string;
    color?: string;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const ComboChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./utils/types').ChartPropsBase<import('../../ui/chart').ChartConfig> & {
    label?: boolean;
    legend?: boolean;
    showValueUnderLabel?: boolean;
    bar?: ({
        categories: string | string[];
        axisLabel?: string;
        hideAxis?: boolean;
        axisPosition?: "left" | "right";
    } & {
        type?: "simple" | "stacked" | "stacked-by-sign";
    }) | undefined;
    line?: ({
        categories: string | string[];
        axisLabel?: string;
        hideAxis?: boolean;
        axisPosition?: "left" | "right";
    } & {
        dot?: boolean;
        lineType?: "natural" | "linear";
    }) | undefined;
    scatter?: {
        categories: string | string[];
        axisLabel?: string;
        hideAxis?: boolean;
        axisPosition?: "left" | "right";
    } | undefined;
    onClick?: ((data: {
        label: string;
        values: {
            [x: string]: number;
        };
    }) => void) | undefined;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const RadarChart: import('../../f0').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<import('./RadarChart').RadarChartProps<import('./utils/types').ChartConfig> & {
    dataTestId?: string;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
