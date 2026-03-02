import Download from "@/icons/app/Download"

import { DownloadFormatDefinition } from "../types"
import { resolveHeaders, triggerDownload } from "../utils"

export const jsonFormat: DownloadFormatDefinition = {
  key: "json",
  formatName: "JSON",
  icon: Download,
  handler: (dataset, filename) => {
    const { columns, rows, columnLabels } = dataset
    const headers = resolveHeaders(columns, columnLabels)

    const labeledRows = rows.map((row) => {
      const obj: Record<string, unknown> = {}
      columns.forEach((col, i) => {
        obj[headers[i]] = row[col] ?? null
      })
      return obj
    })

    triggerDownload(
      new Blob([JSON.stringify(labeledRows, null, 2)], {
        type: "application/json;charset=utf-8;",
      }),
      `${filename}.json`
    )
  },
}
