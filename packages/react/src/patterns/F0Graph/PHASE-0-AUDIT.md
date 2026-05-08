# F0Graph v2 — Phase 0 Audit

> **Branch:** `feat/f0-graph-v2` (based on `feat/f0-graph` @ `31a6081`)
> **Date:** 2025-05-08
> **Status:** Audit complete — ready for review

---

## ⚠️ Alerts

1. **Test baseline NOT green.** 2 failures in `F0GraphNode.test.tsx` — class assertions rely on ring-2 appearing on the outer wrapper, but the ring now applies to the inner `<div>`. These are test expectations that drifted from implementation, not actual regressions.
2. **Zero external consumers in the Factorial monorepo.** Neither `factorial/frontend/` nor `factorial/mobile/` import any F0Graph symbol. The only consumers are within the `f0` repo itself (graph-dev playground, stories, tests).
3. **No tests for the most complex behaviors** (anchor-preserving layout, detail panel fly-to, search auto-expand, ClickSpark animation). These are the highest-risk areas in Phase 5.

---

## A. Public API Inventory

### Exports from `index.tsx`

| #   | Symbol                     | Kind      | Source file                | Purpose                                                |
| --- | -------------------------- | --------- | -------------------------- | ------------------------------------------------------ |
| 1   | `F0Graph`                  | Component | `F0Graph.tsx`              | Root tree/graph visualization component                |
| 2   | `F0GraphProps`             | Type      | `F0Graph.tsx`              | Props interface for F0Graph                            |
| 3   | `F0GraphNodeRenderContext` | Type      | `F0Graph.tsx`              | Context object passed to `renderNode` callback         |
| 4   | `GraphNode`                | Type      | `types.ts`                 | Core node data model                                   |
| 5   | `GraphEdge`                | Type      | `types.ts`                 | Core edge data model                                   |
| 6   | `ZoomLevel`                | Type      | `types.ts`                 | `"detail" \| "compact" \| "dot"`                       |
| 7   | `ZoomPreset`               | Type      | `types.ts`                 | Named zoom threshold configs                           |
| 8   | `ZoomThresholds`           | Type      | `types.ts`                 | Custom zoom threshold values                           |
| 9   | `LayoutDirection`          | Type      | `types.ts`                 | `"TB" \| "LR" \| "BT" \| "RL"`                         |
| 10  | `LayoutEngine`             | Type      | `types.ts`                 | Interface for pluggable layout                         |
| 11  | `LayoutResult`             | Type      | `types.ts`                 | Layout engine output shape                             |
| 12  | `PositionedNode`           | Type      | `types.ts`                 | Positioned node in layout result                       |
| 13  | `PositionedEdge`           | Type      | `types.ts`                 | Positioned edge in layout result                       |
| 14  | `F0GraphControls`          | Component | `F0GraphControls/`         | Zoom/pan/fit controls toolbar                          |
| 15  | `F0GraphControlsProps`     | Type      | `F0GraphControls/types.ts` | Props for controls                                     |
| 16  | `InteractionMode`          | Type      | `F0GraphControls/types.ts` | `"select" \| "pan"`                                    |
| 17  | `F0GraphControlLabels`     | Type      | `F0GraphControls/types.ts` | Override labels for controls                           |
| 18  | `F0GraphEdge`              | Component | `F0GraphEdge/`             | Edge renderer with variants                            |
| 19  | `F0GraphEdgeProps`         | Type      | `F0GraphEdge/types.ts`     | Props for edge                                         |
| 20  | `EdgeType`                 | Type      | `F0GraphEdge/types.ts`     | `"smoothstep" \| "straight" \| "bezier"`               |
| 21  | `EdgeVariant`              | Type      | `F0GraphEdge/types.ts`     | `"default" \| "highlighted" \| "dimmed"`               |
| 22  | `edgeTypes`                | Const     | `F0GraphEdge/types.ts`     | Array of edge type literals                            |
| 23  | `edgeVariants`             | Const     | `F0GraphEdge/types.ts`     | Array of edge variant literals                         |
| 24  | `F0GraphExpander`          | Component | `F0GraphExpander/`         | Collapse/expand pill                                   |
| 25  | `F0GraphExpanderProps`     | Type      | `F0GraphExpander/types.ts` | Props for expander                                     |
| 26  | `F0GraphNode`              | Component | `F0GraphNode/`             | Default pill-style node renderer                       |
| 27  | `F0GraphNodeProps`         | Type      | `F0GraphNode/types.ts`     | Props for node                                         |
| 28  | `GraphNodeVariant`         | Type      | `F0GraphNode/types.ts`     | `"detail" \| "compact" \| "dot"`                       |
| 29  | `GraphNodeState`           | Type      | `F0GraphNode/types.ts`     | `"default" \| "selected" \| "highlighted" \| "dimmed"` |
| 30  | `graphNodeVariants`        | Const     | `F0GraphNode/types.ts`     | Array of variant literals                              |
| 31  | `graphNodeStates`          | Const     | `F0GraphNode/types.ts`     | Array of state literals                                |

