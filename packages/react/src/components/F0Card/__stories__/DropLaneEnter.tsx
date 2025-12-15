import { useDroppableList } from "@/lib/dnd/hooks"
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"

export function DropLaneEnter({
  id,
  instanceId,
  onEnter,
  children,
}: {
  id: string
  instanceId: symbol
  onEnter?: (sourceId: string) => void
  children: React.ReactNode
}) {
  const laneRef = useRef<HTMLDivElement | null>(null)
  const [over, setOver] = useState(false)

  useDroppableList({
    ref: laneRef as React.RefObject<HTMLElement>,
    id,
    accepts: ["list-card"],
  })

  useEffect(() => {
    return monitorForElements({
      canMonitor: ({ source }) => source.data.instanceId === instanceId,
      onDropTargetChange: (args) => {
        const { location, source } = args
        const targets = location.current.dropTargets
        const overLane = targets.some((t) => t.data.type === "list-droppable" && t.data.id === id)
        const overCard = targets.some((t) => t.data.type === "list-card-target")
        const isEnter = overLane && !overCard
        setOver(isEnter)
        if (isEnter && onEnter) {
          const sourceId = String(source.data.id)
          onEnter(sourceId)
        }
      },
    })
  }, [instanceId, id, onEnter])

  return (
    <div>
      <p className="mb-2 text-xs text-f1-foreground-secondary">
        Intent: {over ? "enter-container" : "none"}
      </p>
      <div
        ref={laneRef}
        className={
          "flex w-full flex-col gap-0 rounded border p-2 " +
          (over ? " border-f1-border-hover" : " border-f1-border-secondary")
        }
      >
        {children}
      </div>
    </div>
  )
}
