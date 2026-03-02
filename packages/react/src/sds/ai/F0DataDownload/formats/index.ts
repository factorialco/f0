import { F0DataDownloadDataset } from "../types"
import { DownloadFormatDefinition } from "../types"
import { csvFormat } from "./csv"
import { excelFormat } from "./excel"
import { jsonFormat } from "./json"
import { pdfFormat } from "./pdf"
import { tsvFormat } from "./tsv"

export type { DownloadFormatDefinition }

/**
 * Ordered list of all available download formats.
 * The first entry is used as the primary (default) button action.
 *
 * To add a new format:
 * 1. Create a file in this folder exporting a `DownloadFormatDefinition`.
 * 2. Import it here and append it to this array.
 */
export const downloadFormats: DownloadFormatDefinition[] = [
  excelFormat,
  csvFormat,
  pdfFormat,
  tsvFormat,
  jsonFormat,
]

/** Handler lookup by format key, built once from the registry. */
export const downloadHandlers: Record<
  string,
  (dataset: F0DataDownloadDataset, filename: string) => void
> = Object.fromEntries(downloadFormats.map((f) => [f.key, f.handler]))
