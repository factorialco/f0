import { FILE_TYPES as e } from "./constants.js";
//#region src/components/RichText/F0RichTextEditor/utils/files.ts
var t = (e, t, n, r) => {
	if (n) {
		let i = n.multipleFiles ? [...t, ...e] : e;
		r(i), n.onFiles(i);
	}
}, n = (e, t, n, r) => {
	if (n) {
		let i = [...t];
		i.splice(e, 1), r(i), n.onFiles(i);
	}
}, r = (t) => t?.acceptedFileType && t.acceptedFileType.length > 0 ? t.acceptedFileType.map((t) => {
	switch (t) {
		case e.IMAGE: return "image/*";
		case e.VIDEO: return "video/*";
		case e.PDF: return "application/pdf";
		case e.DOC: return "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document";
		case e.EXCEL: return "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
		case e.PPT: return "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation";
		case e.TXT: return "text/plain";
		case e.AUDIO: return "audio/*";
		case e.ARCHIVE: return ".zip,.rar,.tar,.gz,.7z";
		case e.CSV: return "text/csv";
		case e.HTML: return "text/html";
		case e.MARKDOWN: return "text/markdown";
		default: return "";
	}
}).filter(Boolean).join(", ") : "*";
//#endregion
export { r as getAcceptFileTypeString, t as handleAddFiles, n as handleRemoveFile };
