import { t as e } from "./utils-CVzxZnoI.js";
import { i as t, n, r, t as i } from "./tooltip-BPSwDQpD.js";
import { t as a } from "./use-ellipsis-overflow-9IsAS2HE.js";
import { r as o, t as s } from "./markdown-BP7WaW6T.js";
import c, { forwardRef as l, useMemo as u, useRef as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/lib/OneEllipsis/OneEllipsis.tsx
var h = l(({ children: t, className: n, lines: r, onHasEllipsisChange: i, noTooltip: o, tag: l = "span", disabled: u, markdown: d, ...f }, p) => {
	let m = a({
		disabled: u ?? !1,
		lines: r,
		onChange: i,
		ref: p && typeof p == "object" ? p : null
	}), h = d ? s(t) : void 0;
	return c.createElement(l, {
		ref: p,
		className: e(!o && m && "pointer-events-auto", "min-w-0 max-w-full overflow-hidden", !u && [r === 1 ? "text-ellipsis" : "", r > 1 ? `not-supports-[(-webkit-line-clamp:${r})]:whitespace-nowrap line-clamp-1 whitespace-normal` : "block whitespace-nowrap"], n),
		style: {
			WebkitLineClamp: r > 1 ? r : void 0,
			lineClamp: r > 1 ? r : void 0
		},
		...f,
		...d && h ? { dangerouslySetInnerHTML: { __html: h } } : {}
	}, d ? void 0 : t);
});
h.displayName = "EllipsisWrapper";
var g = l(({ className: e, lines: a = 1, children: s, noTooltip: c = !1, disabled: l = !1, markdown: g = !1, tag: _ = "span", ...v }, y) => {
	let [b, x] = f(!1), S = d(null), C = y || S, w = u(() => /* @__PURE__ */ p(h, {
		ref: C,
		className: e,
		lines: a,
		onHasEllipsisChange: x,
		disabled: l,
		markdown: g,
		tag: _,
		...v,
		"data-testid": "one-ellipsis",
		noTooltip: c,
		children: s
	}), [
		e,
		a,
		C,
		s,
		l,
		g,
		_
	]), T = u(() => g ? o(s) : s, [s, g]);
	return b && !c ? /* @__PURE__ */ p(r, { children: /* @__PURE__ */ m(i, { children: [/* @__PURE__ */ p(t, {
		asChild: !0,
		className: "pointer-events-auto",
		children: w
	}), /* @__PURE__ */ p(n, {
		className: "max-w-xl",
		children: T
	})] }) }) : w;
});
g.displayName = "OneEllipsis";
//#endregion
export { g as t };