**Total public exports: 31** (5 components, 14 types, 5 consts, 7 re-exported sub-module items)

### `F0GraphProps<T>` — Full Prop Inventory

| Prop                    | Type                                          | Default    | Consumer Status               |
| ----------------------- | --------------------------------------------- | ---------- | ----------------------------- |
| `nodes`                 | `GraphNode<T>[]`                              | —          | graph-dev, stories, tests     |
| `edges`                 | `GraphEdge[]`                                 | —          | graph-dev (detail panel demo) |
| `rootNodes`             | `GraphNode<T>[]`                              | —          | stories only (lazy mode)      |
| `loadChildren`          | `(nodeId: string) => Promise<GraphNode<T>[]>` | —          | stories only (lazy mode)      |
| `renderNode`            | `(node, ctx) => ReactNode`                    | —          | graph-dev, stories, tests     |
| `renderEdge`            | `(edge, variant) => ReactNode \| null`        | —          | internal-only                 |
| `direction`             | `LayoutDirection`                             | —          | internal-only (controlled)    |
| `defaultDirection`      | `LayoutDirection`                             | `"TB"`     | graph-dev                     |
| `onDirectionChange`     | `(next) => void`                              | —          | internal-only                 |
| `zoomPreset`            | `ZoomPreset`                                  | —          | internal-only                 |
| `zoomThresholds`        | `ZoomThresholds`                              | —          | internal-only                 |
| `defaultZoom`           | `number`                                      | `1`        | graph-dev                     |
| `minZoom`               | `number`                                      | `0.01`     | internal-only                 |
| `maxZoom`               | `number`                                      | `2`        | internal-only                 |
| `expandedNodes`         | `Set<string>`                                 | —          | internal-only (controlled)    |
| `defaultExpandedNodes`  | `Set<string>`                                 | —          | internal-only                 |
| `defaultExpandDepth`    | `number`                                      | —          | graph-dev, stories            |
| `onExpandToggle`        | `(nodeId, expanded) => void`                  | —          | tests                         |
| `onExpandedNodesChange` | `(next) => void`                              | —          | internal-only                 |
| `selectionMode`         | `"single" \| "multi" \| "none"`               | `"single"` | graph-dev                     |
| `selectedNodes`         | `Set<string>`                                 | —          | internal-only (controlled)    |
| `onNodeSelect`          | `(nodeId, selected) => void`                  | —          | tests                         |
| `onSelectedNodesChange` | `(next) => void`                              | —          | internal-only                 |
| `focusedNode`           | `string`                                      | —          | internal-only                 |
| `highlightedNodes`      | `Set<string>`                                 | —          | internal-only                 |
| `fullScreen`            | `boolean`                                     | `true`     | graph-dev                     |
| `nodeWidth`             | `number`                                      | `256`      | internal-only                 |
| `nodeHeight`            | `number`                                      | `56`       | internal-only                 |
| `layoutEngine`          | `LayoutEngine`                                | —          | internal-only                 |
| `searchValue`           | `string`                                      | —          | internal-only                 |
| `onSearchChange`        | `(value) => void`                             | —          | internal-only                 |
| `searchLoading`         | `boolean`                                     | —          | internal-only                 |
| `searchable`            | `Searchable<T>`                               | —          | graph-dev                     |
| `onSearchResultSelect`  | `(id) => void`                                | —          | internal-only                 |
| `detailPanel`           | `(node) => PanelConfig`                       | —          | graph-dev                     |
| `detailPanelAriaLabel`  | `string`                                      | —          | internal-only                 |
| `detailPanelWidth`      | `number`                                      | `384`      | internal-only                 |
| `showControls`          | `boolean`                                     | `false`    | graph-dev                     |
| `showMinimap`           | `boolean`                                     | `false`    | graph-dev                     |
| `controlLabels`         | `object`                                      | —          | internal-only                 |
| `onZoomLevelChange`     | `(level) => void`                             | —          | tests                         |
| `onViewportChange`      | `(viewport) => void`                          | —          | internal-only                 |
| `onVisibleNodesChange`  | `(count) => void`                             | —          | graph-dev                     |

