import type { RecordType } from "@/hooks/datasource"
import { useDndEvents, useDroppableList } from "@/lib/dnd/hooks"
import { cn } from "@/lib/utils"
import { DropTargetRecord } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types"
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"
import { Lane } from "../../Lane"
import type { LaneProps } from "../../Lane/types"
import { KanbanOnMoveParam } from "../types"
import {
  findTypeOfDropForLane,
  optimisticDifferentLaneInsertOverCard,
  optimisticDifferentLaneInsertOverEmpty,
  optimisticSameLaneOverCard,
  optimisticSameLaneOverEmpty,
} from "./kanbanLane.handlers"

export function KanbanLane<TRecord extends RecordType>({
  id,
  getLaneResourceIndexById,
  onMove,
  ...laneProps
}: {
  id?: string
  getLaneResourceIndexById?: (id: string) => number
  onMove?: (param: KanbanOnMoveParam) => Promise<TRecord>
  allowReorder?: boolean
} & LaneProps<TRecord>) {
  const laneRef = useRef<HTMLDivElement | null>(null)
  const [isOver, setIsOver] = useState(false)
  const hasFullDnD = Boolean(id && getLaneResourceIndexById)

  // Autoscroll state
  const viewportRef = useRef<HTMLDivElement | null>(null)

  useDroppableList(
    hasFullDnD
      ? {
          ref: laneRef as React.RefObject<HTMLElement>,
          id: id as string,
          accepts: ["list-card"],
        }
      : undefined
  )

  // Minimal DnD wiring: only compute params and forward to parent; no local state mutation
  const rafRef = useRef<number | null>(null)
  const speedPxPerSecRef = useRef<number>(0)
  const lastTimeRef = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  // Time-based vertical scroll during drag
  useEffect(() => {
    const step = () => {
      const now = performance.now()
      const last = lastTimeRef.current ?? now
      const dtSec = (now - last) / 1000
      lastTimeRef.current = now
      const vp = viewportRef.current
      if (!isDragging || speedPxPerSecRef.current === 0) {
        if (rafRef.current != null) {
          window.cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
        lastTimeRef.current = null
        return
      }
      if (vp) vp.scrollTop += speedPxPerSecRef.current * dtSec
      rafRef.current = window.requestAnimationFrame(step)
    }

    if (
      rafRef.current == null &&
      isDragging &&
      speedPxPerSecRef.current !== 0
    ) {
      lastTimeRef.current = null
      rafRef.current = window.requestAnimationFrame(step)
    }

    return () => {
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      lastTimeRef.current = null
      speedPxPerSecRef.current = 0
    }
  }, [isDragging])

  useEffect(() => {
    if (!id) return

    const ensureLoop = () => {
      if (rafRef.current == null && speedPxPerSecRef.current !== 0) {
        lastTimeRef.current = null
        rafRef.current = window.requestAnimationFrame(() => {
          const now = performance.now()
          lastTimeRef.current = now
          rafRef.current = window.requestAnimationFrame(function loop() {
            const prev = lastTimeRef.current ?? performance.now()
            const curr = performance.now()
            const dt = (curr - prev) / 1000
            lastTimeRef.current = curr
            const vp2 = viewportRef.current
            if (!isDragging || speedPxPerSecRef.current === 0) {
              if (rafRef.current != null) {
                window.cancelAnimationFrame(rafRef.current)
                rafRef.current = null
              }
              return
            }
            if (vp2) vp2.scrollTop += speedPxPerSecRef.current * dt
            rafRef.current = window.requestAnimationFrame(loop)
          })
        })
      }
    }

    const findTypeOfDrop = (dropTargets: DropTargetRecord[]) =>
      findTypeOfDropForLane(id, dropTargets)

    return monitorForElements({
      onDropTargetChange: ({ location }) => {
        const overThisLane = location.current.dropTargets.some((t) => {
          const data = t.data as { type?: string; id?: string }
          return data.type === "list-droppable" && data.id === id
        })
        setIsOver(overThisLane)

        if (overThisLane && isDragging) {
          const host = viewportRef.current || laneRef.current
          if (host) {
            const rect = host.getBoundingClientRect()
            const clientY = (
              location.current as unknown as {
                input?: { clientY?: number }
              }
            ).input?.clientY
            const clientX = (
              location.current as unknown as {
                input?: { clientX?: number }
              }
            ).input?.clientX
            if (typeof clientY === "number" && typeof clientX === "number") {
              const centerY = rect.top + rect.height / 2
              const delta = clientY - centerY
              const deadZone = 24
              const maxSpeed = 300 // px/s
              const maxDistance = rect.height / 2
              let speed = 0
              if (Math.abs(delta) > deadZone) {
                const effective = Math.min(
                  Math.abs(delta) - deadZone,
                  maxDistance
                )
                const normalized = effective / maxDistance
                speed = Math.sign(delta) * maxSpeed * normalized
              }
              speedPxPerSecRef.current = speed
              ensureLoop()
            }
          }
        } else {
          speedPxPerSecRef.current = 0
        }
      },
      onDrop: async ({ location, source }) => {
        const sourceId = String((source.data as { id?: string }).id)
        const sourceItem = source.data.data as TRecord
        const resourceIndexOnLane = laneProps.items.findIndex(
          (item) => (item as unknown as { id?: string }).id === sourceId
        )
        const sourceLaneIdFromPayload = String(
          (source.data as unknown as { data?: { laneId?: string } }).data
            ?.laneId ?? ""
        )
        const initialLaneId =
          sourceLaneIdFromPayload ||
          String(
            (
              location.initial.dropTargets.find(
                (t) => (t.data as { type?: string }).type === "list-droppable"
              )?.data as { id?: string }
            )?.id ?? ""
          )

        const isCrossLane = String(initialLaneId) !== String(id)

        // Only the lane actually under the pointer should handle the drop
        const overThisLane = location.current.dropTargets.some((t) => {
          const data = t.data as { type?: string; id?: string }
          return data.type === "list-droppable" && data.id === id
        })
        if (!overThisLane) {
          return
        }

        let onMoveParams: KanbanOnMoveParam | null = null
        const { type: typeOfDrop, cardTarget } = findTypeOfDrop(
          location.current.dropTargets
        )

        // Only compute params; do not mutate items locally. Parent will update lanes.
        if (!isCrossLane) {
          // Same-lane reorder
          if (
            typeOfDrop === "sameLaneOverCard" &&
            cardTarget &&
            cardTarget.data
          ) {
            onMoveParams = optimisticSameLaneOverCard<TRecord>({
              resourceIndexOnLane,
              cardTarget,
              sourceItem,
              fromLaneId: initialLaneId,
              toLaneId: id as string,
              sourceId,
              setItems: () => {},
            })
          } else {
            onMoveParams = optimisticSameLaneOverEmpty<TRecord>({
              resourceIndexOnLane,
              sourceItem,
              fromLaneId: initialLaneId,
              toLaneId: id as string,
              sourceId,
              setItems: () => {},
            })
          }
        } else {
          // Cross-lane destination insert. Ignore typeOfDrop label; rely on cardTarget presence
          if (cardTarget && cardTarget.data) {
            onMoveParams = optimisticDifferentLaneInsertOverCard<TRecord>({
              cardTarget,
              sourceItem,
              fromLaneId: initialLaneId,
              toLaneId: id as string,
              sourceId,
              setItems: () => {},
            })
          } else {
            onMoveParams = optimisticDifferentLaneInsertOverEmpty<TRecord>({
              sourceItem,
              fromLaneId: initialLaneId,
              toLaneId: id as string,
              sourceId,
              setItems: () => {},
            })
          }
        }

        if (!onMoveParams) {
          return
        }

        // Forward to parent
        await onMove?.(onMoveParams)
      },
    })
  }, [id, getLaneResourceIndexById, onMove, isDragging, laneProps.items])

  // Track drag lifecycle via DnD driver
  useDndEvents(({ phase }) => {
    if (phase === "start") setIsDragging(true)
    if (phase === "drop" || phase === "cancel") setIsDragging(false)
  })

  // Resolve viewport and observe DOM changes to re-resolve
  useEffect(() => {
    const resolve = () => {
      const root = laneRef.current
      if (!root) return null
      viewportRef.current = root.querySelector(
        "[data-scroll-container]"
      ) as HTMLDivElement | null
      return viewportRef.current
    }
    resolve()

    const root = laneRef.current
    if (!root) return
    const observer = new MutationObserver(() => {
      resolve()
    })
    observer.observe(root, { subtree: true, childList: true })
    return () => observer.disconnect()
  }, [id])

  // Drag lifecycle handled by parent Kanban

  // Test hook: allow stories to trigger onMove without real DnD
  useEffect(() => {
    const handler = (e: Event) => {
      if (!id) return
      const detail = (
        e as CustomEvent<
          | {
              fromLaneId: string
              toLaneId: string
              sourceId: string
              indexOfTarget: number
              position: "above" | "below"
            }
          | {
              fromLaneId: string
              toLaneId: string
              sourceId: string
              indexOfTarget: null
              position: null
            }
        >
      ).detail
      if (!detail) return
      if (detail.toLaneId !== id) return
      void onMove?.(detail).catch(() => {})
    }
    window.addEventListener("kanban-test-move", handler as EventListener)
    return () =>
      window.removeEventListener("kanban-test-move", handler as EventListener)
  }, [id, onMove])

  return (
    <div className="h-full rounded">
      <div
        ref={laneRef}
        className={
          "relative flex h-full min-h-56 w-full flex-col gap-0 rounded-xl border transition-colors"
        }
        style={{
          backgroundColor: isOver
            ? "hsla(210, 91%, 22%, 0.04)"
            : "hsla(210, 91%, 22%, 0.02)",
        }}
      >
        {/* Debug overlay (non-interactive) */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-[1]",
            isOver ? "bg-transparent" : "bg-transparent"
          )}
          aria-hidden
        />
        <Lane<TRecord> {...laneProps} />
      </div>
    </div>
  )
}
