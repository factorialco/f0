import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/ChevronDown.js";
import n from "../../../icons/app/ChevronUp.js";
import r from "../../../icons/app/Download.js";
import i from "../../../icons/app/Minus.js";
import a from "../../../icons/app/Plus.js";
import o from "../../../icons/app/Printer.js";
import s from "../../../icons/app/Reset.js";
import { useI18n as c } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Select as l } from "../../../F0Select.js";
import { ToolbarButton as u } from "./ToolbarButton.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/components/PdfToolbar.tsx
var p = "flex flex-row items-center gap-2", m = ({ toolbarRef: m, currentPage: h, totalPages: g, hasDocument: _, selectedScale: v, scaleOptions: y, onPreviousPage: b, onNextPage: x, onZoomIn: S, onZoomOut: C, onScaleChange: w, rotatable: T, onRotate: E, onPrint: D, onDownload: O, actions: k }) => {
	let { pdfViewer: A } = c();
	return /* @__PURE__ */ f("div", {
		ref: m,
		role: "toolbar",
		"aria-label": A.toolbar,
		className: e("F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2", "px-6 py-4"),
		children: [
			/* @__PURE__ */ f("div", {
				className: p,
				children: [
					_ && /* @__PURE__ */ f("span", {
						"aria-live": "polite",
						className: "whitespace-nowrap text-sm font-medium text-f1-foreground-secondary",
						children: [
							h,
							" / ",
							g
						]
					}),
					/* @__PURE__ */ d(u, {
						label: A.previousPage,
						onClick: b,
						icon: n,
						size: "sm"
					}),
					/* @__PURE__ */ d(u, {
						label: A.nextPage,
						onClick: x,
						icon: t,
						size: "sm"
					})
				]
			}),
			/* @__PURE__ */ f("div", {
				className: p,
				children: [
					/* @__PURE__ */ d(u, {
						label: A.zoomOut,
						onClick: C,
						icon: i
					}),
					/* @__PURE__ */ d(u, {
						label: A.zoomIn,
						onClick: S,
						icon: a
					}),
					/* @__PURE__ */ d(l, {
						hideLabel: !0,
						label: A.scaleSelector,
						options: y,
						value: v,
						onChange: (e) => w(e)
					})
				]
			}),
			/* @__PURE__ */ f("div", {
				className: p,
				children: [
					T && /* @__PURE__ */ d(u, {
						label: A.rotate,
						onClick: E,
						icon: s
					}),
					/* @__PURE__ */ d(u, {
						label: A.print,
						onClick: D,
						icon: o
					}),
					/* @__PURE__ */ d(u, {
						label: A.download,
						onClick: O,
						icon: r
					}),
					k?.map((e, t) => /* @__PURE__ */ d(u, {
						label: e.label,
						onClick: e.onClick,
						icon: e.icon
					}, `${e.label}-${t}`))
				]
			})
		]
	});
};
//#endregion
export { m as PdfToolbar };
