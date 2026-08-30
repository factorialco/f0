import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { Skeleton as t } from "../../../ui/skeleton.js";
import { withSkeleton as n } from "../../../lib/skeleton.js";
import { CardInternal as r } from "./internal.js";
import { forwardRef as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/kits/ai/F0AiInsightCard/F0AiInsightCard.tsx
var s = ["className"], c = i((e, t) => {
	let n = s.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ a(r, {
		ref: t,
		...n
	});
});
c.displayName = "F0AiInsightCard";
var l = e(n(c, () => /* @__PURE__ */ o("div", {
	className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ a(t, { className: "h-3 w-3/4 rounded" }), /* @__PURE__ */ o("div", {
		className: "flex flex-1 flex-col justify-end gap-2",
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ a(t, { className: "h-5 w-full rounded" }), /* @__PURE__ */ a(t, { className: "h-5 w-2/3 rounded" })]
		}), /* @__PURE__ */ o("div", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ a(t, { className: "h-5 w-5 rounded-full" }), /* @__PURE__ */ a(t, { className: "h-3 w-20 rounded" })]
		})]
	})]
})));
//#endregion
export { l as F0AiInsightCard };
