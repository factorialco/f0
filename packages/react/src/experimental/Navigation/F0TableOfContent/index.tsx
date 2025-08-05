import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import { LayoutGroup, Reorder } from "motion/react"
import { ReactElement, useCallback, useRef, useState } from "react"
import { DragProvider } from "./DragContext"
import { Item } from "./Item"
import { ItemSectionHeader } from "./ItemSectionHeader"
import { IdStructure, TOCItem, TOCItemAction, TOCProps } from "./types"
import { findExpandedPath } from "./utils"

function renderTOCItem(
  item: TOCItem,
  sortable: boolean,
  activeItem?: string,
  collapsible?: boolean,
  expandedItems?: Set<string>,
  onToggleExpanded?: (id: string) => void,
  onUpdateItem?: (itemId: string, updatedItem: TOCItem) => void
): ReactElement {
  const Component = item.children ? ItemSectionHeader : Item
  const isExpanded = expandedItems?.has(item.id) ?? true

  const handleChildrenReorder = (newOrder: TOCItem[]) => {
    if (onUpdateItem) {
      const updatedItem = { ...item, children: newOrder }
      onUpdateItem(item.id, updatedItem)
    }
  }

  return (
    <Component
      key={item.id}
      item={item}
      isActive={activeItem === item.id}
      collapsible={collapsible && item.children && item.children.length > 0}
      isExpanded={isExpanded}
      onToggleExpanded={onToggleExpanded}
      sortable={sortable}
    >
      {item.children &&
        (Component === ItemSectionHeader || isExpanded) &&
        (sortable ? (
          <Reorder.Group
            as="div"
            values={item.children}
            onReorder={handleChildrenReorder}
            axis="y"
            className="flex flex-col"
          >
            {item.children.map((child) =>
              renderTOCItem(
                child,
                sortable,
                activeItem,
                collapsible,
                expandedItems,
                onToggleExpanded,
                onUpdateItem
              )
            )}
          </Reorder.Group>
        ) : (
          item.children.map((child) =>
            renderTOCItem(
              child,
              sortable,
              activeItem,
              collapsible,
              expandedItems,
              onToggleExpanded,
              onUpdateItem
            )
          )
        ))}
    </Component>
  )
}

function TOCContent({
  title,
  items,
  className,
  activeItem,
  collapsible = false,
  sortable = false,
  onReorder,
}: TOCProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    findExpandedPath(items, activeItem)
  )
  const [sortableItems, setSortableItems] = useState<TOCItem[]>(items)
  const containerRef = useRef<HTMLDivElement>(null)

  const convertToIds = useCallback((items: TOCItem[]): IdStructure[] => {
    return items.map((item) => ({
      id: item.id,
      ...(item.children && { children: convertToIds(item.children) }),
    }))
  }, [])

  const handleToggleExpanded = useCallback(
    (id: string) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(id)) {
          newSet.delete(id)
        } else {
          newSet.add(id)
        }
        return newSet
      })
    },
    [setExpandedItems]
  )

  const handleSort = useCallback(
    (newOrder: TOCItem[]) => {
      setSortableItems(newOrder)
      if (onReorder) {
        onReorder(convertToIds(newOrder))
      }
    },
    [onReorder, convertToIds]
  )

  const handleUpdateItem = useCallback(
    (itemId: string, updatedItem: TOCItem) => {
      const updateItemInTree = (items: TOCItem[]): TOCItem[] => {
        return items.map((item) => {
          if (item.id === itemId) {
            return updatedItem
          }
          if (item.children) {
            return { ...item, children: updateItemInTree(item.children) }
          }
          return item
        })
      }

      const updatedItems = updateItemInTree(sortableItems)
      setSortableItems(updatedItems)

      // Notify parent with hierarchical IDs structure
      if (onReorder) {
        onReorder(convertToIds(updatedItems))
      }
    },
    [sortableItems, onReorder, convertToIds]
  )

  return (
    <nav
      className={cn(
        "flex h-full w-[248px] flex-col overflow-hidden",
        className
      )}
      aria-label={title}
      ref={containerRef}
    >
      <div className="flex-shrink-0 pb-2 pl-5 pr-4 pt-5">
        <OneEllipsis
          lines={1}
          tag="h2"
          className="text-[14px] font-medium text-f1-foreground-secondary"
        >
          {title}
        </OneEllipsis>
      </div>
      <ScrollArea className="h-full min-h-0">
        <div className="px-3 pb-2">
          {sortable ? (
            <Reorder.Group
              as="div"
              values={sortableItems}
              onReorder={handleSort}
              axis="y"
              className="flex flex-col gap-0.5"
              dragConstraints={containerRef}
            >
              {sortableItems.map((item) =>
                renderTOCItem(
                  item,
                  sortable,
                  activeItem,
                  collapsible,
                  expandedItems,
                  handleToggleExpanded,
                  handleUpdateItem
                )
              )}
            </Reorder.Group>
          ) : (
            items.map((item) =>
              renderTOCItem(
                item,
                sortable,
                activeItem,
                collapsible,
                expandedItems,
                handleToggleExpanded,
                handleUpdateItem
              )
            )
          )}
        </div>
      </ScrollArea>
    </nav>
  )
}

export function F0TableOfContent(props: TOCProps) {
  return (
    <DragProvider>
      <LayoutGroup id="table-of-contents">
        <TOCContent {...props} />
      </LayoutGroup>
    </DragProvider>
  )
}

export { Item, ItemSectionHeader }
export type { TOCItem, TOCItemAction, TOCProps }
