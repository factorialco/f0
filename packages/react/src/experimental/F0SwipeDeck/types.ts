import type { ReactNode } from "react"
import type { WithDataTestIdProps } from "@/lib/data-testid"

export const swipeDirections = ["left", "right"] as const

export type SwipeDirection = (typeof swipeDirections)[number]

export type SwipeDecision<T> = {
  item: T
  direction: SwipeDirection
}

export type SwipeDeckAction =
  | { type: "decide"; direction: SwipeDirection }
  | { type: "undo" }
  | { type: "rollback" }

export type UseSwipeDeckOptions<T> = {
  /**
   * Append-only: the deck reads it by position, so a page of new items must be
   * added to the end. Replacing the array with a differently ordered or
   * filtered one makes the deck skip items.
   */
  items: T[]
  getItemId: (item: T) => string
  /**
   * `rollback` returns the item to the deck, for a consumer whose mutation
   * failed: as the current card when it was the most recent decision, at the
   * end of the deck otherwise.
   */
  onDecide?: (decision: SwipeDecision<T>, rollback: () => void) => void
  onUndo?: (item: T) => void
  /** Fires once each time the remaining items drop to `needMoreThreshold`. */
  onNeedMore?: () => void
  undoDepth?: number
  needMoreThreshold?: number
}

export type UseSwipeDeckResult<T> = {
  current: T | undefined
  currentId: string | undefined
  index: number
  total: number
  remaining: number
  canUndo: boolean
  lastAction: SwipeDeckAction | undefined
  decide: (direction: SwipeDirection) => void
  swipeLeft: () => void
  swipeRight: () => void
  undo: () => void
}

export type F0SwipeDeckProps<T> = WithDataTestIdProps & {
  deck: UseSwipeDeckResult<T>
  renderCard: (item: T) => ReactNode
  label?: string
  empty?: ReactNode
  /** Drag distance in pixels that commits a decision. */
  offsetThreshold?: number
  /** Drag speed in pixels per second that commits a decision regardless of distance. */
  velocityThreshold?: number
}
