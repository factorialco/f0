import { ScrollArea } from "@/experimental/Utilities/ScrollArea"
import type { RecordType } from "@/hooks/datasource"
import { useDndEvents } from "@/lib/dnd/hooks"
import { cn } from "@/lib/utils"
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"
import { KanbanLane } from "./components/KanbanLane.tsx"
import type {
  KanbanLaneAttributes,
  KanbanOnMoveParam,
  KanbanProps,
} from "./types.ts"

export function Kanban<TRecord extends RecordType>(
  props: KanbanProps<TRecord>
): JSX.Element {
  const { lanes, renderCard, getKey, className, dnd, loading } = props

  // Local source-of-truth for lanes to orchestrate moves centrally
  const [localLanes, setLocalLanes] = useState(
    () => lanes as KanbanProps<TRecord>["lanes"]
  )
  useEffect(() => {
    setLocalLanes(lanes)
  }, [lanes])

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

  const getIndexById = (laneId: string, id: string): number => {
    const lane = localLanes.find((l) => l.id === laneId)
    if (!lane) return -1
    return lane.items.findIndex((item, index) => {
      const key = String(getKey(item as TRecord, index, laneId))
      return key === String(id)
    })
  }

  const onMove = async (params: KanbanOnMoveParam) => {
    const { fromLaneId, toLaneId, sourceId, indexOfTarget, position } = params

    // Snapshot
    const prev = localLanes

    // Find source record and indices in snapshot (robust to mis-reported fromLaneId)
    let fromLaneIdx = prev.findIndex((l) => l.id === fromLaneId)
    const toLaneIdx = prev.findIndex((l) => l.id === toLaneId)
    if (toLaneIdx === -1) return Promise.reject(new Error("Lane not found"))
    let sourceIndex = -1
    if (fromLaneIdx !== -1) {
      sourceIndex = prev[fromLaneIdx].items.findIndex((item, index) => {
        const key = String(getKey(item as TRecord, index, fromLaneId))
        return key === String(sourceId)
      })
    }
    if (sourceIndex === -1) {
      for (let i = 0; i < prev.length; i++) {
        const laneId = prev[i].id as string
        const idx = prev[i].items.findIndex((item, index) => {
          const key = String(getKey(item as TRecord, index, laneId))
          return key === String(sourceId)
        })
        if (idx !== -1) {
          fromLaneIdx = i
          sourceIndex = idx
          break
        }
      }
    }
    if (fromLaneIdx === -1 || sourceIndex === -1) {
      return Promise.resolve(undefined as unknown as TRecord)
    }
    const sourceRecord = prev[fromLaneIdx].items[sourceIndex] as TRecord

    // Compute insertion index
    let insertIndex = 0
    if (indexOfTarget == null) {
      insertIndex = 0
    } else {
      insertIndex = indexOfTarget + (position === "below" ? 1 : 0)
    }

    // Build next lanes state (also adjust totals if provided by lanes)
    const isSameLane = fromLaneId === toLaneId
    const next = prev.map((lane, idx) => {
      if (idx === fromLaneIdx && isSameLane) {
        // Same lane reorder
        const items = [...lane.items]
        items.splice(sourceIndex, 1)
        // Adjust index after removal
        const adjustedIndex =
          sourceIndex < insertIndex ? insertIndex - 1 : insertIndex
        items.splice(adjustedIndex, 0, sourceRecord)
        return { ...lane, items }
      }
      if (idx === fromLaneIdx) {
        const items = [...lane.items]
        items.splice(sourceIndex, 1)
        const nextTotal =
          typeof lane.total === "number" && !isSameLane
            ? Math.max(0, lane.total - 1)
            : lane.total
        return { ...lane, items, total: nextTotal }
      }
      if (idx === toLaneIdx) {
        const items = [...lane.items]
        const boundedIndex = Math.max(0, Math.min(insertIndex, items.length))
        items.splice(boundedIndex, 0, sourceRecord)
        const nextTotal =
          typeof lane.total === "number" && !isSameLane
            ? lane.total + 1
            : lane.total
        return { ...lane, items, total: nextTotal }
      }
      return lane
    })

    // Optimistic apply
    setLocalLanes(next)

    try {
      // Call external move if provided
      const destinyRecord =
        indexOfTarget == null
          ? null
          : (prev[toLaneIdx].items[indexOfTarget] as TRecord | undefined)
      const result = await dnd?.onMove?.(
        fromLaneId,
        toLaneId,
        sourceRecord,
        destinyRecord
          ? {
              record: destinyRecord,
              position: (position as "above" | "below") ?? "above",
            }
          : null
      )

      if (result) {
        // Replace record by id with backend version
        setLocalLanes((curr) =>
          curr.map((lane) => {
            if (lane.id !== toLaneId) return lane
            const items = [...lane.items]
            const idx = items.findIndex((item, index) => {
              const key = String(getKey(item as TRecord, index, toLaneId))
              return key === String(sourceId)
            })
            if (idx !== -1) items.splice(idx, 1, result)
            return { ...lane, items }
          })
        )
      }
      return result as TRecord
    } catch (e) {
      // Rollback
      setLocalLanes(prev)
      throw e
    }
  }

  return (
    <div className={cn("relative h-full w-full px-4", className)}>
      <ScrollArea
        className={"relative h-full w-full [&>div>div]:h-full"}
        viewportRef={viewportRef}
      >
        <div className="relative mb-2 flex h-full gap-2">
          {localLanes.map(
            (lane: KanbanLaneAttributes<TRecord>, laneIndex: number) => {
              const total = lane.total ?? lane.items.length
              return (
                <div
                  key={lane.id ?? String(laneIndex)}
                  className="relative h-full shrink-0"
                  data-testid={`lane-${lane.id ?? String(laneIndex)}`}
                >
                  <KanbanLane<TRecord>
                    id={lane.id}
                    getLaneResourceIndexById={
                      lane.id
                        ? (id) => getIndexById(lane.id as string, id)
                        : undefined
                    }
                    onMove={onMove}
                    title={lane.title}
                    items={lane.items}
                    getKey={(item, index) => getKey(item, index, lane.id)}
                    renderCard={(item, index) => {
                      const node = renderCard(item, index, total, lane.id)
                      return node
                    }}
                    emptyState={lane.emptyState}
                    loading={loading || lane.loading}
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
