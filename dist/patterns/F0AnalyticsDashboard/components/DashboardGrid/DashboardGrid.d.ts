import { FiltersDefinition, FiltersState } from '../../../OneFilterPicker/types';
import { DashboardItem as DashboardItemType, DashboardItemFiltersConfig, DashboardItemLayout, F0AnalyticsDashboardAskAiTarget, F0AnalyticsDashboardAskAiTargetWithQuote } from '../../types';
interface DashboardGridProps<Filters extends FiltersDefinition> {
    items: DashboardItemType<Filters>[];
    itemFilters?: (item: DashboardItemType<Filters>) => DashboardItemFiltersConfig | undefined;
    filters: FiltersState<Filters>;
    editMode?: boolean;
    onLayoutChange?: (layout: DashboardItemLayout[]) => void;
    /** Incrementing counter that forces the grid to reset rows to initial layout. */
    resetKey?: number;
    /** Called when a chart item's type is changed */
    onTransformChart?: (itemId: string, newType: string, orientation?: "vertical" | "horizontal") => void;
    /** Overrides the built-in "Ask One" action on a widget. See `F0AnalyticsDashboardProps.onAskAi`. */
    onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void;
    /** Observes built-in Ask One actions without replacing chat behavior. */
    onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void;
    /**
     * Notifies the parent when the grid enters/exits a "fill height" mode —
     * triggered by click-to-fullscreen on a multi-item dashboard. The parent
     * (`F0AnalyticsDashboard`) uses this to switch its root layout to the same
     * `flex-1 h-full` chain that single-item dashboards use, so the fullscreen
     * item fills the remaining viewport without producing scroll.
     */
    onFullscreenChange?: (isFullscreen: boolean) => void;
}
/**
 * Flex-row dashboard grid with drag-and-drop reordering and row resize.
 *
 * All items in a row share equal width (`flex: 1`).
 * In edit mode, items can be dragged between rows (max MAX_PER_ROW per row)
 * and rows can be vertically resized via a bottom handle.
 */
export declare function DashboardGrid<Filters extends FiltersDefinition>({ items, itemFilters, filters, editMode, onLayoutChange, resetKey, onTransformChart, onAskAi, onAskAiTarget, onFullscreenChange, }: DashboardGridProps<Filters>): import("react").JSX.Element | null;
export {};
