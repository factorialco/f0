import {
  attachClosestEdge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { DropIndicator } from "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box"
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview"
import { useCallback, useEffect, useRef, useState } from "react"

import type { OnGenerateDragPreviewArgs } from "@/lib/dnd/types"

import { CardInternal } from "@/components/F0Card/CardInternal"
import { F0Link } from "@/components/F0Link"
import { useDraggable } from "@/lib/dnd/hooks"
import { cn, focusRing } from "@/lib/utils"

export type DragConfig<T = unknown> = { id: string; type?: string; data?: T }

const INTERACTIVE_SELECTOR =
  'button, a[href], input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], [role="option"], [role="radio"], [role="switch"]'

const isInteractiveElement = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) return false
  return Boolean(target.closest(INTERACTIVE_SELECTOR))
}

export function KanbanCard<T = unknown>({
  drag,
  id,
  index,
  total,
  laneId,
  draggable = false,
  showIndicator = true,
  disabledEdges = [],
  forcedEdge = null,
  selectedIds,
  ...props
}: {
  drag: DragConfig<T>
  id: string
  index: number
  total: number
  laneId?: string
  draggable?: boolean
  showIndicator?: boolean
  disabledEdges?: Array<"top" | "bottom">
  forcedEdge?: "top" | "bottom" | null
  /** Keys (from getKey) of all selected items for bulk drag (includes this card's key when selected) */
  selectedIds?: string[]
} & React.ComponentProps<typeof CardInternal>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const [overEdge, setOverEdge] = useState<"top" | "bottom" | null>(null)

  const isBulkDrag =
    selectedIds && selectedIds.length > 1 && selectedIds.includes(drag.id)
  const bulkCount = isBulkDrag ? selectedIds.length : 0

  const handleGenerateDragPreview = useCallback(
    ({ nativeSetDragImage }: OnGenerateDragPreviewArgs) => {
      if (!nativeSetDragImage || !ref.current) return
      setCustomNativeDragPreview({
        nativeSetDragImage,
        render: ({ container }) => {
          const cardWidth = ref.current!.offsetWidth
          const cardHeight = ref.current!.offsetHeight
          const shadowCount = bulkCount >= 3 ? 2 : 1
          const offset = 8
          const totalOffset = shadowCount * offset

          // Size the container to fit the card + shadow offset + badge overhang
          Object.assign(container.style, {
            position: "relative",
            width: `${cardWidth + totalOffset + 12}px`,
            height: `${cardHeight + totalOffset + 12}px`,
          })

          // Resolve the page background so clones look opaque
          // (cards use semi-transparent fills that rely on the page behind them)
          const pageBg =
            window.getComputedStyle(document.body).backgroundColor || "#0d1626"

          // Render shadow layers as empty card shells (deepest first)
          for (let i = shadowCount; i >= 1; i--) {
            const shadowClone = ref.current!.cloneNode(true) as HTMLElement
            // Hide inner content so only the card shape is visible
            for (const child of shadowClone.children) {
              ;(child as HTMLElement).style.visibility = "hidden"
            }
            Object.assign(shadowClone.style, {
              position: "absolute",
              top: `${i * offset}px`,
              left: `${(shadowCount - i) * offset}px`,
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              backgroundColor: pageBg,
              borderRadius: "12px",
              overflow: "hidden",
            })
            container.appendChild(shadowClone)
          }

          // Clone the card element as the top layer
          const clone = ref.current!.cloneNode(true) as HTMLElement
          Object.assign(clone.style, {
            position: "absolute",
            top: "0px",
            left: `${totalOffset}px`,
            width: `${cardWidth}px`,
            backgroundColor: pageBg,
            borderRadius: "12px",
          })
          container.appendChild(clone)

          // Count badge
          const badge = document.createElement("div")
          badge.textContent = String(bulkCount)
          Object.assign(badge.style, {
            position: "absolute",
            top: "-4px",
            right: "0px",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#0066FF",
            color: "#FFFFFF",
            fontSize: "12px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            zIndex: "1",
          })
          container.appendChild(badge)
        },
      })
    },
    [bulkCount]
  )

  useDraggable<T>({
    ref: ref as React.RefObject<HTMLElement>,
    payload: { kind: drag.type ?? "list-card", id: drag.id, data: drag.data },
    selectedIds: isBulkDrag ? selectedIds : undefined,
    onGenerateDragPreview: isBulkDrag ? handleGenerateDragPreview : undefined,
  })

  useEffect(() => {
    if (!ref.current) return
    return dropTargetForElements({
      element: ref.current,
      getData: ({ input, element }) =>
        attachClosestEdge(
          { type: "list-card-target", id, index, laneId },
          {
            input,
            element,
            allowedEdges: ["top", "bottom"],
          }
        ),
      onDragEnter: ({ self, source }) => {
        if ((source?.data as { id?: string })?.id === id) {
          setOverEdge(null)
          return
        }
        const edge = extractClosestEdge(self.data as Record<string, unknown>)
        setOverEdge(edge === "top" || edge === "bottom" ? edge : null)
      },
      onDrag: ({ self, source }) => {
        if ((source?.data as { id?: string })?.id === id) {
          setOverEdge(null)
          return
        }
        const edge = extractClosestEdge(self.data as Record<string, unknown>)
        setOverEdge(edge === "top" || edge === "bottom" ? edge : null)
      },
      onDragLeave: () => setOverEdge(null),
      onDrop: () => setOverEdge(null),
    })
  }, [id, index, laneId])

  const isFirst = index === 0
  const isLast = index === total - 1

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!draggable) return
    // Don't intercept clicks on interactive elements (checkboxes, buttons, etc.)
    if (isInteractiveElement(e.target)) {
      return
    }
    if (props.onClick) {
      props.onClick()
      e.preventDefault()
      e.stopPropagation()
      return
    }
    if (linkRef.current) {
      linkRef.current.click()
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "group relative my-1",
        draggable && "cursor-grab active:cursor-grabbing",
        isFirst && "mt-1.5",
        isLast && "mb-1.5"
      )}
      data-kanban-card="true"
      data-index={index}
      data-lane-id={laneId}
      onClick={handleClick}
    >
      <CardInternal {...props} disableOverlayLink={draggable} />
      {props.link && (
        <F0Link
          ref={linkRef}
          href={props.link}
          className={cn(
            "!z-1 pointer-events-none absolute inset-0 block rounded-xl",
            focusRing()
          )}
          aria-label={props.title}
        >
          &nbsp;
        </F0Link>
      )}
      {showIndicator && (forcedEdge ?? overEdge) && (
        <>
          {(() => {
            const activeEdge = (forcedEdge ?? overEdge) as "top" | "bottom"
            const isEdgeDisabled = disabledEdges.includes(activeEdge)
            if (isEdgeDisabled) return null
            return (
              <DropIndicator
                edge={activeEdge}
                type="terminal-no-bleed"
                gap="4px"
              />
            )
          })()}
        </>
      )}
    </div>
  )
}
