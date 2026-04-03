import { useCopilotContext } from "@copilotkit/react-core"
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react"

import type { DashboardItemLayout } from "@/patterns/F0AnalyticsDashboard/types"

import type { ChatDashboardConfig } from "./types"
import { useSaveDashboardConfig } from "./useSaveDashboardConfig"
import { useAiChat } from "../../../providers/AiChatStateProvider"

import { savedDashboardConfigStore } from "./configStore"
import type { DashboardCanvasContent } from "../../../types"

type DashboardCanvasContextValue = {
  editMode: boolean
  setEditMode: (editMode: boolean) => void
  onLayoutChange: (layout: DashboardItemLayout[]) => void
  handleSave: () => Promise<void>
  handleDiscard: () => void
  exportAsExcel?: () => Promise<void>
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
  const [editMode, setEditMode] = useState(false)
  const [exportAsExcel, setExportAsExcel] = useState<
    (() => Promise<void>) | undefined
  >()
  const registerExport = useCallback(
    (fn: (() => Promise<void>) | undefined) => {
      setExportAsExcel(() => fn)
    },
    []
  )
  const pendingLayoutRef = useRef<DashboardItemLayout[] | null>(null)
  const { openCanvas } = useAiChat()
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
            rowSpan: entry.rowSpan,
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
    pendingLayoutRef.current = layout
  }, [])

  const handleSave = async () => {
    if (pendingLayoutRef.current) {
      const updatedConfig = applyLayout(pendingLayoutRef.current)
      if (!updatedConfig || !threadId) return

      try {
        await saveConfigFn(threadId, content.toolCallId, updatedConfig)

        if (content.toolCallId) {
          savedDashboardConfigStore.set(content.toolCallId, updatedConfig)
        }

        openCanvas({
          ...content,
          config: updatedConfig,
        })

        pendingLayoutRef.current = null
      } catch {
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
    <DashboardCanvasContext.Provider
      value={{
        editMode,
        setEditMode,
        onLayoutChange,
        handleSave,
        handleDiscard,
        exportAsExcel,
        registerExport,
      }}
    >
      {children}
    </DashboardCanvasContext.Provider>
  )
}
