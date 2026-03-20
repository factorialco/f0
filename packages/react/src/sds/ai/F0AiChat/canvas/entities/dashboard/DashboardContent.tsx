import { breakpoints } from "@factorialco/f0-core"
import type { ReactNode } from "react"
import { useMediaQuery } from "usehooks-ts"

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
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  return (
    <F0ChatDashboard
      config={content.config}
      apiConfig={content.apiConfig}
      refreshKey={refreshKey}
      editMode={editMode}
      onLayoutChange={onLayoutChange}
      forceFullWidth={isSmallScreen}
    />
  )
}
