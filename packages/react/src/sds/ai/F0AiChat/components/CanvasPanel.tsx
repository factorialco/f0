import { useCopilotContext } from "@copilotkit/react-core"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"

import type { DashboardItemLayout } from "@/components/F0AnalyticsDashboard/types"

import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Cross, Pencil } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { ChatDashboardConfig } from "../../F0ChatDashboard/types"

import { F0ChatDashboard } from "../../F0ChatDashboard"
import { useSaveDashboardConfig } from "../../F0ChatDashboard/useSaveDashboardConfig"
import { useAiChat } from "../providers/AiChatStateProvider"

/**
 * Canvas panel that renders content alongside the chat sidebar.
 *
 * Appears to the left of the chat sidebar when a copilot action opens
 * the canvas (e.g. `displayDashboard`). Overlays the main content
 * area (nav sidebar stays visible). Closes via the X button which
 * clears `canvasContent` and restores the previous visualization mode.
 */
export function CanvasPanel() {
  const { canvasContent, closeCanvas, openCanvas, updateDashboardConfig } =
    useAiChat()
  const { threadId } = useCopilotContext()
  const translations = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const [refreshKey, setRefreshKey] = useState(0)
  const [editMode, setEditMode] = useState(false)

  // When a new dashboard is displayed (LLM regeneration), auto-increment
  // refreshKey to bust the compute cache in useDashboardCompute.
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

  // Pending layout changes that haven't been saved yet
  const pendingLayoutRef = useRef<DashboardItemLayout[] | null>(null)

  const saveConfigFn = useSaveDashboardConfig(
    canvasContent?.apiConfig ?? { baseUrl: "", headers: {} }
  )

  /**
   * Reconcile a layout descriptor against the original config items.
   * Reorders, resizes (colSpan), and removes items as described.
   */
  const applyLayout = useCallback(
    (layout: DashboardItemLayout[]): ChatDashboardConfig | null => {
      if (!canvasContent) return null
      const itemsById = new Map(
        canvasContent.config.items.map((item) => [item.id, item])
      )
      const newItems = layout
        .map((entry) => {
          const original = itemsById.get(entry.id)
          if (!original) return null
          return {
            ...original,
            colSpan: entry.colSpan,
            rowSpan: entry.rowSpan,
            x: entry.x,
            y: entry.y,
          }
        })
        .filter((item) => item !== null)

      return { ...canvasContent.config, items: newItems }
    },
    [canvasContent]
  )

  const handleLayoutChange = useCallback((layout: DashboardItemLayout[]) => {
    pendingLayoutRef.current = layout
  }, [])

  const handleSave = async () => {
    if (!canvasContent) return

    if (pendingLayoutRef.current) {
      const updatedConfig = applyLayout(pendingLayoutRef.current)
      if (!updatedConfig || !threadId) return

      try {
        await saveConfigFn(threadId, canvasContent.toolCallId, updatedConfig)

        if (canvasContent.toolCallId) {
          updateDashboardConfig(canvasContent.toolCallId, updatedConfig)
        }

        openCanvas({
          ...canvasContent,
          config: updatedConfig,
        })

        pendingLayoutRef.current = null
      } catch {
        // Keep edit mode open so user can retry
        return
      }
    }

    setEditMode(false)
  }

  const handleDiscard = () => {
    pendingLayoutRef.current = null
    setEditMode(false)
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
            {/* Header */}
            <div className="flex shrink-0 items-center gap-3 border-0 border-b border-solid border-f1-border-secondary px-4 py-2">
              <OneEllipsis
                tag="h2"
                className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
              >
                {canvasContent.title}
              </OneEllipsis>
              {editMode ? (
                <>
                  <F0Button
                    variant="outline"
                    label={translations.ai.discardChanges}
                    onClick={handleDiscard}
                    size="md"
                  />
                  <F0Button
                    label={translations.ai.saveChanges}
                    onClick={handleSave}
                    size="md"
                  />
                </>
              ) : (
                <>
                  <F0Button
                    variant="outline"
                    icon={Pencil}
                    size="md"
                    onClick={() => setEditMode(true)}
                    label="Edit"
                  />
                  <F0Button
                    variant="outline"
                    icon={Cross}
                    size="md"
                    hideLabel
                    onClick={() => closeCanvas()}
                    label={translations.ai.closeDashboard}
                  />
                </>
              )}
            </div>

            {/* Content */}
            <div className="relative flex-1 overflow-auto p-5">
              {canvasContent.type === "dashboard" && (
                <F0ChatDashboard
                  config={canvasContent.config}
                  apiConfig={canvasContent.apiConfig}
                  refreshKey={refreshKey}
                  editMode={editMode}
                  onLayoutChange={handleLayoutChange}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

CanvasPanel.displayName = "CanvasPanel"
