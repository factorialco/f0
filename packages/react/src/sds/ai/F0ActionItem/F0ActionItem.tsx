import { AnimatePresence, motion } from "motion/react"

import { F0Icon } from "@/components/F0Icon"
import OutlineCircle from "@/icons/animated/CheckCircleLine"
import DottedCircle from "@/icons/app/DottedCircle"
import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

import { ChatSpinner } from "./components/ChatSpinner"
import "./styles.css"
import { F0ActionItemProps } from "./types"

// Opacity-only swap. Animating `scale` on the wrapper applies a
// `transform: scale(...)` that competes with ChatSpinner's own
// `transform: rotate(...)` inside `motion.svg` and freezes the spin.
const ICON_MOTION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const F0ActionItem = ({ title, status, inGroup }: F0ActionItemProps) => {
  const shouldReduceMotion = useReducedMotion()
  const transition = {
    duration: shouldReduceMotion ? 0 : 0.18,
    ease: [0.33, 1, 0.68, 1] as const,
  }

  return (
    <div className="flex w-full items-start gap-1 text-f1-foreground-secondary">
      <div className="flex h-5 w-6 shrink-0 items-center justify-start">
        <AnimatePresence mode="wait">
          {status === "inProgress" && (
            <motion.div
              key="inProgress"
              className="flex h-5 w-5 shrink-0 items-center justify-center"
              {...ICON_MOTION}
              transition={transition}
            >
              <F0Icon
                state="animate"
                size={inGroup ? "md" : "lg"}
                icon={DottedCircle}
              />
            </motion.div>
          )}
          {status === "executing" && (
            <div className="flex h-5 w-5 shrink-0 items-center justify-center">
              <ChatSpinner />
            </div>
          )}
          {status === "completed" && (
            <motion.div
              key="completed"
              {...ICON_MOTION}
              className="flex h-5 w-5 shrink-0 items-center justify-center"
              transition={transition}
            >
              <F0Icon
                color="secondary"
                state="animate"
                size={inGroup ? "md" : "lg"}
                icon={OutlineCircle}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {title && (
        <p
          className={cn(
            "text-pretty leading-5",
            status === "executing" && "shine-text"
          )}
        >
          {title}
        </p>
      )}
    </div>
  )
}
