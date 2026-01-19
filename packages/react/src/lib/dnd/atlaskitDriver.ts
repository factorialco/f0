import { attachClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine"
import {
  draggable,
  dropTargetForElements,
  monitorForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import type { DndDriver, DragPayload, DropIntent } from "./types"

type Subscriber = (e: {
  phase: "start" | "over" | "drop" | "cancel"
  source: DragPayload
  intent?: DropIntent
}) => void

export function createAtlaskitDriver(instanceId: symbol): DndDriver {
  const subscribers = new Set<Subscriber>()

  // global monitor
  combine(
    monitorForElements({
      canMonitor(args) {
        return args.source.data.instanceId === instanceId
      },
      onDragStart(args) {
        const payload = args.source.data as DragPayload
        subscribers.forEach((cb) => cb({ phase: "start", source: payload }))
      },
      onDrop(args) {
        const payload = args.source.data as DragPayload
        subscribers.forEach((cb) => cb({ phase: "drop", source: payload }))
      },
      onDropTargetChange(args) {
        const payload = args.source.data as DragPayload
        subscribers.forEach((cb) => cb({ phase: "over", source: payload }))
      },
    })
  )

  return {
    registerDraggable(el, { payload, disabled, handle }) {
      if (disabled) return () => {}
      // Store payload in closure to ensure we always use the latest payload
      // even if the component re-renders during drag
      let currentPayload = payload
      const cleanup = draggable({
        element: el,
        getInitialData: () => {
          return { ...currentPayload, instanceId }
        },
        dragHandle: handle ?? undefined,
      })
      // Return cleanup function that also allows updating payload
      const cleanupFn = () => {
        cleanup()
      }
      // Store update function on cleanup (hacky but works)
      ;(cleanupFn as any).updatePayload = (newPayload: typeof payload) => {
        currentPayload = newPayload
      }
      return cleanupFn
    },
    registerDroppable(el, { id }) {
      return dropTargetForElements({
        element: el,
        getData: ({ input, element }) =>
          attachClosestEdge(
            { type: "list-droppable", index: 0, id },
            {
              input,
              element,
              allowedEdges: ["top", "bottom"],
            }
          ),
      })
    },
    subscribe(cb) {
      subscribers.add(cb)
      return () => subscribers.delete(cb)
    },
  }
}
