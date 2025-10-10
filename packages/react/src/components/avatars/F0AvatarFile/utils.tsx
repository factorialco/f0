import { BadgeProps } from "@/experimental/Information/Badge"
import { F0AvatarModuleProps } from "../F0AvatarModule"
import { AvatarFileSize, FileDef } from "./types"

type FileTypeInfo = {
  type: string
  color: string
}

const FILE_TYPE_MAP: Record<string, FileTypeInfo> = {
  pdf: {
    type: "PDF",
    color: "text-f1-foreground-accent",
  },
  image: {
    type: "IMG",
    color: "text-f1-foreground-info",
  },
  doc: {
    type: "DOC",
    color: "text-f1-foreground-info",
  },
  excel: {
    type: "XLS",
    color: "text-f1-foreground-positive",
  },
  ppt: {
    type: "PPT",
    color: "text-f1-foreground-warning",
  },
  txt: {
    type: "TXT",
    color: "text-f1-foreground-secondary",
  },
  video: {
    type: "VID",
    color: "text-f1-foreground-info",
  },
  audio: {
    type: "AUD",
    color: "text-f1-foreground-accent",
  },
  archive: {
    type: "ZIP",
    color: "text-f1-foreground-warning",
  },
  csv: {
    type: "CSV",
    color: "text-f1-foreground-positive",
  },
  html: {
    type: "HTML",
    color: "text-f1-foreground-accent",
  },
  markdown: {
    type: "MD",
    color: "text-f1-foreground-secondary",
  },
  default: {
    type: "FILE",
    color: "text-f1-foreground",
  },
}

const MIME_MATCH_MAP: Record<string, keyof typeof FILE_TYPE_MAP> = {
  pdf: "pdf",
  image: "image",
  word: "doc",
  excel: "excel",
  powerpoint: "ppt",
  text: "txt",
  video: "video",
  audio: "audio",
  archive: "archive",
  csv: "csv",
  html: "html",
  markdown: "markdown",
  zip: "archive",
  rar: "archive",
  tar: "archive",
  gz: "archive",
  "7z": "archive",
}

const EXTENSION_MAP: Record<string, keyof typeof FILE_TYPE_MAP> = {
  // PDF
  pdf: "pdf",
  // Images
  jpg: "image",
  jpeg: "image",
  png: "image",
  gif: "image",
  svg: "image",
  // Word documents
  doc: "doc",
  docx: "doc",
  // Excel spreadsheets
  xls: "excel",
  xlsx: "excel",
  csv: "csv",
  // PowerPoint
  ppt: "ppt",
  pptx: "ppt",
  // Plain text
  txt: "txt",
  // Video
  mp4: "video",
  mov: "video",
  mkv: "video",
  avi: "video",
  webm: "video",
  // Audio
  mp3: "audio",
  wav: "audio",
  flac: "audio",
  ogg: "audio",
  // Archives
  zip: "archive",
  rar: "archive",
  tar: "archive",
  gz: "archive",
  "7z": "archive",
  // HTML
  html: "html",
  htm: "html",
  // Markdown
  md: "markdown",
  markdown: "markdown",
}

const getFileTypeInfo = (file: FileDef): FileTypeInfo => {
  const mimeType = (file.type || "").toLowerCase()

  const matchedMimeKey = Object.keys(MIME_MATCH_MAP).find((key) =>
    mimeType.includes(key)
  )

  if (matchedMimeKey) {
    return FILE_TYPE_MAP[MIME_MATCH_MAP[matchedMimeKey]]
  }

  const extension = (file.name || "").toLowerCase().split(".").pop()

  if (extension && EXTENSION_MAP[extension]) {
    return FILE_TYPE_MAP[EXTENSION_MAP[extension]]
  }

  return FILE_TYPE_MAP.default
}

export const getBadgeSize = (size?: AvatarFileSize): BadgeProps["size"] => {
  const sizeMap: Partial<
    Record<Exclude<AvatarFileSize, undefined>, BadgeProps["size"]>
  > = {
    lg: "sm",
    sm: "sm",
  } as const

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.sm
}

export const getAvatarSize = (
  size?: AvatarFileSize
): F0AvatarModuleProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<AvatarFileSize, undefined>, F0AvatarModuleProps["size"]>
  > = {
    lg: "xs",
    sm: "xs",
  } as const

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.sm
}

export { getFileTypeInfo }
export type { FileTypeInfo }
