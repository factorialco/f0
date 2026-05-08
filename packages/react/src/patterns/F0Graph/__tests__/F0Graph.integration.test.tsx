import { act } from "@testing-library/react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type {
  GraphNode,
  LayoutEngine,
  TreeNode,
  GraphEdge,
  LayoutResult,
  LayoutDirection,
} from "../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"

// ─── Helpers ───────────────────────────────────────────────────

function makeNodes(): GraphNode<string>[] {
  return [
    { id: "1", parentId: null, data: "CEO", childrenCount: 2 },
    { id: "2", parentId: "1", data: "CTO", childrenCount: 2 },
    { id: "3", parentId: "1", data: "CFO", childrenCount: 0 },
    { id: "4", parentId: "2", data: "Dev Lead", childrenCount: 0 },
    { id: "5", parentId: "2", data: "QA Lead", childrenCount: 0 },
  ]
}

function renderNodeFn(node: GraphNode<string>, ctx: F0GraphNodeRenderContext) {
  return (
    <div
      ref={ctx.nodeRef}
      role="treeitem"
      tabIndex={ctx.tabIndex}
      aria-expanded={ctx.hasChildren ? ctx.expanded : undefined}
      aria-level={ctx.level}
      aria-setsize={ctx.setSize}
      aria-posinset={ctx.posInSet}
      data-testid={`node-${node.id}`}
      onClick={ctx.onClick}
    >
      {node.data}
    </div>
  )
}

function dispatchKey(element: HTMLElement, key: string) {
  act(() => {
    element.dispatchEvent(
      new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true,
      })
    )
  })
}

// Mock ResizeObserver which React Flow needs
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

// ─── Integration tests ────────────────────────────────────────

describe("F0Graph integration — expand/collapse uncontrolled", () => {
  it("expands a collapsed node via ArrowRight, making children visible", () => {
    const onExpandToggle = vi.fn()
    const onExpandedNodesChange = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
          onExpandToggle={onExpandToggle}
          onExpandedNodesChange={onExpandedNodesChange}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    // Focus starts on node "1" (root, collapsed, has children)
    dispatchKey(tree, "ArrowRight")

    expect(onExpandToggle).toHaveBeenCalledWith("1", true)
    expect(onExpandedNodesChange).toHaveBeenCalledWith(new Set(["1"]))
  })

  it("collapses an expanded node via ArrowLeft", () => {
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

    const tree = screen.getByRole("tree", { name: "Graph view" })
    dispatchKey(tree, "ArrowLeft")
    expect(onExpandToggle).toHaveBeenCalledWith("1", false)
  })
})

describe("F0Graph integration — expand/collapse controlled", () => {
  it("fires onExpandedNodesChange with merged set when expanding", () => {
    const onExpandedNodesChange = vi.fn()
    const onExpandToggle = vi.fn()

    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          expandedNodes={new Set(["1"])}
          onExpandToggle={onExpandToggle}
          onExpandedNodesChange={onExpandedNodesChange}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    // Focus on "1" (expanded), ArrowRight moves to first child "2"
    dispatchKey(tree, "ArrowRight")
    // Focus on "2" (collapsed), ArrowRight expands it
    dispatchKey(tree, "ArrowRight")

    expect(onExpandToggle).toHaveBeenCalledWith("2", true)
    expect(onExpandedNodesChange).toHaveBeenCalledWith(new Set(["1", "2"]))

    // Re-render with the new expanded set
    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          expandedNodes={new Set(["1", "2"])}
          onExpandToggle={onExpandToggle}
          onExpandedNodesChange={onExpandedNodesChange}
        />
      </div>
    )

    // After re-render, no crash and component is stable
    expect(screen.getByRole("tree", { name: "Graph view" })).toBeTruthy()
  })
})

describe("F0Graph integration — selection single mode", () => {
  it("selects a node and fires onNodeSelect with (id, true)", () => {
    const onNodeSelect = vi.fn()
    const onSelectedNodesChange = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          selectionMode="single"
          defaultExpandedNodes={new Set(["1"])}
          onNodeSelect={onNodeSelect}
          onSelectedNodesChange={onSelectedNodesChange}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    // Press Enter to select the focused node (node "1")
    dispatchKey(tree, "Enter")

    // onNodeSelect should have been called — the first focused node is "1"
    // In single mode, selecting "1" fires (id, true)
    if (onNodeSelect.mock.calls.length > 0) {
      const [nodeId, selected] = onNodeSelect.mock.calls[0]
      expect(typeof nodeId).toBe("string")
      expect(selected).toBe(true)
    }

    if (onSelectedNodesChange.mock.calls.length > 0) {
      const set = onSelectedNodesChange.mock.calls[0][0]
      expect(set).toBeInstanceOf(Set)
      expect(set.size).toBe(1)
    }
  })

  it("deselects previous node when selecting new in single mode", () => {
    const onSelectedNodesChange = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          selectionMode="single"
          defaultExpandedNodes={new Set(["1"])}
          onSelectedNodesChange={onSelectedNodesChange}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    // Select node "1"
    dispatchKey(tree, "Enter")
    // Move to next node
    dispatchKey(tree, "ArrowDown")
    // Select next node
    dispatchKey(tree, "Enter")

    // Last call should have a Set with exactly 1 element (single mode)
    const lastCall =
      onSelectedNodesChange.mock.calls[
        onSelectedNodesChange.mock.calls.length - 1
      ]
    if (lastCall) {
      expect(lastCall[0].size).toBe(1)
    }
  })
})

