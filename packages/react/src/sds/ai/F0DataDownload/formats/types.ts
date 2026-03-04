import { IconType } from "@/components/F0Icon"

import { F0DataDownloadDataset } from "../types"

/**
 * Definition for a download format.
 *
 * To add a new format, create a file in this folder that exports a
 * `DownloadFormatDefinition` and register it in `./index.ts`.
 */
export type DownloadFormatDefinition = {
  /** Unique key used as the button value (e.g. "excel", "csv"). */
  key: string
  /** Short format name used for i18n interpolation (e.g. "Excel", "CSV"). */
  formatName: string
  /** Icon component rendered next to the label. */
  icon: IconType
  /** Generate the file and trigger a browser download. */
  handler: (dataset: F0DataDownloadDataset, filename: string) => void
}
