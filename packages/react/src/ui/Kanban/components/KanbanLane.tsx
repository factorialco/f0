import type { RecordType } from "@/experimental/OneDataCollection/types"
import { useDndEvents, useDroppableList } from "@/lib/dnd/hooks"
import { cn } from "@/lib/utils"
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index"
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"
import { Lane } from "../../Lane"
import type { LaneProps } from "../../Lane/types"

export function KanbanLane<TRecord extends RecordType>({
  id,
  getIndexById,
  onMove,
  ...laneProps
}: {
  id?: string
  getIndexById?: (id: string) => number
  onMove?: (
    fromLaneId: string,
    toLaneId: string,
    sourceId: string,
    toIndex: number | null
  ) => void
  allowReorder?: boolean
} & LaneProps<TRecord>) {
  const laneRef = useRef<HTMLDivElement | null>(null)
  const [isOver, setIsOver] = useState(false)
  const hasFullDnD = Boolean(id && getIndexById)

  // Autoscroll state
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const speedPxPerSecRef = useRef<number>(0)
  const lastTimeRef = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  useDroppableList(
    hasFullDnD
      ? {
          ref: laneRef as React.RefObject<HTMLElement>,
          id: id as string,
          accepts: ["list-card"],
        }
      : undefined
  )

  // Time-based scroll loop
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
      onDrop: ({ location, source }) => {
        if (!location.current.dropTargets.length) return
        const inThisLane = location.current.dropTargets.some(
          (t) =>
            (t.data as { type?: string; id?: string }).type ===
              "list-droppable" &&
            (t.data as { type?: string; id?: string }).id === id
        )
        if (!inThisLane) return
        const sourceId = String((source.data as { id?: string }).id)
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
        const isSameLane = Boolean(initialLaneId && id && initialLaneId === id)

        if (!isSameLane && onMove && initialLaneId) {
          const cardTarget = location.current.dropTargets.find(
            (t) => (t.data as { type?: string }).type === "list-card-target"
          ) as { data?: { index?: number } } | undefined
          const indexOfTarget: number | null = cardTarget
            ? Number(cardTarget.data?.index)
            : null
          const edge = cardTarget?.data
            ? extractClosestEdge(cardTarget.data as Record<string, unknown>)
            : null
          const toIndex =
            indexOfTarget === null
              ? null
              : edge === "bottom"
                ? indexOfTarget + 1
                : indexOfTarget
          onMove(initialLaneId, id, sourceId, toIndex)
          setIsOver(false)
          return
        }

        if (!isSameLane || !getIndexById) return
        const cardTarget = location.current.dropTargets.find(
          (t) => (t.data as { type?: string }).type === "list-card-target"
        ) as { data?: { index?: number } } | undefined
        const indexOfTarget: number = cardTarget
          ? Number(cardTarget.data?.index)
          : 0
        const closestEdge =
          cardTarget && cardTarget.data
            ? extractClosestEdge(cardTarget.data as Record<string, unknown>)
            : null
        const startIndex = getIndexById(sourceId)
        if (startIndex === -1) return
        const finishIndex = getReorderDestinationIndex({
          startIndex,
          indexOfTarget,
          closestEdgeOfTarget: closestEdge,
          axis: "vertical",
        })
        if (onMove && initialLaneId) {
          onMove(initialLaneId, id as string, sourceId, finishIndex)
        }
        setIsOver(false)
      },
    })
  }, [id, getIndexById, onMove, isDragging])

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

  // Track drag lifecycle via DnD driver
  useDndEvents(({ phase }) => {
    if (phase === "start") setIsDragging(true)
    if (phase === "drop" || phase === "cancel") setIsDragging(false)
  })

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
          ref={overlayRef}
          className={cn(
            "pointer-events-none absolute inset-0 z-[1]",
            isDragging ? "bg-transparent" : "bg-transparent"
          )}
          aria-hidden
        />
        <Lane<TRecord> {...laneProps} />
      </div>
    </div>
  )
}
