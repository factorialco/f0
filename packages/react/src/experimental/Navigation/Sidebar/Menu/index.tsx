import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon, IconType } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Counter } from "@/experimental/Information/Counter"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { NavigationItem } from "@/experimental/Navigation/utils"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ChevronDown, Delete, EllipsisHorizontal, MoveDown, MoveUp } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { Link, useNavigation } from "@/lib/linkHandler"
import { useI18n } from "@/lib/providers/i18n"
import { useTouchScreen } from "@/lib/useTouchScreen"
import { cn, focusRing } from "@/lib/utils"
import { Collapsible, CollapsibleContent } from "@/ui/collapsible"
import { LayoutGroup, motion, Reorder, useDragControls } from "motion/react"
import { ReactNode, RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { DragProvider, useDragContext } from "./DragContext"

export interface MenuItem extends NavigationItem {
  icon: IconType
  badge?: number
}

type FavoriteMenuItem = (
  | {
      type: "icon"
      icon: IconType
    }
  | {
      type: "avatar"
      avatar?: AvatarVariant
    }
) & {
  tooltip?: string
} & NavigationItem

export interface MenuCategory {
  id: string
  title: string
  items: MenuItem[]
  isRoot?: boolean
  isOpen?: boolean
  isSortable?: boolean
}

export interface MenuProps {
  tree: MenuCategory[]
  favorites?: FavoriteMenuItem[]
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
  onSort?: (categories: MenuCategory[]) => void
  onFavoritesChange?: (favorites: FavoriteMenuItem[]) => void
}

const MenuItemContent = ({ item, active }: { item: MenuItem; active: boolean }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1.5 font-medium text-f1-foreground">
        <F0Icon
          icon={item.icon}
          size="md"
          className={cn("transition-colors", active ? "text-f1-icon-bold" : "text-f1-icon")}
        />
        <span>{item.label}</span>
      </div>
      {item.badge && <Counter value={item.badge} size="sm" type="bold" />}
    </div>
  )
}

const MenuItem = ({ item }: { item: MenuItem }) => {
  const { isActive } = useNavigation()
  const { label: _label, icon: _icon, ...rest } = item

  const active = isActive(rest.href, { exact: rest.exactMatch })

  return (
    <Link
      {...rest}
      className={cn(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        focusRing("focus-visible:ring-inset"),
        active
          ? "bg-f1-background-secondary text-f1-foreground"
          : "hover:bg-f1-background-secondary"
      )}
    >
      <MenuItemContent item={item} active={active} />
    </Link>
  )
}

