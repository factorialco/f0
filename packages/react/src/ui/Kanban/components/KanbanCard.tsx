import { Link } from "@/components/Actions/Link"
import { CardInternal } from "@/components/F0Card/CardInternal"
import { useDraggable } from "@/lib/dnd/hooks"
import { cn, focusRing } from "@/lib/utils"
import {
  attachClosestEdge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { DropIndicator } from "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box"
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"

export type DragConfig<T = unknown> = { id: string; type?: string; data?: T }

export function KanbanCard<T = unknown>({
  drag,
  id,
  index,
  total,
  laneId,
  draggable = false,
  showIndicator = true,
  ...props
}: {
  drag: DragConfig<T>
  id: string
  index: number
  total: number
  laneId?: string
  draggable?: boolean
  showIndicator?: boolean
} & React.ComponentProps<typeof CardInternal>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const [overEdge, setOverEdge] = useState<"top" | "bottom" | null>(null)

  useDraggable<T>({
    ref: ref as React.RefObject<HTMLElement>,
    payload: { kind: drag.type ?? "list-card", id: drag.id, data: drag.data },
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
      onClick={handleClick}
    >
      <CardInternal {...props} disableOverlayLink={draggable} />
      {props.link && (
        <Link
          ref={linkRef}
          href={props.link}
          style={{
            zIndex: 1,
          }}
          className={cn(
            "z-1 pointer-events-none absolute inset-0 block rounded-xl",
            focusRing()
          )}
          aria-label={props.title}
        />
      )}
      {showIndicator && overEdge && (
        <DropIndicator edge={overEdge} type="terminal-no-bleed" gap="4px" />
      )}
    </div>
  )
}
