import { FiltersDefinition, FiltersState } from '../../../OneFilterPicker/types';
import { DropdownItem } from '../../../../experimental/Navigation/Dropdown';
import { DashboardCollectionItem, DashboardItemFiltersConfig, F0AnalyticsDashboardAskAiTarget, F0AnalyticsDashboardAskAiTargetWithQuote } from '../../types';
interface CollectionItemProps<Filters extends FiltersDefinition> {
    item: DashboardCollectionItem<Filters>;
    filters: FiltersState<Filters>;
    actions?: DropdownItem[];
    itemFilters?: DashboardItemFiltersConfig;
    editMode?: boolean;
    handleDelete?: (itemId: string) => void;
    onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void;
    onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void;
    isFullscreen?: boolean;
    onFullscreenChange?: (fullscreen: boolean) => void;
}
/**
 * Renders a single data collection dashboard item.
 *
 * Calls `item.createSource(filters)` to produce a DataCollectionSourceDefinition,
 * then feeds it to `useDataCollectionSource` which manages the full lifecycle.
 * Dashboard-level filters are already baked into the source definition.
 * Opt-in per-widget filters render in the shared widget header, consistently
 * with chart and metric items.
 */
export declare function CollectionItem<Filters extends FiltersDefinition>({ item, filters, actions, itemFilters, editMode, handleDelete, onAskAi, onAskAiTarget, isFullscreen, onFullscreenChange, }: CollectionItemProps<Filters>): import("react").JSX.Element;
export {};
