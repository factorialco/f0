import { useRef, useState } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { useReducedMotion } from "@/lib/a11y"

type Hold<T> = number | ((prev: T, next: T) => number)

/**
 * Hide-then-reveal helper for layout changes that would otherwise "jump".
 *
 * When `value` changes, the content is hidden *before the new layout paints*
 * (via a layout effect) so the reflow is never seen, kept hidden for `hold` ms
 * (long enough for any window resize to settle), then revealed already in its
 * final position with a quick, soft opacity fade. No sliding, no layout
 * animation — just a clean cut-out and fade-in.
 *
 * Spread the returned `motionProps` onto a `motion` element that wraps the
 * content whose layout changes.
 */
export function useRevealOnChange<T>(
  value: T,
  hold: Hold<T>,
  revealSeconds = 0.2
) {
  const shouldReduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const prevRef = useRef(value)

  useIsomorphicLayoutEffect(() => {
    if (prevRef.current === value) return
    const prev = prevRef.current
    prevRef.current = value
    if (shouldReduceMotion) return
    setVisible(false)
    const ms = typeof hold === "function" ? hold(prev, value) : hold
    const t = setTimeout(() => setVisible(true), ms)
    return () => clearTimeout(t)
  }, [value, shouldReduceMotion])

  return {
    visible,
    motionProps: {
      animate: { opacity: visible ? 1 : 0 },
      // Hide instantly (duration 0) so the layout change is never seen; reveal
      // with a soft fade once it has settled.
      transition: {
        duration: shouldReduceMotion ? 0 : visible ? revealSeconds : 0,
        ease: "easeInOut" as const,
      },
    },
  }
}
