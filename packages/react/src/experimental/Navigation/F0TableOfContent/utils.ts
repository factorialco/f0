import { TOCItem } from "./types"

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
