import type { DropdownItem } from "@/patterns/Navigation/Dropdown"

import { useCallback, useMemo } from "react"

import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { downloadAsCsv, downloadAsExcel } from "../utils/downloadHelpers"
import { extractColumns } from "../utils/extractColumns"

interface UseCollectionDownloadActionsOptions {
  records: Record<string, unknown>[]
  title: string
}

export function useCollectionDownloadActions({
  records,
  title,
}: UseCollectionDownloadActionsOptions): DropdownItem[] {
  const { t } = useI18n()

  const handleExcel = useCallback(() => {
    if (records.length === 0) return
    const columns = extractColumns(records)
    downloadAsExcel(columns, records, title)
  }, [records, title])

  const handleCsv = useCallback(() => {
    if (records.length === 0) return
    const columns = extractColumns(records)
    downloadAsCsv(columns, records, title)
  }, [records, title])

  return useMemo(() => {
    if (records.length === 0) return []
    return [
      {
        label: t("ai.dataDownload.download", { format: "Excel" }),
        icon: Download,
        onClick: handleExcel,
      },
      {
        label: t("ai.dataDownload.download", { format: "CSV" }),
        icon: Download,
        onClick: handleCsv,
      },
    ]
  }, [records.length, t, handleExcel, handleCsv])
}
