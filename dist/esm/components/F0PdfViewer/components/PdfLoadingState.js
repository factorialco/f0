import { Skeleton as e } from "../../../ui/skeleton.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/components/PdfLoadingState.tsx
var n = ({ label: n, width: r, height: i }) => /* @__PURE__ */ t("div", {
	role: "status",
	"aria-label": n,
	"aria-live": "polite",
	"aria-busy": !0,
	className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
	children: /* @__PURE__ */ t(e, {
		style: {
			width: r,
			height: i
		},
		className: "rounded-lg border border-solid border-f1-border-secondary shadow-md"
	})
});
//#endregion
export { n as PdfLoadingState };
