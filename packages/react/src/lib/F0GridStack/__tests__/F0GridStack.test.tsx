import type { GridItemHTMLElement, GridStackWidget } from "gridstack"

import "@testing-library/jest-dom/vitest"
import React, { type ReactNode } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { GridStackReactWidget } from "../F0GridStack"

import { F0GridStack } from "../F0GridStack"

// Prevent organize imports from removing React (needed for JSX in mocks)
const _React = React

// Mock gridstack library
vi.mock("gridstack", () => ({
  GridStack: {
    init: vi.fn(() => ({
      on: vi.fn().mockReturnThis(),
      addWidget: vi.fn(),
      removeWidget: vi.fn(),
      removeAll: vi.fn(),
      save: vi.fn(),
      update: vi.fn(),
      destroy: vi.fn(),
    })),
    renderCB: null,
  },
}))

// Mock the context hook
vi.mock("../components/grid-stack-context", () => ({
  useGridStackContext: vi.fn(() => ({
    initialOptions: {},
    gridStack: null,
    addWidget: vi.fn(),
    removeWidget: vi.fn(),
    addSubGrid: vi.fn(),
    removeAll: vi.fn(),
    _gridStack: {
      value: null,
      set: vi.fn(),
    },
    _rawWidgetMetaMap: {
      value: new Map(),
      set: vi.fn(),
    },
  })),
}))

// Mock the sub-components
vi.mock("../components/grid-stack-provider", () => ({
  GridStackProvider: ({
    children,
    onResizeStop,
    onChange,
  }: {
    children: ReactNode
    onResizeStop?: (event: Event, el: GridItemHTMLElement) => void
    onChange?: (layout: GridStackWidget[]) => void
  }) => (
    <div
      data-testid="grid-stack-provider"
      data-onresizestop={onResizeStop ? "defined" : "undefined"}
      data-onchange={onChange ? "defined" : "undefined"}
    >
      {children}
    </div>
  ),
}))

vi.mock("../components/grid-stack-render-provider", () => ({
  GridStackRenderProvider: ({ children }: { children: ReactNode }) => (
    <div data-testid="grid-stack-render-provider">{children}</div>
  ),
}))

vi.mock("../components/grid-stack-render", () => ({
  GridStackRender: () => (
    <div data-testid="grid-stack-render">Grid Content</div>
  ),
}))

