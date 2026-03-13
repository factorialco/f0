import { type TextColor } from "../primitives/F0Text"

type FileTypeInfo = {
  type: string
  color: TextColor
}

type FileLike = {
  name: string
  type?: string
}

const FILE_TYPE_MAP: Record<string, FileTypeInfo> = {
  pdf: { type: "PDF", color: "accent" },
  image: { type: "IMG", color: "info" },
  doc: { type: "DOC", color: "info" },
  excel: { type: "XLS", color: "positive" },
  ppt: { type: "PPT", color: "warning" },
  txt: { type: "TXT", color: "secondary" },
  video: { type: "VID", color: "info" },
  audio: { type: "AUD", color: "accent" },
  archive: { type: "ZIP", color: "warning" },
  csv: { type: "CSV", color: "positive" },
  html: { type: "HTML", color: "accent" },
  markdown: { type: "MD", color: "secondary" },
  default: { type: "FILE", color: "default" },
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
  pdf: "pdf",
  jpg: "image",
  jpeg: "image",
  png: "image",
  gif: "image",
  svg: "image",
  doc: "doc",
  docx: "doc",
  xls: "excel",
  xlsx: "excel",
  csv: "csv",
  ppt: "ppt",
  pptx: "ppt",
  txt: "txt",
  mp4: "video",
  mov: "video",
  mkv: "video",
  avi: "video",
  webm: "video",
  mp3: "audio",
  wav: "audio",
  flac: "audio",
  ogg: "audio",
  zip: "archive",
  rar: "archive",
  tar: "archive",
  gz: "archive",
  "7z": "archive",
  html: "html",
  htm: "html",
  md: "markdown",
  markdown: "markdown",
}

const getFileTypeInfo = (file: FileLike): FileTypeInfo => {
  const mimeType = file.type?.toLowerCase() ?? ""

  const matchedMimeKey = Object.keys(MIME_MATCH_MAP).find((key) =>
    mimeType.includes(key)
  )

  if (matchedMimeKey) {
    return FILE_TYPE_MAP[MIME_MATCH_MAP[matchedMimeKey]]
  }

  const extension = file.name.toLowerCase().split(".").pop()

  if (extension && EXTENSION_MAP[extension]) {
    return FILE_TYPE_MAP[EXTENSION_MAP[extension]]
  }

  return FILE_TYPE_MAP.default
}

export { getFileTypeInfo }
export type { FileTypeInfo, FileLike }
