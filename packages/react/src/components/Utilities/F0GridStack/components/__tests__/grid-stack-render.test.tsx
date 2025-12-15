import { zeroRender } from "@/testing/test-utils"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { GridStackRender } from "../grid-stack-render"

// Mock react-dom
vi.mock("react-dom", () => ({
  createPortal: vi.fn((children) => children),
}))

// Mock context hooks
const mockGetWidgetContainer = vi.fn()
const mockReactContentMap = new Map<string, React.ReactElement>()

vi.mock("../grid-stack-context", async () => {
  const actual = await vi.importActual("../grid-stack-context")
  return {
    ...actual,
    useGridStackContext: vi.fn(() => ({
      _reactContentMap: {
        value: mockReactContentMap,
      },
    })),
  }
})

vi.mock("../grid-stack-render-context", async () => {
  const actual = await vi.importActual("../grid-stack-render-context")
  return {
    ...actual,
    useGridStackRenderContext: vi.fn(() => ({
      getWidgetContainer: mockGetWidgetContainer,
    })),
  }
})

describe("grid-stack-render", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockReactContentMap.clear()
    mockGetWidgetContainer.mockClear()
  })

  it("should create portals for each widget in reactContentMap", async () => {
    const container1 = document.createElement("div")
    const container2 = document.createElement("div")
    container1.setAttribute("data-testid", "container-1")
    container2.setAttribute("data-testid", "container-2")

    mockGetWidgetContainer.mockImplementation((id: string) => {
      if (id === "widget-1") return container1
      if (id === "widget-2") return container2
      return null
    })

    mockReactContentMap.set("widget-1", <div>Widget 1 Content</div>)
    mockReactContentMap.set("widget-2", <div>Widget 2 Content</div>)

    zeroRender(<GridStackRender />)

    const { createPortal } = await import("react-dom")
    expect(vi.mocked(createPortal)).toHaveBeenCalledTimes(2)
    expect(vi.mocked(createPortal)).toHaveBeenCalledWith(<div>Widget 1 Content</div>, container1)
    expect(vi.mocked(createPortal)).toHaveBeenCalledWith(<div>Widget 2 Content</div>, container2)
  })

  it("should call getWidgetContainer for each widget", () => {
    const container1 = document.createElement("div")
    const container2 = document.createElement("div")

    mockGetWidgetContainer.mockImplementation((id: string) => {
      if (id === "widget-1") return container1
      if (id === "widget-2") return container2
      return null
    })

    mockReactContentMap.set("widget-1", <div>Content 1</div>)
    mockReactContentMap.set("widget-2", <div>Content 2</div>)

    zeroRender(<GridStackRender />)

    expect(mockGetWidgetContainer).toHaveBeenCalledWith("widget-1")
    expect(mockGetWidgetContainer).toHaveBeenCalledWith("widget-2")
  })

  it("should handle missing widget container gracefully", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

    mockGetWidgetContainer.mockImplementation(() => null)

    mockReactContentMap.set("widget-no-container", <div>Content</div>)

    zeroRender(<GridStackRender />)

    expect(consoleSpy).toHaveBeenCalledWith(
      "Widget container not found for widget widget-no-container"
    )

    consoleSpy.mockRestore()
  })

  it("should handle empty reactContentMap", () => {
    mockReactContentMap.clear()

    zeroRender(<GridStackRender />)

    expect(mockGetWidgetContainer).not.toHaveBeenCalled()
  })

  it("should handle widgets with null content", () => {
    const container1 = document.createElement("div")

    mockGetWidgetContainer.mockImplementation((id: string) => {
      if (id === "widget-null") return container1
      return null
    })

    // Set null content (though Map doesn't typically store null, testing edge case)
    mockReactContentMap.set("widget-null", null as unknown as React.ReactElement)

    zeroRender(<GridStackRender />)

    // Should still attempt to create portal
    expect(mockGetWidgetContainer).toHaveBeenCalledWith("widget-null")
  })

  it("should handle multiple widgets with same container", async () => {
    const sharedContainer = document.createElement("div")

    mockGetWidgetContainer.mockReturnValue(sharedContainer)

    mockReactContentMap.set("widget-1", <div>Content 1</div>)
    mockReactContentMap.set("widget-2", <div>Content 2</div>)
    mockReactContentMap.set("widget-3", <div>Content 3</div>)

    zeroRender(<GridStackRender />)

    const { createPortal } = await import("react-dom")
    expect(vi.mocked(createPortal)).toHaveBeenCalledTimes(3)
    expect(mockGetWidgetContainer).toHaveBeenCalledTimes(3)
  })
})
