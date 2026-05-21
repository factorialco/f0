# RFC: F0Graph Pattern

> Reverse-engineered from source on branch `feat/f0-graph` (commit `31a6081dd`).
> This documents what exists today, not what should be.

---

## 1. Summary

F0Graph is an interactive tree/graph visualization pattern built on top of `@xyflow/react` (React Flow). It provides a composable canvas for rendering hierarchical data (primarily org charts) with semantic zoom levels, expand/collapse, lazy child loading, search, selection, detail panels, and a pluggable layout engine. The consumer provides data as a flat `parentId`-based node list and a `renderNode` callback; F0Graph handles tree building, layout computation, zoom-level adaptation, and all interaction state.

---

## 2. Motivation & Context

**Problem:** Factorial needed a reusable graph visualization pattern for org charts (and eventually workflow editors) that:

- Handles 1000+ node datasets with acceptable performance
- Adapts visual density based on zoom level (detail → compact → dot)
- Supports on-demand tree expansion (lazy loading from API)
- Ships as a design system component with consistent styling (F0 tokens, dark mode)
- Wraps React Flow's complexity behind a simpler, tree-first API

**What it replaces:** The initial commit message references "replaces dagre" — the custom Reingold-Tilford layout engine replaced dagre's barycenter-based algorithm to achieve stable sibling ordering across expand/collapse cycles (dagre reshuffles siblings on every layout pass).

**What it unblocks:** A future v2 composition API for both read-mode hierarchical exploration and workflow editing (DAG with branching, fork/join, multiple node types). The current v1 is the read-mode foundation.

---

## 3. Public API Surface

### 3.1 Exported Components

| Export                                | Role                                                          |
| ------------------------------------- | ------------------------------------------------------------- |
| `F0Graph`                             | Root component. Wraps `ReactFlowProvider` + inner canvas.     |
| `F0GraphNode`                         | Default pill-style node renderer (avatar + title + subtitle). |
| `F0GraphControls`                     | Zoom/pan/fit controls toolbar.                                |
| `F0GraphEdge` (via `F0GraphEdgeBase`) | Default smoothstep edge renderer.                             |
| `F0GraphExpander`                     | Collapse/expand pill rendered below parent nodes.             |
| `F0GraphDetailPanel`                  | Right-side detail panel overlay.                              |

Source: [`index.tsx`](index.tsx)

Note: this export table describes the internal `patterns/internal/F0Graph` barrel. `F0Graph` is intentionally not exported from the package root (`src/f0.ts`).

### 3.2 Core Props (`F0GraphProps<T>`)

