import { useDraggable } from "@/lib/dnd/hooks"
import { cn } from "@/lib/utils"
import {
  attachClosestEdge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { motion } from "motion/react"
import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { TOCItem } from "../types"
import { PrimitiveItem } from "./PrimitiveItem"

interface TOCItemProps {
  item: TOCItem
  counter?: number
  isActive?: boolean
  sortable: boolean
  collapsible?: boolean
  isExpanded?: boolean
  onToggleExpanded?: (id: string) => void
  children?: ReactNode
  onDragOver?: (itemId: string, position: "before" | "after" | "inside") => void
  onDragLeave?: () => void
  onDrop?: (itemId: string, position: "before" | "after" | "inside") => void
  canDropInside?: boolean
  currentParentId?: string | null
  draggedItemId?: string | null
  justDropped?: boolean
}

export function Item({
  item,
  counter,
  isActive,
  collapsible = false,
  isExpanded = false,
  onToggleExpanded = () => {},
  sortable,
  children,
  onDragOver,
  onDragLeave,
  onDrop,
  canDropInside = false,
  currentParentId = null,
  justDropped = false,
}: TOCItemProps) {
  const [open, setOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)
  const [overEdge, setOverEdge] = useState<"top" | "bottom" | null>(null)
  const [isOverInside, setIsOverInside] = useState(false)
  // Use ref to track last reported state to prevent unnecessary callbacks
  const lastReportedStateRef = useRef<{
    edge: "top" | "bottom" | null
    isInside: boolean
    lastReportTime?: number
  } | null>(null)
  // Use ref to maintain stable edge state across renders
  const overEdgeRef = useRef<"top" | "bottom" | null>(null)
  const isOverInsideRef = useRef<boolean>(false)
  // Use ref to debounce onDragLeave to prevent premature state clearing
  const dragLeaveTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastDragTimeRef = useRef<number>(0)
  // Track if we're actively dragging over this item
  const activeDragCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Memoize payload to prevent unnecessary re-registrations
  // Include currentParentId so payload changes when item moves
  const payload = useMemo(
    () => ({
      kind: "toc-item",
      id: item.id,
      data: { item, currentParentId },
    }),
    [item.id, currentParentId, item]
  )

  // Make item draggable
  useDraggable({
    ref: itemRef as React.RefObject<HTMLElement>,
    payload,
    disabled: !sortable,
  })

  // Set up drop target
  useEffect(() => {
    if (!itemRef.current || !sortable) {
      return
    }

    return dropTargetForElements({
      element: itemRef.current,
      canDrop: ({ source }) => {
        // Only accept drops from toc-item kind
        const sourceData = source.data as { kind?: string; id?: string }
        return sourceData.kind === "toc-item" && sourceData.id !== item.id
      },
      getData: ({ input, element }) => {
        const rect = element.getBoundingClientRect()
        const y = input.clientY
        const relativeY = y - rect.top
        const height = rect.height
        const bottomThreshold = height * 0.6 // Bottom 40% = inside

        // Check if we should allow "inside" drop
        if (canDropInside && relativeY > bottomThreshold) {
          return { type: "toc-item-target", id: item.id, position: "inside" }
        }

        // Otherwise use closest edge (top/bottom)
        return attachClosestEdge(
          { type: "toc-item-target", id: item.id },
          {
            input,
            element,
            allowedEdges: ["top", "bottom"],
          }
        )
      },
      onDragEnter: ({ source }) => {
        const sourceData = source.data as { kind?: string; id?: string }
        // Only handle self-drag case, let onDrag handle all other updates
        // This prevents onDragEnter from interfering with stable onDrag updates
        if (sourceData.id === item.id) {
          setOverEdge(null)
          setIsOverInside(false)
          overEdgeRef.current = null
          isOverInsideRef.current = false
          lastReportedStateRef.current = null
          return
        }
        // Don't update state here - let onDrag handle it for stability
      },
      onDrag: ({ self, source }) => {
        const sourceData = source.data as { kind?: string; id?: string }
        // Track when onDrag fires
        lastDragTimeRef.current = Date.now()

        // Cancel any pending drag leave timeout - we're still dragging over this item
        if (dragLeaveTimeoutRef.current) {
          clearTimeout(dragLeaveTimeoutRef.current)
          dragLeaveTimeoutRef.current = null
        }

        // Cancel any active drag check timeout - we're still active
        if (activeDragCheckTimeoutRef.current) {
          clearTimeout(activeDragCheckTimeoutRef.current)
          activeDragCheckTimeoutRef.current = null
        }

        // DO NOT schedule any cleanup timeout here
        // onDrag can have natural pauses even when we're over the item
        // We'll only clean up when handleDragLeave is called from parent

        if (sourceData.id === item.id) {
          setOverEdge(null)
          setIsOverInside(false)
          overEdgeRef.current = null
          isOverInsideRef.current = false
          lastReportedStateRef.current = null
          return
        }

        const data = self.data as { position?: string }
        const edge = extractClosestEdge(self.data as Record<string, unknown>)

        if (data.position === "inside") {
          // Only update if state actually changed - use refs to avoid stale closures
          const lastState = lastReportedStateRef.current
          const currentEdge = overEdgeRef.current
          const currentIsInside = isOverInsideRef.current
          if (
            !currentIsInside ||
            currentEdge !== null ||
            !lastState ||
            lastState.edge !== null ||
            !lastState.isInside
          ) {
            // Updating to inside
            // Update refs FIRST, then React state
            overEdgeRef.current = null
            isOverInsideRef.current = true
            setIsOverInside(true)
            setOverEdge(null)
            lastReportedStateRef.current = { edge: null, isInside: true }
            onDragOver?.(item.id, "inside")
          }
        } else {
          // Only update if edge actually changed to prevent flickering
          if (edge && (edge === "top" || edge === "bottom")) {
            const position = edge === "top" ? "before" : "after"
            // Use refs to check state to avoid stale closure issues
            // IMPORTANT: Use the refs that we update, not the React state which may be stale
            const currentEdge = overEdgeRef.current
            const currentIsInside = isOverInsideRef.current
            const lastState = lastReportedStateRef.current

            // Check if state actually changed
            const stateChanged =
              currentEdge !== edge ||
              currentIsInside !== false ||
              !lastState ||
              lastState.edge !== edge ||
              lastState.isInside !== false

            if (stateChanged) {
              // Updating edge - Update refs FIRST, then React state
              overEdgeRef.current = edge
              isOverInsideRef.current = false
              lastReportedStateRef.current = {
                edge,
                isInside: false,
                lastReportTime: Date.now(),
              }
              setOverEdge(edge)
              setIsOverInside(false)

              // Always call onDragOver when state changes
              onDragOver?.(item.id, position)
            } else {
              // Even if state didn't change locally, we need to keep the parent updated
              // This ensures the placeholder stays visible while dragging
              const timeSinceLastReport = lastReportedStateRef.current
                ? Date.now() -
                    (lastReportedStateRef.current as any).lastReportTime || 0
                : Infinity

              // Report to parent every 50ms to keep placeholder visible
              if (timeSinceLastReport > 50 || !lastReportedStateRef.current) {
                // Refreshing parent state (periodic update to keep placeholder visible)
                onDragOver?.(item.id, position)
                // Update last report time
                if (lastReportedStateRef.current) {
                  ;(lastReportedStateRef.current as any).lastReportTime =
                    Date.now()
                } else {
                  lastReportedStateRef.current = {
                    edge,
                    isInside: false,
                    lastReportTime: Date.now(),
                  }
                }
              }
            }
          } else if (!edge) {
            // Edge detection failed temporarily - this can happen at boundaries
            // Keep calling onDragOver with the last known position to maintain placeholder
            const lastState = lastReportedStateRef.current
            if (lastState && lastState.edge) {
              const position = lastState.edge === "top" ? "before" : "after"
              const timeSinceLastReport =
                Date.now() - (lastState.lastReportTime || 0)
              // Keep reporting every 50ms even if edge detection fails
              if (timeSinceLastReport > 50) {
                onDragOver?.(item.id, position)
                lastReportedStateRef.current = {
                  ...lastState,
                  lastReportTime: Date.now(),
                }
              }
            }
            // Don't clear state if edge detection fails temporarily
            // This can happen when cursor is at the exact edge boundary
            // Only onDragLeave should clear the state
          }
        }
      },
      onDragLeave: () => {
        // Don't clear state here - let the active drag check in onDrag handle it
        // onDragLeave can fire spuriously when cursor is at edge boundaries
        // The activeDragCheckTimeoutRef in onDrag will clear the state if onDrag stops firing
        onDragLeave?.()
      },
      onDrop: ({ self }) => {
        const data = self.data as { position?: string }
        let position: "before" | "after" | "inside" = "after"

        if (data.position === "inside") {
          position = "inside"
        } else {
          const edge = extractClosestEdge(self.data as Record<string, unknown>)
          position = edge === "top" ? "before" : "after"
        }

        setOverEdge(null)
        setIsOverInside(false)

        if (onDrop) {
          onDrop(item.id, position)
        }
      },
    })

    // Cleanup timeouts on unmount
    return () => {
      if (dragLeaveTimeoutRef.current) {
        clearTimeout(dragLeaveTimeoutRef.current)
      }
      if (activeDragCheckTimeoutRef.current) {
        clearTimeout(activeDragCheckTimeoutRef.current)
      }
    }
  }, [item.id, sortable, canDropInside, onDragOver, onDragLeave, onDrop])

  return (
    <motion.div
      ref={itemRef}
      className={cn(
        "relative rounded-lg transition-colors",
        sortable && "cursor-grab active:cursor-grabbing",
        // Show subtle indicator bars (less prominent since we have placeholders)
        overEdge === "top" &&
          "before:bg-f1-border-focus before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-0.5",
        overEdge === "bottom" &&
          "after:bg-f1-border-focus after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-0.5",
        isOverInside && canDropInside && "bg-f1-background-hover/30",
        justDropped && "bg-f1-background-hover/50 shadow-lg"
      )}
      animate={
        justDropped
          ? {
              scale: [1, 1.05, 1],
              y: [0, -2, 0],
            }
          : {}
      }
      transition={
        justDropped
          ? {
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1], // Bouncy ease for more evident effect
            }
          : {}
      }
    >
      <PrimitiveItem
        item={item}
        counter={counter}
        isActive={isActive}
        sortable={sortable}
        collapsible={collapsible}
        isExpanded={isExpanded}
        onToggleExpanded={onToggleExpanded}
        open={open}
        setOpen={setOpen}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      >
        {children}
      </PrimitiveItem>
    </motion.div>
  )
}
