# Graph visualization for `OneDataCollection`

> **Status:** Plan approved. Open questions resolved (see §1.5). Phase 1 is unblocked; Phase 2 depends on the upstream F0Graph `dimmedNodes` PR (see §1.6). No production code is to be written from this document — implementation lands in the PRs described in §8.

Branch: `feat/f0-datacollection-graph-view`
Base SHA: `efa9795a3decf2627bbe248f5f2421ec876a900a`

---

## 1. Goal & non-goals

### Goal

Add a first-class `type: "graph"` visualization to `OneDataCollection` that renders the collection's records as an interactive tree/DAG using the existing `F0Graph` runtime, so that any consumer with an already-defined `DataCollectionSource` can opt into a graph view without leaving the collection abstraction (filters, search, presets, settings, persistence, item-actions, selection).

Concretely, after this work a consumer can write:

```tsx
<OneDataCollection
  source={source}
  visualizations={[
    { type: "table", options: { columns: [...] } },
    {
      type: "graph",
      options: {
        nodeAdapter: (record) => ({ parentId: record.managerId }),
        renderNode: (record, ctx) => <F0GraphNode {...ctx} title={record.name} />,
      },
    },
  ]}
/>
```

…and the visualization picker shows a Graph entry, switching to it loads the same `source`, projects records into `GraphNode<R>[]`, and renders an interactive F0Graph wired into the collection's selection, item-actions, search, and persistence.

### Non-goals

- **No new layout engines.** We use F0Graph's built-in tree layout. DAG layout via custom `layoutEngine` is a consumer escape hatch, not something this view ships.
- **No new graph primitives.** Anything not exposed by `F0Graph`/`F0GraphNode`/`F0GraphEdge` today is out of scope. If the view needs it, the gap is recorded in §10 or §1.6.
- **No data-fetching changes.** The view consumes whatever `dataAdapter` already produces — same paginated/grouped contract every other visualization uses. No new adapter type.
- **No grouping support in v1.** Graph topology IS the grouping. `source.currentGrouping` is rejected with a dev-only throw, matching the precedent set by Kanban (`Grouping is not supported in Kanban yet`).
- **No bulk-actions footer integration in v1.** Multi-select IS wired to `OneDataCollection`'s `onSelectItems` (both eager and lazy children — see §4.4), but the cross-visualization "select all" affordance and the bulk-actions footer placement on a spatial canvas need UX design and ship separately (see §10).
- **No editing.** Read-only view. Item-actions menu is supported through the per-node detail panel handoff (and as a fallback through `F0GraphNode.actions`), but inline editing (à la `editableTable`) is out of scope.
- **No infinite scroll / pagination UI.** Graphs are inherently spatial, not paginated. We fetch the full first page; lazy-loading children is delegated to F0Graph's `rootNodes` + `loadChildren` (see §4).

---

## 1.5 Resolved decisions

The questions originally tracked in §7 are settled. The plan below reflects these answers — they are reproduced here so reviewers can see the rationale in one place.

- **Q1 — Pagination handling (eager mode).** Eager mode **requires** `source.paginationType === "no-pagination"`. Lazy mode (via `loadChildren`) is permitted on paginated sources — the first page is consumed as roots and `loadChildren` resolves children on demand. **Dev-only invariant:** if `loadChildren` is provided AND `paginationType !== "no-pagination"`, that is the only valid combination; if `loadChildren` is provided AND `paginationType === "no-pagination"`, throw (`"Graph visualization: loadChildren requires a paginated source. Remove loadChildren, or set paginationType to a paginated value."`). If `loadChildren` is absent AND the source is paginated, throw (`"Graph visualization in eager mode requires a non-paginated source. Either set paginationType: 'no-pagination' on the source, or provide a loadChildren option to use lazy mode."`). Both checks run in `GraphCollection` immediately after `useDataCollectionData` is wired so consumers see the error on first render. No silent multi-page fetches, no `maxRecords` option.
- **Q2 — Selection bridge fidelity.** v1 forwards `source.selectable` directly to F0Graph (`"single"` or `"multiple"`); when `source.selectable` is omitted, F0Graph receives `"none"`. Selection state lives on the `source` via `useSelectable` (see `packages/react/src/hooks/datasource/useSelectable/useSelectable.ts`), so selection survives view switches automatically — no per-visualization mirror. In **lazy mode** `GraphCollection` opts into `allPagesSelection: true` on `useSelectable` so lazy-loaded ids surface in the `onSelectItems` payload's `selectedIds` (the default filters payload ids to current-page records, which drops lazy children). The cross-visualization "select all" UX on a spatial canvas is still deferred (see §10) — that's a footer/affordance question, not a selection-bridge question.
- **Q3 — Icon choice.** Use the existing `Graph` glyph from `@/icons/app` (`packages/react/src/icons/app/Graph.tsx`). Verified present. If design later produces a dedicated tree/hierarchy variant we swap (see §10).
- **Q4 — Performance budget.** No published envelope ships in Phase 1. Phase 2 includes a perf smoke test against 1k and 2k node mocks; the supported envelope is published with that PR.
- **Q5 — Filter behavior (Phase 1 hard removal; Phase 2 dim).** F0Graph's existing `state="dimmed"` prop is purely visual in the `dot` zoom variant and is indistinguishable from `default` in `compact`/`detail`. There is no `dimmedNodes` prop on F0Graph today. **Phase 1 ships hard removal:** records that do not match the active per-view filter are omitted from `nodes`, and any edges incident on a removed node are omitted from `edges`. No orphan promotion; subtree of a removed parent is also removed (consistent with hard removal). **Phase 2 ships dim** once the upstream F0Graph PR (see §1.6) adds a real `dimmedNodes?: Set<string>` prop that styles `dot`/`compact`/`detail` and incident edges; `GraphCollection` will switch to passing the filtered-out IDs through that prop, preserving tree structure.
- **Q6 — TypeScript union depth.** Mirror the existing registry cast pattern (`as VisualizacionTypeDefinition<...>`) used by Table/Kanban/List. No new tech debt introduced; no API change.
- **Q7 — `graphId` derivation.** The public `GraphVisualizationOptions` exposes an explicit `graphId?: string` field. **Default: `React.useId()` generated inside `GraphCollection`** — each instance gets a unique, stable-per-mount identifier, so two graph visualizations mounted in the same app never collide on persisted state by accident. Consumers can still pass an explicit `graphId` to override (e.g. for cross-session persistence keyed to a known domain entity like `'org-chart'`). One caveat: refactoring the component tree may change the `useId()` output, which resets the persisted detail-panel width — cosmetic, recoverable, no data loss.