Source: [`F0Graph.tsx`](F0Graph.tsx#L63-L165)

#### Data

| Prop           | Type                                          | Mode                                         |
| -------------- | --------------------------------------------- | -------------------------------------------- |
| `nodes`        | `GraphNode<T>[]`                              | Full tree — all nodes provided upfront       |
| `edges`        | `GraphEdge[]`                                 | Optional; derived from `parentId` if omitted |
| `rootNodes`    | `GraphNode<T>[]`                              | Lazy tree — only root nodes provided         |
| `loadChildren` | `(nodeId: string) => Promise<GraphNode<T>[]>` | Lazy tree — async child fetcher              |

#### Rendering

| Prop                             | Type                                                 | Notes                                       |
| -------------------------------- | ---------------------------------------------------- | ------------------------------------------- |
| `renderNode`                     | `(node, ctx: F0GraphNodeRenderContext) => ReactNode` | **Required.** Consumer owns node rendering. |
| `renderEdge`                     | `(edge, variant: EdgeVariant) => ReactNode \| null`  | Optional custom edge rendering.             |
| `direction` / `defaultDirection` | `LayoutDirection`                                    | `"TB" \| "LR" \| "BT" \| "RL"`              |

#### Zoom

| Prop                                  | Type                               | Notes                     |
| ------------------------------------- | ---------------------------------- | ------------------------- |
| `zoomPreset`                          | `"default" \| "dense" \| "sparse"` | Named threshold configs   |
| `zoomThresholds`                      | `{ detail, compact, dot }`         | Manual threshold override |
| `defaultZoom` / `minZoom` / `maxZoom` | `number`                           | Viewport zoom limits      |

#### Expand/Collapse

| Prop                                       | Type          | Notes                      |
| ------------------------------------------ | ------------- | -------------------------- |
| `expandedNodes`                            | `Set<string>` | Controlled mode            |
| `defaultExpandedNodes`                     | `Set<string>` | Uncontrolled initial state |
| `defaultExpandDepth`                       | `number`      | Auto-expand N levels deep  |
| `onExpandToggle` / `onExpandedNodesChange` | callbacks     |                            |

#### Selection

| Prop                                     | Type                            | Notes                              |
| ---------------------------------------- | ------------------------------- | ---------------------------------- |
| `selectionMode`                          | `"single" \| "multi" \| "none"` | Default: `"single"`                |
| `selectedNodes`                          | `Set<string>`                   | Controlled mode                    |
| `onNodeSelect` / `onSelectedNodesChange` | callbacks                       |                                    |
| `focusedNode`                            | `string`                        | Fly-to + highlight                 |
| `highlightedNodes`                       | `Set<string>`                   | Visual highlight without selection |

#### Search

Two mutually exclusive modes:

1. **Bare search:** `searchValue` + `onSearchChange` — consumer handles filtering.
2. **Declarative search:** `searchable: Searchable<T>` — F0Graph builds the index, filters, and on select: auto-expands ancestors → selects → flies to node.

#### Detail Panel

| Prop               | Type                    | Notes                                         |
| ------------------ | ----------------------- | --------------------------------------------- |
| `detailPanel`      | `(node) => PanelConfig` | When provided, click opens a right-side panel |
| `detailPanelWidth` | `number`                | Default: 384px                                |

The panel has two variants: `"default"` (icon + title + description + alert + menu) and `"resource"` (custom header + action row).

### 3.3 Core Types

Source: [`types.ts`](types.ts)

```typescript
interface GraphNode<T = unknown> {
  id: string
  parentId: string | null // Tree topology
  parentIds?: string[] // DAG topology (takes precedence)
  data: T // Opaque consumer payload
  childrenCount?: number // Hint for expander UI
  childrenLoaded?: boolean // Hint for lazy loading state
}

interface GraphEdge {
  id: string
  source: string
  target: string
  type?: "smoothstep" | "straight" | "bezier"
  data?: unknown // Type-erased consumer metadata
}

type ZoomLevel = "detail" | "compact" | "dot"
type LayoutDirection = "TB" | "LR" | "BT" | "RL"
```

### 3.4 Render Context

Source: [`F0Graph.tsx`](F0Graph.tsx#L265-L278)

```typescript
interface F0GraphNodeRenderContext {
  zoomLevel: ZoomLevel
  variant: GraphNodeVariant // "detail" | "compact" | "dot"
  state: GraphNodeState // "default" | "selected" | "highlighted" | "dimmed"
  expanded: boolean
  hasChildren: boolean
  childrenCount?: number
  level: number // ARIA tree level (1-based depth)
  onExpandToggle: () => void
  onClick: () => void
}
```

### 3.5 F0GraphSearch Export Intent

`F0GraphSearch` and `useGraphSearch` live in a local barrel (`F0GraphSearch/index.ts`) for pattern-internal composition and testing. They are intentionally not re-exported from `patterns/internal/F0Graph/index.tsx` and not exported from the package root.

Consumer-facing search integration should use `F0Graph` props (`searchValue`/`onSearchChange` or `searchable`) rather than mounting `F0GraphSearch` directly.

---

## 4. Architecture

### 4.1 Component Hierarchy

```
F0Graph (public)
  └── ReactFlowProvider
        └── F0GraphInner (hooks + contexts)
              ├── ReactFlow (viewport, pan/zoom, rendering)
              │     ├── F0GraphNodeWrapper (memo'd, per-node)
              │     ├── F0GraphExpanderWrapper (memo'd, per-collapsed-parent)
              │     ├── F0GraphCollapserWrapper (memo'd, per-expanded-parent)
              │     └── F0GraphEdgeWrapper / F0GraphEdgeBase
              ├── F0GraphSearch (absolute positioned)
              ├── F0GraphControls (absolute positioned)
              └── F0GraphDetailPanel (absolute positioned, animated)
```

### 4.2 Context Architecture

Five contexts, split for performance — wrappers subscribe only to what they need:

| Context                      | Value                                                                             | Consumers                                         |
| ---------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| `F0GraphZoomContext`         | `{ zoomLevel, currentZoom, direction }`                                           | Node wrappers (variant selection), edge rendering |
| `F0GraphExpandContext`       | `{ expandedNodes: Set }`                                                          | Node wrappers, expander/collapser                 |
| `F0GraphSelectionContext`    | `{ selectedNodes, highlightedNodes }`                                             | Node wrappers (state derivation)                  |
| `F0GraphActionsContext`      | `{ toggleExpand, selectNode, expandAll, collapseAll }`                            | Node wrappers, `canvasActions` slot content       |
| `F0GraphRenderConfigContext` | `{ renderEdge?, visibleTagTypes?, deferredLoading?, tagRowHeight?, largeGraph? }` | Edge wrapper + node wrappers                      |
| `F0GraphFocusContext`        | `{ focusedNodeId, setFocusedNodeId, registerNodeRef }`                            | Node wrappers (roving tabindex)                   |

Source: [`contexts.ts`](contexts.ts)

Each context has a throwing hook (e.g., `useF0GraphZoom()`) for external consumers and a non-throwing `*Internal()` variant for adapter wrappers that may render before provider is ready.

### 4.3 Rendering Pipeline

```
Input: nodes/rootNodes
    │
    ▼
[useLazyTree] ── async fetch, accumulates nodes
    │
    ▼
[useTreeBuilder] ── flat list → tree (roots[], nodeMap, orphans, cycles)
    │
    ▼
[collectVisibleNodes] ── filter by expandedNodes Set
    │
    ▼
[expanderMap] ── create expander pseudo-nodes for collapsed parents
    │
    ▼
[visibleEdges + expanderNodes] ── rewrite edges through expanders
    │
    ▼
[useLayoutEngine.computeLayout] ── positions all visible + expander nodes
    │
    ▼
[rfNodes / rfEdges] ── transform to React Flow format with anchor offset
    │
    ▼
ReactFlow renders
```

### 4.4 Layout Engine

Source: [`hooks/useLayoutEngine.ts`](hooks/useLayoutEngine.ts)

**Built-in:** Deterministic cursor-based tree layout (post-order traversal). Intentionally NOT dagre — avoids barycenter-pass sibling reordering. Sibling order is fixed by input array order.

**Algorithm (TB):**

1. Build parent→children map from edges (preserving order)
2. Find roots (no incoming edges)
3. Recursive placement: leaf = one slot at cursor; branch = center over children
4. Stack ranks vertically: `y = depth × (nodeHeight + rankSep)`

**Constants:** `nodeWidth=256, nodeHeight=56, rankSep=130, nodeSep=40`

**Pluggable:** Consumers provide `layoutEngine` prop implementing the `LayoutEngine` interface for DAG layouts (dagre, ELK, d3-dag).

### 4.5 Interaction Model

| Interaction           | Implementation                                                    |
| --------------------- | ----------------------------------------------------------------- |
| **Pan**               | React Flow native (`panOnDrag`)                                   |
| **Zoom**              | React Flow (`zoomOnScroll`, `zoomOnPinch`)                        |
| **Select**            | Custom: click → `selectNode()` → opens detail panel + centers     |
| **Expand/Collapse**   | Custom: `toggleExpand()` → re-computes visible nodes → new layout |
| **Drag nodes**        | **Disabled** (`nodesDraggable={false}`)                           |
| **Connect edges**     | **Disabled** (`nodesConnectable={false}`)                         |
| **Escape**            | Clears selection, closes detail panel                             |
| **Interaction modes** | `"select"` (default) vs `"pan"` (grab cursor on canvas)           |

### 4.6 Anchor Positioning

Source: [`F0Graph.tsx`](F0Graph.tsx#L441-L470)

On expand/collapse, the component tracks the toggled node's position before and after layout recomputation, then applies a delta offset to all nodes. This prevents the viewport from jumping — the expanded/collapsed node stays visually anchored.

---

## 5. Data Model

### 5.1 Node Identity & Keying

- Nodes are keyed by `id: string` throughout the pipeline
- React Flow nodes use the same `id` — no internal ID remapping
- Expander pseudo-nodes: `expander-${parentId}`
- Collapser pseudo-nodes: `collapser-${parentId}`

### 5.2 Tree Building

Source: [`hooks/useTreeBuilder.ts`](hooks/useTreeBuilder.ts)

Resolution rules:

1. If `parentIds` exists and is non-empty → first entry is canonical parent; full list stored as `dagParentIds`
2. Otherwise → `parentId` is canonical parent
3. Self-references detected and promoted to roots (logged as cycles)
4. Orphans (parentId referencing non-existent node) promoted to roots
5. DFS cycle detection on canonical-parent tree

### 5.3 Lazy Tree

Source: [`hooks/useLazyTree.ts`](hooks/useLazyTree.ts)

- Starts with `rootNodes` only
- On expand of unloaded node → calls `loadChildren(nodeId)`
- Children accumulated into flat array (never evicted on collapse)
- Tracks `loadingNodes: Set<string>` and `errorNodes: Map<string, Error>`
- Supports retry via `retryNode(nodeId)`

### 5.4 Edge Derivation

If `edges` prop is empty/omitted, edges are auto-derived from the tree structure: one edge `parent.id → child.id` per child relationship.

---

## 6. Composition Patterns

### 6.1 Consumer Assembly

```tsx
<F0Graph
  nodes={flatNodes}
  renderNode={(node, ctx) => (
    <F0GraphNode
      {...ctx}
      avatar={{ type: "person", firstName, lastName, src }}
      title={node.data.name}
      subtitle={node.data.title}
    />
  )}
  detailPanel={(node) => ({
    variant: "resource",
    header: <ProfileHeader employee={node.data} />,
    actions: [{ label: "Message", onClick: ... }],
    children: <EmployeeDetails data={node.data} />,
  })}
  searchable={{
    getLabel: (node) => node.data.name,
    getSecondaryLabel: (node) => node.data.title,
  }}
  showControls
/>
```

### 6.2 What the Consumer Assembles

- The `renderNode` callback (can be fully custom or use `F0GraphNode`)
- The `detailPanel` configuration (2 variants: default or resource)
- Search indexing callbacks (`searchable`)
- Data fetching for lazy mode (`loadChildren`)
- Layout engine for DAG topologies

### 6.3 What the Pattern Owns

- Tree building, expand/collapse state management
- Zoom level computation with hysteresis
- Layout positioning (built-in tree engine)
- Edge routing and rendering
- Selection state and detail panel lifecycle
- Anchor positioning across layout changes
- Search filtering, ancestor expansion, fly-to-node
- All interaction handling (pan, zoom, select, keyboard)

### 6.4 F0GraphNode Slot Architecture

Source: [`F0GraphNode/types.ts`](F0GraphNode/types.ts)

The default node is a pill with slots: `avatar`, `title`, `subtitle`, `metadata`, `actions`. The `metadata` and `actions` slots only render in `detail` variant. Animation between variants uses CSS transitions (padding, width) + framer-motion crossfades for text swaps.

---

## 7. Performance Considerations

### 7.1 What's There

| Technique                        | Location                                   | Impact                                                                                  |
| -------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------- |
| `onlyRenderVisibleElements`      | React Flow prop                            | Only renders nodes in viewport                                                          |
| Memo'd wrappers                  | `F0GraphNodeWrapper`, `F0GraphEdgeWrapper` | Custom `arePropsEqual` prevents re-render on unrelated context changes                  |
| Split contexts (5)               | `contexts.ts`                              | Nodes don't re-render on zoom-only or selection-only changes unless their slice changes |
| Stable `renderNode` ref          | `renderNodeRef.current` pattern            | Prevents rfNodes dependency array invalidation on parent re-render                      |
| CSS transitions for dot↔compact  | `F0GraphNode.tsx`                          | Avoids ~600 framer-motion instances per zoom transition                                 |
| Stable crossfade key             | `isDotTransition` logic                    | Prevents AnimatePresence mount/unmount cycle during dot transitions                     |
| Anchor offset (pure computation) | `anchorOffset` useMemo                     | Layout doesn't trigger viewport manipulation                                            |

### 7.2 What's NOT There (Gaps)

| Gap                                                                                                 | Risk                                                                          |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **No windowed/virtualized node list** — relies entirely on React Flow's `onlyRenderVisibleElements` | If all nodes are in viewport (zoomed-out dot mode), all render simultaneously |
| **No layout web worker** — `computeLayout` runs synchronously on main thread                        | 5000+ node trees could block the frame budget                                 |
| **No edge bundling/culling** — all visible edges are rendered as SVG paths                          | Edge count scales linearly with visible nodes                                 |
| **No `useDeferredValue` or transition API** for expand state changes                                | Large subtree expansion is synchronous                                        |
| **Detail panel causes full rfNodes recompute** (anchor offset recalculation)                        | Opening detail panel on a 5000-node graph triggers memoization cascade        |

### 7.3 Stress Test Evidence

Source: [`__tests__/F0Graph.perf.test.tsx`](/__tests__/F0Graph.perf.test.tsx)

Tests exist verifying mount behavior and memo stability, but no runtime performance benchmarks (frame time, layout duration).

---

## 8. Accessibility

### 8.1 Current Support

| Feature                   | Implementation                                |
| ------------------------- | --------------------------------------------- |
| `role="tree"`             | On the container div                          |
| `role="treeitem"`         | On each `F0GraphNode`                         |
| `aria-expanded`           | Set on nodes with children                    |
| `aria-level`              | 1-based depth                                 |
| `aria-selected`           | Reflects selection state                      |
| `tabIndex={0}`            | Nodes are focusable                           |
| `aria-label="Graph view"` | On the tree container                         |
| Keyboard: Enter/Space     | Triggers `onClick`                            |
| Keyboard: ArrowRight      | Expands collapsed node                        |
| Keyboard: ArrowLeft       | Collapses expanded node                       |
| Keyboard: Escape          | Clears selection, closes panel                |
| `prefers-reduced-motion`  | Disables CSS transitions + framer springs     |
| Focus scope               | Detail panel traps focus (Radix `FocusScope`) |

### 8.2 Gaps

| Gap                                                             | WCAG Impact                                                                           |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **No roving tabindex** — all nodes have `tabIndex={0}`          | Tab order is DOM order (which is render order from React Flow), not visual tree order |
| **No ArrowUp/ArrowDown** navigation between siblings            | Missing expected tree keyboard pattern (WAI-ARIA Tree View)                           |
| **No `aria-owns`** for dynamic tree structure                   | Assistive tech may not understand parent-child relationships                          |
| **Pan/zoom has no keyboard equivalent** in default mode         | Requires mouse; `F0GraphControls` provides buttons but isn't shown by default         |
| **Expander/collapser nodes** have no explicit ARIA role         | They're interactive but not announced as tree items                                   |
| **Search results popover** — unclear if it has `role="listbox"` | Needs verification                                                                    |

---

## 9. Open Questions & Known Limitations

### 9.1 Architectural Open Questions

1. **DAG layout story is incomplete.** The type system supports `parentIds` and the tree builder preserves `dagParentIds`, but there's no shipped DAG layout engine. The `LayoutEngine` interface is the extension point, but consumers must bring their own implementation. Is this intentional or a gap?

2. **Edge identity in derived mode.** When edges are auto-derived from `parentId`, edge IDs are `${parent.id}->${child.id}`. This means edge identity changes if a node's parent changes (e.g., reorg). Is this acceptable for animation continuity?

3. **A future v2 composition API has been discussed** (`F0Graph.Canvas`, `F0Graph.Node`, etc.) and is fundamentally different from the current render-prop approach. What's the migration timeline? Should consumers build against v1 knowing it will break?

4. **`yStretch = 1` is hardcoded** (line ~590 of F0Graph.tsx). Was this intended as a configurable layout parameter? It's multiplied into every node's Y position.

5. **Detail panel width is fixed** (384px default, configurable via prop). No responsive behavior — on narrow viewports, the panel may occlude the entire canvas.

### 9.2 Known Limitations

| Limitation                    | Evidence                                                                    |
| ----------------------------- | --------------------------------------------------------------------------- |
| **Nodes are not draggable**   | `nodesDraggable={false}` — read-only exploration only                       |
| **Edges are not connectable** | `nodesConnectable={false}` — no editor mode                                 |
| **No undo/redo**              | No history state management                                                 |
| **No multi-root visual**      | Multiple roots are supported in data, but layout starts from first root     |
| **No edge labels**            | `GraphEdge.data` exists but no built-in rendering for labels                |
| **CSS variable dependency**   | Requires `--neutral-*` CSS custom properties from F0 base.css               |
| **Search is local only**      | `useGraphSearch` filters the in-memory node list; no server-side search API |
| **ClickSpark is always on**   | Decorative animation on every node click; no prop to disable                |

### 9.3 Code Smells / Tech Debt

1. **1200+ line monolithic component** (`F0Graph.tsx`) — high cognitive load, many co-located concerns
2. **Type assertions** (`as unknown as NodeTypes[string]`) at node/edge type registration — workaround for React Flow generics
3. **`useRef` + `useEffect` for stable callbacks** (renderNodeRef, expandedNodesRef, selectedNodesRef) — custom "latest ref" pattern repeated 3 times instead of extracted
4. **Expander/collapser positioning is manual** (not from layout engine) — fragile coupling to node dimensions
5. **`window.requestAnimationFrame` for centering** after panel open — timing-based, race-prone

---

## 10. Alternatives Considered

### 10.1 Documented in Source

| Decision                        | Alternative Rejected     | Evidence                                                                                                                                                                                                           |
| ------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Custom tree layout engine       | dagre                    | Commit message + `useLayoutEngine.ts` comments: "dagre re-derives sibling order from edge structure on every run via barycenter passes, which means collapsing or expanding a node can shuffle unrelated siblings" |
| CSS transitions for dot↔compact | Framer-motion springs    | `F0GraphNode.tsx` comments: "eliminating ~600 framer-motion animation instances per transition"                                                                                                                    |
| React Flow as rendering engine  | Custom canvas / SVG      | Current source comments and API shape assume React Flow remains the rendering engine                                                                                                                               |
| Render prop (`renderNode`)      | Compound component slots | Current v1 choice; v2 plans to add a type registry as an alternative                                                                                                                                               |

### 10.2 Not Documented in Source

- Why `@xyflow/react` over alternatives (e.g., `react-force-graph`, `vis.js`, `cytoscape`)
- Why a custom component vs. extending an existing org-chart library
- Why `Set<string>` for expand/selection state vs. a bitmap or sorted array

---

## Appendix: File Map

| Path                             | Role                                                     |
| -------------------------------- | -------------------------------------------------------- |
| `F0Graph.tsx`                    | Main component (~1200 lines)                             |
| `types.ts`                       | Public type contracts                                    |
| `contexts.ts`                    | 5 React contexts + hooks                                 |
| `index.tsx`                      | Public exports barrel                                    |
| `F0Graph.css`                    | Cursor overrides, semantic CSS variables                 |
| `hooks/useTreeBuilder.ts`        | Flat nodes → tree (with cycle/orphan detection)          |
| `hooks/useLayoutEngine.ts`       | Built-in deterministic tree layout                       |
| `hooks/useLazyTree.ts`           | Async child loading state machine                        |
| `hooks/useGraphZoomLevel.ts`     | Zoom factor → semantic level with hysteresis             |
| `F0GraphNode/`                   | Default pill-style node (avatar + text + slots)          |
| `F0GraphEdge/`                   | Default smoothstep edge with variants                    |
| `F0GraphExpander/`               | Collapse/expand pill for collapsed parents               |
| `F0GraphControls/`               | Zoom/pan/fit toolbar                                     |
| `F0GraphDetailPanel/`            | Right-side detail panel (default + resource variants)    |
| `F0GraphSearch/`                 | Search pill + popover + useGraphSearch hook              |
| `internal/ReactFlowAdapters.tsx` | Memo'd wrapper components bridging contexts → React Flow |
| `internal/ClickSpark.tsx`        | Decorative click animation                               |
| `__tests__/`                     | Unit + perf regression tests                             |
| `__stories__/`                   | Storybook stories                                        |
