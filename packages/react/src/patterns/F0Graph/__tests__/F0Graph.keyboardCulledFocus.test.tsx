import { act } from "react"
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"
import { F0Graph } from "../F0Graph"

import { graphKeyTarget } from "./helpers"

// Only `useReactFlow` is mocked, so we can observe the camera. The ReactFlow
// component itself renders normally.
const mockReactFlow = {
  fitView: vi.fn(),
  setCenter: vi.fn(),
  getZoom: () => 1,
  getNode: vi.fn(),
  fitBounds: vi.fn(),
  zoomIn: vi.fn(),
  zoomOut: vi.fn(),
  setViewport: vi.fn(),
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
}
vi.mock("@xyflow/react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@xyflow/react")>()
  return { ...actual, useReactFlow: () => mockReactFlow }
})

const NODES: GraphNode<string>[] = [
  { id: "1", parentId: null, data: "Root", childrenCount: 2 },
  { id: "2", parentId: "1", data: "Child A", childrenCount: 0 },
  { id: "3", parentId: "1", data: "Child B", childrenCount: 0 },
]

// Deliberately does NOT attach `ctx.nodeRef`, so no node ever registers itself.
// That reproduces the culled case: every keyboard target is absent from the ref
// map, exactly as it is when React Flow has dropped an off-screen node.
const renderUnregistered = (node: GraphNode<string>) => (
  <span data-testid={`node-${node.id}`}>{node.data}</span>
)

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

beforeEach(() => {
  mockReactFlow.fitView.mockClear()
})

function dispatchKey(element: HTMLElement, key: string) {
  act(() => {
    element.dispatchEvent(
      new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true })
    )
  })
}

describe("F0Graph — keyboard focus on a node culling removed", () => {
  it("still flies to the target when the node is not mounted", () => {
    // Regression: the fly used to sit inside an `if (mounted)` guard, so a target
    // that culling had removed was never flown to, and therefore never mounted,
    // and therefore never focusable. Focus stranded and the roving tabindex
    // pointed at an element that did not exist.
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderUnregistered}
          defaultExpandedNodes={new Set(["1"])}
        />
      </div>
    )

    // Ignore the mount-time framing so only the keypress is counted.
    mockReactFlow.fitView.mockClear()
    dispatchKey(graphKeyTarget(), "ArrowDown")

    expect(mockReactFlow.fitView).toHaveBeenCalledTimes(1)
    expect(mockReactFlow.fitView).toHaveBeenLastCalledWith(
      expect.objectContaining({ nodes: [{ id: "2" }] })
    )
  })

  it("strips the pseudo-node prefix before flying to an expander", () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderUnregistered}
          defaultExpandedNodes={new Set()}
        />
      </div>
    )

    // Root is collapsed, so the DFS order after it is `expander-1`.
    mockReactFlow.fitView.mockClear()
    dispatchKey(graphKeyTarget(), "ArrowDown")

    expect(mockReactFlow.fitView).toHaveBeenLastCalledWith(
      expect.objectContaining({ nodes: [{ id: "1" }] })
    )
  })
})
