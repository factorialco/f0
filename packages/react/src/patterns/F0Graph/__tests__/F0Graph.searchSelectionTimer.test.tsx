import { act, fireEvent, screen } from "@testing-library/react"
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"

const {
  fitViewSpy,
  getNodeSpy,
  getZoomSpy,
  getViewportSpy,
  setCenterSpy,
  setViewportSpy,
  zoomInSpy,
  zoomOutSpy,
} = vi.hoisted(() => ({
  fitViewSpy: vi.fn(),
  getNodeSpy: vi.fn(() => undefined),
  getZoomSpy: vi.fn(() => 1),
  getViewportSpy: vi.fn(() => ({ x: 0, y: 0, zoom: 1 })),
  setCenterSpy: vi.fn(),
  setViewportSpy: vi.fn(),
  zoomInSpy: vi.fn(),
  zoomOutSpy: vi.fn(),
}))

vi.mock("@xyflow/react", async () => {
  const actual =
    await vi.importActual<typeof import("@xyflow/react")>("@xyflow/react")

  return {
    ...actual,
    useReactFlow: () => ({
      fitView: fitViewSpy,
      getNode: getNodeSpy,
      getZoom: getZoomSpy,
      getViewport: getViewportSpy,
      setCenter: setCenterSpy,
      setViewport: setViewportSpy,
      zoomIn: zoomInSpy,
      zoomOut: zoomOutSpy,
    }),
  }
})

vi.mock("../F0GraphSearch", async () => {
  const actual =
    await vi.importActual<typeof import("../F0GraphSearch")>("../F0GraphSearch")

  return {
    ...actual,
    useGraphSearch: () => ({
      results: [],
      hasQuery: true,
      pending: false,
    }),
    F0GraphSearch: ({ onSelect }: { onSelect: (id: string) => void }) => (
      <div>
        <button type="button" onClick={() => onSelect("node-1")}>
          Select node 1
        </button>
        <button type="button" onClick={() => onSelect("node-2")}>
          Select node 2
        </button>
      </div>
    ),
  }
})

const FOCUS_SETTLE_DELAY_MS = 100

const nodes: GraphNode<{ label: string }>[] = [
  {
    id: "node-1",
    parentId: null,
    data: { label: "Alpha" },
    childrenCount: 1,
  },
  {
    id: "node-2",
    parentId: "node-1",
    data: { label: "Beta" },
    childrenCount: 0,
  },
]

function renderNode(
  node: GraphNode<{ label: string }>,
  ctx: F0GraphNodeRenderContext
) {
  return (
    <div
      ref={ctx.nodeRef}
      role="treeitem"
      tabIndex={ctx.tabIndex}
      data-testid={`node-${node.id}`}
    >
      {node.data.label}
    </div>
  )
}

function renderGraph() {
  return render(
    <div style={{ width: 800, height: 600 }}>
      <F0Graph
        nodes={nodes}
        renderNode={renderNode}
        searchable={{
          getLabel: (node) => node.data.label,
        }}
      />
    </div>
  )
}

beforeAll(() => {
  if (typeof global.ResizeObserver === "undefined") {
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  }
})

describe("F0Graph search selection timer", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    fitViewSpy.mockClear()
    getNodeSpy.mockClear()
    getZoomSpy.mockClear()
    getViewportSpy.mockClear()
    setCenterSpy.mockClear()
    setViewportSpy.mockClear()
    zoomInSpy.mockClear()
    zoomOutSpy.mockClear()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("rapid selections only fly to the last node", () => {
    renderGraph()
    fitViewSpy.mockClear()

    fireEvent.click(screen.getByRole("button", { name: "Select node 1" }))
    fireEvent.click(screen.getByRole("button", { name: "Select node 2" }))

    expect(fitViewSpy).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(FOCUS_SETTLE_DELAY_MS)
    })

    expect(fitViewSpy).toHaveBeenCalledTimes(1)
    expect(fitViewSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        nodes: [{ id: "node-2" }],
      })
    )
  })

  it("clears pending fly-to timeout on unmount", () => {
    const { unmount } = renderGraph()
    fitViewSpy.mockClear()

    fireEvent.click(screen.getByRole("button", { name: "Select node 1" }))

    unmount()

    act(() => {
      vi.runOnlyPendingTimers()
    })

    expect(fitViewSpy).not.toHaveBeenCalled()
  })
})
