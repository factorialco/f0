import { ReactNode } from 'react';
import { AvatarVariant } from '../../../../../components/avatars/F0Avatar';
import { RecordType } from '../../../../../hooks/datasource';
import { SortingsDefinition } from '../../../../../hooks/datasource/types/sortings.typings';
import { F0GraphNodeTag, F0GraphNodeTagColumn, ViewportInset, ZoomPreset } from '../../../../F0Graph';
import { FiltersDefinition, FiltersState } from '../../../../OneFilterPicker/types';
export type GraphVisualizationSettings = {
    /** Metadata order (tag-type ids), matching the table column settings shape. */
    order?: string[];
    /** Hidden metadata (tag-type ids). */
    hidden?: string[];
};
/**
 * Configuration for the "graph" visualization (org-chart style).
 *
 * The hierarchy is fetched on demand from the same `dataAdapter` of the source:
 * `childrenFilters(parentId)` returns the filter that the adapter understands as
 * "the direct children of parentId" (`null` = the roots). Children are loaded
 * when a node is expanded.
 */
export type GraphVisualizationOptions<R extends RecordType, Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    /** Primary line of text for a node. */
    title: (record: R) => string;
    /** Secondary line of text for a node. */
    subtitle?: (record: R) => string;
    /**
     * Avatar shown on the leading side of the node pill. Its variant also drives
     * the node silhouette: `person` → circular dot/pill, any other variant
     * (`team`, `icon`, …) → rounded-square card.
     */
    avatar?: (record: R) => AvatarVariant;
    /**
     * Tags rendered in the node metadata row. A tag may set `column` to place it
     * in its own show/hide column independent of its visual `type` (e.g. a second
     * `raw` pill that must not merge into the first `raw` column).
     */
    tags?: (record: R) => F0GraphNodeTag[];
    /**
     * Tag columns present on the nodes. When provided, the controls bar gains a
     * toggle to show/hide each metadata column (like configuring table columns).
     * Values are tag `column` keys (or `type` when a tag has no `column`).
     */
    nodeTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>;
    /** Friendly labels per tag column, shown in the metadata visibility toggle. */
    nodeTagTypeLabels?: Partial<Record<F0GraphNodeTagColumn, string>>;
    /** Tag columns visible by default. Defaults to all of `nodeTagTypes`. */
    defaultVisibleTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>;
    /** Tag columns that are always visible and cannot be hidden in the settings. */
    pinnedTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>;
    /**
     * Tag columns the actor is not allowed to see, mapped to the reason. Each is
     * still listed in the settings but with its toggle forced OFF and disabled,
     * and the given (already-translated) text shown in a tooltip. Unlike
     * `pinnedTagTypes` (locked ON, drawn with a lock icon), these render no lock
     * icon — the disabled switch + tooltip is the affordance. The caller should
     * also omit these columns' tags from `tags(record)`.
     */
    lockedTagTypes?: Partial<Record<F0GraphNodeTagColumn, string>>;
    /**
     * Floating toolbar shown above a node while it is selected. Provide the
     * action buttons (e.g. `<F0Button size="sm" … />`) for the given record.
     */
    nodeActions?: (record: R) => ReactNode;
    /** Resolves a stable node id from a record. Defaults to `String(record.id)`. */
    getNodeId?: (record: R) => string;
    /** Number of children a node has. A node is expandable when this is `> 0`. */
    getChildrenCount: (record: R) => number;
    /**
     * Whether this record's children render as a vertical stack of compact rows
     * directly under it, instead of the default horizontal fan-out. Use it for
     * children that read as a list belonging to the record rather than as
     * branches in their own right — job levels under a role, plan tiers under a
     * product. A stacked group reserves no horizontal space, so the record's
     * siblings close in around it.
     *
     * Only applies when every child is a leaf (`getChildrenCount` returns 0 for
     * all of them); a group with an expandable child keeps the normal fan-out.
     * Stacked rows are labelled with `title` and can carry `stackedTrailing`;
     * `avatar` / `subtitle` / `tags` do not apply to them.
     */
    stackNodes?: (record: R) => boolean;
    /**
     * Trailing content for a stacked row — a count or a small icon button.
     * Rendered at the row's trailing edge; clicks inside it do not select the
     * node. Ignored for records that are not rendered as stacked rows.
     *
     * Not a selection affordance: F0Graph has no multi-select, so a checkbox here
     * would promise a behaviour the graph does not have.
     */
    stackedTrailing?: (record: R) => ReactNode;
    /**
     * Returns the filters that, applied to the source `dataAdapter`, fetch the
     * direct children of `parentId`. `parentId === null` must return the roots.
     */
    childrenFilters: (parentId: string | null) => Partial<FiltersState<Filters>>;
    /**
     * How many levels to load and expand on the initial render.
     * - `0`: show only the roots; every level below loads on click.
     * - `1` (default): also show the roots' direct children.
     * - `2`: also pre-load the grandchildren for a fuller first view.
     */
    defaultExpandDepth?: number;
    /**
     * Id of a node to reveal: loads its ancestor path, expands the branch and
     * centers/highlights it. Driven by the shared Data Collection search — set it
     * from `searchPreview.onSelect`.
     */
    revealNodeId?: string;
    /**
     * Id of a node to reveal **once, on entry** (e.g. the current user, or the
     * root of their branch): when the tree first becomes ready, its ancestor
     * path is loaded/expanded and the viewport centers on it. Unlike
     * `revealNodeId` (which is ignored on entry so search stays clean), this is
     * the opt-in "open the org chart already looking at me" behaviour. Requires
     * `loadNodePath` to reveal nodes in not-yet-expanded branches. Omit to keep
     * the default entry view (roots expanded to `defaultExpandDepth`).
     */
    focusOnEntry?: string;
    /**
     * Id of a node to mark as **selected on entry** — the click-selection ring, so
     * a deep link lands on the graph looking the way a user's own click leaves it,
     * not just framed. Seeded on the first render; the selection then follows
     * normal clicks/keyboard (this is a one-shot entry seed, not a controlled
     * value). Pair it with `focusOnEntry` (usually the same id) so the node's
     * branch is expanded and framed — otherwise the ring isn't visible until its
     * branch is opened. Unlike `revealNodeId` (search) it sets the selection, not
     * the reveal highlight. Providing it puts the graph's selection in controlled
     * mode; omitting it leaves selection uncontrolled (the default).
     */
    initialSelectedNodeId?: string;
    /**
     * Resolves the ancestor path (root → … → matched node) for a node so it can
     * be revealed, returning the records in root-first order. Required for
     * revealing nodes in branches that have not been expanded yet.
     */
    loadNodePath?: (nodeId: string) => Promise<R[]>;
    /** Optional parent accessor used when linking the revealed ancestor path. */
    getParentId?: (record: R) => string | null;
    /**
     * Opt into two-phase (viewport-driven) hydration. When provided, the tree is
     * built from whatever lightweight records `childrenFilters`/`fetchData`
     * return, and the full record is fetched — batched, once per node — only for
     * the nodes that enter the viewport, via this loader. The returned records
     * replace each node's `data` (matched by node id) and clear its loading
     * placeholder. Best paired with `enableNodeWindowing`. Omit for the current
     * eager behavior (structure and data fetched together per expansion).
     *
     * The "lightness" of the initial records is entirely the source's choice and
     * transparent to the hook — no special adapter mode is required.
     */
    loadNodeData?: (ids: string[]) => Promise<R[]>;
    /**
     * Apply targeted updates to the already-loaded tree **in place**, without the
     * full reset (and collapse to `defaultExpandDepth`) that a filter change
     * triggers. Use it to reflect real-time / collaborative changes while keeping
     * the user's current expansion and viewport.
     *
     * Bump `version` to apply a batch **once** (the number dedups against React
     * re-renders — reuse the same object identity freely):
     * - `upsert` records are matched by node id: an existing node has its `data`,
     *   `childrenCount` and parent refreshed (re-parenting if `getParentId`
     *   returns a new parent); an unknown record is inserted when it is attachable
     *   (a root, or its parent is already in the tree — a child of a not-yet-loaded
     *   parent will appear when that parent is expanded).
     * - `remove` ids are dropped together with their descendants, and pruned from
     *   the expanded set.
     *
     * Applying a batch never re-fetches and never collapses; it reconciles the
     * nodes already in memory. The parents whose child set the batch touches (the
     * old and new parent of a move, the parent of a removal) have their
     * `childrenCount`/`childrenLoaded` reconciled locally from the in-memory tree
     * — send only the records that changed; upserting the affected parents too is
     * allowed but not required.
     */
    liveUpdate?: {
        version: number;
        upsert?: R[];
        remove?: string[];
    };
    /**
     * Id of the node representing the current user. When set, a "Find me" button
     * is shown in the controls that centers the viewport on that node.
     */
    currentUserNodeId?: string;
    /** Initial zoom preset passed through to F0Graph. */
    zoomPreset?: ZoomPreset;
    /**
     * Smallest zoom the user can pan to (the zoom-out limit), passed through to
     * F0Graph. Defaults to F0Graph's own default. Raise it (e.g. `0.3`) to keep
     * the tree readable and avoid the most zoomed-out "dot" level.
     */
    minZoom?: number;
    /** Largest zoom the user can pan to (the zoom-in limit), passed through to F0Graph. */
    maxZoom?: number;
    /**
     * Whether clicking a node flies to it (centers + zooms in close), passed
     * through to F0Graph. Defaults to `true` — pass `false` for a static camera on
     * click (selection still happens). Re-centers on every click, even a repeat.
     * The fly starts a beat after the click so it picks up a `viewportInset` set in
     * response to that same click (a side panel opening).
     */
    centerOnNodeClick?: boolean;
    /**
     * Zoom a node click lands on (pass-through). Defaults to F0Graph's
     * `NODE_CLICK_ZOOM` (`1.5`), clamped to `maxZoom`. Lower it for a dense tree.
     */
    nodeClickZoom?: number;
    /**
     * Region of the canvas (screen px) covered by a side panel / drawer the
     * consumer opens over the graph (pass-through to F0Graph). Every fly-to path
     * shifts its target so the clicked / revealed node lands centered in the free
     * area beside the panel instead of behind it. For a fixed-width drawer, pass
     * its width while open (e.g. `{ right: 480 }`) and omit it while closed.
     */
    viewportInset?: ViewportInset;
    /** Whether to render the zoom/fit controls. Defaults to `true`. */
    showControls?: boolean;
    /**
     * Optional action(s) rendered at the bottom-right of the graph canvas
     * (pass-through to F0Graph's `canvasFooterActions`). Anchored to the canvas,
     * so it tracks the graph's visible area and reflows when a side panel shrinks
     * it — clear of the controls (bottom-left). Use for a persistent affordance
     * like a "Give feedback" button.
     */
    canvasFooterActions?: ReactNode;
    /**
     * Opt into F0Graph node-array windowing (pass-through). Only the nodes near
     * the viewport are handed to React Flow — for very large trees (thousands of
     * expand-visible nodes). Off by default; non-breaking.
     */
    enableNodeWindowing?: boolean;
    /** Flow-space px kept materialized around the viewport (pass-through). */
    nodeWindowPadding?: number;
    /**
     * Viewport-driven data loading (pass-through). Called (debounced + batched)
     * with the ids of nodes that entered the viewport, so the consumer can
     * hydrate rich data on demand. Best paired with `enableNodeWindowing`.
     */
    loadVisibleNodeData?: (ids: string[]) => void;
    /** Debounce (ms) before flushing a batch of newly-visible ids (pass-through). */
    visibleDataDebounceMs?: number;
};