**Total props: 42**

### Public Sub-Components

| Component         | Prop Interface         | Purpose                                                             |
| ----------------- | ---------------------- | ------------------------------------------------------------------- |
| `F0GraphControls` | `F0GraphControlsProps` | Zoom/pan/fit toolbar                                                |
| `F0GraphEdge`     | `F0GraphEdgeProps`     | Edge renderer (smoothstep/straight/bezier, variants)                |
| `F0GraphExpander` | `F0GraphExpanderProps` | Expand/collapse pill button                                         |
| `F0GraphNode`     | `F0GraphNodeProps`     | Default pill-style node with avatar/title/subtitle/metadata/actions |

---

## B. Internal API Inventory

### Internal Hooks (`hooks/`)

| Hook                | Signature                                         | Returns                                                                    | Consumers     |
| ------------------- | ------------------------------------------------- | -------------------------------------------------------------------------- | ------------- |
| `useTreeBuilder<T>` | `(nodes: GraphNode<T>[]) => TreeBuilderResult<T>` | `{ roots, nodeMap, orphans, cycles }`                                      | `F0Graph.tsx` |
| `useGraphZoomLevel` | `(zoomFactor: number, options?) => ZoomLevel`     | Current zoom level with hysteresis                                         | `F0Graph.tsx` |
| `useLayoutEngine`   | `(options?) => LayoutEngine`                      | Built-in tree layout engine                                                | `F0Graph.tsx` |
| `useLazyTree<T>`    | `(options) => UseLazyTreeResult<T>`               | `{ nodes, loadingNodes, errorNodes, expandNode, collapseNode, retryNode }` | `F0Graph.tsx` |

### Internal Contexts (`contexts.ts`)

| Context                      | Value Shape                                                     | Consumers                                                  |
| ---------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------- |
| `F0GraphZoomContext`         | `{ zoomLevel: ZoomLevel, currentZoom: number }`                 | `ReactFlowAdapters.tsx` (node/expander/collapser wrappers) |
| `F0GraphExpandContext`       | `{ expandedNodes: Set<string> }`                                | `ReactFlowAdapters.tsx`                                    |
| `F0GraphSelectionContext`    | `{ selectedNodes: Set<string>, highlightedNodes: Set<string> }` | `ReactFlowAdapters.tsx`                                    |
| `F0GraphActionsContext`      | `{ toggleExpand, selectNode }`                                  | `ReactFlowAdapters.tsx`                                    |
| `F0GraphRenderConfigContext` | `{ renderEdge?: fn }`                                           | `F0GraphEdgeWrapper` in `F0Graph.tsx`                      |

**Exported context hooks (public):** `useF0GraphZoom`, `useF0GraphExpand`, `useF0GraphSelection`, `useF0GraphActions`
**Internal (non-throwing) variants:** `useF0GraphZoomInternal`, `useF0GraphExpandInternal`, `useF0GraphSelectionInternal`, `useF0GraphActionsInternal`, `useF0GraphRenderConfigInternal`

### Internal Helpers in `F0Graph.tsx`

| Helper                                      | Purpose                                                |
| ------------------------------------------- | ------------------------------------------------------ |
| `computeExpandedByDepth(roots, depth)`      | Compute initial expanded set from depth parameter      |
| `deriveEdgesFromTree(roots)`                | Auto-derive edges from tree parent→child relationships |
| `collectVisibleNodes(roots, expandedNodes)` | Get visible nodes respecting expand state              |
| `F0GraphEdgeWrapperInner`                   | React Flow edge adapter supporting custom renderEdge   |
| `F0GraphEdgeWrapper`                        | Memoized version of above                              |
| `F0GraphInner<T>`                           | Inner component needing ReactFlow hooks                |

### Internal Files (`internal/`)

| File                    | Contents                                                                                                                                                                 | Purpose                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `ReactFlowAdapters.tsx` | `F0GraphNodeWrapper`, `F0GraphExpanderWrapper`, `F0GraphCollapserWrapper`, `EXPANDER_Y_OFFSET_BY_ZOOM`, types (`GraphNodeData`, `ExpanderNodeData`, `CollapserNodeData`) | Bridge between F0Graph data model and React Flow node types |
| `ClickSpark.tsx`        | `ClickSpark` component                                                                                                                                                   | Visual click feedback animation (sparks on canvas click)    |

