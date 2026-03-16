import { describe, expect, it } from "vitest"

import type { TOCItem } from "../types"

import {
  calculateAdjustedIndex,
  convertToIds,
  filterTree,
  findExpandedPath,
  findItemInTree,
  insertItemInTree,
  removeItemFromTree,
  wouldCreateCycle,
} from "../utils"

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

// Shared tree fixture for tree manipulation tests
const treeFixture: TOCItem[] = [
  {
    id: "module-1",
    label: "Module 1",
    children: [
      { id: "block-1a", label: "Block 1A" },
      { id: "block-1b", label: "Block 1B" },
    ],
  },
  {
    id: "module-2",
    label: "Module 2",
    children: [{ id: "block-2a", label: "Block 2A" }],
  },
  {
    id: "module-3",
    label: "Module 3",
    children: [],
  },
  {
    id: "standalone",
    label: "Standalone Item",
  },
]

describe("findItemInTree", () => {
  it("should find a root-level item", () => {
    const result = findItemInTree(treeFixture, "module-1")
    expect(result).not.toBeNull()
    expect(result!.item.id).toBe("module-1")
    expect(result!.parentPath).toEqual([])
  })

  it("should find a nested item and return its parent path", () => {
    const result = findItemInTree(treeFixture, "block-1a")
    expect(result).not.toBeNull()
    expect(result!.item.id).toBe("block-1a")
    expect(result!.parentPath).toEqual(["module-1"])
  })

  it("should return null for a non-existent item", () => {
    const result = findItemInTree(treeFixture, "non-existent")
    expect(result).toBeNull()
  })

  it("should find an item without children (leaf at root)", () => {
    const result = findItemInTree(treeFixture, "standalone")
    expect(result).not.toBeNull()
    expect(result!.item.id).toBe("standalone")
    expect(result!.parentPath).toEqual([])
  })
})

describe("removeItemFromTree", () => {
  it("should remove a root-level item", () => {
    const result = removeItemFromTree(treeFixture, "standalone")
    expect(result).toHaveLength(3)
    expect(result.find((i) => i.id === "standalone")).toBeUndefined()
  })

  it("should remove a nested item from its parent", () => {
    const result = removeItemFromTree(treeFixture, "block-1a")
    const module1 = result.find((i) => i.id === "module-1")
    expect(module1).toBeDefined()
    expect(module1!.children).toHaveLength(1)
    expect(module1!.children![0].id).toBe("block-1b")
  })

  it("should preserve the parent as a section when removing its last child", () => {
    // This is the critical bug fix test: removing the only child should NOT
    // convert the parent from a section (children: []) to a leaf (children: undefined)
    const result = removeItemFromTree(treeFixture, "block-2a")
    const module2 = result.find((i) => i.id === "module-2")
    expect(module2).toBeDefined()
    expect(module2!.children).toBeDefined()
    expect(module2!.children).toEqual([])
  })

  it("should not modify the tree when item is not found", () => {
    const result = removeItemFromTree(treeFixture, "non-existent")
    expect(result).toHaveLength(treeFixture.length)
    expect(result.map((i) => i.id)).toEqual(treeFixture.map((i) => i.id))
  })

  it("should preserve other items and their structure", () => {
    const result = removeItemFromTree(treeFixture, "block-1a")
    // module-2, module-3, standalone should be unchanged
    expect(result.find((i) => i.id === "module-2")!.children).toHaveLength(1)
    expect(result.find((i) => i.id === "module-3")!.children).toEqual([])
    expect(result.find((i) => i.id === "standalone")).toBeDefined()
  })

  it("should remove a section with its children", () => {
    const result = removeItemFromTree(treeFixture, "module-1")
    expect(result).toHaveLength(3)
    expect(result.find((i) => i.id === "module-1")).toBeUndefined()
    // Children block-1a and block-1b should also be gone
    expect(findItemInTree(result, "block-1a")).toBeNull()
    expect(findItemInTree(result, "block-1b")).toBeNull()
  })
})