---

## 1.6 Dependencies

- **Upstream F0Graph PR — `dimmedNodes` prop.** Phase 2's dim behavior depends on a separate PR against `patterns/F0Graph` that adds `dimmedNodes?: Set<string>` mirroring `selectedNodes` / `highlightedNodes`, with real opacity styling across the `dot`, `compact`, and `detail` zoom variants and on edges incident on a dimmed node. Phase 1 ships without this dependency by using hard removal (see §1.5 Q5). If the upstream PR slips, Phase 2 slips; Phase 1 is unaffected.

---

## 2. Architecture

### 2.1 High-level

```mermaid
flowchart TD
  Consumer["Consumer code"] -->|visualizations=[{type:'graph',...}]| ODC["OneDataCollection"]
  ODC --> VR["VisualizationRenderer"]
  VR -->|switch type=graph| GC["GraphCollection (new)"]
  GC -->|source| UDCD["useDataCollectionData(source)"]
  UDCD -->|records + matched filter ids| GC
  GC -->|filter + nodeAdapter + edgeAdapter| GP["projectGraph (records → GraphNode[]/GraphEdge[])"]
  GP --> F0G["F0Graph (graphId from options.graphId ?? 'default')"]
  F0G -->|renderNode(ctx)| Consumer
  F0G -->|onNodeSelect| SEL["useSelectable on source"]
  SEL -->|onSelectItems| ODC
  F0G -->|detailPanel(node)| GC
  GC -->|menuActions / F0GraphNode.actions| ItemActions["OneDataCollection item-actions"]
```

### 2.2 Component layering

- **`GraphCollection`** (new): visualization adapter. Bridges `DataCollectionSource` ↔ `F0GraphProps`. Mirrors the structure of `ListCollection`/`KanbanCollection`. Owns filtering, memoization of `nodes`/`edges`, the selection bridge, the lazy-mode `AbortController`, and cycle warnings.
- **`F0Graph`** (existing, **untouched in this work**): generic interactive graph runtime under `patterns/F0Graph`. We are a consumer of its public API only. (Phase 2 depends on a separate upstream PR adding `dimmedNodes`; see §1.6.)
- **`projectGraph`** (new pure helper): `(records, options) => { nodes: GraphNode<R>[]; edges: GraphEdge[]; cycles: string[] }`. Pure function, fully unit-testable, no React.
- **`collectionViewRegistry`** (existing, edited): register `graph` entry alongside `table`/`kanban`/`list`/`card`/`editableTable`.
- **`types.ts`** (existing, edited): extend the `Visualization` union with `{ type: "graph", options: GraphVisualizationOptions<R, Filters, Sortings> }`.

### 2.3 State ownership

| State                                | Owner                                                                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `records` / pagination               | `useDataCollectionData(source)` (unchanged)                                                                                                                        |
| Selection (`selectedNodes`)          | `useSelectable` on the `source` — survives view switches                                                                                                           |
| `expandedNodes`                      | F0Graph (uncontrolled by default; opt-in controlled prop)                                                                                                          |
| `focusedNode`                        | F0Graph (uncontrolled)                                                                                                                                             |
| Viewport (zoom + pan)                | F0Graph internal React Flow state. **NOT persisted across hard refreshes.** Preserved during in-app back-navigation only because the page component stays mounted. |
| Detail-panel open node               | Derived from F0Graph selection                                                                                                                                     |
| Detail-panel width                   | F0Graph, persisted to `localStorage` under `f0graph:detailPanelWidth:${graphId}`                                                                                   |
| `graphId`                            | Consumer-supplied via `options.graphId`; defaults to `React.useId()` generated inside `GraphCollection`                                                            |
| Visualization picker / view switcher | `OneDataCollection` settings (unchanged)                                                                                                                           |
| Per-view filter overrides            | `usePerVisualizationFilters` (unchanged)                                                                                                                           |

