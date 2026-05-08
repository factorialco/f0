import { act } from "@testing-library/react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type { DeferredNodesPayload, GraphNode } from "../types"

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

const initialNodes: GraphNode<string>[] = [
  { id: "a", parentId: null, data: "Alice" },
  { id: "b", parentId: "a", data: "Bob" },
]

const deferredPayload: DeferredNodesPayload<string> = {
  nodes: [
    { id: "c", parentId: "a", data: "Charlie" },
    { id: "d", parentId: "b", data: "Diana" },
  ],
}

// Mock ResizeObserver which React Flow needs
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

// ─── Deferred loading integration tests ───────────────────────

describe("F0Graph deferred loading", () => {
  it("renders initial nodes immediately then merges deferred", async () => {
    let resolveFn!: (v: DeferredNodesPayload<string>) => void
    const deferredPromise = new Promise<DeferredNodesPayload<string>>((r) => {
      resolveFn = r
    })
    const onComplete = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={initialNodes}
          deferredNodes={deferredPromise}
          onDeferredLoadComplete={onComplete}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set(["a", "b"])}
        />
      </div>
    )

    // Initial nodes rendered
    expect(screen.getByTestId("node-a")).toBeDefined()
    expect(screen.getByTestId("node-b")).toBeDefined()
    expect(screen.queryByTestId("node-c")).toBeNull()

    // Resolve the deferred payload
    await act(async () => {
      resolveFn(deferredPayload)
      // Let microtask and effects settle
      await new Promise((r) => setTimeout(r, 0))
    })

    // Deferred nodes now appear
    expect(screen.getByTestId("node-c")).toBeDefined()
    expect(screen.getByTestId("node-d")).toBeDefined()
    expect(onComplete).toHaveBeenCalledTimes(1)
  })

  it("fires onDeferredLoadError on rejection", async () => {
    const error = new Error("network failure")
    const deferredPromise = Promise.reject(error)
    // Prevent unhandled rejection noise
    deferredPromise.catch(() => {})

    const onError = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={initialNodes}
          deferredNodes={deferredPromise}
          onDeferredLoadError={onError}
          renderNode={renderNodeFn}
        />
      </div>
    )

    // Wait for error callback
    await act(async () => {
      await new Promise((r) => setTimeout(r, 0))
    })

    expect(onError).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledWith(error)
  })

  it("deferred is ignored in lazy mode", async () => {
    const loadChildren = vi.fn().mockResolvedValue([])
    const onComplete = vi.fn()

    const deferredPromise = Promise.resolve(deferredPayload)

    const rootNodes: GraphNode<string>[] = [
      {
        id: "root",
        parentId: null,
        data: "Root",
        childrenCount: 0,
        childrenLoaded: false,
      },
    ]

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          rootNodes={rootNodes}
          loadChildren={loadChildren}
          deferredNodes={deferredPromise}
          onDeferredLoadComplete={onComplete}
          renderNode={renderNodeFn}
        />
      </div>
    )

    await act(async () => {
      await new Promise((r) => setTimeout(r, 0))
    })

    // In lazy mode, deferredNodes is passed as undefined to useDeferredMerge,
    // so onComplete should NOT fire and deferred nodes should NOT appear
    expect(onComplete).not.toHaveBeenCalled()
    expect(screen.queryByTestId("node-c")).toBeNull()
  })

  it("deferredLoading is true during loading and false after resolve", async () => {
    let resolveFn!: (v: DeferredNodesPayload<string>) => void
    const deferredPromise = new Promise<DeferredNodesPayload<string>>((r) => {
      resolveFn = r
    })

    let capturedDeferredLoading: boolean | undefined

    function capturingRenderNode(
      node: GraphNode<string>,
      ctx: F0GraphNodeRenderContext
    ) {
      // Capture the deferredLoading value from the context for the root node
      if (node.id === "a") {
        capturedDeferredLoading = ctx.deferredLoading
      }
      return (
        <div
          ref={ctx.nodeRef}
          role="treeitem"
          tabIndex={ctx.tabIndex}
          data-testid={`node-${node.id}`}
        >
          {node.data}
        </div>
      )
    }

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={initialNodes}
          deferredNodes={deferredPromise}
          renderNode={capturingRenderNode}
          defaultExpandedNodes={new Set(["a"])}
        />
      </div>
    )

    // During loading, deferredLoading should be true
    expect(capturedDeferredLoading).toBe(true)

    // Resolve
    await act(async () => {
      resolveFn(deferredPayload)
      await new Promise((r) => setTimeout(r, 0))
    })

    // After resolve, deferredLoading should be undefined (falsy)
    expect(capturedDeferredLoading).toBeUndefined()
  })
})
