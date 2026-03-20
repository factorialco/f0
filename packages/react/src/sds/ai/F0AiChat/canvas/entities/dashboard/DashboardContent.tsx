import type { ReactNode } from "react"

import { F0ChatDashboard } from "../../../../F0ChatDashboard"

import { useDashboardCanvas } from "./DashboardContext"
import type { DashboardCanvasContent } from "./types"

export function DashboardContent({
  content,
  refreshKey,
}: {
  content: DashboardCanvasContent
  refreshKey: number
}): ReactNode {
  const { editMode, onLayoutChange } = useDashboardCanvas()

  return (
    <F0ChatDashboard
      config={content.config}
      apiConfig={content.apiConfig}
      refreshKey={refreshKey}
      editMode={editMode}
      onLayoutChange={onLayoutChange}
    />
  )
}
