import { useEffect, useRef } from "react"

// Module-level set shared across all instances — survives remounts.
const globalOpenedIds = new Set<string>()

/**
 * Auto-opens a canvas card the first time it appears.
 *
 * Call inside any canvas card component (DashboardCard, SurveyCard, …)
 * passing its `toolCallId` and a callback that opens the canvas.
 * The hook fires the callback exactly once per `toolCallId` for the
 * lifetime of the page.  If the user closes the canvas, it won't
 * re-open for that same tool call.
 *
 * Pass an optional `shouldOpen` guard to conditionally prevent auto-open.
 * When provided, the guard is called before opening — return `false` to
 * suppress.  The `toolCallId` is still recorded so the card won't
 * retry on subsequent renders.
 *
 * ```tsx
 * useAutoOpenCanvas(toolCallId, () => openCanvas(content))
 * useAutoOpenCanvas(toolCallId, () => openCanvas(content), {
 *   shouldOpen: () => !userDismissed,
 * })
 * ```
 */
export function useAutoOpenCanvas(
  toolCallId: string | undefined,
  open: () => void,
  options?: { shouldOpen?: () => boolean }
) {
  const openRef = useRef(open)
  openRef.current = open

  const shouldOpenRef = useRef(options?.shouldOpen)
  shouldOpenRef.current = options?.shouldOpen

  useEffect(() => {
    if (!toolCallId) return
    if (globalOpenedIds.has(toolCallId)) return
    if (window.innerWidth <= 624) return
    globalOpenedIds.add(toolCallId)
    if (shouldOpenRef.current && !shouldOpenRef.current()) return
    openRef.current()
  }, [toolCallId])
}
