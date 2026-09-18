import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "motion/react"
import { forwardRef } from "react"
import type { PointerEvent, ReactNode } from "react"
import { resolveSwipe } from "../resolveSwipe"
import type { SwipeDeckAction, SwipeDirection } from "../types"

const EXIT_DISTANCE = 480
const MAX_ROTATION = 12

const exitVariants = {
  exit: (action: SwipeDeckAction | undefined) =>
    action?.type === "decide"
      ? {
          x: action.direction === "left" ? -EXIT_DISTANCE : EXIT_DISTANCE,
          opacity: 0,
        }
      : { opacity: 0, scale: 0.96 },
}

type SwipeCardProps = {
  onCommit: (direction: SwipeDirection) => void
  offsetThreshold: number
  velocityThreshold: number
  reduceMotion: boolean
  children: ReactNode
}

export const SwipeCard = forwardRef<HTMLDivElement, SwipeCardProps>(
  function SwipeCard(
    { onCommit, offsetThreshold, velocityThreshold, reduceMotion, children },
    ref
  ) {
    const dragControls = useDragControls()
    const x = useMotionValue(0)
    const rotate = useTransform(
      x,
      [-EXIT_DISTANCE, 0, EXIT_DISTANCE],
      [-MAX_ROTATION, 0, MAX_ROTATION]
    )

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
      if (event.target instanceof Element) {
        if (event.target.closest("[data-swipe-ignore]")) {
          return
        }
      }
      dragControls.start(event)
    }

    const handleDragEnd = (_: unknown, { offset, velocity }: PanInfo) => {
      const direction = resolveSwipe(offset.x, velocity.x, {
        offsetThreshold,
        velocityThreshold,
      })
      if (direction) {
        onCommit(direction)
      }
    }

    return (
      <motion.div
        ref={ref}
        drag="x"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ left: 0, right: 0 }}
        dragDirectionLock
        dragElastic={0.6}
        dragSnapToOrigin
        onPointerDown={handlePointerDown}
        onDragEnd={handleDragEnd}
        // oxlint-disable-next-line f0-styles/no-inline-styles -- motion values have no class equivalent
        style={{ x, rotate: reduceMotion ? 0 : rotate }}
        variants={exitVariants}
        exit="exit"
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
        className="cursor-grab touch-pan-y select-none active:cursor-grabbing"
      >
        {children}
      </motion.div>
    )
  }
)