describe("insertItemInTree", () => {
  const itemToInsert: TOCItem = { id: "new-item", label: "New Item" }

  it("should insert at root level when targetParentId is null", () => {
    const result = insertItemInTree(treeFixture, itemToInsert, null, 0)
    expect(result[0].id).toBe("new-item")
    expect(result).toHaveLength(treeFixture.length + 1)
  })

  it("should insert at the end of root level", () => {
    const result = insertItemInTree(
      treeFixture,
      itemToInsert,
      null,
      treeFixture.length
    )
    expect(result[result.length - 1].id).toBe("new-item")
  })

  it("should insert as a child of an existing parent", () => {
    const result = insertItemInTree(treeFixture, itemToInsert, "module-1", 0)
    const module1 = result.find((i) => i.id === "module-1")
    expect(module1!.children![0].id).toBe("new-item")
    expect(module1!.children).toHaveLength(3)
  })

  it("should insert into a parent with empty children", () => {
    const result = insertItemInTree(treeFixture, itemToInsert, "module-3", 0)
    const module3 = result.find((i) => i.id === "module-3")
    expect(module3!.children).toHaveLength(1)
    expect(module3!.children![0].id).toBe("new-item")
  })

  it("should insert at a specific index within parent children", () => {
    const result = insertItemInTree(treeFixture, itemToInsert, "module-1", 1)
    const module1 = result.find((i) => i.id === "module-1")
    expect(module1!.children![0].id).toBe("block-1a")
    expect(module1!.children![1].id).toBe("new-item")
    expect(module1!.children![2].id).toBe("block-1b")
  })

  it("should fallback to root insertion when targetParentId does not exist", () => {
    // This tests the safety guard: if the parent is not found, the item
    // should still be inserted (at root level) instead of being silently lost
    const result = insertItemInTree(
      treeFixture,
      itemToInsert,
      "non-existent-parent",
      0
    )
    expect(result).toHaveLength(treeFixture.length + 1)
    expect(result[0].id).toBe("new-item")
  })
})

describe("removeItemFromTree + insertItemInTree (move operation)", () => {
  it("should move an item between modules without data loss", () => {
    // Move block-1a from module-1 to module-2
    const itemData = findItemInTree(treeFixture, "block-1a")
    expect(itemData).not.toBeNull()

    let result = removeItemFromTree(treeFixture, "block-1a")
    result = insertItemInTree(result, itemData!.item, "module-2", 1)

    // block-1a should be in module-2 now
    const module2 = result.find((i) => i.id === "module-2")
    expect(module2!.children).toHaveLength(2)
    expect(module2!.children![1].id).toBe("block-1a")

    // module-1 should still have block-1b
    const module1 = result.find((i) => i.id === "module-1")
    expect(module1!.children).toHaveLength(1)
    expect(module1!.children![0].id).toBe("block-1b")
  })

  it("should move the last child of a module to another module without losing the item", () => {
    // This is THE critical test for the reported bug:
    // Moving block-2a (the only child of module-2) to module-1
    const itemData = findItemInTree(treeFixture, "block-2a")
    expect(itemData).not.toBeNull()

    let result = removeItemFromTree(treeFixture, "block-2a")

    // After removal, module-2 should still be a section (children: [])
    const module2AfterRemove = result.find((i) => i.id === "module-2")
    expect(module2AfterRemove!.children).toBeDefined()
    expect(module2AfterRemove!.children).toEqual([])

    // Insert into module-1
    result = insertItemInTree(result, itemData!.item, "module-1", 2)

    // block-2a should now be in module-1
    const module1 = result.find((i) => i.id === "module-1")
    expect(module1!.children).toHaveLength(3)
    expect(module1!.children![2].id).toBe("block-2a")

    // Total items should be preserved
    expect(findItemInTree(result, "block-2a")).not.toBeNull()
  })

  it("should move an item to root level", () => {
    const itemData = findItemInTree(treeFixture, "block-1a")
    expect(itemData).not.toBeNull()

    let result = removeItemFromTree(treeFixture, "block-1a")
    result = insertItemInTree(result, itemData!.item, null, 0)

    expect(result[0].id).toBe("block-1a")
    const module1 = result.find((i) => i.id === "module-1")
    expect(module1!.children).toHaveLength(1)
    expect(module1!.children![0].id).toBe("block-1b")
  })
})

