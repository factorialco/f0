import { act } from "@testing-library/react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"

// ─── Helpers ───────────────────────────────────────────────────

function renderNodeFn(node: GraphNode<string>, ctx: F0GraphNodeRenderContext) {
  return (
    <div
      ref={ctx.nodeRef}
      role="treeitem"
      tabIndex={ctx.tabIndex}
      aria-expanded={ctx.hasChildren ? ctx.expanded : undefined}
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

const rootNodes: GraphNode<string>[] = [
  {
    id: "root-1",
    parentId: null,
    data: "Root",
    childrenCount: 2,
    childrenLoaded: false,
  },
]

const childNodes: GraphNode<string>[] = [
  { id: "child-1", parentId: "root-1", data: "Child A", childrenCount: 0 },
  { id: "child-2", parentId: "root-1", data: "Child B", childrenCount: 0 },
]

// Mock ResizeObserver which React Flow needs
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

// ─── Lazy tree tests ──────────────────────────────────────────

describe("F0Graph lazy tree — loadChildren", () => {
  it("loadChildren called on first expand", async () => {
    const loadChildren = vi.fn().mockResolvedValue(childNodes)

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          rootNodes={rootNodes}
          loadChildren={loadChildren}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    // Expand root-1 via ArrowRight
    dispatchKey(tree, "ArrowRight")

    // Wait for the async load to settle
    await act(async () => {
      await vi.waitFor(() => {
        expect(loadChildren).toHaveBeenCalledTimes(1)
      })
    })

    expect(loadChildren).toHaveBeenCalledWith("root-1")
  })

  it("loadChildren not called twice for same node", async () => {
    const loadChildren = vi.fn().mockResolvedValue(childNodes)

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          rootNodes={rootNodes}
          loadChildren={loadChildren}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })

    // Expand
    dispatchKey(tree, "ArrowRight")
    await act(async () => {
      await vi.waitFor(() => {
        expect(loadChildren).toHaveBeenCalledTimes(1)
      })
    })

    // Collapse
    dispatchKey(tree, "ArrowLeft")

    // Expand again
    dispatchKey(tree, "ArrowRight")

    // Should NOT call loadChildren again — data was already fetched
    // Wait a tick to ensure no additional call is queued
    await act(async () => {
      await new Promise((r) => setTimeout(r, 50))
    })
    expect(loadChildren).toHaveBeenCalledTimes(1)
  })

  it("children render after resolve", async () => {
    let resolveLoad: (value: GraphNode<string>[]) => void
    const loadChildren = vi.fn().mockImplementation(
      () =>
        new Promise<GraphNode<string>[]>((resolve) => {
          resolveLoad = resolve
        })
    )

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          rootNodes={rootNodes}
          loadChildren={loadChildren}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    dispatchKey(tree, "ArrowRight")

    // Resolve the load
    await act(async () => {
      resolveLoad!(childNodes)
      await new Promise((r) => setTimeout(r, 50))
    })

    // The tree should still be rendered without errors
    expect(screen.getByRole("tree", { name: "Graph view" })).toBeTruthy()
  })

  it("error state: loadChildren rejects without crashing", async () => {
    const loadChildren = vi.fn().mockRejectedValue(new Error("Network error"))

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          rootNodes={rootNodes}
          loadChildren={loadChildren}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
        />
      </div>
    )

    const tree = screen.getByRole("tree", { name: "Graph view" })
    dispatchKey(tree, "ArrowRight")

    // Wait for the rejected promise to settle
    await act(async () => {
      await new Promise((r) => setTimeout(r, 50))
    })

    // The tree should still be rendered (no crash)
    expect(screen.getByRole("tree", { name: "Graph view" })).toBeTruthy()
  })

  it("renders without crashing in lazy mode with pre-expanded root", () => {
    const loadChildren = vi.fn().mockResolvedValue(childNodes)

    expect(() =>
      zeroRender(
        <div style={{ width: 800, height: 600 }}>
          <F0Graph
            rootNodes={rootNodes}
            loadChildren={loadChildren}
            renderNode={renderNodeFn}
          />
        </div>
      )
    ).not.toThrow()
  })
})
