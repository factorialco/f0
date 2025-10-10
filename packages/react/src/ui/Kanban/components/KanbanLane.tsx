import type { RecordType } from "@/hooks/datasource"
import { useDndEvents, useDroppableList } from "@/lib/dnd/hooks"
import { cn } from "@/lib/utils"
import { DropTargetRecord } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types"
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import {
  cloneElement,
  isValidElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
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
  const outerRef = useRef<HTMLDivElement | null>(null)
  const measureRef = useRef<HTMLDivElement | null>(null)
  // const coordinator = useMoveCoordinator()
  const [isOver, setIsOver] = useState(false)
  const [calculatedHeight, setCalculatedHeight] = useState<number | null>(null)
  const hasFullDnD = Boolean(id && getLaneResourceIndexById)

  // Autoscroll state
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const speedPxPerSecRef = useRef<number>(0)
  const lastTimeRef = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [forcedIndex, setForcedIndex] = useState<number | null>(null)
  const [forcedEdge, setForcedEdge] = useState<"top" | "bottom" | null>(null)
  const [showEmptyLanePlaceholder, setShowEmptyLanePlaceholder] =
    useState(false)
  const [draggedItemIndex, setDraggedItemIndex] = useState<number>(-1)

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

    const findTypeOfDrop = (dropTargets: DropTargetRecord[]) =>
      findTypeOfDropForLane(id, dropTargets)

    return monitorForElements({
      onDropTargetChange: ({ location, source }) => {
        const overThisLane = location.current.dropTargets.some((t) => {
          const data = t.data as { type?: string; id?: string }
          return data.type === "list-droppable" && data.id === id
        })
        setIsOver(overThisLane)

        // Get source info
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
        const isSameLane = String(initialLaneId) === String(id)

        // Find source index using getKey for consistent identification
        const sourceIndex = laneProps.items.findIndex((item, idx) => {
          const itemKey = String(laneProps.getKey(item, idx))
          return itemKey === sourceId
        })

        // Track dragged item index in this lane (for preventing useless drop indicators)
        if (overThisLane && isSameLane) {
          setDraggedItemIndex(sourceIndex)
        } else if (!overThisLane || !isSameLane) {
          setDraggedItemIndex(-1)
        }

        // Check if lane is empty and should show placeholder
        if (overThisLane && isDragging && laneProps.items.length === 0) {
          setShowEmptyLanePlaceholder(true)
          setForcedIndex(null)
          setForcedEdge(null)
        } else if (overThisLane && isDragging && laneProps.items.length > 0) {
          setShowEmptyLanePlaceholder(false)
        }

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

              // If not directly over a card target, find nearest card and force indicator
              const hasCardTarget = location.current.dropTargets.some((t) => {
                const data = t.data as { type?: string }
                return data.type === "list-card-target"
              })
              if (!hasCardTarget) {
                const root = laneRef.current
                if (root) {
                  const cards = Array.from(
                    root.querySelectorAll(
                      `[data-kanban-card="true"][data-lane-id="${id}"]`
                    )
                  ) as HTMLDivElement[]
                  if (cards.length > 0) {
                    let nearestIdx = -1
                    let nearestDist = Number.POSITIVE_INFINITY
                    let nearestEdge: "top" | "bottom" = "top"
                    for (const el of cards) {
                      const idxAttr = el.getAttribute("data-index")
                      const idx = idxAttr ? Number(idxAttr) : -1
                      const r = el.getBoundingClientRect()
                      const midY = r.top + r.height / 2
                      const dist = Math.abs(clientY - midY)
                      if (dist < nearestDist) {
                        nearestDist = dist
                        nearestIdx = idx
                        nearestEdge = clientY < midY ? "top" : "bottom"
                      }
                    }

                    // Check if this would be a useless drop (same lane, same position)
                    const wouldBeUselessDrop =
                      isSameLane &&
                      sourceIndex >= 0 &&
                      // 1. Above itself
                      ((nearestIdx === sourceIndex && nearestEdge === "top") ||
                        // 2. Below itself
                        (nearestIdx === sourceIndex &&
                          nearestEdge === "bottom") ||
                        // 3. Below the card above (stays in same position)
                        (nearestIdx === sourceIndex - 1 &&
                          nearestEdge === "bottom") ||
                        // 4. Above the card below (stays in same position)
                        (nearestIdx === sourceIndex + 1 &&
                          nearestEdge === "top"))

                    if (wouldBeUselessDrop) {
                      // Don't show indicator for useless drops
                      setForcedIndex(null)
                      setForcedEdge(null)
                    } else {
                      setForcedIndex(nearestIdx >= 0 ? nearestIdx : null)
                      setForcedEdge(nearestIdx >= 0 ? nearestEdge : null)
                    }
                  }
                  // Note: Empty lane placeholder is handled at the top of onDropTargetChange
                }
              } else if (forcedIndex !== null || forcedEdge !== null) {
                // Clear forced indicator when a real card target is active
                setForcedIndex(null)
                setForcedEdge(null)
              }
            }
          }
        } else {
          speedPxPerSecRef.current = 0
          if (!overThisLane) {
            setForcedIndex(null)
            setForcedEdge(null)
            setShowEmptyLanePlaceholder(false)
            setDraggedItemIndex(-1)
          }
        }
      },
      onDrop: async ({ location, source }) => {
        setIsOver(false)
        setShowEmptyLanePlaceholder(false)
        const sourceId = String((source.data as { id?: string }).id)
        const sourceItem = source.data.data as TRecord

        // Find source index using getKey for consistency
        const resourceIndexOnLane = laneProps.items.findIndex((item, idx) => {
          const itemKey = String(laneProps.getKey(item, idx))
          return itemKey === sourceId
        })

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

        // Early check: prevent useless drops in same lane
        if (!isCrossLane && resourceIndexOnLane >= 0) {
          // Check if dropping on card target
          const cardTarget = location.current.dropTargets.find((t) => {
            const data = t.data as { type?: string }
            return data.type === "list-card-target"
          })

          if (cardTarget) {
            const targetIndex = (cardTarget.data as { index?: number }).index
            // Extract edge info from cardTarget
            const edge = (cardTarget.data as { closestEdge?: string })
              .closestEdge as "top" | "bottom" | undefined

            if (targetIndex !== undefined && edge) {
              // Check if this would be a useless drop based on target card and edge
              let wouldBeUselessDrop = false

              if (targetIndex === resourceIndexOnLane) {
                // Dropping on same card - always useless
                wouldBeUselessDrop = true
              } else if (
                targetIndex === resourceIndexOnLane - 1 &&
                edge === "bottom"
              ) {
                // Dropping below card above = stays in same position
                wouldBeUselessDrop = true
              } else if (
                targetIndex === resourceIndexOnLane + 1 &&
                edge === "top"
              ) {
                // Dropping above card below = stays in same position
                wouldBeUselessDrop = true
              }

              if (wouldBeUselessDrop) {
                return
              }
            }
          }
        }

        // Check if this would be a useless drop in same lane
        if (!isCrossLane && forcedIndex !== null && forcedEdge !== null) {
          const wouldBeUselessDrop =
            (forcedIndex === resourceIndexOnLane && forcedEdge === "top") ||
            (forcedIndex === resourceIndexOnLane && forcedEdge === "bottom") ||
            (forcedIndex === resourceIndexOnLane - 1 &&
              forcedEdge === "bottom") ||
            (forcedIndex === resourceIndexOnLane + 1 && forcedEdge === "top")

          if (wouldBeUselessDrop) {
            setForcedIndex(null)
            setForcedEdge(null)
            return
          }
        }

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
          } else if (forcedIndex !== null && forcedEdge) {
            onMoveParams = {
              fromLaneId: initialLaneId,
              toLaneId: id as string,
              sourceId,
              indexOfTarget: forcedIndex,
              position: forcedEdge === "bottom" ? "below" : "above",
            }
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
          } else if (forcedIndex !== null && forcedEdge) {
            onMoveParams = {
              fromLaneId: initialLaneId,
              toLaneId: id as string,
              sourceId,
              indexOfTarget: forcedIndex,
              position: forcedEdge === "bottom" ? "below" : "above",
            }
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

        // Additional check: prevent useless drops in same lane with final computed params
        if (!isCrossLane && onMoveParams.indexOfTarget !== undefined) {
          const targetIdx = onMoveParams.indexOfTarget
          const position = onMoveParams.position
          const wouldBeUselessDrop =
            (targetIdx === resourceIndexOnLane && position === "above") ||
            (targetIdx === resourceIndexOnLane && position === "below") ||
            (targetIdx === resourceIndexOnLane - 1 && position === "below") ||
            (targetIdx === resourceIndexOnLane + 1 && position === "above")

          if (wouldBeUselessDrop) {
            return
          }
        }

        // Single upward call. Parent/Story updates state; coordinator not needed here.
        await onMove?.(onMoveParams)
        setForcedIndex(null)
        setForcedEdge(null)
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    id,
    getLaneResourceIndexById,
    onMove,
    isDragging,
    laneProps.items,
    laneProps.getKey,
    forcedIndex,
    forcedEdge,
  ])

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
    if (phase === "start") {
      setIsDragging(true)
    }
    if (phase === "drop" || phase === "cancel") {
      setIsDragging(false)
      setShowEmptyLanePlaceholder(false)
      setForcedIndex(null)
      setForcedEdge(null)
      setDraggedItemIndex(-1)
    }
  })

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

  // Calculate dynamic height based on content and container
  useLayoutEffect(() => {
    const measure = measureRef.current
    const outer = outerRef.current
    if (!measure || !outer) return

    let rafId: number | null = null
    let lastCalculatedHeight: number | null = null

    const calculateHeight = () => {
      // Get parent flex container (the one with items-start)
      const flexContainer = outer.parentElement?.parentElement
      if (!flexContainer) return

      // Get max available height from the flex container
      const maxHeight = flexContainer.offsetHeight

      // Temporarily remove height constraint to measure natural content height
      const originalHeight = outer.style.height
      outer.style.height = "auto"

      // Force reflow to ensure accurate measurement
      void measure.offsetHeight

      // Get natural content height by looking at the Lane component inside
      const contentHeight = measure.scrollHeight

      // Restore constraint
      outer.style.height = originalHeight

      // Calculate final height based on parent constraints
      let finalHeight: number
      const MIN_HEIGHT = 400 // Minimum height when no parent constraint

      // If parent height is very small (< 100px), it means no real constraint
      // Parent likely has no defined height and is collapsing
      if (maxHeight < 100) {
        // No real height constraint from parent
        // Use content height but ensure a minimum
        finalHeight = Math.max(contentHeight, MIN_HEIGHT)
      } else {
        // Parent has meaningful height constraint - cap at parent height
        finalHeight = Math.min(contentHeight, maxHeight)
      }

      // Only update if height changed by more than 1px (avoid unnecessary re-renders)
      if (
        lastCalculatedHeight === null ||
        Math.abs(finalHeight - lastCalculatedHeight) > 1
      ) {
        lastCalculatedHeight = finalHeight
        setCalculatedHeight(finalHeight)
      }
    }

    // Calculate immediately in layout effect
    calculateHeight()

    // Debounced recalculation using requestAnimationFrame
    const scheduleCalculation = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(() => {
        calculateHeight()
        rafId = null
      })
    }

    // Observe changes in content
    const resizeObserver = new ResizeObserver(scheduleCalculation)

    resizeObserver.observe(measure)

    // Also observe the flex container for viewport changes
    const flexContainer = outer.parentElement?.parentElement
    if (flexContainer) {
      resizeObserver.observe(flexContainer)
    }

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      resizeObserver.disconnect()
    }
  }, [laneProps.items.length, laneProps.loading, showEmptyLanePlaceholder])

  return (
    <div
      ref={outerRef}
      className="relative rounded"
      style={{
        height: calculatedHeight ? `${calculatedHeight}px` : undefined,
      }}
    >
      <div
        ref={laneRef}
        className={
          "relative flex h-full w-full flex-col gap-0 rounded-xl border transition-colors"
        }
        style={{
          backgroundColor: isOver
            ? "hsla(210, 91%, 22%, 0.08)"
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
        <div ref={measureRef} className="flex h-full flex-col">
          <Lane<TRecord>
            {...laneProps}
            dropPlaceholderIndex={
              showEmptyLanePlaceholder && laneProps.items.length === 0
                ? 0
                : undefined
            }
            renderCard={(item, index) => {
              const node = laneProps.renderCard(item, index)
              if (isValidElement(node)) {
                const edge = index === forcedIndex ? forcedEdge : null

                // Determine which edges should be disabled for this card to prevent useless drops
                const disabledEdges: Array<"top" | "bottom"> = []
                if (draggedItemIndex >= 0) {
                  if (index === draggedItemIndex) {
                    // The dragged card itself - disable both edges
                    disabledEdges.push("top", "bottom")
                  } else if (index === draggedItemIndex - 1) {
                    // Card immediately above - disable bottom edge
                    // (dropping below it would be same position as current dragged item)
                    disabledEdges.push("bottom")
                  } else if (index === draggedItemIndex + 1) {
                    // Card immediately below - disable top edge
                    // (dropping above it would be same position as current dragged item)
                    disabledEdges.push("top")
                  }
                }

                return cloneElement(
                  node as React.ReactElement<Record<string, unknown>>,
                  {
                    forcedEdge: edge,
                    disabledEdges,
                  }
                )
              }
              return node
            }}
          />
        </div>
      </div>
    </div>
  )
}
