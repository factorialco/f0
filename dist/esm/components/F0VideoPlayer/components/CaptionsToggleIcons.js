import { forwardRef as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/F0VideoPlayer/components/CaptionsToggleIcons.tsx
var r = e(({ animate: e, ...r }, i) => /* @__PURE__ */ n("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: i,
	...r,
	children: [
		/* @__PURE__ */ t("rect", {
			x: 3.5,
			y: 6.5,
			width: 17,
			height: 11,
			rx: 2.5,
			stroke: "currentColor",
			vectorEffect: "non-scaling-stroke"
		}),
		/* @__PURE__ */ t("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M7 10.75h8",
			vectorEffect: "non-scaling-stroke"
		}),
		/* @__PURE__ */ t("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M7 13.75h4.5",
			vectorEffect: "non-scaling-stroke"
		})
	]
}));
r.displayName = "CaptionsLineIcon";
var i = e(({ animate: e, ...n }, r) => /* @__PURE__ */ t("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: r,
	...n,
	children: /* @__PURE__ */ t("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M6 6h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm1.25 4.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z",
		vectorEffect: "non-scaling-stroke"
	})
}));
i.displayName = "CaptionsFilledIcon";
//#endregion
export { i as CaptionsFilledIcon, r as CaptionsLineIcon };
