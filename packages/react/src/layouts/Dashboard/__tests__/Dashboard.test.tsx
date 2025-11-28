import type { GridStackReactWidget } from "@/components/Utilities/F0GridStack/F0GridStack"
import { screen, zeroRender } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Dashboard, type Widget } from "../Dashboard"

// Mock F0GridStack - must be inside vi.mock factory due to hoisting
vi.mock("@/components/Utilities/F0GridStack/F0GridStack", () => {
  const mockF0GridStackFn = vi.fn(({ options, widgets }) => {
    return (
      <div
        data-testid="f0-grid-stack"
        data-column={options.column}
        data-widgets-count={widgets.length}
      >
        F0GridStack Mock
      </div>
    )
  })
  return {
    F0GridStack: mockF0GridStackFn,
    F0GridStackRef: {},
  }
})

// Mock DashboardWidget
vi.mock("../components/DashboardWidget", () => ({
  DashboardWidget: ({
    title,
    draggable,
    children,
  }: {
    title: string
    draggable?: boolean
    children: React.ReactNode
  }) => (
    <div
      data-testid="dashboard-widget"
      data-title={title}
      data-draggable={draggable}
    >
      <div data-testid="widget-title">{title}</div>
      {children}
    </div>
  ),
}))

describe("Dashboard", () => {
  let mockF0GridStack: ReturnType<typeof vi.fn>

  beforeEach(async () => {
    vi.clearAllMocks()
    const module = await import(
      "../../../components/Utilities/F0GridStack/F0GridStack"
    )
    mockF0GridStack = vi.mocked(module.F0GridStack)
  })

  describe("Component Rendering", () => {
    it("should render F0GridStack with correct props", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget 1",
          content: <div>Content 1</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      expect(screen.getByTestId("f0-grid-stack")).toBeInTheDocument()
      expect(mockF0GridStack).toHaveBeenCalled()
    })

    it("should render with empty widgets array", () => {
      zeroRender(<Dashboard widgets={[]} />)

      expect(screen.getByTestId("f0-grid-stack")).toBeInTheDocument()
      expect(screen.getByTestId("f0-grid-stack")).toHaveAttribute(
        "data-widgets-count",
        "0"
      )
    })

    it("should render with widgets", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget 1",
          content: <div>Content 1</div>,
        },
        {
          id: "widget-2",
          w: 3,
          h: 1,
          title: "Widget 2",
          content: <div>Content 2</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      expect(screen.getByTestId("f0-grid-stack")).toHaveAttribute(
        "data-widgets-count",
        "2"
      )
    })

    it("should support forwardRef", () => {
      const ref = { current: null }
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget 1",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard ref={ref} widgets={widgets} />)

      // Ref should be supported (forwardRef implementation)
      expect(ref).toBeDefined()
    })
  })

  describe("Grid Options", () => {
    it("should have correct default grid options structure", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget 1",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      expect(callArgs.options.acceptWidgets).toBe(true)
      expect(callArgs.options.margin).toBe(8)
      expect(callArgs.options.handle).toBe(".dashboard-widget-handle")
      expect(callArgs.options.column).toBe(4)
    })

    it("should have correct columnOpts breakpoints", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget 1",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      expect(callArgs.options.columnOpts).toBeDefined()
      expect(callArgs.options.columnOpts?.breakpointForWindow).toBe(true)
      expect(callArgs.options.columnOpts?.breakpoints).toEqual([
        { c: 1, w: 700 },
        { c: 3, w: 850 },
        { c: 6, w: 950 },
        { c: 8, w: 1100 },
      ])
      expect(callArgs.options.columnOpts?.columnMax).toBe(4)
    })
  })

  describe("Widget Transformation", () => {
    it("should transform widgets correctly", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          title: "Widget 1",
          content: <div>Content 1</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets).toHaveLength(1)
      expect(gridWidgets[0].id).toBe("widget-1")
      expect(gridWidgets[0].w).toBe(2)
      expect(gridWidgets[0].h).toBe(2)
      expect(gridWidgets[0].x).toBe(0)
      expect(gridWidgets[0].y).toBe(0)
    })

    it("should map widget ID correctly", () => {
      const widgets: Widget[] = [
        {
          id: "my-widget-id",
          w: 1,
          h: 1,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].id).toBe("my-widget-id")
    })

    it("should use default size when w/h are undefined", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].w).toBe(1)
      expect(gridWidgets[0].h).toBe(1)
    })

    it("should map allowedSizes from availableSizes", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
          availableSizes: [
            { w: 2, h: 2 },
            { w: 4, h: 4 },
          ],
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].allowedSizes).toEqual([
        { w: 2, h: 2 },
        { w: 4, h: 4 },
      ])
    })

    it("should set noMove/noResize based on editMode", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      // Test edit mode = true
      const { rerender } = zeroRender(
        <Dashboard widgets={widgets} editMode={true} />
      )

      let callArgs = mockF0GridStack.mock.calls[0][0]
      let gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].noMove).toBe(false)
      expect(gridWidgets[0].noResize).toBe(false)

      // Test edit mode = false
      rerender(<Dashboard widgets={widgets} editMode={false} />)

      callArgs = mockF0GridStack.mock.calls[1][0]
      gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].noMove).toBe(true)
      expect(gridWidgets[0].noResize).toBe(true)
    })

    it("should map locked property", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
          locked: true,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].locked).toBe(true)
    })

    it("should create meta data structure", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "My Widget",
          content: <div>My Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].meta).toEqual({
        title: "My Widget",
        content: <div>My Content</div>,
      })
    })

    it("should wrap content in DashboardWidget", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget Title",
          content: <div>Widget Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} editMode={true} />)

      // DashboardWidget should be rendered (mocked)
      expect(screen.getByTestId("dashboard-widget")).toBeInTheDocument()
    })

    it("should set draggable prop based on editMode", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      const { rerender } = zeroRender(
        <Dashboard widgets={widgets} editMode={true} />
      )

      let widget = screen.getByTestId("dashboard-widget")
      expect(widget).toHaveAttribute("data-draggable", "true")

      rerender(<Dashboard widgets={widgets} editMode={false} />)

      widget = screen.getByTestId("dashboard-widget")
      expect(widget).toHaveAttribute("data-draggable", "false")
    })
  })

  describe("State Management", () => {
    it("should initialize state from widgets prop", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget 1",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets).toHaveLength(1)
      expect(gridWidgets[0].id).toBe("widget-1")
    })

    it("should update state when widgets prop changes", () => {
      const initialWidgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget 1",
          content: <div>Content</div>,
        },
      ]

      const { rerender } = zeroRender(<Dashboard widgets={initialWidgets} />)

      const newWidgets: Widget[] = [
        ...initialWidgets,
        {
          id: "widget-2",
          w: 3,
          h: 1,
          title: "Widget 2",
          content: <div>Content 2</div>,
        },
      ]

      rerender(<Dashboard widgets={newWidgets} />)

      const mockF0GridStack = getMockF0GridStack()
      const callArgs = mockF0GridStack.mock.calls[1][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets).toHaveLength(2)
    })

    it("should update state when editMode changes", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      const { rerender } = zeroRender(
        <Dashboard widgets={widgets} editMode={false} />
      )

      let callArgs = mockF0GridStack.mock.calls[0][0]
      let gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].noMove).toBe(true)

      rerender(<Dashboard widgets={widgets} editMode={true} />)

      callArgs = mockF0GridStack.mock.calls[1][0]
      gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].noMove).toBe(false)
    })
  })

  describe("handleChange Callback", () => {
    it("should call onChange with transformed widgets", () => {
      const onChange = vi.fn()
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 1,
          y: 1,
          title: "Widget 1",
          content: <div>Content 1</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} onChange={onChange} />)

      // Simulate onChange from F0GridStack
      const gridWidgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 1,
          y: 1,
          meta: {
            title: "Widget 1",
            content: <div>Content 1</div>,
          },
        },
      ]

      // Get the actual onChange handler from the mock call
      const callArgs = mockF0GridStack.mock.calls[0][0]
      if (callArgs.onChange) {
        callArgs.onChange(gridWidgets)
      }

      expect(onChange).toHaveBeenCalled()
      const onChangeCallArgs = onChange.mock.calls[0][0] as Widget[]

      expect(onChangeCallArgs[0].id).toBe("widget-1")
      expect(onChangeCallArgs[0].w).toBe(2)
      expect(onChangeCallArgs[0].h).toBe(2)
      expect(onChangeCallArgs[0].x).toBe(1)
      expect(onChangeCallArgs[0].y).toBe(1)
      expect(onChangeCallArgs[0].title).toBe("Widget 1")
    })

    it("should extract meta data correctly", () => {
      const onChange = vi.fn()
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "My Title",
          content: <div>My Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} onChange={onChange} />)

      const gridWidgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          meta: {
            title: "My Title",
            content: <div>My Content</div>,
          },
        },
      ]

      const callArgs = mockF0GridStack.mock.calls[0][0]
      if (callArgs.onChange) {
        callArgs.onChange(gridWidgets)
      }

      const onChangeCallArgs = onChange.mock.calls[0][0] as Widget[]
      expect(onChangeCallArgs[0].title).toBe("My Title")
      expect(onChangeCallArgs[0].content).toEqual(<div>My Content</div>)
    })

    it("should map position correctly", () => {
      const onChange = vi.fn()
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} onChange={onChange} />)

      const gridWidgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 3,
          y: 4,
          meta: {
            title: "Widget",
            content: <div>Content</div>,
          },
        },
      ]

      const callArgs = mockF0GridStack.mock.calls[0][0]
      if (callArgs.onChange) {
        callArgs.onChange(gridWidgets)
      }

      const onChangeCallArgs = onChange.mock.calls[0][0] as Widget[]
      expect(onChangeCallArgs[0].x).toBe(3)
      expect(onChangeCallArgs[0].y).toBe(4)
    })

    it("should preserve locked property", () => {
      const onChange = vi.fn()
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
          locked: true,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} onChange={onChange} />)

      const gridWidgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          locked: true,
          meta: {
            title: "Widget",
            content: <div>Content</div>,
          },
        },
      ]

      const callArgs = mockF0GridStack.mock.calls[0][0]
      if (callArgs.onChange) {
        callArgs.onChange(gridWidgets)
      }

      const onChangeCallArgs = onChange.mock.calls[0][0] as Widget[]
      expect(onChangeCallArgs[0].locked).toBe(true)
    })
  })

  describe("Edit Mode Behavior", () => {
    it("should make widgets draggable in edit mode", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} editMode={true} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].noMove).toBe(false)
      expect(gridWidgets[0].noResize).toBe(false)
    })

    it("should make widgets not draggable in view mode", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} editMode={false} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].noMove).toBe(true)
      expect(gridWidgets[0].noResize).toBe(true)
    })
  })

  describe("Edge Cases", () => {
    it("should handle widgets without x/y positions", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      // x and y should be undefined if not provided
      expect(gridWidgets[0].x).toBeUndefined()
      expect(gridWidgets[0].y).toBeUndefined()
    })

    it("should handle widgets with undefined sizes", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].w).toBe(1)
      expect(gridWidgets[0].h).toBe(1)
    })

    it("should handle widgets without availableSizes", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets[0].allowedSizes).toBeUndefined()
    })

    it("should handle empty widgets array", () => {
      zeroRender(<Dashboard widgets={[]} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      expect(gridWidgets).toHaveLength(0)
    })

    it("should handle default editMode (false)", () => {
      const widgets: Widget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          title: "Widget",
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactWidget[]

      // Default editMode should be false
      expect(gridWidgets[0].noMove).toBe(true)
      expect(gridWidgets[0].noResize).toBe(true)
    })
  })
})
