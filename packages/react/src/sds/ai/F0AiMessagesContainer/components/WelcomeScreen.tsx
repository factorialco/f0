import { motion } from "motion/react"
import { useEffect, useState, type KeyboardEvent } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

const CHAR_IN_MS = 35
const CHAR_OUT_MS = 22
const START_DELAY_MS = 400
const HOLD_MS = 2500
const END_DELAY_MS = 220

type Phase = "starting" | "writing" | "holding" | "erasing"

export interface WelcomeScreenProps {
  /** One or more phrases. With more than one, they rotate in an infinite loop. */
  messages: string[]
  /**
   * Optional click handler on the phrase itself. When set, the phrase becomes
   * keyboard-activatable (Enter / Space) and gets a subtle hover hint. Used by
   * `F0AiChat` to wire the pong easter egg.
   */
  onClick?: () => void
  /**
   * Fullscreen welcome layout: the phrase is pushed to the bottom of the top
   * half (instead of vertically centered) so it meets the composer — which
   * rises to the top of the bottom half — around the vertical center.
   */
  fullscreen?: boolean
}

export const WelcomeScreen = ({
  messages,
  onClick,
  fullscreen = false,
}: WelcomeScreenProps) => {
  const [index, setIndex] = useState(0)
  const [chars, setChars] = useState(0)
  const [phase, setPhase] = useState<Phase>("starting")
  const current = messages[index] ?? ""
  const shouldReduceMotion = useReducedMotion()

  // Spring that glides the phrase to its new vertical spot (center ↔ bottom)
  // when toggling fullscreen ↔ sidepanel. Scoped to mode changes via
  // `layoutDependency={fullscreen}` so it never fires on the typewriter ticks.
  const layoutSpring = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 38, mass: 1 }

  // Recover from external mutations of `messages` (e.g. host swapping in a
  // shorter array). Without this, an out-of-range `index` would render a
  // blank phrase for one full cycle and `(i + 1) % 0` would yield NaN.
  useEffect(() => {
    if (messages.length > 0 && index >= messages.length) {
      setIndex(0)
      setChars(0)
      setPhase("starting")
    }
  }, [messages.length, index])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined

    if (phase === "starting") {
      timer = setTimeout(() => setPhase("writing"), START_DELAY_MS)
    } else if (phase === "writing") {
      if (chars < current.length) {
        timer = setTimeout(() => setChars((c) => c + 1), CHAR_IN_MS)
      } else {
        setPhase("holding")
      }
    } else if (phase === "holding") {
      if (messages.length <= 1) return
      timer = setTimeout(() => setPhase("erasing"), HOLD_MS)
    } else if (phase === "erasing") {
      if (chars > 0) {
        timer = setTimeout(() => setChars((c) => c - 1), CHAR_OUT_MS)
      } else {
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % messages.length)
          setPhase("starting")
        }, END_DELAY_MS)
      }
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [phase, chars, current.length, messages.length])

  const interactive = !!onClick
  const handleKeyDown = interactive
    ? (e: KeyboardEvent<HTMLParagraphElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick?.()
        }
      }
    : undefined

  return (
    <div
      className={cn(
        "flex w-full flex-1 justify-center px-4",
        fullscreen ? "items-end pb-12" : "items-center"
      )}
    >
      <motion.div
        layout={shouldReduceMotion ? false : "position"}
        layoutDependency={fullscreen}
        transition={{ layout: layoutSpring }}
      >
        <p
          key={index}
          role={interactive ? "button" : undefined}
          tabIndex={interactive ? 0 : undefined}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          className={cn(
            "bg-gradient-to-r from-[#E55619] via-[#E51943] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent",
            interactive &&
              cn(
                "cursor-pointer transition-transform duration-200",
                "hover:scale-[1.02] focus-visible:scale-[1.02]",
                "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
              )
          )}
          style={{ minHeight: 28 }}
          aria-label={current}
        >
          {current.slice(0, chars)}
        </p>
      </motion.div>
    </div>
  )
}
