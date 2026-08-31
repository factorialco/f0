import { f as e } from "./variants-D_OHTcOj.js";
import { t } from "./input-B2JSUD-n.js";
import { forwardRef as n, useMemo as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
var s = n((e, t) => /* @__PURE__ */ o("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ a("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M19.5919 7.66492C18.318 10.297 15.5536 12.6649 11.9999 12.6649C8.44623 12.6649 5.68183 10.297 4.40796 7.66492"
		}),
		/* @__PURE__ */ a("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M10.0083 13.0159L8.89773 16.3351"
		}),
		/* @__PURE__ */ a("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M14.0576 13.0159L15.1682 16.3351"
		}),
		/* @__PURE__ */ a("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M17.5232 10.543L20 13.0159"
		}),
		/* @__PURE__ */ a("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M6.47681 10.543L4.00002 13.0159"
		})
	]
})), c = n((e, t) => /* @__PURE__ */ o("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ a("path", {
		stroke: "currentColor",
		strokeLinejoin: "round",
		d: "M20 12C19 9 16 6 12 6C8 6 5 9 4 12C5 15 8 18 12 18C16 18 19 15 20 12Z"
	}), /* @__PURE__ */ a("circle", {
		cx: 12,
		cy: 12,
		r: 2.35,
		stroke: "currentColor"
	})]
})), l = n((e, t) => /* @__PURE__ */ o("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ a("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z"
		}),
		/* @__PURE__ */ a("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M12 14V15"
		}),
		/* @__PURE__ */ a("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M8 10V8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8V10"
		})
	]
})), u = {
	autoComplete: "off",
	"data-1p-ignore": !0,
	"data-lpignore": "true",
	"data-form-type": "other",
	"data-bwignore": !0
}, d = n(function({ type: n, onPressEnter: o, ...d }, f) {
	let [p, m] = i(!1), h = n === "password" || n === "private", g = r(() => h ? p ? "text" : "password" : n, [
		p,
		h,
		n
	]), _ = r(() => n === "password" ? l : d.icon, [n, d.icon]), v = e(), y = r(() => n === "password" ? {
		label: [v.inputs.password.show, v.inputs.password.hide],
		icon: [s, c],
		selected: p,
		onChange: m
	} : n === "private" ? {
		label: [v.t("inputs.private.show", { label: d.label }), v.t("inputs.private.hide", { label: d.label })],
		icon: [s, c],
		selected: p,
		onChange: m
	} : d.buttonToggle, [
		p,
		n,
		d.buttonToggle,
		d.label
	]);
	return /* @__PURE__ */ a(t, {
		...d,
		...n === "private" ? u : {},
		ref: f,
		type: g,
		onChange: (e) => d.onChange?.(n === "email" ? e.toLowerCase() : e),
		onKeyDown: (e) => {
			e.key === "Enter" && !e.nativeEvent.isComposing && o?.();
		},
		icon: _,
		buttonToggle: y
	});
});
d.displayName = "InputInternal";
//#endregion
export { s as i, l as n, c as r, d as t };
