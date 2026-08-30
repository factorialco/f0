export type { BarChartConfig, DashboardChartConfig, DashboardChartData, DashboardChartItem, DashboardCollectionItem, DashboardItem, DashboardItemBase, DashboardItemFiltersConfig, DashboardItemFiltersDefinition, DashboardItemFiltersState, DashboardMetricData, DashboardMetricItem, F0AnalyticsDashboardAskAiTarget, F0AnalyticsDashboardAskAiTargetWithQuote, F0AnalyticsDashboardPointClick, F0AnalyticsDashboardProps, FunnelChartConfig, GaugeChartConfig, HeatmapChartConfig, InfoHintContent, LineChartConfig, MetricFormat, PieChartConfig, RadarChartConfig, ScatterChartConfig, } from './types';
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0AnalyticsDashboard: {
    <Filters extends import('../OneFilterPicker').FiltersDefinition = import('../OneFilterPicker').FiltersDefinition>({ filters, presets, defaultFilters, filtersValue, onFiltersChange, items, itemFilters, editMode, onLayoutChange, enableExport, exportFilename, onExportReady, resetKey, onTransformChart, onAskAi, onAskAiTarget, navigationFilters, filtersLoading, }: import('./types').F0AnalyticsDashboardProps<Filters>): import("react").JSX.Element;
    displayName: string;
};
