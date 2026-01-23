import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"

import { useDroppableList } from "@/lib/dnd/hooks"

export function DropLaneCancel({
  id,
  instanceId,
  children,
}: {
  id: string
  instanceId: symbol
  children: React.ReactNode
}) {
  const laneRef = useRef<HTMLDivElement | null>(null)
  const [cancel, setCancel] = useState(false)

  useDroppableList({
    ref: laneRef as React.RefObject<HTMLElement>,
    id,
    accepts: ["list-card"],
  })

  useEffect(() => {
    return monitorForElements({
      canMonitor: ({ source }) => source.data.instanceId === instanceId,
      onDropTargetChange: ({ location }) => {
        const targets = location.current.dropTargets
        const hasLane = targets.some((t) => t.data.type === "list-droppable")
        const hasCard = targets.some((t) => t.data.type === "list-card-target")
        setCancel(hasLane && !hasCard)
      },
    })
  }, [instanceId])

  return (
    <div>
      <p className="mb-2 text-xs text-f1-foreground-secondary">
        Lane: {id} — Intent: {cancel ? "cancel" : "none"}
      </p>
      <div
        ref={laneRef}
        className={
          "flex w-full flex-col gap-0 rounded border border-solid p-2 " +
          (cancel
            ? "cursor-not-allowed border-f1-border-secondary"
            : "border-f1-border-secondary")
        }
      >
        {children}
      </div>
    </div>
  )
}
