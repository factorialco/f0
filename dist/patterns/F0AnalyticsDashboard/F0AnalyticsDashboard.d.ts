import { FiltersDefinition } from '../OneFilterPicker/types';
import { F0AnalyticsDashboardProps } from './types';
/**
 * F0AnalyticsDashboard — a declarative, config-driven analytics dashboard.
 *
 * Renders a shared filter bar at the top and a 3-column grid of chart
 * and collection widgets below. Each widget independently fetches its data,
 * receiving the dashboard-level filters in its `fetchData` function.
 *
 * The entire dashboard structure is defined via optional `filters` / `presets`
 * and an `items` array — making it fully LLM-generatable.
 */
export declare const F0AnalyticsDashboard: {
    <Filters extends FiltersDefinition = FiltersDefinition>({ filters, presets, defaultFilters, filtersValue, onFiltersChange, items, itemFilters, editMode, onLayoutChange, enableExport, exportFilename, onExportReady, resetKey, onTransformChart, onAskAi, onAskAiTarget, navigationFilters, filtersLoading, }: F0AnalyticsDashboardProps<Filters>): import("react").JSX.Element;
    displayName: string;
};
