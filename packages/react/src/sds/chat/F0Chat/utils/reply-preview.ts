import { type F0ChatAttachment, type F0ChatImageAttachment } from "../types"

/** First image in a list — the one previewed as a thumbnail in reply quotes. */
const firstImage = (
  attachments?: F0ChatAttachment[]
): F0ChatImageAttachment | undefined =>
  attachments?.find((a): a is F0ChatImageAttachment => a.kind === "image")

/** Preview thumbnail URL for a quoted message, if it carries any image. */
export const replyThumbnailUrl = (
  attachments?: F0ChatAttachment[]
): string | undefined => {
  const image = firstImage(attachments)
  return image ? (image.thumbnailUrl ?? image.url) : undefined
}

/**
 * One-line description of a message's attachments, for the reply quote + the
 * composer chip. `null` when there are none. `name` is only set for a lone file
 * (so the caller can show the real filename); otherwise counts drive a
 * pluralised, localized label the caller resolves.
 */
export type AttachmentSummary =
  | { kind: "photo"; count: number }
  | { kind: "file"; count: number; name?: string }
  | { kind: "mixed"; count: number }

export const summariseAttachments = (
  attachments?: F0ChatAttachment[]
): AttachmentSummary | null => {
  const images = attachments?.filter((a) => a.kind === "image") ?? []
  const files = attachments?.filter((a) => a.kind === "file") ?? []
  if (images.length > 0 && files.length > 0)
    return { kind: "mixed", count: images.length + files.length }
  if (images.length > 0) return { kind: "photo", count: images.length }
  if (files.length > 0)
    return {
      kind: "file",
      count: files.length,
      name: files.length === 1 ? files[0].name : undefined,
    }
  return null
}
