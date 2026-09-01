import { beforeAll, describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"
import { F0GraphNode } from "../components/F0GraphNode"
import { NODE_HEIGHT } from "../constants"

// React Flow derives an endpoint from the far edge of the handle's box, so the
// box sits this much above where the endpoint should land.
const HANDLE_SIZE = 6

const nodes: GraphNode<string>[] = [
  { id: "root", parentId: null, data: "Root", childrenCount: 1 },
  { id: "child", parentId: "root", data: "Child", childrenCount: 0 },
]

const renderNode = (node: GraphNode<string>, ctx: F0GraphNodeRenderContext) => (
  <div ref={ctx.nodeRef} role="treeitem" tabIndex={ctx.tabIndex}>
    {node.data}
  </div>
)

/** Cards only — the expander pill has a leaving handle too, and it is not a node. */
const sourceHandles = (): HTMLElement[] =>
  Array.from(
    document.querySelectorAll<HTMLElement>(
      ".react-flow__node-graphNode .react-flow__handle-bottom"
    )
  )

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe("F0Graph connectors run node-to-node", () => {
  // `reserveTagRow` with no rendered tags is the case that pins the anchor down:
  // the box is a row taller than the card, and React Flow only gives the node
  // element a height while windowing drives the render — so anything measured up
  // from the bottom lands wherever this node's own content happens to end.
  it("anchors the leaving endpoint on the pill's bottom edge", () => {
    zeroRender(<F0Graph nodes={nodes} renderNode={renderNode} reserveTagRow />)

    const handles = sourceHandles()
    expect(handles.length).toBeGreaterThan(0)
    for (const handle of handles) {
      expect(handle.style.top).toBe(`${NODE_HEIGHT - HANDLE_SIZE}px`)
    }
  })

  it("leaves the endpoint on the box when nothing is reserved", () => {
    zeroRender(<F0Graph nodes={nodes} renderNode={renderNode} />)

    for (const handle of sourceHandles()) {
      expect(handle.style.top).toBe("")
      expect(handle.style.bottom).toBe("")
    }
  })

  it("crops whatever runs behind the tag block", () => {
    zeroRender(
      <F0GraphNode title="Root" tags={[{ type: "raw", text: "Engineering" }]} />
    )

    const tagBlock = document.querySelector("[data-no-node-select]")
    expect(tagBlock).not.toBeNull()
    expect(tagBlock).toHaveClass("backdrop-blur-[400px]")
  })
})
