# Plan: Expose Expand-All / Collapse-All from F0Graph

> Branch: `feat/f0-graph` · Status: planning · Author: builder agent
> Scope: Expose a way for consumers of `F0Graph` to programmatically
> expand all nodes and collapse all nodes.

---

## 1. Current state

### How expand/collapse works today

Expanded state lives in `F0GraphInner` as a controlled / uncontrolled
`Set<string>` of expanded node IDs:

- `internalExpanded` — `useState<Set<string>>` seeded from
  `defaultExpandedNodes` → `defaultExpandDepth` (via `computeExpandedByDepth`)
  → fallback "all roots expanded" (`F0Graph.tsx:650-672`)
- `expandedNodes = controlledExpanded ?? internalExpanded`
- `toggleExpand(nodeId)` (`F0Graph.tsx:1155-1185`) flips a single ID,
  optionally calls `lazyTree.expandNode(nodeId)` in lazy mode, and fires
  `onExpandToggle(id, expanded)` + `onExpandedNodesChange(nextSet)`

Two contexts publish state down to nodes/expanders:

- `F0GraphExpandContext` — `{ expandedNodes }` (read-only view)
- `F0GraphActionsContext` — `{ toggleExpand, selectNode }` (single-node only)

### Public surface today

Consumers can already drive expansion in two ways:

1. **Uncontrolled seed:** `defaultExpandedNodes` or `defaultExpandDepth`
2. **Controlled:** pass `expandedNodes={mySet}` + `onExpandToggle`

That technically lets a consumer "expand all" by setting `expandedNodes`
to the full set of expandable IDs, and "collapse all" by setting it to
`new Set()`. **But it has real gaps:**

- Consumer doesn't have a reliable way to enumerate all expandable IDs
  (every `GraphNode` whose `childrenCount > 0` or that has descendants in
  the flat list). They'd have to traverse `nodes` themselves and
  duplicate the logic that lives inside `useTreeBuilder`.
- In **lazy mode** (`rootNodes` + `loadChildren`), expanding all is a
  multi-step async cascade. The consumer cannot do this — only F0Graph
  has the `lazyTree.expandNode(id)` plumbing.
- "Collapse all" via controlled mode forces the consumer into permanent
  controlled mode just to fire one action, which is a poor ergonomics
  story (they then own the whole expansion lifecycle).
- `F0GraphActionsContext.toggleExpand` is the only public action API and
  it's per-node.

### Conventions found in the codebase

- F0 prefers **controlled / uncontrolled props with `useControllableState`**
  (`packages/react/AGENTS.md:130`, used in `OneFilterPicker`, `Select`).
- F0Graph itself does **not** use `forwardRef` / `useImperativeHandle` —
  navigation like `focusedNode` is exposed as a **prop** that is
  imperatively re-applied (see `F0GraphProps.focusedNode`).
- Existing controls use named callbacks on `F0GraphControls`
  (`onZoomIn`, `onFitView`, `onFocusUser`) wired up by `F0GraphInner`.

---

## 2. Recommendation

Expose **two complementary surfaces**:

### A. New imperative actions in `F0GraphActionsContext` + new props

Add `expandAll` and `collapseAll` to the actions context, plus matching
prop callbacks so consumers using the standard `<F0Graph />` element can
trigger them without writing a custom node renderer.

**Why this approach over `useImperativeHandle` / `ref`:**

- Matches the rest of F0Graph's API surface (props + context, no refs).
- Works in both controlled and uncontrolled mode without forcing the
  consumer to manage the full `Set<string>`.
- The context already exists and is the right home for "actions on the
  graph" — `toggleExpand` and `selectNode` already live there. Adding
  `expandAll` / `collapseAll` is a natural extension, not a new pattern.
- A custom node renderer or `canvasActions` button can call them via
  `useF0GraphActions()` with no extra wiring.

**Why also expose them as props:**

- The most common consumer ask is "render a button outside the graph
  that expands everything". Without a prop, they'd have to wrap their UI
  in the graph subtree (or lift state). Mirroring the
  `focusedNode`-style pattern keeps the door open for parent-driven
  control.

### B. Optional built-in toolbar buttons

Add `expandAll` / `collapseAll` icon buttons to `F0GraphControls` (the
visible toolbar shown when `showControls` is set), behind feature flags
on `controlLabels`. Off by default to keep the existing controls layout
stable; opt-in via a new `showExpandCollapseAll?: boolean` prop on
`F0Graph` (or always-on if product agrees — see open question 1).

---

## 3. Proposed API

