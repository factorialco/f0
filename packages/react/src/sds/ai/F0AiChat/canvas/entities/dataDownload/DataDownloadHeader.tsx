import { useCallback } from "react"

import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import Download from "@/icons/app/Download"
import { OneEllipsis } from "@/components/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

import { CloseCanvasButton } from "../../components/CloseCanvasButton"
import type { DataDownloadCanvasContent } from "../../../types"
import {
  downloadAsExcel,
  downloadAsCsv,
} from "../../../actions/core/dataDownload/download"
import { useDataDownloadView } from "./DataDownloadContext"

export function DataDownloadHeader({
  content,
  onClose,
}: {
  content: DataDownloadCanvasContent
  onClose: () => void
}) {
  const i18n = useI18n()
  const { filename = "dataset" } = content
  const { getFilteredDataset } = useDataDownloadView()

  const downloadItems = [
    {
      value: "excel",
      label: i18n.t("ai.dataDownload.download", { format: "Excel" }),
      icon: Download,
    },
    {
      value: "csv",
      label: i18n.t("ai.dataDownload.download", { format: "CSV" }),
      icon: Download,
    },
  ]

  const handleDownload = useCallback(
    (format: string) => {
      const dataset = getFilteredDataset()
      if (format === "excel") {
        downloadAsExcel(dataset, filename)
      } else if (format === "csv") {
        downloadAsCsv(dataset, filename)
      }
    },
    [getFilteredDataset, filename]
  )

  return (
    <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary p-5">
      <OneEllipsis
        tag="h2"
        className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
      >
        {content.title}
      </OneEllipsis>
      <div className="flex items-center gap-2">
        <F0ButtonDropdown
          variant="outline"
          size="md"
          items={downloadItems}
          value="excel"
          onClick={handleDownload}
        />
      </div>
      <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
      <CloseCanvasButton onClick={onClose} />
    </div>
  )
}
