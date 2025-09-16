import { F0Card } from "@/components/F0Card"
import { useDraggable } from "@/lib/dnd/hooks"
import { cn } from "@/lib/utils"
import {
  attachClosestEdge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { DropIndicator } from "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box"
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"

type DragConfig = { id: string; type?: string; data?: Record<string, unknown> }

export function KanbanCard({
  drag,
  id,
  index,
  total,
  laneId,
  draggable = false,
  showIndicator = true,
  ...props
}: {
  drag: DragConfig
  id: string
  index: number
  total: number
  laneId?: string
  draggable?: boolean
  showIndicator?: boolean
} & React.ComponentProps<typeof F0Card>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [overEdge, setOverEdge] = useState<"top" | "bottom" | null>(null)

  useDraggable({
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

  return (
    <div
      ref={ref}
      className={cn(
        "group relative my-1",
        draggable && "cursor-grab active:cursor-grabbing",
        isFirst && "mt-1.5",
        isLast && "mb-1.5"
      )}
    >
      <F0Card {...props} />
      {showIndicator && overEdge && (
        <DropIndicator edge={overEdge} type="terminal-no-bleed" gap="4px" />
      )}
    </div>
  )
}
