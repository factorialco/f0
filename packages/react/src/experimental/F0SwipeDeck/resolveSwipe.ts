import type { SwipeDirection } from "./types"

export type SwipeThresholds = {
  offsetThreshold: number
  velocityThreshold: number
}

/**
 * A fast flick counts even when the card travelled little, but only when it
 * agrees with the drag — otherwise dragging right and flicking back left would
 * accept a card the user was returning.
 */
export const resolveSwipe = (
  offset: number,
  velocity: number,
  { offsetThreshold, velocityThreshold }: SwipeThresholds
): SwipeDirection | undefined => {
  const travelled = Math.abs(offset) >= offsetThreshold
  const flicked = Math.abs(velocity) >= velocityThreshold

  if (!travelled && !flicked) {
    return undefined
  }
  if (travelled && flicked && Math.sign(offset) !== Math.sign(velocity)) {
    return undefined
  }

  const direction = travelled ? offset : velocity
  return direction > 0 ? "right" : "left"
}
