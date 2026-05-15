import { AnimatePresence, motion } from "motion/react"
import { type ReactNode, useEffect, useRef, useState } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

import type { CanvasContent, CanvasEntityDefinition } from "../canvas/types"

export type F0CanvasPanelProps = {
  /** Current canvas content to render. When null, the panel collapses. */
  content: CanvasContent | null
  /** Called when the user closes the canvas. */
  onClose: () => void
  /** Canvas entity registry keyed by `CanvasContent["type"]`. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entities?: Record<string, CanvasEntityDefinition<any>>
}

/**
 * Entity-agnostic canvas panel that renders content alongside the chat sidebar.
 *
 * Looks up the entity definition from the `entities` prop using
 * `content.type` and delegates rendering of body and header actions to the
 * entity module. The panel shell handles animation, body scroll area, and
 * refreshKey bookkeeping (auto-increments when `content` changes by identity).
 *
 * Headless: no CopilotKit or `useAiChat()` dependency — the host wires
 * `content`, `onClose` and `entities` directly.
 */
export function F0CanvasPanel({
  content,
  onClose,
  entities,
}: F0CanvasPanelProps): ReactNode {
  const shouldReduceMotion = useReducedMotion()
  const [refreshKey, setRefreshKey] = useState(0)

  // Auto-increment refreshKey when content changes (e.g. LLM regeneration)
  const prevContentRef = useRef(content)
  useEffect(() => {
    if (
      content &&
      prevContentRef.current &&
      content !== prevContentRef.current
    ) {
      setRefreshKey((k) => k + 1)
    }
    prevContentRef.current = content
  }, [content])

  const entity = content && entities ? entities[content.type] : undefined

  const renderInner = (): ReactNode => {
    if (!content || !entity) return null

    const header = entity.renderHeader({
      content,
      onClose,
    })
    const body = entity.renderContent({
      content,
      refreshKey,
    })

    const inner = (
      <>
        {header}
        <div
          className={cn(
            "relative flex-1",
            entity.overflowHidden ? "overflow-hidden" : "overflow-auto"
          )}
        >
          {body}
        </div>
      </>
    )

    if (entity.wrapper) {
      return entity.wrapper({ content, children: inner })
    }

    return inner
  }

  return (
    <AnimatePresence>
      {content && (
        <motion.div
          className={cn(
            // No overflow on the outer wrappers so the inner card's
            // box-shadow can escape rightward onto the chat. Setting any
            // overflow-y here would force overflow-x to `auto` (CSS spec)
            // and clip the shadow.
            "pointer-events-auto flex h-full flex-col",
            "md:py-1 dark:bg-f1-background p-0"
          )}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: [0, 0, 0.1, 1],
          }}
        >
          <div className="flex h-full flex-col border border-r-0 border-solid border-f1-border-secondary bg-f1-special-page p-0 md:rounded-l-lg md:py-1 md:pl-1">
            <motion.div
              className={cn(
                // overflow-hidden only on the inner card (where rounded
                // corners clip content); the outer wrappers stay
                // unconstrained so the shadow can paint past the seam.
                "flex h-full w-full flex-col overflow-hidden",
                "bg-f1-background",
                // Directional shadow biased rightward so depth falls onto
                // the adjacent chat surface.
                "md:shadow-md shadow-none",
                "rounded-none border-none md:rounded-md md:border md:border-solid border-f1-border-secondary"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.15,
                duration: shouldReduceMotion ? 0 : 0.2,
              }}
            >
              {renderInner()}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

F0CanvasPanel.displayName = "F0CanvasPanel"
