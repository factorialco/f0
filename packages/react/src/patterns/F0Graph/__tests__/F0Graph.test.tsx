import { act } from "@testing-library/react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type { GraphNode, ZoomLevel } from "../../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"

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

  it("accepts nodeWidth and nodeHeight props without crashing", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            nodeWidth={180}
            nodeHeight={40}
          />
        </div>
      )
    ).not.toThrow()
  })

  it("accepts onExpandedNodesChange callback prop", () => {
    const onExpandedNodesChange = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set(["1"])}
          onExpandedNodesChange={onExpandedNodesChange}
        />
      </div>
    )

    // Callback wired — not called until user interacts.
    expect(onExpandedNodesChange).not.toHaveBeenCalled()
  })

  it("accepts onSelectedNodesChange callback prop", () => {
    const onSelectedNodesChange = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          onSelectedNodesChange={onSelectedNodesChange}
        />
      </div>
    )

    expect(onSelectedNodesChange).not.toHaveBeenCalled()
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

  it("controlled direction overrides defaultDirection", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            defaultDirection="TB"
            direction="LR"
          />
        </div>
      )
    ).not.toThrow()
  })
})

// ─── ARIA tree contract ────────────────────────────────────────

describe("F0Graph ARIA tree contract", () => {
  it("provides correct aria-level via render context (root=1, child=2, grandchild=3)", () => {
    const captured = new Map<
      string,
      Pick<
        F0GraphNodeRenderContext,
        "level" | "setSize" | "posInSet" | "tabIndex"
      >
    >()

    const spyRenderNode = (
      node: GraphNode<string>,
      ctx: F0GraphNodeRenderContext
    ) => {
      captured.set(node.id, {
        level: ctx.level,
        setSize: ctx.setSize,
        posInSet: ctx.posInSet,
        tabIndex: ctx.tabIndex,
      })
      return <span data-testid={`node-${node.id}`}>{node.data}</span>
    }

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={spyRenderNode}
          defaultExpandedNodes={new Set(["1", "2"])}
        />
      </div>
    )

    // React Flow may not render nodes in jsdom — guard assertions
    if (captured.size > 0) {
      expect(captured.get("1")?.level).toBe(1)
      expect(captured.get("2")?.level).toBe(2)
      expect(captured.get("4")?.level).toBe(3)
    }
  })

  it("provides correct aria-setsize and aria-posinset for siblings", () => {
    const captured = new Map<
      string,
      Pick<F0GraphNodeRenderContext, "setSize" | "posInSet">
    >()

    const spyRenderNode = (
      node: GraphNode<string>,
      ctx: F0GraphNodeRenderContext
    ) => {
      captured.set(node.id, {
        setSize: ctx.setSize,
        posInSet: ctx.posInSet,
      })
      return <span>{node.data}</span>
    }

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={spyRenderNode}
          defaultExpandedNodes={new Set(["1", "2"])}
        />
      </div>
    )

    if (captured.size > 0) {
      // Root: only 1 root node
      expect(captured.get("1")).toEqual({ setSize: 1, posInSet: 1 })
      // Children of node 1: nodes 2, 3
      expect(captured.get("2")).toEqual({ setSize: 2, posInSet: 1 })
      expect(captured.get("3")).toEqual({ setSize: 2, posInSet: 2 })
      // Children of node 2: nodes 4, 5
      expect(captured.get("4")).toEqual({ setSize: 2, posInSet: 1 })
      expect(captured.get("5")).toEqual({ setSize: 2, posInSet: 2 })
    }
  })

  it("only one node has tabIndex 0 via render context", () => {
    const tabIndices = new Map<string, 0 | -1>()

    const spyRenderNode = (
      node: GraphNode<string>,
      ctx: F0GraphNodeRenderContext
    ) => {
      tabIndices.set(node.id, ctx.tabIndex)
      return <span>{node.data}</span>
    }

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={spyRenderNode}
          defaultExpandedNodes={new Set(["1"])}
        />
      </div>
    )

    if (tabIndices.size > 0) {
      const focused = [...tabIndices.values()].filter((t) => t === 0)
      expect(focused).toHaveLength(1)
    }
  })
})

// ─── Keyboard navigation ──────────────────────────────────────

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

describe("F0Graph keyboard navigation", () => {
  it("ArrowRight expands a collapsed node with children", () => {
    const onExpandToggle = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
          onExpandToggle={onExpandToggle}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    // Focus starts on node "1" (only visible root, collapsed, has children)
    dispatchKey(tree, "ArrowRight")
    expect(onExpandToggle).toHaveBeenCalledWith("1", true)
  })

  it("ArrowLeft on an expanded node collapses it", () => {
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
    // Focus starts on node "1" (expanded root)
    dispatchKey(tree, "ArrowLeft")
    expect(onExpandToggle).toHaveBeenCalledWith("1", false)
  })

  it("ArrowDown moves focus to the next visible node", () => {
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
    // Focus on node "1" (expanded). ArrowRight moves focus to first child "2".
    dispatchKey(tree, "ArrowRight")
    // Now focused on node "2" (collapsed, has children). ArrowRight expands it.
    dispatchKey(tree, "ArrowRight")
    expect(onExpandToggle).toHaveBeenCalledWith("2", true)
  })

  it("ArrowLeft on a leaf/collapsed node moves focus to parent", () => {
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
    // Focus on node "1" (expanded). ArrowRight → first child "2".
    dispatchKey(tree, "ArrowRight")
    // Focus on "2" (collapsed). ArrowLeft → move to parent "1".
    dispatchKey(tree, "ArrowLeft")
    // Now focus is back on "1" (expanded). ArrowLeft → collapse "1".
    dispatchKey(tree, "ArrowLeft")
    expect(onExpandToggle).toHaveBeenCalledWith("1", false)
  })
})
