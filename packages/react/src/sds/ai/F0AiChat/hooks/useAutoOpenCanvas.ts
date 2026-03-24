import { breakpoints } from "@factorialco/f0-core"
import { useEffect, useRef } from "react"
import { useMediaQuery } from "usehooks-ts"

import type { CanvasContent } from "../types"
import { useAiChat } from "../providers/AiChatStateProvider"

/**
 * Auto-opens the canvas panel the first time content is received from the agent.
 * On small screens, skips auto-open so the user can open manually via the card.
 *
 * Call this inside a copilot action's render callback, passing the canvas content
 * to open. It will only fire once per mount (i.e. per action invocation).
 */
export function useAutoOpenCanvas(content: CanvasContent | null) {
  const { openCanvas } = useAiChat()
  const opened = useRef(false)
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  useEffect(() => {
    if (content && !opened.current && !isSmallScreen) {
      opened.current = true
      openCanvas(content)
    }
  }, [content, isSmallScreen, openCanvas])
}
