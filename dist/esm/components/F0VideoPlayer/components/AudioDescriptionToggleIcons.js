import { forwardRef as e, useId as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/F0VideoPlayer/components/AudioDescriptionToggleIcons.tsx
var i = {
	x: 12,
	y: 15,
	textAnchor: "middle",
	fontSize: 8,
	fontWeight: 700,
	fontFamily: "inherit",
	letterSpacing: -.4
}, a = e(({ animate: e, ...t }, a) => /* @__PURE__ */ r("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	ref: a,
	...t,
	"aria-hidden": "true",
	children: [/* @__PURE__ */ n("rect", {
		x: 3.5,
		y: 6.5,
		width: 17,
		height: 11,
		rx: 2.5,
		stroke: "currentColor",
		vectorEffect: "non-scaling-stroke"
	}), /* @__PURE__ */ n("text", {
		...i,
		fill: "currentColor",
		children: "AD"
	})]
}));
a.displayName = "AudioDescriptionLineIcon";
var o = e(({ animate: e, ...a }, o) => {
	let s = `ad-mask-${t().replace(/:/g, "")}`;
	return /* @__PURE__ */ r("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		ref: o,
		...a,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ r("mask", {
			id: s,
			maskUnits: "userSpaceOnUse",
			children: [/* @__PURE__ */ n("rect", {
				x: 3,
				y: 6,
				width: 18,
				height: 12,
				rx: 3,
				fill: "white"
			}), /* @__PURE__ */ n("text", {
				...i,
				fill: "black",
				children: "AD"
			})]
		}), /* @__PURE__ */ n("rect", {
			x: 3,
			y: 6,
			width: 18,
			height: 12,
			rx: 3,
			fill: "currentColor",
			mask: `url(#${s})`
		})]
	});
});
o.displayName = "AudioDescriptionFilledIcon";
//#endregion
export { o as AudioDescriptionFilledIcon, a as AudioDescriptionLineIcon };
