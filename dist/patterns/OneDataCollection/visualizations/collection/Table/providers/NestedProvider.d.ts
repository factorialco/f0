import { ReactNode } from 'react';
import { RecordType } from '../../../../../../hooks/datasource';
import { ChildrenResponse } from '../../../../../../hooks/datasource/types/nested.typings';
/**
 * How rows start out when the user has not touched them yet.
 *
 * - `true` / `false` — every row, or none (the default).
 * - a number — expand rows shallower than that depth, so `1` opens the
 *   top-level rows and reveals depth 1.
 * - a predicate — anything else, e.g. `(node) => node.type !== "role"`.
 *
 * The policy is re-evaluated per row rather than resolved into a set of ids up
 * front: rows evaluate it as they mount, so an expanded row's children evaluate
 * it in turn and the cascade falls out of the component tree. That works the
 * same whether the tree is already in memory or fetched lazily.
 */
export type DefaultExpandedPolicy<R extends RecordType> = boolean | number | ((record: R, context: {
    depth: number;
}) => boolean);
interface NestedDataContextValue<R extends RecordType> {
    fetchedData: Record<string, ChildrenResponse<R>>;
    updateFetchedData: (rowId: string, data: ChildrenResponse<R>) => void;
    clearFetchedData: () => void;
    /**
     * Rows the user has explicitly opened or closed, persisted here so they
     * survive a row unmounting (collapsing a parent) or the parent re-rendering
     * (e.g. a GraphQL refetch).
     *
     * Tri-state on purpose: an ABSENT entry means "the user has not decided", and
     * only then does `isExpandedByDefault` get a say. Recording the `false`
     * instead of deleting the entry is what keeps a deliberate collapse from
     * being immediately undone by the default policy.
     */
    expandedRowIds: Record<string, boolean>;
    setRowExpanded: (rowId: string, expanded: boolean) => void;
    isExpandedByDefault: (record: R, depth: number) => boolean;
    /**
     * Bumped every time the tree is reset (a filter/sorting/navigation change).
     * Rows key their "already asked for my default children" flag on it, so a
     * reset re-arms the default-expansion request instead of leaving an opened
     * row stuck with the children that `clearFetchedData` just wiped.
     */
    resetGeneration: number;
}
export declare const NestedDataProvider: <R extends RecordType>({ children, defaultExpanded, currentFilters, currentSortings, currentNavigationFilters, }: {
    children: ReactNode;
    defaultExpanded?: DefaultExpandedPolicy<R>;
    /**
     * The collection's current filters/sortings/navigation. Compared by identity
     * to detect a tree reset. Detecting it here (rather than per row) is what makes
     * the reset survive rows unmounting and remounting as the list re-renders: a
     * per-row check re-seeds on remount and would leave a fresh row showing the
     * previous filter's cached children.
     */
    currentFilters?: unknown;
    currentSortings?: unknown;
    currentNavigationFilters?: unknown;
}) => import("react").JSX.Element;
export declare const useNestedDataContext: <R extends RecordType>() => NestedDataContextValue<R>;
export {};
