"use client"

import { type ReactNode, useCallback, useEffect, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { type IconType } from "@/components/F0Icon"
import { ChevronLeft, ChevronRight, Cross, Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Dialog, DialogContent, DialogTitle } from "@/ui/Dialog"

import { useChatUI } from "../providers/ChatUIProvider"
import { triggerDownload } from "../utils/download"

/** A control pill — a neutral icon button on an opaque chip so it reads over the
 * dimmed overlay. `pointer-events-auto` so it's clickable inside its (otherwise
 * click-through) band. */
const PreviewControl = ({
  icon,
  label,
  onClick,
}: {
  icon: IconType
  label: string
  onClick: () => void
}): ReactNode => (
  <span className="pointer-events-auto flex rounded bg-f1-background shadow-sm">
    <ButtonInternal
      variant="neutral"
      hideLabel
      icon={icon}
      label={label}
      onClick={onClick}
    />
  </span>
)

/**
 * In-chat image lightbox. Clicking a message image opens it here (instead of a
 * new tab): a real modal portaled to `document.body` so it sits above everything
 * — the chat panel, the canvas and the sidebar — rather than behind the panel.
 *
 * The controls live in a top band (download + close) and a bottom band (paging +
 * counter), never over the image; clicking anywhere else on the overlay closes
 * it. Layering is done with `pointer-events`: a full-bleed backdrop catches the
 * close clicks, while the image and the control pills opt back in so they don't
 * fall through. Arrow keys page between a message's images.
 */
export const ChatImagePreview = (): ReactNode => {
  const i18n = useI18n()
  const { imagePreview, closeImagePreview, setImagePreviewIndex } = useChatUI()

  // Portal above the whole app: the chat panel owns the top stacking context, so
  // the dialog's default `#content` target renders the lightbox behind it. `body`
  // is resolved on the client to stay SSR-safe.
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)
  useEffect(() => setPortalTarget(document.body), [])

  const open = imagePreview !== null
  const images = imagePreview?.images ?? []
  const count = images.length
  const index = imagePreview?.index ?? 0
  const current = images[index]
  const multiple = count > 1

  const go = useCallback(
    (delta: number) => {
      if (count === 0) return
      setImagePreviewIndex((index + delta + count) % count)
    },
    [count, index, setImagePreviewIndex]
  )

  // Arrow keys page between a message's images while the lightbox is open.
  useEffect(() => {
    if (!open || !multiple) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, multiple, go])

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) closeImagePreview()
      }}
    >
      {current && (
        <DialogContent
          container={portalTarget}
          className="h-full w-full max-w-none rounded-none bg-transparent p-0 shadow-none"
          withTranslateAnimation={false}
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">
            {current.name || i18n.chat.imagePreview}
          </DialogTitle>

          {/* Click-anywhere-to-close backdrop (the dim itself is the dialog
              overlay, behind this). */}
          <button
            type="button"
            tabIndex={-1}
            aria-label={i18n.chat.closePreview}
            className="absolute inset-0 cursor-default"
            onClick={closeImagePreview}
          />

          {/* Centered image, clear of the bands. Clicking it does nothing (it
              opts back into pointer events over the click-through wrapper). */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-16">
            <img
              src={current.url}
              alt={current.name}
              className="pointer-events-auto max-h-full max-w-full rounded-lg object-contain"
            />
          </div>

          {/* Top band: download + close. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end gap-1.5 p-3">
            <PreviewControl
              icon={Download}
              label={i18n.chat.download}
              onClick={() => triggerDownload(current.url, current.name)}
            />
            <PreviewControl
              icon={Cross}
              label={i18n.chat.closePreview}
              onClick={closeImagePreview}
            />
          </div>

          {/* Bottom band: paging + counter (only with several images). */}
          {multiple && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-3">
              <PreviewControl
                icon={ChevronLeft}
                label={i18n.chat.previousImage}
                onClick={() => go(-1)}
              />
              <span className="pointer-events-auto rounded bg-f1-background px-2.5 py-2 text-sm font-medium text-f1-foreground shadow-sm">
                {index + 1} / {count}
              </span>
              <PreviewControl
                icon={ChevronRight}
                label={i18n.chat.nextImage}
                onClick={() => go(1)}
              />
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  )
}
