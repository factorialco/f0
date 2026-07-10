import { type ReactNode } from "react"

import { F0FileItem } from "@/components/F0FileItem"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useChatImagePreview } from "../providers/ChatUIProvider"
import {
  type F0ChatFileAttachment,
  type F0ChatImageAttachment,
  type F0ChatMessage,
} from "../types"
import { triggerDownload } from "../utils/download"

/**
 * Attachments shown above a message bubble — images render inline (clickable to
 * open the in-chat lightbox); other files use {@link F0FileItem} with a download
 * action, mirroring the AI chat's file rendering.
 */
export const ChatMessageAttachments = ({
  message,
  isMine,
}: {
  message: F0ChatMessage
  isMine: boolean
}): ReactNode => {
  const i18n = useI18n()
  const { openImagePreview } = useChatImagePreview()
  const attachments = message.attachments
  if (!attachments || attachments.length === 0) return null

  const images = attachments.filter(
    (a): a is F0ChatImageAttachment => a.kind === "image"
  )
  const files = attachments.filter(
    (a): a is F0ChatFileAttachment => a.kind === "file"
  )
  // A lone image gets full size; several flow side by side (wrap) as thumbnails
  // so the message doesn't grow tall.
  const singleImage = images.length === 1

  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        isMine ? "items-end" : "items-start"
      )}
    >
      {images.length > 0 && (
        <div className={cn("flex flex-wrap gap-1", isMine && "justify-end")}>
          {images.map((image, i) => (
            <button
              key={`${image.url}-${i}`}
              type="button"
              onClick={() => openImagePreview(images, i)}
              className="flex overflow-hidden rounded-xl transition-opacity hover:opacity-90"
              aria-label={i18n.chat.openImage}
            >
              <img
                src={image.thumbnailUrl ?? image.url}
                alt={image.name}
                className={cn(
                  "rounded-xl border border-solid border-f1-border-secondary object-cover",
                  singleImage ? "max-h-60 max-w-full" : "h-28 w-28"
                )}
              />
            </button>
          ))}
        </div>
      )}
      {files.length > 0 && (
        // Files flow side by side and wrap, instead of stacking vertically.
        <div className={cn("flex flex-wrap gap-1", isMine && "justify-end")}>
          {files.map((file, i) => (
            <F0FileItem
              key={`${file.url}-${i}`}
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
          ))}
        </div>
      )}
    </div>
  )
}
