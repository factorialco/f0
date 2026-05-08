# F0Graph v2 — Refactor Plan

> **Single component family** serving hierarchical exploration (org-chart) AND
> workflow editing (BPMN-style DAG with branching, fork/join, multiple node types,
> full editing).

---

## 1. Goals & Non-Goals

### Goals

1. **DAG-native data model.** Accept `{ nodes, edges }` where nodes have no
   mandatory `parentId`. Tree topologies are a degenerate case of DAG,
   handled by a `treeToGraph()` adapter.
2. **Composition-first API.** Replace flag props and monolithic render props
   with a family of slot components (`F0Graph.Canvas`, `F0Graph.Node`,
   `F0Graph.Edge`, etc.) that consumers compose declaratively.
3. **Pluggable node types.** Consumers register arbitrary node renderers by
   type key. Nodes declare their type; the registry resolves the renderer.
   Variable node sizes per type are first-class.
4. **Pluggable edge types.** Same registry pattern for edges. Connection
   handles, edge labels, and creation gestures are opt-in.
5. **Editor primitives.** Expose hooks and callback slots for connection
   creation, drag-to-add, sidebar editing, toolbar actions — without
   bundling any workflow-specific business logic.
6. **Backwards-compat bridge.** Existing `parentId`-based tree consumers
   get a 1-line migration via `<F0Graph.Tree>` or `treeToGraph()`.
7. **Tree-shakeable.** Editor-only features (connection line, drag-to-add,
   toolbar, sidebar slot) are separate entry points / components that
   tree-shake out for read-mode consumers.

### Non-Goals

- **Workflow business logic inside F0Graph.** No persistence, validation
  engines, dirty tracking, undo/redo, or BPMN semantics in the component.
  These live in the consumer.
- **Built-in DAG auto-layout.** F0Graph ships a tree layout engine. DAG
  layout (dagre, ELK, d3-dag) is consumer-provided via the `LayoutEngine`
  interface. We may ship a dagre adapter as a separate export, but it is
  not part of the core component.
- **Replacing React Flow.** F0Graph v2 continues to wrap `@xyflow/react`.
  The refactor controls the public API surface; React Flow remains the
  rendering engine.
- **Supporting non-React platforms.** React-only.
- **Feature parity with the Factorial workflow editor.** The workflow editor
  is a consumer of F0Graph — it brings its own state management, sidepanel
  forms, building block palette, validation, and persistence. F0Graph
  provides the canvas, nodes, edges, and interaction primitives.

---

## 2. Target Architecture

### 2.1 Public API Surface

```
F0Graph                    Root provider. Wraps ReactFlowProvider + contexts.
                           Accepts { nodes, edges } and configuration.

F0Graph.Canvas             The pannable/zoomable viewport. Renders the React
                           Flow instance, background, minimap. Always required.

F0Graph.Node               Default node renderer (the current pill-style node).
                           Used as a convenience — consumers can register
                           completely custom renderers instead.

F0Graph.Edge               Default edge renderer (smoothstep + dot marker).
                           Same opt-in pattern as Node.

F0Graph.Controls            Zoom/pan/fit/direction controls toolbar.

F0Graph.Search             Search pill + popover (current F0GraphSearch).

F0Graph.DetailPanel        Right-side detail panel overlay on canvas.

F0Graph.Toolbar            Slot for editor actions (add node, undo/redo, etc.).
                           Renders children in a positioned toolbar container.
                           Read-mode consumers omit it entirely.

F0Graph.Sidebar            Slot for a sidepanel that overlays or pushes the
                           canvas. Editor consumers render their forms here.
                           Read-mode consumers omit it entirely.

F0Graph.Connector          Connection line + handle configuration for edge
                           creation. When absent, connection gestures are
                           disabled (read-mode default).

F0Graph.Expander           Collapse/expand pill for tree-mode nodes (current
                           F0GraphExpander, pulled up as a composable slot).

F0Graph.Tree               Thin wrapper that accepts parentId-based data,
                           runs treeToGraph(), and renders F0Graph.Canvas
                           with tree defaults. The backwards-compat bridge.
```

Every slot is optional. Minimal org-chart:

```tsx
<F0Graph nodes={nodes} edges={edges}>
  <F0Graph.Canvas />
  <F0Graph.Controls />
</F0Graph>
```

