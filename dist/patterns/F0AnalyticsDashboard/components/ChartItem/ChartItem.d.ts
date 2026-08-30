import { DropdownItem } from '../../../../experimental/Navigation/Dropdown';
import { F0DataChartProps } from '../../../../kits/F0DataChart';
import { FiltersDefinition, FiltersState } from '../../../OneFilterPicker/types';
import { DashboardChartConfig, DashboardChartData, DashboardChartItem, DashboardItemFiltersConfig, F0AnalyticsDashboardAskAiTarget, F0AnalyticsDashboardAskAiTargetWithQuote, F0AnalyticsDashboardPointClick } from '../../types';
/** @internal Exported for focused quote-contract tests. */
export declare function buildPointQuoteText(title: string, chart: F0DataChartProps, point: F0AnalyticsDashboardPointClick): string;
type AccessibleChartPoint = {
    key: string;
    point: F0AnalyticsDashboardPointClick;
};
/** @internal Exported for keyboard-surface contract tests. */
export declare function buildAccessibleChartPoints(chart: F0DataChartProps, selected?: Record<string, boolean>): AccessibleChartPoint[];
/** @internal Exported for keyboard-surface contract tests. */
export declare function hasAccessibleChartPoint(chart: F0DataChartProps, selected?: Record<string, boolean>): boolean;
/**
 * Build F0DataChart props. When `overrideType` differs from the item's
 * original chart type, the data is converted via the canonical adapter.
 *
 * @internal Exported for unit tests — not part of the package's public API.
 */
export declare function buildChartProps(item: DashboardChartItem, data: DashboardChartData, overrideType?: DashboardChartConfig["type"], overrideOrientation?: "vertical" | "horizontal"): F0DataChartProps;
/**
 * Whether an expanded `item` should be sized by its content rather than by the
 * viewport. Only horizontal bar charts qualify: expanding drops their scrollable
 * row window (see `showAllCategories`) and draws every category at a fixed row
 * height, which is an intrinsic height the widget has to accommodate. Shared
 * with `DashboardGrid` so the fullscreen container and the card agree.
 *
 * Guarded by `isRenderableChart` first: a host app whose type mapper has no
 * case hands over `chart: undefined`, and this runs before the render path
 * degrades that to the error state.
 */
export declare function chartItemFitsContent<Filters extends FiltersDefinition>(item: DashboardChartItem<Filters>): boolean;
interface ChartItemProps<Filters extends FiltersDefinition> {
    item: DashboardChartItem<Filters>;
    filters: FiltersState<Filters>;
    actions?: DropdownItem[];
    itemFilters?: DashboardItemFiltersConfig;
    editMode?: boolean;
    handleDelete?: (itemId: string) => void;
    onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void;
    onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void;
    onTransformChart?: (itemId: string, newType: string, orientation?: "vertical" | "horizontal") => void;
    isFullscreen?: boolean;
    onFullscreenChange?: (fullscreen: boolean) => void;
}
export declare function ChartItem<Filters extends FiltersDefinition>({ item, filters, actions, itemFilters, editMode, handleDelete, onAskAi, onAskAiTarget, onTransformChart, isFullscreen, onFullscreenChange, }: ChartItemProps<Filters>): import("react").JSX.Element;
export {};
