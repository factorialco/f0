import { useCallback, useMemo, useState } from "react"

import { Download, Ellipsis } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import {
  DropdownInternal,
  type DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal"

import type { DashboardCanvasContent } from "../../../types"

import { CloseCanvasButton } from "../../components/CloseCanvasButton"
import { useDashboardCanvas } from "./DashboardContext"

export function DashboardHeader({
  content,
  onClose,
}: {
  content: DashboardCanvasContent
  onClose: () => void
}) {
  const { t } = useI18n()
  const { exportAsExcel } = useDashboardCanvas()
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

  const dropdownItems = useMemo<DropdownItem[]>(() => {
    const items: DropdownItem[] = []
    if (exportAsExcel) {
      items.push({
        label: isExporting
          ? t("ai.dataDownload.exporting")
          : t("ai.dataDownload.exportDashboard", { format: "Excel" }),
        icon: Download,
        onClick: handleExport,
      })
    }
    return items
  }, [exportAsExcel, isExporting, handleExport, t])

  return (
    <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary p-5">
      <OneEllipsis
        tag="h2"
        className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
      >
        {content.title}
      </OneEllipsis>
      {dropdownItems.length > 0 && (
        <DropdownInternal items={dropdownItems} icon={Ellipsis} align="end" />
      )}
      <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
      <CloseCanvasButton onClick={onClose} />
    </div>
  )
}
