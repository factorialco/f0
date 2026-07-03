import React from "react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type { GraphNode, ZoomLevel } from "../types"

import { F0Graph } from "../F0Graph"

// React Flow needs ResizeObserver; jsdom doesn't provide it. Note that jsdom
// also reports a 0×0 pane, so viewport-driven windowing stays inactive here —
// these tests assert the feature is wired and non-breaking, while the spatial
// math itself is covered by the pure helpers in utils.test.ts.
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

// A wide, shallow tree — the "broken orgchart" shape the ticket targets
// (thousands of roots with no manager).
function makeWideTree(rootCount: number): GraphNode<string>[] {
  const nodes: GraphNode<string>[] = []
  for (let i = 0; i < rootCount; i++) {
    nodes.push({ id: `root-${i}`, parentId: null, data: `Root ${i}` })
  }
  return nodes
}

const renderNodeFn = (
  node: GraphNode<string>,
  _ctx: { zoomLevel: ZoomLevel }
) => <span data-testid={`node-${node.id}`}>{node.data}</span>

describe("F0Graph — node windowing (A1)", () => {
  it("mounts a large tree with windowing enabled without error", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeWideTree(500)}
            renderNode={renderNodeFn}
            enableNodeWindowing
          />
        </div>
      )
    ).not.toThrow()
  })

  it("reports rendered node count via onRenderedNodesChange", () => {
    const onRenderedNodesChange = vi.fn()
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeWideTree(50)}
          renderNode={renderNodeFn}
          enableNodeWindowing
          onRenderedNodesChange={onRenderedNodesChange}
        />
      </div>
    )
    expect(onRenderedNodesChange).toHaveBeenCalled()
    const last = onRenderedNodesChange.mock.calls.at(-1)?.[0]
    expect(typeof last).toBe("number")
    expect(last).toBeGreaterThan(0)
  })

  it("never renders more than the visible node count", () => {
    const onVisibleNodesChange = vi.fn()
    const onRenderedNodesChange = vi.fn()
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeWideTree(30)}
          renderNode={renderNodeFn}
          enableNodeWindowing
          onVisibleNodesChange={onVisibleNodesChange}
          onRenderedNodesChange={onRenderedNodesChange}
        />
      </div>
    )
    const visible = onVisibleNodesChange.mock.calls.at(-1)?.[0]
    const rendered = onRenderedNodesChange.mock.calls.at(-1)?.[0]
    expect(visible).toBe(30)
    // Windowing only ever removes nodes — it can't fabricate them.
    expect(rendered).toBeLessThanOrEqual(visible)
    expect(rendered).toBeGreaterThan(0)
  })

  it("still renders the controls bar with windowing on", () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeWideTree(20)}
          renderNode={renderNodeFn}
          enableNodeWindowing
          showControls
        />
      </div>
    )
    expect(
      screen.getByRole("toolbar", { name: "Graph navigation" })
    ).toBeTruthy()
  })

  it("honors a custom nodeWindowPadding without error", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeWideTree(40)}
            renderNode={renderNodeFn}
            enableNodeWindowing
            nodeWindowPadding={1200}
          />
        </div>
      )
    ).not.toThrow()
  })

  it("leaves behavior unchanged when windowing is off (default)", () => {
    const onRenderedNodesChange = vi.fn()
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeWideTree(25)}
          renderNode={renderNodeFn}
          onRenderedNodesChange={onRenderedNodesChange}
        />
      </div>
    )
    // Callback still fires (equals visible count) even without windowing.
    expect(onRenderedNodesChange.mock.calls.at(-1)?.[0]).toBe(25)
  })
})
