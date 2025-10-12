type FileTypeInfo = {
  type: string;
  color: string;
};

type FileLike = {
  name: string;
  type?: string;
};

const FILE_TYPE_MAP: Record<string, FileTypeInfo> = {
  pdf: { type: "PDF", color: "text-f1-foreground-accent" },
  image: { type: "IMG", color: "text-f1-foreground-info" },
  doc: { type: "DOC", color: "text-f1-foreground-info" },
  excel: { type: "XLS", color: "text-f1-foreground-positive" },
  ppt: { type: "PPT", color: "text-f1-foreground-warning" },
  txt: { type: "TXT", color: "text-f1-foreground-secondary" },
  video: { type: "VID", color: "text-f1-foreground-info" },
  audio: { type: "AUD", color: "text-f1-foreground-accent" },
  archive: { type: "ZIP", color: "text-f1-foreground-warning" },
  csv: { type: "CSV", color: "text-f1-foreground-positive" },
  html: { type: "HTML", color: "text-f1-foreground-accent" },
  markdown: { type: "MD", color: "text-f1-foreground-secondary" },
  default: { type: "FILE", color: "text-f1-foreground" },
};

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
};

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
};

const getFileTypeInfo = (file: FileLike): FileTypeInfo => {
  const mimeType = file.type?.toLowerCase() ?? "";

  const matchedMimeKey = Object.keys(MIME_MATCH_MAP).find((key) =>
    mimeType.includes(key),
  );

  if (matchedMimeKey) {
    const fileTypeKey = MIME_MATCH_MAP[matchedMimeKey];
    if (fileTypeKey && FILE_TYPE_MAP[fileTypeKey]) {
      return FILE_TYPE_MAP[fileTypeKey];
    }
  }

  const extension = file.name.toLowerCase().split(".").pop();

  if (extension && EXTENSION_MAP[extension]) {
    const fileTypeKey = EXTENSION_MAP[extension];
    if (fileTypeKey && FILE_TYPE_MAP[fileTypeKey]) {
      return FILE_TYPE_MAP[fileTypeKey];
    }
  }

  return FILE_TYPE_MAP.default!;
};

export { getFileTypeInfo };
export type { FileTypeInfo, FileLike };
