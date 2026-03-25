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
 * ```tsx
 * useAutoOpenCanvas(toolCallId, () => openCanvas(content))
 * ```
 */
export function useAutoOpenCanvas(
  toolCallId: string | undefined,
  open: () => void
) {
  const openRef = useRef(open)
  openRef.current = open

  useEffect(() => {
    if (!toolCallId) return
    if (globalOpenedIds.has(toolCallId)) return
    globalOpenedIds.add(toolCallId)
    openRef.current()
  }, [toolCallId])
}
