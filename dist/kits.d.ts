import { AreaChartWidgetProps } from './AreaChartWidget';
import { BarChartProps } from '../Charts/BarChart';
import { CategoryBarProps } from './CategoryBarChart';
import { ChartConfig } from '../../ui/chart';
import { ChartConfig as ChartConfig_2 } from './utils/types';
import { ChartPropsBase } from './utils/types';
import { ClassValue } from 'cva';
import { ComponentProps } from 'react';
import type * as echarts_2 from 'echarts';
import { F0DataChartProps as F0DataChartProps_2 } from './types';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react';
import { LineChartConfig } from '../../ui/chart';
import { LineChartProps } from '../Charts/LineChart';
import { LineChartPropsBase } from './utils/types';
import { PieChartProps } from './PieChart';
import { PieChartProps as PieChartProps_2 } from '../Charts/PieChart';
import { RadialProgressWidgetProps } from './RadialProgressWidget';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { VariantProps } from 'cva';
import { VerticalBarChartProps } from '../Charts/VerticalBarChart';
import { WidgetProps } from '../../experimental';
import { WithDataTestIdReturnType } from '../../f0';

export declare const AreaChart: WithDataTestIdReturnType<ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "step" | "linear" | "natural" | "monotoneX";
marginTop?: number;
canBeBlurred?: boolean;
blurArea?: "l" | "r" | "lr";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>>;

