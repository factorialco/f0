"use client"

import { lazy, Suspense, useCallback, useEffect, useState } from "react"
import { ButtonInternal } from "@/components/F0Button/internal"
import { type IconType } from "@/components/F0Icon"
import { type F0DocumentKind } from "@/components/F0PdfViewer"
import { ChevronLeft, ChevronRight, Cross, Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Dialog, DialogContent, DialogTitle } from "@/ui/Dialog"
import { Skeleton } from "@/ui/skeleton"
import { triggerDownload } from "../../utils/download"

const DocumentViewer = lazy(() =>
  import("@/components/F0PdfViewer").then((module) => ({
    default: module.F0PdfViewer,
  }))
)

export interface F0ChatMediaFile {
  url: string
  name: string
  mimeType?: string
}

export type F0ChatMediaPreviewProps = {
  onClose: () => void
  onDownload?: (file: F0ChatMediaFile) => void
  dataTestId?: string
} & (
  | {
      images: F0ChatMediaFile[]
      index: number
      onIndexChange: (index: number) => void
      document?: never
    }
  | {
      document: F0ChatMediaFile & { kind: F0DocumentKind }
      images?: never
      index?: never
      onIndexChange?: never
    }
)

const PreviewControl = ({
  icon,
  label,
  onClick,
}: {
  icon: IconType
  label: string
  onClick: () => void
}) => (
  <span className="shadow-sm pointer-events-auto z-50 flex rounded bg-f1-background">
    <ButtonInternal
      variant="outline"
      hideLabel
      icon={icon}
      label={label}
      onClick={onClick}
    />
  </span>
)

export const F0ChatMediaPreview = ({
  images,
  document: file,
  index = 0,
  onIndexChange,
  onClose,
  onDownload,
  dataTestId,
}: F0ChatMediaPreviewProps) => {
  const i18n = useI18n()
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)
  useEffect(() => setPortalTarget(document.body), [])

  const current = images?.[index] ?? file
  const imageCount = images?.length ?? 0
  const go = useCallback(
    (delta: number) => {
      if (imageCount > 1) {
        onIndexChange?.((index + delta + imageCount) % imageCount)
      }
    },
    [imageCount, index, onIndexChange]
  )

  useEffect(() => {
    if (imageCount < 2) {
      return
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        go(1)
      }
      if (event.key === "ArrowLeft") {
        go(-1)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [go, imageCount])

  const download = () => {
    if (!current) {
      return
    }
    if (onDownload) {
      onDownload(current)
    } else {
      triggerDownload(current.url, current.name)
    }
  }

  return (
    <Dialog
      open={current !== undefined}
      onOpenChange={(next) => {
        if (!next) {
          onClose()
        }
      }}
    >
      {current ? (
        <DialogContent
          container={portalTarget}
          className="h-full w-full max-w-none rounded-none bg-transparent p-0 shadow-none"
          withTranslateAnimation={false}
          aria-describedby={undefined}
          data-testid={dataTestId}
        >
          <DialogTitle className="sr-only">
            {current.name ||
              (file ? i18n.chat.documentPreview : i18n.chat.imagePreview)}
          </DialogTitle>
          <button
            type="button"
            tabIndex={-1}
            aria-label={i18n.chat.closePreview}
            className="absolute inset-0 cursor-default"
            onClick={onClose}
          />
          {file ? (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 pb-4 pt-4">
              <div className="pointer-events-auto h-full w-full max-w-4xl overflow-hidden rounded-lg">
                <Suspense fallback={<Skeleton className="h-full w-full" />}>
                  <DocumentViewer
                    url={file.url}
                    kind={file.kind}
                    filename={file.name}
                    mimeType={file.mimeType}
                    initialScale="page-width"
                    withCredentials={false}
                    actions={[
                      {
                        icon: Cross,
                        label: i18n.chat.closePreview,
                        onClick: onClose,
                      },
                    ]}
                  />
                </Suspense>
              </div>
            </div>
          ) : (
            <>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-16">
                <div className="pointer-events-auto flex max-h-full max-w-full">
                  <img
                    key={current.url}
                    src={current.url}
                    alt={current.name}
                    className="max-h-full max-w-full rounded-lg object-contain"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end gap-1.5 p-3">
                <PreviewControl
                  icon={Download}
                  label={i18n.chat.download}
                  onClick={download}
                />
                <PreviewControl
                  icon={Cross}
                  label={i18n.chat.closePreview}
                  onClick={onClose}
                />
              </div>
              {imageCount > 1 ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-3">
                  <PreviewControl
                    icon={ChevronLeft}
                    label={i18n.chat.previousImage}
                    onClick={() => go(-1)}
                  />
                  <span className="shadow-sm pointer-events-auto rounded bg-f1-background px-2.5 py-2 text-sm font-medium text-f1-foreground">
                    {index + 1} / {imageCount}
                  </span>
                  <PreviewControl
                    icon={ChevronRight}
                    label={i18n.chat.nextImage}
                    onClick={() => go(1)}
                  />
                </div>
              ) : null}
            </>
          )}
        </DialogContent>
      ) : null}
    </Dialog>
  )
}
