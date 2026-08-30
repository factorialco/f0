import { cn as e } from "../utils.js";
import { parseMarkdown as t, stripMarkdown as n } from "../markdown.js";
import { Tooltip as r, TooltipContent as i, TooltipProvider as a, TooltipTrigger as o } from "../../ui/tooltip.js";
import s, { forwardRef as c, useEffect as l, useMemo as u, useRef as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/lib/OneEllipsis/OneEllipsis.tsx
var h = (e, t) => {
	if (!e) return !1;
	if (t > 1) {
		let n = parseInt(window.getComputedStyle(e).lineHeight);
		return e.scrollHeight > n * t;
	}
	return e.scrollWidth > e.clientWidth;
}, g = c(({ children: n, className: r, lines: i, onHasEllipsisChange: a, noTooltip: o, tag: c = "span", disabled: u, markdown: d, ...p }, m) => {
	let [g, _] = f(!1);
	l(() => {
		if (!m || typeof m != "object" || u) return;
		let e = m.current;
		if (!e) return;
		let t = () => {
			let t = h(e, i);
			return _(t), a(t), t;
		};
		t();
		let n = requestAnimationFrame(() => t()), r = setTimeout(() => t(), 100), o = new ResizeObserver(() => {
			t();
		});
		return o.observe(e), () => {
			cancelAnimationFrame(n), clearTimeout(r), o.disconnect();
		};
	}, [
		m,
		a,
		i,
		u
	]);
	let v = d ? t(n) : void 0;
	return s.createElement(c, {
		ref: m,
		className: e(!o && g && "pointer-events-auto", "min-w-0 max-w-full overflow-hidden", !u && [i === 1 ? "text-ellipsis" : "", i > 1 ? `not-supports-[(-webkit-line-clamp:${i})]:whitespace-nowrap line-clamp-1 whitespace-normal` : "block whitespace-nowrap"], r),
		style: {
			WebkitLineClamp: i > 1 ? i : void 0,
			lineClamp: i > 1 ? i : void 0
		},
		...p,
		...d && v ? { dangerouslySetInnerHTML: { __html: v } } : {}
	}, d ? void 0 : n);
});
g.displayName = "EllipsisWrapper";
var _ = c(({ className: e, lines: t = 1, children: s, noTooltip: c = !1, disabled: l = !1, markdown: h = !1, tag: _ = "span", ...v }, y) => {
	let [b, x] = f(!1), S = d(null), C = y || S, w = u(() => /* @__PURE__ */ p(g, {
		ref: C,
		className: e,
		lines: t,
		onHasEllipsisChange: x,
		disabled: l,
		markdown: h,
		tag: _,
		...v,
		"data-testid": "one-ellipsis",
		noTooltip: c,
		children: s
	}), [
		e,
		t,
		C,
		s,
		l,
		h,
		_
	]), T = u(() => h ? n(s) : s, [s, h]);
	return b && !c ? /* @__PURE__ */ p(a, { children: /* @__PURE__ */ m(r, { children: [/* @__PURE__ */ p(o, {
		asChild: !0,
		className: "pointer-events-auto",
		children: w
	}), /* @__PURE__ */ p(i, {
		className: "max-w-xl",
		children: T
	})] }) }) : w;
});
_.displayName = "OneEllipsis";
//#endregion
export { _ as OneEllipsis };
