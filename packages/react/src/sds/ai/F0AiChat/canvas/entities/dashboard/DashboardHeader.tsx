import type { ReactNode } from "react"

import { useCallback, useRef, useState } from "react"

import { ExportDropdown } from "@/patterns/F0AnalyticsDashboard/components/ExportDropdown/ExportDropdown"
import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { Pencil } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { CloseCanvasButton } from "../../components/CloseCanvasButton"
import { useDashboardCanvas } from "./DashboardContext"

export function DashboardHeader({
  title,
  onClose,
}: {
  title: string
  onClose: () => void
}) {
  return (
    <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary p-5">
      <OneEllipsis
        tag="h2"
        className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
      >
        {title}
      </OneEllipsis>
      <DashboardActions />
      <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
      <CloseCanvasButton onClick={onClose} />
    </div>
  )
}

function DashboardActions(): ReactNode {
  const { editMode, setEditMode, handleSave, handleDiscard, exportAsExcel } =
    useDashboardCanvas()
  const translations = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = useCallback(async () => {
    if (!exportAsExcel) return
    setIsExporting(true)
    try {
      await exportAsExcel()
    } finally {
      setIsExporting(false)
    }
  }, [exportAsExcel])

  if (editMode) {
    return (
      <div ref={ref} className="flex gap-2">
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
      </div>
    )
  }

  return (
    <div ref={ref} className="flex items-center gap-2">
      {exportAsExcel && (
        <ExportDropdown
          onExportExcel={handleExport}
          isExporting={isExporting}
        />
      )}
      <F0Button
        variant="outline"
        icon={Pencil}
        size="md"
        onClick={() => setEditMode(true)}
        label={translations.actions.edit}
      />
    </div>
  )
}
