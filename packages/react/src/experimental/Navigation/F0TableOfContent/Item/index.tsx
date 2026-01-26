import {
  attachClosestEdge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { motion } from "motion/react"
import { ReactNode, useEffect, useMemo, useRef, useState } from "react"

import { useDraggable } from "@/lib/dnd/hooks"
import { cn } from "@/lib/utils"

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
  // Track last reported state to prevent unnecessary callbacks
  const lastReportedStateRef = useRef<{
    edge: "top" | "bottom" | null
    isInside: boolean
    lastReportTime?: number
  } | null>(null)

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
        if (sourceData.id === item.id) {
          setOverEdge(null)
          setIsOverInside(false)
          lastReportedStateRef.current = null
          return
        }
      },
      onDrag: ({ self, source }) => {
        const sourceData = source.data as { kind?: string; id?: string }

        if (sourceData.id === item.id) {
          setOverEdge(null)
          setIsOverInside(false)
          lastReportedStateRef.current = null
          return
        }

        const data = self.data as { position?: string }
        const edge = extractClosestEdge(self.data as Record<string, unknown>)

        if (data.position === "inside") {
          const lastState = lastReportedStateRef.current
          if (!lastState || !lastState.isInside || lastState.edge !== null) {
            setIsOverInside(true)
            setOverEdge(null)
            lastReportedStateRef.current = { edge: null, isInside: true }
            onDragOver?.(item.id, "inside")
          }
        } else if (edge && (edge === "top" || edge === "bottom")) {
          const position = edge === "top" ? "before" : "after"
          const lastState = lastReportedStateRef.current
          const stateChanged =
            !lastState ||
            lastState.edge !== edge ||
            lastState.isInside !== false

          if (stateChanged) {
            setOverEdge(edge)
            setIsOverInside(false)
            lastReportedStateRef.current = {
              edge,
              isInside: false,
              lastReportTime: Date.now(),
            }
            onDragOver?.(item.id, position)
          } else {
            // Keep parent updated every 50ms to maintain placeholder visibility
            const timeSinceLastReport =
              Date.now() - (lastState.lastReportTime || 0)
            if (timeSinceLastReport > 50) {
              onDragOver?.(item.id, position)
              lastReportedStateRef.current = {
                ...lastState,
                lastReportTime: Date.now(),
              }
            }
          }
        } else if (!edge) {
          // Edge detection failed - use last known position
          const lastState = lastReportedStateRef.current
          if (lastState?.edge) {
            const position = lastState.edge === "top" ? "before" : "after"
            const timeSinceLastReport =
              Date.now() - (lastState.lastReportTime || 0)
            if (timeSinceLastReport > 50) {
              onDragOver?.(item.id, position)
              lastReportedStateRef.current = {
                ...lastState,
                lastReportTime: Date.now(),
              }
            }
          }
        }
      },
      onDragLeave: () => {
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
