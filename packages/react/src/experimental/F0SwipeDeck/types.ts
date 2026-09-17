import type { ReactNode } from "react"
import { WithDataTestIdProps } from "@/lib/data-testid"

export const swipeDirections = ["left", "right"] as const

export type SwipeDirection = (typeof swipeDirections)[number]

export type SwipeTone = "positive" | "negative" | "neutral"

export type SwipeDirectionConfig = {
  label: string
  tone?: SwipeTone
}

export type SwipeDirectionsConfig = Record<SwipeDirection, SwipeDirectionConfig>

export type SwipeDecision<T> = {
  item: T
  direction: SwipeDirection
}

export type UseSwipeDeckOptions<T> = {
  items: T[]
  /** Keys the exit animation and the one-decision-per-item guard. */
  getItemId: (item: T) => string
  /** `rollback` returns the item to the deck, for a consumer whose mutation failed. */
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
  lastDirection: SwipeDirection | undefined
  decide: (direction: SwipeDirection) => void
  swipeLeft: () => void
  swipeRight: () => void
  undo: () => void
}

export type F0SwipeDeckProps<T> = WithDataTestIdProps & {
  deck: UseSwipeDeckResult<T>
  renderCard: (item: T) => ReactNode
  directions?: SwipeDirectionsConfig
  label?: string
  empty?: ReactNode
  /** Drag distance in pixels that commits a decision. */
  offsetThreshold?: number
  /** Drag speed in pixels per second that commits a decision regardless of distance. */
  velocityThreshold?: number
}
