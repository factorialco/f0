import Download from "@/icons/app/Download"

import { DownloadFormatDefinition } from "../types"
import { buildDelimitedString, triggerDownload } from "../utils"

export const tsvFormat: DownloadFormatDefinition = {
  key: "tsv",
  formatName: "TSV",
  icon: Download,
  handler: (dataset, filename) => {
    triggerDownload(
      new Blob([buildDelimitedString(dataset, "\t")], {
        type: "text/tab-separated-values;charset=utf-8;",
      }),
      `${filename}.tsv`
    )
  },
}
