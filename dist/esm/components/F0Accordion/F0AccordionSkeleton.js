import { cn as e } from "../../lib/utils.js";
import { Skeleton as t } from "../../ui/skeleton.js";
import { Fragment as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/F0Accordion/F0AccordionSkeleton.tsx
var a = ({ items: a = 4 }) => /* @__PURE__ */ r("div", {
	"aria-busy": "true",
	"aria-live": "polite",
	className: e("flex flex-col rounded-md border border-solid border-f1-border-secondary", "overflow-hidden bg-f1-background"),
	children: Array.from({ length: a }).map((e, a) => /* @__PURE__ */ i(n, { children: [a > 0 && /* @__PURE__ */ r("div", { className: "h-px w-full bg-f1-border-secondary" }), /* @__PURE__ */ i("div", {
		className: "flex items-center gap-3 px-4 py-3",
		children: [/* @__PURE__ */ r(t, { className: "h-4 flex-1 max-w-48" }), /* @__PURE__ */ r(t, { className: "ml-auto h-7 w-7 shrink-0 rounded" })]
	})] }, a))
});
//#endregion
export { a as F0AccordionSkeleton };
