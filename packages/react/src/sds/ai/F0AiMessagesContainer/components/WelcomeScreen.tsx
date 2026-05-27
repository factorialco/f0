import { useEffect, useState } from "react"

const CHAR_IN_MS = 35
const CHAR_OUT_MS = 22
const START_DELAY_MS = 400
const HOLD_MS = 2500
const END_DELAY_MS = 220

type Phase = "starting" | "writing" | "holding" | "erasing"

export type WelcomeScreenProps = {
  /** One or more phrases. With more than one, they rotate in an infinite loop. */
  messages: string[]
  /**
   * Optional click handler on the phrase itself. When set, the phrase becomes
   * keyboard-activatable (Enter / Space) and gets a subtle hover hint. Used by
   * `F0AiChat` to wire the pong easter egg.
   */
  onClick?: () => void
}

export const WelcomeScreen = ({ messages, onClick }: WelcomeScreenProps) => {
  const [index, setIndex] = useState(0)
  const [chars, setChars] = useState(0)
  const [phase, setPhase] = useState<Phase>("starting")
  const current = messages[index] ?? ""

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

  // Pulse arrives just after the full phrase becomes visible.
  const pulseDelay = (START_DELAY_MS + current.length * CHAR_IN_MS) / 1000

  const interactive = !!onClick
  const handleKeyDown = interactive
    ? (e: React.KeyboardEvent<HTMLParagraphElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick?.()
        }
      }
    : undefined

  return (
    <div className="flex w-full flex-1 items-center justify-center px-4">
      <p
        key={index}
        role={interactive ? "button" : undefined}
        tabIndex={interactive ? 0 : undefined}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className={
          "bg-gradient-to-r from-[#E55619] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent" +
          (interactive
            ? " cursor-pointer transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
            : "")
        }
        style={{ animationDelay: `${pulseDelay}s`, minHeight: 28 }}
        aria-label={current}
      >
        {current.slice(0, chars)}
      </p>
    </div>
  )
}
