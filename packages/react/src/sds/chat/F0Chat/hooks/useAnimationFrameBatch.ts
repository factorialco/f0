import { useCallback, useEffect, useRef } from "react"

/** Coalesces repeated values so only the latest one is applied per frame. */
export function useAnimationFrameBatch<T>(
  apply: (value: T) => void
): (value: T) => void {
  const applyRef = useRef(apply)
  applyRef.current = apply
  const frameRef = useRef<number | null>(null)
  const pendingRef = useRef<{ value: T } | null>(null)

  const schedule = useCallback((value: T) => {
    pendingRef.current = { value }
    if (frameRef.current != null) return

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      const pending = pendingRef.current
      pendingRef.current = null
      if (pending) applyRef.current(pending.value)
    })
  }, [])

  useEffect(
    () => () => {
      if (frameRef.current != null) cancelAnimationFrame(frameRef.current)
      frameRef.current = null
      pendingRef.current = null
    },
    []
  )

  return schedule
}
