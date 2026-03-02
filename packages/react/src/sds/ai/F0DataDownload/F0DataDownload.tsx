import { Markdown } from "@copilotkit/react-ui"
import { useCallback, useMemo } from "react"

import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { ButtonDropdownItem } from "@/components/F0ButtonDropdown/types"
import { useI18n } from "@/lib/providers/i18n"

import { f0MarkdownRenderersSimple } from "../F0MarkdownRenderers"
import { downloadFormats, downloadHandlers } from "./formats"
import { F0DataDownloadProps } from "./types"

/**
 * Component that renders an optional markdown preview followed by
 * a dropdown button with "Download Excel" as the primary action and
 * additional formats (CSV, TSV, JSON, PDF) as secondary options.
 * Files are generated client-side from the raw dataset provided by the agent.
 *
 * Format definitions live in `./formats/` — adding a new format only requires
 * creating a file there and registering it in `./formats/index.ts`.
 */
export const F0DataDownload = ({
  markdown,
  filename = "dataset",
  dataset,
}: F0DataDownloadProps) => {
  const i18n = useI18n()

  const downloadItems = useMemo<ButtonDropdownItem<string>[]>(
    () =>
      downloadFormats.map((f) => ({
        value: f.key,
        label: i18n.t("ai.downloadFormat", { format: f.formatName }),
        icon: f.icon,
      })),
    [i18n]
  )

  const handleDownload = useCallback(
    (format: string, _item: unknown) => {
      const handler = downloadHandlers[format]
      if (handler) {
        handler(dataset, filename)
      } else {
        console.warn(`[F0DataDownload] Unknown download format: "${format}"`)
      }
    },
    [dataset, filename]
  )

  const { totalCount, previewCount } = dataset
  const showPreviewNote =
    totalCount != null && previewCount != null && totalCount > previewCount

  return (
    <div className="flex flex-col gap-1 pb-3">
      {markdown && (
        <div className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
          <Markdown content={markdown} components={f0MarkdownRenderersSimple} />
        </div>
      )}
      {showPreviewNote && (
        <p className="text-sm italic text-f1-foreground-secondary">
          {i18n.t("ai.dataDownloadPreview", {
            shown: previewCount,
            total: totalCount,
          })}
        </p>
      )}
      <div className="mt-3 flex justify-start">
        <F0ButtonDropdown
          variant="outline"
          size="sm"
          items={downloadItems}
          value="excel"
          onClick={handleDownload}
        />
      </div>
    </div>
  )
}
