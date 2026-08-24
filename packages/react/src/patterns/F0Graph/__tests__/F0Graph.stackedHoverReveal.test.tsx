import { beforeAll, describe, expect, it, vi } from "vitest"

import { fireEvent, screen, zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"

/**
 * A stacked column's collapse affordance is revealed by its own narrow CSS hover
 * band AND by the pointer being anywhere inside the column. The second half is
 * resolved geometrically (React Flow renders nodes flat, so no CSS relationship
 * exists between the rows, the group node and the affordance), which means these
 * tests only need to control what a pointer position maps to in flow space.
 *
 * `screenToFlowPosition` is the one thing stubbed, so nothing depends on jsdom
 * reporting a real size for the React Flow pane.
 */
let flowPoint = { x: 0, y: 0 }

vi.mock("@xyflow/react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@xyflow/react")>()
  const useReactFlow = () => ({
    ...actual.useReactFlow(),
    screenToFlowPosition: () => flowPoint,
  })
  return { ...actual, useReactFlow }
})

function makeStackedNodes(): GraphNode<string>[] {
  return [
    { id: "root", parentId: null, data: "Company", childrenCount: 1 },
    {
      id: "roleA",
      parentId: "root",
      data: "Role A",
      childrenCount: 2,
      stackChildren: true,
    },
    { id: "lvl1", parentId: "roleA", data: "Junior", childrenCount: 0 },
    { id: "lvl2", parentId: "roleA", data: "Mid", childrenCount: 0 },
  ]
}

function renderNodeFn(node: GraphNode<string>, ctx: F0GraphNodeRenderContext) {
  return (
    <div
      ref={ctx.nodeRef}
      role="treeitem"
      tabIndex={ctx.tabIndex}
      data-testid={`node-${node.id}`}
    >
      {node.data}
    </div>
  )
}

/** The collapser's reveal flag, exposed as `data-revealed` for exactly this. */
const revealFlags = (): string[] =>
  Array.from(document.querySelectorAll("[data-revealed]")).map(
    (el) => el.getAttribute("data-revealed") ?? ""
  )

const tree = (): HTMLElement => screen.getByRole("tree")

describe("revealing a stacked parent's collapse button from inside its column", () => {
  beforeAll(() => {
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof ResizeObserver
  })

  const renderGraph = (renderNode = renderNodeFn) =>
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph<string>
          nodes={makeStackedNodes()}
          defaultExpandDepth={2}
          renderNode={renderNode}
        />
      </div>
    )

  it("starts hidden, with only the band's CSS hover to reveal it", () => {
    flowPoint = { x: 0, y: 0 }
    renderGraph()

    expect(revealFlags()).toContain("false")
    expect(revealFlags()).not.toContain("true")
  })

  it("reveals it while the pointer resolves inside the column", () => {
    renderGraph()

    // Somewhere well inside the column: which exact part does not matter, since
    // rows, gaps and padding all resolve to the same parent.
    flowPoint = { x: 128, y: 200 }
    fireEvent.pointerMove(tree(), { clientX: 400, clientY: 300 })

    expect(revealFlags()).toContain("true")
  })

  it("hides it again once the pointer resolves outside every column", () => {
    renderGraph()

    flowPoint = { x: 128, y: 200 }
    fireEvent.pointerMove(tree(), { clientX: 400, clientY: 300 })
    expect(revealFlags()).toContain("true")

    flowPoint = { x: 5000, y: 5000 }
    fireEvent.pointerMove(tree(), { clientX: 10, clientY: 10 })

    expect(revealFlags()).not.toContain("true")
  })

  it("hides it when the pointer leaves the canvas entirely", () => {
    renderGraph()

    flowPoint = { x: 128, y: 200 }
    fireEvent.pointerMove(tree(), { clientX: 400, clientY: 300 })
    expect(revealFlags()).toContain("true")

    fireEvent.pointerLeave(tree())

    expect(revealFlags()).not.toContain("true")
  })

  // Not covered here: the handler ignores `pointerType === "touch"` so a finger
  // pan does not reveal collapsers under it. jsdom has no `PointerEvent`, so
  // `pointerType` never reaches the handler and the guard cannot be exercised.

  it("does not re-render a single node when the hovered column changes", () => {
    // The guard on the documented constraint: the hovered id travels through a
    // context that ONLY the collapser reads. Route it through node `data`, or
    // read the context from the node wrapper, and this count moves.
    const renderNode = vi.fn(renderNodeFn)
    renderGraph(renderNode)

    const before = renderNode.mock.calls.length
    flowPoint = { x: 128, y: 200 }
    fireEvent.pointerMove(tree(), { clientX: 400, clientY: 300 })

    expect(revealFlags()).toContain("true")
    expect(renderNode.mock.calls.length).toBe(before)
  })

  it("does no work at all for a pointer that stays inside one column", () => {
    const renderNode = vi.fn(renderNodeFn)
    renderGraph(renderNode)

    flowPoint = { x: 128, y: 200 }
    fireEvent.pointerMove(tree(), { clientX: 400, clientY: 300 })
    const afterFirst = renderNode.mock.calls.length

    // Same resolved column: the ref gate should drop this without a setState.
    flowPoint = { x: 130, y: 260 }
    fireEvent.pointerMove(tree(), { clientX: 401, clientY: 340 })

    expect(renderNode.mock.calls.length).toBe(afterFirst)
  })
})
