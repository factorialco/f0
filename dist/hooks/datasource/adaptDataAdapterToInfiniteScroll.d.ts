import { FiltersDefinition } from '../../patterns/OneFilterPicker/types';
import { DataAdapter, RecordType } from './types';
/**
 * Wraps a `pages`-paginated data adapter so it presents itself as
 * `infinite-scroll`, letting page-based sources (the typical list adapter) be
 * consumed by components that only support cursor pagination — e.g.
 * `F0Select` and the breadcrumb jump-to select.
 *
 * The cursor is the stringified next page: `cursor: null` fetches page 1,
 * `cursor: "3"` fetches page 3, and `hasMore` is derived from
 * `currentPage < pagesCount`. All three `fetchData` return channels (sync,
 * Promise, Observable of PromiseState) are mapped; loading/error emissions
 * pass through untouched. Adapters that already are `infinite-scroll` /
 * `no-pagination` are returned as-is (same reference).
 */
export declare const adaptDataAdapterToInfiniteScroll: <R extends RecordType, Filters extends FiltersDefinition>(dataAdapter: DataAdapter<R, Filters>) => DataAdapter<R, Filters>;
