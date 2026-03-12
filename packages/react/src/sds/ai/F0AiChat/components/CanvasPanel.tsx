import { useCopilotContext } from "@copilotkit/react-core"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"

import type { DashboardItemLayout } from "@/components/F0AnalyticsDashboard/types"

import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import { F0ActionBar, type ActionBarStatus } from "@/experimental/F0ActionBar"
import { ArrowCycle, Cross } from "@/icons/app"
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
  const { canvasContent, closeCanvas, openCanvas } = useAiChat()
  const { threadId } = useCopilotContext()
  const translations = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const [refreshKey, setRefreshKey] = useState(0)
  const [actionBarStatus, setActionBarStatus] =
    useState<ActionBarStatus>("idle")

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
  const [hasPendingChanges, setHasPendingChanges] = useState(false)

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
          return { ...original, colSpan: entry.colSpan }
        })
        .filter((item) => item !== null)

      return { ...canvasContent.config, items: newItems }
    },
    [canvasContent]
  )

  const handleLayoutChange = useCallback((layout: DashboardItemLayout[]) => {
    pendingLayoutRef.current = layout
    setHasPendingChanges(true)
  }, [])

  const handleSave = async () => {
    if (!canvasContent || !pendingLayoutRef.current) return

    const updatedConfig = applyLayout(pendingLayoutRef.current)
    if (!updatedConfig) return

    if (!threadId) return

    setActionBarStatus("loading")
    try {
      // Save to backend
      await saveConfigFn(threadId, canvasContent.toolCallId, updatedConfig)

      // Update canvas content locally
      openCanvas({
        ...canvasContent,
        config: updatedConfig,
      })

      pendingLayoutRef.current = null
      setActionBarStatus("success")
      // Hide the action bar after showing success briefly
      setTimeout(() => {
        setHasPendingChanges(false)
        setActionBarStatus("idle")
      }, 1500)
    } catch {
      // Reset to idle so user can retry
      setActionBarStatus("idle")
    }
  }

  const handleDiscard = () => {
    pendingLayoutRef.current = null
    setHasPendingChanges(false)
    setActionBarStatus("idle")
    // Force re-render to reset the dashboard to its original config
    setRefreshKey((k) => k + 1)
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
              "p-1 bg-f1-special-page"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.15,
              duration: shouldReduceMotion ? 0 : 0.2,
            }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-start gap-3 border-0 border-b border-solid border-f1-border-secondary px-4 py-2">
              <div className="flex min-w-0 flex-1 flex-col">
                <OneEllipsis
                  tag="h2"
                  className="text-2xl font-semibold text-f1-foreground"
                >
                  {canvasContent.title}
                </OneEllipsis>
                {canvasContent.description && (
                  <OneEllipsis className="text-base text-f1-foreground-secondary">
                    {canvasContent.description}
                  </OneEllipsis>
                )}
              </div>
              <F0Button
                variant="ghost"
                icon={ArrowCycle}
                size="md"
                hideLabel
                onClick={() => setRefreshKey((k) => k + 1)}
                label="Refresh"
              />
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
            <div className="relative flex-1 overflow-auto p-5">
              {canvasContent.type === "dashboard" && (
                <F0ChatDashboard
                  config={canvasContent.config}
                  apiConfig={canvasContent.apiConfig}
                  refreshKey={refreshKey}
                  editMode
                  onLayoutChange={handleLayoutChange}
                />
              )}
              <F0ActionBar
                isOpen={hasPendingChanges}
                variant="dark"
                status={actionBarStatus}
                label={translations.ai.unsavedChanges}
                primaryActions={[
                  {
                    label: translations.ai.saveChanges,
                    onClick: handleSave,
                  },
                ]}
                secondaryActions={[
                  {
                    label: translations.ai.discardChanges,
                    onClick: handleDiscard,
                  },
                ]}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

CanvasPanel.displayName = "CanvasPanel"
