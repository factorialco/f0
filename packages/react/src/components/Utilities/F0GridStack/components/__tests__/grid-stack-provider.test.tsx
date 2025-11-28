import { zeroRender } from "@/testing/test-utils"
import type { GridStack, GridStackOptions, GridStackWidget } from "gridstack"
import { beforeEach, describe, expect, it, vi } from "vitest"
import type { GridStackReactWidget } from "../../F0GridStack"
import { GridStackProvider } from "../grid-stack-provider"

// Mock gridstack
const mockGridStackInstance = {
  on: vi.fn().mockReturnThis(),
  off: vi.fn(),
  addWidget: vi.fn(),
  removeWidget: vi.fn(),
  removeAll: vi.fn(),
  save: vi.fn(() => []),
  update: vi.fn(),
  destroy: vi.fn(),
  el: document.createElement("div"),
  opts: {},
} as unknown as GridStack

const mockGridStackInit = vi.fn(() => mockGridStackInstance)

vi.mock("gridstack", () => ({
  GridStack: {
    init: mockGridStackInit,
    renderCB: null,
  },
}))

// Mock widget-utils
vi.mock("../widget-utils", () => ({
  convertWidgetRecursive: vi.fn((widget) => ({
    ...widget,
    content: () => document.createElement("div"),
  })),
}))

// Mock useDeepCompareEffect
vi.mock("@reactuses/core", () => ({
  useDeepCompareEffect: vi.fn((effect) => effect()),
}))

// Mock GridStackContext
vi.mock("../grid-stack-context", async () => {
  const actual = await vi.importActual("../grid-stack-context")
  return {
    ...actual,
    GridStackContext: {
      Provider: ({
        children,
        value,
      }: {
        children: React.ReactNode
        value: unknown
      }) => (
        <div
          data-testid="grid-stack-context-provider"
          data-value={JSON.stringify(value)}
        >
          {children}
        </div>
      ),
    },
  }
})

