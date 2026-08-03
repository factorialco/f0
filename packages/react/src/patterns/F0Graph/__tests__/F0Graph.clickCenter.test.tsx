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
function clickNode(id: string) {
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

// Mount, then clear the camera spies so only the click's calls are counted
// (isolates the click behavior from any mount-time framing).
const mount = (props: Partial<React.ComponentProps<typeof F0Graph>> = {}) => {
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
  mockReactFlow.setCenter.mockClear()
  mockReactFlow.fitView.mockClear()
  return view
}

describe("F0Graph — fly to node on click (default)", () => {
  it("flies to the clicked node at NODE_CLICK_ZOOM (1.5) by default", () => {
    mount()
    clickNode("root")
    expect(mockReactFlow.setCenter).toHaveBeenCalledTimes(1)
    expect(mockReactFlow.setCenter).toHaveBeenLastCalledWith(
      expect.any(Number),
      expect.any(Number),
      expect.objectContaining({ zoom: 1.5, duration: 300 })
    )
  })

  it("re-centers on every click, including a repeat click on the same node", () => {
    mount()
    clickNode("root")
    clickNode("root")
    expect(mockReactFlow.setCenter).toHaveBeenCalledTimes(2)
  })

  it("honors a custom nodeClickZoom, clamped to maxZoom", () => {
    mount({ nodeClickZoom: 5, maxZoom: 2 })
    clickNode("root")
    expect(mockReactFlow.setCenter).toHaveBeenLastCalledWith(
      expect.any(Number),
      expect.any(Number),
      expect.objectContaining({ zoom: 2 })
    )
  })

  it("does not move the camera when centerOnNodeClick is false", () => {
    mount({ centerOnNodeClick: false })
    clickNode("root")
    expect(mockReactFlow.setCenter).not.toHaveBeenCalled()
    expect(mockReactFlow.fitView).not.toHaveBeenCalled()
  })

  it("offsets the center for a right-side viewportInset", () => {
    const noInset = mount()
    clickNode("root")
    const noInsetX = mockReactFlow.setCenter.mock.calls[0][0]
    noInset.unmount()

    mount({ viewportInset: { right: 480 } })
    clickNode("root")
    const insetX = mockReactFlow.setCenter.mock.calls[0][0]

    // Right inset pushes the target to the right so the node clears the panel.
    expect(insetX).toBeGreaterThan(noInsetX)
  })
})
