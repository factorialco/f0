import Download from "@/icons/app/Download"

import { DownloadFormatDefinition } from "../types"
import { buildDelimitedString, triggerDownload } from "../utils"

export const csvFormat: DownloadFormatDefinition = {
  key: "csv",
  formatName: "CSV",
  icon: Download,
  handler: (dataset, filename) => {
    triggerDownload(
      new Blob([buildDelimitedString(dataset, ",")], {
        type: "text/csv;charset=utf-8;",
      }),
      `${filename}.csv`
    )
  },
}
