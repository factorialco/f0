export type UploadedFile = {
  url: string
  filename: string
  mimetype: string
}

export type RawDataWithUploads = {
  uploadedFiles?: UploadedFile[]
}

export type MessageTextPart = { type: "text"; text?: string }
export type MessageBinaryPart = {
  type: "binary"
  url?: string
  filename?: string
  mimeType?: string
}
export type MessagePart = MessageTextPart | MessageBinaryPart

const isUploadedFile = (file: {
  url?: unknown
  filename?: unknown
  mimetype?: unknown
}): file is UploadedFile =>
  typeof file?.filename === "string" &&
  typeof file?.mimetype === "string" &&
  typeof file?.url === "string"

/**
 * Extract uploaded files attached to a message.
 *
 * Files can travel in two places:
 * - As `binary` parts in the multipart `content` array (the path the
 *   composer uses for outgoing user messages and the agent uses when
 *   returning files in an assistant turn).
 * - As `rawData.uploadedFiles` (legacy path retained for backwards
 *   compatibility with messages stored before multipart content existed).
 *
 * The multipart path wins when both are present.
 */
export function extractUploadedFiles(
  content: string | MessagePart[] | undefined,
  rawData: RawDataWithUploads | undefined
): UploadedFile[] {
  const fromParts = Array.isArray(content)
    ? content
        .filter((part): part is MessageBinaryPart => part.type === "binary")
        .map((part) => ({
          url: part.url,
          filename: part.filename,
          mimetype: part.mimeType,
        }))
        .filter(isUploadedFile)
    : []

  if (fromParts.length > 0) return fromParts

  return (rawData?.uploadedFiles ?? []).filter(isUploadedFile)
}

/**
 * Trigger a browser download for a remote file. Falls back to opening the
 * URL in a new tab when the browser refuses the synthetic anchor click
 * (e.g. cross-origin URLs without `Content-Disposition: attachment`).
 */
export function downloadUploadedFile(file: UploadedFile) {
  const link = document.createElement("a")
  link.href = file.url
  link.download = file.filename
  link.rel = "noopener"
  link.target = "_blank"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
