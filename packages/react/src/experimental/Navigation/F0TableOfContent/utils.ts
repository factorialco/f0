import { IdStructure, TOCItem } from "./types"

export function findExpandedPath(
  items: TOCItem[],
  activeItemId?: string
): Set<string> {
  const expandedIds = new Set<string>()

  if (!activeItemId) return expandedIds

  function findPath(
    items: TOCItem[],
    targetId: string,
    currentPath: string[] = []
  ): boolean {
    for (const item of items) {
      if (item.id === targetId) {
        // Found the target, add all parents to expanded set
        currentPath.forEach((id) => expandedIds.add(id))
        return true
      }

      const newPath = [...currentPath, item.id]

      if (item.children && findPath(item.children, targetId, newPath)) {
        // Target found in children, add current item to expanded set
        expandedIds.add(item.id)
        return true
      }
    }
    return false
  }

  findPath(items, activeItemId)
  return expandedIds
}

/**
 * Search in tree and return the items that match the search query
 */
export function filterTree(items: TOCItem[], searchQuery: string): TOCItem[] {
  if (!searchQuery.trim()) {
    return items // Return all items if no search query
  }

  const query = searchQuery.toLowerCase().trim()

  function filterItem(item: TOCItem): TOCItem | null {
    // Check if current item matches
    const itemMatches = item.label.toLowerCase().includes(query)

    // Filter children recursively
    const filteredChildren = item.children
      ? (item.children.map(filterItem).filter(Boolean) as TOCItem[])
      : undefined

    // Include item if:
    // 1. The item itself matches, OR
    // 2. Any of its children match (to preserve hierarchy)
    if (itemMatches || (filteredChildren && filteredChildren.length > 0)) {
      return {
        ...item,
        children:
          filteredChildren && filteredChildren.length > 0
            ? filteredChildren
            : undefined,
      }
    }

    return null
  }

  return items.map(filterItem).filter(Boolean) as TOCItem[]
}

/**
 * Find an item in the tree by ID and return its path
 */
export function findItemInTree(
  items: TOCItem[],
  itemId: string
): { item: TOCItem; parentPath: string[] } | null {
  function search(
    items: TOCItem[],
    targetId: string,
    parentPath: string[] = []
  ): { item: TOCItem; parentPath: string[] } | null {
    for (const item of items) {
      if (item.id === targetId) {
        return { item, parentPath }
      }

      if (item.children) {
        const result = search(item.children, targetId, [...parentPath, item.id])
        if (result) return result
      }
    }
    return null
  }

  return search(items, itemId)
}

/**
 * Remove an item from the tree by ID
 */
export function removeItemFromTree(
  items: TOCItem[],
  itemId: string
): TOCItem[] {
  return items
    .map((item) => {
      if (item.id === itemId) {
        return null
      }

      if (item.children) {
        const filteredChildren = removeItemFromTree(item.children, itemId)
        return {
          ...item,
          children: filteredChildren.length > 0 ? filteredChildren : undefined,
        }
      }

      return item
    })
    .filter(Boolean) as TOCItem[]
}

/**
 * Insert an item into the tree at a specific location
 */
export function insertItemInTree(
  items: TOCItem[],
  item: TOCItem,
  targetParentId: string | null,
  targetIndex: number
): TOCItem[] {
  // If targetParentId is null, insert at root level
  if (targetParentId === null) {
    const newItems = [...items]
    newItems.splice(targetIndex, 0, item)
    return newItems
  }

  // Find the parent and insert the item
  function insert(
    items: TOCItem[],
    parentId: string | null,
    targetIndex: number
  ): TOCItem[] {
    return items.map((currentItem) => {
      if (currentItem.id === parentId) {
        const children = currentItem.children || []
        const newChildren = [...children]
        newChildren.splice(targetIndex, 0, item)
        return {
          ...currentItem,
          children: newChildren,
        }
      }

      if (currentItem.children) {
        return {
          ...currentItem,
          children: insert(currentItem.children, parentId, targetIndex),
        }
      }

      return currentItem
    })
  }

  return insert(items, targetParentId, targetIndex)
}

/**
 * Check if moving an item to a target location would create a cycle
 * (e.g., moving a parent into its own child)
 */
export function wouldCreateCycle(
  items: TOCItem[],
  itemId: string,
  targetParentId: string | null
): boolean {
  // If target is root level, no cycle possible
  if (targetParentId === null) return false

  // If target is the item itself, cycle
  if (targetParentId === itemId) return true

  // Check if targetParentId is a descendant of itemId
  const itemData = findItemInTree(items, itemId)
  if (!itemData) return false

  function isDescendant(
    items: TOCItem[],
    ancestorId: string,
    descendantId: string
  ): boolean {
    for (const item of items) {
      if (item.id === descendantId) {
        return true
      }
      if (item.children) {
        if (isDescendant(item.children, ancestorId, descendantId)) {
          return true
        }
      }
    }
    return false
  }

  // Check if targetParentId is a descendant of itemId
  const itemWithChildren = findItemInTree(items, itemId)
  if (itemWithChildren?.item.children) {
    return isDescendant(itemWithChildren.item.children, itemId, targetParentId)
  }

  return false
}

/**
 * Convert TOCItem tree to IdStructure tree (only IDs, no data)
 */
export function convertToIds(items: TOCItem[]): IdStructure[] {
  return items.map((item) => ({
    id: item.id,
    ...(item.children && { children: convertToIds(item.children) }),
  }))
}

/**
 * Update an item in the tree by ID
 */
export function updateItemInTree(
  items: TOCItem[],
  itemId: string,
  updatedItem: TOCItem
): TOCItem[] {
  return items.map((item) => {
    if (item.id === itemId) {
      return updatedItem
    }
    if (item.children) {
      return {
        ...item,
        children: updateItemInTree(item.children, itemId, updatedItem),
      }
    }
    return item
  })
}

/**
 * Calculate the adjusted target index when moving an item within the same parent
 * This accounts for the fact that removing an item shifts indices
 */
export function calculateAdjustedIndex(
  items: TOCItem[],
  itemId: string,
  targetParentId: string | null,
  targetIndex: number
): number {
  const itemData = findItemInTree(items, itemId)
  if (!itemData) return targetIndex

  let adjustedIndex = targetIndex

  if (targetParentId !== null) {
    const targetParent = findItemInTree(items, targetParentId)
    if (targetParent) {
      const sourceParentPath = itemData.parentPath
      if (
        sourceParentPath.length > 0 &&
        sourceParentPath[sourceParentPath.length - 1] === targetParentId
      ) {
        const sourceParent = findItemInTree(
          items,
          sourceParentPath[sourceParentPath.length - 1]
        )
        if (sourceParent) {
          const originalIndex = sourceParent.item.children?.findIndex(
            (c) => c.id === itemId
          )
          if (originalIndex !== undefined && originalIndex < targetIndex) {
            adjustedIndex = targetIndex - 1
          }
        }
      }
    }
  } else {
    // Moving to root level
    const sourceParentPath = itemData.parentPath
    if (sourceParentPath.length === 0) {
      // Already at root, just reordering
      const originalIndex = items.findIndex((i) => i.id === itemId)
      if (originalIndex < targetIndex) {
        adjustedIndex = targetIndex - 1
      }
    }
  }

  return adjustedIndex
}
