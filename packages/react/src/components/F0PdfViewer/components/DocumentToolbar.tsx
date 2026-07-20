import { type ReactNode } from "react"

import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"

import { downloadFromUrl } from "../pdfActions"
import { type F0PdfViewerAction } from "../types"
import { ToolbarButton } from "./ToolbarButton"

/**
 * Toolbar for the non-PDF panes (sheet/docx/text), mirroring PdfToolbar's
 * surface: kind-specific controls on the left (the sheet switcher; no titles,
 * same as the PDF toolbar), download + the host's custom actions on the
 * right. Rendered in every pane state — download stays reachable even when
 * the preview itself fails.
 */
export const DocumentToolbar = ({
  url,
  filename,
  actions,
  children,
}: {
  url: string
  filename?: string
  actions?: F0PdfViewerAction[]
  /** Kind-specific left-side content. */
  children?: ReactNode
}): ReactNode => {
  const { pdfViewer } = useI18n()

  return (
    <div
      role="toolbar"
      aria-label={pdfViewer.toolbar}
      className="F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2 px-6 py-4"
    >
      <div className="flex min-w-0 flex-row items-center gap-2 overflow-x-auto">
        {children}
      </div>
      <div className="flex shrink-0 flex-row items-center gap-2">
        <ToolbarButton
          label={pdfViewer.download}
          onClick={() => downloadFromUrl(url, filename)}
          icon={Download}
        />
        {actions?.map((action) => (
          <ToolbarButton
            key={action.label}
            label={action.label}
            onClick={action.onClick}
            icon={action.icon}
          />
        ))}
      </div>
    </div>
  )
}
