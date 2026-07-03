import { RecordType } from "@/hooks/datasource"

/**
 * How the children of an expanded row are loaded.
 * - `"paginated"`: only the first page is loaded, remaining pages stay behind
 *   a "show more" row (default).
 * - `"all"`: pages are fetched eagerly until there are no more, so the subtree
 *   is fully visible without a "show more" row.
 */
export const nestedChildrenDisplayModes = ["paginated", "all"] as const
export type NestedChildrenDisplayMode =
  (typeof nestedChildrenDisplayModes)[number]

/**
 * Context passed to nested-expansion predicates.
 * `depth` is 0-based: root rows are depth 0, their children depth 1, etc.
 */
export type NestedExpansionContext<R extends RecordType> = {
  item: R
  depth: number
}

/**
 * Declarative criteria describing which rows should be expanded.
 * - `boolean`: expand every row (`true`) or none (`false`)
 * - `number`: expand rows whose depth is lower than the given value, i.e.
 *   `1` expands root rows (showing 2 levels), `2` also expands their children…
 * - predicate: expand rows for which the function returns `true`
 */
export type NestedExpansionCriteria<R extends RecordType> =
  | boolean
  | number
  | ((context: NestedExpansionContext<R>) => boolean)

/**
 * Identifies the row(s) an imperative operation applies to.
 * - `string | number`: matched against the item's `id` property
 * - predicate: matched against every currently rendered expandable row
 *
 * Only rows that are currently rendered can be targeted — a row hidden under
 * a collapsed ancestor is not rendered yet. Use `expandAll` with `depth`/
 * `where` for criteria that must also apply to rows revealed later.
 */
export type NestedRowTarget<R extends RecordType> =
  | string
  | number
  | ((context: NestedExpansionContext<R>) => boolean)

export type NestedExpandOptions = {
  /**
   * How the children of the expanded row(s) are loaded.
   * @default "paginated"
   */
  children?: NestedChildrenDisplayMode
}

export type NestedExpandAllOptions<R extends RecordType> =
  NestedExpandOptions & {
    /**
     * Maximum depth to auto-expand: rows with `depth < depth` are expanded.
     * Omit to expand every level.
     */
    depth?: number
    /** Additional predicate a row must satisfy to be auto-expanded. */
    where?: (context: NestedExpansionContext<R>) => boolean
  }

/**
 * Imperative controller for the nested rows of a table visualization.
 * Create one with `useNestedTable()` and pass it via the table visualization
 * options (`options.nested.control`).
 */
export interface NestedTableController<R extends RecordType> {
  /** Expands the rows matching the target. */
  expand: (target: NestedRowTarget<R>, options?: NestedExpandOptions) => void
  /** Collapses the rows matching the target (overrides any active policy). */
  collapse: (target: NestedRowTarget<R>) => void
  /** Toggles the rows matching the target. */
  toggle: (target: NestedRowTarget<R>, options?: NestedExpandOptions) => void
  /**
   * Auto-expands the whole tree (or a subset via `depth`/`where`). The
   * criteria also applies to rows revealed later by lazy loading, so deep
   * trees expand progressively as their children arrive.
   */
  expandAll: (options?: NestedExpandAllOptions<R>) => void
  /** Collapses every row and clears any active auto-expansion policy. */
  collapseAll: () => void
  /**
   * Expands the given path of item ids (ancestor → descendant) to reveal a
   * specific node, without touching the rest of the tree. Ids not rendered
   * yet stay pending and are expanded as soon as lazy loading reveals them,
   * so a deep node can be reached with a single call:
   *
   * ```ts
   * nestedTable.expandTo(["engineering", "engineering.platform"])
   * ```
   */
  expandTo: (
    path: Array<string | number>,
    options?: NestedExpandOptions
  ) => void
  /** Whether the first row matching the target is currently expanded. */
  isExpanded: (target: NestedRowTarget<R>) => boolean
  /** Items of the currently rendered rows that are expanded. */
  getExpandedItems: () => R[]
}

/**
 * Mount animation applied to child rows when a node is expanded.
 * - `"none"`: rows appear instantly (default, current behavior)
 * - `"fade"`: all revealed rows fade in at once
 * - `"stagger"`: rows fade in and settle downwards one after another
 * - `"slide"`: rows slide in from the left with a soft spring, sequentially
 * - `"pop"`: rows scale up into place with a springy pop, sequentially
 *
 * All animations are GPU-composited (`opacity`/`transform` only) and respect
 * `prefers-reduced-motion`. Sequenced ones stagger by sibling index and
 * depth, so cached subtrees still cascade level by level.
 */
export const nestedExpandAnimations = [
  "none",
  "fade",
  "stagger",
  "slide",
  "pop",
] as const
export type NestedExpandAnimation = (typeof nestedExpandAnimations)[number]

/**
 * Nested-rows behavior for the table visualization.
 */
export type NestedTableOptions<R extends RecordType> = {
  /**
   * Rows matching this criteria start expanded, including rows revealed
   * later by lazy loading. Evaluated when the table mounts; use `control`
   * to change the expansion at runtime.
   */
  defaultExpanded?: NestedExpansionCriteria<R>
  /**
   * How children of rows auto-expanded by `defaultExpanded` are loaded.
   * @default "paginated"
   */
  defaultExpandedChildren?: NestedChildrenDisplayMode
  /** Controller created with `useNestedTable()` for programmatic control. */
  control?: NestedTableController<R>
  /**
   * Mount animation for child rows revealed on expansion.
   * @default "none"
   */
  expandAnimation?: NestedExpandAnimation
  /**
   * Called when a row's expansion changes explicitly — via user interaction
   * or a targeted controller operation (`expand`, `collapse`, `toggle`).
   * Not called for policy-based auto-expansion (`defaultExpanded`,
   * `expandAll`, `collapseAll`).
   */
  onExpandedChange?: (
    event: NestedExpansionContext<R> & { expanded: boolean }
  ) => void
}

/**
 * Resolves a declarative expansion criteria against a row.
 */
export const matchesExpansionCriteria = <R extends RecordType>(
  criteria: NestedExpansionCriteria<R> | undefined,
  context: NestedExpansionContext<R>
): boolean => {
  if (criteria === undefined) return false
  if (typeof criteria === "boolean") return criteria
  if (typeof criteria === "number") return context.depth < criteria
  return criteria(context)
}