```ts
// F0GraphProps additions
interface F0GraphProps<T = unknown> {
  // ... existing props ...

  /**
   * When true, F0Graph renders Expand-all / Collapse-all buttons inside
   * the controls toolbar (requires `showControls`). Defaults to false.
   */
  showExpandCollapseAll?: boolean
}

// F0GraphActionsContext additions
interface F0GraphActionsContextValue {
  toggleExpand: (nodeId: string) => void
  selectNode: (nodeId: string) => void
  /**
   * Expand every node that has (or can have) children.
   *
   * Full-tree mode: synchronous — sets expanded to all IDs with
   * `childrenCount > 0` (or descendants in the flat list).
   *
   * Lazy mode: returns a Promise that resolves after every reachable
   * subtree has been loaded and expanded. Loads are issued breadth-first
   * via `loadChildren`. Errors from `loadChildren` are swallowed per
   * node (consistent with `useLazyTree.expandNode`) and the cascade
   * continues; the returned Promise resolves once the queue drains.
   */
  expandAll: () => Promise<void>
  /** Collapse every expanded node. Synchronous. */
  collapseAll: () => void
}

// New labels for the toolbar buttons
interface F0GraphProps<T> {
  controlLabels?: {
    // ... existing labels ...
    expandAll?: string
    collapseAll?: string
  }
}
```

**Consumer usage examples:**

```tsx
// 1. Custom toolbar via canvasActions / renderNode
function MyGraph() {
  return (
    <F0Graph
      nodes={nodes}
      renderNode={(node, ctx) => <F0GraphNode {...ctx} ... />}
      canvasActions={<MyExpandButtons />}
    />
  )
}

function MyExpandButtons() {
  const { expandAll, collapseAll } = useF0GraphActions()
  return (
    <>
      <F0Button onClick={() => void expandAll()} label="Expand all" />
      <F0Button onClick={collapseAll} label="Collapse all" />
    </>
  )
}

// 2. Built-in toolbar buttons
<F0Graph
  nodes={nodes}
  showControls
  showExpandCollapseAll
  renderNode={...}
/>
```

---

## 4. Implementation plan

### File-by-file changes

**`F0Graph.tsx`** (most of the work)

1. Add helper `collectExpandableNodeIds(roots: TreeNode<T>[]): Set<string>`
   alongside `computeExpandedByDepth` — walks the tree and includes any
   node with `children.length > 0`.
2. Add `expandAll = useCallback(async () => { ... })`:
   - Full-tree mode: build `next = collectExpandableNodeIds(roots)`, call
     `setInternalExpanded(next)` if uncontrolled, fire
     `onExpandedNodesChange(next)`. Do **not** fire `onExpandToggle` per
     node — see open question 2.
   - Lazy mode: BFS the currently-known tree, for each node with
     `childrenCount > 0 && !childrenLoaded` await
     `lazyTree.expandNode(id)`, then add the newly loaded children to
     the queue. Coalesce state writes (one `setInternalExpanded` per
     batch) to avoid thrashing. Resolve when queue is empty.
3. Add `collapseAll = useCallback(() => { ... })`:
   - `setInternalExpanded(new Set())` (if uncontrolled) and
     `onExpandedNodesChange(new Set())`.
4. Extend `actionsContextValue` memo to include the two new actions.
5. Destructure new prop `showExpandCollapseAll` and pass it to
   `F0GraphControls`.

**`contexts.ts`**

- Extend `F0GraphActionsContextValue` interface with `expandAll`,
  `collapseAll`.

**`F0GraphControls/types.ts` + `F0GraphControls/F0GraphControls.tsx`**

- Add optional props `onExpandAll?: () => void`, `onCollapseAll?: () => void`,
  `expandAllLabel?: string`, `collapseAllLabel?: string`.
- Render two new `F0Button`s above the existing divider when both
  callbacks are provided. Pick icons from `@/icons/app` — likely
  `ExpandAll` / `CollapseAll` if they exist; fall back to `Add` /
  `Minus`-style stack icons (verify in icon set; see open question 3).

**`index.tsx`**

- No changes — `useF0GraphActions` is already exported via `contexts.ts`?
  → check: it's not currently re-exported. Decide whether to export
  `useF0GraphActions` publicly so consumers can call `expandAll` /
  `collapseAll` from a `canvasActions` button. **Recommend exporting it.**

**`__stories__/F0Graph.stories.tsx`**

- Add a `ExpandCollapseAll` story showing both the built-in toolbar and
  a custom `canvasActions` consumer pattern.
- Add a `ExpandCollapseAllLazy` story demonstrating the async cascade
  in lazy mode (with a slow `loadChildren` to make the loading state
  visible).

**`__stories__/F0Graph.mdx`**

- Update the "Expand/collapse" props table with `showExpandCollapseAll`.
- Add a section under "Patterns" (or wherever interaction docs live)
  describing the new actions, the controlled-mode caveat (consumer must
  derive the new set themselves and pass it back via `expandedNodes`),
  and the lazy-mode async behaviour.

