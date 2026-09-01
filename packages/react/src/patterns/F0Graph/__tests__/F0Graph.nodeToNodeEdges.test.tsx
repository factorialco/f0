import { beforeAll, describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"
import { F0GraphNode } from "../components/F0GraphNode"

/**
 * A node's layout box carries the tag reservation; the node paints only as tall
 * as its pill. A connector has to leave the pill, so the endpoint sits on the
 * painted edge and the metadata crops the line with its own backdrop blur.
 */

// `reserveTagRow` with no declared columns reserves one line: the block's gap to
// the pill plus one chip row (see TAG_BLOCK_GAP / TAG_LINE_HEIGHT).
const ONE_ROW_RESERVATION = 32

const nodes: GraphNode<string>[] = [
  { id: "root", parentId: null, data: "Root", childrenCount: 1 },
  { id: "child", parentId: "root", data: "Child", childrenCount: 0 },
]

const renderNode = (node: GraphNode<string>, ctx: F0GraphNodeRenderContext) => (
  <div ref={ctx.nodeRef} role="treeitem" tabIndex={ctx.tabIndex}>
    {node.data}
  </div>
)

/**
 * The leaving handles of the node cards only — the expander pill has one too,
 * and it sits in the lane rather than on a node.
 */
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
  it("anchors the leaving endpoint on the pill, not below the reserved tag band", () => {
    zeroRender(<F0Graph nodes={nodes} renderNode={renderNode} reserveTagRow />)

    const handles = sourceHandles()
    expect(handles.length).toBeGreaterThan(0)
    for (const handle of handles) {
      expect(handle.style.bottom).toBe(`${ONE_ROW_RESERVATION}px`)
    }
  })

  it("leaves the endpoint on the box when nothing is reserved", () => {
    zeroRender(<F0Graph nodes={nodes} renderNode={renderNode} />)

    for (const handle of sourceHandles()) {
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
