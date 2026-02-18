import { AnimatePresence, motion } from "motion/react"
import {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { F1SearchBox } from "@/experimental/Forms/Fields/F1SearchBox"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { useDndEvents } from "@/lib/dnd/hooks"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"

import { Item } from "./Item"
import { ItemSectionHeader } from "./ItemSectionHeader"
import { TOCItem, TOCItemAction, TOCProps } from "./types"
import {
  calculateAdjustedIndex,
  convertToIds,
  filterTree,
  findExpandedPath,
  findItemInTree,
  insertItemInTree,
  removeItemFromTree,
  updateItemInTree,
  wouldCreateCycle,
} from "./utils"

function renderTOCItem(
  item: TOCItem,
  sortable: boolean,
  depth: number,
  activeItem?: string,
  collapsible?: boolean,
  hideChildrenCounter?: boolean,
  expandedItems?: Set<string>,
  onToggleExpanded?: (id: string) => void,
  onMoveItem?: (
    itemId: string,
    targetParentId: string | null,
    targetIndex: number
  ) => void,
  allItems?: TOCItem[],
  draggedItemId?: string | null,
  dragOverItemId?: string | null,
  dragOverPosition?: "before" | "after" | "inside" | null,
  onChildrenReorder?: (parentId: string) => (newOrder: TOCItem[]) => void,
  currentParentId?: string | null,
  onDragOver?: (
    itemId: string,
    position: "before" | "after" | "inside"
  ) => void,
  onDragLeave?: () => void,
  onDrop?: (itemId: string, position: "before" | "after" | "inside") => void,
  justDroppedItemId?: string | null
): ReactElement {
  const Component = item.children ? ItemSectionHeader : Item
  const isExpanded = expandedItems?.has(item.id) ?? true

  const isDragOver = dragOverItemId === item.id
  // Only allow dropping inside if the item has children (is a section header)
  const canDropInside = Boolean(
    draggedItemId &&
    draggedItemId !== item.id &&
    allItems &&
    item.children !== undefined && // Item must have children property (is a section)
    !wouldCreateCycle(allItems, draggedItemId, item.id)
  )

  // Show placeholder for both same-level and cross-level moves
  // This creates a visual gap similar to motion/react's automatic placeholder
  const showPlaceholderBefore = Boolean(
    draggedItemId &&
    draggedItemId !== item.id &&
    isDragOver &&
    dragOverPosition === "before"
  )
  const showPlaceholderAfter = Boolean(
    draggedItemId &&
    draggedItemId !== item.id &&
    isDragOver &&
    dragOverPosition === "after"
  )

  // Check if this is the first item in its parent (for adjusting placeholder margins)
  const isFirstItem = (() => {
    if (currentParentId === null) {
      return allItems?.[0]?.id === item.id
    }
    if (!allItems || !currentParentId) return false
    const parent = findItemInTree(allItems, currentParentId)
    return parent?.item.children?.[0]?.id === item.id
  })()

  return (
    <>
      {/* Placeholder before item - creates visual gap like motion/react */}
      <AnimatePresence>
        {showPlaceholderBefore && (
          <motion.div
            key="placeholder-before"
            initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            animate={{
              opacity: 1,
              height: 40,
              marginTop: isFirstItem ? 0 : 2,
              marginBottom: 2,
            }}
            exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-[10px] border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40"
          />
        )}
      </AnimatePresence>
      {Component === Item ? (
        <Item
          key={item.id}
          item={item}
          isActive={activeItem === item.id}
          sortable={sortable}
          collapsible={false}
          isExpanded={false}
          onToggleExpanded={onToggleExpanded}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          canDropInside={false}
          currentParentId={currentParentId}
          draggedItemId={draggedItemId}
          justDropped={justDroppedItemId === item.id}
        />
      ) : (
        <Component
          key={item.id}
          item={item}
          isActive={activeItem === item.id}
          collapsible={collapsible && item.children && item.children.length > 0}
          isExpanded={isExpanded}
          onToggleExpanded={onToggleExpanded}
          sortable={sortable}
          hideChildrenCounter={hideChildrenCounter}
          canDropInside={canDropInside}
          onDragOver={Component === ItemSectionHeader ? onDragOver : undefined}
          onDragLeave={
            Component === ItemSectionHeader ? onDragLeave : undefined
          }
          onDrop={Component === ItemSectionHeader ? onDrop : undefined}
          currentParentId={currentParentId}
          draggedItemId={draggedItemId}
        >
          {item.children && (Component === ItemSectionHeader || isExpanded) && (
            <div
              className={cn(
                "flex flex-col",
                // Show placeholder background when dragging inside this section
                isDragOver &&
                  dragOverPosition === "inside" &&
                  canDropInside &&
                  "rounded-md bg-f1-background-hover/20 p-1"
              )}
            >
              {item.children.map((child) => {
                return renderTOCItem(
                  child,
                  sortable,
                  depth + 1,
                  activeItem,
                  collapsible,
                  hideChildrenCounter,
                  expandedItems,
                  onToggleExpanded,
                  onMoveItem,
                  allItems,
                  draggedItemId,
                  dragOverItemId,
                  dragOverPosition,
                  sortable ? onChildrenReorder : undefined,
                  item.id,
                  onDragOver,
                  onDragLeave,
                  onDrop,
                  justDroppedItemId
                )
              })}
              {/* Placeholder when dragging inside and section is empty or collapsed */}
              {isDragOver &&
                dragOverPosition === "inside" &&
                canDropInside &&
                (!isExpanded || item.children.length === 0) && (
                  <div className="flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary">
                    Drop here
                  </div>
                )}
            </div>
          )}
        </Component>
      )}
      {/* Placeholder after item - creates visual gap like motion/react */}
      <AnimatePresence>
        {showPlaceholderAfter && (
          <motion.div
            key="placeholder-after"
            initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 40, marginTop: 2, marginBottom: 2 }}
            exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-[10px] border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40"
          />
        )}
      </AnimatePresence>
    </>
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

  const handleUpdateItem = useCallback(
    (itemId: string, updatedItem: TOCItem) => {
      const updatedItems = updateItemInTree(sortableItems, itemId, updatedItem)
      setSortableItems(updatedItems)

      // Notify parent with hierarchical IDs structure
      if (onReorder) {
        onReorder(convertToIds(updatedItems))
      }
    },
    [sortableItems, onReorder]
  )

  const handleChildrenReorder = useCallback(
    (parentId: string) => (newOrder: TOCItem[]) => {
      // Update the parent item with the new order
      const parentItem = findItemInTree(sortableItems, parentId)
      if (parentItem) {
        const updatedItem = { ...parentItem.item, children: newOrder }
        handleUpdateItem(parentId, updatedItem)
      } else {
        // If parentId is null, it means we're reordering root items
        if (parentId === null || parentId === undefined) {
          setSortableItems(newOrder)
          if (onReorder) {
            onReorder(convertToIds(newOrder))
          }
        }
      }
    },
    [sortableItems, handleUpdateItem, onReorder, convertToIds]
  )

  const handleMoveItem = useCallback(
    (itemId: string, targetParentId: string | null, targetIndex: number) => {
      // Prevent cycles
      if (wouldCreateCycle(sortableItems, itemId, targetParentId)) {
        return
      }

      // Find the item to move
      const itemData = findItemInTree(sortableItems, itemId)
      if (!itemData) return

      const itemToMove = itemData.item

      // Remove item from current location
      let updatedItems = removeItemFromTree(sortableItems, itemId)

      // Calculate the correct index after removal
      const adjustedIndex = calculateAdjustedIndex(
        sortableItems,
        itemId,
        targetParentId,
        targetIndex
      )

      // Insert item at new location
      updatedItems = insertItemInTree(
        updatedItems,
        itemToMove,
        targetParentId,
        adjustedIndex
      )

      setSortableItems(updatedItems)

      // Expand target parent if moving into it
      if (targetParentId !== null) {
        setExpandedItems((prev) => {
          const newSet = new Set(prev)
          newSet.add(targetParentId)
          return newSet
        })
      }

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

  // State for drag and drop
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null)
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null)
  const [dragOverPosition, setDragOverPosition] = useState<
    "before" | "after" | "inside" | null
  >(null)
  const [justDroppedItemId, setJustDroppedItemId] = useState<string | null>(
    null
  )

  // Use ref to store draggedItemId so handleDrop can access it even after state is cleared
  const draggedItemIdRef = useRef<string | null>(null)
  // Flag to track if handleDrop has been called (to prevent safety timeout from clearing state)
  const handleDropCalledRef = useRef<boolean>(false)
  // Use refs to access current dragOver state in useDndEvents callback
  const dragOverItemIdRef = useRef<string | null>(null)
  const dragOverPositionRef = useRef<"before" | "after" | "inside" | null>(null)

  // Use refs to stabilize drag over updates and prevent flickering
  const dragOverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastDragOverRef = useRef<{
    itemId: string
    position: "before" | "after" | "inside"
  } | null>(null)
  const lastItemIndexRef = useRef<number | null>(null)
  // Track when the current state was set to add persistence
  const currentStateSetTimeRef = useRef<number>(0)
  // Track last time handleDragOver was called to detect active dragging
  const lastDragOverCallTimeRef = useRef<number>(0)
  // Track if placeholder is "locked" for first item (should not disappear)
  const isPlaceholderLockedRef = useRef<boolean>(false)
  // Store safety timeout ID so we can cancel it when handleDrop fires
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle drag over from Item component with debounce
  const handleDragOver = useCallback(
    (itemId: string, position: "before" | "after" | "inside") => {
      // Cancel any pending timeout
      if (dragOverTimeoutRef.current) {
        clearTimeout(dragOverTimeoutRef.current)
        dragOverTimeoutRef.current = null
      }

      // Find the index of the current item to detect drag direction
      const items = sortable ? filteredSortableItems : filteredItems
      const currentItemIndex = items.findIndex((item) => item.id === itemId)
      const isMovingUp =
        lastItemIndexRef.current !== null &&
        currentItemIndex < lastItemIndexRef.current
      lastItemIndexRef.current = currentItemIndex

      // Create a key for this drag over state
      const dragOverKey = `${itemId}-${position}`
      const currentStateKey =
        dragOverItemId && dragOverPosition
          ? `${dragOverItemId}-${dragOverPosition}`
          : null

      // Skip if same as current state
      if (dragOverKey === currentStateKey) {
        return
      }

      // Store the pending update
      lastDragOverRef.current = { itemId, position }

      // Debounce delay - shorter when moving up to prevent glitchy behavior
      const debounceDelay = isMovingUp ? 50 : 30

      // Debounce the update to prevent rapid state changes
      dragOverTimeoutRef.current = setTimeout(() => {
        const pending = lastDragOverRef.current
        if (pending) {
          setDragOverItemId(pending.itemId)
          setDragOverPosition(pending.position)
          dragOverItemIdRef.current = pending.itemId
          dragOverPositionRef.current = pending.position
          const now = Date.now()
          currentStateSetTimeRef.current = now
          lastDragOverCallTimeRef.current = now

          // Lock placeholder if this is the first item with "before" position
          const items = sortable ? filteredSortableItems : filteredItems
          const firstItem = items[0]
          if (
            pending.itemId === firstItem?.id &&
            pending.position === "before"
          ) {
            isPlaceholderLockedRef.current = true
          }
        }
        dragOverTimeoutRef.current = null
      }, debounceDelay)
    },
    [
      dragOverItemId,
      dragOverPosition,
      sortable,
      filteredSortableItems,
      filteredItems,
    ]
  )

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dragOverTimeoutRef.current) {
        clearTimeout(dragOverTimeoutRef.current)
      }
    }
  }, [])

  // Handle drag leave with debounce to prevent premature clearing
  const handleDragLeave = useCallback(() => {
    // Don't clear if handleDrop has been called or is about to be called
    // This prevents clearing state during the drop process
    if (handleDropCalledRef.current) {
      return
    }

    // Don't clear immediately - wait a bit to see if drag over fires again
    // This prevents flickering when cursor is at edge boundaries
    // Use a longer timeout to give onDrop time to execute
    if (dragOverTimeoutRef.current) {
      clearTimeout(dragOverTimeoutRef.current)
    }

    // Use a longer timeout to give onDrop time to execute
    // onDrop typically fires within 100-200ms of the drop event
    // Use even longer timeout when placeholder is locked (first item) to ensure drop can execute
    // But also use a reasonable timeout for all positions to prevent premature clearing
    const leaveTimeout = isPlaceholderLockedRef.current ? 1000 : 800
    dragOverTimeoutRef.current = setTimeout(() => {
      // Check again if handleDrop was called during the timeout
      if (handleDropCalledRef.current) {
        dragOverTimeoutRef.current = null
        return
      }

      const now = Date.now()
      const timeSinceLastState = now - currentStateSetTimeRef.current
      const timeSinceLastDragOverCall = now - lastDragOverCallTimeRef.current

      // Check if handleDragOver was called recently
      // Use longer timeout when placeholder is locked to give more time for drop
      // But also use reasonable timeout for all positions
      const minTimeSinceLastCall = isPlaceholderLockedRef.current ? 800 : 500
      if (timeSinceLastDragOverCall < minTimeSinceLastCall) {
        // Cancelled (handleDragOver called recently - still dragging over)
        dragOverTimeoutRef.current = null
        return
      }

      // Also check if state was set recently
      const minTimeSinceLastState = isPlaceholderLockedRef.current ? 800 : 500
      if (timeSinceLastState < minTimeSinceLastState) {
        // Cancelled (state updated recently)
        dragOverTimeoutRef.current = null
        return
      }

      // Check if placeholder is locked (first item) - don't clear if locked
      if (isPlaceholderLockedRef.current) {
        const items = sortable ? filteredSortableItems : filteredItems
        const firstItem = items[0]
        const isFirstItem =
          dragOverItemId === firstItem?.id && dragOverPosition === "before"

        if (isFirstItem) {
          // For locked first item placeholder, be very persistent
          // Only clear if handleDragOver hasn't been called for a very long time (2 seconds)
          // This ensures the placeholder stays visible even if onDrag doesn't fire for a moment
          if (timeSinceLastDragOverCall < 2000) {
            // Cancelled (first item placeholder locked)
            dragOverTimeoutRef.current = null
            return
          }
          // Only unlock if we really left (no drag over calls for 2 seconds)
          isPlaceholderLockedRef.current = false
        } else {
          // If we moved to a different item, unlock and allow clearing
          // Unlocking (moved to different item)
          isPlaceholderLockedRef.current = false
        }
      }

      // Normal clearing
      // DON'T clear lastDragOverRef here - keep it for potential fallback in drop
      // It will be cleared when a new drag starts
      lastItemIndexRef.current = null
      currentStateSetTimeRef.current = 0
      setDragOverItemId(null)
      setDragOverPosition(null)
      dragOverItemIdRef.current = null
      dragOverPositionRef.current = null
      dragOverTimeoutRef.current = null
    }, leaveTimeout) // Use longer timeout when placeholder is locked to give drop time to execute
  }, [
    dragOverItemId,
    dragOverPosition,
    sortable,
    filteredSortableItems,
    filteredItems,
  ])

  // Handle drop from Item component
  const handleDrop = useCallback(
    (targetItemId: string, position: "before" | "after" | "inside") => {
      // Mark that handleDrop has been called to prevent safety timeout from clearing state
      handleDropCalledRef.current = true

      // Use ref to get draggedItemId in case state was already cleared
      const currentDraggedItemId = draggedItemIdRef.current

      // Always unlock placeholder on drop
      isPlaceholderLockedRef.current = false

      // IMMEDIATELY clear drag over state to remove placeholder
      setDragOverItemId(null)
      setDragOverPosition(null)
      dragOverItemIdRef.current = null
      dragOverPositionRef.current = null

      // Cancel any pending drag over timeout
      if (dragOverTimeoutRef.current) {
        clearTimeout(dragOverTimeoutRef.current)
        dragOverTimeoutRef.current = null
      }

      if (!currentDraggedItemId || currentDraggedItemId === targetItemId) {
        draggedItemIdRef.current = null
        setDraggedItemId(null)
        setDragOverItemId(null)
        setDragOverPosition(null)
        return
      }

      // Calculate target index and parent
      const targetItem = findItemInTree(sortableItems, targetItemId)
      const draggedItem = findItemInTree(sortableItems, currentDraggedItemId)

      if (targetItem && draggedItem) {
        let targetParentId: string | null = null
        let targetIndex = 0

        if (position === "inside") {
          // Moving inside the target item (as a child)
          targetParentId = targetItemId
          targetIndex = targetItem.item.children?.length ?? 0
        } else if (position === "before") {
          // Moving before the target item
          if (targetItem.parentPath.length > 0) {
            targetParentId =
              targetItem.parentPath[targetItem.parentPath.length - 1]
          } else {
            targetParentId = null // Root level
          }
          // Find the index of the target item in its parent
          if (targetParentId === null) {
            targetIndex = sortableItems.findIndex((i) => i.id === targetItemId)
          } else {
            const parent = findItemInTree(sortableItems, targetParentId)
            if (parent) {
              targetIndex =
                parent.item.children?.findIndex((c) => c.id === targetItemId) ??
                0
            }
          }
        } else if (position === "after") {
          // Moving after the target item
          if (targetItem.parentPath.length > 0) {
            targetParentId =
              targetItem.parentPath[targetItem.parentPath.length - 1]
          } else {
            targetParentId = null // Root level
          }
          // Find the index of the target item in its parent and add 1
          if (targetParentId === null) {
            targetIndex =
              sortableItems.findIndex((i) => i.id === targetItemId) + 1
          } else {
            const parent = findItemInTree(sortableItems, targetParentId)
            if (parent) {
              targetIndex =
                (parent.item.children?.findIndex(
                  (c) => c.id === targetItemId
                ) ?? 0) + 1
            }
          }
        }

        // Only move if it's a cross-level move, different parent, or different index in same parent
        const draggedParentId =
          draggedItem.parentPath.length > 0
            ? draggedItem.parentPath[draggedItem.parentPath.length - 1]
            : null

        // Calculate current index of dragged item
        let currentIndex = -1
        if (draggedParentId === null) {
          currentIndex = sortableItems.findIndex(
            (i) => i.id === currentDraggedItemId
          )
        } else {
          const draggedParent = findItemInTree(sortableItems, draggedParentId)
          if (draggedParent) {
            currentIndex =
              draggedParent.item.children?.findIndex(
                (c) => c.id === currentDraggedItemId
              ) ?? -1
          }
        }

        // Move if: different parent, or same parent but different index
        if (
          targetParentId !== draggedParentId ||
          (targetParentId === draggedParentId && currentIndex !== targetIndex)
        ) {
          // Trigger drop animation effect IMMEDIATELY before moving
          // This ensures the animation starts right away
          setJustDroppedItemId(currentDraggedItemId)

          handleMoveItem(currentDraggedItemId, targetParentId, targetIndex)

          // Clear animation state after animation completes
          setTimeout(() => {
            setJustDroppedItemId(null)
          }, 800) // Match animation duration
        }
      }

      // Clear drag state - always unlock and clear
      isPlaceholderLockedRef.current = false
      draggedItemIdRef.current = null
      handleDropCalledRef.current = true // Mark as called BEFORE clearing state
      // DON'T clear lastDragOverRef here - keep it for potential fallback in next drag
      // It will be cleared when a new drag starts
      lastItemIndexRef.current = null
      currentStateSetTimeRef.current = 0
      lastDragOverCallTimeRef.current = 0

      // Cancel safety timeout since handleDrop has fired
      if (safetyTimeoutRef.current) {
        clearTimeout(safetyTimeoutRef.current)
        safetyTimeoutRef.current = null
      }

      // Clear dragged item state
      setDraggedItemId(null)

      // Reset flag after safety timeout duration to ensure it's checked
      // Safety timeout is 500ms, so reset after 600ms to be safe
      setTimeout(() => {
        handleDropCalledRef.current = false
      }, 600)
    },
    [sortableItems, handleMoveItem]
  )

  // Monitor drag start/end using useDndEvents
  useDndEvents(
    useCallback(
      (e: {
        phase: "start" | "over" | "drop" | "cancel"
        source: { kind: string; id: string; data?: unknown }
      }) => {
        if (e.phase === "start" && e.source.kind === "toc-item") {
          // Cancel any pending timeouts from previous drag
          if (dragOverTimeoutRef.current) {
            clearTimeout(dragOverTimeoutRef.current)
            dragOverTimeoutRef.current = null
          }
          if (safetyTimeoutRef.current) {
            clearTimeout(safetyTimeoutRef.current)
            safetyTimeoutRef.current = null
          }

          draggedItemIdRef.current = e.source.id
          handleDropCalledRef.current = false // Reset flag for new drag
          // Clear lastDragOverRef when starting a new drag
          lastDragOverRef.current = null
          setDraggedItemId(e.source.id)
        } else if (e.phase === "cancel") {
          // For cancel, clear everything immediately
          isPlaceholderLockedRef.current = false
          handleDropCalledRef.current = false
          lastDragOverRef.current = null
          lastItemIndexRef.current = null
          currentStateSetTimeRef.current = 0
          lastDragOverCallTimeRef.current = 0
          if (dragOverTimeoutRef.current) {
            clearTimeout(dragOverTimeoutRef.current)
            dragOverTimeoutRef.current = null
          }
          if (safetyTimeoutRef.current) {
            clearTimeout(safetyTimeoutRef.current)
            safetyTimeoutRef.current = null
          }
          setDragOverItemId(null)
          setDragOverPosition(null)
          dragOverItemIdRef.current = null
          dragOverPositionRef.current = null
          setDraggedItemId(null)
          draggedItemIdRef.current = null
        } else if (e.phase === "drop") {
          // For drop, DON'T clear visual state immediately
          // The dropTargetForElements onDrop handler needs the state to process the drop
          // We'll clear it in handleDrop after processing, or with a safety timeout

          // CRITICAL: Cancel any pending handleDragLeave timeout
          // This prevents handleDragLeave from clearing state before onDrop executes
          if (dragOverTimeoutRef.current) {
            clearTimeout(dragOverTimeoutRef.current)
            dragOverTimeoutRef.current = null
          }

          // Only clear timeouts and refs, but keep visual state for handleDrop
          isPlaceholderLockedRef.current = false

          // If we have a valid dragOverItemId and dragOverPosition, and handleDrop hasn't been called yet,
          // try to execute handleDrop directly in case the drop was on the placeholder
          // This is a fallback in case onDrop from Item doesn't fire (e.g., drop on placeholder)
          // Also check lastDragOverRef as fallback in case handleDragLeave cleared the state
          const currentDragOverItemId =
            dragOverItemIdRef.current || lastDragOverRef.current?.itemId
          const currentDragOverPosition =
            dragOverPositionRef.current || lastDragOverRef.current?.position
          if (
            !handleDropCalledRef.current &&
            currentDragOverItemId &&
            currentDragOverPosition &&
            draggedItemIdRef.current &&
            draggedItemIdRef.current !== currentDragOverItemId
          ) {
            // Use requestAnimationFrame to execute in the next frame
            // This gives onDrop from Item a chance to fire first, but is faster than setTimeout
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (!handleDropCalledRef.current) {
                  // Check refs first, then lastDragOverRef as fallback
                  const finalItemId =
                    dragOverItemIdRef.current || lastDragOverRef.current?.itemId
                  const finalPosition =
                    dragOverPositionRef.current ||
                    lastDragOverRef.current?.position
                  if (finalItemId && finalPosition) {
                    handleDrop(finalItemId, finalPosition)
                  }
                }
              })
            })
          }

          // DON'T reset the flag here - handleDrop will set it to true when it executes
          // The flag will be reset when a new drag starts (in "start" phase)

          // Cancel any existing safety timeout
          if (safetyTimeoutRef.current) {
            clearTimeout(safetyTimeoutRef.current)
            safetyTimeoutRef.current = null
          }

          // Set a safety timeout to clear state if handleDrop doesn't fire
          // This prevents the placeholder from staying visible forever if something goes wrong
          // Note: handleDrop may execute before or after this event, so we check the flag
          const timeoutId = setTimeout(() => {
            // Double-check the flag - handleDrop may have executed between scheduling and execution
            if (!handleDropCalledRef.current) {
              lastDragOverRef.current = null
              lastItemIndexRef.current = null
              currentStateSetTimeRef.current = 0
              lastDragOverCallTimeRef.current = 0
              setDragOverItemId(null)
              setDragOverPosition(null)
              dragOverItemIdRef.current = null
              dragOverPositionRef.current = null
              setDraggedItemId(null)
              draggedItemIdRef.current = null
            }
            // Only clear the ref if this is still the active timeout
            if (safetyTimeoutRef.current === timeoutId) {
              safetyTimeoutRef.current = null
            }
          }, 500) // 500ms should be enough for handleDrop to fire
          safetyTimeoutRef.current = timeoutId
        }
      },
      [handleDrop]
    )
  )

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
      <ScrollArea className="h-full min-h-0">
        <div className="px-3 pb-2">
          <div className="flex flex-col gap-0.5">
            {/* Removed duplicate placeholder - renderTOCItem handles it */}
            {(sortable ? filteredSortableItems : filteredItems).map((item) =>
              renderTOCItem(
                item,
                sortable,
                0,
                activeItem,
                collapsible,
                hideChildrenCounter,
                expandedItems,
                handleToggleExpanded,
                handleMoveItem,
                sortableItems,
                draggedItemId,
                dragOverItemId,
                dragOverPosition,
                sortable ? handleChildrenReorder : undefined,
                null,
                handleDragOver,
                handleDragLeave,
                handleDrop,
                justDroppedItemId
              )
            )}
          </div>
        </div>
      </ScrollArea>
    </nav>
  )
}

function _F0TableOfContent(props: TOCProps) {
  // Create a unique instance ID for each component instance
  const instanceIdRef = useRef(Symbol("f0-table-of-contents"))
  const driver = useMemo(() => {
    return createAtlaskitDriver(instanceIdRef.current)
  }, [])

  return (
    <DndProvider driver={driver}>
      <TOCContent {...props} />
    </DndProvider>
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
