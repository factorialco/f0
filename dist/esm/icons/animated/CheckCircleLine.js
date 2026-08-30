import * as e from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { motion as r } from "motion/react";
//#region src/icons/animated/CheckCircleLine.tsx
var i = {
	duration: .5,
	ease: [
		0,
		0,
		.2,
		1
	],
	delay: .2
}, a = {
	normal: {
		pathLength: 1,
		opacity: 1,
		transition: { delay: 0 }
	},
	animate: {
		pathLength: [0, 1],
		opacity: [0, 1]
	}
}, o = {
	duration: .5,
	ease: [
		.175,
		.885,
		.32,
		1.275
	]
}, s = {
	normal: { scale: 1 },
	animate: { scale: [
		1,
		.9,
		1
	] }
}, c = e.forwardRef(({ animate: e = "normal", ...c }, l) => /* @__PURE__ */ n("svg", {
	ref: l,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	strokeWidth: "1.3",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...c,
	children: [/* @__PURE__ */ t(r.circle, {
		cx: "12",
		cy: "12",
		r: "8",
		initial: "normal",
		variants: s,
		transition: o,
		animate: e
	}), /* @__PURE__ */ t(r.path, {
		d: "M9.00003 12L11.4 14.4L15 9.6",
		initial: "normal",
		variants: a,
		transition: i,
		animate: e
	})]
}));
c.displayName = "CheckCircleLineAnimated";
//#endregion
export { c as default };