**Back-navigation viewport caveat.** F0Graph viewport survives in-app back-nav only if the parent route does not force remount. Builder MUST verify the parent route in `factorial` does not aggressively swap `key={...}` and does not sit behind a Suspense boundary that throws on back-nav. If it does, viewport resets on every back-nav and the fix is in the route, not in this view.

No new persistence channel is added by this view itself.

---

## 3. Public API design

### 3.1 New type — `GraphVisualizationOptions`

File: `Graph/types.ts` (new)

```ts
import type { ReactNode } from "react"
import type {
  F0GraphDetailPanelProps,
  F0GraphNodeRenderContext,
  F0GraphProps,
  GraphEdge,
  GraphNode,
} from "@/patterns/F0Graph"
import type { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import type { RecordType, SortingsDefinition } from "@/hooks/datasource"

/**
 * Adapter that extracts the structural fields F0Graph needs from a record.
 *
 * The full record is preserved on the projected node automatically.
 * The node `id` is stamped internally by `GraphCollection` via the same
 * `getKey` helper Kanban uses: `source.idProvider(item, index)` if present,
 * else `item.id`, else `String(index)` — always coerced to `string`. There
 * is exactly one source of truth for record identity in OneDataCollection.
 */
export type GraphNodeAdapter<R extends RecordType> = (record: R) => {
  /** Single-parent tree linkage. */
  parentId: string | null
  /** DAG linkage. When present, takes precedence over `parentId`. */
  parentIds?: string[]
  /** Hint for lazy-loaded children. */
  childrenCount?: number
  /** Hint for lazy-loaded children. */
  childrenLoaded?: boolean
}

/**
 * Optional adapter that derives explicit edges from records. When omitted,
 * F0Graph derives parent→child edges from `parentId`/`parentIds`.
 *
 * Use this when edges have semantic metadata (labels, weights, click handlers)
 * that are not expressible through tree linkage alone.
 */
export type GraphEdgeAdapter<R extends RecordType> = (
  records: ReadonlyArray<R>
) => ReadonlyArray<GraphEdge>

/**
 * Return shape of `detailPanel`. Re-exported from F0Graph so the public API
 * stays readable instead of inlining a deep conditional type.
 */
export type GraphDetailPanel = ReturnType<
  NonNullable<F0GraphProps["detailPanel"]>
>

export type GraphVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  /**
   * Stable identifier used by F0Graph to scope per-graph persisted state
   * (currently: detail-panel width). When omitted, `GraphCollection` defaults
   * to `React.useId()` so each instance gets a unique key — pass an explicit
   * value only when you want a persistence key tied to a known domain entity
   * (e.g. `'org-chart'`) for cross-session continuity.
   */
  graphId?: string

  /** Required. Maps a record to its parent linkage. */
  nodeAdapter: GraphNodeAdapter<R>

  /** Optional. Derive explicit edges; otherwise inferred from parent linkage. */
  edgeAdapter?: GraphEdgeAdapter<R>

  /** Required. Render the node body — mirrors `F0GraphProps.renderNode`. */
  renderNode: (record: R, ctx: F0GraphNodeRenderContext) => ReactNode

  /** Optional detail-panel renderer. Receives the underlying record. */
  detailPanel?: (record: R) => GraphDetailPanel

  /**
   * Lazy mode. When provided, only the first page of `data.records` is
   * projected as roots; children are resolved on demand. Requires a
   * paginated source (see §1.5 Q1).
   *
   * `opts.signal` is aborted if the user collapses the node before
   * resolution, the component unmounts, or another `loadChildren` call
   * starts for the same `nodeId`. Consumers SHOULD forward it to `fetch`
   * (or their underlying request layer) so the in-flight request is
   * cancelled, not just ignored.
   */
  loadChildren?: (
    nodeId: string,
    opts: { signal: AbortSignal }
  ) => Promise<ReadonlyArray<R>>

  /**
   * Escape hatch for everything F0Graph exposes that this view does NOT own.
   * DataCollection owns data, selection, filtering, dim. Everything else
   * (zoomPreset, defaultZoom, defaultExpandDepth, layoutEngine, nodeWidth,
   * nodeHeight, fullScreen, showControls, currentUserNodeId, renderEdge,
   * search, etc.) passes through here.
   */
  graphProps?: Omit<
    F0GraphProps<R>,
    | "nodes"
    | "edges"
    | "rootNodes"
    | "loadChildren"
    | "renderNode"
    | "selectionMode"
    | "onNodeSelect"
    | "detailPanel"
    | "selectedNodes"
    | "highlightedNodes"
    | "dimmedNodes"
    | "searchValue"
    | "onSearchChange"
    | "searchable"
  >
}

// Re-exported for consumer use.
export type { F0GraphDetailPanelProps }
```

### 3.2 New variant in `Visualization` union

File: `collection/types.ts` (edited)

```ts
| ({
    type: "graph"
    options: GraphVisualizationOptions<R, Filters, Sortings>
  } & VisualizationFilterOverrides<Filters>)
```

