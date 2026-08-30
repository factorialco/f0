import { FiltersDefinition, FiltersState } from '../OneFilterPicker/types';
import { GroupingDefinition, OnSelectItemsCallback, RecordType } from '../../hooks/datasource';
import { SortingsDefinition } from '../../hooks/datasource/types/sortings.typings';
import { OnBulkActionCallback } from './types';
import { Visualization } from './visualizations/collection';
import { ActionBarStatus } from './components/ActionBar';
import { DataCollectionStatusComplete, DataCollectionStorageFeaturesDefinition } from './hooks/useDataColectionStorage/types';
import { DataCollectionSource } from './hooks/useDataCollectionSource';
import { CustomEmptyStates } from './hooks/useEmptyState';
import { ItemActionsDefinition } from './item-actions';
import { NavigationFiltersDefinition } from './navigationFilters/types';
import { SummariesDefinition } from './summary';
/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It consumes a data source (created by useDataCollectionSource) and displays it through one or more visualizations.
 *
 * DataCollection is separated from useDataCollectionSource to:
 * 1. Support the composition pattern - data sources can be created and managed independently
 * 2. Allow a single data source to be visualized in multiple ways simultaneously
 * 3. Enable reuse of the same data source in different parts of the application
 * 4. Provide a clean separation of concerns between data management and UI rendering
 *
 * @template Record - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 *
 * @param source - The data source containing filters, data, and state management
 * @param visualizations - Array of available visualization options (e.g., table, card view)
 *
 * @returns A JSX element containing:
 * - Filter controls (if filters are defined)
 * - Visualization selector (if multiple visualizations are available)
 * - The selected visualization of the data
 */
export type OneDataCollectionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    visualizations: ReadonlyArray<Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    onSelectItems?: OnSelectItemsCallback<R, Filters>;
    onBulkAction?: OnBulkActionCallback<R, Filters>;
    /**
     * Opt-in to auto-managed bulk-action status. When `true`, a `Promise`
     * returned from `onBulkAction` drives the ActionBar through
     * `loading → success → idle` (or `loading → error`) automatically.
     *
     * Opt-in is required because some consumers open modals from their bulk
     * action handler whose promise resolves when the modal OPENS rather than
     * when the user confirms — auto-managing those would flash a premature
     * success. When `false` (default), async handlers keep today's
     * fire-and-forget behavior. For those cases, use `bulkActionStatus` to
     * drive status yourself from the modal's lifecycle.
     * @default false
     */
    autoManageBulkActionStatus?: boolean;
    /**
     * Controlled status for the bulk-action ActionBar. Designed for multi-step
     * flows (confirmation modals, server polling) where the component can't
     * derive status from a single promise.
     *
     * - **`"idle"`** — transparent: F0's auto-manage handles immediate
     *   (promise-returning) actions normally. Pass `"idle"` even when not
     *   actively controlling; no need for a `status !== "idle" ? status : undefined`
     *   conditional.
     * - **`"loading"`** — consumer is performing an async operation (e.g. after
     *   modal confirm). F0 disables actions and shows button-level spinners.
     * - **`"success"`** — mutation resolved. F0 shows the checkmark, then after
     *   1.5 s auto-clears selection and falls back to auto-manage. The consumer
     *   does not need to set `"idle"` or clear selection manually.
     * - **`"error"`** — mutation rejected. F0 shows the error state and wiggle
     *   animation. Persists until the consumer sets a different status.
     *   Note: selection change only auto-clears the internal (auto-managed)
     *   error state — when using controlled mode the consumer must explicitly
     *   set a new status to dismiss the error.
     *
     * When this prop is provided (even as `"idle"`), void-returning handlers
     * will not auto-clear selection — F0 assumes the consumer has modal-gated
     * actions and owns the selection lifecycle. Pair with
     * `autoManageBulkActionStatus={true}` for mixed immediate + modal flows.
     */
    bulkActionStatus?: ActionBarStatus;
    emptyStates?: CustomEmptyStates;
    onTotalItemsChange?: (totalItems: number) => void;
    fullHeight?: boolean;
    /** Function to handle state change */
    onStateChange?: (state: DataCollectionStatusComplete<FiltersState<Filters>>) => void;
    /** Key for the data collection settings and state, must be unique for each data collection and contain the version e.g. "employees/v1"
     */
    id?: string;
    /** Storage for the data collection settings and state: use false to disable the storage */
    storage?: false | {
        /** Features for the data collection storage , for example you can disable the storage for the data collection filters state
         * You can use "*" for all features and ! to disable a feature
         *
         * For example:
         * - "*" - will use all storage features (empty "" means all)
         * - "filters" - will use only the storage for the data collection filters state
         * - "filters, sortings" - will use the storage for the data collection filters and sortings state
         * - "*, !filters" - will not use the storage for the data collection filters state
         * - "!filters, sortings" - will not use the storage for the data collection filters and sortings state
         *
         */
        features?: DataCollectionStorageFeaturesDefinition;
    };
    /**
     * By default the data collection reads its filters/search/sortings/
     * visualization/page from the URL query params on mount and reflects any later
     * changes back into them (see `dataCollectionUrlParams`). This applies to any
     * collection — no `id` is required, and params are not scoped to one, so a
     * single URL-synced collection per page is assumed. Set this to `true` to opt
     * out of URL syncing.
     */
    disableUrlParams?: boolean;
    /**
     * @deprecated removes the horizontal padding from the data collection
     */
    tmpFullWidth?: boolean;
    /** Enable CSV export action in the collection actions menu.
     * - `true` enables export with default settings
     * - An object allows customizing the export filename
     * - `false` or `undefined` disables the export action (default)
     */
    csvExport?: boolean | {
        filename?: string;
    };
    /** Hide the dashed "Save view" chip (preset save action). Opt-in for
     * collections where saving views doesn't apply (e.g. the org-chart graph).
     * Defaults to `false` — behavior unchanged for every existing consumer. */
    savingViewsDisabled?: boolean;
    /** Visualization index rendered on mount, before async storage/URL restore — lets a consumer boot straight into the persisted view and skip the default→restore bounce. Defaults to 0. */
    initialVisualization?: number;
};
declare const OneDataCollectionComp: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ source, visualizations, onSelectItems, onBulkAction, autoManageBulkActionStatus, bulkActionStatus: controlledBulkActionStatus, onStateChange, emptyStates, fullHeight, storage, id, disableUrlParams, tmpFullWidth, csvExport, savingViewsDisabled, initialVisualization, }: OneDataCollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => JSX.Element;
export { OneDataCollectionComp };