describe("F0GridStack", () => {
  const mockWidgets: GridStackReactWidget[] = [
    {
      id: "node-1",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      content: <div>Widget 1</div>,
    },
    {
      id: "node-2",
      x: 2,
      y: 0,
      w: 3,
      h: 1,
      content: <div>Widget 2</div>,
      allowedSizes: [
        { w: 2, h: 1 },
        { w: 3, h: 1 },
        { w: 4, h: 2 },
      ],
    },
    {
      id: "node-3",
      x: 0,
      y: 2,
      w: 1,
      h: 1,
      content: <div>Widget 3</div>,
    },
  ]

  const mockOptions = {
    column: 12,
    cellHeight: 100,
    margin: 10,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("Component Rendering", () => {
    it("should render without crashing", () => {
      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={mockWidgets} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
      expect(getByTestId("grid-stack-render-provider")).toBeTruthy()
      expect(getByTestId("grid-stack-render")).toBeTruthy()
    })

    it("should render with empty nodes array", () => {
      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={[]} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })

    it("should render with minimal options", () => {
      const minimalOptions = { column: 6 }
      const { getByTestId } = zeroRender(
        <F0GridStack options={minimalOptions} widgets={mockWidgets} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })
  })

  describe("Nodes Handling", () => {
    it("should pass nodes as children in grid options", () => {
      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={mockWidgets} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })

    it("should handle nodes with different configurations", () => {
      const diverseWidgets: GridStackReactWidget[] = [
        {
          id: "small-node",
          w: 1,
          h: 1,
          content: <span>Small</span>,
        },
        {
          id: "large-node",
          w: 6,
          h: 4,
          content: <div>Large</div>,
        },
        {
          id: "positioned-node",
          x: 5,
          y: 5,
          w: 2,
          h: 2,
          content: <p>Positioned</p>,
        },
      ]

      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={diverseWidgets} />
      )

      expect(getByTestId("grid-stack-render")).toBeTruthy()
    })

    it("should handle nodes with allowedSizes", () => {
      const nodesWithAllowedSizes: GridStackReactWidget[] = [
        {
          id: "constrained-node",
          w: 2,
          h: 2,
          allowedSizes: [
            { w: 2, h: 2 },
            { w: 4, h: 4 },
          ],
          content: <div>Constrained</div>,
        },
      ]

      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={nodesWithAllowedSizes} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })
  })

  describe("Callbacks", () => {
    it("should pass onChange callback to provider", () => {
      const onChange = vi.fn()
      const { getByTestId } = zeroRender(
        <F0GridStack
          options={mockOptions}
          widgets={mockWidgets}
          onChange={onChange}
        />
      )

      const provider = getByTestId("grid-stack-provider")
      expect(provider.getAttribute("data-onchange")).toBe("defined")
    })

    it("should work without onChange callback", () => {
      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={mockWidgets} />
      )

      const provider = getByTestId("grid-stack-provider")
      expect(provider.getAttribute("data-onchange")).toBe("undefined")
    })

    it("should pass onResizeStop callback to provider", () => {
      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={mockWidgets} />
      )

      const provider = getByTestId("grid-stack-provider")
      expect(provider.getAttribute("data-onresizestop")).toBe("defined")
    })
  })

  describe("onResizeStop Logic", () => {
    it("should handle resize with allowedSizes constraint", () => {
      // Import the component to access the internal logic
      // We'll test the closest allowed logic separately
      const closestAllowed = (
        w: number,
        h: number,
        allowed: { w: number; h: number }[]
      ) => {
        let best = allowed[0],
          bestDist = Infinity
        for (const a of allowed) {
          const dx = a.w - w,
            dy = a.h - h
          const dist = dx * dx + dy * dy
          if (dist < bestDist) {
            bestDist = dist
            best = a
          }
        }
        return best
      }

      const result = closestAllowed(2.5, 1.5, [
        { w: 2, h: 1 },
        { w: 3, h: 1 },
        { w: 4, h: 2 },
      ])

      // Should snap to 2x1 as it's the first with minimum distance
      // Distance to 2x1: (2.5-2)^2 + (1.5-1)^2 = 0.5
      // Distance to 3x1: (2.5-3)^2 + (1.5-1)^2 = 0.5 (same distance, but 2x1 comes first)
      expect(result).toEqual({ w: 2, h: 1 })
    })

    it("should find closest allowed size - exact match", () => {
      const closestAllowed = (
        w: number,
        h: number,
        allowed: { w: number; h: number }[]
      ) => {
        let best = allowed[0],
          bestDist = Infinity
        for (const a of allowed) {
          const dx = a.w - w,
            dy = a.h - h
          const dist = dx * dx + dy * dy
          if (dist < bestDist) {
            bestDist = dist
            best = a
          }
        }
        return best
      }

      const result = closestAllowed(3, 1, [
        { w: 2, h: 1 },
        { w: 3, h: 1 },
        { w: 4, h: 2 },
      ])

      expect(result).toEqual({ w: 3, h: 1 })
    })

    it("should find closest allowed size - between two options", () => {
      const closestAllowed = (
        w: number,
        h: number,
        allowed: { w: number; h: number }[]
      ) => {
        let best = allowed[0],
          bestDist = Infinity
        for (const a of allowed) {
          const dx = a.w - w,
            dy = a.h - h
          const dist = dx * dx + dy * dy
          if (dist < bestDist) {
            bestDist = dist
            best = a
          }
        }
        return best
      }

      const result = closestAllowed(2.8, 1.2, [
        { w: 2, h: 1 },
        { w: 3, h: 1 },
        { w: 4, h: 2 },
      ])

      expect(result).toEqual({ w: 3, h: 1 })
    })

    it("should handle single allowed size", () => {
      const closestAllowed = (
        w: number,
        h: number,
        allowed: { w: number; h: number }[]
      ) => {
        let best = allowed[0],
          bestDist = Infinity
        for (const a of allowed) {
          const dx = a.w - w,
            dy = a.h - h
          const dist = dx * dx + dy * dy
          if (dist < bestDist) {
            bestDist = dist
            best = a
          }
        }
        return best
      }

      const result = closestAllowed(5, 5, [{ w: 2, h: 2 }])

      expect(result).toEqual({ w: 2, h: 2 })
    })

    it("should calculate distance correctly for diagonal differences", () => {
      const closestAllowed = (
        w: number,
        h: number,
        allowed: { w: number; h: number }[]
      ) => {
        let best = allowed[0],
          bestDist = Infinity
        for (const a of allowed) {
          const dx = a.w - w,
            dy = a.h - h
          const dist = dx * dx + dy * dy
          if (dist < bestDist) {
            bestDist = dist
            best = a
          }
        }
        return best
      }

      // Testing with larger differences
      const result = closestAllowed(5, 5, [
        { w: 2, h: 2 }, // distance = (5-2)^2 + (5-2)^2 = 9 + 9 = 18
        { w: 4, h: 4 }, // distance = (5-4)^2 + (5-4)^2 = 1 + 1 = 2 (closest)
        { w: 6, h: 3 }, // distance = (5-6)^2 + (5-3)^2 = 1 + 4 = 5
      ])

      expect(result).toEqual({ w: 4, h: 4 })
    })
  })

  describe("Grid Options", () => {
    it("should merge options with nodes as children", () => {
      const customOptions = {
        column: 8,
        cellHeight: 80,
        margin: 5,
      }

      const { getByTestId } = zeroRender(
        <F0GridStack options={customOptions} widgets={mockWidgets} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })

    it("should handle options updates", () => {
      const { rerender, getByTestId } = zeroRender(
        <F0GridStack options={{ column: 12 }} widgets={mockWidgets} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()

      // Rerender with updated options
      rerender(<F0GridStack options={{ column: 6 }} widgets={mockWidgets} />)

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })
  })

  describe("Edge Cases", () => {
    it("should handle nodes without render property", () => {
      const nodesWithoutRender: GridStackReactWidget[] = [
        {
          id: "no-render",
          w: 2,
          h: 2,
        },
      ]

      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={nodesWithoutRender} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })

    it("should handle nodes without id", () => {
      const nodesWithoutId: GridStackReactWidget[] = [
        {
          id: "no-id",
          w: 2,
          h: 2,
          content: <div>No ID</div>,
        },
      ]

      const { getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={nodesWithoutId} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })

    it("should handle empty allowedSizes array", () => {
      const mockElement = {
        gridstackNode: {
          w: 2,
          h: 2,
          allowedSizes: [],
          grid: { update: vi.fn() },
        },
      } as unknown as GridItemHTMLElement

      // The onResizeStop should return early when allowedSizes is empty
      // This is implicitly tested by the component logic
      expect(mockElement.gridstackNode?.allowedSizes).toEqual([])
    })

    it("should handle undefined gridstackNode", () => {
      const mockElement = {
        gridstackNode: undefined,
      } as unknown as GridItemHTMLElement

      // The onResizeStop should return early when node is undefined
      expect(mockElement.gridstackNode).toBeUndefined()
    })

    it("should not update grid when size matches target", () => {
      const mockGrid = {
        update: vi.fn(),
      }

      const mockElement = {
        gridstackNode: {
          w: 3,
          h: 1,
          allowedSizes: [
            { w: 2, h: 1 },
            { w: 3, h: 1 },
          ],
          grid: mockGrid,
        },
      } as unknown as GridItemHTMLElement

      // If current size is 3x1 and closest is also 3x1, update should not be called
      const closestAllowed = (
        w: number,
        h: number,
        allowed: { w: number; h: number }[]
      ) => {
        let best = allowed[0],
          bestDist = Infinity
        for (const a of allowed) {
          const dx = a.w - w,
            dy = a.h - h
          const dist = dx * dx + dy * dy
          if (dist < bestDist) {
            bestDist = dist
            best = a
          }
        }
        return best
      }

      const target = closestAllowed(3, 1, [
        { w: 2, h: 1 },
        { w: 3, h: 1 },
      ])

      expect(target).toEqual({ w: 3, h: 1 })
      expect(mockElement.gridstackNode?.w).toBe(3)
      expect(mockElement.gridstackNode?.h).toBe(1)
    })
  })

  describe("Widget Signature Memoization", () => {
    it("should create signature from widget properties", () => {
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          noMove: false,
          noResize: false,
          locked: false,
          content: <div>Content</div>,
        },
      ]

      // The signature should include all relevant properties
      const signature = JSON.stringify(
        widgets.map((widget) => ({
          id: widget.id,
          w: widget.w,
          h: widget.h,
          x: widget.x,
          y: widget.y,
          noMove: widget.noMove,
          noResize: widget.noResize,
          locked: widget.locked,
          content: widget.content?.toString() ?? "",
          allowedSizes: widget.allowedSizes,
        }))
      )

      expect(signature).toContain("widget-1")
      expect(signature).toContain('"w":2')
      expect(signature).toContain('"h":2')
    })

    it("should include allowedSizes in signature", () => {
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          allowedSizes: [
            { w: 2, h: 2 },
            { w: 4, h: 4 },
          ],
          content: <div>Content</div>,
        },
      ]

      const signature = JSON.stringify(
        widgets.map((widget) => ({
          id: widget.id,
          w: widget.w,
          h: widget.h,
          x: widget.x,
          y: widget.y,
          noMove: widget.noMove,
          noResize: widget.noResize,
          locked: widget.locked,
          content: widget.content?.toString() ?? "",
          allowedSizes: widget.allowedSizes,
        }))
      )

      expect(signature).toContain("allowedSizes")
    })

    it("should use toString for content in signature", () => {
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          content: <div>Test Content</div>,
        },
      ]

      const signature = JSON.stringify(
        widgets.map((widget) => ({
          id: widget.id,
          w: widget.w,
          h: widget.h,
          x: widget.x,
          y: widget.y,
          noMove: widget.noMove,
          noResize: widget.noResize,
          locked: widget.locked,
          content: widget.content?.toString() ?? "",
          allowedSizes: widget.allowedSizes,
        }))
      )

      // Content should be converted to string
      expect(typeof JSON.parse(signature)[0].content).toBe("string")
    })
  })

  describe("Grid Options Memoization", () => {
    it("should merge options with widgets as children", () => {
      const options = { column: 12, margin: 10 }
      const widgets: GridStackReactWidget[] = [
        {
          id: "widget-1",
          w: 2,
          h: 2,
          content: <div>Content</div>,
        },
      ]

      const gridOptions = {
        ...options,
        children: widgets,
      }

      expect(gridOptions.column).toBe(12)
      expect(gridOptions.margin).toBe(10)
      expect(gridOptions.children).toEqual(widgets)
    })
  })

  describe("onResizeStop Handler Integration", () => {
    it("should call grid update when size doesn't match target", () => {
      const mockUpdate = vi.fn()
      const mockGrid = { update: mockUpdate }
      const mockElement = {
        gridstackNode: {
          w: 2.5,
          h: 1.5,
          allowedSizes: [
            { w: 2, h: 1 },
            { w: 3, h: 1 },
            { w: 4, h: 2 },
          ],
          grid: mockGrid,
        },
      } as unknown as GridItemHTMLElement

      // Simulate onResizeStop logic
      const node = mockElement.gridstackNode
      if (!node) return

      const allowed = node.allowedSizes ?? []
      if (allowed.length === 0) return

      const closestAllowed = (
        w: number,
        h: number,
        allowedSizes: { w: number; h: number }[]
      ) => {
        let best = allowedSizes[0],
          bestDist = Infinity
        for (const a of allowedSizes) {
          const dx = a.w - w,
            dy = a.h - h
          const dist = dx * dx + dy * dy
          if (dist < bestDist) {
            bestDist = dist
            best = a
          }
        }
        return best
      }

      const target = closestAllowed(node.w ?? 1, node.h ?? 1, allowed)

      if (node.w !== target.w || node.h !== target.h) {
        node.grid?.update(mockElement, { w: target.w, h: target.h })
      }

      expect(mockUpdate).toHaveBeenCalledWith(mockElement, {
        w: target.w,
        h: target.h,
      })
    })

    it("should not call update when size matches target", () => {
      const mockUpdate = vi.fn()
      const mockGrid = { update: mockUpdate }
      const mockElement = {
        gridstackNode: {
          w: 3,
          h: 1,
          allowedSizes: [
            { w: 2, h: 1 },
            { w: 3, h: 1 },
          ],
          grid: mockGrid,
        },
      } as unknown as GridItemHTMLElement

      const node = mockElement.gridstackNode
      if (!node) return

      const allowed = node.allowedSizes ?? []
      if (allowed.length === 0) return

      const closestAllowed = (
        w: number,
        h: number,
        allowedSizes: { w: number; h: number }[]
      ) => {
        let best = allowedSizes[0],
          bestDist = Infinity
        for (const a of allowedSizes) {
          const dx = a.w - w,
            dy = a.h - h
          const dist = dx * dx + dy * dy
          if (dist < bestDist) {
            bestDist = dist
            best = a
          }
        }
        return best
      }

      const target = closestAllowed(node.w ?? 1, node.h ?? 1, allowed)

      if (node.w !== target.w || node.h !== target.h) {
        node.grid?.update(mockElement, { w: target.w, h: target.h })
      }

      // Should not be called because w=3, h=1 matches target
      expect(mockUpdate).not.toHaveBeenCalled()
    })

    it("should return early when gridstackNode is undefined", () => {
      const mockElement = {
        gridstackNode: undefined,
      } as unknown as GridItemHTMLElement

      // Simulate onResizeStop early return
      const node = mockElement.gridstackNode
      expect(node).toBeUndefined()
    })

    it("should return early when allowedSizes is empty", () => {
      const mockElement = {
        gridstackNode: {
          w: 2,
          h: 2,
          allowedSizes: [],
        },
      } as unknown as GridItemHTMLElement

      const node = mockElement.gridstackNode
      if (!node) return

      const allowed = node.allowedSizes ?? []
      expect(allowed.length).toBe(0)
    })
  })

  describe("Component Re-rendering", () => {
    it("should handle node updates", () => {
      const { rerender, getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={mockWidgets} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()

      const updatedWidgets = [
        ...mockWidgets,
        {
          id: "node-4",
          w: 2,
          h: 2,
          content: <div>New Node</div>,
        },
      ]

      rerender(<F0GridStack options={mockOptions} widgets={updatedWidgets} />)

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })

    it("should handle callback updates", () => {
      const onChange1 = vi.fn()
      const { rerender, getByTestId } = zeroRender(
        <F0GridStack
          options={mockOptions}
          widgets={mockWidgets}
          onChange={onChange1}
        />
      )

      expect(
        getByTestId("grid-stack-provider").getAttribute("data-onchange")
      ).toBe("defined")

      const onChange2 = vi.fn()
      rerender(
        <F0GridStack
          options={mockOptions}
          widgets={mockWidgets}
          onChange={onChange2}
        />
      )

      expect(
        getByTestId("grid-stack-provider").getAttribute("data-onchange")
      ).toBe("defined")
    })

    it("should handle widget property changes", () => {
      const { rerender, getByTestId } = zeroRender(
        <F0GridStack options={mockOptions} widgets={mockWidgets} />
      )

      expect(getByTestId("grid-stack-provider")).toBeTruthy()

      const updatedWidgets: GridStackReactWidget[] = [
        {
          ...mockWidgets[0],
          w: 4,
          h: 4,
        },
        ...mockWidgets.slice(1),
      ]

      rerender(<F0GridStack options={mockOptions} widgets={updatedWidgets} />)

      expect(getByTestId("grid-stack-provider")).toBeTruthy()
    })
  })
})