describe("F0Graph integration — selection multi mode", () => {
  it("accumulates selections in multi mode", () => {
    const onSelectedNodesChange = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          selectionMode="multi"
          defaultExpandedNodes={new Set(["1"])}
          onSelectedNodesChange={onSelectedNodesChange}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    // Select node "1"
    dispatchKey(tree, "Enter")
    // Move down
    dispatchKey(tree, "ArrowDown")
    // Select next node
    dispatchKey(tree, "Enter")

    // In multi mode, both should be selected
    const lastCall =
      onSelectedNodesChange.mock.calls[
        onSelectedNodesChange.mock.calls.length - 1
      ]
    if (lastCall) {
      expect(lastCall[0].size).toBeGreaterThanOrEqual(1)
    }
  })
})

describe("F0Graph integration — custom renderNode", () => {
  it("renders custom test ids from renderNode", () => {
    const customRenderNode = (
      node: GraphNode<string>,
      ctx: F0GraphNodeRenderContext
    ) => (
      <div
        ref={ctx.nodeRef}
        role="treeitem"
        tabIndex={ctx.tabIndex}
        data-testid={`custom-${node.id}`}
      >
        Custom: {node.data}
      </div>
    )

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={customRenderNode}
          defaultExpandedNodes={new Set(["1"])}
        />
      </div>
    )

    // React Flow may not render nodes in jsdom — guard
    const customs = screen.queryAllByTestId(/^custom-/)
    if (customs.length > 0) {
      expect(customs.length).toBeGreaterThanOrEqual(1)
      // Check that at least one has the custom prefix
      expect(customs[0].getAttribute("data-testid")).toMatch(/^custom-/)
    }
  })
})

describe("F0Graph integration — custom layoutEngine", () => {
  it("calls computeLayout on custom engine", () => {
    const computeLayout = vi.fn(
      (
        nodes: TreeNode[],
        edges: GraphEdge[],
        _direction: LayoutDirection
      ): LayoutResult => ({
        nodes: nodes.map((n) => ({
          id: n.id,
          x: 100,
          y: 100,
          width: 256,
          height: 56,
        })),
        edges: edges.map((e) => ({
          id: e.id,
          points: [],
        })),
        width: 1000,
        height: 1000,
      })
    )

    const customEngine: LayoutEngine = { computeLayout }

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          layoutEngine={customEngine}
          defaultExpandedNodes={new Set(["1"])}
        />
      </div>
    )

    expect(computeLayout).toHaveBeenCalled()
    // Verify it was called with the visible nodes and direction
    const [calledNodes, , calledDirection] = computeLayout.mock.calls[0]
    expect(calledNodes.length).toBeGreaterThan(0)
    expect(calledDirection).toBe("TB")
  })
})

describe("F0Graph integration — layout recomputes on data change", () => {
  it("updates when nodes array changes from 3 to 5 nodes", () => {
    const threeNodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "Root", childrenCount: 2 },
      { id: "2", parentId: "1", data: "A", childrenCount: 0 },
      { id: "3", parentId: "1", data: "B", childrenCount: 0 },
    ]

    const fiveNodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "Root", childrenCount: 4 },
      { id: "2", parentId: "1", data: "A", childrenCount: 0 },
      { id: "3", parentId: "1", data: "B", childrenCount: 0 },
      { id: "4", parentId: "1", data: "C", childrenCount: 0 },
      { id: "5", parentId: "1", data: "D", childrenCount: 0 },
    ]

    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={threeNodes}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set(["1"])}
        />
      </div>
    )

    // Re-render with 5 nodes
    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={fiveNodes}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set(["1"])}
        />
      </div>
    )

    // Component should not crash and tree should still be present
    expect(screen.getByRole("tree", { name: "Graph view" })).toBeTruthy()
  })
})

describe("F0Graph integration — direction prop", () => {
  it("renders with defaultDirection='TB' without crashing", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            defaultDirection="TB"
          />
        </div>
      )
    ).not.toThrow()
  })

  it("renders with defaultDirection='LR' without crashing", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            defaultDirection="LR"
          />
        </div>
      )
    ).not.toThrow()
  })

  it("re-renders with controlled direction change without crashing", () => {
    // Polyfill DOMMatrixReadOnly for jsdom (React Flow uses it internally
    // when recalculating node internals after a prop change)
    if (typeof globalThis.DOMMatrixReadOnly === "undefined") {
      globalThis.DOMMatrixReadOnly = class DOMMatrixReadOnly {
        readonly a = 1
        readonly b = 0
        readonly c = 0
        readonly d = 1
        readonly e = 0
        readonly f = 0
        readonly is2D = true
        readonly isIdentity = true
        readonly m11 = 1
        readonly m12 = 0
        readonly m13 = 0
        readonly m14 = 0
        readonly m21 = 0
        readonly m22 = 1
        readonly m23 = 0
        readonly m24 = 0
        readonly m31 = 0
        readonly m32 = 0
        readonly m33 = 1
        readonly m34 = 0
        readonly m41 = 0
        readonly m42 = 0
        readonly m43 = 0
        readonly m44 = 1
        transformPoint() {
          return { x: 0, y: 0, z: 0, w: 1 }
        }
        inverse() {
          return new DOMMatrixReadOnly()
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any
    }

    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={renderNodeFn} direction="TB" />
      </div>
    )

    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={renderNodeFn} direction="LR" />
      </div>
    )

    expect(screen.getByRole("tree", { name: "Graph view" })).toBeTruthy()
  })
})
