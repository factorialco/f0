import { type IconType } from "@/components/F0Icon"
import { File, Image, Marker, Microphone, Paperclip } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { type F0ChatAttachment } from "../types"
import { replyThumbnailUrl, summariseAttachments } from "../utils/reply-preview"

export type ReplyPreview = {
  /** Leading glyph for a media-only preview (omitted when a caption is shown). */
  icon?: IconType
  /** One line: the caption if present, otherwise a localized media descriptor. */
  label: string
  /** Image thumbnail to show alongside the text, if the quote has one. */
  thumbnailUrl?: string
}

/**
 * Resolves the one-line preview (icon + label + thumbnail) for a quoted message
 * or a composer reply, covering every shape: plain text, a caption with media, a
 * single/many photos, a named file, several files, and mixed attachments.
 *
 * The attachment icon is set whenever there ARE attachments — even alongside a
 * caption — so a file sent with a sentence still reads as a file. The caption
 * wins as the label (falling back to a media descriptor), and the image
 * thumbnail rides along regardless.
 */
export const useReplyPreview = (input: {
  body?: string
  attachments?: F0ChatAttachment[]
}): ReplyPreview => {
  const i18n = useI18n()
  const body = input.body?.trim() ?? ""
  const thumbnailUrl = replyThumbnailUrl(input.attachments)
  const summary = summariseAttachments(input.attachments)

  if (!summary) return { label: body, thumbnailUrl }

  const media =
    summary.kind === "photo"
      ? {
          icon: Image,
          label:
            summary.count === 1
              ? i18n.chat.photo
              : i18n.t("chat.photoCount.other", { count: summary.count }),
        }
      : summary.kind === "file"
        ? {
            icon: File,
            label:
              summary.name ??
              i18n.t("chat.fileCount.other", { count: summary.count }),
          }
        : summary.kind === "location"
          ? { icon: Marker, label: i18n.chat.location }
          : summary.kind === "voice"
            ? { icon: Microphone, label: i18n.chat.voiceNote }
            : {
                icon: Paperclip,
                label: i18n.t("chat.attachmentCount.other", {
                  count: summary.count,
                }),
              }

  return { icon: media.icon, label: body || media.label, thumbnailUrl }
}
