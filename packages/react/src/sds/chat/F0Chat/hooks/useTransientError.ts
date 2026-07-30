import { useCallback, useEffect, useRef, useState } from "react"

/** How long a transient message stays before it fades out — matches the AI chat. */
const TRANSIENT_ERROR_MS = 4000

/**
 * Composer error state. `show(msg)` clears after `timeoutMs` by default;
 * validation errors can opt into persistence until the next corrective action
 * calls `clear()`.
 */
export function useTransientError(timeoutMs: number = TRANSIENT_ERROR_MS): {
  error: string | null
  show: (message: string, options?: { persistent?: boolean }) => void
  clear: () => void
} {
  const [error, setError] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clear = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = null
    setError(null)
  }, [])

  const show = useCallback(
    (message: string, options?: { persistent?: boolean }) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setError(message)
      if (options?.persistent) {
        timeoutRef.current = null
        return
      }
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

  return { error, show, clear }
}
