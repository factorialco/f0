import React, { act } from "react"
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"
import { F0Graph } from "../F0Graph"

// Spy the props React Flow is rendered with so we can assert whether F0 leaves
// React Flow's OWN `onlyRenderVisibleElements` culling on. The real ReactFlow is
// still rendered (its store/context stay intact) — the spy only records props
// and, on mount, emits a viewport change so `viewportReady` flips true (jsdom's
// 0×0 pane never emits one on its own, and windowing is gated on it).
// (Name must start with `mock` for the hoisted vi.mock factory.)
let mockLastReactFlowProps: Record<string, unknown> | null = null
vi.mock("@xyflow/react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@xyflow/react")>()
  const Spy = (props: Record<string, unknown>) => {
    mockLastReactFlowProps = props
    React.useEffect(() => {
      ;(
        props.onViewportChange as
          | ((vp: { x: number; y: number; zoom: number }) => void)
          | undefined
      )?.({ x: 0, y: 0, zoom: 1 })
    }, [])
    return React.createElement(actual.ReactFlow, props)
  }
  return { ...actual, ReactFlow: Spy }
})

const NODES: GraphNode<string>[] = [
  { id: "root", parentId: null, data: "Root", childrenCount: 2 },
  { id: "a", parentId: "root", data: "A" },
  { id: "b", parentId: "root", data: "B" },
]

const renderNodeFn = (node: GraphNode<string>) => <span>{node.data}</span>

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})
beforeEach(() => {
  mockLastReactFlowProps = null
})

describe("F0Graph — node windowing owns culling (no React Flow double-cull)", () => {
  // Regression: when F0 windows the node array it already hands React Flow just
  // the nodes near the viewport (grown by `nodeWindowPadding`). If React Flow ALSO
  // runs its own `onlyRenderVisibleElements`, it re-culls that padding band —
  // dropping edges whose endpoint sits just outside the exact viewport, so nodes
  // and connecting lines vanish while panning a large/deep tree.
  it("disables React Flow's onlyRenderVisibleElements once windowing is active", () => {
    act(() => {
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={NODES}
            renderNode={renderNodeFn}
            enableNodeWindowing
            expandedNodes={new Set(["root"])}
          />
        </div>
      )
    })
    expect(mockLastReactFlowProps?.onlyRenderVisibleElements).toBe(false)
  })

  it("keeps React Flow's onlyRenderVisibleElements when windowing is off", () => {
    act(() => {
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={NODES}
            renderNode={renderNodeFn}
            expandedNodes={new Set(["root"])}
          />
        </div>
      )
    })
    expect(mockLastReactFlowProps?.onlyRenderVisibleElements).toBe(true)
  })
})
