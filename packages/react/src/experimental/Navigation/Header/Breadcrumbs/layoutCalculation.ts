import { BreadcrumbItemType, BreadcrumbState } from "./types"

const COLLAPSED_ITEM_WIDTH = 50
const AVERAGE_ITEM_WIDTH = 120
const RIGHT_PADDING = 8

/**
 * Calculates how many breadcrumb items can be displayed based on container width.
 * All widths are in pixels.
 *
 * @param containerWidth - Width of the container
 * @param breadcrumbWidths - Widths of individual breadcrumb items
 * @returns Number of items that can be displayed (minimum 2)
 */
function calculateVisibleCount(containerWidth: number, breadcrumbWidths: number[]): number {
  const totalItems = breadcrumbWidths.length
  if (totalItems <= 2) return totalItems

  const firstItemWidth = breadcrumbWidths[0]
  let availableWidth = containerWidth - firstItemWidth - RIGHT_PADDING
  let lastItemAddedIndex = 0
  let count = 1 // the first item is always shown

  // Calculate how many items can fit from the end
  for (let i = totalItems - 1; i > 0; i--) {
    const itemWidth = breadcrumbWidths[i]
    if (availableWidth < itemWidth) {
      break
    }
    availableWidth -= itemWidth
    lastItemAddedIndex = i
    count++
  }

  // Adjust for the collapsed item if we can't show all items
  if (count < totalItems) {
    availableWidth -= COLLAPSED_ITEM_WIDTH
    while (availableWidth < 0 && count > 1) {
      availableWidth += breadcrumbWidths[lastItemAddedIndex]
      lastItemAddedIndex++
      count--
    }
  }

  // Ensure we show at least 2 items when possible
  return Math.max(2, count)
}

/**
 * Calculate minimal width of the breadcrumb items, when fully collapsed.
 * All widths are in pixels
 *
 * @param breadcrumbWidths widths of all individual breadcrumb items
 * @returns minimal width or undefined if it cannot be determined
 */
function calcMinWidth(breadcrumbWidths: number[] = []): number | undefined {
  switch (breadcrumbWidths.length) {
    case 0:
      return undefined
    case 1:
      return breadcrumbWidths[0] + RIGHT_PADDING
    default:
      return (
        breadcrumbWidths[0] +
        COLLAPSED_ITEM_WIDTH +
        breadcrumbWidths[breadcrumbWidths.length - 1] +
        RIGHT_PADDING
      )
  }
}

function estimateMinWidth(breadcrumbCount: number, hasCollapsedItem: boolean): number {
  return (
    AVERAGE_ITEM_WIDTH * breadcrumbCount +
    (hasCollapsedItem ? COLLAPSED_ITEM_WIDTH : 0) +
    RIGHT_PADDING
  )
}

/**
 * Calculate the breadcrumb state
 * based on container width and breadcrumb items
 */
export function calculateBreadcrumbState(
  containerWidth: number | null,
  breadcrumbs: BreadcrumbItemType[],
  breadcrumbElements: HTMLElement[] = []
): BreadcrumbState {
  if (!containerWidth) {
    const minimalBreadcrumbCount = Math.min(breadcrumbs.length, 2)
    return {
      visibleCount: minimalBreadcrumbCount,
      headItem: breadcrumbs[0] ?? null,
      tailItems: breadcrumbs.slice(breadcrumbs.length - 1),
      collapsedItems: breadcrumbs.slice(1, breadcrumbs.length - 1),
      isOnly: breadcrumbs.length === 1,
      minWidth: estimateMinWidth(minimalBreadcrumbCount, breadcrumbs.length > 2),
    }
  }

  const isSimpleLayout = breadcrumbs.length <= 2
  const breadcrumbWidths = breadcrumbElements.map((el) => el.clientWidth)

  if (isSimpleLayout) {
    return {
      visibleCount: breadcrumbs.length,
      headItem: breadcrumbs[0] ?? null,
      tailItems: breadcrumbs.slice(1),
      collapsedItems: [],
      isOnly: breadcrumbs.length === 1,
      minWidth: calcMinWidth(breadcrumbWidths),
    }
  }

  const visibleCount = calculateVisibleCount(containerWidth, breadcrumbWidths)

  return {
    visibleCount,
    headItem: breadcrumbs[0] || null,
    tailItems: breadcrumbs.slice(Math.max(1, breadcrumbs.length - (visibleCount - 1))),
    collapsedItems: breadcrumbs.slice(1, breadcrumbs.length - (visibleCount - 1)),
    isOnly: breadcrumbs.length === 1,
    minWidth: calcMinWidth(breadcrumbWidths),
  }
}