const FavoriteItem = ({
  item,
  tooltip,
  dragConstraints,
  onRemove,
  index,
  total,
  onMove,
  onReorderFinish,
  isSortable = true,
}: {
  item: FavoriteMenuItem
  tooltip?: string
  dragConstraints?: RefObject<HTMLElement>
  onRemove?: (item: FavoriteMenuItem) => void
  index: number
  total: number
  onMove?: (from: number, to: number) => void
  onReorderFinish: () => void
  isSortable?: boolean
}) => {
  const t = useI18n()

  const { isDragging, setIsDragging, draggedItemId, setDraggedItemId } = useDragContext()
  const { isActive } = useNavigation()
  const active = isActive(item.href, { exact: item.exactMatch })
  const wasDragging = useRef(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isFirst = index === 0
  const isLast = index === total - 1
  const isOnly = total === 1

  const dropdownItems = useMemo(() => {
    const items: DropdownItem[] = []

    if (!isOnly && !isFirst) {
      items.push({
        label: t.actions.moveUp,
        onClick: () => onMove?.(index, index - 1),
        icon: MoveUp,
      })
    }
    if (!isOnly && !isLast) {
      items.push({
        label: t.actions.moveDown,
        onClick: () => onMove?.(index, index + 1),
        icon: MoveDown,
      })
    }
    if (items.length > 0) {
      items.push({ type: "separator" })
    }
    items.push({
      label: t.favorites.remove,
      onClick: () => onRemove?.(item),
      icon: Delete,
      critical: true,
    })

    return items
  }, [isOnly, isFirst, isLast, t, onMove, index, onRemove, item])

  const handleDragStart = () => {
    setIsDragging(true)
    setIsDropdownOpen(false)
    setDraggedItemId(item.href || null)
    wasDragging.current = true
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
    onReorderFinish()
    setTimeout(() => {
      wasDragging.current = false
    }, 0)
  }

  const isItemDragging = isDragging && draggedItemId === item.href

  const classes = useMemo(
    () =>
      cn(
        "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
        isSortable && "touch-none",
        active
          ? "bg-f1-background-secondary text-f1-foreground"
          : "hover:bg-f1-background-secondary",
        isDropdownOpen && "bg-f1-background-secondary",
        isItemDragging && "bg-f1-background-secondary"
      ),
    [active, isDropdownOpen, isItemDragging, isSortable]
  )

  const content = useMemo(() => {
    return (
      <>
        <div className="flex w-full items-center justify-between px-1.5 py-1.5">
          <OptionalTooltip tooltip={tooltip}>
            <Link
              onClick={item.onClick}
              href={item.href}
              exactMatch={item.exactMatch}
              className={cn(
                // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
                "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
                isItemDragging && "pointer-events-none"
              )}
              draggable={false}
            >
              {item.type === "icon" ? (
                <F0Icon
                  icon={item.icon}
                  size="md"
                  className={cn("transition-colors", active ? "text-f1-icon-bold" : "text-f1-icon")}
                />
              ) : item.avatar ? (
                <F0Avatar size="xs" avatar={item.avatar} />
              ) : null}

              <OneEllipsis
                tag="span"
                className="line-clamp-1 font-medium text-f1-foreground"
                lines={1}
                noTooltip={!!tooltip}
              >
                {item.label}
              </OneEllipsis>
            </Link>
          </OptionalTooltip>
        </div>
        <div
          className={cn(
            "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
            isDropdownOpen && "bg-f1-background-secondary opacity-100",
            isItemDragging && "opacity-100"
          )}
        >
          <Dropdown open={isDropdownOpen} onOpenChange={setIsDropdownOpen} items={dropdownItems}>
            <div className="flex items-center justify-center" role="list">
              <F0Icon icon={EllipsisHorizontal} size="sm" />
            </div>
          </Dropdown>
        </div>
      </>
    )
  }, [item, active, isDropdownOpen, isItemDragging, dropdownItems, tooltip])

  return isSortable ? (
    <Reorder.Item
      value={item}
      drag="y"
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={classes}
      whileDrag={{
        scale: 1.05,
      }}
    >
      {content}
    </Reorder.Item>
  ) : (
    <div className={classes}>{content}</div>
  )
}

interface BaseCategoryProps {
  title: string
  isOpen?: boolean
  isRoot?: boolean
  onCollapse?: (isOpen: boolean) => void
  children?: ReactNode
  isDragging?: boolean
  wasDragging?: RefObject<boolean>
}

const BaseCategory = ({
  title,
  isOpen: initialIsOpen = true,
  isRoot,
  onCollapse,
  children,
  isDragging,
  wasDragging,
}: BaseCategoryProps) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)
  const shouldReduceMotion = useReducedMotion()

  const handleClick = () => {
    if (isDragging || wasDragging?.current) return

    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    onCollapse?.(newIsOpen)
  }

  return (
    <div>
      <Collapsible open={isOpen}>
        <div className="group relative flex items-center">
          <div
            className={cn(
              "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
              focusRing("focus-visible:ring-inset"),
              isRoot && "hidden"
            )}
            onClick={handleClick}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick()
              }
            }}
          >
            {title}
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 0 : -90 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.1 }}
              className="h-3 w-3"
            >
              <F0Icon icon={ChevronDown} size="xs" className="text-f1-icon-secondary" />
            </motion.div>
          </div>
        </div>
        <CollapsibleContent forceMount className="flex flex-col gap-1">
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? "visible" : "hidden",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1],
            }}
          >
            <div className="flex flex-col gap-0.5">{children}</div>
          </motion.div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

interface CategoryItemProps {
  category: MenuCategory
  isSortable?: boolean
  dragConstraints?: RefObject<HTMLDivElement>
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
  onDragEnd?: (categories: MenuCategory[]) => void
  currentOrder?: MenuCategory[]
}

