"use client"

import {
  lazy,
  type ReactNode,
  type RefObject,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react"

import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0FileItem } from "@/components/F0FileItem"
import { Download } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { useChatDocumentPreview } from "../providers/ChatUIProvider"
import { type F0ChatFileAttachment } from "../types"
import { type ChatDocumentKind } from "../utils/attachments"
import { triggerDownload } from "../utils/download"

// Every snapshot renderer is heavy in its own way (pdf.js, SheetJS,
// docx-preview) — each lives in its own chunk, fetched the first time a card
// of that kind scrolls into view.
const ChatPdfThumbnail = lazy(() => import("./ChatPdfThumbnail"))
const ChatSheetThumbnail = lazy(() => import("./ChatSheetThumbnail"))
const ChatDocxThumbnail = lazy(() => import("./ChatDocxThumbnail"))
const ChatTextThumbnail = lazy(() => import("./ChatTextThumbnail"))

const CARD_WIDTH = 288
const THUMB_HEIGHT = 160

/** Render-on-view gate: a long transcript can hold many documents, so the
 * parser chunk + snapshot render only happen once a card nears the viewport. */
const useInViewport = (ref: RefObject<HTMLElement | null>): boolean => {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element || inView) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setInView(true)
      },
      { rootMargin: "200px" }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, inView])
  return inView
}

/**
 * Slack-style document card: a header (type badge + name + download) over a
 * cropped snapshot of the content — the first PDF page, the first sheet's
 * cells, the first Word page, or the first lines of text. Clicking the
 * snapshot opens the fullscreen viewer ({@link ChatDocumentPreview}); a
 * document that can't load falls back to the plain file chip so download
 * always stays available.
 */
export const ChatDocumentAttachmentCard = ({
  file,
  kind,
  cornerClass = "rounded-xl",
}: {
  file: F0ChatFileAttachment
  kind: ChatDocumentKind
  /** Chained-corner classes mirroring the bubble (see `bubbleCornerClass`). */
  cornerClass?: string
}): ReactNode => {
  const i18n = useI18n()
  const reducedMotion = useReducedMotion()
  const { openDocumentPreview } = useChatDocumentPreview()
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInViewport(containerRef)
  const [failed, setFailed] = useState(false)
  const [rendered, setRendered] = useState(false)

  if (failed) {
    return (
      <F0FileItem
        size="md"
        file={{ name: file.name, type: file.mimeType ?? "" }}
        actions={[
          {
            label: i18n.chat.download,
            icon: Download,
            onClick: () => triggerDownload(file.url, file.name),
          },
        ]}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex max-w-full flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-background",
        cornerClass
      )}
      style={{ width: CARD_WIDTH }}
      data-testid="chat-document-attachment"
    >
      <div className="flex items-center gap-2 py-2 px-2">
        <F0AvatarFile
          file={{ name: file.name, type: file.mimeType ?? "" }}
          size="md"
        />
        <OneEllipsis className="grow text-sm font-medium text-f1-foreground">
          {file.name}
        </OneEllipsis>
        <ButtonInternal
          variant="ghost"
          size="sm"
          hideLabel
          icon={Download}
          label={i18n.chat.download}
          onClick={() => triggerDownload(file.url, file.name)}
        />
      </div>
      <button
        type="button"
        onClick={() => openDocumentPreview(file)}
        aria-label={i18n.chat.openDocument}
        className="relative block w-full overflow-hidden border-0 border-t border-solid border-f1-border-secondary bg-f1-background-secondary p-0 transition-opacity hover:opacity-90"
        style={{ height: THUMB_HEIGHT }}
      >
        {/* Skeleton lives UNDER the snapshot; the rendered content fades in
            over it (no hard swap) once the renderer paints. */}
        <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        {inView && (
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
                  width={CARD_WIDTH - 2}
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
                  width={CARD_WIDTH - 2}
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
        )}
      </button>
    </div>
  )
}
