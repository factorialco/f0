import { FiltersDefinition, FiltersState } from '../../../OneFilterPicker/types';
import { DashboardItemFiltersConfig, DashboardMetricItem, F0AnalyticsDashboardAskAiTarget, F0AnalyticsDashboardAskAiTargetWithQuote } from '../../types';
interface MetricItemProps<Filters extends FiltersDefinition> {
    item: DashboardMetricItem<Filters>;
    filters: FiltersState<Filters>;
    actions?: import('../../../../experimental/Navigation/Dropdown').DropdownItem[];
    itemFilters?: DashboardItemFiltersConfig;
    editMode?: boolean;
    handleDelete?: (itemId: string) => void;
    onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void;
    onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void;
    isFullscreen?: boolean;
    onFullscreenChange?: (fullscreen: boolean) => void;
}
type MetricTrend = {
    percent: number;
    direction: "up" | "down" | "flat";
};
/**
 * The formatted value + optional trend, aligned within the widget body.
 *
 * Bottom-left by default; once the body grows taller than 220px it centers on
 * both axes so the number sits in the middle of a large tile instead of
 * hugging the bottom edge. Height is tracked with a `ResizeObserver`, so it
 * reacts to grid resizes and fullscreen toggles.
 */
export declare function MetricValue({ value, trend, }: {
    value: string;
    trend?: MetricTrend;
}): import("react").JSX.Element;
/**
 * Renders a single metric (big number) dashboard item.
 *
 * Displays a large formatted number with an optional trend indicator
 * showing the change vs the previous value.
 */
export declare function MetricItem<Filters extends FiltersDefinition>({ item, filters, actions, itemFilters, editMode, handleDelete, onAskAi, onAskAiTarget, }: MetricItemProps<Filters>): import("react").JSX.Element;
export {};