Full workflow editor:

```tsx
<F0Graph
  nodes={nodes}
  edges={edges}
  nodeTypes={nodeTypeRegistry}
  edgeTypes={edgeTypeRegistry}
  onConnect={handleConnect}
  onNodesChange={handleNodesChange}
  onEdgesChange={handleEdgesChange}
>
  <F0Graph.Canvas>
    <F0Graph.Connector connectionLineComponent={MyConnectionLine} />
  </F0Graph.Canvas>
  <F0Graph.Toolbar>
    <BuildingBlockPalette />
    <UndoRedoButtons />
  </F0Graph.Toolbar>
  <F0Graph.Sidebar open={!!selectedNode}>
    <NodeSidepanel node={selectedNode} />
  </F0Graph.Sidebar>
  <F0Graph.Controls />
</F0Graph>
```

### 2.2 Data Model

```ts
// ─── Core types ──────────────────────────────────────────────

/** A node in the graph. Generic T is the entity payload. */
interface F0GraphNode<T = unknown> {
  id: string
  /** Optional node type key. Resolves to a renderer via nodeTypes registry. */
  type?: string
  /** Arbitrary consumer payload, opaque to F0Graph. */
  data: T
  /** Position hint. When omitted, the layout engine computes position. */
  position?: { x: number; y: number }
  /** Explicit dimensions. When omitted, measured from DOM or defaults. */
  width?: number
  height?: number
  /** Whether the node can be dragged (editor mode). Defaults to false. */
  draggable?: boolean
  /** Whether the node can be connected (editor mode). Defaults to false. */
  connectable?: boolean
  /** Whether the node can be selected. Defaults to true. */
  selectable?: boolean
}

/** An edge between two nodes. */
interface F0GraphEdge<T = unknown> {
  id: string
  source: string
  target: string
  /** Optional source handle ID (for nodes with multiple outputs). */
  sourceHandle?: string
  /** Optional target handle ID (for nodes with multiple inputs). */
  targetHandle?: string
  /** Optional edge type key. Resolves to a renderer via edgeTypes registry. */
  type?: string
  /** Consumer-defined edge metadata (labels, weights, semantic types). */
  data?: T
  /** Visual style hint. */
  animated?: boolean
}

// ─── Node type registry ──────────────────────────────────────

/** Map of type key → React component that renders that node type. */
type F0GraphNodeTypes = Record<
  string,
  React.ComponentType<F0GraphNodeRendererProps>
>

interface F0GraphNodeRendererProps<T = unknown> {
  node: F0GraphNode<T>
  selected: boolean
  highlighted: boolean
  zoomLevel: ZoomLevel
  /** Whether the graph is in editor mode (connections enabled). */
  editable: boolean
}

// ─── Edge type registry ──────────────────────────────────────

type F0GraphEdgeTypes = Record<
  string,
  React.ComponentType<F0GraphEdgeRendererProps>
>

interface F0GraphEdgeRendererProps<T = unknown> {
  edge: F0GraphEdge<T>
  selected: boolean
  animated: boolean
  /** Source/target positions computed by layout. */
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
}

// ─── Layout ──────────────────────────────────────────────────

/** Layout engine interface (unchanged from v1, but operates on DAG types). */
interface LayoutEngine {
  computeLayout(
    nodes: F0GraphNode[],
    edges: F0GraphEdge[],
    direction: LayoutDirection,
    config: LayoutConfig
  ): LayoutResult
}

interface LayoutConfig {
  /** Per-type default dimensions for nodes without explicit width/height.
   *  Used by DAG engines only; the built-in tree engine ignores per-type
   *  dimensions and uses a single fixed node size. */
  nodeDimensions?: Record<string, { width: number; height: number }>
  /** Fallback dimensions. The tree engine uses these as the single fixed
   *  size for all nodes. DAG engines fall back to these for any type not
   *  listed in nodeDimensions. */
  defaultNodeWidth: number
  defaultNodeHeight: number
  rankSep: number
  nodeSep: number
  /** DAG-only. When true, the dagre adapter pins node positions after the
   *  initial layout so subsequent updates do not recompute barycenter and
   *  reorder siblings. Default false. */
  stabilizeSiblingOrder?: boolean
}

// ─── Tree adapter types ──────────────────────────────────────

/** Input type for the backwards-compat tree adapter. */
interface TreeNodeInput<T = unknown> {
  id: string
  parentId: string | null
  data: T
  childrenCount?: number
  childrenLoaded?: boolean
}

/** Convert parentId-based flat list to { nodes, edges } DAG format. */
function treeToGraph<T>(treeNodes: TreeNodeInput<T>[]): {
  nodes: F0GraphNode<T>[]
  edges: F0GraphEdge[]
}
```

