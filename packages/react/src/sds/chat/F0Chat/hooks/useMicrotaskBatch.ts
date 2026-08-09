import { useCallback, useEffect, useRef } from "react"

/** Coalesces synchronous bursts into one write before the next paint. */
export const useMicrotaskBatch = <Value>(
  write: (value: Value) => void
): ((value: Value) => void) => {
  const writeRef = useRef(write)
  const latestRef = useRef<Value | undefined>(undefined)
  const hasLatestRef = useRef(false)
  const scheduledRef = useRef(false)
  const mountedRef = useRef(true)
  writeRef.current = write

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  return useCallback((value: Value) => {
    latestRef.current = value
    hasLatestRef.current = true
    if (scheduledRef.current) return

    scheduledRef.current = true
    queueMicrotask(() => {
      scheduledRef.current = false
      if (!mountedRef.current || !hasLatestRef.current) return
      const latest = latestRef.current as Value
      latestRef.current = undefined
      hasLatestRef.current = false
      writeRef.current(latest)
    })
  }, [])
}
