import { AnimatePresence, motion } from "motion/react"
import { memo, type ReactNode, useEffect } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { F0OneIcon } from "@/sds/ai/F0OneIcon"

const IconMotion = motion.create(F0OneIcon)

/**
 * Floating pill shown over content the assistant is regenerating: the One icon
 * (gently spinning/pulsing) plus a short status label.
 */
const ProcessingPill = ({
  label,
  reduceMotion,
}: {
  label: string
  reduceMotion: boolean
}) => (
  // role="status" + aria-live so the "Applying changes" state is announced.
  <div
    role="status"
    aria-live="polite"
    className="flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md"
  >
    <IconMotion
      size="xs"
      animate={
        reduceMotion
          ? undefined
          : {
              rotate: [0, 360],
              scale: [1, 0.8, 1],
              filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              rotate: {
                duration: 1,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 1,
              },
              scale: {
                duration: 1,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              },
              filter: {
                duration: 1,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              },
            }
      }
    />
    <span className="font-medium">{label}</span>
  </div>
)

export interface F0AiProcessingOverlayProps {
  /**
   * When `true`, the wrapped content is blurred and locked
   * (`pointer-events-none`) and the floating status pill is shown over it.
   */
  active: boolean
  /**
   * Pill label. Defaults to the translated "Applying changes"
   * (`ai.applyingChanges`).
   */
  label?: string
  /** Extra classes for the wrapper element. */
  className?: string
  /** The panel/canvas content the assistant is editing. */
  children: ReactNode
}

/**
 * Wraps a panel/canvas that F0AiChat is regenerating. While `active`, the
 * content blurs and stops receiving pointer events, and a centered pill — the
 * One icon plus an "Applying changes" label — floats over it, so the user gets
 * clear feedback that the surface is being updated and shouldn't be edited.
 *
 * Mirrors the survey form-builder "applying changes" affordance, lifted into
 * the F0AiChat family so any surface paired with the chat can reuse it.
 */
export const F0AiProcessingOverlay = memo(function F0AiProcessingOverlay({
  active,
  label,
  className,
  children,
}: F0AiProcessingOverlayProps) {
  const { t } = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const pillLabel = label ?? t("ai.applyingChanges")

  // Drop focus from the wrapped content when it becomes inert, so the caret
  // doesn't sit on a blurred, non-interactive field. Skip the chat input so
  // the user can keep typing follow-ups while changes apply.
  useEffect(() => {
    if (!active) return
    const activeElement = document.activeElement as HTMLElement | null
    if (
      activeElement &&
      activeElement.getAttribute("name") !== "one-ai-input"
    ) {
      activeElement.blur()
    }
  }, [active])

  return (
    <div className={cn("relative flex flex-1 flex-col", className)}>
      <AnimatePresence>
        {active && (
          // Zero-height sticky anchor pinned to the top of the scroll viewport,
          // with the pill pushed to ~half the viewport height. This keeps the
          // pill centred in the visible area regardless of how tall the blurred
          // content is or how far it's scrolled.
          <motion.div
            className="pointer-events-none sticky top-0 z-50 flex h-0 w-full items-start justify-center overflow-visible"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          >
            <div className="mt-[40vh]">
              <ProcessingPill
                label={pillLabel}
                reduceMotion={shouldReduceMotion}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className={cn("flex flex-1 flex-col", active && "pointer-events-none")}
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: active ? "blur(2px)" : "blur(0px)" }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  )
})
