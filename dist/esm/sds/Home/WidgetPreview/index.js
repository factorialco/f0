import { cn as e } from "../../../lib/utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { useMediaQuery as r } from "usehooks-ts";
import { breakpoints as i } from "@factorialco/f0-core";
//#region src/sds/Home/WidgetPreview/index.tsx
var a = "(min-width: 2200px) and (min-height: 900px)", o = () => {
	let t = r(a, {
		initializeWithValue: !0,
		defaultValue: !1
	}), n = r(`(max-width: ${i.md}px)`, {
		initializeWithValue: !0,
		defaultValue: !1
	});
	return {
		position: t ? "center" : "fullscreen",
		width: "xl",
		bodyClassName: e("flex h-full min-h-96 gap-4", n ? "flex-col" : "flex-row"),
		asideClassName: n ? "w-full shrink-0" : "w-80 shrink-0",
		stacked: n
	};
}, s = "animate-in fade-in zoom-in-95 duration-300 ease-out motion-reduce:animate-none";
function c({ previewKey: r, children: i, info: a, previewWidth: o = 396 }) {
	return /* @__PURE__ */ t("div", {
		className: "flex min-w-0 flex-1 flex-col overflow-y-auto rounded-lg bg-f1-background-secondary p-6",
		children: /* @__PURE__ */ n("div", {
			className: "my-auto flex w-full flex-col items-center gap-6",
			children: [/* @__PURE__ */ t("div", {
				className: e("w-full", s),
				style: { maxWidth: `${o}px` },
				children: i
			}, r), a ? /* @__PURE__ */ t("p", {
				className: "m-0 max-w-96 text-center text-f1-foreground-secondary",
				children: a
			}) : null]
		})
	});
}
//#endregion
export { c as WidgetPreviewPane, o as useWidgetDialogLayout };
