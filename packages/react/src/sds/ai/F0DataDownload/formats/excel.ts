import * as XLSX from "xlsx"

import Download from "@/icons/app/Download"

import { DownloadFormatDefinition } from "../types"
import { buildTableData, triggerDownload } from "../utils"

export const excelFormat: DownloadFormatDefinition = {
  key: "excel",
  formatName: "Excel",
  icon: Download,
  handler: (dataset, filename) => {
    const wsData = buildTableData(dataset)
    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.aoa_to_sheet(wsData)
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data")

    const buffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" })
    triggerDownload(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      `${filename}.xlsx`
    )
  },
}
