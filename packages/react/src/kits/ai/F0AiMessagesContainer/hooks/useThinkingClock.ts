import { useEffect, useState } from "react"

/**
 * When the current turn started thinking, or `null` while it is not.
 *
 * One clock per turn, not per step. The indicator moves as the turn advances —
 * from the standalone "Thinking…" item to whichever reasoning step is
 * executing — and a timer owned by any of those would restart on every hand-off.
 * Sealing the instant once, above all of them, is what makes the number
 * accumulate instead.
 *
 * Deliberately holds no interval: this value changes twice per turn, and a tick
 * here would re-render the whole message list every second. The ticking lives
 * in `ThinkingElapsed`, which is a leaf.
 *
 * `anchor` lets a host that knows when the turn really began (a server
 * timestamp) override the local reading, so a reload mid-stream does not
 * restart the count. Without it the clock starts when F0 first saw the signal,
 * which is off by one round-trip — invisible at second resolution.
 */
export const useThinkingClock = (
  isThinking: boolean,
  anchor?: number
): number | null => {
  const [startedAt, setStartedAt] = useState<number | null>(null)

  useEffect(() => {
    if (!isThinking) {
      setStartedAt(null)
      return
    }
    // Only seal on the rising edge. Re-sealing on every render while thinking
    // is exactly the reset this hook exists to prevent.
    setStartedAt((current) => current ?? anchor ?? Date.now())
  }, [isThinking, anchor])

  return startedAt
}
