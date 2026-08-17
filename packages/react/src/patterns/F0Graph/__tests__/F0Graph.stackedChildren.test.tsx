import { beforeAll, describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"
import { resolveStackedParents } from "../utils"
import { useLayoutEngine } from "../hooks/useLayoutEngine"
import { zeroRenderHook } from "@/testing/test-utils"
import type { GraphEdge, TreeNode } from "../types"

// ─── Helpers ───────────────────────────────────────────────────

/** A role with three leaf levels under it, plus a plain sibling role. */
function makeStackedNodes(): GraphNode<string>[] {
  return [
    { id: "root", parentId: null, data: "Company", childrenCount: 2 },
    {
      id: "roleA",
      parentId: "root",
      data: "Role A",
      childrenCount: 3,
      stackChildren: true,
    },
    { id: "roleB", parentId: "root", data: "Role B", childrenCount: 0 },
    { id: "lvl1", parentId: "roleA", data: "Junior", childrenCount: 0 },
    { id: "lvl2", parentId: "roleA", data: "Mid", childrenCount: 0 },
    { id: "lvl3", parentId: "roleA", data: "Senior", childrenCount: 0 },
  ]
}

function renderNodeFn(node: GraphNode<string>, ctx: F0GraphNodeRenderContext) {
  return (
    <div
      ref={ctx.nodeRef}
      role="treeitem"
      tabIndex={ctx.tabIndex}
      data-testid={`node-${node.id}`}
      data-stacked={ctx.stacked ? "true" : "false"}
    >
      {node.data}
    </div>
  )
}

function makeTreeNode(
  id: string,
  children: TreeNode<string>[] = [],
  extra: Partial<TreeNode<string>> = {}
): TreeNode<string> {
  return {
    id,
    parentId: null,
    data: id,
    children,
    depth: 0,
    childrenCount: children.length,
    childrenLoaded: true,
    ...extra,
  }
}

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

// ─── resolveStackedParents ────────────────────────────────────

describe("resolveStackedParents", () => {
  it("stacks a group whose children are all leaves", () => {
    const kids = [makeTreeNode("a"), makeTreeNode("b")]
    const parent = makeTreeNode("p", kids, { stackChildren: true })

    const { stackedParentIds, stackedChildIndex } = resolveStackedParents([
      parent,
      ...kids,
    ])

    expect(stackedParentIds).toEqual(new Set(["p"]))
    expect(stackedChildIndex.get("a")).toBe(0)
    expect(stackedChildIndex.get("b")).toBe(1)
  })

  it("falls back to the fan-out when a child can expand", () => {
    // A stacked row is a strip with no lane under it, so a child that can open
    // its own subtree has nowhere to put it — the whole group stays normal.
    const kids = [
      makeTreeNode("a"),
      makeTreeNode("b", [], { childrenCount: 4 }),
    ]
    const parent = makeTreeNode("p", kids, { stackChildren: true })

    const { stackedParentIds, stackedChildIndex } = resolveStackedParents([
      parent,
      ...kids,
    ])

    expect(stackedParentIds.size).toBe(0)
    expect(stackedChildIndex.size).toBe(0)
  })

  it("ignores a stacked parent whose children are not loaded yet", () => {
    const parent = makeTreeNode("p", [], {
      stackChildren: true,
      childrenCount: 3,
    })

    expect(resolveStackedParents([parent]).stackedParentIds.size).toBe(0)
  })

  it("leaves groups without the flag alone", () => {
    const kids = [makeTreeNode("a"), makeTreeNode("b")]
    const parent = makeTreeNode("p", kids)

    expect(resolveStackedParents([parent, ...kids]).stackedParentIds.size).toBe(
      0
    )
  })
})

// ─── Layout ────────────────────────────────────────────────────

describe("useLayoutEngine — stacked children", () => {
  const stackedTree = () => {
    const levels = [
      makeTreeNode("l1", [], { parentId: "roleA", depth: 2 }),
      makeTreeNode("l2", [], { parentId: "roleA", depth: 2 }),
      makeTreeNode("l3", [], { parentId: "roleA", depth: 2 }),
    ]
    const roleA = makeTreeNode("roleA", levels, {
      parentId: "root",
      depth: 1,
      stackChildren: true,
    })
    const roleB = makeTreeNode("roleB", [], { parentId: "root", depth: 1 })
    const root = makeTreeNode("root", [roleA, roleB])
    const edges: GraphEdge[] = [
      { id: "e1", source: "root", target: "roleA" },
      { id: "e2", source: "root", target: "roleB" },
      { id: "e3", source: "roleA", target: "l1" },
      { id: "e4", source: "roleA", target: "l2" },
      { id: "e5", source: "roleA", target: "l3" },
    ]
    return { nodes: [root, roleA, roleB, ...levels], edges }
  }

  const byId = (layout: { nodes: Array<{ id: string }> }, id: string) =>
    layout.nodes.find((n) => n.id === id)!

  it("places the rows in a column sharing the parent's x", () => {
    const { result } = zeroRenderHook(() =>
      useLayoutEngine({ stackedNodeHeight: 40, stackedNodeGap: 8 })
    )
    const { nodes, edges } = stackedTree()

    const layout = result.current.computeLayout(nodes, edges, "TB")

    const roleA = byId(layout, "roleA")
    const [l1, l2, l3] = ["l1", "l2", "l3"].map((id) => byId(layout, id))

    expect(l1.x).toBe(roleA.x)
    expect(l2.x).toBe(roleA.x)
    expect(l3.x).toBe(roleA.x)
    expect(l1.height).toBe(40)
    expect(l2.y - l1.y).toBe(48)
    expect(l3.y - l2.y).toBe(48)
  })

  it("hangs the column half a rank below the parent", () => {
    // A stack reads as part of its parent, so it sits closer than the full
    // `rankSep` lane a normal child rank gets. The expander/collapser is
    // centered in that same shortened lane (see EXPANDER_Y_OFFSET_STACKED).
    const rankSep = 130
    const { result } = zeroRenderHook(() => useLayoutEngine({ rankSep }))
    const { nodes, edges } = stackedTree()

    const layout = result.current.computeLayout(nodes, edges, "TB")

    const roleA = byId(layout, "roleA")
    const l1 = byId(layout, "l1")
    expect(l1.y - (roleA.y + roleA.height)).toBe(rankSep / 2)
  })

  it("reserves no horizontal space for the column", () => {
    const { result } = zeroRenderHook(() => useLayoutEngine())
    const { nodes, edges } = stackedTree()

    const stacked = result.current.computeLayout(nodes, edges, "TB")

    // Same tree without the flag: the three levels fan out and push roleB away.
    const plain = stackedTree()
    plain.nodes[1] = { ...plain.nodes[1], stackChildren: false }
    const fannedOut = result.current.computeLayout(
      plain.nodes,
      plain.edges,
      "TB"
    )

    const gap = (l: typeof stacked) => byId(l, "roleB").x - byId(l, "roleA").x

    expect(gap(stacked)).toBeLessThan(gap(fannedOut))
  })

  it("ignores the flag when the engine is handed an unresolved group", () => {
    // The engine trusts its input: `useGraphRenderModel` resolves the flag
    // first. With no children in the adjacency there is simply nothing to stack.
    const { result } = zeroRenderHook(() => useLayoutEngine())
    const lonely = makeTreeNode("p", [], { stackChildren: true })

    const layout = result.current.computeLayout([lonely], [], "TB")

    expect(layout.nodes).toHaveLength(1)
    expect(layout.nodes[0].height).toBeGreaterThan(40)
  })
})

// ─── Rendering ─────────────────────────────────────────────────

describe("F0Graph — stacked children", () => {
  it("marks the rows as stacked on the render context", async () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph<string>
          nodes={makeStackedNodes()}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set(["root", "roleA"])}
        />
      </div>
    )

    expect(await screen.findByTestId("node-lvl1")).toHaveAttribute(
      "data-stacked",
      "true"
    )
    expect(screen.getByTestId("node-lvl3")).toHaveAttribute(
      "data-stacked",
      "true"
    )
    // The parent of a stack is a normal card, as is an unrelated sibling.
    expect(screen.getByTestId("node-roleA")).toHaveAttribute(
      "data-stacked",
      "false"
    )
    expect(screen.getByTestId("node-roleB")).toHaveAttribute(
      "data-stacked",
      "false"
    )
  })

  it("renders every row of the stack", async () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph<string>
          nodes={makeStackedNodes()}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set(["root", "roleA"])}
        />
      </div>
    )

    expect(await screen.findByTestId("node-lvl1")).toBeInTheDocument()
    expect(screen.getByTestId("node-lvl2")).toBeInTheDocument()
    expect(screen.getByTestId("node-lvl3")).toBeInTheDocument()
  })
})

// ─── Reserved band reaches the row ────────────────────────────

describe("stacked row height", () => {
  it("publishes a custom stackedNodeHeight on the render context", async () => {
    // The layout reserves `stackedNodeHeight` per row; the row has to render at
    // exactly that height or the column drifts out of its band. So the resolved
    // value has to reach `renderNode`, not just the layout engine.
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph<string>
          nodes={makeStackedNodes()}
          stackedNodeHeight={72}
          renderNode={(node, ctx) => (
            <div
              ref={ctx.nodeRef}
              role="treeitem"
              tabIndex={ctx.tabIndex}
              data-testid={`node-${node.id}`}
              data-stacked-height={ctx.stackedHeight ?? "unset"}
            >
              {node.data}
            </div>
          )}
          defaultExpandedNodes={new Set(["root", "roleA"])}
        />
      </div>
    )

    expect(await screen.findByTestId("node-lvl1")).toHaveAttribute(
      "data-stacked-height",
      "72"
    )
  })
})
