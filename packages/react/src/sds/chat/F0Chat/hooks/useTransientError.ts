import { useCallback, useEffect, useRef, useState } from "react"

/** How long a transient message stays before it fades out — matches the AI chat. */
const TRANSIENT_ERROR_MS = 4000

/**
 * A short-lived error message: `show(msg)` flashes it, and it auto-clears after
 * `timeoutMs`. Used by the composer for "too many files" / upload / voice
 * failures (same pattern as the AI chat).
 */
export function useTransientError(timeoutMs: number = TRANSIENT_ERROR_MS): {
  error: string | null
  show: (message: string) => void
} {
  const [error, setError] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = useCallback(
    (message: string) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setError(message)
      timeoutRef.current = setTimeout(() => {
        setError(null)
        timeoutRef.current = null
      }, timeoutMs)
    },
    [timeoutMs]
  )

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    },
    []
  )

  return { error, show }
}
