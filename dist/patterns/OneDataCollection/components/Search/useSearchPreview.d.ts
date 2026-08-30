import { RecordType } from '../../../../hooks/datasource';
import { SearchPreview } from '../../hooks/useDataCollectionSource/types';
import { SearchResultItem } from './Search';
type UseSearchPreviewReturn = {
    results: SearchResultItem[];
    /** Initial page (page 0) is loading for the current query. */
    loading: boolean;
    /** A further page is being appended via infinite scroll. */
    loadingMore: boolean;
    /** Whether another page can be pulled for the current query. */
    hasMore: boolean;
    /** Request the next page (no-op while already loading or when exhausted). */
    onLoadMore: () => void;
    onSelect: (id: string) => void;
    /**
     * Increments on every result selection. Consumers derive their own state
     * from `onSelect` (e.g. a graph `revealNodeId`), but re-picking the same
     * result leaves that state unchanged — so this monotonic nonce lets a
     * visualization re-fire its action on a repeat pick (the graph re-centers on
     * the same node, like "Find me").
     */
    selectionNonce: number;
};
/**
 * Drives the shared header-search preview from `source.searchPreview`: runs the
 * consumer's `search(query, page)` for the current (debounced) query, maps the
 * records to preview rows, and appends further pages on demand (infinite
 * scroll). Returns the rows, loading flags, `hasMore`/`onLoadMore` for
 * pagination, and an `onSelect` that forwards the picked record.
 */
export declare function useSearchPreview<R extends RecordType>(searchPreview: SearchPreview<R> | undefined, query: string | undefined): UseSearchPreviewReturn;
export {};