const CategoryItem = ({
  category,
  isSortable = false,
  dragConstraints,
  onCollapse,
  onDragEnd,
  currentOrder,
}: CategoryItemProps) => {
  const { isDragging, setIsDragging } = useDragContext()
  const wasDragging = useRef(false)
  const dragControls = useDragControls()

  const handleDragStart = () => {
    setIsDragging(true)
    wasDragging.current = true
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setTimeout(() => {
      wasDragging.current = false
      if (currentOrder) {
        onDragEnd?.(currentOrder)
      }
    }, 0)
  }

  const handleCollapse = (isOpen: boolean) => {
    if (!isDragging && !wasDragging.current) {
      onCollapse?.(category, isOpen)
    }
  }

  const content = (
    <BaseCategory
      title={category.title}
      isOpen={category.isOpen}
      isRoot={category.isRoot}
      onCollapse={handleCollapse}
      isDragging={isDragging}
      wasDragging={wasDragging}
    >
      <div
        className={cn(
          "flex flex-col gap-0.5",
          isDragging && !wasDragging.current && "pointer-events-none"
        )}
      >
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </BaseCategory>
  )

  if (!isSortable) return content

  return (
    <Reorder.Item
      id={category.id}
      value={category}
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      dragControls={dragControls}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      layout
      layoutId={`category-${category.id}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)",
      }}
      transition={{
        opacity: { duration: 0.2, ease: "easeInOut" },
        filter: { duration: 0.1, ease: "easeInOut" },
        scale: {
          duration: 0.2,
          ease: [0.175, 0.885, 0.32, 1.275],
        },
        layout: { type: "spring", bounce: 0.1, damping: 15 },
      }}
      whileDrag={{
        scale: 1.04,
        cursor: "grabbing",
        zIndex: 50,
        backdropFilter: "blur(4px)",
      }}
      className="relative"
    >
      {content}
    </Reorder.Item>
  )
}

export function Menu({ tree, onCollapse, onSort, onFavoritesChange, favorites }: MenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const nonSortableItems = tree.filter((category) => category.isSortable === false)
  const [sortableItems, setSortableItems] = useState(
    tree.filter((category) => category.isSortable !== false)
  )
  const [forceUpdateKey, setForceUpdateKey] = useState(0)

  const handleSort = useCallback((newOrder: MenuCategory[]) => {
    setSortableItems(newOrder)
  }, [])

  const handleDragEnd = useCallback(
    (newOrder: MenuCategory[]) => {
      onSort?.(newOrder)
    },
    [onSort]
  )

  const isTouchScreen = useTouchScreen()

  return (
    <DragProvider>
      <LayoutGroup id="sidebar-menu">
        <MenuContent
          disableDragging={isTouchScreen}
          key={forceUpdateKey}
          nonSortableItems={nonSortableItems}
          sortableItems={sortableItems}
          setSortableItems={handleSort}
          containerRef={containerRef}
          onCollapse={onCollapse}
          onDragEnd={handleDragEnd}
          favorites={favorites}
          onFavoritesChange={onFavoritesChange}
          forceUpdate={() => setForceUpdateKey((prev) => prev + 1)}
        />
      </LayoutGroup>
    </DragProvider>
  )
}

function MenuContent({
  nonSortableItems,
  sortableItems,
  setSortableItems,
  containerRef,
  onCollapse,
  onDragEnd,
  favorites = [],
  onFavoritesChange,
  forceUpdate,
  disableDragging = false,
}: {
  nonSortableItems: MenuCategory[]
  sortableItems: MenuCategory[]
  setSortableItems: (items: MenuCategory[]) => void
  containerRef: RefObject<HTMLDivElement>
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
  onDragEnd?: (categories: MenuCategory[]) => void
  favorites?: FavoriteMenuItem[]
  onFavoritesChange?: (favorites: FavoriteMenuItem[]) => void
  forceUpdate: () => void
  disableDragging?: boolean
}) {
  const t = useI18n()

  const { isDragging } = useDragContext()
  const hasRoot = nonSortableItems.some((category) => category.isRoot)
  const hasNonSortableItems = nonSortableItems.filter((category) => !category.isRoot).length > 0
  const hasSortableItems = sortableItems.length > 0
  const favoritesRef = useRef<HTMLDivElement>(null)
  const [internalFavorites, setInternalFavorites] = useState<FavoriteMenuItem[]>(favorites)
  const hasFavorites = favorites.length > 0

  useEffect(() => {
    const hasChanged = JSON.stringify(favorites) !== JSON.stringify(internalFavorites)

    if (hasChanged) {
      setInternalFavorites(favorites)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run on internalFavorites change because it resets the value to favorites from props
  }, [favorites])

  const handleFavoritesReorder = (newOrder: FavoriteMenuItem[]) => {
    setInternalFavorites(newOrder)
  }

  const handleRemoveFavorite = useCallback(
    (item: FavoriteMenuItem) => {
      const updated = internalFavorites.filter((fav) => fav.href !== item.href)
      setInternalFavorites(updated)
      onFavoritesChange?.(updated)
    },
    [internalFavorites, onFavoritesChange]
  )

  const handleMoveFavorite = useCallback(
    (from: number, to: number) => {
      if (to < 0 || to >= internalFavorites.length) return
      const updated = [...internalFavorites]
      const [moved] = updated.splice(from, 1)
      updated.splice(to, 0, moved)
      setInternalFavorites(updated)
      onFavoritesChange?.(updated)
    },
    [internalFavorites, onFavoritesChange]
  )

  const [isInitialized, setIsInitialized] = useState(false)
  const resizeTimeoutRef = useRef<number | null>(null)

  // Initialize once when component mounts
  useEffect(() => {
    if (sortableItems.length > 0 && !isInitialized) {
      setSortableItems([...sortableItems])
      setIsInitialized(true)
    }
  }, [sortableItems, setSortableItems, isInitialized])

  // Handle resize events - using a simple debounce but reacting to all resizes
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current !== null) {
        window.clearTimeout(resizeTimeoutRef.current)
      }

      resizeTimeoutRef.current = window.setTimeout(() => {
        if (containerRef.current && sortableItems.length > 0) {
          forceUpdate()
        }
      }, 50)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (resizeTimeoutRef.current !== null) {
        window.clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [containerRef, sortableItems, forceUpdate])

  /**
   * Favorites content
   */
  const favoritesContentWrapperClasses = "flex flex-col gap-0.5"
  const favoriteLabelsToIndex = useMemo(
    () =>
      internalFavorites.reduce<Record<string, Array<number>>>((acc, item, idx) => {
        if (!(item.label in acc)) {
          acc[item.label] = []
        }
        acc[item.label].push(idx)
        return acc
      }, {}),
    [internalFavorites]
  )

  const favoritesContent = useMemo(
    () =>
      hasFavorites &&
      internalFavorites.map((item, idx) => (
        <FavoriteItem
          isSortable={!disableDragging}
          tooltip={(favoriteLabelsToIndex[item.label] ?? []).length > 1 ? item.tooltip : undefined}
          key={`${item.href}-${item.label}`}
          item={item}
          dragConstraints={favoritesRef}
          onRemove={handleRemoveFavorite}
          index={idx}
          total={internalFavorites.length}
          onMove={handleMoveFavorite}
          onReorderFinish={() => {
            onFavoritesChange?.(internalFavorites)
          }}
        />
      )),
    [
      hasFavorites,
      internalFavorites,
      favoriteLabelsToIndex,
      handleRemoveFavorite,
      handleMoveFavorite,
      onFavoritesChange,
      disableDragging,
    ]
  )

  /**
   * Sortable items content
   */
  const sortableItemsContentWrapperClasses = "flex flex-col gap-3"
  const sortableItemsContent = useMemo(() => {
    return sortableItems.map((category) => (
      <CategoryItem
        key={category.id}
        category={category}
        isSortable={!disableDragging}
        dragConstraints={containerRef}
        onCollapse={onCollapse}
        onDragEnd={onDragEnd}
        currentOrder={sortableItems}
      />
    ))
  }, [sortableItems, disableDragging, containerRef, onCollapse, onDragEnd])

  return (
    <div className={cn("relative", isDragging && "cursor-grabbing [&_*]:cursor-grabbing")}>
      {hasRoot && (
        <div className="flex w-full flex-col gap-3 bg-transparent px-3">
          {nonSortableItems
            .filter((category) => category.isRoot)
            .map((category, index) => (
              <CategoryItem key={`fixed-${index}`} category={category} onCollapse={onCollapse} />
            ))}
        </div>
      )}

      {hasFavorites && (
        <div className="mt-3 flex w-full flex-col gap-3 bg-transparent px-3">
          <BaseCategory title={t.favorites.favorites}>
            <div ref={favoritesRef}>
              {disableDragging ? (
                <div className={favoritesContentWrapperClasses}>{favoritesContent}</div>
              ) : (
                <Reorder.Group
                  axis="y"
                  values={internalFavorites}
                  onReorder={handleFavoritesReorder}
                  className={favoritesContentWrapperClasses}
                >
                  {favoritesContent}
                </Reorder.Group>
              )}
            </div>
          </BaseCategory>
        </div>
      )}

      {hasNonSortableItems && (
        <div className="mt-3 flex w-full flex-col gap-3 bg-transparent px-3">
          {nonSortableItems
            .filter((category) => !category.isRoot)
            .map((category, index) => (
              <CategoryItem key={`fixed-${index}`} category={category} onCollapse={onCollapse} />
            ))}
        </div>
      )}

      {hasSortableItems && (
        <div
          className={cn("mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none")}
          ref={containerRef}
        >
          {disableDragging ? (
            <div className={sortableItemsContentWrapperClasses}>{sortableItemsContent}</div>
          ) : (
            <Reorder.Group
              axis="y"
              values={sortableItems}
              onReorder={setSortableItems}
              layoutScroll
              className={sortableItemsContentWrapperClasses}
            >
              {sortableItemsContent}
            </Reorder.Group>
          )}
        </div>
      )}
    </div>
  )
}

const OptionalTooltip = ({ tooltip, children }: { tooltip?: string; children: React.ReactNode }) =>
  tooltip ? <Tooltip description={tooltip}>{children}</Tooltip> : children
