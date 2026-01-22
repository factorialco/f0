import { describe, expect, it } from "vitest"

import type { TOCItem } from "../types"

import { filterTree, findExpandedPath } from "../utils"

describe("filterTree", () => {
  const mockTreeData: TOCItem[] = [
    {
      id: "1",
      label: "Getting Started",
      children: [
        {
          id: "1.1",
          label: "Installation Guide",
        },
        {
          id: "1.2",
          label: "Quick Start Tutorial",
          children: [
            {
              id: "1.2.1",
              label: "Basic Setup",
            },
            {
              id: "1.2.2",
              label: "Advanced Configuration",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      label: "Components",
      children: [
        {
          id: "2.1",
          label: "Button Component",
        },
        {
          id: "2.2",
          label: "Input Component",
          children: [
            {
              id: "2.2.1",
              label: "Text Input",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      label: "API Reference",
    },
  ]

  it("should return all items when search query is empty", () => {
    const result = filterTree(mockTreeData, "")
    expect(result).toEqual(mockTreeData)
  })

  it("should return all items when search query is only whitespace", () => {
    const result = filterTree(mockTreeData, "   ")
    expect(result).toEqual(mockTreeData)
  })

  it("should filter items by exact label match", () => {
    const result = filterTree(mockTreeData, "API Reference")
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("3")
    expect(result[0].label).toBe("API Reference")
  })

  it("should filter items by partial label match (case insensitive)", () => {
    const result = filterTree(mockTreeData, "component")
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("2")
    expect(result[0].label).toBe("Components")
    expect(result[0].children).toHaveLength(2)
  })

  it("should preserve parent hierarchy when child matches", () => {
    const result = filterTree(mockTreeData, "Installation Guide")

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("1") // Parent "Getting Started"
    expect(result[0].label).toBe("Getting Started")
    expect(result[0].children).toHaveLength(1)
    expect(result[0].children![0].id).toBe("1.1")
    expect(result[0].children![0].label).toBe("Installation Guide")
  })

  it("should preserve deep hierarchy when deeply nested child matches", () => {
    const result = filterTree(mockTreeData, "Basic Setup")

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("1") // Root parent "Getting Started"
    expect(result[0].label).toBe("Getting Started")
    expect(result[0].children).toHaveLength(1)

    const quickStart = result[0].children![0]
    expect(quickStart.id).toBe("1.2") // Intermediate parent "Quick Start Tutorial"
    expect(quickStart.label).toBe("Quick Start Tutorial")
    expect(quickStart.children).toHaveLength(1)
    expect(quickStart.children![0].id).toBe("1.2.1")
    expect(quickStart.children![0].label).toBe("Basic Setup")
  })

  it("should include parent and matching children when both match", () => {
    const result = filterTree(mockTreeData, "input")

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("2") // "Components"
    expect(result[0].children).toHaveLength(1)

    const inputComponent = result[0].children![0]
    expect(inputComponent.id).toBe("2.2")
    expect(inputComponent.label).toBe("Input Component")
    expect(inputComponent.children).toHaveLength(1)
    expect(inputComponent.children![0].label).toBe("Text Input")
  })

  it("should filter multiple matching branches", () => {
    const result = filterTree(mockTreeData, "guide")

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("1") // "Getting Started"
    expect(result[0].children).toHaveLength(1)
    expect(result[0].children![0].id).toBe("1.1")
    expect(result[0].children![0].label).toBe("Installation Guide")
  })

  it("should handle case insensitive search", () => {
    const result = filterTree(mockTreeData, "BUTTON")

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("2") // "Components"
    expect(result[0].children).toHaveLength(1)
    expect(result[0].children![0].id).toBe("2.1")
    expect(result[0].children![0].label).toBe("Button Component")
  })

  it("should return empty array when no matches found", () => {
    const result = filterTree(mockTreeData, "nonexistent")
    expect(result).toEqual([])
  })

  it("should filter only matching children from parent with multiple children", () => {
    const result = filterTree(mockTreeData, "Advanced Configuration")

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("1") // "Getting Started"
    expect(result[0].children).toHaveLength(1)

    const quickStart = result[0].children![0]
    expect(quickStart.id).toBe("1.2") // "Quick Start Tutorial"
    expect(quickStart.children).toHaveLength(1) // Only matching child
    expect(quickStart.children![0].id).toBe("1.2.2")
    expect(quickStart.children![0].label).toBe("Advanced Configuration")
  })

  it("should handle partial word matches", () => {
    const result = filterTree(mockTreeData, "start")

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("1") // "Getting Started"
    expect(result[0].children).toHaveLength(1)
    expect(result[0].children![0].id).toBe("1.2") // "Quick Start Tutorial"
  })

  it("should preserve item properties when filtering", () => {
    const itemsWithProps: TOCItem[] = [
      {
        id: "test",
        label: "Test Item",
        onClick: () => {},
        disabled: true,
        icon: undefined,
        otherActions: [{ label: "Action", onClick: () => {} }],
      },
    ]

    const result = filterTree(itemsWithProps, "test")

    expect(result).toHaveLength(1)
    expect(result[0].onClick).toBeDefined()
    expect(result[0].disabled).toBe(true)
    expect(result[0].otherActions).toHaveLength(1)
  })

  it("should remove undefined children when no children match", () => {
    const result = filterTree(mockTreeData, "API Reference")

    expect(result).toHaveLength(1)
    expect(result[0].children).toBeUndefined() // No children, so children should be undefined
  })
})

describe("findExpandedPath", () => {
  const mockTreeData: TOCItem[] = [
    {
      id: "1",
      label: "Getting Started",
      children: [
        {
          id: "1.1",
          label: "Installation",
        },
        {
          id: "1.2",
          label: "Quick Start",
          children: [
            {
              id: "1.2.1",
              label: "Setup",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      label: "Components",
    },
  ]

  it("should return empty set when activeItemId is undefined", () => {
    const result = findExpandedPath(mockTreeData, undefined)
    expect(result.size).toBe(0)
  })

  it("should return empty set when activeItemId is not found", () => {
    const result = findExpandedPath(mockTreeData, "nonexistent")
    expect(result.size).toBe(0)
  })

  it("should return empty set for top-level item", () => {
    const result = findExpandedPath(mockTreeData, "2")
    expect(result.size).toBe(0)
  })

  it("should return parent id for direct child", () => {
    const result = findExpandedPath(mockTreeData, "1.1")
    expect(result.size).toBe(1)
    expect(result.has("1")).toBe(true)
  })

  it("should return all parent ids for deeply nested item", () => {
    const result = findExpandedPath(mockTreeData, "1.2.1")
    expect(result.size).toBe(2)
    expect(result.has("1")).toBe(true)
    expect(result.has("1.2")).toBe(true)
  })
})