export declare const AreaChartWidget: ForwardRefExoticComponent<Omit<AreaChartWidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const BarChart: WithDataTestIdReturnType<ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig> & {
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
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>>;

/**
 * Skeleton for bar chart content area.
 *
 * - `orientation: "vertical"` (default): vertical bars with varying heights.
 * - `orientation: "horizontal"`: horizontal bars extending left-to-right.
 * - `stacked: true`: each bar has 2–3 stacked segments.
 */
export declare function BarChartSkeleton({ orientation, stacked, showLegend, }?: BarChartSkeletonProps): JSX_2.Element;

declare interface BarChartSkeletonProps {
    /** Bar orientation. @default "vertical" */
    orientation?: "vertical" | "horizontal";
    /** Show stacked bar segments. @default false */
    stacked?: boolean;
    /** Show legend below chart. @default true */
    showLegend?: boolean;
}

export declare const BarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: BarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const CategoryBarChart: WithDataTestIdReturnType<ForwardRefExoticComponent<Omit<CategoryBarProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>>;

/** A valid chart color token — one of the 15 chromatic F0 base-color names. */
export declare type ChartColorToken = (typeof chartColorTokens)[number];

/**
 * The 15 chromatic color names from the F0 design token palette.
 * These are the only colors allowed for custom series / data-point colors.
 */
export declare const chartColorTokens: readonly ["lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel", "radical", "viridian", "orange", "red", "grass", "malibu", "yellow", "purple"];

declare type ChartConfig_3 = Record<string, ChartConfig_4[keyof ChartConfig_4]>;

declare type ChartConfig_4 = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

declare const ChartContainer: React_2.ForwardRefExoticComponent<Omit<ChartContainerComponentProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare interface ChartContainerComponentProps extends React_2.ComponentProps<"div">, VariantProps<typeof variants> {
    config: ChartConfig_4;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}

declare type ChartItem<K extends ChartConfig_3> = {
    label: string;
    values: {
        [key in keyof K]: number;
    };
};

/**
 * Complete chart theme — everything a chart type needs to render correctly.
 *
 * Resolved at runtime from CSS custom properties so that it automatically
 * adapts to light / dark mode. Every chart type hook receives this object
 * and passes it through to the shared option builders.
 */
export declare interface ChartTheme {
    /** Current mode — useful for conditional logic in chart-type hooks */
    mode: "light" | "dark";
    /** Semantic colors */
    colors: ChartThemeColors;
    /** Default series color palette (hex strings) */
    palette: string[];
    /** Tooltip visual config */
    tooltip: ChartThemeTooltip;
    /** Axis pointer visual config */
    axisPointer: ChartThemeAxisPointer;
    /** Base text style applied to the entire ECharts instance */
    textStyle: ChartThemeTextStyle;
}

/** Axis pointer visual configuration */
declare interface ChartThemeAxisPointer {
    color: string;
    type: "dashed" | "solid";
}

/** Semantic colors used by every chart type */
declare interface ChartThemeColors {
    /** Primary text — tooltip body, strong labels. Resolves from --neutral-80 */
    foreground: string;
    /** Secondary text — legend labels. Resolves from --neutral-50 */
    foregroundSecondary: string;
    /** Tertiary text — axis tick labels. Resolves from --neutral-40 */
    foregroundTertiary: string;
    /** Grid / split lines, category axis line. Resolves from --neutral-10 */
    borderSecondary: string;
    /** Axis pointer line, subtle dividers. Resolves from --neutral-30 */
    border: string;
    /** Tooltip background color (CSS rgba string) */
    tooltipBackground: string;
    /** Chart container background — used when chart needs to know its own bg */
    background: string;
}

/** Typography configuration */
declare interface ChartThemeTextStyle {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
}

/** Tooltip visual configuration */
declare interface ChartThemeTooltip {
    padding: number[];
    borderWidth: number;
    borderRadius: number;
    transitionDuration: number;
    /** CSS box-shadow applied via extraCssText */
    boxShadow: string;
    /** Full CSS background string (may include rgba + filters) */
    background: string;
}

export declare const ComboChart: WithDataTestIdReturnType<ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig> & {
label?: boolean;
legend?: boolean;
showValueUnderLabel?: boolean;
bar?: {
categories: string | string[];
axisLabel?: string;
hideAxis?: boolean;
axisPosition?: "left" | "right";
} | undefined;
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
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>>;

declare interface DualProgressBarProps {
    value: number;
    max?: number;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0DataChart: (props: F0DataChartProps_2) => JSX_2.Element;

/**
 * A single data point in a bar chart series.
 * Can be a simple number or an object with value and optional target.
 */
export declare type F0DataChartBarDataPoint = number | {
    value: number;
    /** When set, renders a gradient fade from the bar top up to the target value */
    target?: number;
    /** Override color for this individual bar. Must be an F0 design token name. */
    color?: ChartColorToken;
};

/**
 * Bar chart variant props.
 */
export declare interface F0DataChartBarProps extends F0DataChartBaseProps {
    /** Chart type */
    type: "bar";
    /** One or more data series to render as bars */
    series: F0DataChartBarSeries[];
    /** Bar orientation. @default "vertical" */
    orientation?: "vertical" | "horizontal";
    /** Stack all series into a single bar per category. @default false */
    stacked?: boolean;
}

/**
 * A series of bars to render in the chart.
 */
export declare interface F0DataChartBarSeries {
    /** Display name used in legend and tooltip */
    name: string;
    /** Data points — one per category */
    data: F0DataChartBarDataPoint[];
    /** Override color for this series. Must be an F0 design token name. Falls back to the theme palette. */
    color?: ChartColorToken;
}

declare interface F0DataChartBaseProps {
    /** Labels for the category axis (one per data point) */
    categories: string[];
    /** Show the legend below the chart. @default true */
    showLegend?: boolean;
    /** Show the background grid lines. @default true */
    showGrid?: boolean;
    /** Show value labels on each data point. @default false */
    showLabels?: boolean;
    /** Format the value axis tick labels (e.g. `(v) => \`${v}M\`` ) */
    valueFormatter?: (value: number) => string;
    /** Format category axis tick labels */
    categoryFormatter?: (value: string) => string;
    /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
    echartsOptions?: Partial<echarts_2.EChartsOption>;
}

/**
 * A single data point in a funnel chart series.
 * Each point has a value and a stage name.
 */
export declare interface F0DataChartFunnelDataPoint {
    /** Numeric value for this funnel stage */
    value: number;
    /** Stage label (e.g. "Applied", "Phone Screen", "Hired") */
    name: string;
    /** Override color for this individual stage. Must be an F0 design token name. */
    color?: ChartColorToken;
}

/**
 * Funnel chart variant props.
 *
 * Funnels do NOT use category/value axes — stage names come from the data
 * points themselves. This interface is separate from `F0DataChartBaseProps`.
 */
export declare interface F0DataChartFunnelProps {
    /** Chart type */
    type: "funnel";
    /** The funnel series to render */
    series: F0DataChartFunnelSeries;
    /** Sort direction of funnel stages. @default "descending" */
    sort?: "descending" | "ascending" | "none";
    /** Gap between funnel stages in pixels. @default 0 */
    gap?: number;
    /** Funnel orientation. @default "horizontal" */
    orient?: "horizontal" | "vertical";
    /** Show the legend below the chart. @default false */
    showLegend?: boolean;
    /** Show value labels on each stage. @default true */
    showLabels?: boolean;
    /**
     * Show conversion percentages in labels.
     * Each stage displays its value as a percentage of the first stage.
     * The tooltip also shows step-over-step conversion.
     * @default false
     */
    showConversion?: boolean;
    /** Format the value displayed in labels and tooltip */
    valueFormatter?: (value: number) => string;
    /**
     * Map stage colors to their values using a gradient scale (light→dark).
     * When enabled, higher values get a more intense color. @default true
     */
    colorScale?: boolean;
    /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
    echartsOptions?: Partial<echarts_2.EChartsOption>;
}

/**
 * A single funnel series with named data points.
 */
export declare interface F0DataChartFunnelSeries {
    /** Display name used in legend and tooltip */
    name: string;
    /** Data points — one per funnel stage */
    data: F0DataChartFunnelDataPoint[];
    /** Override color for the entire series. Must be an F0 design token name. */
    color?: ChartColorToken;
}

/**
 * Gauge/KPI chart variant props.
 *
 * A single-value gauge indicator — no axes, no legend.
 */
export declare interface F0DataChartGaugeProps {
    /** Chart type */
    type: "gauge";
    /** Current value */
    value: number;
    /** Minimum value. @default 0 */
    min?: number;
    /** Maximum value. @default 100 */
    max?: number;
    /** Label shown below the value */
    name?: string;
    /** Override color. Must be an F0 design token name. */
    color?: ChartColorToken;
    /** Show the numeric value in the center. @default true */
    showValue?: boolean;
    /** Format the value displayed */
    valueFormatter?: (value: number) => string;
    /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
    echartsOptions?: Partial<echarts_2.EChartsOption>;
}

/**
 * Heatmap chart variant props.
 *
 * Renders a grid where each cell's color intensity represents a numeric value.
 * Uses two category axes (x for columns, y for rows) and a visualMap for
 * value→color mapping.
 */
export declare interface F0DataChartHeatmapProps {
    /** Chart type */
    type: "heatmap";
    /** Column labels (x-axis) */
    xCategories: string[];
    /** Row labels (y-axis) */
    yCategories: string[];
    /** Data as [xIndex, yIndex, value] tuples */
    data: [number, number, number][];
    /** Minimum value for color scale. @default auto from data */
    min?: number;
    /** Maximum value for color scale. @default auto from data */
    max?: number;
    /** Show value labels inside cells. @default false */
    showLabels?: boolean;
    /** Show the visual map (color scale legend). @default false */
    showVisualMap?: boolean;
    /** Format values in labels and tooltip */
    valueFormatter?: (value: number) => string;
    /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
    echartsOptions?: Partial<echarts_2.EChartsOption>;
}

/**
 * A single data point in a line chart series.
 * Can be a simple number or an object with a value.
 */
export declare type F0DataChartLineDataPoint = number | {
    value: number;
};

/**
 * Line chart variant props.
 */
export declare interface F0DataChartLineProps extends F0DataChartBaseProps {
    /** Chart type */
    type: "line";
    /** One or more data series to render as lines */
    series: F0DataChartLineSeries[];
    /** Line interpolation type. @default "linear" */
    lineType?: F0DataChartLineType;
    /** Show gradient area fill below lines. @default true */
    showArea?: boolean;
    /** Show data point dots on the lines. @default false */
    showDots?: boolean;
}

/**
 * A series of data points to render as a line.
 */
export declare interface F0DataChartLineSeries {
    /** Display name used in legend and tooltip */
    name: string;
    /** Data points — one per category */
    data: F0DataChartLineDataPoint[];
    /** Override color for this series. Must be an F0 design token name. Falls back to the theme palette. */
    color?: ChartColorToken;
    /** Render this line with a dashed pattern (useful for projections/targets) */
    dashed?: boolean;
    /** Override line interpolation for this series */
    lineType?: F0DataChartLineType;
    /** Override area fill for this series */
    showArea?: boolean;
}

/** Line interpolation type */
export declare type F0DataChartLineType = "linear" | "smooth" | "step";

/**
 * A single data point in a pie chart.
 */
export declare interface F0DataChartPieDataPoint {
    /** Numeric value for this segment */
    value: number;
    /** Segment label */
    name: string;
    /** Override color for this individual segment. Must be an F0 design token name. */
    color?: ChartColorToken;
}

/**
 * Pie/donut chart variant props.
 *
 * Pies do NOT use category/value axes — segment names come from the data
 * points themselves. This interface is separate from `F0DataChartBaseProps`.
 */
export declare interface F0DataChartPieProps {
    /** Chart type */
    type: "pie";
    /** The pie series to render */
    series: F0DataChartPieSeries;
    /** Inner radius percentage. 0 = pie, >0 = donut. @default 0 */
    innerRadius?: number;
    /** Show the legend below the chart. @default true */
    showLegend?: boolean;
    /** Show value labels on each segment. @default true */
    showLabels?: boolean;
    /** Show percentage in labels. @default false */
    showPercentage?: boolean;
    /** Format the value displayed in labels and tooltip */
    valueFormatter?: (value: number) => string;
    /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
    echartsOptions?: Partial<echarts_2.EChartsOption>;
}

/**
 * A single pie series with named data points.
 */
export declare interface F0DataChartPieSeries {
    /** Display name used in tooltip */
    name: string;
    /** Data points — one per pie segment */
    data: F0DataChartPieDataPoint[];
    /** Override color for the entire series. Must be an F0 design token name. */
    color?: ChartColorToken;
}

/**
 * Props for the F0DataChart component.
 *
 * A unified chart component that supports bar, line, funnel, pie, radar,
 * gauge, and heatmap chart types via a discriminated `type` prop.
 */
export declare type F0DataChartProps = F0DataChartBarProps | F0DataChartLineProps | F0DataChartFunnelProps | F0DataChartPieProps | F0DataChartRadarProps | F0DataChartGaugeProps | F0DataChartHeatmapProps;

/**
 * A radar chart indicator (axis/dimension).
 */
export declare interface F0DataChartRadarIndicator {
    /** Name of the axis/dimension (e.g. "Performance", "Engagement") */
    name: string;
    /** Maximum value for this axis. @default auto-calculated from data */
    max?: number;
}

/**
 * Radar chart variant props.
 *
 * Radar charts use a polar coordinate system — no cartesian axes.
 */
export declare interface F0DataChartRadarProps {
    /** Chart type */
    type: "radar";
    /** Axes of the radar — defines the dimensions to compare */
    indicators: F0DataChartRadarIndicator[];
    /** Series to compare (one or more) */
    series: F0DataChartRadarSeries[];
    /** Fill the area of each series with semi-transparent color. @default true */
    showArea?: boolean;
    /** Show the legend below the chart. @default true */
    showLegend?: boolean;
    /** Show value labels on each vertex. @default false */
    showLabels?: boolean;
    /** Format values in labels and tooltip */
    valueFormatter?: (value: number) => string;
    /** Escape hatch: raw ECharts options merged (shallow) on top of the generated config */
    echartsOptions?: Partial<echarts_2.EChartsOption>;
}

/**
 * A series of data points for a radar chart.
 */
export declare interface F0DataChartRadarSeries {
    /** Display name used in legend and tooltip (e.g. "Team A", "Team B") */
    name: string;
    /** Values — one per indicator, in the same order */
    data: number[];
    /** Override color for this series. Must be an F0 design token name. */
    color?: ChartColorToken;
}

/**
 * Skeleton for funnel chart content area.
 *
 * - `orient: "horizontal"` (default): left-to-right trapezoids with
 *   decreasing heights, centered vertically.
 * - `orient: "vertical"`: top-to-bottom trapezoids with decreasing widths,
 *   centered horizontally.
 * - `sort: "ascending"`: reverses stage order (smallest first).
 */
export declare function FunnelChartSkeleton({ orient, sort, showLegend, }?: FunnelChartSkeletonProps): JSX_2.Element;

declare interface FunnelChartSkeletonProps {
    /** Funnel orientation. @default "horizontal" */
    orient?: "horizontal" | "vertical";
    /** Sort direction. @default "descending" */
    sort?: "descending" | "ascending" | "none";
    /** Show legend below chart. @default true */
    showLegend?: boolean;
}

/**
 * Skeleton for gauge chart content area.
 *
 * Renders a 270° arc with rounded caps and a large value placeholder,
 * matching the real gauge component style (width 18, roundCap, centered value).
 */
export declare function GaugeChartSkeleton(): JSX_2.Element;

/**
 * Skeleton for heatmap chart content area.
 *
 * Renders a 5×4 grid of rectangles with varied opacities to simulate
 * heatmap data, plus placeholder axis labels.
 */
export declare function HeatmapChartSkeleton(): JSX_2.Element;

export declare const LineChart: WithDataTestIdReturnType<ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "natural" | "linear";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>>;

/**
 * Skeleton for line chart content area.
 *
 * - `lineType`: controls the SVG path shape (smooth curves, straight lines, or steps).
 * - `showArea: true` (default): gradient fill below the line.
 * - `showArea: false`: line only, no fill.
 * - `showDots: true`: SVG circles at each data point.
 */
export declare function LineChartSkeleton({ lineType, showArea, showDots, showLegend, }?: LineChartSkeletonProps): JSX_2.Element;

declare interface LineChartSkeletonProps {
    /** Line interpolation type. @default "linear" */
    lineType?: "linear" | "smooth" | "step";
    /** Show gradient area fill below line. @default true */
    showArea?: boolean;
    /** Show data point dots on the line. @default false */
    showDots?: boolean;
    /** Show legend below chart. @default true */
    showLegend?: boolean;
}

export declare const LineChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: LineChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const PieChart: WithDataTestIdReturnType<ForwardRefExoticComponent<Omit<PieChartProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>>;

/**
 * Skeleton for pie/donut chart content area.
 *
 * - `innerRadius: 0` (default): solid pie circle.
 * - `innerRadius > 0`: donut with a hollow center.
 */
export declare function PieChartSkeleton({ showLegend, innerRadius, }?: PieChartSkeletonProps): JSX_2.Element;

declare interface PieChartSkeletonProps {
    /** Show legend below chart. @default true */
    showLegend?: boolean;
    /** Inner radius percentage. 0 = pie, >0 = donut. @default 0 */
    innerRadius?: number;
}

export declare const PieChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: PieChartProps_2;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const ProgressBarChart: WithDataTestIdReturnType<ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
value: number;
max?: number;
label?: string;
color?: string;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>>;

export declare const ProgressBarDuo: ForwardRefExoticComponent<DualProgressBarProps & RefAttributes<HTMLDivElement>>;

export declare const RadarChart: <K extends ChartConfig_3>(props: RadarChartProps<K> & {
    dataTestId?: string;
} & {
    ref?: ForwardedRef<HTMLDivElement>;
}) => ReactElement | null;

export declare const _RadarChart: <K extends ChartConfig_3>({ data, dataConfig, scaleMin, scaleMax, aspect, dataTestId, }: RadarChartProps<K> & {
    dataTestId?: string;
}, ref: ForwardedRef<HTMLDivElement>) => JSX_2.Element;

export declare type RadarChartProps<K extends ChartConfig_3> = {
    dataConfig: K;
    data: ChartItem<K>[];
    scaleMin?: number;
    scaleMax?: number;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

/**
 * Skeleton for radar chart content area.
 *
 * Renders a hexagonal shape with concentric rings and radial lines.
 */
export declare function RadarChartSkeleton({ showLegend, }?: RadarChartSkeletonProps): JSX_2.Element;

declare interface RadarChartSkeletonProps {
    /** Show legend below chart. @default true */
    showLegend?: boolean;
}

export declare const RadialProgressWidget: ForwardRefExoticComponent<Omit<RadialProgressWidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const SummariesWidget: ForwardRefExoticComponent<Omit<WidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

declare const variants: (props?: ({
    aspect?: "small" | "square" | "wide" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const VerticalBarChart: WithDataTestIdReturnType<ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
label?: boolean;
showRatio?: boolean;
valueFormatter?: (value: string | number | undefined) => string | number;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>>;

export declare const VerticalBarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: VerticalBarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export { }


declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}


declare namespace _DaytimePage {
    var displayName: string;
}


declare namespace _Page {
    var displayName: string;
}

declare module "gridstack" {
    interface GridStackWidget {
        id?: string;
        allowedSizes?: Array<{
            w: number;
            h: number;
        }>;
        meta?: Record<string, unknown>;
    }
    interface GridStackNode {
        allowedSizes?: Array<{
            w: number;
            h: number;
        }>;
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        aiBlock: {
            insertAIBlock: (data: AIBlockData, config: AIBlockConfig) => ReturnType;
            executeAIAction: (actionType: string, config: AIBlockConfig) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        enhanceHighlight: {
            setEnhanceHighlight: (from: number, to: number) => ReturnType;
            clearEnhanceHighlight: () => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        transcript: {
            insertTranscript: (data: TranscriptData) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        videoEmbed: {
            setVideoEmbed: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}


declare namespace Calendar {
    var displayName: string;
}
