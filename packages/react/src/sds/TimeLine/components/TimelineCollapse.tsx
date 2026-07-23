import type { ReactNode } from "react"

import { AnimatePresence, motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"

/**
 * Animates the show/hide of a timeline row's collapsible body.
 *
 * Uses Motion's native `height: "auto"` support — it measures the content
 * internally, so the same transition covers items of any size with no manual
 * ResizeObserver. `overflow-hidden` clips the body while it grows/shrinks;
 * F0's dropdowns and tooltips render in a portal, so nothing inside the body
 * gets clipped once expanded. `initial={false}` skips the animation on first
 * paint (rows that mount already-expanded don't animate in) and
 * `useReducedMotion` collapses the duration to 0 when the user opts out.
 */
export const TimelineCollapse = ({
  open,
  children,
}: {
  open: boolean
  children: ReactNode
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
