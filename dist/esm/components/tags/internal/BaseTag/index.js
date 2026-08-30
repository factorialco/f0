import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../F0Icon/index.js";
import n from "../../../../icons/app/InfoCircleLine.js";
import { Tooltip as r } from "../../../../experimental/Overlays/Tooltip/index.js";
import { OneEllipsis as i } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { forwardRef as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/tags/internal/BaseTag/index.tsx
var c = a(({ left: a, text: c, right: l, additionalAccessibleText: u, className: d, hint: f, info: p, shape: m = "rounded", size: h = "md", hideLabel: g, deactivated: _ }, v) => (u ||= g ? c : void 0, /* @__PURE__ */ s("div", {
	"data-no-strike": !0,
	className: "flex w-fit max-w-full flex-row items-center justify-start gap-1",
	children: [
		/* @__PURE__ */ s("div", {
			ref: v,
			className: e("inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 font-medium text-f1-foreground", h === "md" && "text-base", h === "sm" && "text-sm", !c && "aspect-square w-6 items-center justify-center p-1", a ? "pl-1" : "pl-2", m === "rounded" && "rounded-full", m === "square" && "rounded-sm", d),
			children: [
				a,
				!!c && !g && /* @__PURE__ */ o(i, {
					tag: "span",
					lines: 1,
					className: _ ? "text-f1-foreground-disabled" : void 0,
					children: c
				}),
				u && /* @__PURE__ */ o("span", {
					className: "sr-only",
					children: u
				}),
				l
			]
		}),
		f && /* @__PURE__ */ o("span", {
			className: "text-base font-medium text-f1-foreground-secondary",
			children: f
		}),
		p && /* @__PURE__ */ o(r, {
			description: p,
			children: /* @__PURE__ */ o(t, {
				icon: n,
				size: "md"
			})
		})
	]
})));
c.displayName = "BaseTag";
//#endregion
export { c as BaseTag };
