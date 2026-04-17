import { useCopilotContext } from "@copilotkit/react-core"
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from "react"

import type { DashboardItemLayout } from "@/patterns/F0AnalyticsDashboard/types"

import type { ChatDashboardConfig, ChatDashboardItem } from "./types"
import { useSaveDashboardConfig } from "./useSaveDashboardConfig"
import { useAiChat } from "../../../providers/AiChatStateProvider"

import {
  savedDashboardConfigStore,
  savedDashboardMetaStore,
} from "./configStore"
import type { DashboardCanvasContent } from "../../../types"

type DashboardCanvasContextValue = {
  /** Whether there are unsaved layout changes */
  isDirty: boolean
  /** Incrementing counter — changes when discard is called to reset the grid */
  discardKey: number
  /** Pending item transforms keyed by item id (chart type changes, etc.) */
  itemTransforms: Map<string, Partial<ChatDashboardItem>>
  /** Called by the grid when layout changes (drag/resize/delete) */
  onLayoutChange: (layout: DashboardItemLayout[]) => void
  /** Persist current layout and update canvas */
  handleSave: () => Promise<void>
  /** Discard pending layout changes */
  handleDiscard: () => void
  /** Transform an item's config (e.g. change chart type). Marks dirty without refetch. */
  transformItem: (itemId: string, patch: Partial<ChatDashboardItem>) => void
  /** Persist arbitrary config to chat history (best-effort). Used after create to store the new id. */
  saveConfigToHistory: (config: Record<string, unknown>) => Promise<void>
  /** Export the dashboard as Excel */
  exportAsExcel?: () => Promise<void>
  /** Register the export function from the dashboard component */
  registerExport: (fn: (() => Promise<void>) | undefined) => void
}

const DashboardCanvasContext =
  createContext<DashboardCanvasContextValue | null>(null)

export function useDashboardCanvas(): DashboardCanvasContextValue {
  const ctx = useContext(DashboardCanvasContext)
  if (!ctx) {
    throw new Error(
      "useDashboardCanvas must be used within DashboardCanvasProvider"
    )
  }
  return ctx
}

