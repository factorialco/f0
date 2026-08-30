import { Document as e, Page as t } from "../../../../ui/pdf.js";
import { ensurePdfWorker as n } from "../../../../components/F0PdfViewer/pdfWorker.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatPdfThumbnail.tsx
n();
var i = ({ url: n, width: i, onError: a, onRendered: o }) => /* @__PURE__ */ r(e, {
	file: n,
	loading: null,
	error: null,
	onLoadError: a,
	onSourceError: a,
	children: /* @__PURE__ */ r(t, {
		pageNumber: 1,
		width: i,
		renderTextLayer: !1,
		renderAnnotationLayer: !1,
		loading: null,
		error: null,
		onRenderError: a,
		onRenderSuccess: o
	})
});
//#endregion
export { i as default };
