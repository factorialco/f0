import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

import type { RequirementsState } from "./types"

import { RequirementRow } from "./components/RequirementRow"
import { RollingNumber } from "./components/RollingNumber"

const EASE = "easeOut" as const
const DURATION = 0.3

interface F0RequirementsPanelProps {
  requirements: RequirementsState
  /** Right-column hint for the requirement currently being asked. Default: "asking…". */
  askingLabel?: string
  /** Suffix for optional, still-pending requirements. Default: "optional". */
  optionalLabel?: string
  /** Word after the counter, e.g. "2/3 done". Default: "done". */
  doneLabel?: string
  /** Panel title override (otherwise `requirements.title` or "Requirements"). */
  title?: string
}

/**
 * Animated requirements checklist that mounts in the F0AiChatTextArea slot
 * (sibling to F0ClarifyingPanel). Shows, for a steps/requirements flow, what
 * has been gathered and what is still missing — each row ticks to "done" as the
 * conversation fills it in. Bare, padded content: it relies on the chat input
 * surface around it, exactly like F0ClarifyingPanel.
 *
 * Props-driven and view-only: no buttons, no coupling to useAiChat. The
 * embedder owns the items and flips their status as answers arrive.
 */
export const F0RequirementsPanel = ({
  requirements,
  askingLabel = "asking…",
  optionalLabel = "optional",
  doneLabel = "done",
  title,
}: F0RequirementsPanelProps) => {
  const shouldReduceMotion = useReducedMotion()
  const duration = shouldReduceMotion ? 0 : DURATION

  const { items } = requirements
  const resolvedTitle = title ?? requirements.title ?? "Requirements"
  const doneCount = items.filter((item) => item.status === "done").length
  const total = items.length

  // Stagger rows on first mount only (initial={false} on updates would suppress
  // the entrance, so we gate the whole list mount and let status changes animate
  // via each row's own color/indicator transitions instead).
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.05 },
    },
  }
  const row = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 4, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: EASE },
    },
  }

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration, ease: EASE }}
      className="overflow-hidden"
    >
      <div className="flex flex-col gap-1 pb-1 pt-3">
        <div className="flex items-center justify-between gap-2 px-4 pb-1">
          <span className="text-sm font-semibold text-f1-foreground">
            {resolvedTitle}
          </span>
          <span
            className={cn(
              "flex shrink-0 items-center text-sm text-f1-foreground-secondary transition-colors",
              doneCount === total && total > 0 && "text-f1-foreground-positive"
            )}
          >
            <RollingNumber value={doneCount} />
            <span>
              /{total} {doneLabel}
            </span>
          </span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={row}>
              <RequirementRow
                item={item}
                askingLabel={askingLabel}
                optionalLabel={optionalLabel}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
