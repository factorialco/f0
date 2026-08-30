import { Component as e } from "../../lib/component/component.js";
import { withDataTestId as t } from "../../lib/data-testid/index.js";
import { cn as n } from "../../lib/utils.js";
import { LayoutProvider as r } from "../LayoutProvider.js";
import i from "react";
import { cva as a } from "cva";
import { jsx as o } from "react/jsx-runtime";
//#region src/layouts/StandardLayout/index.tsx
var s = a({
	base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-page py-5",
	variants: { variant: { narrow: "max-w-screen-lg" } }
}), c = i.forwardRef(({ children: e, variant: t, className: i, ...a }, c) => /* @__PURE__ */ o(r, {
	layout: "standard",
	children: /* @__PURE__ */ o("section", {
		ref: c,
		className: n("relative flex-1 overflow-auto", i),
		...a,
		children: /* @__PURE__ */ o("div", {
			className: n(s({ variant: t })),
			children: e
		})
	})
}));
c.displayName = "StandardLayout";
var l = t(e({
	name: "StandardLayout",
	type: "layout"
}, c));
//#endregion
export { l as StandardLayout };
