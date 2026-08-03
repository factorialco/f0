import { afterEach, describe, expect, it, vi } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import type { PositionedNode, ViewportInset } from "../../types"
import { FIT_VIEW_PADDING_TIGHT } from "../../constants"
import { useGraphViewport } from "../useGraphViewport"

// Spy React Flow instance + store so we can assert on the camera calls without a
// real canvas. (Names must start with `mock` for the hoisted vi.mock factory.)
const mockReactFlow = {
  fitView: vi.fn(),
  setCenter: vi.fn(),
  fitBounds: vi.fn(),
  zoomIn: vi.fn(),
  zoomOut: vi.fn(),
  setViewport: vi.fn(),
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
}
const mockStoreState = { width: 1200, height: 800 }
vi.mock("@xyflow/react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@xyflow/react")>()
  return {
    ...actual,
    useReactFlow: () => mockReactFlow,
    useStoreApi: () => ({ getState: () => mockStoreState }),
  }
})

const POS: PositionedNode = { id: "n", x: 100, y: 200, width: 256, height: 56 }
// Center of POS: x = 100 + 256/2 = 228, y = 200 + 56/2 = 228.
const CENTER_X = 228
const CENTER_Y = 228

const setup = (opts?: {
  viewportInset?: ViewportInset
  defaultZoom?: number
}) =>
  zeroRenderHook(
    (props: { viewportInset?: ViewportInset; defaultZoom?: number }) =>
      useGraphViewport({
        defaultZoom: props.defaultZoom ?? 1,
        getNodePosition: (id) => (id === "n" ? POS : undefined),
        viewportInset: props.viewportInset,
      }),
    { initialProps: opts ?? {} }
  )

afterEach(() => {
  mockReactFlow.setCenter.mockClear()
  mockReactFlow.fitView.mockClear()
})

describe("useGraphViewport — centerOnNode zoom", () => {
  it("centers on the node at defaultZoom when no zoom is passed", () => {
    const { result } = setup({ defaultZoom: 1 })
    expect(result.current.centerOnNode("n", 300)).toBe(true)
    expect(mockReactFlow.setCenter).toHaveBeenCalledWith(CENTER_X, CENTER_Y, {
      duration: 300,
      zoom: 1,
    })
  })

  it("centers at the explicit click zoom, independent of the current camera", () => {
    const { result } = setup({ defaultZoom: 1 })
    result.current.centerOnNode("n", 300, 1.5)
    expect(mockReactFlow.setCenter).toHaveBeenCalledWith(CENTER_X, CENTER_Y, {
      duration: 300,
      zoom: 1.5,
    })
  })

  it("returns false and does not move when the position is unknown", () => {
    const { result } = setup()
    expect(result.current.centerOnNode("missing", 300)).toBe(false)
    expect(mockReactFlow.setCenter).not.toHaveBeenCalled()
  })
})

describe("useGraphViewport — centerOnNode viewportInset offset", () => {
  it("shifts right by half the right inset (in flow units) so the node clears a right panel", () => {
    const { result } = setup({ viewportInset: { right: 480 }, defaultZoom: 1 })
    // shiftX = (480 - 0) / 2 / zoom(1.5) = 160
    result.current.centerOnNode("n", 300, 1.5)
    expect(mockReactFlow.setCenter).toHaveBeenCalledWith(
      CENTER_X + 160,
      CENTER_Y,
      { duration: 300, zoom: 1.5 }
    )
  })

  it("shifts left for a left inset (RTL / left-hand panel)", () => {
    const { result } = setup({ viewportInset: { left: 480 }, defaultZoom: 1 })
    // shiftX = (0 - 480) / 2 / zoom(1) = -240
    result.current.centerOnNode("n", 300, 1)
    expect(mockReactFlow.setCenter).toHaveBeenCalledWith(
      CENTER_X - 240,
      CENTER_Y,
      { duration: 300, zoom: 1 }
    )
  })

  it("shifts vertically for top/bottom insets", () => {
    const { result } = setup({ viewportInset: { bottom: 200 }, defaultZoom: 1 })
    // shiftY = (200 - 0) / 2 / zoom(1) = 100
    result.current.centerOnNode("n", 300, 1)
    expect(mockReactFlow.setCenter).toHaveBeenCalledWith(
      CENTER_X,
      CENTER_Y + 100,
      { duration: 300, zoom: 1 }
    )
  })

  it("with no inset behaves exactly as before (no shift)", () => {
    const { result } = setup({ viewportInset: {}, defaultZoom: 1 })
    result.current.centerOnNode("n", 300, 1)
    expect(mockReactFlow.setCenter).toHaveBeenCalledWith(CENTER_X, CENTER_Y, {
      duration: 300,
      zoom: 1,
    })
  })
})

describe("useGraphViewport — getFitPadding / hasViewportInset", () => {
  it("returns the plain base fraction when there is no inset", () => {
    const { result } = setup()
    expect(result.current.hasViewportInset).toBe(false)
    expect(result.current.getFitPadding(FIT_VIEW_PADDING_TIGHT)).toBe(
      FIT_VIEW_PADDING_TIGHT
    )
  })

  it("layers the px inset onto the base as per-side fractions of the container", () => {
    const { result } = setup({ viewportInset: { right: 480 } })
    expect(result.current.hasViewportInset).toBe(true)
    // right = base + 480/width(1200) = 0.1 + 0.4 = 0.5; others = base.
    expect(result.current.getFitPadding(FIT_VIEW_PADDING_TIGHT)).toEqual({
      top: FIT_VIEW_PADDING_TIGHT,
      right: FIT_VIEW_PADDING_TIGHT + 480 / 1200,
      bottom: FIT_VIEW_PADDING_TIGHT,
      left: FIT_VIEW_PADDING_TIGHT,
    })
  })

  it("handleFitView passes the inset-aware padding to fitView", () => {
    const { result } = setup({ viewportInset: { right: 480 } })
    result.current.handleFitView()
    expect(mockReactFlow.fitView).toHaveBeenCalledWith(
      expect.objectContaining({
        padding: {
          top: FIT_VIEW_PADDING_TIGHT,
          right: FIT_VIEW_PADDING_TIGHT + 480 / 1200,
          bottom: FIT_VIEW_PADDING_TIGHT,
          left: FIT_VIEW_PADDING_TIGHT,
        },
      })
    )
  })
})
