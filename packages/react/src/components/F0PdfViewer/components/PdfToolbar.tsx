import type { Ref } from "react"

import {
  ChevronDown,
  ChevronUp,
  Download,
  Minus,
  Plus,
  Printer,
  Reset,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { F0Select } from "@/components/F0Select"

import type { F0PdfScale, F0PdfViewerAction } from "../types"
import { ToolbarButton } from "./ToolbarButton"

interface ScaleOption {
  value: F0PdfScale
  label: string
}

interface PdfToolbarProps {
  toolbarRef: Ref<HTMLDivElement>
  currentPage: number
  totalPages: number | undefined
  hasDocument: boolean
  selectedScale: F0PdfScale
  scaleOptions: ScaleOption[]
  onPreviousPage: () => void
  onNextPage: () => void
  onZoomIn: () => void
  onZoomOut: () => void
  onScaleChange: (value: F0PdfScale) => void
  rotatable: boolean
  onRotate: () => void
  onPrint: () => void
  onDownload: () => void
  /** Host-provided actions appended after the built-in controls. */
  actions?: F0PdfViewerAction[]
}

const groupClassName = "flex flex-row items-center gap-2"

export const PdfToolbar = ({
  toolbarRef,
  currentPage,
  totalPages,
  hasDocument,
  selectedScale,
  scaleOptions,
  onPreviousPage,
  onNextPage,
  onZoomIn,
  onZoomOut,
  onScaleChange,
  rotatable,
  onRotate,
  onPrint,
  onDownload,
  actions,
}: PdfToolbarProps) => {
  const { pdfViewer } = useI18n()

  return (
    <div
      ref={toolbarRef}
      role="toolbar"
      aria-label={pdfViewer.toolbar}
      className={cn(
        "F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2",
        "px-6 py-4"
      )}
    >
      <div className={groupClassName}>
        {hasDocument && (
          <span
            aria-live="polite"
            className="whitespace-nowrap text-sm font-medium text-f1-foreground-secondary"
          >
            {currentPage} / {totalPages}
          </span>
        )}
        <ToolbarButton
          label={pdfViewer.previousPage}
          onClick={onPreviousPage}
          icon={ChevronUp}
          size="sm"
        />
        <ToolbarButton
          label={pdfViewer.nextPage}
          onClick={onNextPage}
          icon={ChevronDown}
          size="sm"
        />
      </div>

      <div className={groupClassName}>
        <ToolbarButton
          label={pdfViewer.zoomOut}
          onClick={onZoomOut}
          icon={Minus}
        />
        <ToolbarButton
          label={pdfViewer.zoomIn}
          onClick={onZoomIn}
          icon={Plus}
        />
        <F0Select
          hideLabel
          label={pdfViewer.scaleSelector}
          options={scaleOptions}
          value={selectedScale}
          onChange={(value: F0PdfScale) => onScaleChange(value)}
        />
      </div>

      <div className={groupClassName}>
        {rotatable && (
          <ToolbarButton
            label={pdfViewer.rotate}
            onClick={onRotate}
            icon={Reset}
          />
        )}
        <ToolbarButton
          label={pdfViewer.print}
          onClick={onPrint}
          icon={Printer}
        />
        <ToolbarButton
          label={pdfViewer.download}
          onClick={onDownload}
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