### 2.3 Mental Model

```
┌─────────────────────────────────────────────────────────────┐
│  <F0Graph>   (provider: data, contexts, event bus)          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ <F0Graph.Canvas>  (ReactFlow viewport)              │    │
│  │                                                     │    │
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐         │    │
│  │   │  Node A  │──│  Node B  │──│  Node C  │         │    │
│  │   │(type:pill)│  │(type:pill)│  │(type:cond)│        │    │
│  │   └──────────┘  └──────────┘  └──────────┘         │    │
│  │                                                     │    │
│  │   <F0Graph.Connector />  (opt-in: edge creation)    │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ .Controls    │  │ .Toolbar     │  │ .Sidebar         │  │
│  │ (zoom/pan)   │  │ (consumer    │  │ (consumer forms) │  │
│  │              │  │  actions)    │  │                  │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐                        │
│  │ .Search      │  │ .DetailPanel │                        │
│  │              │  │              │                        │
│  └──────────────┘  └──────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

**What owns what:**

| Concern                         | Owner                                                 |
| ------------------------------- | ----------------------------------------------------- |
| Node/edge data, change handlers | Consumer (controlled) or F0Graph (uncontrolled)       |
| Layout computation              | LayoutEngine (built-in tree or consumer-provided DAG) |
| Node rendering                  | NodeType registry (consumer-registered components)    |
| Edge rendering                  | EdgeType registry (consumer-registered components)    |
| Selection state                 | F0Graph (internal) or Consumer (controlled)           |
| Expand/collapse (tree mode)     | F0Graph (internal) or Consumer (controlled)           |
| Zoom/pan                        | F0Graph (internal via React Flow)                     |
| Connection creation             | F0Graph.Connector (opt-in) → consumer `onConnect`     |
| Editing forms                   | Consumer renders into F0Graph.Sidebar                 |
| Toolbar actions                 | Consumer renders into F0Graph.Toolbar                 |
| Persistence, validation, undo   | Consumer. F0Graph never touches these.                |

### 2.4 State Architecture

**Controlled / uncontrolled dual pattern** (same as v1, extended):

| State           | Controlled prop         | Uncontrolled default   | Change callback         |
| --------------- | ----------------------- | ---------------------- | ----------------------- |
| Nodes           | `nodes`                 | — (required)           | `onNodesChange`         |
| Edges           | `edges`                 | — (required for DAG)   | `onEdgesChange`         |
| Selection       | `selectedNodes`         | internal `Set<string>` | `onSelectedNodesChange` |
| Expanded nodes  | `expandedNodes`         | internal `Set<string>` | `onExpandedNodesChange` |
| Zoom / viewport | — (React Flow internal) | —                      | `onViewportChange`      |
| Direction       | `direction`             | `defaultDirection`     | `onDirectionChange`     |

For editor mode, `nodes` and `edges` are always controlled — the consumer
owns the source of truth and applies changes via React Flow's
`applyNodeChanges` / `applyEdgeChanges` helpers (re-exported from F0Graph
for convenience).

### 2.5 Extension Points

1. **Custom node renderer:** Register via `nodeTypes` prop. Component
   receives `F0GraphNodeRendererProps`. Use React Flow `Handle` components
   inside custom nodes for connection points.
2. **Custom edge renderer:** Register via `edgeTypes` prop. Component
   receives `F0GraphEdgeRendererProps`.
3. **Custom layout engine:** Provide `layoutEngine` prop implementing
   `LayoutEngine` interface. Receives all nodes+edges, returns positioned
   results. Built-in tree engine is the fallback.
4. **Custom toolbar items:** Render any children inside `<F0Graph.Toolbar>`.
5. **Custom sidebar content:** Render any children inside `<F0Graph.Sidebar>`.
6. **Custom connection line:** Pass `connectionLineComponent` to
   `<F0Graph.Connector>`.
7. **Node dimension overrides:** Per-type dimensions in `LayoutConfig.nodeDimensions`.

---

## 3. Backwards-Compat Bridge

### 3.1 `treeToGraph()` adapter

A pure function exported from `@factorialco/f0-react`:

```ts
import { treeToGraph } from "@factorialco/f0-react"

