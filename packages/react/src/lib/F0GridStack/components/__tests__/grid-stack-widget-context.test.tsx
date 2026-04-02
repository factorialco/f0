import { describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import {
  GridStackWidgetContext,
  useGridStackWidgetContext,
} from "../grid-stack-widget-context"

describe("grid-stack-widget-context", () => {
  describe("useGridStackWidgetContext", () => {
    it("should return widget context when used within provider", () => {
      const TestComponent = () => {
        const context = useGridStackWidgetContext()
        return (
          <div>
            <div data-testid="widget-id">{context.widget.id}</div>
          </div>
        )
      }

      const { getByTestId } = zeroRender(
        <GridStackWidgetContext.Provider
          value={{
            widget: {
              id: "test-widget-123",
            },
          }}
        >
          <TestComponent />
        </GridStackWidgetContext.Provider>
      )

      expect(getByTestId("widget-id")).toHaveTextContent("test-widget-123")
    })

    it("should throw error when used outside provider", () => {
      const TestComponent = () => {
        try {
          useGridStackWidgetContext()
          return <div>Should not render</div>
        } catch (error) {
          return <div data-testid="error">{(error as Error).message}</div>
        }
      }

      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

      const { getByTestId } = zeroRender(<TestComponent />)

      expect(getByTestId("error")).toHaveTextContent(
        "useGridStackWidgetContext must be used within a GridStackWidgetProvider"
      )

      consoleSpy.mockRestore()
    })

    it("should provide access to widget ID", () => {
      const TestComponent = () => {
        const context = useGridStackWidgetContext()
        return (
          <div>
            <div data-testid="widget-id">{context.widget.id}</div>
          </div>
        )
      }

      const { getByTestId } = zeroRender(
        <GridStackWidgetContext.Provider
          value={{
            widget: {
              id: "my-widget-id",
            },
          }}
        >
          <TestComponent />
        </GridStackWidgetContext.Provider>
      )

      expect(getByTestId("widget-id")).toHaveTextContent("my-widget-id")
    })

    it("should handle different widget IDs", () => {
      const TestComponent = () => {
        const context = useGridStackWidgetContext()
        return (
          <div>
            <div data-testid="widget-id">{context.widget.id}</div>
          </div>
        )
      }

      const { getByTestId, rerender } = zeroRender(
        <GridStackWidgetContext.Provider
          value={{
            widget: {
              id: "widget-1",
            },
          }}
        >
          <TestComponent widgetId="widget-1" />
        </GridStackWidgetContext.Provider>
      )

      expect(getByTestId("widget-id")).toHaveTextContent("widget-1")

      rerender(
        <GridStackWidgetContext.Provider
          value={{
            widget: {
              id: "widget-2",
            },
          }}
        >
          <TestComponent widgetId="widget-2" />
        </GridStackWidgetContext.Provider>
      )

      expect(getByTestId("widget-id")).toHaveTextContent("widget-2")
    })
  })
})