### Types in `types.ts`

| Type              | Used By                                          |
| ----------------- | ------------------------------------------------ |
| `GraphNode<T>`    | Public — everywhere                              |
| `GraphEdge`       | Public — everywhere                              |
| `TreeNode<T>`     | Internal — hooks, F0Graph.tsx, ReactFlowAdapters |
| `ZoomLevel`       | Public — contexts, hooks, node                   |
| `zoomLevels`      | Internal — useGraphZoomLevel                     |
| `ZoomPreset`      | Public                                           |
| `zoomPresets`     | Internal — useGraphZoomLevel                     |
| `ZoomThresholds`  | Public                                           |
| `LayoutDirection` | Public                                           |
| `LayoutEngine`    | Public                                           |
| `LayoutResult`    | Public                                           |
| `PositionedNode`  | Public                                           |
| `PositionedEdge`  | Public                                           |

### Types in Sub-Component `types.ts` Files

| File                       | Types                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| `F0GraphControls/types.ts` | `InteractionMode`, `F0GraphControlLabels`, `F0GraphControlsProps`                                |
| `F0GraphNode/types.ts`     | `GraphNodeVariant`, `graphNodeVariants`, `GraphNodeState`, `graphNodeStates`, `F0GraphNodeProps` |
| `F0GraphEdge/types.ts`     | `EdgeType`, `edgeTypes`, `EdgeVariant`, `edgeVariants`, `F0GraphEdgeProps`                       |
| `F0GraphExpander/types.ts` | `F0GraphExpanderProps`                                                                           |
| `F0GraphSearch/types.ts`   | `Searchable<T>`, `SearchResult`                                                                  |
| `F0GraphDetailPanel`       | `F0GraphDetailPanelProps` (with `DefaultVariantProps \| ResourceVariantProps`)                   |

---

## C. Consumer Inventory

### Summary

| Location                                 | Consumers                  |
| ---------------------------------------- | -------------------------- |
| `f0/packages/graph-dev/`                 | 3 files                    |
| `f0/packages/react/__stories__/`         | 1 file                     |
| `f0/packages/react/__tests__/`           | 2 files                    |
| `f0/packages/react/` sub-component tests | 5 files                    |
| `factorial/frontend/src/`                | **0** (no F0Graph imports) |
| `factorial/mobile/src/`                  | **0** (no F0Graph imports) |

### Detailed Consumer List

#### `packages/graph-dev/src/App.tsx`

- **Imports:** `F0GraphNodeRenderContext` (type), `GraphNode` (type), `F0Graph`, `F0GraphNode`
- **Pattern:** Full-featured tree mode with `searchable`, `detailPanel` (resource variant), `showControls`, `defaultExpandDepth`, `selectionMode`, `onVisibleNodesChange`, `defaultZoom`, `defaultDirection`, `fullScreen`

#### `packages/graph-dev/src/StressTest.tsx`

- **Imports:** `F0GraphNodeRenderContext` (type), `GraphNode` (type), `F0Graph`, `F0GraphNode`
- **Pattern:** Performance stress test (2,000 nodes), `defaultExpandDepth`, `fullScreen`, basic renderNode

#### `packages/graph-dev/src/generateOrgData.ts`

- **Imports:** `GraphNode` (type)
- **Pattern:** Data generator utility

#### `packages/react/src/patterns/F0Graph/__stories__/F0Graph.stories.tsx`

- **Imports:** `F0Graph`, `F0GraphNode`, `GraphNode`, `F0GraphNodeRenderContext`
- **Pattern:** Storybook stories covering basic tree, lazy loading, selection modes, controls

#### `packages/react/src/patterns/F0Graph/__tests__/F0Graph.test.tsx`

- **Imports:** `F0Graph`, `GraphNode`, `ZoomLevel`
- **Pattern:** Unit tests — mount, ReactFlow container, expanded/collapsed nodes, callbacks

#### `packages/react/src/patterns/F0Graph/__tests__/F0Graph.perf.test.tsx`

- **Imports:** `F0Graph`, `GraphNode`
- **Pattern:** Performance benchmarks — mount time, re-render time, expand/collapse, zoom, large trees

### Prop Consumer-Usage Status