// Old: nodes with parentId
const treeNodes = [
  { id: "1", parentId: null, data: { name: "CEO" } },
  { id: "2", parentId: "1", data: { name: "CTO" } },
]

// New: { nodes, edges }
const { nodes, edges } = treeToGraph(treeNodes)

<F0Graph nodes={nodes} edges={edges}>
  <F0Graph.Canvas />
</F0Graph>
```

The adapter:

- Strips `parentId` and `parentIds` from each node.
- Generates edges from parent→child relationships.
- Preserves `childrenCount` and `childrenLoaded` as-is.
- Returns `F0GraphNode[]` + `F0GraphEdge[]`.

### 3.2 `<F0Graph.Tree>` convenience wrapper

For consumers who want zero migration effort:

```tsx
<F0Graph.Tree
  nodes={parentIdNodes}
  renderNode={renderEmployee}
  defaultExpandDepth={2}
  showControls
/>
```

Internally calls `treeToGraph()`, renders `<F0Graph>` + `<F0Graph.Canvas>`,
and wires expand/collapse with the tree layout engine. Accepts a subset of
the v1 props surface (everything that doesn't require DAG features).

### 3.3 Codemod outline

A jscodeshift transform that:

1. Finds `<F0Graph nodes={...} renderNode={...}>` usages.
2. Wraps node data in `treeToGraph()` if nodes have `parentId`.
3. Replaces `renderNode` prop with a `nodeTypes` registry entry.
4. Wraps content in `<F0Graph.Canvas>`.
5. Moves `showControls`/`showMinimap` into child `<F0Graph.Controls>`.
6. Moves `detailPanel` into child `<F0Graph.DetailPanel>`.
7. Moves `searchable` into child `<F0Graph.Search>`.

Not writing the codemod now — just documenting the transforms for Phase 9.

---

## 4. Phased Execution Plan

### Phase 0: Audit & Freeze

**Scope:** Inventory everything before changing anything.

**Deliverables:**

- Complete list of current public API exports (types, components, hooks).
- List of all consumers: graph-dev playground, storybook stories, any
  Factorial frontend imports of `F0Graph`.
- Snapshot of current test coverage (unit + perf).
- Document every prop on `F0GraphProps` with usage status (used by consumers
  vs. internal-only).

**Exit criteria:** Audit document reviewed, no consumer uses undocumented
internal APIs.

**Risk:** Low. Read-only phase.

**Unblocks:** Everything else.

---

### Phase 1: Data Model — DAG Types + Tree Adapter

**Scope:** Define and ship the new `F0GraphNode`, `F0GraphEdge`, and
`treeToGraph()` types. The old `GraphNode` (with `parentId`) becomes a
legacy alias resolved through `treeToGraph()`.

**Deliverables:**

- New types in `types.ts`: `F0GraphNode`, `F0GraphEdge`, `LayoutConfig`,
  `F0GraphNodeTypes`, `F0GraphEdgeTypes`.
- `treeToGraph()` pure function with tests.
- Internal `useTreeBuilder` refactored to consume DAG types (or deprecated
  in favor of direct node/edge pass-through).
- Layout engine interface updated to accept `F0GraphNode[]` + `F0GraphEdge[]`
  with `LayoutConfig` for variable node dimensions.

**Exit criteria:** New types compile, `treeToGraph()` passes all tree
scenarios (basic, lazy, multi-root, DAG with `parentIds`), existing
stories still render via internal adapter.

**Risk:** Medium. Type changes propagate across the codebase. Mitigated by
keeping the old types as aliases during transition.

**Unblocks:** Phase 2 (composition shell needs the data model).

---

### Phase 2: Composition Shell — Slots, Context, Render Delegation

**Scope:** Split the monolithic `F0Graph` component into the provider +
slot architecture. `F0Graph` becomes a context provider;
`F0Graph.Canvas` takes over React Flow rendering.

**Deliverables:**

- `F0Graph` component refactored to pure provider (data, contexts, event
  handlers). No JSX rendering of the canvas itself.
- `F0Graph.Canvas` component: wraps `ReactFlow`, background, minimap.
- `F0Graph.Controls` extracted (already exists, just re-mounted as child).
- `F0Graph.Search` extracted (already exists).
- `F0Graph.DetailPanel` extracted (already exists).
- `F0Graph.Toolbar` — new empty slot container (positioned absolutely).
- `F0Graph.Sidebar` — new empty slot container (right-side overlay/push).
- `F0Graph.Connector` — new opt-in component that enables connection
  handles on nodes and connection line rendering.
- `F0Graph.Expander` — existing expander pulled up as composable child.
- `F0Graph.Tree` — convenience wrapper.
- Context refactor: merge existing 5 contexts into a cleaner layered
  structure:
  - `F0GraphContext` (data, layout, config)
  - `F0GraphInteractionContext` (selection, expand, zoom)
  - `F0GraphActionsContext` (event handlers)
  - `F0GraphRenderContext` (node/edge type registries)

**Exit criteria:** Existing storybook stories rewritten to use slot
composition. All existing tests pass (adapted). `F0Graph.Tree` renders
identical output to v1 for the same data.

**Risk:** High. This is the largest single phase. Mitigated by keeping
internal React Flow wiring unchanged — only the public API surface moves.

**Unblocks:** Phase 3-7 (all subsequent phases add to the composition shell).

---

### Phase 3: Node Type Registry — Pluggable Renderers, Variable Sizes

**Scope:** Replace the single `renderNode` callback with a type registry.

**Deliverables:**

- `nodeTypes` prop on `<F0Graph>`: `Record<string, ComponentType<F0GraphNodeRendererProps>>`.
- Default `"pill"` type registered automatically (the current F0GraphNode).
- `F0GraphNodeRendererProps` interface (node data, selection state, zoom
  level, editable flag).
- Node dimensions resolved per-type via `LayoutConfig.nodeDimensions`.
  Layout engine receives dimensions alongside nodes.
- React Flow `nodeTypes` map generated internally from the F0Graph registry
  (wrapping each consumer component in the React Flow adapter).

**Exit criteria:** A story renders 3 different node types (pill, icon-only,
wide card) in the same graph with correct layout spacing.

**Risk:** Medium. Variable node sizes are supported only on the DAG path.
The built-in tree engine continues to use a single fixed node size; tree
consumers who need heterogeneous dimensions migrate to the DAG path with
`treeToGraph()` + a DAG layout engine.

**Unblocks:** Phase 7 (multiple node types showcase).

---

### Phase 4: Edge Model & Connectivity

**Scope:** Ship the edge type registry and connection handle system.
Read-only initially — connection creation comes in Phase 6.

**Deliverables:**

- `edgeTypes` prop on `<F0Graph>`: `Record<string, ComponentType<F0GraphEdgeRendererProps>>`.
- Default `"default"` edge type (current smoothstep + dot).
- `sourceHandle` / `targetHandle` support on `F0GraphEdge` for nodes
  with multiple connection points.
- Handle positioning API for custom node renderers (top/bottom/left/right
  handles, or arbitrary positioned handles).
- Edge variant system preserved (default, highlighted, dimmed) but now
  driven by consumer via edge data or selection state.

**Exit criteria:** A story renders a DAG with 3 edge types (default,
dashed, animated) and a node with 2 output handles routing to different
targets.

**Risk:** Low-medium. React Flow already supports all of this natively.
The work is exposing it cleanly through F0Graph's API without leaking
React Flow internals.

**Unblocks:** Phase 6 (edge creation builds on handle system).

---

### Phase 5: Read-Mode Parity

**Scope:** All current org-chart features work through the new composition
API. This is the "nothing regressed" gate.

**Deliverables:**

- Full feature parity checklist:
  - [x] Tree rendering with expand/collapse
  - [x] Lazy tree loading (`rootNodes` + `loadChildren`)
  - [x] Three zoom levels (detail, compact, dot) with smooth transitions
  - [x] Selection (single, multi, none)
  - [x] Search with auto-expand + fly-to
  - [x] Detail panel with node centering + offset
  - [x] Controls toolbar (zoom, fit, direction toggle)
  - [x] MiniMap
  - [x] Custom edge rendering
  - [x] Keyboard navigation (Enter, Space, Arrow keys)
  - [x] ARIA tree semantics
  - [x] Click spark animation
  - [x] Anchor-preserving layout on expand/collapse
- graph-dev playground migrated to new API.
- All existing unit tests and perf tests pass.

**Exit criteria:** Visual regression test: screenshot comparison of v1 vs
v2 for the BasicTree, Lazy, WithControls, and DetailPanel stories shows
no regressions.

**Risk:** Medium. Edge cases in the anchor-preserving layout and zoom
transition animations are the most likely regression sources.

**Unblocks:** Phase 6 (can't add editor features until read-mode is solid).

---

### Phase 6: Editor Primitives

**Scope:** Ship the interaction primitives that enable editing, without
any workflow-specific logic.

**Deliverables:**

- `<F0Graph.Connector>` activates:
  - Connection handles on nodes (configurable per node type).
  - `onConnect` callback when user drags an edge between handles.
  - `connectionLineComponent` prop for custom connection line rendering.
  - `isValidConnection` callback for consumer-side validation.
- `onNodesChange` callback (position drag, selection change, removal).
- `onEdgesChange` callback (edge removal, selection).
- `<F0Graph.Toolbar>` positioned container with F0 styling.
- `<F0Graph.Sidebar>` overlay with open/close animation, push-canvas
  mode, and configurable width.
- Drag-to-add: `onDrop` + `onDragOver` callbacks on Canvas for external
  drag sources (palette → canvas). F0Graph handles the drop zone;
  consumer handles what gets created.
- Node deletion: `onNodesDelete` + `onEdgesDelete` callbacks.

**Exit criteria:** An interactive story where a user can:

1. Drag a node from a palette onto the canvas.
2. Connect two nodes by dragging from handle to handle.
3. Delete a node or edge.
4. Open a sidebar by clicking a node.
   All without any workflow-specific code inside F0Graph.

**Risk:** High. This is where the "smuggled workflow editor" failure mode
is most dangerous. Strict review gate: every line of code in this phase
must be topology-agnostic and domain-free.

**Unblocks:** Phase 7, 8.

---

### Phase 7: Multiple Node Types Showcase

**Scope:** Build a typed-node story demonstrating workflow-style node types
rendered through the F0Graph registry.

**Deliverables:**

- Storybook story (or graph-dev page) with 4 node types:
  - Trigger (icon + colored header, 200×80)
  - Condition (diamond or colored card, 180×60)
  - Action/Task (standard card, 240×80)
  - Terminate (small pill, 120×40)
- Each type registered as a custom `nodeTypes` entry.
- DAG layout (dagre or ELK adapter) positioning the heterogeneous nodes.
- Edge routing between multi-handle nodes (condition has 2+ outputs).
- This story is NOT the workflow editor — it's a proof of composition.

**Exit criteria:** Story renders correctly, all node types are visually
distinct, edges route to correct handles, layout handles variable sizes.

**Risk:** Low. This is assembly of already-built pieces.

**Unblocks:** Phase 8.

---

### Phase 8: Workflow Editor Proof of Concept

**Scope:** A self-contained spike that assembles a workflow editor
using F0Graph.\* slots, proving the composition holds for the full
editor use case. NOT migrating the Factorial workflow editor.

**Deliverables:**

- A standalone `WorkflowEditorDemo` component (in graph-dev or a
  dedicated story) that:
  - Renders 6 workflow node types (trigger, condition, conditionIf,
    conditionElse, task, multiAction, terminate).
  - Supports adding nodes from a building-block palette (drag-to-add).
  - Supports connecting nodes via handles.
  - Opens a mock sidepanel on node click (no real forms).
  - Has a toolbar with add/delete/undo buttons.
  - Uses dagre for DAG layout.
  - Tracks dirty state (consumer-side).
  - Does NOT persist to any backend.
- A "lessons learned" document listing any API gaps discovered during
  the spike.

**Exit criteria:** The demo works end-to-end without any changes to
F0Graph internals (no "just one more prop" escapes). Any gaps found
are logged as issues for Phase 9.

**Risk:** Medium. The spike may reveal missing extension points. That's
the point — better to find them here than during real migration.

**Unblocks:** Phase 9 (stabilization informed by spike findings).

---

### Phase 9: Stabilize, Document, Deprecate Old API

**Scope:** Finalize the public API, write documentation, deprecate v1.

**Deliverables:**

- API reference documentation (MDX in storybook).
- Migration guide: v1 → v2 with before/after examples.
- `treeToGraph()` migration helper highlighted prominently.
- Codemod (if justified by consumer count).
- Deprecation warnings on v1 exports (`GraphNode` with `parentId`,
  `renderNode` prop, `F0GraphProps` legacy shape).
- Performance benchmarks: v2 vs v1 for 500-node tree, 200-node DAG.
- Bundle size audit: tree-only import vs full editor import.
- CHANGELOG entry for major version.

**Exit criteria:**

- All storybook stories use v2 API.
- graph-dev playground uses v2 API.
- Deprecation warnings fire for any v1 usage.
- Bundle size of tree-only consumer is within 5% of v1.

**Risk:** Low. Documentation and cleanup phase.

---

## 5. Risks & Mitigations

### Bundle size growth

**Risk:** Editor features (connection line rendering, drag-to-add, toolbar
positioning) add weight for all consumers, including read-only org-chart.

**Mitigation:** Composition architecture is the mitigation. `F0Graph.Connector`,
`F0Graph.Toolbar`, and `F0Graph.Sidebar` are separate components. If a
consumer never imports them, they tree-shake out. The core `F0Graph` +
`F0Graph.Canvas` path should add near-zero weight over v1 because the
React Flow dependency is already present.

**Verification:** Phase 9 bundle size audit with two entry points: tree-only
and full-editor. Tree-only must be within 5% of v1.

### Performance with editor concerns

**Risk:** Editor callbacks (onNodesChange, onEdgesChange, onConnect) trigger
re-renders. React Flow's internal store updates on every drag frame. With
200+ nodes, this could cause jank.

**Mitigation:**

- React Flow already handles this internally with its own store (zustand).
  F0Graph should NOT lift node positions into React state — let React Flow
  own positions, and only sync to consumer state on commit (dragStop, not
  drag).
- Memo boundaries: each node type component is `memo`'d. The adapter
  wrapper (Phase 2) preserves the current `memo` + shallow-compare pattern.
- Zoom-level transitions: keep the current CSS-transition approach (not
  framer-motion per-node) for dot↔compact to avoid 600+ animation instances.

### API surface bloat

**Risk:** Slot proliferation. Every new feature request becomes "add
`F0Graph.NewThing`" and the component family grows unbounded.

**Mitigation:** Hard cap: the 10 slots listed in §2.1 are the v2 surface.
New slots require an RFC with justification. Prefer render-prop or hook
extension points over new slot components. The `F0Graph.Toolbar` and
`F0Graph.Sidebar` slots are intentionally generic containers — they don't
know what's inside them, so new toolbar features don't require new slots.

### Layout engine: tree vs DAG

**Risk:** The built-in tree layout engine doesn't work for DAGs. Dagre has
sibling-reordering behavior that causes layout instability on
expand/collapse. Neither is ideal for both topologies.

**Mitigation:** Ship the built-in tree engine as default (it's excellent
for org-charts — stable, deterministic, no reordering). DAG consumers
provide their own engine. Optionally ship a `createDagreEngine()` helper
as a separate export that wraps dagre with sensible defaults for
workflow-style DAGs. The key insight: layout is pluggable, so we don't
need one engine to rule both topologies.

**Recommendation:** Ship `createDagreEngine()` as a utility export but
don't make it the default. Tree consumers should never pay for dagre.

### The "smuggled workflow editor" failure mode

**Risk:** Over time, workflow-specific logic creeps into F0Graph. Someone
adds `isValidNode()` to the core, then `onNodeValidationChange`, then
`validationErrors` rendering, and eventually F0Graph IS the workflow
editor.

**Mitigation:**

1. **Type boundary:** F0Graph's generic `T` on `F0GraphNode<T>` is opaque.
   F0Graph never reads, validates, or transforms `data`. If a PR touches
   `node.data` inside F0Graph source code, it's a red flag.
2. **No domain callbacks:** F0Graph exposes structural callbacks
   (`onConnect`, `onNodesChange`, `onEdgesChange`, `onNodesDelete`). It
   does NOT expose semantic callbacks (`onTaskComplete`, `onConditionAdd`,
   `onWorkflowSave`). If a proposed callback has a domain noun in its
   name, it belongs in the consumer.
3. **Review gate:** Any PR to F0Graph that adds a prop with a workflow/BPMN
   term (trigger, condition, approval, handler, validation, dirty, save)
   is auto-rejected. The consumer wraps F0Graph and adds domain semantics
   at its own layer.
4. **Litmus test:** "Could a file-system explorer use this feature?" If
   yes, it belongs in F0Graph. If no, it belongs in the consumer.

---

## 6. Resolved Decisions

1. **Tree engine variable node sizes — NO.** Tree layout stays fixed-size.
   Variable per-node dimensions are a DAG-only capability via
   `LayoutConfig.nodeDimensions`. Consumers who need variable-size nodes
   in a hierarchy use the DAG path (with `treeToGraph()` + a DAG layout
   engine). Keeps the tree engine simple and predictable.

2. **Sidebar mode — overlay default + opt-in push.** `<F0Graph.Sidebar>`
   accepts `mode?: "overlay" | "push"` (default `"overlay"`). Push mode
   resizes the canvas viewport and triggers a fit-view. Overlay mode is
   used by both current `DetailPanel` and the workflow editor spike;
   push mode is available for consumers who want it without forcing the
   default.

3. **Edge labels — render-prop on the edge renderer.** Domain-specific
   (workflow conditions, weights, counts), so the consumer's registered
   edge type component renders whatever label it needs. F0Graph does not
   ship a label primitive. If a common pattern emerges across consumers
   later, extract it.

4. **Expander — internal to `F0Graph.Tree`.** Not a public slot. DAG
   consumers don't share tree expand/collapse semantics; they have
   collapsible sub-graphs (different interaction, addressed separately
   if/when needed). Keeps the public API smaller.

5. **Dagre anchor stability — opt-in prop on layout config.** Add
   `stabilizeSiblingOrder?: boolean` (default `false`) to the dagre
   adapter's config. When `true`, the adapter pins node positions after
   the initial layout so subsequent expands/collapses don't reflow
   barycenter. Consumer decides per-graph whether to pay the pinning cost.
   Document the trade-off in the migration guide.

6. **Re-export React Flow utilities — YES.** Re-export
   `applyNodeChanges`, `applyEdgeChanges`, `addEdge`, and `Handle` from
   F0Graph. Keeps the consumer's React Flow dependency indirect, so if
   F0Graph ever swaps rendering engines the consumer import paths stay
   stable. Also slims the consumer's `package.json` surface.

---

## 7. Success Criteria

1. **Org-chart parity:** The `F0Graph.Tree` wrapper renders identical
   output to v1 for the same data, with zero visual regressions.
   Measured by screenshot comparison in storybook.

2. **Workflow editor composability:** The Phase 8 proof-of-concept
   assembles a working editor with 6 node types, connection creation,
   sidebar, and toolbar — using only public F0Graph.\* APIs, no internal
   imports, no monkey-patching.

3. **No domain leakage:** F0Graph source code contains zero references
   to workflow, BPMN, trigger, condition, approval, task, handler,
   validation, dirty, or save. `grep -r` returns 0 hits.

4. **Bundle size:** Tree-only consumer bundle size within 5% of v1.
   Full-editor consumer bundle size within 20% of v1 (editor features
   add weight, but it should be bounded).

5. **Performance:** 500-node tree renders initial layout in < 100ms.
   200-node DAG with editor features renders in < 200ms. Expand/collapse
   of a 50-child subtree completes in < 50ms. Measured by the existing
   perf test harness.

6. **Test coverage:** All v1 test scenarios pass on v2 API. Editor
   primitives (connect, delete, drag) have dedicated tests.

7. **Zero breaking imports for tree consumers** who adopt `F0Graph.Tree`.
   The wrapper accepts the v1 props shape verbatim. Only consumers who
   want DAG/editor features need to learn the new API.

8. **API surface cap:** No more than 10 `F0Graph.*` slot components at
   v2 ship. New slots require an RFC.
