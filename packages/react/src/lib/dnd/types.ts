export type DragPayload<T = unknown> = {
  kind: string
  id: string
  data?: T
  /** IDs of all selected items being moved together (including the primary dragged item) */
  selectedIds?: string[]
}

export type OnGenerateDragPreviewArgs = {
  nativeSetDragImage: DataTransfer["setDragImage"] | null
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

export interface DndDriver<T = unknown> {
  registerDraggable: (
    el: HTMLElement,
    options: {
      payload: DragPayload<T>
      disabled?: boolean
      handle?: HTMLElement | null
      onGenerateDragPreview?: (args: OnGenerateDragPreviewArgs) => void
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
      source: DragPayload<T>
      intent?: DropIntent
    }) => void
  ) => () => void
}
