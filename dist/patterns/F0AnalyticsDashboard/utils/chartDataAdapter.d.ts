import { DashboardChartConfig, DashboardChartData } from '../types';
/**
 * The common denominator for all chart data. Every chart type can be
 * converted to/from this shape, which makes it the bridge for
 * cross-type transformations.
 *
 * Adding support for a new chart type only requires two functions:
 * one in `toCanonical` and one in `fromCanonical`.
 */
export interface CanonicalChartData {
    categories: string[];
    series: {
        name: string;
        data: number[];
    }[];
}
/**
 * Whether this build knows how to render the given chart config. Guards the
 * boundary where a host app maps a wire type it has no case for and hands
 * back `undefined`.
 */
export declare function isRenderableChart(config: DashboardChartConfig | undefined | null): config is DashboardChartConfig;
/**
 * Detect the actual shape of the data regardless of what `chart.type` says.
 * After a chart type transform, `item.chart.type` may have changed but the
 * data returned by `fetchData` still has its original shape.
 */
export declare function detectDataShape(data: DashboardChartData, hint?: DashboardChartConfig["type"]): DashboardChartConfig["type"];
/**
 * Convert any chart data to the canonical intermediate shape.
 * The `sourceType` tells us how to interpret `data`. When omitted,
 * the shape is auto-detected (safer after chart type transforms).
 */
export declare function toCanonical(data: DashboardChartData, sourceType?: DashboardChartConfig["type"]): CanonicalChartData;
/**
 * Convert canonical data to the target chart type's expected data shape.
 */
export declare function fromCanonical(canonical: CanonicalChartData, targetType: DashboardChartConfig["type"]): DashboardChartData;
/**
 * Returns the set of chart types that the given source type can be
 * meaningfully converted to. Used by ChartItem to filter the toggle
 * options so the user never picks a combination that would crash or
 * produce empty/meaningless output.
 */
export declare function compatibleTargetTypes(sourceType: DashboardChartConfig["type"]): Set<DashboardChartConfig["type"] | "table">;
/**
 * Sensible default config for a newly transformed chart type.
 * Only includes the `type` discriminant and type-specific defaults —
 * shared props like `valueFormatter` should be preserved from the
 * source config by the caller.
 */
export declare function defaultChartConfig(type: DashboardChartConfig["type"]): DashboardChartConfig;
