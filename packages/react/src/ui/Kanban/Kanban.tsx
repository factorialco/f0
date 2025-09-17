import { ScrollArea } from "@/experimental"
import type { RecordType } from "@/hooks/datasource"
import { useDndEvents } from "@/lib/dnd/hooks"
import { cn } from "@/lib/utils"
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"
import { KanbanLane } from "./components/KanbanLane"
import type { KanbanLaneAttributes, KanbanProps } from "./types.ts"

const KANBAN_LANE_HEIGHT = 700

export function Kanban<TRecord extends RecordType>(
  props: KanbanProps<TRecord>
): JSX.Element {
  const { lanes, renderCard, getKey, className, dnd } = props

  // Horizontal edge zones for board autoscroll (debug visibility + logs)
  const [isDragging, setIsDragging] = useState(false)
  const leftEdgeRef = useRef<HTMLDivElement | null>(null)
  const rightEdgeRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const speedPxPerSecRef = useRef<number>(0)
  const lastTimeRef = useRef<number | null>(null)

  useDndEvents(({ phase }) => {
    if (phase === "start") setIsDragging(true)
    if (phase === "drop" || phase === "cancel") setIsDragging(false)
  })

  // Resolve ScrollArea viewport
  useEffect(() => {
    const root = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLDivElement | null
    viewportRef.current = root
  }, [])

  useEffect(() => {
    const step = () => {
      const now = performance.now()
      const last = lastTimeRef.current ?? now
      const dtSec = (now - last) / 1000
      lastTimeRef.current = now
      const vp = viewportRef.current
      if (!isDragging || !vp || speedPxPerSecRef.current === 0) {
        if (rafRef.current != null) {
          window.cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
        lastTimeRef.current = null
        return
      }
      vp.scrollLeft += speedPxPerSecRef.current * dtSec
      rafRef.current = window.requestAnimationFrame(step)
    }

    const start = (speedPxPerSec: number) => {
      speedPxPerSecRef.current = speedPxPerSec
      if (rafRef.current == null) {
        lastTimeRef.current = null
        rafRef.current = window.requestAnimationFrame(step)
      }
    }

    const stop = () => {
      speedPxPerSecRef.current = 0
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      lastTimeRef.current = null
    }

    const cleanups: Array<() => void> = []
    if (leftEdgeRef.current) {
      cleanups.push(
        dropTargetForElements({
          element: leftEdgeRef.current,
          getData: () => ({ type: "board-scroll-edge", edge: "left" }),
          onDragEnter: () => start(-400),
          onDrag: () => start(-400),
          onDragLeave: () => stop(),
          onDrop: () => stop(),
        })
      )
    }
    if (rightEdgeRef.current) {
      cleanups.push(
        dropTargetForElements({
          element: rightEdgeRef.current,
          getData: () => ({ type: "board-scroll-edge", edge: "right" }),
          onDragEnter: () => start(400),
          onDrag: () => start(400),
          onDragLeave: () => stop(),
          onDrop: () => stop(),
        })
      )
    }

    return () => {
      cleanups.forEach((c) => c())
      stop()
    }
  }, [isDragging])

  return (
    <div className={cn("relative w-full", className)}>
      <ScrollArea className={"w-full"}>
        <div className="mb-2 flex gap-2">
          {lanes.map(
            (lane: KanbanLaneAttributes<TRecord>, laneIndex: number) => {
              const total = lane.total ?? lane.items.length
              return (
                <div key={lane.id ?? String(laneIndex)} className="shrink-0">
                  <KanbanLane<TRecord>
                    id={lane.id}
                    getIndexById={
                      lane.id && dnd
                        ? (id) => dnd.getIndexById(lane.id as string, id)
                        : undefined
                    }
                    onMove={dnd?.onMove}
                    title={lane.title}
                    items={lane.items}
                    getKey={(item, index) => getKey(item, index, lane.id)}
                    renderCard={(item, index) => {
                      const node = renderCard(item, index, total, lane.id)
                      return node
                    }}
                    emptyState={lane.emptyState}
                    loading={lane.loading}
                    maxHeight={KANBAN_LANE_HEIGHT}
                    variant={lane.variant}
                    total={total}
                    hasMore={lane.hasMore}
                    loadingMore={lane.loadingMore}
                    fetchMore={lane.fetchMore}
                  />
                </div>
              )
            }
          )}
        </div>
      </ScrollArea>
      {/* Horizontal edge zones (invisible during drag) */}
      <div
        ref={leftEdgeRef}
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-[9999] h-full w-12 select-none",
          isDragging ? "pointer-events-auto" : "opacity-0"
        )}
        aria-hidden
      />
      <div
        ref={rightEdgeRef}
        className={cn(
          "pointer-events-none absolute right-0 top-0 z-[9999] h-full w-12 select-none",
          isDragging ? "pointer-events-auto" : "opacity-0"
        )}
        aria-hidden
      />
    </div>
  )
}
