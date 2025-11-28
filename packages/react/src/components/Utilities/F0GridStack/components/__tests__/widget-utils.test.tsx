import type { GridStackWidget } from "gridstack"
import { beforeEach, describe, expect, it, vi } from "vitest"
import type { GridStackReactWidget } from "../../F0GridStack"
import {
  convertWidgetForGridStack,
  convertWidgetRecursive,
} from "../widget-utils"

describe("widget-utils", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("convertWidgetForGridStack", () => {
    it("should convert React content to function that returns empty div", () => {
      const mockCreateElement = vi.spyOn(document, "createElement")
      const mockDiv = document.createElement("div")
      mockCreateElement.mockReturnValue(mockDiv)

      const widget: GridStackReactWidget = {
        id: "test-widget",
        w: 2,
        h: 2,
        x: 0,
        y: 0,
        content: <div>Test Content</div>,
      }

      const result = convertWidgetForGridStack(widget)

      expect(result.content).toBeInstanceOf(Function)
      expect(result.id).toBe("test-widget")
      expect(result.w).toBe(2)
      expect(result.h).toBe(2)
      expect(result.x).toBe(0)
      expect(result.y).toBe(0)

      // Call the content function
      const contentResult = (result.content as () => HTMLElement)()
      expect(contentResult).toBe(mockDiv)
      expect(mockCreateElement).toHaveBeenCalledWith("div")
    })

    it("should preserve all widget properties", () => {
      const widget: GridStackReactWidget = {
        id: "test-widget",
        w: 3,
        h: 4,
        x: 1,
        y: 2,
        noMove: true,
        noResize: false,
        locked: true,
        allowedSizes: [
          { w: 2, h: 2 },
          { w: 3, h: 4 },
        ],
        meta: { title: "Test Widget" },
        content: <div>Content</div>,
      }

      const result = convertWidgetForGridStack(widget)

      expect(result.id).toBe("test-widget")
      expect(result.w).toBe(3)
      expect(result.h).toBe(4)
      expect(result.x).toBe(1)
      expect(result.y).toBe(2)
      expect(result.noMove).toBe(true)
      expect(result.noResize).toBe(false)
      expect(result.locked).toBe(true)
      expect(
        (result as GridStackWidget & { allowedSizes?: unknown }).allowedSizes
      ).toEqual([
        { w: 2, h: 2 },
        { w: 3, h: 4 },
      ])
      expect((result as GridStackWidget & { meta?: unknown }).meta).toEqual({
        title: "Test Widget",
      })
      expect(result.content).toBeInstanceOf(Function)
    })

    it("should handle widget without content", () => {
      const widget: GridStackReactWidget = {
        id: "test-widget",
        w: 1,
        h: 1,
      }

      const result = convertWidgetForGridStack(widget)

      expect(result.id).toBe("test-widget")
      expect(result.w).toBe(1)
      expect(result.h).toBe(1)
      expect(result.content).toBeUndefined()
    })

    it("should handle widget with undefined content", () => {
      const widget: GridStackReactWidget = {
        id: "test-widget",
        w: 1,
        h: 1,
        content: undefined,
      }

      const result = convertWidgetForGridStack(widget)

      expect(result.id).toBe("test-widget")
      expect(result.content).toBeUndefined()
    })
  })

  describe("convertWidgetRecursive", () => {
    it("should convert flat widget without sub-grid", () => {
      const mockCreateElement = vi.spyOn(document, "createElement")
      const mockDiv = document.createElement("div")
      mockCreateElement.mockReturnValue(mockDiv)

      const widget: GridStackReactWidget = {
        id: "flat-widget",
        w: 2,
        h: 2,
        content: <div>Flat Content</div>,
      }

      const result = convertWidgetRecursive(widget)

      expect(result.id).toBe("flat-widget")
      expect(result.w).toBe(2)
      expect(result.h).toBe(2)
      expect(result.content).toBeInstanceOf(Function)
      expect(result.subGridOpts).toBeUndefined()
    })

    it("should convert widget with nested sub-grid", () => {
      const mockCreateElement = vi.spyOn(document, "createElement")
      const mockDiv = document.createElement("div")
      mockCreateElement.mockReturnValue(mockDiv)

      const widget: GridStackReactWidget = {
        id: "parent-widget",
        w: 4,
        h: 4,
        content: <div>Parent Content</div>,
        subGridOpts: {
          column: 2,
          children: [
            {
              id: "child-1",
              w: 1,
              h: 1,
              content: <div>Child 1</div>,
            },
            {
              id: "child-2",
              w: 1,
              h: 1,
              content: <div>Child 2</div>,
            },
          ],
        },
      }

      const result = convertWidgetRecursive(widget)

      expect(result.id).toBe("parent-widget")
      expect(result.w).toBe(4)
      expect(result.h).toBe(4)
      expect(result.content).toBeInstanceOf(Function)
      expect(result.subGridOpts).toBeDefined()
      expect(result.subGridOpts?.column).toBe(2)
      expect(result.subGridOpts?.children).toHaveLength(2)

      const child1 = result.subGridOpts?.children?.[0] as GridStackWidget
      expect(child1.id).toBe("child-1")
      expect(child1.w).toBe(1)
      expect(child1.h).toBe(1)
      expect(child1.content).toBeInstanceOf(Function)

      const child2 = result.subGridOpts?.children?.[1] as GridStackWidget
      expect(child2.id).toBe("child-2")
      expect(child2.w).toBe(1)
      expect(child2.h).toBe(1)
      expect(child2.content).toBeInstanceOf(Function)
    })

    it("should convert widget with deep nested sub-grids", () => {
      const mockCreateElement = vi.spyOn(document, "createElement")
      const mockDiv = document.createElement("div")
      mockCreateElement.mockReturnValue(mockDiv)

      const widget: GridStackReactWidget = {
        id: "level-1",
        w: 6,
        h: 6,
        content: <div>Level 1</div>,
        subGridOpts: {
          column: 3,
          children: [
            {
              id: "level-2",
              w: 2,
              h: 2,
              content: <div>Level 2</div>,
              subGridOpts: {
                column: 2,
                children: [
                  {
                    id: "level-3",
                    w: 1,
                    h: 1,
                    content: <div>Level 3</div>,
                  },
                ],
              },
            },
          ],
        },
      }

      const result = convertWidgetRecursive(widget)

      expect(result.id).toBe("level-1")
      expect(result.subGridOpts?.children).toHaveLength(1)

      const level2 = result.subGridOpts?.children?.[0] as GridStackWidget & {
        subGridOpts?: { children?: GridStackWidget[] }
      }
      expect(level2.id).toBe("level-2")
      expect(level2.subGridOpts).toBeDefined()
      expect(level2.subGridOpts?.children).toHaveLength(1)

      const level3 = level2.subGridOpts?.children?.[0] as GridStackWidget
      expect(level3.id).toBe("level-3")
      expect(level3.w).toBe(1)
      expect(level3.h).toBe(1)
      expect(level3.content).toBeInstanceOf(Function)
    })

    it("should preserve subGridOpts properties", () => {
      const mockCreateElement = vi.spyOn(document, "createElement")
      const mockDiv = document.createElement("div")
      mockCreateElement.mockReturnValue(mockDiv)

      const widget: GridStackReactWidget = {
        id: "widget-with-opts",
        w: 4,
        h: 4,
        content: <div>Content</div>,
        subGridOpts: {
          column: 4,
          row: 4,
          margin: 5,
          children: [
            {
              id: "child",
              w: 2,
              h: 2,
              content: <div>Child</div>,
            },
          ],
        },
      }

      const result = convertWidgetRecursive(widget)

      expect(result.subGridOpts?.column).toBe(4)
      expect(result.subGridOpts?.row).toBe(4)
      expect(result.subGridOpts?.margin).toBe(5)
      expect(result.subGridOpts?.children).toHaveLength(1)
    })

    it("should handle multiple levels of nesting", () => {
      const mockCreateElement = vi.spyOn(document, "createElement")
      const mockDiv = document.createElement("div")
      mockCreateElement.mockReturnValue(mockDiv)

      const widget: GridStackReactWidget = {
        id: "root",
        w: 8,
        h: 8,
        content: <div>Root</div>,
        subGridOpts: {
          column: 4,
          children: [
            {
              id: "middle-1",
              w: 2,
              h: 2,
              content: <div>Middle 1</div>,
              subGridOpts: {
                column: 2,
                children: [
                  {
                    id: "leaf-1",
                    w: 1,
                    h: 1,
                    content: <div>Leaf 1</div>,
                  },
                ],
              },
            },
            {
              id: "middle-2",
              w: 2,
              h: 2,
              content: <div>Middle 2</div>,
              subGridOpts: {
                column: 2,
                children: [
                  {
                    id: "leaf-2",
                    w: 1,
                    h: 1,
                    content: <div>Leaf 2</div>,
                  },
                ],
              },
            },
          ],
        },
      }

      const result = convertWidgetRecursive(widget)

      expect(result.subGridOpts?.children).toHaveLength(2)

      const middle1 = result.subGridOpts?.children?.[0] as GridStackWidget & {
        subGridOpts?: { children?: GridStackWidget[] }
      }
      const middle2 = result.subGridOpts?.children?.[1] as GridStackWidget & {
        subGridOpts?: { children?: GridStackWidget[] }
      }

      expect(middle1.id).toBe("middle-1")
      expect(middle1.subGridOpts?.children).toHaveLength(1)
      expect((middle1.subGridOpts?.children?.[0] as GridStackWidget).id).toBe(
        "leaf-1"
      )

      expect(middle2.id).toBe("middle-2")
      expect(middle2.subGridOpts?.children).toHaveLength(1)
      expect((middle2.subGridOpts?.children?.[0] as GridStackWidget).id).toBe(
        "leaf-2"
      )
    })

    it("should handle empty sub-grid children array", () => {
      const widget: GridStackReactWidget = {
        id: "widget-empty-children",
        w: 2,
        h: 2,
        content: <div>Content</div>,
        subGridOpts: {
          column: 2,
          children: [],
        },
      }

      const result = convertWidgetRecursive(widget)

      expect(result.subGridOpts?.children).toEqual([])
    })
  })
})
