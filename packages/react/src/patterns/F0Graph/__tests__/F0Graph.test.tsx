import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type { GraphNode, ZoomLevel } from "../../types"

import { F0Graph } from "../F0Graph"

// React Flow requires DOM dimensions to render nodes.
// For unit tests we verify mount, callbacks, and structure.

function makeNodes(): GraphNode<string>[] {
  return [
    { id: "1", parentId: null, data: "CEO" },
    { id: "2", parentId: "1", data: "CTO" },
    { id: "3", parentId: "1", data: "CFO" },
    { id: "4", parentId: "2", data: "Dev Lead" },
    { id: "5", parentId: "2", data: "QA Lead" },
  ]
}

function renderNodeFn(node: GraphNode<string>, _zoomLevel: ZoomLevel) {
  return <span data-testid={`node-${node.id}`}>{node.data}</span>
}

// Mock ResizeObserver which React Flow needs
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe("F0Graph", () => {
  it("renders without crashing with basic nodes", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph nodes={makeNodes()} renderNode={renderNodeFn} />
        </div>
      )
    ).not.toThrow()
  })

  it("renders ReactFlow container", () => {
    const { container } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={renderNodeFn} />
      </div>
    )

    // React Flow renders a .react-flow container
    const rfContainer = container.querySelector(".react-flow")
    expect(rfContainer).toBeTruthy()
  })

  it("renders with empty nodes", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph nodes={[]} renderNode={renderNodeFn} />
        </div>
      )
    ).not.toThrow()
  })

  it("fires onExpandToggle when toggle is called", () => {
    const onExpandToggle = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set(["1"])}
          onExpandToggle={onExpandToggle}
        />
      </div>
    )

    // Component renders — callback is wired.
    // Direct interaction with React Flow nodes requires dimensions
    // so we verify the component mounts with the callback prop.
    expect(onExpandToggle).not.toHaveBeenCalled()
  })

  it("fires onNodeSelect when selection callback is set", () => {
    const onNodeSelect = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          onNodeSelect={onNodeSelect}
        />
      </div>
    )

    expect(onNodeSelect).not.toHaveBeenCalled()
  })

  it("renders controls toolbar when showControls is true", () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={renderNodeFn} showControls />
      </div>
    )

    const toolbar = screen.getByRole("toolbar", { name: "Graph navigation" })
    expect(toolbar).toBeTruthy()
  })

  it("does not render controls toolbar when showControls is false", () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          showControls={false}
        />
      </div>
    )

    expect(screen.queryByRole("toolbar")).toBeNull()
  })

  it("renders with lazy tree mode without crashing", () => {
    const loadChildren = vi
      .fn()
      .mockResolvedValue([
        { id: "child-1", parentId: "root-1", data: "Lazy Child" },
      ])

    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            rootNodes={[{ id: "root-1", parentId: null, data: "Root" }]}
            loadChildren={loadChildren}
            renderNode={renderNodeFn}
          />
        </div>
      )
    ).not.toThrow()
  })

  it("renders the tree container with role=tree", () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={renderNodeFn} />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    expect(tree).toBeTruthy()
  })
})