| Status                                | Props                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **graph-dev + stories**               | `nodes`, `renderNode`, `defaultDirection`, `defaultZoom`, `defaultExpandDepth`, `selectionMode`, `fullScreen`, `showControls`, `showMinimap`, `searchable`, `detailPanel`, `onVisibleNodesChange`                                                                                                                                                                                                                                                                  |
| **Storybook only**                    | `rootNodes`, `loadChildren`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Tests only**                        | `onExpandToggle`, `onNodeSelect`, `onZoomLevelChange`                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Internal-only (unused externally)** | `edges`, `renderEdge`, `direction`, `onDirectionChange`, `zoomPreset`, `zoomThresholds`, `minZoom`, `maxZoom`, `expandedNodes`, `defaultExpandedNodes`, `onExpandedNodesChange`, `selectedNodes`, `onSelectedNodesChange`, `focusedNode`, `highlightedNodes`, `nodeWidth`, `nodeHeight`, `layoutEngine`, `searchValue`, `onSearchChange`, `searchLoading`, `onSearchResultSelect`, `detailPanelAriaLabel`, `detailPanelWidth`, `controlLabels`, `onViewportChange` |

---

## D. Test Coverage Snapshot

### Test Results (baseline)

```
Test Files  1 failed | 9 passed (10)
     Tests  2 failed | 88 passed (90)
```

**Failures (pre-existing):**

1. `F0GraphNode.test.tsx` — "state variants apply correct classes" (expects `ring-2` on outer wrapper, but ring now applied to inner div)
2. `F0GraphNode.test.tsx` — "dot variant applies correct zoom-level styles" (expects `opacity-40` on wrapper for dimmed, but dimmed class is on inner div)

Both are assertion drift from recent F0GraphNode refactoring — the component behavior is correct, the tests target the wrong element.

### Per-File Test Coverage

| File                                                 | Tests | Coverage Area                                                                                             |
| ---------------------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------- |
| `__tests__/F0Graph.test.tsx`                         | 9     | Mount, ReactFlow container, node visibility, expand/collapse callbacks, selection, zoom level changes     |
| `__tests__/F0Graph.perf.test.tsx`                    | 12    | Mount time benchmarks, re-render, expand/collapse perf, zoom perf, large tree (1000 nodes)                |
| `hooks/__tests__/useTreeBuilder.test.ts`             | 19    | Tree building, root detection, orphan handling, cycles, depth, DAG parentIds, canonical parent resolution |
| `hooks/__tests__/useGraphZoomLevel.test.ts`          | 11    | Zoom level computation, thresholds, presets, hysteresis behavior                                          |
| `hooks/__tests__/useLayoutEngine.test.ts`            | 7     | Layout positioning, direction, expander handling, multi-root, node sizing                                 |
| `F0GraphNode/__tests__/F0GraphNode.test.tsx`         | 13    | Rendering, variants (detail/compact/dot), states, keyboard navigation, expand toggle, ARIA                |
| `F0GraphControls/__tests__/F0GraphControls.test.tsx` | 7     | Toolbar rendering, button callbacks, mode switching, labels                                               |
| `F0GraphEdge/__tests__/F0GraphEdge.test.tsx`         | 2     | Edge rendering, variants                                                                                  |
| `F0GraphExpander/__tests__/F0GraphExpander.test.tsx` | 4     | Rendering, count display, click handler, ARIA                                                             |
| `F0GraphSearch/useGraphSearch.test.ts`               | 6     | Search filtering, scoring, debounce, empty results                                                        |

### Coverage Gaps

- **F0GraphDetailPanel** — NO tests at all
- **F0GraphSearch component** (only the hook is tested, not the component rendering/interaction)
- **ClickSpark** — NO tests
- **ReactFlowAdapters** — NO direct tests (tested implicitly through F0Graph integration tests)
- **Lazy tree mode** — NO integration test (only stories)
- **Edge rendering** — minimal (2 tests)
- **Custom `renderEdge` prop** — NO tests
- **Controlled mode** (`expandedNodes`, `selectedNodes` as props) — NO tests
- **Multi-selection mode** — NO tests
- **`focusedNode` prop** — NO tests
- **Search-to-expand (auto-expand collapsed ancestors)** — NO tests
- **Direction changes at runtime** — NO tests
- **DAG topology rendering** — NO tests (only tree building is tested)

---

## E. Behaviors Not in Any Test

These behaviors work in the running component but have NO test asserting them:

