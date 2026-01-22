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
      return draggable({
        element: el,
        getInitialData: () => ({ ...payload, instanceId }),
        dragHandle: handle ?? undefined,
      })
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
