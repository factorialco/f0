import { useDroppableList } from "@/lib/dnd/hooks"
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index"
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef } from "react"

export function DropLaneReorder({
  id,
  instanceId,
  getIndexById,
  onReorder,
  children,
}: {
  id: string
  instanceId: symbol
  getIndexById: (id: string) => number
  onReorder: (fromIndex: number, toIndex: number, sourceId: string) => void
  children: React.ReactNode
}) {
  const laneRef = useRef<HTMLDivElement | null>(null)

  useDroppableList({
    ref: laneRef as React.RefObject<HTMLElement>,
    id,
    accepts: ["list-card"],
  })

  useEffect(() => {
    return monitorForElements({
      canMonitor: ({ source }) => source.data.instanceId === instanceId,
      onDrop: ({ location, source }) => {
        if (!location.current.dropTargets.length) return
        // ensure we are dropping inside this lane
        const inThisLane = location.current.dropTargets.some(
          (t) => t.data.type === "list-droppable" && t.data.id === id
        )
        if (!inThisLane) return
        const sourceId = String(source.data.id)
        const cardTarget = location.current.dropTargets.find(
          (t) => t.data.type === "list-card-target"
        )
        // if no card target, drop at end
        const indexOfTarget: number = cardTarget
          ? Number(cardTarget.data.index)
          : getIndexById(sourceId)
        const closestEdge = cardTarget ? extractClosestEdge(cardTarget.data) : null
        const startIndex = getIndexById(sourceId)
        if (startIndex === -1) return
        const finishIndex = getReorderDestinationIndex({
          startIndex,
          indexOfTarget,
          closestEdgeOfTarget: closestEdge,
          axis: "vertical",
        })
        onReorder(startIndex, finishIndex, sourceId)
      },
    })
  }, [instanceId, id, getIndexById, onReorder])

  return (
    <div className="rounded border border-solid p-2">
      <p className="mb-2 text-xs text-f1-foreground-secondary">Lane: {id}</p>
      <div
        ref={laneRef}
        className="flex min-h-56 w-full flex-col gap-0 rounded border border-f1-border-secondary p-2"
      >
        {children}
      </div>
    </div>
  )
}
