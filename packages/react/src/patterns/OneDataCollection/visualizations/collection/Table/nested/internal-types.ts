import { RecordType } from "@/hooks/datasource"

import {
  NestedChildrenDisplayMode,
  NestedExpansionCriteria,
  NestedTableController,
} from "./types"

/**
 * Active auto-expansion policy. Evaluated for every rendered expandable row
 * that has no explicit override, so it cascades to rows revealed later by
 * lazy loading.
 */
export type NestedExpansionPolicy<R extends RecordType> = {
  criteria: NestedExpansionCriteria<R>
  children: NestedChildrenDisplayMode
}

/**
 * Expansion state held by the NestedDataProvider.
 * Kept as a single object so imperative operations update it atomically.
 */
export type NestedExpansionState<R extends RecordType> = {
  /**
   * Explicit per-row overrides (user clicks or controller calls). `false`
   * entries persist so a manual collapse wins over an active policy.
   */
  overrides: Record<string, boolean>
  /** Rows whose children must be loaded eagerly (no "show more"). */
  eager: Record<string, boolean>
  policy: NestedExpansionPolicy<R> | null
}

/**
 * Provider-side implementation of the controller operations. The controller
 * created by `useNestedTable()` forwards its calls to the engine once the
 * table (and therefore the provider) is mounted.
 */
export type NestedExpansionEngine<R extends RecordType> = Pick<
  NestedTableController<R>,
  | "expand"
  | "collapse"
  | "toggle"
  | "expandAll"
  | "collapseAll"
  | "expandTo"
  | "isExpanded"
  | "getExpandedItems"
>

/**
 * Internal shape of the controller returned by `useNestedTable()`. The
 * binding method is private API between the hook and NestedDataProvider.
 */
export interface NestedTableControllerInternal<
  R extends RecordType,
> extends NestedTableController<R> {
  /**
   * @private Binds the controller to a mounted provider. Returns an unbind
   * cleanup. Operations invoked while unbound are queued and replayed on bind.
   */
  __bindEngine: (engine: NestedExpansionEngine<R>) => () => void
}

/** Entry registered by every rendered expandable row. */
export type NestedRowRegistryEntry<R extends RecordType> = {
  item: R
  depth: number
}

/**
 * Normalizes a search term so `""` and `undefined` are treated as
 * equivalent ("no active search"). Without this, a consumer calling
 * `setSearch("")` on mount (e.g. to initialize a controlled search input)
 * produces an `undefined → ""` transition that would otherwise be read as a
 * real search change by the nested-rows cache invalidation and
 * `hasActiveFilters` computation.
 */
export const normalizeSearch = (
  search: string | undefined
): string | undefined => search || undefined
