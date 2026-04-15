import { useCallback, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { Download } from "@/icons/app"
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
  const { t } = useI18n()
  const { exportAsExcel } = useDashboardCanvas()
  const [isExporting, setIsExporting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleExport = useCallback(async () => {
    if (!exportAsExcel) return
    setIsExporting(true)
    try {
      await exportAsExcel()
    } finally {
      setIsExporting(false)
    }
  }, [exportAsExcel])

  return (
    <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary p-5">
      <OneEllipsis
        tag="h2"
        className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
      >
        {title}
      </OneEllipsis>
      <div ref={ref} className="flex items-center gap-2">
        {exportAsExcel && (
          <ButtonInternal
            variant="outline"
            icon={Download}
            onClick={handleExport}
            label={
              isExporting
                ? t("ai.dataDownload.exporting")
                : t("ai.dataDownload.exportDashboard", { format: "Excel" })
            }
          />
        )}
      </div>
      <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
      <CloseCanvasButton onClick={onClose} />
    </div>
  )
}
