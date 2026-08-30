import { cn as e } from "../../lib/utils.js";
import { useI18n as t } from "../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as n } from "../../ui/skeleton.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/F0PdfViewerSkeleton.tsx
var a = () => {
	let { pdfViewer: a } = t();
	return /* @__PURE__ */ i("div", {
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		"aria-label": a.loading,
		className: e("F0PdfViewer__surface flex h-full w-full flex-col overflow-hidden", "border border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ i("div", {
			className: "flex flex-row items-center justify-between gap-2 px-6 py-4",
			children: [
				/* @__PURE__ */ r(n, { className: "h-8 w-24 rounded-md" }),
				/* @__PURE__ */ r(n, { className: "h-8 w-40 rounded-md" }),
				/* @__PURE__ */ r(n, { className: "h-8 w-20 rounded-md" })
			]
		}), /* @__PURE__ */ r("div", {
			className: "flex flex-1 justify-center p-4",
			children: /* @__PURE__ */ r(n, { className: "h-full w-full max-w-[600px] rounded-md" })
		})]
	});
};
//#endregion
export { a as F0PdfViewerSkeleton };