- **Anchor-preserving layout deltas** — When a node is expanded/collapsed, the toggled node stays visually stationary by computing a position delta from the previous layout and applying it as an offset.
- **Zoom-level hysteresis** — The zoom level transition has a configurable margin to prevent flickering at boundaries. Tested in the hook, but NOT tested at the component level (actual viewport→level updates).
- **Search auto-expand-to-result** — When a search result is selected, all collapsed ancestors are expanded before flying to the node.
- **Detail panel center-on-open** — When a detail panel opens, the node is re-centered in the remaining canvas space (offset by panel width).
- **Detail panel fly-to with offset** — The `setCenter` call accounts for `detailPanelWidth / 2 / zoom` to position the node in the visible area.
- **ClickSpark animation** — Canvas-level click sparks rendered as a wrapping component.
- **Expander→child edge rewriting** — Collapsed nodes get their edges rewritten through an expander node. Only visible edges are passed to React Flow.
- **Collapser nodes** — Expanded parents get a hover-visible "collapse children" button below them.
- **Keyboard navigation on nodes** — Enter/Space for click, ArrowRight to expand, ArrowLeft to collapse.
- **Detail panel Escape key** — Pressing Escape closes the detail panel.
- **Pane click deselects all** — Clicking empty canvas clears selection and closes detail panel.
- **FitView on focusedNode** — When `focusedNode` changes, `reactFlow.fitView` is called with that node.
- **Minimap integration** — MiniMap is rendered when `showMinimap=true`.
- **Background dot pattern** — The Background component renders dots.
- **Lazy tree error/retry** — `useLazyTree` has error handling and retry, but no integration test.
- **Edge variant derivation** — Edges touching selected/highlighted nodes get variant styling; untested at component level.

---

## F. Deviations from RFC.md

1. **RFC §3 claims `treeToGraph()` utility exists** — No such named function exists. The equivalent is `useTreeBuilder` + `deriveEdgesFromTree` (internal helpers). The public API expects `nodes` (with `parentId`), not a pre-converted graph.

2. **RFC claims separate context files** — RFC lists individual files `context/zoom.ts`, `context/expand.ts`, etc. These were refactored into a single `contexts.ts` file.

3. **RFC mentions `F0GraphDetailPanel` having `__tests__/`** — No tests exist for the detail panel.

4. **RFC lists `F0GraphSearch` as having `__tests__/`** — Only `useGraphSearch.test.ts` exists (hook test, not component test).

5. **RFC §2 (Architecture) states contexts are in `context/` directory** — They are in `contexts.ts` (singular file at root level).

6. **RFC line counts are outdated** — Source files have been significantly refactored since the RFC was written. Line numbers throughout are unreliable.

7. **RFC does not document `F0GraphRenderConfigContext`** — This 5th context was added for the `renderEdge` prop but is not mentioned in the RFC.

8. **RFC does not document `CollapserWrapper`** — The collapser node type (hover-visible collapse button) is not mentioned in the RFC.

9. **RFC claims `F0GraphNode` has sub-component files** (`components/F0GraphNodeActions.tsx`, etc.) — These were deleted in recent refactoring. The node is now a single file.

---

## G. Phase 1 Readiness Checklist

| #   | Criterion                                            | Status | Evidence                                                                                                                                                 |
| --- | ---------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | All consumers identified                             | ✅     | 3 files in graph-dev, 1 story file, 7 test files. Zero in Factorial frontend/mobile.                                                                     |
| 2   | All public props categorized by usage status         | ✅     | See §A table. 12 props used by graph-dev/stories, 2 storybook-only, 3 tests-only, 25 internal-only.                                                      |
| 3   | Baseline tests green                                 | ❌     | 2 failures in F0GraphNode.test.tsx (assertion drift, not regressions). Must be fixed before Phase 1.                                                     |
| 4   | Behaviors-without-tests list complete                | ✅     | 16 behaviors identified in §E.                                                                                                                           |
| 5   | No undocumented internal symbols imported externally | ✅     | graph-dev imports only public symbols (`F0Graph`, `F0GraphNode`, `GraphNode`, `F0GraphNodeRenderContext`). No internal imports from outside the pattern. |

### Phase 1 Blockers

1. **Fix 2 failing tests** in `F0GraphNode.test.tsx` — update assertions to target the inner div where ring/opacity classes now live. This is a 5-minute fix but must be done before Phase 1 to establish a clean baseline.

### Phase 1 Ready: ❌ (1 blocker)

Once the 2 test assertions are updated, the checklist is fully ✅ and Phase 1 can begin.
