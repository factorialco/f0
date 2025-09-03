export type DragPayload<T = unknown> = {
  kind: string
  id: string
  data?: T
}

export type DropIntent =
  | { type: "reorder"; containerId: string; fromIndex: number; toIndex: number }
  | {
      type: "move"
      fromContainerId: string
      toContainerId: string
      fromIndex: number
      toIndex: number | null
    }
  | { type: "enter-container"; toContainerId: string }
  | { type: "cancel" }

export interface DndDriver {
  registerDraggable: (
    el: HTMLElement,
    options: {
      payload: DragPayload
      disabled?: boolean
      handle?: HTMLElement | null
    }
  ) => () => void

  registerDroppable: (
    el: HTMLElement,
    options: {
      id: string
      accepts: string[]
    }
  ) => () => void

  subscribe: (
    cb: (e: {
      phase: "start" | "over" | "drop" | "cancel"
      source: DragPayload
      intent?: DropIntent
    }) => void
  ) => () => void
}
