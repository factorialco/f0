const r = {
  pdf: {
    type: "PDF",
    color: "text-f1-foreground-accent"
  },
  image: {
    type: "IMG",
    color: "text-f1-foreground-info"
  },
  doc: {
    type: "DOC",
    color: "text-f1-foreground-info"
  },
  excel: {
    type: "XLS",
    color: "text-f1-foreground-positive"
  },
  ppt: {
    type: "PPT",
    color: "text-f1-foreground-warning"
  },
  txt: {
    type: "TXT",
    color: "text-f1-foreground-secondary"
  },
  video: {
    type: "VID",
    color: "text-f1-foreground-info"
  },
  audio: {
    type: "AUD",
    color: "text-f1-foreground-accent"
  },
  archive: {
    type: "ZIP",
    color: "text-f1-foreground-warning"
  },
  csv: {
    type: "CSV",
    color: "text-f1-foreground-positive"
  },
  html: {
    type: "HTML",
    color: "text-f1-foreground-accent"
  },
  markdown: {
    type: "MD",
    color: "text-f1-foreground-secondary"
  },
  default: {
    type: "FILE",
    color: "text-f1-foreground"
  },
  xml: {
    type: "XML",
    color: "text-f1-foreground-positive"
  }
}, i = {
  pdf: "pdf",
  image: "image",
  spreadsheetml: "excel",
  wordprocessingml: "doc",
  presentationml: "ppt",
  word: "doc",
  excel: "excel",
  powerpoint: "ppt",
  // "csv" must come before "text" so that "text/csv" matches CSV, not TXT.
  csv: "csv",
  text: "txt",
  video: "video",
  audio: "audio",
  archive: "archive",
  html: "html",
  markdown: "markdown",
  zip: "archive",
  rar: "archive",
  tar: "archive",
  gz: "archive",
  "7z": "archive",
  xml: "xml"
}, a = {
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
  // XML
  xml: "xml"
}, n = (e) => {
  const o = (e.type || "").toLowerCase(), c = Object.keys(i).find(
    (d) => o.includes(d)
  );
  if (c)
    return r[i[c]];
  const t = (e.name || "").toLowerCase().split(".").pop();
  return t && a[t] ? r[a[t]] : r.default;
}, p = (e) => {
  const o = {
    lg: "sm",
    sm: "sm"
  };
  return e && o[e] ? o[e] : o.sm;
}, m = (e) => {
  const o = {
    lg: "xs",
    sm: "xs"
  };
  return e && o[e] ? o[e] : o.sm;
};
export {
  m as getAvatarSize,
  p as getBadgeSize,
  n as getFileTypeInfo
};