### 3.3 New registry entry

File: `collection/collectionViewRegistry.tsx` (edited)

```ts
import { Graph as GraphIcon } from "@/icons/app"

graph: {
  name: "Graph",
  icon: GraphIcon, // verified present at packages/react/src/icons/app/Graph.tsx
  settings: { default: {} },
  render: (props) => <GraphCollection {...props} />,
},
```

### 3.4 Export surface

File: `collection/index.tsx` and `exports.ts` (edited)

```ts
// collection/index.tsx
export * from "./Graph"
```

No breaking changes to existing public types. The `Visualization` union grows by one variant; downstream `switch (v.type)` blocks become non-exhaustive if they used `assertNever`, which is a known accepted cost (same as when `editableTable`, `list`, `kanban` were added).

---

## 4. Data adapter strategy

`F0Graph` has two ingestion modes; we support both behind the same options shape.

### 4.1 Eager mode (default)

- **Requires** `source.paginationType === "no-pagination"`. If the source is paginated and `loadChildren` is not provided, `GraphCollection` throws in dev with the exact message:

  > `Graph visualization in eager mode requires a non-paginated source. Either set paginationType: 'no-pagination' on the source, or provide a loadChildren option to use lazy mode.`

  This is a hard fail-fast — no silent multi-page fetches, no `loadMore` loops, no `maxRecords` knob. The guard runs in `GraphCollection` immediately after `useDataCollectionData` is wired so consumers see the error on first render.

- The complementary guard (`loadChildren` provided AND source non-paginated) also throws in dev — see §1.5 Q1.
- `useDataCollectionData(source)` returns the full record set in a single response (guaranteed by the non-pagination requirement above).
- All returned `records` are projected to `GraphNode<R>[]` via `nodeAdapter`.
- Edges are either:
  - Derived from `parentId`/`parentIds` (default), or
  - Returned by `edgeAdapter(records)` when present.
- The full set is handed to `F0Graph` via `nodes={...}` / `edges={...}`.

### 4.2 Lazy mode (opt-in via `loadChildren`)

- Lazy mode is **required on paginated sources**. The first page of `useDataCollectionData(source)` is consumed as roots and projected to `rootNodes`. Subsequent pages are NOT auto-fetched — F0Graph drives child resolution from this point on.
- F0Graph's expand triggers `loadChildren(nodeId)`, which `GraphCollection` wraps to:
  1. Open a per-node `AbortController` keyed on the node ID.
  2. Call the consumer's `loadChildren(nodeId)`.
  3. Project returned records to `GraphNode<R>[]` via `nodeAdapter` (stamping `id` via the shared `getKey` helper — see §4.3 Identity).
  4. Return them to F0Graph.
- **Abort semantics.** The per-node `AbortController` aborts on unmount and when the user collapses the node before the promise resolves. Aborted resolutions are dropped silently.
- Records loaded this way **bypass** the `DataCollectionSource`'s store. They are NOT added to `data.records`. This is intentional — collection state stays flat and predictable; F0Graph owns the tree.

### 4.3 Projection rules

