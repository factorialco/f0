import { useCallback, useMemo, useState, type ReactNode } from "react"

import { F0Select } from "@/components/F0Select"
import { Download, Minus, Plus } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"

import { downloadFromUrl } from "../pdfActions"
import {
  fixedScales,
  nextScaleDown,
  nextScaleUp,
  type FixedScale,
} from "../scales"
import { type F0PdfViewerAction } from "../types"
import { ToolbarButton } from "./ToolbarButton"

export type DocumentZoom = {
  /** Current zoom factor (1 = 100%), always one of the fixed scales. */
  scale: number
  zoomIn: () => void
  zoomOut: () => void
  setScale: (scale: number) => void
}

/**
 * Zoom state for the non-PDF panes. The panes apply `scale` to their content
 * via CSS `zoom` (which reflows, so scrolling/sticky headers keep working) and
 * hand the controls to {@link DocumentToolbar}. Same fixed steps as the PDF
 * toolbar; no page-width/page-fit — there's no page geometry to fit to.
 */
export const useDocumentZoom = (): DocumentZoom => {
  const [scale, setScale] = useState(1)
  const zoomIn = useCallback(
    () => setScale((current) => nextScaleUp(current) ?? current),
    []
  )
  const zoomOut = useCallback(
    () => setScale((current) => nextScaleDown(current) ?? current),
    []
  )
  return { scale, zoomIn, zoomOut, setScale }
}

/**
 * Toolbar for the non-PDF panes (sheet/docx/text), mirroring PdfToolbar's
 * surface and layout: kind-specific controls on the left (the sheet switcher;
 * no titles, same as the PDF toolbar), zoom in the middle, download + the
 * host's custom actions on the right. Rendered in every pane state — download
 * stays reachable even when the preview itself fails.
 */
export const DocumentToolbar = ({
  url,
  filename,
  withCredentials,
  actions,
  zoom,
  children,
}: {
  url: string
  filename?: string
  withCredentials?: boolean
  actions?: F0PdfViewerAction[]
  /** Wire from {@link useDocumentZoom} to show the zoom controls. */
  zoom?: DocumentZoom
  /** Kind-specific left-side content. */
  children?: ReactNode
}): ReactNode => {
  const { pdfViewer } = useI18n()

  const scaleOptions = useMemo(
    (): { value: FixedScale; label: string }[] =>
      fixedScales.map((value) => ({
        value,
        label: `${Number(value) * 100}%`,
      })),
    []
  )

  return (
    <div
      role="toolbar"
      aria-label={pdfViewer.toolbar}
      className="F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2 px-6 py-4"
    >
      <div className="flex min-w-0 flex-1 basis-0 flex-row items-center gap-2 overflow-x-auto">
        {children}
      </div>
      {zoom && (
        <div className="flex shrink-0 flex-row items-center gap-2">
          <ToolbarButton
            label={pdfViewer.zoomOut}
            onClick={zoom.zoomOut}
            icon={Minus}
          />
          <ToolbarButton
            label={pdfViewer.zoomIn}
            onClick={zoom.zoomIn}
            icon={Plus}
          />
          <F0Select
            hideLabel
            label={pdfViewer.scaleSelector}
            options={scaleOptions}
            value={String(zoom.scale) as FixedScale}
            onChange={(value: FixedScale) => zoom.setScale(Number(value))}
          />
        </div>
      )}
      <div className="flex flex-1 basis-0 flex-row items-center justify-end gap-2">
        <ToolbarButton
          label={pdfViewer.download}
          onClick={() => void downloadFromUrl(url, filename, withCredentials)}
          icon={Download}
        />
        {actions?.map((action, index) => (
          <ToolbarButton
            key={`${action.label}-${index}`}
            label={action.label}
            onClick={action.onClick}
            icon={action.icon}
          />
        ))}
      </div>
    </div>
  )
}
