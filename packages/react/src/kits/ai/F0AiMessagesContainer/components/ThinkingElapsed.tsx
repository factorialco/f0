import { useEffect, useState } from "react"

import { useI18n } from "@/lib/providers/i18n"

/** Below this the number is noise — a turn that answers instantly would flash "0s". */
const MIN_VISIBLE_MS = 1000

const TICK_MS = 1000

/**
 * How long the current turn has been thinking, ticking once a second.
 *
 * A leaf on purpose: it owns the interval so the per-second re-render stops
 * here instead of reaching the message list, which renders every turn and
 * every message without virtualisation. The parent only ever hands down
 * `startedAt`, which changes twice per turn.
 *
 * Hidden from assistive tech — a number that changes every second would be
 * announced every second, and the spinner beside it already says the same
 * thing without the noise.
 */
export const ThinkingElapsed = ({
  startedAt,
}: {
  startedAt: number | null
}) => {
  const i18n = useI18n()
  const [elapsedMs, setElapsedMs] = useState(() =>
    startedAt === null ? 0 : Date.now() - startedAt
  )

  useEffect(() => {
    if (startedAt === null) {
      setElapsedMs(0)
      return
    }
    setElapsedMs(Date.now() - startedAt)
    const id = setInterval(() => {
      setElapsedMs(Date.now() - startedAt)
    }, TICK_MS)
    return () => clearInterval(id)
  }, [startedAt])

  if (startedAt === null || elapsedMs < MIN_VISIBLE_MS) return null

  const total = Math.floor(elapsedMs / 1000)
  const minutes = Math.floor(total / 60)
  const seconds = total % 60

  const label =
    minutes > 0
      ? i18n.t("ai.thinkingElapsedMinutes", { minutes, seconds })
      : i18n.t("ai.thinkingElapsedSeconds", { seconds })

  return (
    <span aria-hidden className="whitespace-nowrap tabular-nums">
      <span className="px-1 text-f1-foreground-tertiary">·</span>
      {label}
    </span>
  )
}
