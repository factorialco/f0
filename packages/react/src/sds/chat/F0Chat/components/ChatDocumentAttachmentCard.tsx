"use client"

import { lazy, type ReactNode, Suspense, useState } from "react"

import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0FileItem } from "@/components/F0FileItem"
import { type IconType } from "@/components/F0Icon"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { useChatRenderConfig } from "../providers/ChatRenderConfigProvider"
import { useChatDocumentPreview } from "../providers/ChatUIProvider"
import { type F0ChatFileAttachment } from "../types"
import { type ChatDocumentKind } from "../utils/attachments"
import { triggerDownload } from "../utils/download"
import { ClampText } from "./ClampText"

// Every snapshot renderer is heavy in its own way (pdf.js, SheetJS,
// docx-preview) — each stays in its own chunk. The card itself mounts with its
// row: Suspense covers the chunk, and the skeleton under the snapshot covers
// the renderers, which mount fast but PAINT asynchronously.
const loadPdfThumbnail = () => import("./ChatPdfThumbnail")
const loadSheetThumbnail = () => import("./ChatSheetThumbnail")
const loadDocxThumbnail = () => import("./ChatDocxThumbnail")
const loadTextThumbnail = () => import("./ChatTextThumbnail")
const ChatPdfThumbnail = lazy(loadPdfThumbnail)
const ChatSheetThumbnail = lazy(loadSheetThumbnail)
const ChatDocxThumbnail = lazy(loadDocxThumbnail)
const ChatTextThumbnail = lazy(loadTextThumbnail)

/** Matches the transcript's shared media width at its cap (see media-layout). */
const CARD_WIDTH = 384
const THUMB_HEIGHT = 160

/**
 * Document card with a type badge and name over a cropped snapshot of the
 * content — the first PDF page, the first sheet's cells, the first Word page,
 * or the first lines of text. Clicking the snapshot opens the fullscreen
 * viewer ({@link ChatDocumentPreview}), which owns its download action. A
 * document that can't load falls back to the plain downloadable file chip.
 */
export const ChatDocumentAttachmentCard = ({
  file,
  kind,
  cornerClass = "rounded-xl",
  action,
  previewDisabled = false,
  compact = false,
  surfaceClassName,
}: {
  file: F0ChatFileAttachment
  kind: ChatDocumentKind
  /** Chained-corner classes mirroring the bubble (see `bubbleCornerClass`). */
  cornerClass?: string
  /** Optional card action, e.g. Remove inside the composer. */
  action?: {
    label: string
    icon: IconType
    onClick: () => void
  }
  /** Prevent opening a transient local URL before its upload completes. */
  previewDisabled?: boolean
  /** Render as a square thumbnail in compact surfaces such as the composer. */
  compact?: boolean
  /** Sender-aware surface supplied by a transcript message. */
  surfaceClassName?: string
}): ReactNode => {
  const i18n = useI18n()
  const { reducedMotion } = useChatRenderConfig()
  const { openDocumentPreview } = useChatDocumentPreview()
  const [failed, setFailed] = useState(false)
  const [rendered, setRendered] = useState(false)
  const fallbackAction = action ?? {
    label: i18n.t("chat.downloadNamedFile", { name: file.name }),
    icon: Download,
    onClick: () => triggerDownload(file.url, file.name),
  }
  const cardWidth = compact ? 64 : CARD_WIDTH
  const thumbHeight = compact ? "100%" : THUMB_HEIGHT

  if (failed) {
    if (compact) {
      return (
        <div
          className={cn(
            "group/attachment relative box-border flex h-16 w-16 items-center justify-center overflow-hidden border border-solid border-f1-border-secondary bg-f1-background-secondary",
            cornerClass,
            surfaceClassName
          )}
          data-testid="chat-document-attachment"
        >
          <F0AvatarFile
            file={{ name: file.name, type: file.mimeType ?? "" }}
            size="md"
          />
          <div className="absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100">
            <ButtonInternal
              variant="outline"
              size="sm"
              hideLabel
              icon={fallbackAction.icon}
              label={fallbackAction.label}
              onClick={fallbackAction.onClick}
            />
          </div>
          <span className="sr-only">{file.name}</span>
        </div>
      )
    }

    return (
      <F0FileItem
        size="md"
        file={{ name: file.name, type: file.mimeType ?? "" }}
        actions={[fallbackAction]}
      />
    )
  }

  return (
    <div
      className={cn(
        "group/attachment relative flex max-w-full flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-background",
        compact && "box-border h-16 w-16",
        cornerClass,
        surfaceClassName
      )}
      style={{ width: cardWidth }}
      data-testid="chat-document-attachment"
    >
      {!compact && (
        <div className="flex items-center gap-2 px-2 py-2">
          <F0AvatarFile
            file={{ name: file.name, type: file.mimeType ?? "" }}
            size="md"
          />
          <ClampText className="grow text-sm font-medium text-f1-foreground">
            {file.name}
          </ClampText>
          {action && (
            <ButtonInternal
              variant="ghost"
              size="sm"
              hideLabel
              icon={action.icon}
              label={action.label}
              onClick={action.onClick}
            />
          )}
        </div>
      )}
      <button
        type="button"
        onClick={() => openDocumentPreview(file)}
        disabled={previewDisabled}
        aria-busy={!rendered ? true : undefined}
        aria-label={i18n.t("chat.openNamedDocument", { name: file.name })}
        className={cn(
          "relative block w-full overflow-hidden border-0 border-solid border-f1-border-secondary bg-f1-background-secondary p-0 transition-opacity enabled:hover:opacity-90",
          !compact && "border-t",
          focusRing("focus-visible:ring-inset"),
          surfaceClassName
        )}
        style={{ height: thumbHeight }}
      >
        {/* Skeleton lives UNDER the snapshot; the rendered content fades in
            over it (no hard swap) once the renderer paints. */}
        <Skeleton
          className={cn(
            "absolute inset-0 h-full w-full rounded-none motion-reduce:animate-none",
            surfaceClassName
          )}
        />
        <div
          className={cn(
            "relative",
            !reducedMotion && "transition-opacity duration-200",
            rendered ? "opacity-100" : "opacity-0"
          )}
          data-testid="chat-document-snapshot"
        >
          <Suspense fallback={null}>
            {kind === "pdf" && (
              <ChatPdfThumbnail
                url={file.url}
                width={cardWidth - 2}
                onError={() => setFailed(true)}
                onRendered={() => setRendered(true)}
              />
            )}
            {kind === "sheet" && (
              <ChatSheetThumbnail
                url={file.url}
                onError={() => setFailed(true)}
                onRendered={() => setRendered(true)}
              />
            )}
            {kind === "docx" && (
              <ChatDocxThumbnail
                url={file.url}
                width={cardWidth - 2}
                onError={() => setFailed(true)}
                onRendered={() => setRendered(true)}
              />
            )}
            {kind === "text" && (
              <ChatTextThumbnail
                url={file.url}
                onError={() => setFailed(true)}
                onRendered={() => setRendered(true)}
              />
            )}
          </Suspense>
        </div>
      </button>
      {compact && action && (
        <>
          <div className="absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100">
            <ButtonInternal
              variant="outline"
              size="sm"
              hideLabel
              icon={action.icon}
              label={action.label}
              onClick={action.onClick}
            />
          </div>
          <span className="sr-only">{file.name}</span>
        </>
      )}
    </div>
  )
}