- **Identity.** `node.id` is stamped by `GraphCollection` using the same `getKey` helper Kanban uses ([`Kanban.tsx:226`](../Kanban/Kanban.tsx#L226)) — a three-step fallback: `source.idProvider(item, index)` → record's natural `.id` → array index, always coerced to `string`. `idProvider` is optional; consumers do not need to coerce. `nodeAdapter` does NOT return an `id`. Consider lifting `getKey` to a shared util under `OneDataCollection/utils/` during Phase 1 if it does not already live there; if it does, reference the path.
- `node.data = record` (full record preserved, opaque to F0Graph).
- If two records resolve to the same `id` via `getKey`, throw in dev (`useIsDev`); warn in prod.
- If `nodeAdapter` returns `parentId` that doesn't exist in the record set AND there's no `loadChildren`, the node is treated as a root. No error — common case (filtered subtree).
- If `source.currentGrouping` is non-null, dev throws "Grouping is not supported in Graph visualization; the graph's parent linkage is the grouping." (mirrors Kanban precedent).
- **Cycle detection.** `projectGraph` walks the parent linkage and returns `cycles: string[]` (IDs participating in a cycle). `GraphCollection` surfaces these in dev via a single `console.warn` per render listing the offending IDs. Edges that would close a cycle are dropped from the rendered set — never silently, always warned.
  - **Why we don't rely solely on F0Graph's internal cycle detection:** F0Graph operates on `GraphNode<R>` and can only report cycles by node ID. GraphCollection operates on raw records and can produce a more useful `console.warn` naming the offending records (and their `getKey` keys) for the consumer. It also drops cycle-closing edges before handoff so F0Graph never sees an invalid topology.
- **Filtering (Phase 1 — hard removal).** When a per-view filter narrows the record set, non-matching records are omitted from `nodes`, and any edge incident on a removed node is omitted from `edges`. Subtrees rooted at a removed node are also removed (no orphan promotion). The `projectGraph` helper receives the matched-id set from `GraphCollection` and skips non-matching records during projection.
- **Filtering (Phase 2 — dim).** Once the upstream F0Graph `dimmedNodes` PR (§1.6) lands, `GraphCollection` switches: non-matching records stay in `nodes` and their IDs are passed through F0Graph's new `dimmedNodes` prop, preserving tree structure. Edges incident on dimmed nodes inherit the dimmed treatment via F0Graph.
- **Memoization.** `GraphCollection` MUST memoize the `nodes` and `edges` arrays passed to F0Graph using a stable cache key (record IDs + active filter signature + expansion state + adapter identities). Consumer-supplied `nodeAdapter`, `edgeAdapter`, `renderNode`, and `detailPanel` SHOULD be memoized by the consumer; this is documented in the public-API docs as a perf requirement (not a runtime check).
- **Dev-mode identity warning.** Add a dev-only `useStableIdentityWarning` (or equivalent) helper inside `GraphCollection`. If any of `nodeAdapter` / `edgeAdapter` / `renderNode` / `detailPanel` changes identity more than 5 times within 1 second of mount, fire a single `console.warn` with the offending prop name and a link to the public API doc. Production builds skip the check entirely. Goal: surface the missing `useCallback` / `useMemo` at first run, not after a perf bug report.
- **Search bridge.** When `source` has an active search input, pipe its current value into F0Graph's `searchValue` prop, and forward F0Graph's `onSearchChange` to the source's search setter. This avoids double-rendering a second search UI. F0Graph's competing `searchable` prop (which renders its own search UI) is omitted from `graphProps` for the same reason — see §3.1.

### 4.4 Selection bridge

- F0Graph `selectionMode` is forwarded from `source.selectable` (`"single"` or `"multiple"`); when `source.selectable` is omitted, F0Graph receives `"none"`.
- Selection lives on the `source` via `useSelectable` — not on this visualization. Switching from Table → Graph → Table preserves the selected IDs automatically.
- F0Graph `onNodeSelect(nodeId, selected)` → `GraphCollection` calls `handleSelectItemChange` from `useSelectable`, passing **the loaded record as `fallbackItem`** so lazy-loaded nodes (which never entered `data.records`) still attach the record to the selection event. This mirrors the pattern Table and Card already use.
  - **Rule:** GraphCollection MUST pass the loaded record as `fallbackItem` for both eager and lazy children. Never pass just an ID.
- **Lazy mode opts into `allPagesSelection: true`.** `useSelectable` filters the `onSelectItems` payload's `selectedIds` to current-page records by default. In lazy mode that silently drops lazy-loaded ids from the consumer payload (the F0Graph `selectedNodes` Set still reflects them). `GraphCollection` therefore passes `allPagesSelection: true` to `useSelectable` whenever `loadChildren` is provided, so lazy ids surface end-to-end. Eager mode keeps the default behavior so source-level `allPagesSelection` semantics are honored when set by the consumer.
- The cross-visualization "select all" UX on a spatial canvas is still deferred — see §10.

### 4.5 Item-actions bridge

- F0Graph's detail panel takes `menuActions: DropdownItem[]` (not `menu`). When `detailPanel` is provided AND `source.itemActions` is defined, `GraphCollection` synthesizes `menuActions` from the source's item-actions for the selected record and merges them into whatever `menuActions` the consumer returned from `detailPanel(record)`.
- **Fallback when no `detailPanel` is provided.** `GraphCollection` still surfaces the source's `itemActions` via `F0GraphNode.actions` for each node, so item-actions are reachable from the graph even without a panel. This makes `detailPanel` purely about additional content, not a gate on actions.

### 4.6 Loading and error states

- Initial load: render F0Graph wrapped in an opacity-50 + `aria-busy` shell (matches list/table pattern).
- Error: bubble through `onLoadError` (existing callback) — no in-view error UI; the collection chrome shows the error toast.

---

## 5. File-by-file change list

> All paths are workspace-relative.

### New files (under the new `Graph/` directory)

| Path                                                                                                          | Purpose                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/PLAN.md`                       | This document.                                                                                                                                         |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/index.tsx`                     | Public barrel — `export * from "./Graph"` and `export * from "./types"`.                                                                               |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/Graph.tsx`                     | `GraphCollection` component. Owns hooks, selection bridge, F0Graph wiring, memoization, abort.                                                         |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/types.ts`                      | `GraphCollectionProps`, `GraphVisualizationOptions`, `GraphNodeAdapter`, `GraphEdgeAdapter`, `GraphDetailPanel`. Re-exports `F0GraphDetailPanelProps`. |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/projectGraph.ts`               | Pure projection helper. Heavily unit-tested. Returns `{ nodes, edges, cycles }`.                                                                       |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/projectGraph.spec.ts`          | Vitest specs for the projection helper.                                                                                                                |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/__tests__/*.test.tsx`          | RTL specs for the visualization adapter, split per concern (selection, lazy abort, identity warning, defaultSelectedItems bridge, etc.).               |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/__stories__/Graph.stories.tsx` | Stories — basic tree, DAG, lazy, detail panel.                                                                                                         |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/Graph/__stories__/mockData.ts`       | Mock org chart used by the stories and specs.                                                                                                          |

### Edited files

| Path                                                                                                 | Change                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/types.ts`                   | Add `graph` variant to the `Visualization` union. Import `GraphVisualizationOptions`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/collectionViewRegistry.tsx` | Register `graph` entry; import `GraphCollection`, `GraphCollectionProps`, and the `Graph` icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `packages/react/src/patterns/OneDataCollection/visualizations/collection/index.tsx`                  | `export * from "./Graph"` so types are reachable from the collection barrel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `packages/react/src/patterns/OneDataCollection/exports.ts`                                           | **No edit needed** — verified at [`exports.ts`](../../../exports.ts). Matches the Kanban/List precedent: `KanbanVisualizationOptions` is not re-exported by name today (the public re-export chain only exposes `Visualization`, `CustomVisualizationProps`, and `VisualizationFilterOverrides` from `./visualizations/collection/types`). `GraphVisualizationOptions` is reachable structurally through the `Visualization` union, which is enough for consumers writing `visualizations={[{ type: "graph", options: {...} }]}`. If a future ask wants `import type { GraphVisualizationOptions }` by name, add an explicit `export type { GraphVisualizationOptions } from "./visualizations/collection/Graph"` in `exports.ts` then — out of scope for parity. |

### Files explicitly NOT edited

- Everything under `packages/react/src/patterns/F0Graph/*` — F0Graph is consumed as-is in this work. The Phase 2 `dimmedNodes` capability lands in a separate upstream PR (see §1.6).
- `OneDatacollection.tsx`, `Settings/*`, `hooks/useDataCollectionData/*`, `navigationFilters/*` — view is additive only.

---

## 6. Story & test plan

### 6.1 Stories (`__stories__/Graph.stories.tsx`)

| Story                                                                     | What it shows                                                                                            |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Basic**                                                                 | 10-node org chart with default expand depth = 2.                                                         |
| **WithDetailPanel**                                                       | Click a node → panel opens with name, role, item-actions via `menuActions`.                              |
| **WithItemActionsNoPanel**                                                | No `detailPanel` provided; item-actions still reachable via `F0GraphNode.actions`.                       |
| **DAG**                                                                   | Records with `parentIds: string[]` rendering a small DAG.                                                |
| **Lazy**                                                                  | Only roots in the source; `loadChildren` resolves to a mocked async batch with a 400ms delay.            |
| **WithVisualizationSwitcher**                                             | Same source rendered as both Table and Graph, with the picker; selection survives the switch.            |
| **Empty**                                                                 | Source returns zero records → F0Graph renders nothing; collection chrome shows the existing empty state. |
| **LoadingThenLoaded**                                                     | Source initially pending → opacity-50 graph, then settles.                                               |
| **HardRemovalFilter**                                                     | Filter narrows the set; non-matching nodes and their edges disappear; subtree removed (Phase 1).         |
| **GroupingWarning** (dev story, `parameters.controls: { disable: true }`) | Source with `grouping` set → dev throw is shown in console; verifies guard.                              |

### 6.2 Unit tests (`projectGraph.spec.ts`)

- Projects flat records into nodes preserving `data`.
- Stamps `node.id` via the shared `getKey` helper (three-step fallback: `idProvider` → `item.id` → `index`, coerced to `string`) — never from `nodeAdapter`.
- Derives parent→child edges from `parentId`.
- Prefers `parentIds` over `parentId` when both present.
- Throws on duplicate `id` (from `getKey`) in dev.
- Records with missing parents are treated as roots.
- `edgeAdapter` overrides default edge derivation when provided.
- Returns `cycles: string[]` when adapter output forms a cycle; offending edges are dropped from output.
- Hard removal: given a matched-id set that excludes some records, the excluded records and any edges incident on them are omitted.

### 6.3 Component tests (`__tests__/*.test.tsx`)

- Renders nodes for each record returned by the source.
- `onNodeSelect` from F0Graph calls `handleSelectItemChange` with the matching record as `fallbackItem`.
- **Lazy selection round-trip.** Selecting a lazy-loaded child surfaces its id in both the F0Graph `selectedNodes` Set AND the `onSelectItems` payload's `selectedIds` (covered by `selection.test.tsx`; relies on the `allPagesSelection: true` lazy-mode opt-in from §4.4).
- **defaultSelectedItems bridge.** Source pre-declares all records selected → F0Graph receives them as `selectedNodes` (covered by `defaultSelectedItemsBridge.test.tsx`). Full select-all-everything → expand-lazy inheritance round-trip is a Phase 3 OneDataCollection integration test.
- **Cycle warning.** `nodeAdapter` produces a cycle → exactly one `console.warn` per render listing the cycle IDs; offending edges absent from output.
- **AbortController forwarding.** `wrappedLoadChildren` passes an `opts.signal` to the consumer; a fresh call for the same nodeId aborts the previous signal; unmount aborts every in-flight signal so consumers can observe abortion mid-flight (covered by `lazyAbort.test.tsx`).
- **graphId default isolation.** Two `<OneDataCollection>` instances mounted simultaneously with no explicit `graphId` get different `useId()`-generated IDs; resizing the detail panel on one does NOT affect the other.
- **Dev-mode identity warning.** Inlined `nodeAdapter` across 6+ renders within 1s → exactly ONE `console.warn` per offending prop. Memoized adapters across many renders → no warn. Production builds (`useIsDev: () => false`) → no warn regardless of identity churn (covered by `stableIdentityWarning.test.tsx`).
- **Hard removal filter.** Apply a per-view filter that excludes a parent → the parent's edges to its children are not rendered.
- `onLoadError` is called when the source errors.
- Throws on `source.currentGrouping !== null` in dev mode (uses `useIsDev` mock).
- Throws on paginated source without `loadChildren` (eager-mode guard).
- Throws on non-paginated source with `loadChildren` (lazy-mode guard).
- Detail-panel `menuActions` merge consumer-returned actions with the source's `itemActions`.
- Lazy mode: expanding a node invokes `loadChildren(nodeId)` and renders the returned records.

### 6.4 Visual regression

- Chromatic snapshots for each story above (handled by existing pipeline — no config change).

### 6.5 What we do NOT test

- F0Graph's own internals (zoom, layout math, detail-panel width persistence) — already covered by F0Graph's own suite.
- Cross-visualization switching state preservation — covered by existing `OneDataCollection` integration tests; one new case is added under those tests in Phase 3 (see §8).

---

## 7. Watchlist

All resolved questions are tracked in §1.5; what remains is a watchlist of residual risks that affect Phase 2/3 sequencing, not Phase 1 entry. See §11 for severity ratings.

- **Performance envelope unverified.** Phase 2 perf smoke against 1k/2k node mocks publishes the supported limit. Until then, no formal envelope is advertised. F0Graph's existing `LARGE_GRAPH_SNAP_THRESHOLD = 700` already governs animation snapping, so degradation is graceful.
- **Multi-select UX still needs consumer polish.** Phase 1 ships `selectionMode="multi"` end-to-end via `useSelectable`, but bulk-action affordances on a spatial canvas remain a consumer-level UX problem. The bridge is in place; the toolbar design can iterate separately.
- **Graph icon is a generic glyph.** `@/icons/app/Graph` ships now; if design produces a dedicated tree/hierarchy variant, the swap is a one-line registry edit (see §10).
- **Phase 2 blocked on upstream F0Graph PR for `dimmedNodes`.** Phase 1 ships fine without it (hard removal).

---

## 8. 3-phase delivery

### Phase 1 — Skeleton, projection, hard-removal filter (PR #1)

- Land everything in §5 with `Graph.tsx` rendering F0Graph from `projectGraph()` output.
- `nodeAdapter` + default edge derivation + optional `edgeAdapter` (Phase 1 ships both — `edgeAdapter` is a thin passthrough with no extra cost).
- No `detailPanel` in the public API yet (item-actions still wired via `F0GraphNode.actions`).
- Lazy mode (`loadChildren`) shipped as part of Phase 1 with full abort semantics: per-node `AbortController`, signal forwarded to the consumer loader via `opts.signal`, aborted on (a) a fresh call for the same nodeId and (b) unmount.
- Selection wired to `useSelectable` with `fallbackItem`, multi-select end-to-end (`selectionMode: "multi"` when `source.selectable` is present). Lazy mode opts into `allPagesSelection: true` so lazy ids surface in `onSelectItems` (see §4.4).
- Memoized `nodes`/`edges` arrays (per §4.3).
- Enforce both pagination-mode guards (§4.1) — throw with the exact dev messages.
- Cycle detection + `console.warn` (per §4.3).
- Hard-removal filter implementation in `projectGraph`.
- Search pipe-through into F0Graph (per §4.3) — prefers `source.debouncedCurrentSearch` over `source.currentSearch` to avoid layout thrash on each keystroke.
- Register entry in `collectionViewRegistry` using `Graph` from `@/icons/app`. Update `Visualization` union.
- Stories: **Default**, **RecordSubsetReprojects**, **WithItemActionsNoPanel**, **Selectable**, **Cycle**, **LazyMode**, **TwoInstances**, **Snapshot**.
- Tests: full `projectGraph.spec.ts`; component tests under `__tests__/` covering render, selection (incl. `fallbackItem` and lazy id round-trip), both pagination-guard throws, cycle warning, hard removal, search pipe-through, abort signal forwarding (per-nodeId + unmount), and the dev-mode identity warning (one-per-prop, prod gate).
- **Status: shipped.** No external sign-offs remain.

### Phase 2 — Detail panel, DAG, dim (PR #2)

- Add `detailPanel` option with `menuActions` bridge.
- Add `parentIds` (DAG) support.
- **Switch filter behavior from hard removal to dim** by consuming the upstream F0Graph `dimmedNodes` prop (per §1.6). Update `projectGraph` to pass non-matching IDs through instead of omitting them. Update `HardRemovalFilter` story → `DimmedFilter`.
- Stories: **WithDetailPanel**, **DAG**, **Lazy**, **WithVisualizationSwitcher**, **DimmedFilter**.
- Tests: detail-panel `menuActions` merge, lazy expansion + select-all inheritance, abort on unmount, DAG projection, dim behavior with the new F0Graph prop.
- Perf smoke test answering Q4.

### Phase 3 — Polish & integration (PR #3)

- Per-visualization settings entry in `Settings/` if any user-controllable knob emerges (likely `defaultExpandDepth` exposed via `graphProps`).
- Add an integration test in `OneDataCollection/__tests__/` covering switch Table↔Graph with state preservation (selection + viewport-during-back-nav caveat from §2.3).
- Update visualization selector tooltip copy / i18n keys.
- If design ships a dedicated tree/hierarchy glyph, swap the registry icon (one-line change).
- Documentation MDX entry under existing `Patterns/Data collection` group, including the `graphId` override pattern (default `useId()`, override for cross-session persistence) and the consumer-side memoization requirement (with a note about the dev-mode identity warning).

Each phase is independently shippable. Phase 1 covers ~70% of the consumer use case (Factorial org chart, file tree, project hierarchy).

---

## 9. Acceptance criteria (full surface)

- A consumer can add `{ type: "graph", options: {...} }` to `visualizations` and it appears in the picker.
- Switching to the graph view renders nodes for every record returned by the source (subject to active filter, per Phase 1 hard-removal rules).
- `nodeAdapter` and `renderNode` are the only required options.
- `nodeAdapter` does NOT return `id`; node identity comes from the shared `getKey` helper (`source.idProvider` → `item.id` → `index`).
- Selecting a node calls `handleSelectItemChange` with the matching record as `fallbackItem`, including for lazy-loaded children.
- Switching back to table preserves the selection (via existing per-source selection state on `useSelectable`).
- `source.currentGrouping !== null` throws in dev with a clear message.
- Paginated source without `loadChildren` throws in dev; non-paginated source with `loadChildren` throws in dev.
- `loadChildren` is invoked exactly once per `nodeId` per expansion lifecycle and is aborted on unmount or pre-resolve collapse.
- Adapter cycles emit a single dev `console.warn` per render; offending edges are dropped.
- No regressions in existing visualizations' test suites.
- Chromatic shows no unexpected diffs outside the new stories.

---

## 10. Out-of-scope follow-ups

| Item                                                              | Why deferred                                                                                                                                                                        |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cross-visualization "select all" UX on a spatial canvas           | Multi-select is already wired in Phase 1; what's deferred is the bulk-actions footer placement and the "select all" affordance on a zoomable canvas — those need UX design first.   |
| Inline editing inside nodes (graph-equivalent of `editableTable`) | F0Graph nodes are renderer-driven; F0 needs an editing primitive first.                                                                                                             |
| Viewport persistence across hard refreshes                        | `OneDataCollection`'s settings persistence layer doesn't currently store viewport coordinates; F0Graph itself only persists detail-panel width. Possible follow-up, separate scope. |
| Export-to-PNG / share-link                                        | F0Graph doesn't expose a canvas snapshot API; would need a new F0Graph prop.                                                                                                        |
| Grouping support (treat group key as virtual parent)              | Conflates two parent dimensions; non-trivial UX.                                                                                                                                    |
| Infinite-scroll-style streaming nodes                             | F0Graph has `deferredNodes` — viable but adds two more state machines to reason about. Schedule after lazy mode lands.                                                              |
| Per-edge styling/labeling presets                                 | Covered today by `graphProps.renderEdge`; hold a dedicated convenience API for a real consumer ask.                                                                                 |
| Dedicated `useGraphLayout` for non-OneDataCollection consumers    | If a second consumer of `projectGraph()` appears, hoist it under `patterns/F0Graph/hooks/`.                                                                                         |
| Dedicated tree/hierarchy glyph from design                        | We ship with the existing `Graph` icon as the registry glyph. Swap is a one-line change in the registry entry once design produces a dedicated variant.                             |

---

## 11. Risks summary

| Risk                                                     | Likelihood | Impact | Mitigation                                                                                                                                                                                                                |
| -------------------------------------------------------- | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Large graphs (>2k nodes) janky                           | Med        | Med    | Phase-2 perf smoke; publish envelope. F0Graph's existing 700-node snap threshold already degrades gracefully.                                                                                                             |
| Select-all on a spatial canvas confuses consumers        | Med        | Med    | Multi-select bridge is fully wired in Phase 1 (eager + lazy round-trip via `allPagesSelection: true`); the canvas-level "select all" affordance and bulk-actions footer placement ship later as a UX-led follow-up (§10). |
| TypeScript instantiation depth from 6th union variant    | Low        | Med    | Mirror existing registry cast pattern (`as VisualizacionTypeDefinition<...>`) per Q6. No new tech debt.                                                                                                                   |
| Generic `Graph` icon stays in place longer than expected | Low        | Low    | Swap is a one-line registry edit when design ships a dedicated glyph. Follow-up tracked in §10.                                                                                                                           |
| Upstream F0Graph `dimmedNodes` PR slips                  | Med        | Low    | Phase 1 still ships with hard removal; only Phase 2 dim UX is delayed. No code in this repo blocks.                                                                                                                       |
| Parent route in `factorial` forces remount on back-nav   | Low        | Med    | Verify before Phase 1 ships (per §2.3 caveat). If it does, fix the route, not this view. Viewport persistence across hard refreshes is explicitly out of scope (§10).                                                     |
