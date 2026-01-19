import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { F1SearchBox } from "@/experimental/Forms/Fields/F1SearchBox"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { LayoutGroup, Reorder } from "motion/react"
import {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { DragProvider } from "./DragContext"
import { Item } from "./Item"
import { ItemSectionHeader } from "./ItemSectionHeader"
import { IdStructure, TOCItem, TOCItemAction, TOCProps } from "./types"
import { filterTree, findExpandedPath } from "./utils"
import { experimentalComponent } from "@/lib/experimental"

function renderTOCItem(
  item: TOCItem,
  sortable: boolean,
  depth: number,
  activeItem?: string,
  collapsible?: boolean,
  hideChildrenCounter?: boolean,
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
      hideChildrenCounter={hideChildrenCounter}
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
                depth + 1,
                activeItem,
                collapsible,
                hideChildrenCounter,
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
              depth + 1,
              activeItem,
              collapsible,
              hideChildrenCounter,
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
  showSearchBox = false,
  searchPlaceholder,
  onReorder,
  hideChildrenCounter = false,
  scrollable = true,
}: TOCProps) {
  const i18n = useI18n()

  const [searchValue, setSearchValue] = useState("")

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
  }

  const filteredItems = useMemo(() => {
    return filterTree(items, searchValue)
  }, [items, searchValue])

  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    findExpandedPath(items, activeItem)
  )
  const [sortableItems, setSortableItems] = useState<TOCItem[]>(items)

  useEffect(() => {
    setSortableItems(items)
  }, [items])

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

  const filteredSortableItems = useMemo(() => {
    return filterTree(sortableItems, searchValue)
  }, [sortableItems, searchValue])

  return (
    <nav
      className={cn(
        "w-[248px]",
        scrollable ? "overflow-y-auto" : "overflow-hidden",
        className
      )}
      aria-label={title}
      ref={containerRef}
    >
      {(title || showSearchBox) && (
        <div
          className={cn(
            "bg-f1-background pb-2 pl-5 pr-4 pt-5",
            scrollable && "sticky top-0 z-10"
          )}
        >
          {showSearchBox && (
            <div className="mb-4">
              <F1SearchBox
                placeholder={searchPlaceholder ?? i18n.toc.search}
                onChange={handleSearchChange}
                value={searchValue}
                clearable
              />
            </div>
          )}

          {title && (
            <OneEllipsis
              lines={1}
              tag="h2"
              className="text-[14px] font-medium text-f1-foreground-secondary"
            >
              {title}
            </OneEllipsis>
          )}
        </div>
      )}

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
            {filteredSortableItems.map((item) =>
              renderTOCItem(
                item,
                sortable,
                0,
                activeItem,
                collapsible,
                hideChildrenCounter,
                expandedItems,
                handleToggleExpanded,
                handleUpdateItem
              )
            )}
          </Reorder.Group>
        ) : (
          filteredItems.map((item) =>
            renderTOCItem(
              item,
              sortable,
              0,
              activeItem,
              collapsible,
              hideChildrenCounter,
              expandedItems,
              handleToggleExpanded,
              handleUpdateItem
            )
          )
        )}
      </div>
    </nav>
  )
}

function _F0TableOfContent(props: TOCProps) {
  return (
    <DragProvider>
      <LayoutGroup id="table-of-contents">
        <TOCContent {...props} />
      </LayoutGroup>
    </DragProvider>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0TableOfContent = experimentalComponent(
  "F0TableOfContent",
  _F0TableOfContent
)

export { Item, ItemSectionHeader }
export type { TOCItem, TOCItemAction, TOCProps }
