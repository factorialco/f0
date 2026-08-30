import { VariantProps } from 'cva';
import * as React from "react";
import * as RechartsPrimitive from "recharts";
declare const variants: (props?: ({
    aspect?: "small" | "square" | "wide" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode;
        icon?: React.ComponentType;
        /**
         * Render this series dashed where the chart draws it as a line, e.g. for
         * projected or planned series. Ignored by bar-only series.
         */
        dashed?: boolean;
        /**
         * Mark this series as projected (provisional, not yet actual) data. Where
         * the chart draws it as bars they fade toward the zero line with a
         * gradient instead of using a solid fill.
         */
        projected?: boolean;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
type ChartConfigValue = {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    dashed?: boolean;
} & ({
    color?: string;
    theme?: never;
} | {
    color?: never;
    theme: Record<keyof typeof THEMES, string>;
});
export type LineChartConfig = {
    [key: string]: ChartConfigValue;
};
interface ChartContainerComponentProps extends React.ComponentProps<"div">, VariantProps<typeof variants> {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}
declare const ChartContainer: React.ForwardRefExoticComponent<Omit<ChartContainerComponentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare const ChartTooltipContent: React.ForwardRefExoticComponent<Omit<RechartsPrimitive.DefaultTooltipContentProps<import('recharts/types/component/DefaultTooltipContent').ValueType, import('recharts/types/component/DefaultTooltipContent').NameType> & {
    accessibilityLayer?: boolean;
    active?: boolean | undefined;
    includeHidden?: boolean | undefined;
    allowEscapeViewBox?: import('recharts/types/util/types').AllowInDimension;
    animationDuration?: import('recharts/types/util/types').AnimationDuration;
    animationEasing?: import('recharts/types/util/types').AnimationTiming;
    content?: import('recharts/types/component/Tooltip').ContentType<import('recharts/types/component/DefaultTooltipContent').ValueType, import('recharts/types/component/DefaultTooltipContent').NameType> | undefined;
    coordinate?: Partial<import('recharts/types/util/types').Coordinate>;
    cursor?: boolean | React.ReactElement | React.SVGProps<SVGElement>;
    filterNull?: boolean;
    defaultIndex?: number;
    isAnimationActive?: boolean;
    offset?: number;
    payloadUniqBy?: import('recharts/types/util/payload/getUniqPayload').UniqueOption<import('recharts/types/component/DefaultTooltipContent').Payload<import('recharts/types/component/DefaultTooltipContent').ValueType, import('recharts/types/component/DefaultTooltipContent').NameType>> | undefined;
    position?: Partial<import('recharts/types/util/types').Coordinate>;
    reverseDirection?: import('recharts/types/util/types').AllowInDimension;
    shared?: boolean;
    trigger?: "hover" | "click";
    useTranslate3d?: boolean;
    viewBox?: import('recharts/types/util/types').CartesianViewBox;
    wrapperStyle?: React.CSSProperties;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
    yAxisFormatter?: (value: string) => string;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * Opacity ramp shared by everything that renders a projected series: bars
 * fade from `strong` at the tip to `faint` at the zero line, and the legend
 * swatch mirrors the same gradient.
 */
declare const projectedFade: {
    readonly strong: 0.4;
    readonly faint: 0.05;
};
declare const ChartLegend: typeof RechartsPrimitive.Legend;
declare const ChartLegendContent: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Pick<RechartsPrimitive.LegendProps, "verticalAlign" | "payload"> & {
    hideIcon?: boolean;
    nameKey?: string;
    leftShift?: number;
    hiddenKey?: string;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, projectedFade, };
