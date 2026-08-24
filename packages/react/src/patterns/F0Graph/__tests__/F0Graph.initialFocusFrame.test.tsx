import React, { act } from "react"
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"
import { FOCUS_SETTLE_DELAY_MS } from "../constants"
import { F0Graph } from "../F0Graph"

// The initial `initialFocusNodeId` frame flies to the node the same way a node
// click does — a DEFERRED fly (so React Flow has measured its container by then;
// an immediate one runs against zero dimensions and never takes) that centers via
// the node's layout position (`centerOnNode` → `setCenter`). A whole-graph entry
// (no focus target) uses `fitView` immediately.
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
  { id: "root", parentId: null, data: "Root", childrenCount: 2 },
  { id: "a", parentId: "root", data: "A" },
  { id: "b", parentId: "root", data: "B" },
]

const renderNodeFn = (node: GraphNode<string>) => (
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
  vi.useFakeTimers()
  mockReactFlow.fitView.mockClear()
  mockReactFlow.setCenter.mockClear()
})
afterEach(() => vi.useRealTimers())

const settle = () => act(() => vi.advanceTimersByTime(200))

describe("F0Graph — initial focus frame is measurement-independent", () => {
  it("centers on the initialFocusNodeId from its layout position on entry", () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          initialFocusNodeId="a"
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    settle()
    // Framed via the layout position (works before React Flow measures nodes),
    // not an id-based fitView that would silently miss on the first paint.
    expect(mockReactFlow.setCenter).toHaveBeenCalled()
  })

  it("frames only once — a later collapse does not re-center", () => {
    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          initialFocusNodeId="a"
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    settle()
    const afterEntry = mockReactFlow.setCenter.mock.calls.length
    expect(afterEntry).toBeGreaterThanOrEqual(1)

    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          initialFocusNodeId="a"
          expandedNodes={new Set()}
        />
      </div>
    )
    settle()
    expect(mockReactFlow.setCenter.mock.calls.length).toBe(afterEntry)
  })

  it("still frames when a re-render churns the node set before the settle delay", () => {
    // The first renders after mount change `renderedNodeIds` (two-phase
    // hydration, an entry side panel opening). The deferred entry fly must
    // survive that — an effect cleanup keyed on the node set used to cancel the
    // pending timer while the one-shot guard blocked re-scheduling, so the fly
    // silently never ran.
    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          initialFocusNodeId="a"
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    // A re-render that adds a node lands BEFORE the deferred fly fires.
    act(() => vi.advanceTimersByTime(FOCUS_SETTLE_DELAY_MS - 20))
    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={[...NODES, { id: "c", parentId: "root", data: "C" }]}
          renderNode={renderNodeFn}
          initialFocusNodeId="a"
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    act(() => vi.advanceTimersByTime(FOCUS_SETTLE_DELAY_MS + 20))
    expect(mockReactFlow.setCenter).toHaveBeenCalled()
  })

  it("does a whole-graph fit on entry when there is no focus target", () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    settle()
    expect(mockReactFlow.fitView).toHaveBeenCalled()
    expect(mockReactFlow.setCenter).not.toHaveBeenCalled()
  })
})
