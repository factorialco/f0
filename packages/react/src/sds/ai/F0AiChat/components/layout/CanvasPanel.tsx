import { AnimatePresence, motion } from "motion/react"
import { type ReactNode, useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Cross } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { getCanvasEntity } from "../../canvas"
import { useAiChat } from "../../providers/AiChatStateProvider"

/**
 * Entity-agnostic canvas panel that renders content alongside the chat sidebar.
 *
 * Looks up the entity definition from the registry based on `canvasContent.type`
 * and delegates rendering of body and header actions to the entity module.
 * The canvas shell handles: animation, title, close button, and refreshKey.
 */
export function CanvasPanel(): ReactNode {
  const { canvasContent, closeCanvas } = useAiChat()
  const translations = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const [refreshKey, setRefreshKey] = useState(0)

  // Auto-increment refreshKey when content changes (e.g. LLM regeneration)
  const prevCanvasContentRef = useRef(canvasContent)
  useEffect(() => {
    if (
      canvasContent &&
      prevCanvasContentRef.current &&
      canvasContent !== prevCanvasContentRef.current
    ) {
      setRefreshKey((k) => k + 1)
    }
    prevCanvasContentRef.current = canvasContent
  }, [canvasContent])

  const entity = canvasContent ? getCanvasEntity(canvasContent.type) : undefined

  const renderInner = (): ReactNode => {
    if (!canvasContent || !entity) return null

    const headerActions = entity.renderHeaderActions({ content: canvasContent })
    const content = entity.renderContent({
      content: canvasContent,
      refreshKey,
    })

    const inner = (
      <>
        {/* Header */}
        <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary px-7 py-5">
          <OneEllipsis
            tag="h2"
            className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
          >
            {canvasContent.title}
          </OneEllipsis>
          {headerActions}
          <F0Button
            variant="ghost"
            icon={Cross}
            size="md"
            hideLabel
            onClick={() => closeCanvas()}
            label={translations.ai.closeDashboard}
          />
        </div>

        {/* Content */}
        <div className="relative flex-1 overflow-auto p-5">{content}</div>
      </>
    )

    if (entity.wrapper) {
      return entity.wrapper({ content: canvasContent, children: inner })
    }

    return inner
  }

  return (
    <AnimatePresence>
      {canvasContent && (
        <motion.div
          className={cn(
            "pointer-events-auto flex h-full flex-col",
            "overflow-hidden",
            "py-1 dark:bg-f1-background"
          )}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: [0, 0, 0.1, 1],
          }}
        >
          <motion.div
            className={cn(
              "flex h-full w-full flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary",
              "bg-f1-special-page"
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

CanvasPanel.displayName = "CanvasPanel"
