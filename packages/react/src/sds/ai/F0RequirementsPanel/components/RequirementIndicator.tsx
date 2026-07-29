import { AnimatePresence, motion } from "motion/react"

import { Completed, DottedCircle, InProgressTask } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

import type { RequirementStatus } from "../types"

interface RequirementIndicatorProps {
  status: RequirementStatus
}

// Same status iconography as Profile/TaskItem so requirements read as a familiar
// task checklist: dotted circle (todo) → in-progress → completed.
const ICON = {
  done: Completed,
  current: InProgressTask,
  pending: DottedCircle,
} as const

const COLOR = {
  // positive = the green semantic; a completed requirement reads as "good".
  done: "text-f1-icon-positive",
  current: "text-f1-icon-info",
  pending: "text-f1-icon",
} as const

/**
 * Status icon for a requirement row. On a status change the two icons
 * cross-fade in place (popLayout) — a smooth swap, never a fade-to-empty-then-in.
 * The current step also "breathes" to signal we're on it right now.
 */
export const RequirementIndicator = ({ status }: RequirementIndicatorProps) => {
  const shouldReduceMotion = useReducedMotion()
  const Icon = ICON[status]
  const isCurrent = status === "current"

  // Quick, overlapping cross-fade. popLayout pulls the outgoing icon out of
  // layout so the incoming one occupies the same spot — the swap reads as one
  // icon becoming another, with no empty gap in between.
  const swap = shouldReduceMotion
    ? { duration: 0 }
    : ({ duration: 0.18, ease: "easeOut" } as const)

  return (
    <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={status}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={swap}
          className={cn("flex items-center justify-center", COLOR[status])}
        >
          {/* Current step "breathes" — slow, subtle pulse that says "we're on
              this one right now". Persistent status, so a continuous loop fits
              (like a spinner). Disabled under reduced motion. */}
          {isCurrent && !shouldReduceMotion ? (
            <motion.span
              className="flex items-center justify-center"
              animate={{ scale: [1, 1.12, 1], opacity: [1, 0.7, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-5 w-5" />
            </motion.span>
          ) : (
            <Icon className="h-5 w-5" />
          )}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
