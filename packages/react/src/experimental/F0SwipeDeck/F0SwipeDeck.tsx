import { AnimatePresence } from "motion/react"
import { useReducedMotion } from "@/lib/a11y"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { SwipeCard } from "./components/SwipeCard"
import type { F0SwipeDeckProps } from "./types"

export type {
  F0SwipeDeckProps,
  SwipeDecision,
  SwipeDirection,
  SwipeDirectionConfig,
  SwipeDirectionsConfig,
  SwipeTone,
  UseSwipeDeckOptions,
  UseSwipeDeckResult,
} from "./types"
export { swipeDirections } from "./types"

const DEFAULT_OFFSET_THRESHOLD = 96
const DEFAULT_VELOCITY_THRESHOLD = 500

const F0SwipeDeckBase = <T,>({
  deck,
  renderCard,
  label,
  empty,
  offsetThreshold = DEFAULT_OFFSET_THRESHOLD,
  velocityThreshold = DEFAULT_VELOCITY_THRESHOLD,
}: F0SwipeDeckProps<T>) => {
  const i18n = useI18n()
  const reduceMotion = useReducedMotion()
  const { current, currentId, decide, lastDirection } = deck

  return (
    <div
      role="group"
      aria-label={label ?? i18n.swipeDeck.label}
      className="relative flex w-full justify-center"
    >
      <AnimatePresence custom={lastDirection} initial={false} mode="popLayout">
        {current !== undefined && currentId !== undefined ? (
          <SwipeCard
            key={currentId}
            onCommit={decide}
            offsetThreshold={offsetThreshold}
            velocityThreshold={velocityThreshold}
            reduceMotion={reduceMotion}
          >
            {renderCard(current)}
          </SwipeCard>
        ) : null}
      </AnimatePresence>
      {current === undefined ? empty : null}
    </div>
  )
}

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0SwipeDeck = withDataTestId(
  experimentalComponent("F0SwipeDeck", F0SwipeDeckBase)
) as <T>(props: F0SwipeDeckProps<T>) => ReturnType<typeof F0SwipeDeckBase>