export function DashboardCanvasProvider({
  content,
  children,
}: {
  content: DashboardCanvasContent
  children: ReactNode
}): ReactNode {
  const [pendingLayout, setPendingLayout] = useState<
    DashboardItemLayout[] | null
  >(null)
  const [itemTransforms, setItemTransforms] = useState<
    Map<string, Partial<ChatDashboardItem>>
  >(new Map())
  const [discardKey, setDiscardKey] = useState(0)
  const [exportAsExcel, setExportAsExcel] = useState<
    (() => Promise<void>) | undefined
  >()
  const registerExport = useCallback(
    (fn: (() => Promise<void>) | undefined) => {
      setExportAsExcel(() => fn)
    },
    []
  )
  const { openCanvas, canvasActions, setPendingContext, pendingContext } =
    useAiChat()
  const { threadId } = useCopilotContext()

  const saveConfigFn = useSaveDashboardConfig(content.apiConfig)

  const applyLayout = useCallback(
    (layout: DashboardItemLayout[]): ChatDashboardConfig | null => {
      const itemsById = new Map(
        content.config.items.map((item) => [item.id, item])
      )
      const newItems = layout
        .map((entry) => {
          const original = itemsById.get(entry.id)
          if (!original) return null
          return {
            ...original,
            colSpan: entry.colSpan,
            // Persist the canonical pixel-accurate height from the resize.
            // `rowSpan` is stripped on persistence so subsequent renders read
            // `itemHeight` exclusively (avoids drift between the two fields).
            rowSpan: undefined,
            itemHeight: entry.itemHeight,
            x: entry.x,
            y: entry.y,
          }
        })
        .filter((item) => item !== null)

      return { ...content.config, items: newItems }
    },
    [content]
  )

  const onLayoutChange = useCallback((layout: DashboardItemLayout[]) => {
    setPendingLayout(layout)
  }, [])

  const transformItem = useCallback(
    (itemId: string, patch: Partial<ChatDashboardItem>) => {
      setItemTransforms((prev) => {
        const next = new Map(prev)
        next.set(itemId, patch)
        return next
      })
    },
    []
  )

  /** Apply item transforms to a config, producing a new config with patched items. */
  const applyTransforms = useCallback(
    (config: ChatDashboardConfig): ChatDashboardConfig => {
      if (itemTransforms.size === 0) return config
      return {
        ...config,
        items: config.items.map((item) => {
          const patch = itemTransforms.get(item.id)
          return patch ? ({ ...item, ...patch } as typeof item) : item
        }),
      }
    },
    [itemTransforms]
  )

  const handleSave = async () => {
    const hasPendingChanges =
      pendingLayout || itemTransforms.size > 0 || content.savedDashboardUnsaved
    if (!hasPendingChanges) return

    // Start from current config, apply layout then transforms
    let updatedConfig = pendingLayout
      ? applyLayout(pendingLayout)
      : { ...content.config }
    if (!updatedConfig) return

    updatedConfig = applyTransforms(updatedConfig)

    try {
      // Persist to chat history (best-effort — may fail if no thread exists
      // yet, e.g. for client-only seed messages injected before the user
      // sends their first message).
      // Include saved-dashboard metadata so the history preserves the full state.
      if (threadId) {
        try {
          const configWithMeta = {
            ...updatedConfig,
            ...(content.savedDashboardId
              ? {
                  savedDashboardId: content.savedDashboardId,
                  savedDashboardCategory: content.savedDashboardCategory,
                  savedDashboardDescription: content.savedDashboardDescription,
                  savedDashboardUnsaved: false,
                }
              : {}),
          }
          await saveConfigFn(
            threadId,
            content.toolCallId,
            configWithMeta as typeof updatedConfig
          )
        } catch {
          // Thread may not exist yet — continue with external save
        }
      }

      // Persist externally via canvasActions (the actual save to backend)
      if (
        content.savedDashboardId &&
        content.savedDashboardCategory &&
        canvasActions?.dashboard?.save
      ) {
        await canvasActions.dashboard.save(
          content.savedDashboardId,
          content.savedDashboardCategory,
          updatedConfig
        )
      }

      if (content.toolCallId) {
        savedDashboardConfigStore.set(content.toolCallId, updatedConfig)
        savedDashboardMetaStore.set(content.toolCallId, {
          savedDashboardId: content.savedDashboardId,
          savedDashboardCategory: content.savedDashboardCategory,
          savedDashboardDescription: content.savedDashboardDescription,
          savedDashboardUnsaved: false,
        })
      }

      // Update pending context so the agent sees the latest config
      // if the user sends a message after saving.
      if (pendingContext) {
        setPendingContext({
          ...pendingContext,
          context: JSON.stringify({
            ...updatedConfig,
            savedDashboardId: content.savedDashboardId,
            savedDashboardCategory: content.savedDashboardCategory,
            savedDashboardDescription: content.savedDashboardDescription,
          }),
        })
      }

      // Update canvas content. handleSave only ever spreads the config / items
      // so `fetchSpecs` keeps the same reference — DashboardContent uses that
      // reference to gate its data refresh key, so this update does NOT
      // trigger a recompute even though the canvas content reference changes.
      // Also clear the unsaved flag since changes are now persisted.
      openCanvas({
        ...content,
        config: updatedConfig,
        savedDashboardUnsaved: false,
      })

      setPendingLayout(null)
      setItemTransforms(new Map())
    } catch {
      // Keep pending state on failure so user can retry
    }
  }

  const saveConfigToHistory = useCallback(
    async (config: Record<string, unknown>) => {
      if (!threadId) return
      try {
        await saveConfigFn(
          threadId,
          content.toolCallId,
          config as unknown as ChatDashboardConfig
        )
      } catch {
        // Best-effort
      }
    },
    [threadId, content.toolCallId, saveConfigFn]
  )

  const handleDiscard = () => {
    setPendingLayout(null)
    setItemTransforms(new Map())
    setDiscardKey((k) => k + 1)
  }

  return (
    <DashboardCanvasContext.Provider
      value={{
        isDirty: pendingLayout !== null || itemTransforms.size > 0,
        discardKey,
        itemTransforms,
        onLayoutChange,
        handleSave,
        handleDiscard,
        transformItem,
        saveConfigToHistory,
        exportAsExcel,
        registerExport,
      }}
    >
      {children}
    </DashboardCanvasContext.Provider>
  )
}
