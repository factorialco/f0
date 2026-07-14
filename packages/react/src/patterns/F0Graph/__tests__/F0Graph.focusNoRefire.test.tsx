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
import { F0Graph } from "../F0Graph"

// Spy React Flow instance so we can count fly-to (fitView) calls. Only the
// public `useReactFlow` is mocked — the ReactFlow component renders normally.
// (Name must start with `mock` for the hoisted vi.mock factory.)
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
})
afterEach(() => vi.useRealTimers())

const settle = () => act(() => vi.advanceTimersByTime(200))

describe("F0Graph — focusedNode fly-to does not re-fire on layout changes", () => {
  it("does not re-center when focusedNode is unchanged across a collapse", () => {
    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          focusedNode="root"
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    settle()
    const afterEntry = mockReactFlow.fitView.mock.calls.length
    expect(afterEntry).toBeGreaterThanOrEqual(1) // flew once on entry

    // Collapse `root` (layout change) — focusedNode is still "root".
    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          focusedNode="root"
          expandedNodes={new Set()}
        />
      </div>
    )
    settle()

    // No extra fly-to: the effect only reacts to a focusedNode change.
    expect(mockReactFlow.fitView.mock.calls.length).toBe(afterEntry)
  })

  it("applies the initial fit once and does not re-fit on a later collapse", () => {
    // `initialFocusNodeId` set, no `focusedNode`: the graph frames the target
    // once on entry and must NOT re-fit when a subsequent collapse changes the
    // layout (the org-chart "open framed, then never yanked" contract).
    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          initialFocusNodeId="root"
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    settle()
    const afterEntry = mockReactFlow.fitView.mock.calls.length
    expect(afterEntry).toBeGreaterThanOrEqual(1) // framed once on entry

    // Collapse `root` — layout changes, but the focus target never did.
    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          initialFocusNodeId="root"
          expandedNodes={new Set()}
        />
      </div>
    )
    settle()

    // No re-fit: the initial frame is one-shot.
    expect(mockReactFlow.fitView.mock.calls.length).toBe(afterEntry)
  })

  it("still flies when focusedNode changes to a new value", () => {
    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          focusedNode="root"
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    settle()
    const afterEntry = mockReactFlow.fitView.mock.calls.length

    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          focusedNode="a"
          expandedNodes={new Set(["root"])}
        />
      </div>
    )
    settle()

    expect(mockReactFlow.fitView.mock.calls.length).toBe(afterEntry + 1)
    expect(mockReactFlow.fitView).toHaveBeenLastCalledWith(
      expect.objectContaining({ nodes: [{ id: "a" }] })
    )
  })
})
