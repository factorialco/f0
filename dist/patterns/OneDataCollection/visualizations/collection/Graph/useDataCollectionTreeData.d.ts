import { DataError, FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../hooks/datasource';
import { GraphNode } from '../../../../F0Graph';
import { DataCollectionSource } from '../../../hooks/useDataCollectionSource';
import { ItemActionsDefinition } from '../../../item-actions';
import { NavigationFiltersDefinition } from '../../../navigationFilters/types';
import { SummariesDefinition } from '../../../summary';
import { OnLoadDataCallback, OnLoadErrorCallback } from '../../../types';
import { GraphVisualizationOptions } from './types';
type GraphSource<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = DataCollectionSource<R, Filters, Sortings, Summaries, ItemActionsDefinition<R>, NavigationFilters, Grouping>;
export type UseDataCollectionTreeData<R extends RecordType> = {
    /** All loaded nodes (grows as the frontier is expanded). */
    nodes: GraphNode<R>[];
    /** Controlled expanded set for F0Graph. */
    expandedNodes: Set<string>;
    /**
     * Updates the expanded set and pre-loads the children of every newly visible
     * node, so collapsed-but-visible nodes always show their expand affordance.
     */
    setExpandedNodes: (next: Set<string>) => void;
    /** Node F0Graph should center on (set by `revealNode`). */
    focusedNode: string | undefined;
    /** Highlighted node set (set by `revealNode`). */
    highlightedNodes: Set<string>;
    /**
     * Reveals `nodeId`: loads its ancestor path, expands the ancestors, then
     * focuses and highlights it. Used by the in-graph search on result select.
     */
    revealNode: (nodeId: string) => Promise<void>;
    /** Clears the centered/highlighted node (e.g. on empty-canvas click). */
    clearFocus: () => void;
    /**
     * Viewport-driven hydration loader to pass to F0Graph, or `undefined` when
     * `loadNodeData` isn't configured (eager mode). Fetches full records for the
     * on-screen nodes and merges them into `nodes`.
     */
    loadVisibleNodeData?: (ids: string[]) => void;
    isInitialLoading: boolean;
    error: DataError | null;
};
export declare function useDataCollectionTreeData<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(source: GraphSource<R, Filters, Sortings, Summaries, NavigationFilters, Grouping>, options: GraphVisualizationOptions<R, Filters, Sortings>, callbacks: {
    onLoadData: OnLoadDataCallback<R, Filters>;
    onLoadError: OnLoadErrorCallback;
}): UseDataCollectionTreeData<R>;
export {};
