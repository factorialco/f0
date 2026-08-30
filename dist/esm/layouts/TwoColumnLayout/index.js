import { Component as e } from "../../lib/component/component.js";
import { withDataTestId as t } from "../../lib/data-testid/index.js";
import { cn as n } from "../../lib/utils.js";
import { forwardRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/layouts/TwoColumnLayout/index.tsx
var o = r(function({ children: e, sideContent: t, mainColumnPosition: r = "left", sticky: o = !1, responsiveStackOrder: s = "side" }, l) {
	return /* @__PURE__ */ i("div", {
		ref: l,
		className: "h-full",
		children: /* @__PURE__ */ a("div", {
			className: n("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", o && "md:sticky md:top-0 md:max-h-full"),
			children: [/* @__PURE__ */ i("main", {
				className: n("sm:min-h-xs h-fit border-0 py-5 sm:flex-1 sm:border-solid md:order-2 px-page", s === "main" ? "order-1" : "order-2", o ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
				children: e
			}), /* @__PURE__ */ i(c, {
				sticky: o,
				className: n(s === "main" ? "order-2" : "order-1", r === "right" ? "md:order-1" : "md:order-3"),
				children: t
			})]
		})
	});
}), s = t(e({
	name: "TwoColumnLayout",
	type: "layout"
}, o)), c = ({ children: e, className: t }) => /* @__PURE__ */ i("aside", {
	className: n("min-w-30 py-5 pl-page pr-page sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", t),
	children: e
});
//#endregion
export { s as TwoColumnLayout };
