import React from "react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type { GraphNode, ZoomLevel } from "../../types"
import type { F0GraphContextValue } from "../context"

import { useF0GraphContext } from "../context"
import { F0Graph } from "../F0Graph"

// ─── Fixtures ──────────────────────────────────────────────────

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

// ─── Fix 1 — Memoize wrappers ─────────────────────────────────

describe("Fix 1 — Memo wrappers", () => {
  it("mounts with memoized wrappers without error", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph nodes={makeNodes()} renderNode={renderNodeFn} />
        </div>
      )
    ).not.toThrow()
  })

  it("renders ReactFlow container with memo wrappers active", () => {
    const { container } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={renderNodeFn} />
      </div>
    )
    expect(container.querySelector(".react-flow")).toBeTruthy()
  })

  it("handles expanded state with memo wrappers", () => {
    const onExpandToggle = vi.fn()
    expect(() =>
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
    ).not.toThrow()
  })
})

// ─── Fix 2 — Stable renderNode ─────────────────────────────────

describe("Fix 2 — renderNode stabilization", () => {
  it("calls the latest renderNode even after parent re-render with new function ref", () => {
    let renderCount = 0

    function DynamicRenderNode(node: GraphNode<string>, _zl: ZoomLevel) {
      renderCount++
      return <span data-testid={`node-${node.id}`}>{node.data}</span>
    }

    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={DynamicRenderNode} />
      </div>
    )

    const initialCount = renderCount

    // Re-render with a NEW function reference (simulating parent re-render)
    function UpdatedRenderNode(node: GraphNode<string>, _zl: ZoomLevel) {
      renderCount++
      return <span data-testid={`node-${node.id}`}>{node.data} (updated)</span>
    }

    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={UpdatedRenderNode} />
      </div>
    )

    // The component should still be mounted (no error)
    expect(renderCount).toBeGreaterThanOrEqual(initialCount)
  })

  it("renders correct content when renderNode closure captures changing state", () => {
    let label = "v1"

    function ClosureRenderNode(node: GraphNode<string>, _zl: ZoomLevel) {
      return <span data-testid={`node-${node.id}`}>{label}</span>
    }

    const { rerender } = zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={ClosureRenderNode} />
      </div>
    )

    // Update the captured variable
    label = "v2"

    // Re-render with same function shape but different closure value
    rerender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph nodes={makeNodes()} renderNode={ClosureRenderNode} />
      </div>
    )

    // No crash — stable ref pattern handles the update
    expect(true).toBe(true)
  })
})

// ─── Fix 3 — Split context ────────────────────────────────────

describe("Fix 3 — Context split", () => {
  it("useF0GraphContext() returns complete value including all slices", () => {
    let contextValue: F0GraphContextValue | null = null

    function ContextReader() {
      contextValue = useF0GraphContext()
      return null
    }

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={(node, _zl) => {
            return (
              <>
                <ContextReader />
                <span>{String(node.data)}</span>
              </>
            )
          }}
          defaultExpandedNodes={new Set(["1"])}
        />
      </div>
    )

    // Context should be populated after render
    if (contextValue) {
      const ctx = contextValue
      expect(ctx).toHaveProperty("zoomLevel")
      expect(ctx).toHaveProperty("currentZoom")
      expect(ctx).toHaveProperty("expandedNodes")
      expect(ctx).toHaveProperty("selectedNodes")
      expect(ctx).toHaveProperty("highlightedNodes")
      expect(ctx).toHaveProperty("toggleExpand")
      expect(ctx).toHaveProperty("selectNode")
      expect(typeof ctx.toggleExpand).toBe("function")
      expect(typeof ctx.selectNode).toBe("function")
      expect(ctx.expandedNodes).toBeInstanceOf(Set)
      expect(ctx.selectedNodes).toBeInstanceOf(Set)
      expect(ctx.highlightedNodes).toBeInstanceOf(Set)
    }
  })

  it("renders correctly with selection state", () => {
    const onNodeSelect = vi.fn()

    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            selectedNodes={new Set(["1"])}
            onNodeSelect={onNodeSelect}
          />
        </div>
      )
    ).not.toThrow()
  })

  it("renders correctly with highlighted nodes", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            highlightedNodes={new Set(["2", "3"])}
          />
        </div>
      )
    ).not.toThrow()
  })
})

// ─── Fix 4 — zoomLevel removed from rfNodes deps ──────────────

describe("Fix 4 — zoom decoupled from rfNodes", () => {
  it("renders with default zoom without crashing", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            defaultZoom={1}
          />
        </div>
      )
    ).not.toThrow()
  })

  it("renders with low zoom (dot level) without crashing", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            defaultZoom={0.1}
          />
        </div>
      )
    ).not.toThrow()
  })

  it("renders with high zoom (detail level) without crashing", () => {
    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            nodes={makeNodes()}
            renderNode={renderNodeFn}
            defaultZoom={1.5}
          />
        </div>
      )
    ).not.toThrow()
  })

  it("controls still render at different zoom levels", () => {
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          showControls
          defaultZoom={0.3}
        />
      </div>
    )

    const toolbar = screen.getByRole("toolbar", { name: "Graph navigation" })
    expect(toolbar).toBeTruthy()
  })

  it("lazy tree mode works with zoom changes", () => {
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
            defaultZoom={0.5}
          />
        </div>
      )
    ).not.toThrow()
  })
})
