import { type F0DocumentKind } from "@/components/F0PdfViewer"

import { type F0ChatFileAttachment } from "../types"

/**
 * Document families with an in-chat preview (Slack-style snapshot card + the
 * fullscreen F0PdfViewer, which routes by this same kind). Anything else —
 * PowerPoint, binary `.doc`, archives… — keeps the plain download chip.
 */
export type ChatDocumentKind = F0DocumentKind

// MIME fragments checked in order: the OOXML office types embed "xml", so the
// specific office fragments must match before anything generic (mirrors
// F0AvatarFile's taxonomy). "ms-excel" covers legacy .xls, which SheetJS reads;
// binary .doc ("msword") is deliberately absent — docx-preview can't render it.
const MIME_KINDS: [string, ChatDocumentKind][] = [
  ["application/pdf", "pdf"],
  ["spreadsheetml", "sheet"],
  ["ms-excel", "sheet"],
  ["text/csv", "sheet"],
  ["wordprocessingml", "docx"],
  ["text/markdown", "text"],
  ["text/plain", "text"],
  ["application/json", "text"],
]

const EXTENSION_KINDS: Record<string, ChatDocumentKind> = {
  pdf: "pdf",
  xlsx: "sheet",
  xls: "sheet",
  csv: "sheet",
  docx: "docx",
  txt: "text",
  md: "text",
  markdown: "text",
  log: "text",
  json: "text",
}

/**
 * Which preview family a file belongs to, or null for chip-only files.
 * MIME first, extension as the fallback for transports that don't send one.
 */
export const documentPreviewKind = (
  file: F0ChatFileAttachment
): ChatDocumentKind | null => {
  const mime = file.mimeType?.toLowerCase() ?? ""
  for (const [fragment, kind] of MIME_KINDS) {
    if (mime.includes(fragment)) return kind
  }
  const name = file.name.toLowerCase()
  const dot = name.lastIndexOf(".")
  if (dot <= 0) return null
  return EXTENSION_KINDS[name.slice(dot + 1)] ?? null
}

// Parsing happens client-side (SheetJS / docx-preview / fetch-as-text), so
// oversized files skip the preview entirely and keep the download chip.
const PREVIEW_MAX_BYTES: Record<ChatDocumentKind, number> = {
  pdf: Infinity, // pdf.js streams by page; no cap, same as before
  sheet: 10 * 1024 * 1024,
  docx: 10 * 1024 * 1024,
  text: 2 * 1024 * 1024,
}

/** False when the file is too big to parse in the browser for a preview. */
export const withinPreviewSizeLimit = (
  file: F0ChatFileAttachment,
  kind: ChatDocumentKind
): boolean => (file.size ?? 0) <= PREVIEW_MAX_BYTES[kind]
