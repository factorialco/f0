import { AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import { useReducedMotion } from "@/lib/a11y"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { SwipeCard } from "./components/SwipeCard"
import type { F0SwipeDeckProps } from "./types"

const DEFAULT_OFFSET_THRESHOLD = 96
const DEFAULT_VELOCITY_THRESHOLD = 500

const F0SwipeDeckBase = <T,>({
  deck,
  renderCard,
  label,
  empty,
  dataTestId,
  offsetThreshold = DEFAULT_OFFSET_THRESHOLD,
  velocityThreshold = DEFAULT_VELOCITY_THRESHOLD,
}: F0SwipeDeckProps<T>) => {
  const i18n = useI18n()
  const reduceMotion = useReducedMotion()
  const { current, currentId, decide, lastAction } = deck
  const [settled, setSettled] = useState(true)

  useEffect(() => {
    if (current !== undefined) {
      setSettled(false)
    }
  }, [current])

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      <div
        role="group"
        aria-label={label ?? i18n.swipeDeck.label}
        className="relative flex w-full justify-center overflow-x-clip"
      >
        <AnimatePresence
          custom={lastAction}
          initial={false}
          mode="popLayout"
          onExitComplete={() => setSettled(true)}
        >
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
        {current === undefined && settled ? empty : null}
      </div>
    </DataTestIdWrapper>
  )
}

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0SwipeDeck = experimentalComponent("F0SwipeDeck", F0SwipeDeckBase)
