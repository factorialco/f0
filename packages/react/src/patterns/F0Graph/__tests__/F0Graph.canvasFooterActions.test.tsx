import { beforeAll, describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"

// ─── Test helpers ──────────────────────────────────────────────

function renderNodeFn(node: GraphNode<string>, ctx: F0GraphNodeRenderContext) {
  return (
    <div
      ref={ctx.nodeRef}
      role="treeitem"
      tabIndex={ctx.tabIndex}
      data-testid={`node-${node.id}`}
      onClick={ctx.onClick}
    >
      {node.data}
    </div>
  )
}

const NODES: GraphNode<string>[] = [
  { id: "1", parentId: null, data: "Root" },
  { id: "1.1", parentId: "1", data: "Child A" },
]

// React Flow needs ResizeObserver in jsdom.
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe("F0Graph canvasFooterActions", () => {
  it("renders the footer slot content when provided", () => {
    const { getByTestId } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
          canvasFooterActions={
            <button data-testid="footer-action">Give feedback</button>
          }
        />
      </div>
    )

    expect(getByTestId("footer-action")).toBeInTheDocument()
  })

  it("renders nothing extra when the footer slot is omitted", () => {
    const { queryByTestId } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
        />
      </div>
    )

    expect(queryByTestId("footer-action")).not.toBeInTheDocument()
  })
})
