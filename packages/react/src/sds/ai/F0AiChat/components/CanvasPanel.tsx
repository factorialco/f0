import { AnimatePresence, motion } from "motion/react"

import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Cross } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

import { F0ChatDashboard } from "../../F0ChatDashboard"
import { useAiChat } from "../providers/AiChatStateProvider"

/**
 * Canvas panel that renders an AI-generated dashboard overlay.
 *
 * Appears to the left of the chat sidebar when the LLM emits a
 * `displayDashboard` frontend tool call. Overlays the main content
 * area (nav sidebar stays visible). Closes via the X button which
 * clears `canvasDashboard` and restores the previous visualization mode.
 */
export function CanvasPanel() {
  const { canvasDashboard, closeCanvas } = useAiChat()
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {canvasDashboard && (
        <motion.div
          className={cn(
            "pointer-events-auto flex h-full flex-col",
            "overflow-hidden",
            "py-1 dark:bg-f1-background"
          )}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: [0, 0, 0.1, 1],
          }}
        >
          <motion.div
            className={cn(
              "flex h-full w-full flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary",
              "p-1 bg-f1-special-page"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.15,
              duration: shouldReduceMotion ? 0 : 0.2,
            }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-start gap-3 border-0 border-b border-solid border-f1-border-secondary px-4 py-2">
              <div className="flex min-w-0 flex-1 flex-col">
                <OneEllipsis
                  tag="h2"
                  className="text-2xl font-semibold text-f1-foreground"
                >
                  {canvasDashboard.title}
                </OneEllipsis>
                {canvasDashboard.description && (
                  <OneEllipsis className="text-base text-f1-foreground-secondary">
                    {canvasDashboard.description}
                  </OneEllipsis>
                )}
              </div>
              <F0Button
                variant="ghost"
                icon={Cross}
                size="md"
                hideLabel
                onClick={() => closeCanvas()}
                label="Close dashboard"
              />
            </div>

            {/* Dashboard content */}
            <div className="flex-1 overflow-auto p-5">
              <F0ChatDashboard config={canvasDashboard} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

CanvasPanel.displayName = "CanvasPanel"
