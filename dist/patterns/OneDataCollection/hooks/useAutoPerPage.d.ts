import { RefObject } from 'react';
/**
 * Whether a collection should derive its page size from the available height.
 *
 * It applies to page-based, `fullHeight` collections that either opt in
 * explicitly with `perPage: "auto"` or simply leave `perPage` unset — in a
 * full-height layout an unspecified page size means "fill the height", so it
 * defaults to auto instead of a hardcoded fallback. A numeric `perPage` is
 * always respected as-is, and without `fullHeight` there is no bounded height
 * to measure so it never applies.
 */
export declare function shouldAutoSizePerPage(dataAdapter: {
    paginationType?: string;
    perPage?: number | "auto";
}, fullHeight: boolean | undefined): boolean;
/**
 * Upper bound for the resolved page size, so a very tall container never
 * fetches an unreasonably large page.
 */
export declare const AUTO_PER_PAGE_MAX = 30;
/**
 * Number of rows the min-height reservation keeps space for (see
 * `getAutoPerPageMinHeight`). This is NOT a lower bound on the page size — the
 * page size always matches what actually fits, so it never overflows. It only
 * sizes the space a squeezed collection reserves to stay usable.
 */
export declare const AUTO_PER_PAGE_MIN_RESERVED_ROWS = 10;
/**
 * Row-height estimates used to seed the FIRST page in `perPage: "auto"` mode.
 * The real page size is then derived by measuring the rendered content (see
 * `useAutoPerPage`).
 *
 * These MUST be a lower bound of the real row height: the measurement only
 * trims the seeded page down to what fits, never grows it, so an estimate above
 * the real height would under-fetch and leave the collection short. A view with
 * a fixed row height can seed with that exact height (first page is already
 * right, nothing reflows); content-variable views seed at the baseline and let
 * the measurement trim.
 *
 * - `default` (table, editable table) — the baseline min row height. Their real
 *   height depends on column content (wrapping text, inline controls), so they
 *   seed low and rely on the measurement to trim.
 * - `list` — list rows are a fixed height (`min-h-[64px]`, ~68px rendered).
 */
export declare const ESTIMATED_ROW_HEIGHT = 48;
export declare const ESTIMATED_LIST_ROW_HEIGHT = 68;
/**
 * Minimum height a `perPage: "auto"` collection reserves so it stays usable
 * (space for AUTO_PER_PAGE_MIN_RESERVED_ROWS rows plus chrome). Applied as a
 * `min-height` so the collection stays visible when its siblings would
 * otherwise squeeze it to nothing — the whole page scrolls instead of the
 * collection disappearing.
 */
export declare function getAutoPerPageMinHeight(rowHeight?: number): number;
/**
 * Resolves `perPage: "auto"` so a page fills the available vertical space
 * without overflowing.
 *
 * How it works: an estimate seeds the first page so the visualization renders,
 * then — once `ready` (the first fetch has resolved) — the real page size is
 * derived by measuring the rendered content. Comparing the scroll container's
 * visible height to its total content height yields the exact number of items
 * that fit, independent of the visualization's row height or column count:
 *
 *   itemsThatFit = seedPerPage × clientHeight / scrollHeight
 *
 * This works for tables, lists and (multi-column) card grids alike, because a
 * grid's total height already reflects its columns. The result is exactly what
 * fits (never forced higher, so a page never overflows), bounded to at most
 * AUTO_PER_PAGE_MAX. A squeezed collection stays usable via the min-height
 * reservation (see `getAutoPerPageMinHeight`), not by inflating the page size.
 *
 * The size is measured once per visualization and kept stable across resizes:
 * resizing must not shift page boundaries under the user (an item would jump
 * between pages) nor trigger refetch churn while dragging a window edge. It is
 * re-derived when `rowHeight` changes, i.e. when the active visualization
 * switches to one with a different row height.
 *
 * Requires a height-bounded container (the collection's `fullHeight` mode).
 * In an unbounded container the measured height would derive from the content
 * itself, creating a feedback loop — callers must not enable the hook there.
 *
 * @param containerRef the visualization container to measure
 * @param enabled whether `perPage: "auto"` is active
 * @param options.rowHeight per-visualization seed estimate
 * @param options.ready `true` once the first page of data has rendered and can
 *   be measured
 * @param options.measureKey re-seeds and re-measures whenever it changes (e.g.
 *   the active visualization), since each visualization has its own row layout
 * @returns the resolved page size, or `undefined` until seeded (or disabled)
 */
export declare function useAutoPerPage(containerRef: RefObject<HTMLElement | null>, enabled: boolean, { rowHeight, ready, measureKey, }?: {
    rowHeight?: number;
    ready?: boolean;
    measureKey?: unknown;
}): number | undefined;
