import type { GridStack } from "gridstack"

import { describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { GridStackContext, useGridStackContext } from "../grid-stack-context"

// Mock gridstack
vi.mock("gridstack", () => ({
  GridStack: {
    init: vi.fn(() => ({
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
    })),
    renderCB: null,
  },
}))

// Mock the provider dependencies
vi.mock("../grid-stack-provider", () => ({
  GridStackProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="grid-stack-provider">{children}</div>
  ),
}))

vi.mock("../widget-utils", () => ({
  convertWidgetRecursive: vi.fn((widget) => widget),
}))

vi.mock("@reactuses/core", () => ({
  useDeepCompareEffect: vi.fn((effect) => effect()),
}))

describe("grid-stack-context", () => {
  describe("useGridStackContext", () => {
    it("should return context value when used within provider", () => {
      const mockGridStack = {
        on: vi.fn(),
        off: vi.fn(),
        el: document.createElement("div"),
        opts: {},
      } as unknown as GridStack

      const TestComponent = () => {
        const context = useGridStackContext()
        return (
          <div>
            <div data-testid="has-gridstack">
              {context.gridStack ? "has-gridstack" : "no-gridstack"}
            </div>
            <div data-testid="has-options">
              {context.options ? "has-options" : "no-options"}
            </div>
          </div>
        )
      }

      const { getByTestId } = zeroRender(
        <GridStackContext.Provider
          value={{
            options: { column: 12 },
            gridStack: mockGridStack,
            _gridStack: {
              value: mockGridStack,
              set: vi.fn(),
            },
            _rawWidgetMetaMap: {
              value: new Map(),
              set: vi.fn(),
            },
            _reactContentMap: {
              value: new Map(),
              set: vi.fn(),
            },
          }}
        >
          <TestComponent />
        </GridStackContext.Provider>
      )

      expect(getByTestId("has-gridstack")).toHaveTextContent("has-gridstack")
      expect(getByTestId("has-options")).toHaveTextContent("has-options")
    })

    it("should throw error when used outside provider", () => {
      const TestComponent = () => {
        try {
          useGridStackContext()
          return <div>Should not render</div>
        } catch (error) {
          return <div data-testid="error">{(error as Error).message}</div>
        }
      }

      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

      const { getByTestId } = zeroRender(<TestComponent />)

      expect(getByTestId("error")).toHaveTextContent(
        "useGridStackContext must be used within a GridStackProvider"
      )

      consoleSpy.mockRestore()
    })

    it("should provide access to all context properties", () => {
      const mockGridStack = {
        on: vi.fn(),
        off: vi.fn(),
        el: document.createElement("div"),
        opts: {},
      } as unknown as GridStack

      const mockSetGridStack = vi.fn()
      const mockSetRawWidgetMetaMap = vi.fn()
      const mockSetReactContentMap = vi.fn()

      const TestComponent = () => {
        const context = useGridStackContext()
        return (
          <div>
            <div data-testid="gridstack-exists">
              {context.gridStack ? "yes" : "no"}
            </div>
            <div data-testid="options-column">
              {context.options.column?.toString()}
            </div>
            <div data-testid="has-gridstack-setter">
              {typeof context._gridStack.set === "function" ? "yes" : "no"}
            </div>
            <div data-testid="has-raw-map-setter">
              {typeof context._rawWidgetMetaMap.set === "function"
                ? "yes"
                : "no"}
            </div>
            <div data-testid="has-react-map-setter">
              {typeof context._reactContentMap.set === "function"
                ? "yes"
                : "no"}
            </div>
          </div>
        )
      }

      const { getByTestId } = zeroRender(
        <GridStackContext.Provider
          value={{
            options: { column: 8 },
            gridStack: mockGridStack,
            _gridStack: {
              value: mockGridStack,
              set: mockSetGridStack,
            },
            _rawWidgetMetaMap: {
              value: new Map(),
              set: mockSetRawWidgetMetaMap,
            },
            _reactContentMap: {
              value: new Map(),
              set: mockSetReactContentMap,
            },
          }}
        >
          <TestComponent />
        </GridStackContext.Provider>
      )

      expect(getByTestId("gridstack-exists")).toHaveTextContent("yes")
      expect(getByTestId("options-column")).toHaveTextContent("8")
      expect(getByTestId("has-gridstack-setter")).toHaveTextContent("yes")
      expect(getByTestId("has-raw-map-setter")).toHaveTextContent("yes")
      expect(getByTestId("has-react-map-setter")).toHaveTextContent("yes")
    })
  })
})
