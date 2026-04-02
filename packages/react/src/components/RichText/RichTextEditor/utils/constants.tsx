const FILE_TYPES = {
  PDF: "pdf",
  IMAGE: "image",
  DOC: "doc",
  EXCEL: "excel",
  PPT: "ppt",
  TXT: "txt",
  VIDEO: "video",
  AUDIO: "audio",
  ARCHIVE: "archive",
  CSV: "csv",
  HTML: "html",
  MARKDOWN: "markdown",
} as const

export type FileType = (typeof FILE_TYPES)[keyof typeof FILE_TYPES]
export { FILE_TYPES }