**i18n**

- Add `graph.controls.expandAll` and `graph.controls.collapseAll` to
  the `useI18n()` source the controls bar pulls from. Look up the
  existing keys in the i18n provider (e.g. `graph.controls.fitToView`)
  and add siblings.

### Tests to add

All under `packages/react/src/patterns/internal/F0Graph/__tests__/`:

- `F0Graph.expandCollapseAll.test.tsx`:
  - Full-tree mode, uncontrolled: `expandAll()` populates the expanded
    set with every parent ID; `collapseAll()` empties it; visible-node
    count matches expectations.
  - Full-tree mode, controlled: actions fire `onExpandedNodesChange`
    with the correct set but do **not** mutate internal state (consumer
    must round-trip).
  - `onExpandToggle` behaviour for bulk actions — assert the documented
    contract (see open question 2).
- Extend `F0Graph.lazyTree.test.tsx` (or add `F0Graph.lazyExpandAll.test.tsx`):
  - `expandAll()` cascades `loadChildren` calls breadth-first.
  - Promise resolves only after every load completes.
  - `loadChildren` rejection on one branch does not abort the cascade.
  - `collapseAll()` after a partial expand-all leaves the lazy cache
    intact (only expand state changes).
- `F0GraphControls/__tests__/F0GraphControls.test.tsx`:
  - Buttons render only when both `onExpandAll` and `onCollapseAll`
    are provided.
  - Click handlers fire; ARIA labels resolved from i18n / overrides.

### Existing tests to verify

- `F0Graph.test.tsx`, `F0Graph.a11y.test.tsx`,
  `F0Graph.searchSelectionTimer.test.tsx`,
  `F0Graph.deferred.test.tsx`,
  `F0Graph.multiroot.test.tsx`,
  `F0Graph.integration.test.tsx`,
  `F0Graph.perf.test.tsx`,
  `F0Graph.lazyTree.test.tsx` — should remain green; the new actions
  are additive.

### Changeset

Add a `.changeset/f0graph-expand-collapse-all.md` with `minor` bump for
`@factorialco/f0-react` describing the new props, context fields, and
toolbar buttons.

---

## 5. Risks & open questions

1. **Built-in toolbar buttons — opt-in or always-on?** Adding two more
   buttons to the controls rail changes density. Defaulting to off
   (`showExpandCollapseAll`) is safe; promoting to always-on requires a
   product/design call. Recommend opt-in initially.
2. **`onExpandToggle` semantics for bulk actions.** The per-node
   callback is meant for "user toggled this single node". Firing it
   N times during `expandAll` is noisy and could break consumers
   tracking analytics. Recommend: bulk actions fire **only**
   `onExpandedNodesChange(nextSet)` and skip per-node `onExpandToggle`,
   document this clearly. Search-driven ancestor expansion at
   `F0Graph.tsx:1620-1625` does fire per-ancestor `onExpandToggle` —
   we may want to revisit that for consistency, but it's out of scope.
3. **Icon availability.** Need to confirm `@/icons/app` ships an
   "expand all" / "collapse all" pair; if not, propose adding them in
   `f0/icons/` or compose from existing primitives.
4. **Lazy expand-all cost.** A user clicking "Expand all" on a large
   org chart could fire hundreds of `loadChildren` calls. Document the
   risk; consider adding a `expandAllMaxNodes` safety prop in a
   follow-up if real consumers hit it. Out of scope for this PR.
5. **DAG topologies.** `expandAll` operates on the tree projection
   (`roots` from `useTreeBuilder`), so a DAG node reached via multiple
   parents is expanded once. Should be fine, but worth a test.
6. **`useControllable` migration.** AGENTS.md prefers
   `useControllableState`. The current expand state is hand-rolled.
   Migrating is tempting but **not required** for this change and would
   expand the diff. Keep the hand-rolled pattern; open a follow-up
   ticket if we want consistency.
7. **Public export of `useF0GraphActions`.** Currently the hook lives
   in `contexts.ts` but isn't re-exported from `index.tsx`. The
   `canvasActions` consumer pattern requires it. Recommend exporting.
   Verify no naming collision with `useF0GraphFocus` (already exported).

---

## 6. Out of scope

- Animating the bulk transition (likely too expensive on large graphs;
  the existing `LARGE_GRAPH_SNAP_THRESHOLD` already snaps at 700+).
- "Expand to depth N" beyond what `defaultExpandDepth` already covers.
- "Expand subtree from node X" — would be a separate
  `expandSubtree(nodeId)` action; defer to a follow-up if asked.
- Persisting expand-all state across sessions (consumer concern).