describe("wouldCreateCycle", () => {
  it("should return false when target is root level", () => {
    expect(wouldCreateCycle(treeFixture, "module-1", null)).toBe(false)
  })

  it("should return true when target is the item itself", () => {
    expect(wouldCreateCycle(treeFixture, "module-1", "module-1")).toBe(true)
  })

  it("should return true when target is a descendant of the item", () => {
    expect(wouldCreateCycle(treeFixture, "module-1", "block-1a")).toBe(true)
  })

  it("should return false when target is not a descendant", () => {
    expect(wouldCreateCycle(treeFixture, "module-1", "module-2")).toBe(false)
  })

  it("should return false for leaf items", () => {
    expect(wouldCreateCycle(treeFixture, "block-1a", "module-2")).toBe(false)
  })

  it("should return false when item does not exist", () => {
    expect(wouldCreateCycle(treeFixture, "non-existent", "module-1")).toBe(
      false
    )
  })
})

describe("convertToIds", () => {
  it("should convert a tree to ID-only structure", () => {
    const result = convertToIds(treeFixture)
    expect(result).toEqual([
      {
        id: "module-1",
        children: [{ id: "block-1a" }, { id: "block-1b" }],
      },
      {
        id: "module-2",
        children: [{ id: "block-2a" }],
      },
      {
        id: "module-3",
        children: [],
      },
      {
        id: "standalone",
      },
    ])
  })

  it("should handle an empty array", () => {
    expect(convertToIds([])).toEqual([])
  })

  it("should not include children key for items without children", () => {
    const result = convertToIds([{ id: "leaf", label: "Leaf" }])
    expect(result[0]).toEqual({ id: "leaf" })
    expect("children" in result[0]).toBe(false)
  })
})

describe("calculateAdjustedIndex", () => {
  it("should return same index when item is not found", () => {
    expect(calculateAdjustedIndex(treeFixture, "non-existent", null, 2)).toBe(2)
  })

  it("should adjust index when moving item down within the same parent", () => {
    // block-1a is at index 0 in module-1, moving to index 2 in module-1
    // After removal, the target index should be adjusted to 1
    const result = calculateAdjustedIndex(
      treeFixture,
      "block-1a",
      "module-1",
      2
    )
    expect(result).toBe(1)
  })

  it("should not adjust index when moving item up within the same parent", () => {
    // block-1b is at index 1 in module-1, moving to index 0 in module-1
    // No adjustment needed when moving up
    const result = calculateAdjustedIndex(
      treeFixture,
      "block-1b",
      "module-1",
      0
    )
    expect(result).toBe(0)
  })

  it("should not adjust index when moving to a different parent", () => {
    // block-1a is in module-1, moving to module-2 at index 0
    const result = calculateAdjustedIndex(
      treeFixture,
      "block-1a",
      "module-2",
      0
    )
    expect(result).toBe(0)
  })

  it("should adjust index when reordering at root level", () => {
    // module-1 is at index 0 at root, moving to index 3
    const result = calculateAdjustedIndex(treeFixture, "module-1", null, 3)
    expect(result).toBe(2)
  })

  it("should not adjust index when moving root item up", () => {
    // standalone is at index 3 at root, moving to index 0
    const result = calculateAdjustedIndex(treeFixture, "standalone", null, 0)
    expect(result).toBe(0)
  })
})
