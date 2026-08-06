import { useEffect, useRef, useState, type KeyboardEvent } from "react"

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
   * Static line above the rotating phrase, same size but secondary color —
   * names the surface (e.g. "Analytics mode:") while the phrase keeps the
   * gradient typewriter treatment.
   */
  caption?: string
  /** Smaller secondary line below the phrase (e.g. available data areas). */
  subtitle?: string
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
  caption,
  subtitle,
  onClick,
  fullscreen = false,
}: WelcomeScreenProps) => {
  const [index, setIndex] = useState(0)
  const [chars, setChars] = useState(0)
  const [phase, setPhase] = useState<Phase>("starting")
  const reducedMotion = useReducedMotion()
  const current = messages[index] ?? ""

  // Restart the sequence whenever the phrase list itself changes (e.g. host
  // swapping in a mode-specific set): the rotation must begin at the first
  // phrase of the NEW list, not wherever the old list's index happened to be.
  // This also covers the out-of-range case (shorter array), where a stale
  // `index` would render a blank phrase and `(i + 1) % 0` would yield NaN.
  // A swap types immediately ("writing") -- the start delay is a first-mount
  // settle beat, and repeating it after a mode switch reads as a stall.
  const messagesSignature = messages.join("\u0000")
  const isFirstSignatureRef = useRef(true)
  useEffect(() => {
    if (isFirstSignatureRef.current) {
      isFirstSignatureRef.current = false
      return
    }
    setIndex(0)
    setChars(0)
    setPhase("writing")
  }, [messagesSignature])

  useEffect(() => {
    // Reduced motion renders the first phrase statically: no typewriter,
    // no rotation (WCAG 2.2.2 — auto-updating content with no pause control).
    if (reducedMotion) return

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
  }, [phase, chars, current.length, messages.length, reducedMotion])

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
        fullscreen ? "items-end pb-24" : "items-center"
      )}
    >
      <div className="flex flex-col items-center">
        {caption && (
          <p className="animate-in fade-in-0 text-center text-2xl font-semibold leading-[28px] text-f1-foreground-secondary duration-500">
            {caption}
          </p>
        )}
        {/* aria-label is prohibited on a plain paragraph role, so only the
            interactive (button) case is named by it; the sr-only span names
            the static case with the full, stable phrase instead of the
            partially-typed slice. */}
        <p
          key={index}
          role={interactive ? "button" : undefined}
          tabIndex={interactive ? 0 : undefined}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          className={cn(
            "min-h-[28px] bg-gradient-to-r from-[#E55619] via-[#E51943] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent",
            interactive &&
              cn(
                "cursor-pointer transition-transform duration-200",
                "hover:scale-[1.02] focus-visible:scale-[1.02]",
                "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
              )
          )}
          aria-label={interactive ? current : undefined}
        >
          <span aria-hidden="true">
            {reducedMotion ? current : current.slice(0, chars)}
          </span>
          <span className="sr-only">{current}</span>
        </p>
        {subtitle && (
          <p className="animate-in fade-in-0 mt-3 text-center text-base leading-snug text-f1-foreground-secondary duration-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
