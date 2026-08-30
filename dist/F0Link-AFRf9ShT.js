import { t as e } from "./dist-CqnuTXEz.js";
import { n as t } from "./data-testid-0GIWgc6Q.js";
import { _ as n } from "./variants-BhCxKzs5.js";
import { o as r } from "./F0Button-CYTXun0O.js";
import { a as i, i as a, r as o } from "./F0AvatarIcon-dGQ2qbg6.js";
import { t as s } from "./CheckCircle-KIInZpvd.js";
import { forwardRef as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = c((e, t) => /* @__PURE__ */ d("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ u("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5"
	}), /* @__PURE__ */ u("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M12.5 11.5L20 4M20 4H15.5M20 4V8.5"
	})]
})), p = e({
	base: "flex items-center justify-center border border-solid",
	variants: {
		type: {
			critical: "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
			warning: "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
			info: "border-f1-border-info bg-f1-background-info text-f1-icon-info",
			positive: "border-f1-border-positive bg-f1-background-positive text-f1-icon-positive"
		},
		size: {
			sm: "h-6 w-6 rounded-sm",
			md: "h-8 w-8 rounded",
			lg: "h-10 w-10 rounded-md"
		}
	},
	defaultVariants: {
		type: "info",
		size: "md"
	}
}), m = t(({ type: e, size: t, "aria-label": r, "aria-labelledby": c }) => {
	let l = {
		critical: i,
		warning: o,
		info: a,
		positive: s
	};
	return /* @__PURE__ */ u("div", {
		className: p({
			type: e,
			size: t
		}),
		"aria-label": r,
		"aria-labelledby": c,
		role: "alert",
		children: /* @__PURE__ */ u(n, {
			icon: l[e],
			size: t
		})
	});
}), h = c(function({ className: e, children: t, stopPropagation: i = !1, "aria-label": a, href: o, variant: s = "link", ...c }, p) {
	let { target: m } = c, h = m === "_blank", g = (e) => {
		i && e.stopPropagation(), c.onClick?.(e);
	}, _ = o === void 0 ? {
		...c,
		onClick: g,
		"aria-label": a,
		className: e
	} : {
		...c,
		href: o,
		onClick: g,
		rel: h ? "noopener noreferrer" : void 0,
		"aria-label": a,
		className: e
	};
	return /* @__PURE__ */ d(r, {
		ref: p,
		..._,
		variant: s,
		children: [/* @__PURE__ */ u("span", { children: t }), h && /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ u(n, {
			icon: f,
			size: "sm",
			"aria-hidden": !0
		}), /* @__PURE__ */ u("span", {
			className: "sr-only",
			children: " (opens in new tab)"
		})] })]
	});
});
h.displayName = "F0Link";
var g = t(h);
//#endregion
export { m as n, f as r, g as t };
