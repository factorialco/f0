import { FILE_TYPES as e } from "./constants.js";
const o = (t, a, n, c) => {
  if (n) {
    const r = n.multipleFiles ? [...a, ...t] : t;
    c(r), n.onFiles(r);
  }
}, i = (t, a, n, c) => {
  if (n) {
    const r = [...a];
    r.splice(t, 1), c(r), n.onFiles(r);
  }
}, s = (t) => t?.acceptedFileType && t.acceptedFileType.length > 0 ? t.acceptedFileType.map((a) => {
  switch (a) {
    case e.IMAGE:
      return "image/*";
    case e.VIDEO:
      return "video/*";
    case e.PDF:
      return "application/pdf";
    case e.DOC:
      return "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case e.EXCEL:
      return "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case e.PPT:
      return "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation";
    case e.TXT:
      return "text/plain";
    case e.AUDIO:
      return "audio/*";
    case e.ARCHIVE:
      return ".zip,.rar,.tar,.gz,.7z";
    case e.CSV:
      return "text/csv";
    case e.HTML:
      return "text/html";
    case e.MARKDOWN:
      return "text/markdown";
    default:
      return "";
  }
}).filter(Boolean).join(", ") : "*";
export {
  s as getAcceptFileTypeString,
  o as handleAddFiles,
  i as handleRemoveFile
};
