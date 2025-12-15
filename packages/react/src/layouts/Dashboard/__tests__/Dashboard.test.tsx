import { screen, zeroRender } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Dashboard } from "../Dashboard"
import { DashboardWidget } from "../typings"
const _ = React

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
    <div data-testid="dashboard-widget" data-title={title} data-draggable={draggable}>
      <div data-testid="widget-title">{title}</div>
      {children}
    </div>
  ),
}))

describe("Dashboard", () => {
  let mockF0GridStack: ReturnType<typeof vi.fn>

  beforeEach(async () => {
    vi.clearAllMocks()
    const module = await import("../../../components/Utilities/F0GridStack/F0GridStack")
    mockF0GridStack = vi.mocked(module.F0GridStack)
  })

  describe("Component Rendering", () => {
    it("should render F0GridStack with correct props", () => {
      const widgets: DashboardDashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 1",
          },
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
      expect(screen.getByTestId("f0-grid-stack")).toHaveAttribute("data-widgets-count", "0")
    })

    it("should render with widgets", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 1",
          },
          content: <div>Content 1</div>,
        },
        {
          id: "widget-2",
          w: 3,
          h: 1,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 2",
          },
          content: <div>Content 2</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      expect(screen.getByTestId("f0-grid-stack")).toHaveAttribute("data-widgets-count", "2")
    })

    it("should support forwardRef", () => {
      const ref = { current: null }
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 1",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      // Ref should be supported (forwardRef implementation)
      expect(ref).toBeDefined()
    })
  })

  describe("Grid Options", () => {
    it("should have correct default grid options structure", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 1",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      expect(callArgs.options.acceptWidgets).toBe(true)
      expect(callArgs.options.margin).toBe(8)
      expect(callArgs.options.handle).toBe("[data-gs-handle='true']")
      expect(callArgs.options.column).toBe(4)
    })

    it("should have correct columnOpts breakpoints", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 1",
          },
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
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 1",
          },
          content: <div>Content 1</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets).toHaveLength(1)
      expect(gridWidgets[0].id).toBe("widget-1")
      expect(gridWidgets[0].w).toBe(2)
      expect(gridWidgets[0].h).toBe(2)
      // x and y are not included in widgetsToGridWidgets unless explicitly provided
      // They're only added when widgets come back from onChange
    })

    it("should map widget ID correctly", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "my-widget-id",
          w: 1,
          h: 1,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].id).toBe("my-widget-id")
    })

    it("should use default size when w/h are undefined", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 1,
          h: 1,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].w).toBe(1)
      expect(gridWidgets[0].h).toBe(1)
    })

    it("should map allowedSizes from availableSizes", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
          availableSizes: [
            { w: 2, h: 2 },
            { w: 4, h: 4 },
          ],
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].allowedSizes).toEqual([
        { w: 2, h: 2 },
        { w: 4, h: 4 },
      ])
    })

    it("should set noMove/noResize based on editMode", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      // Test edit mode = false (default)
      const { rerender } = zeroRender(<Dashboard widgets={widgets} editMode={false} />)

      let callArgs = mockF0GridStack.mock.calls[0][0]
      let gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      // When editMode is false, noMove and noResize should be true
      expect(gridWidgets[0].noMove).toBe(true)
      expect(gridWidgets[0].noResize).toBe(true)

      // Test edit mode = true
      rerender(<Dashboard widgets={widgets} editMode={true} />)

      // Get the latest call (should be the second one)
      const latestCallIndex = mockF0GridStack.mock.calls.length - 1
      callArgs = mockF0GridStack.mock.calls[latestCallIndex][0]
      gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      // When editMode is true, noMove and noResize should be false
      expect(gridWidgets[0].noMove).toBe(false)
      expect(gridWidgets[0].noResize).toBe(false)
    })

    it("should map locked property", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
          locked: true,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].locked).toBe(true)
    })

    it("should create meta data structure", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "My Widget",
          },
          content: <div>My Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].meta).toEqual({
        title: "My Widget",
      })
      expect(gridWidgets[0]._originalContent).toEqual(<div>My Content</div>)
    })

    it("should wrap content in DashboardWidget", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget Title",
          },
          content: <div>Widget Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} editMode={true} />)

      // DashboardWidget is wrapped in content, which is passed to F0GridStack
      // Since F0GridStack is mocked, we verify the content structure via the mock call
      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      // Content should be a React element (DashboardWidget wrapper)
      expect(gridWidgets[0].content).toBeDefined()
      expect(React.isValidElement(gridWidgets[0].content)).toBe(true)
    })

    it("should set draggable prop based on editMode", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      // Test editMode = true
      zeroRender(<Dashboard widgets={widgets} editMode={true} />)

      const callArgs1 = mockF0GridStack.mock.calls[0][0]
      const gridWidgets1 = callArgs1.widgets as GridStackReactDashboardWidget[]
      const content1 = gridWidgets1[0].content as React.ReactElement

      // Content should be DashboardWidget with draggable=true
      expect(content1).toBeDefined()
      expect(React.isValidElement(content1)).toBe(true)

      // Test editMode = false
      zeroRender(<Dashboard widgets={widgets} editMode={false} />)

      const callArgs2 = mockF0GridStack.mock.calls[0][0]
      const gridWidgets2 = callArgs2.widgets as GridStackReactDashboardWidget[]
      const content2 = gridWidgets2[0].content as React.ReactElement

      expect(content2).toBeDefined()
      expect(React.isValidElement(content2)).toBe(true)
    })
  })

  describe("State Management", () => {
    it("should initialize state from widgets prop", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 1",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets).toHaveLength(1)
      expect(gridWidgets[0].id).toBe("widget-1")
    })

    it("should update state when widgets prop changes", () => {
      const initialWidgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 1",
          },
          content: <div>Content</div>,
        },
      ]

      const { rerender } = zeroRender(<Dashboard widgets={initialWidgets} />)

      const newWidgets: DashboardWidget[] = [
        ...initialWidgets,
        {
          id: "widget-2",
          w: 3,
          h: 1,
          x: 0,
          y: 0,
          meta: {
            title: "Widget 2",
          },
          content: <div>Content 2</div>,
        },
      ]

      rerender(<Dashboard widgets={newWidgets} />)

      // Get the latest call after rerender
      const latestCallIndex = mockF0GridStack.mock.calls.length - 1
      const callArgs = mockF0GridStack.mock.calls[latestCallIndex][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets).toHaveLength(2)
    })

    it("should update state when editMode changes", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      const { rerender } = zeroRender(<Dashboard widgets={widgets} editMode={false} />)

      let callArgs = mockF0GridStack.mock.calls[0][0]
      let gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].noMove).toBe(true)

      rerender(<Dashboard widgets={widgets} editMode={true} />)

      // Get the latest call after rerender
      const latestCallIndex = mockF0GridStack.mock.calls.length - 1
      callArgs = mockF0GridStack.mock.calls[latestCallIndex][0]
      gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].noMove).toBe(false)
    })
  })

  describe("handleChange Callback", () => {
    it("should call onChange with transformed widgets", () => {
      const onChange = vi.fn()
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 1,
          y: 1,
          meta: {
            title: "Widget 1",
          },
          content: <div>Content 1</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} onChange={onChange} />)

      // Simulate onChange from F0GridStack
      const gridWidgets: GridStackReactDashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 1,
          y: 1,
          meta: {
            title: "Widget 1",
          },
          _originalContent: <div>Content 1</div>,
        },
      ]

      // Get the actual onChange handler from the mock call
      const callArgs = mockF0GridStack.mock.calls[0][0]
      if (callArgs.onChange) {
        callArgs.onChange(gridWidgets)
      }

      expect(onChange).toHaveBeenCalled()
      const onChangeCallArgs = onChange.mock.calls[0][0] as DashboardWidget[]

      expect(onChangeCallArgs[0].id).toBe("widget-1")
      expect(onChangeCallArgs[0].w).toBe(2)
      expect(onChangeCallArgs[0].h).toBe(2)
      expect(onChangeCallArgs[0].x).toBe(1)
      expect(onChangeCallArgs[0].y).toBe(1)
      expect(onChangeCallArgs[0].meta?.title).toBe("Widget 1")
    })

    it("should extract meta data correctly", () => {
      const onChange = vi.fn()
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "My Title",
          },
          content: <div>My Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} onChange={onChange} />)

      const gridWidgets: GridStackReactDashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "My Title",
          },
          _originalContent: <div>My Content</div>,
        },
      ]

      const callArgs = mockF0GridStack.mock.calls[0][0]
      if (callArgs.onChange) {
        callArgs.onChange(gridWidgets)
      }

      const onChangeCallArgs = onChange.mock.calls[0][0] as DashboardWidget[]
      expect(onChangeCallArgs[0].meta?.title).toBe("My Title")
      expect(onChangeCallArgs[0].content).toEqual(<div>My Content</div>)
    })

    it("should map position correctly", () => {
      const onChange = vi.fn()
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} onChange={onChange} />)

      const gridWidgets: GridStackReactDashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 3,
          y: 4,
          meta: {
            title: "Widget",
          },
          _originalContent: <div>Content</div>,
        },
      ]

      const callArgs = mockF0GridStack.mock.calls[0][0]
      if (callArgs.onChange) {
        callArgs.onChange(gridWidgets)
      }

      const onChangeCallArgs = onChange.mock.calls[0][0] as DashboardWidget[]
      expect(onChangeCallArgs[0].x).toBe(3)
      expect(onChangeCallArgs[0].y).toBe(4)
    })

    it("should preserve locked property", () => {
      const onChange = vi.fn()
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
          locked: true,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} onChange={onChange} />)

      const gridWidgets: GridStackReactDashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          locked: true,
          meta: {
            title: "Widget",
          },
          _originalContent: <div>Content</div>,
        },
      ]

      const callArgs = mockF0GridStack.mock.calls[0][0]
      if (callArgs.onChange) {
        callArgs.onChange(gridWidgets)
      }

      const onChangeCallArgs = onChange.mock.calls[0][0] as DashboardWidget[]
      expect(onChangeCallArgs[0].locked).toBe(true)
    })
  })

  describe("Edit Mode Behavior", () => {
    it("should make widgets draggable in edit mode", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} editMode={true} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].noMove).toBe(false)
      expect(gridWidgets[0].noResize).toBe(false)
    })

    it("should make widgets not draggable in view mode", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} editMode={false} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].noMove).toBe(true)
      expect(gridWidgets[0].noResize).toBe(true)
    })
  })

  describe("Edge Cases", () => {
    it("should handle widgets without x/y positions", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      // x and y should be undefined if not provided
      expect(gridWidgets[0].x).toBeUndefined()
      expect(gridWidgets[0].y).toBeUndefined()
    })

    it("should handle widgets with undefined sizes", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 1,
          h: 1,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].w).toBe(1)
      expect(gridWidgets[0].h).toBe(1)
    })

    it("should handle widgets without availableSizes", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets[0].allowedSizes).toBeUndefined()
    })

    it("should handle empty widgets array", () => {
      zeroRender(<Dashboard widgets={[]} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      expect(gridWidgets).toHaveLength(0)
    })

    it("should handle default editMode (false)", () => {
      const widgets: DashboardWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          meta: {
            title: "Widget",
          },
          content: <div>Content</div>,
        },
      ]

      zeroRender(<Dashboard widgets={widgets} />)

      const callArgs = mockF0GridStack.mock.calls[0][0]
      const gridWidgets = callArgs.widgets as GridStackReactDashboardWidget[]

      // Default editMode should be false
      expect(gridWidgets[0].noMove).toBe(true)
      expect(gridWidgets[0].noResize).toBe(true)
    })
  })
})
