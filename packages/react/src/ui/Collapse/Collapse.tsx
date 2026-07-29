import type { ReactNode } from "react"

import { AnimatePresence, motion, useIsPresent } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

/**
 * Animates the show/hide of a block of content by its height.
 *
 * Uses Motion's native `height: "auto"` support, which measures the content
 * internally, so the same transition covers content of any size with no manual
 * ResizeObserver. `initial={false}` skips the animation on first paint (content
 * that mounts already-open doesn't animate in) and `useReducedMotion` collapses
 * the duration to 0 when the user opts out.
 *
 * Shared primitive: `F0Accordion`'s `AccordionItem` and `F0ClarifyingPanel`
 * ship the same block and should migrate onto this.
 */
export const Collapse = ({
  open,
  children,
  duration = 0.2,
}: {
  open: boolean
  children: ReactNode
  duration?: number
}) => {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <CollapseBody key="collapse-body" duration={duration}>
          {children}
        </CollapseBody>
      )}
    </AnimatePresence>
  )
}

/**
 * Rendered inside `AnimatePresence` so it can react to its own enter/exit via
 * `useIsPresent`, which is what lets the two a11y guards below survive the exit
 * animation (content kept as a plain child of `AnimatePresence` is frozen at its
 * pre-exit render and can't update its own attributes on the way out).
 */
const CollapseBody = ({
  children,
  duration,
}: {
  children: ReactNode
  duration: number
}) => {
  const shouldReduceMotion = useReducedMotion()
  const isPresent = useIsPresent()
  const ref = useRef<HTMLDivElement>(null)

  // `overflow-hidden` clips the content while it grows/shrinks, but it must not
  // outlive the animation: a permanent clip crops the focus ring (ring-offset
  // sits *outside* the box) of the first/last focusable inside, and any hit
  // target that extends past the box. `settled` starts true so content that
  // mounts already-open (initial={false}, no enter animation, so no
  // onAnimationComplete) is never left permanently clipped; the enter animation
  // flips it false then true, and the exit clips via `!isPresent`.
  const [settled, setSettled] = useState(true)
  const clip = !isPresent || !settled

  // During the exit the content is still in the DOM while whatever triggered it
  // already reports aria-expanded=false. Mark it inert (+ aria-hidden) the
  // moment it starts leaving so assistive tech and keyboard focus can't land on
  // content that's on its way out. `setAttribute` matches how the codebase
  // toggles `inert` elsewhere; the JSX prop isn't reflected on React 18.
  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (isPresent) {
      node.removeAttribute("inert")
      node.removeAttribute("aria-hidden")
    } else {
      node.setAttribute("inert", "")
      node.setAttribute("aria-hidden", "true")
    }
  }, [isPresent])

  return (
    <motion.div
      ref={ref}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        ease: "easeOut",
      }}
      onAnimationStart={() => setSettled(false)}
      onAnimationComplete={() => setSettled(true)}
      className={cn(clip && "overflow-hidden")}
    >
      {children}
    </motion.div>
  )
}