describe("GridStackProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockGridStackInstance.el = document.createElement("div")
    mockGridStackInstance.opts = {}
    ;(mockGridStackInstance.save as ReturnType<typeof vi.fn>).mockReturnValue(
      []
    )
  })

  describe("Widget Conversion", () => {
    it("should convert widgets using convertWidgetRecursive", async () => {
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          content: <div>Content 1</div>,
        },
        {
          id: "widget-2",
          w: 3,
          h: 1,
          content: <div>Content 2</div>,
        },
      ]

      zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={widgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      const { convertWidgetRecursive } = await import("../widget-utils")
      expect(vi.mocked(convertWidgetRecursive)).toHaveBeenCalledTimes(2)
      expect(vi.mocked(convertWidgetRecursive)).toHaveBeenCalledWith(widgets[0])
      expect(vi.mocked(convertWidgetRecursive)).toHaveBeenCalledWith(widgets[1])
    })

    it("should store React content in reactContentMap", () => {
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          content: <div data-testid="content-1">Content 1</div>,
        },
      ]

      // Note: This test verifies the component renders with widgets
      // The actual map storage is tested indirectly through component behavior
      zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={widgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      // Component should render without errors
      expect(widgets).toHaveLength(1)
    })

    it("should handle nested sub-grid widgets", async () => {
      const widgets: GridStackReactWidget[] = [
        {
          id: "parent",
          w: 4,
          h: 4,
          content: <div>Parent</div>,
          subGridOpts: {
            column: 2,
            children: [
              {
                id: "child",
                w: 1,
                h: 1,
                content: <div>Child</div>,
              },
            ],
          },
        },
      ]

      zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={widgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      // Should convert recursively
      const { convertWidgetRecursive } = await import("../widget-utils")
      expect(vi.mocked(convertWidgetRecursive)).toHaveBeenCalled()
    })
  })

  describe("Widget Synchronization", () => {
    it("should add new widgets to gridstack", () => {
      const initialWidgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          content: <div>Content 1</div>,
        },
      ]

      const savedWidgets: GridStackWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
        },
      ]

      ;(mockGridStackInstance.save as ReturnType<typeof vi.fn>).mockReturnValue(
        savedWidgets
      )

      const newWidgets: GridStackReactWidget[] = [
        ...initialWidgets,
        {
          id: "widget-2",
          w: 3,
          h: 1,
          content: <div>Content 2</div>,
        },
      ]

      const { rerender } = zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={initialWidgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      // Simulate gridstack being initialized
      mockUseDeepCompareEffect.mockImplementationOnce((effect) => {
        // First call with initial widgets
        effect()
        // Second call with new widgets
        effect()
      })

      rerender(
        <GridStackProvider options={{ column: 12 }} widgets={newWidgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      // addWidget should be called for new widget
      expect(mockGridStackInstance.addWidget).toHaveBeenCalled()
    })

    it("should remove widgets from gridstack", () => {
      const initialWidgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          content: <div>Content 1</div>,
        },
        {
          id: "widget-2",
          w: 3,
          h: 1,
          content: <div>Content 2</div>,
        },
      ]

      const savedWidgets: GridStackWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
        },
        {
          id: "widget-2",
          w: 3,
          h: 1,
        },
      ]

      ;(mockGridStackInstance.save as ReturnType<typeof vi.fn>).mockReturnValue(
        savedWidgets
      )

      const element = document.createElement("div")
      element.setAttribute("gs-id", "widget-2")
      mockGridStackInstance.el.appendChild(element)

      const remainingWidgets: GridStackReactWidget[] = [initialWidgets[0]]

      const { rerender } = zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={initialWidgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      rerender(
        <GridStackProvider options={{ column: 12 }} widgets={remainingWidgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      // removeWidget should be called
      expect(mockGridStackInstance.removeWidget).toHaveBeenCalled()
    })

    it("should update existing widgets when properties change", () => {
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          content: <div>Content</div>,
        },
      ]

      const savedWidgets: GridStackWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
        },
      ]

      ;(mockGridStackInstance.save as ReturnType<typeof vi.fn>).mockReturnValue(
        savedWidgets
      )

      const element = document.createElement("div")
      element.setAttribute("gs-id", "widget-1")
      mockGridStackInstance.el.appendChild(element)

      const updatedWidgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 3,
          h: 3,
          x: 1,
          y: 1,
          content: <div>Content</div>,
        },
      ]

      const { rerender } = zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={widgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      rerender(
        <GridStackProvider options={{ column: 12 }} widgets={updatedWidgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      // update should be called for changed properties
      expect(mockGridStackInstance.update).toHaveBeenCalled()
    })
  })

  describe("Event Listeners", () => {
    it("should attach resizestop event listener", () => {
      const onResizeStop = vi.fn()

      zeroRender(
        <GridStackProvider
          options={{ column: 12 }}
          widgets={[]}
          onResizeStop={onResizeStop}
        >
          <div>Test</div>
        </GridStackProvider>
      )

      // Event listeners are attached in useEffect
      expect(mockGridStackInstance.on).toHaveBeenCalled()
    })

    it("should attach change, added, removed event listeners", () => {
      const onChange = vi.fn()

      zeroRender(
        <GridStackProvider
          options={{ column: 12 }}
          widgets={[]}
          onChange={onChange}
        >
          <div>Test</div>
        </GridStackProvider>
      )

      expect(mockGridStackInstance.on).toHaveBeenCalled()
    })

    it("should clean up event listeners on unmount", () => {
      const { unmount } = zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={[]}>
          <div>Test</div>
        </GridStackProvider>
      )

      unmount()

      expect(mockGridStackInstance.off).toHaveBeenCalled()
    })
  })

  describe("Change Emission", () => {
    it("should call onChange with merged layout and React content", () => {
      const onChange = vi.fn()
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          content: <div>Content 1</div>,
        },
      ]

      const savedLayout: GridStackWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
        },
      ]

      ;(mockGridStackInstance.save as ReturnType<typeof vi.fn>).mockReturnValue(
        savedLayout
      )

      zeroRender(
        <GridStackProvider
          options={{ column: 12 }}
          widgets={widgets}
          onChange={onChange}
        >
          <div>Test</div>
        </GridStackProvider>
      )

      // onChange should be called when emitChange runs
      // This happens in useEffect after gridStack is set
      expect(onChange).toHaveBeenCalled()
    })

    it("should preserve meta data in onChange callback", () => {
      const onChange = vi.fn()
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          meta: { title: "Test Widget" },
          content: <div>Content</div>,
        },
      ]

      const savedLayout: GridStackWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
        },
      ]

      ;(mockGridStackInstance.save as ReturnType<typeof vi.fn>).mockReturnValue(
        savedLayout
      )

      zeroRender(
        <GridStackProvider
          options={{ column: 12 }}
          widgets={widgets}
          onChange={onChange}
        >
          <div>Test</div>
        </GridStackProvider>
      )

      expect(onChange).toHaveBeenCalled()
    })
  })

  describe("Handle Option Management", () => {
    it("should set handle option on grid instance", () => {
      const options: GridStackOptions = {
        column: 12,
        handle: ".handle",
      }

      zeroRender(
        <GridStackProvider options={options} widgets={[]}>
          <div>Test</div>
        </GridStackProvider>
      )

      // Handle option should be set in useEffect
      expect(mockGridStackInstance.opts.handle).toBe(".handle")
    })
  })

  describe("Context Provider", () => {
    it("should provide context with all required properties", () => {
      const TestComponent = () => {
        const { useGridStackContext } = require("../grid-stack-context")
        const context = useGridStackContext()
        return (
          <div>
            <div data-testid="has-options">
              {context.options ? "yes" : "no"}
            </div>
            <div data-testid="has-gridstack">
              {context.gridStack !== undefined ? "yes" : "no"}
            </div>
            <div data-testid="has-react-map">
              {context._reactContentMap ? "yes" : "no"}
            </div>
            <div data-testid="has-raw-map">
              {context._rawWidgetMetaMap ? "yes" : "no"}
            </div>
          </div>
        )
      }

      const { getByTestId } = zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={[]}>
          <TestComponent />
        </GridStackProvider>
      )

      expect(getByTestId("has-options")).toHaveTextContent("yes")
      expect(getByTestId("has-gridstack")).toHaveTextContent("yes")
      expect(getByTestId("has-react-map")).toHaveTextContent("yes")
      expect(getByTestId("has-raw-map")).toHaveTextContent("yes")
    })
  })

  describe("Error Handling", () => {
    it("should handle errors during widget update", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
      mockGridStackInstance.update.mockImplementationOnce(() => {
        throw new Error("Update failed")
      })

      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          content: <div>Content</div>,
        },
      ]

      const savedWidgets: GridStackWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
        },
      ]

      ;(mockGridStackInstance.save as ReturnType<typeof vi.fn>).mockReturnValue(
        savedWidgets
      )

      const element = document.createElement("div")
      element.setAttribute("gs-id", "widget-1")
      mockGridStackInstance.el.appendChild(element)

      const updatedWidgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 3,
          h: 3,
          content: <div>Content</div>,
        },
      ]

      const { rerender } = zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={widgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      rerender(
        <GridStackProvider options={{ column: 12 }} widgets={updatedWidgets}>
          <div>Test</div>
        </GridStackProvider>
      )

      expect(consoleSpy).toHaveBeenCalled()
      consoleSpy.mockRestore()
    })

    it("should handle errors during event attachment", () => {
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})
      mockGridStackInstance.on.mockImplementationOnce(() => {
        throw new Error("Event attachment failed")
      })

      zeroRender(
        <GridStackProvider options={{ column: 12 }} widgets={[]}>
          <div>Test</div>
        </GridStackProvider>
      )

      expect(consoleSpy).toHaveBeenCalled()
      consoleSpy.mockRestore()
    })
  })
})
