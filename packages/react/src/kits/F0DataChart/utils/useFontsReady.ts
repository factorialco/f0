import { useEffect, useState } from "react"

/**
 * Whether the document's web fonts have finished loading.
 *
 * Anything that measures text to lay a chart out has to know this. Canvas
 * measurement silently falls back to a system font while the real one is still
 * loading, and the two are not the same width — Inter runs ~6% wider than the
 * `sans-serif` fallback at the same size — so a width measured too early comes
 * out short by a margin that grows with the string. The chart then reserves less
 * room than the text needs and clips it.
 *
 * Returns `false` until fonts are ready, then `true` once. Callers keep it in
 * their layout dependencies so the measurement is retaken with real metrics.
 * Environments without the Font Loading API (jsdom) report `true` immediately:
 * there are no web fonts to wait for, so the first measurement is as good as it
 * will get.
 */
export function useFontsReady(): boolean {
  const [ready, setReady] = useState(
    () => typeof document === "undefined" || document.fonts === undefined
  )

  useEffect(() => {
    if (ready) return
    let cancelled = false
    document.fonts.ready.then(() => {
      if (!cancelled) setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [ready])

  return ready
}
