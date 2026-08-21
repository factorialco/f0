import { act } from "react"
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"
import { FOCUS_SETTLE_DELAY_MS } from "../constants"
import { F0Graph } from "../F0Graph"

// Spy React Flow instance so we can observe the fly-to on click. Only the public
// `useReactFlow` is mocked; the ReactFlow component itself renders normally.
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
  { id: "root", parentId: null, data: "Root", childrenCount: 1 },
  { id: "a", parentId: "root", data: "A" },
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
  mockReactFlow.setCenter.mockClear()
  mockReactFlow.fitView.mockClear()
})
afterEach(() => vi.restoreAllMocks())

// React Flow does not render `.react-flow__node` elements in jsdom, so we inject
// a stand-in under the tree container and drive the real canvas `onPointerUp`
// handler directly (it resolves `.react-flow__node[data-id]` under the pointer,
// exactly as it does with a real node). This exercises the click → select + fly
// wiring without depending on React Flow's DOM output.
function pressNode(id: string) {
  const tree = screen.getByRole("tree", { name: "Graph view" })
  const nodeEl = document.createElement("div")
  nodeEl.className = "react-flow__node"
  nodeEl.setAttribute("data-id", id)
  tree.appendChild(nodeEl)

  const fire = (type: string) => {
    const ev = new MouseEvent(type, { bubbles: true, clientX: 10, clientY: 10 })
    act(() => {
      nodeEl.dispatchEvent(ev)
    })
  }
  fire("pointerdown")
  fire("pointerup")
  return nodeEl
}

// The fly is deferred by FOCUS_SETTLE_DELAY_MS so it can see a side panel the
// click opened, so tests must let that delay elapse before asserting.
async function settleFly() {
  await act(async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, FOCUS_SETTLE_DELAY_MS + 20)
    )
  })
}

/** Press a node and wait for the deferred fly to run. */
async function clickNode(id: string) {
  const nodeEl = pressNode(id)
  await settleFly()
  return nodeEl
}

// Mount, then clear the camera spies so only the click's calls are counted
// (isolates the click behavior from any mount-time framing). The one-shot entry
// frame runs from React Flow's `onInit` (deferred), so flush it before clearing.
const mount = async (
  props: Partial<React.ComponentProps<typeof F0Graph>> = {}
) => {
  const view = zeroRender(
    <div style={{ width: 800, height: 600 }}>
      <F0Graph
        nodes={NODES}
        renderNode={renderNodeFn}
        expandedNodes={new Set(["root"])}
        {...props}
      />
    </div>
  )
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
  })
  mockReactFlow.setCenter.mockClear()
  mockReactFlow.fitView.mockClear()
  return view
}

describe("F0Graph — fly to node on click (default)", () => {
  it("flies to the clicked node at NODE_CLICK_ZOOM (1.5) by default", async () => {
    await mount()
    await clickNode("root")
    expect(mockReactFlow.setCenter).toHaveBeenCalledTimes(1)
    expect(mockReactFlow.setCenter).toHaveBeenLastCalledWith(
      expect.any(Number),
      expect.any(Number),
      expect.objectContaining({ zoom: 1.5, duration: 300 })
    )
  })

  it("re-centers on every click, including a repeat click on the same node", async () => {
    await mount()
    await clickNode("root")
    await clickNode("root")
    expect(mockReactFlow.setCenter).toHaveBeenCalledTimes(2)
  })

  it("honors a custom nodeClickZoom, clamped to maxZoom", async () => {
    await mount({ nodeClickZoom: 5, maxZoom: 2 })
    await clickNode("root")
    expect(mockReactFlow.setCenter).toHaveBeenLastCalledWith(
      expect.any(Number),
      expect.any(Number),
      expect.objectContaining({ zoom: 2 })
    )
  })

  it("does not move the camera when centerOnNodeClick is false", async () => {
    await mount({ centerOnNodeClick: false })
    await clickNode("root")
    expect(mockReactFlow.setCenter).not.toHaveBeenCalled()
    expect(mockReactFlow.fitView).not.toHaveBeenCalled()
  })

  // Regression: the canvas pointer-up also fires for the expander/collapser
  // pseudo-nodes. Clicking one (to toggle) must not fly — it isn't a real node,
  // so the camera would chase the toggle's shifting position.
  it("does not fly when the expander/collapser pseudo-node is clicked", async () => {
    await mount()
    await clickNode("expander-root")
    expect(mockReactFlow.setCenter).not.toHaveBeenCalled()
    expect(mockReactFlow.fitView).not.toHaveBeenCalled()
  })

  it("offsets the center for a right-side viewportInset", async () => {
    const noInset = await mount()
    await clickNode("root")
    const noInsetX = mockReactFlow.setCenter.mock.calls[0][0]
    noInset.unmount()

    await mount({ viewportInset: { right: 480 } })
    await clickNode("root")
    const insetX = mockReactFlow.setCenter.mock.calls[0][0]

    // Right inset pushes the target to the right so the node clears the panel.
    expect(insetX).toBeGreaterThan(noInsetX)
  })
})

describe("F0Graph — click fly waits for a panel the click opens", () => {
  // The real consumer sequence: the click itself opens the side panel, so
  // `viewportInset` only arrives on a later render. Flying synchronously would
  // read no inset and center on the full canvas, leaving the node behind the
  // panel that just opened — so the fly must see the inset that follows it.
  it("uses an inset that only arrives after the click", async () => {
    const baseline = await mount()
    await clickNode("root")
    const noInsetX = mockReactFlow.setCenter.mock.calls[0][0]
    baseline.unmount()

    const { rerender } = await mount()
    const graph = (props: Partial<React.ComponentProps<typeof F0Graph>>) => (
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={NODES}
          renderNode={renderNodeFn}
          expandedNodes={new Set(["root"])}
          {...props}
        />
      </div>
    )

    pressNode("root")
    expect(mockReactFlow.setCenter).not.toHaveBeenCalled()

    // The panel opens as a result of the click and reports its width.
    rerender(graph({ viewportInset: { right: 480 } }))
    await settleFly()

    expect(mockReactFlow.setCenter).toHaveBeenCalledTimes(1)
    expect(mockReactFlow.setCenter.mock.calls[0][0]).toBeGreaterThan(noInsetX)
  })

  it("a second click supersedes a still-pending fly instead of queueing both", async () => {
    await mount()
    pressNode("root")
    pressNode("a")
    await settleFly()
    expect(mockReactFlow.setCenter).toHaveBeenCalledTimes(1)
  })
})
