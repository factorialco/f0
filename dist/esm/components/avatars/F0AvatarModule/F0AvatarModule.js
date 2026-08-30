import { modules as e } from "./modules.js";
import { useId as t } from "react";
import { cva as n } from "cva";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarModule/F0AvatarModule.tsx
var a = n({
	base: "relative flex shrink-0 items-center justify-center",
	variants: { size: {
		"4xs": "h-2.5 w-2.5",
		"3xs": "h-3 w-3",
		"2xs": "h-4 w-4",
		xs: "h-5 w-5",
		sm: "h-6 w-6",
		md: "h-8 w-8",
		lg: "h-10 w-10"
	} },
	defaultVariants: { size: "sm" }
}), o = n({
	base: "relative text-f1-foreground-inverse drop-shadow",
	variants: { size: {
		"4xs": "h-[7px] w-[7px]",
		"3xs": "h-[9px] w-[9px]",
		"2xs": "h-3 w-3",
		xs: "h-[14px] w-[14px]",
		sm: "h-[18px] w-[18px]",
		md: "h-6 w-6",
		lg: "h-7 w-7"
	} },
	defaultVariants: { size: "sm" }
}), s = "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";
function c({ size: n = "sm", module: c, ...l }) {
	let u = e[c];
	u || console.warn(`ModuleAvatar: The module ${c} is not supported.`);
	let d = `gradient-${t().replace(/:/g, "")}`;
	return /* @__PURE__ */ i("div", {
		className: a({ size: n }),
		"aria-hidden": "true",
		"aria-label": l["aria-label"],
		"aria-labelledby": l["aria-labelledby"],
		children: [/* @__PURE__ */ i("svg", {
			viewBox: "0 0 100 100",
			className: "absolute h-full w-full",
			preserveAspectRatio: "none",
			children: [/* @__PURE__ */ r("defs", { children: /* @__PURE__ */ i("linearGradient", {
				id: d,
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "100%",
				children: [
					/* @__PURE__ */ r("stop", {
						offset: "0%",
						stopColor: "#FF355E"
					}),
					/* @__PURE__ */ r("stop", {
						offset: "44%",
						stopColor: "#FF355E"
					}),
					/* @__PURE__ */ r("stop", {
						offset: "100%",
						stopColor: "#D62D4F"
					})
				]
			}) }), /* @__PURE__ */ r("path", {
				d: s,
				fill: `url(#${d})`
			})]
		}), u && /* @__PURE__ */ r(u, { className: o({ size: n }) })]
	});
}
//#endregion
export { c as F0AvatarModule };
