import { JSX as JSX_2 } from 'react';

export declare type AggregationType = "count" | "sum" | "avg" | "min" | "max" | "countDistinct";

export declare interface ChartComputation {
    datasetId: string;
    xAxis: string;
    yAxis: string;
    aggregation: AggregationType;
    series?: string;
    sortBy?: "value" | "category";
    sortOrder?: "asc" | "desc";
    limit?: number;
}

export declare interface ChatDashboardBarChartConfig extends ChatDashboardChartConfigBase {
    type: "bar";
    orientation?: "vertical" | "horizontal";
    stacked?: boolean;
}

export declare type ChatDashboardChartConfig = ChatDashboardBarChartConfig | ChatDashboardLineChartConfig | ChatDashboardFunnelChartConfig | ChatDashboardRadarChartConfig | ChatDashboardPieChartConfig | ChatDashboardGaugeChartConfig | ChatDashboardHeatmapChartConfig;

declare interface ChatDashboardChartConfigBase {
    showLegend?: boolean;
    showGrid?: boolean;
    showLabels?: boolean;
    valueFormat?: FormatPreset;
}

export declare interface ChatDashboardChartItem extends ChatDashboardItemBase {
    type: "chart";
    chart: ChatDashboardChartConfig;
    computation: ChartComputation | RadarComputation | PieComputation | GaugeComputation | HeatmapComputation;
}

export declare interface ChatDashboardCollectionItem extends ChatDashboardItemBase {
    type: "collection";
    columns: ChatDashboardColumn[];
    computation: CollectionComputation;
}

export declare interface ChatDashboardColumn {
    /** Column key — must match a key in each row object */
    id: string;
    /** Display header label */
    label: string;
    /** Optional fixed width in pixels */
    width?: number;
}

/**
 * Complete dashboard configuration received via `displayDashboard`.
 * Contains fetchSpecs that describe how to obtain data server-side —
 * no raw data is included. Fully JSON-serializable.
 */
export declare interface ChatDashboardConfig {
    /** Dashboard title displayed in the canvas header and chat report card */
    title: string;
    /** Filter definitions — keys become filter IDs */
    filters?: Record<string, ChatDashboardFilterDefinition>;
    /** Ordered list of dashboard items with computation specs */
    items: ChatDashboardItem[];
    /** Fetch specs for server-side data retrieval, keyed by datasetId */
    fetchSpecs: Record<string, DashboardFetchSpec>;
}

export declare interface ChatDashboardFilterDefinition {
    type: "in";
    label: string;
    column: string;
    datasetId: string;
}

export declare interface ChatDashboardFunnelChartConfig {
    type: "funnel";
    sort?: "descending" | "ascending" | "none";
    orient?: "horizontal" | "vertical";
    labelPosition?: "inside" | "outside";
    showLegend?: boolean;
    showLabels?: boolean;
    showConversion?: boolean;
    valueFormat?: FormatPreset;
}

declare interface ChatDashboardGaugeChartConfig {
    type: "gauge";
    min?: number;
    max?: number;
    showValue?: boolean;
    valueFormat?: FormatPreset;
}

declare interface ChatDashboardHeatmapChartConfig {
    type: "heatmap";
    min?: number;
    max?: number;
    showLabels?: boolean;
    showVisualMap?: boolean;
    valueFormat?: FormatPreset;
}

export declare type ChatDashboardItem = ChatDashboardChartItem | ChatDashboardMetricItem | ChatDashboardCollectionItem;

declare interface ChatDashboardItemBase {
    id: string;
    title: string;
    description?: string;
    /** Source attribution shown as a subtitle (e.g. "Based on 8 feedbacks from 3 evaluators") */
    sourceDescription?: string;
    colSpan?: number;
    rowSpan?: number;
    x?: number;
    y?: number;
}

export declare interface ChatDashboardLineChartConfig extends ChatDashboardChartConfigBase {
    type: "line";
    lineType?: "linear" | "smooth" | "step";
    showArea?: boolean;
    showDots?: boolean;
}

export declare type ChatDashboardMetricFormat = {
    type: "number";
} | {
    type: "currency";
    currency?: string;
} | {
    type: "percent";
} | {
    type: "custom";
    suffix?: string;
    prefix?: string;
};

export declare interface ChatDashboardMetricItem extends ChatDashboardItemBase {
    type: "metric";
    format?: ChatDashboardMetricFormat;
    decimals?: number;
    computation: MetricComputation;
}

declare interface ChatDashboardPieChartConfig {
    type: "pie";
    innerRadius?: number;
    showLegend?: boolean;
    showLabels?: boolean;
    showPercentage?: boolean;
    valueFormat?: FormatPreset;
}

declare interface ChatDashboardRadarChartConfig extends ChatDashboardChartConfigBase {
    type: "radar";
    showArea?: boolean;
}

export declare interface CollectionComputation {
    datasetId: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    limit?: number;
}

export declare interface DashboardFetchSpec {
    fetch: Array<{
        toolId: string;
        args: Record<string, unknown>;
    }>;
    query: string | null;
    columnLabels?: Record<string, string>;
}

/**
 * Minimal descriptor of a dashboard item's position and size.
 * Used by `onLayoutChange` so the consumer can reconcile layout
 * edits against its own source-of-truth config items.
 */
declare type DashboardItemLayout = {
    id: string;
    colSpan: number;
    rowSpan: number;
    x: number;
    y: number;
};

/**
 * Renders an F0AnalyticsDashboard from a server-computed config.
 *
 * All data computation happens server-side via POST /api/dashboard/compute.
 * Multiple widget fetchData calls within the same filter state share a
 * single batch request.
 */
export declare function F0ChatDashboard({ config, apiConfig, refreshKey, editMode, onLayoutChange, }: F0ChatDashboardProps): JSX_2.Element;

export declare namespace F0ChatDashboard {
    var displayName: string;
}

export declare interface F0ChatDashboardProps {
    config: ChatDashboardConfig;
    apiConfig: {
        baseUrl: string;
        headers: Record<string, string>;
    };
    refreshKey?: number;
    editMode?: boolean;
    onLayoutChange?: (layout: DashboardItemLayout[]) => void;
}

/**
 * A preset formatting instruction the LLM can specify instead of a
 * real formatter function. The wrapper component maps these to actual
 * `(value: number) => string` functions at render time.
 */
export declare type FormatPreset = {
    type: "number";
} | {
    type: "currency";
    currency?: string;
} | {
    type: "percent";
} | {
    type: "compact";
};

declare interface GaugeComputation {
    datasetId: string;
    aggregation: AggregationType;
    column?: string;
    min?: number;
    max?: number;
    name?: string;
}

declare interface HeatmapComputation {
    datasetId: string;
    xAxis: string;
    yAxis: string;
    valueColumn: string;
    aggregation: AggregationType;
}

export declare interface MetricComputation {
    datasetId: string;
    aggregation: AggregationType;
    column?: string;
}

declare interface PieComputation {
    datasetId: string;
    nameColumn: string;
    valueColumn: string;
    aggregation: AggregationType;
    sortBy?: "value" | "name";
    sortOrder?: "asc" | "desc";
    limit?: number;
}

declare interface RadarComputation {
    datasetId: string;
    seriesColumn: string;
    indicators: Array<{
        column: string;
        label: string;
        max?: number;
    }>;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}

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


declare namespace Calendar {
    var displayName: string;
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
