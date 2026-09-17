import {
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "motion/react"
import type { ReactNode } from "react"
import { forwardRef } from "react"
import type { SwipeDirection } from "../types"

const EXIT_DISTANCE = 480
const MAX_ROTATION = 12

const exitVariants = {
  exit: (direction: SwipeDirection | undefined) => ({
    x: direction === "left" ? -EXIT_DISTANCE : EXIT_DISTANCE,
    opacity: 0,
  }),
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
    const x = useMotionValue(0)
    const rotate = useTransform(
      x,
      [-EXIT_DISTANCE, 0, EXIT_DISTANCE],
      [-MAX_ROTATION, 0, MAX_ROTATION]
    )

    const handleDragEnd = (_: unknown, { offset, velocity }: PanInfo) => {
      const travel =
        Math.abs(offset.x) >= offsetThreshold
          ? offset.x
          : Math.abs(velocity.x) >= velocityThreshold
            ? velocity.x
            : 0

      if (travel === 0) {
        return
      }
      onCommit(travel > 0 ? "right" : "left")
    }

    return (
      <motion.div
        ref={ref}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragDirectionLock
        dragElastic={0.6}
        dragSnapToOrigin
        onDragEnd={handleDragEnd}
        // oxlint-disable-next-line f0-styles/no-inline-styles -- motion values have no class equivalent
        style={{ x, rotate: reduceMotion ? 0 : rotate }}
        variants={exitVariants}
        exit="exit"
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
        className="w-full cursor-grab touch-pan-y active:cursor-grabbing"
      >
        {children}
      </motion.div>
    )
  }
)
