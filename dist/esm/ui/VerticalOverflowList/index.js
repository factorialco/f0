import { cn as e } from "../../lib/utils.js";
import { useCallback as t, useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { useResizeObserver as s } from "usehooks-ts";
//#region src/ui/VerticalOverflowList/index.tsx
function c(e, a) {
	let o = r(null), c = r(null), [l, u] = i({
		visibleItems: [],
		overflowItems: []
	});
	s({
		ref: o,
		onResize: () => {
			m();
		}
	});
	let d = t((e, t, n) => t < n - 1 ? e + a : e, [a]), f = t(() => {
		if (!c.current) return [];
		let e = c.current.children, t = [];
		for (let n = 0; n < e.length; n++) {
			let r = e[n].getBoundingClientRect().height;
			t.push(r);
		}
		return t;
	}, []), p = t((e, t) => {
		let n = 0, r = 0;
		for (let i = 0; i < e.length; i++) {
			let a = r + e[i];
			if (a > t + 30) break;
			r = a, r = d(r, i, e.length), n++;
		}
		return n;
	}, [d]), m = t(() => {
		if (!o.current || e.length === 0) return;
		let t = o.current.clientHeight, n = f(), r = p(n, t);
		u(r === 0 ? {
			visibleItems: [],
			overflowItems: e
		} : (t) => t.visibleItems.length === r && t.overflowItems.length === e.length - r ? t : {
			visibleItems: e.slice(0, r),
			overflowItems: e.slice(r)
		});
	}, [
		e,
		f,
		p
	]);
	return n(() => {
		m();
	}, [m]), {
		containerRef: o,
		measurementContainerRef: c,
		visibleItems: l.visibleItems,
		overflowItems: l.overflowItems
	};
}
var l = function({ items: t, renderListItem: r, className: i, gap: s = 0, minSize: l, onVisibleItemsChange: u }) {
	let { containerRef: d, measurementContainerRef: f, visibleItems: p } = c(t, s);
	return n(() => {
		u?.(p);
	}, [u, p]), /* @__PURE__ */ o("div", {
		ref: d,
		className: e("relative flex h-full flex-col", i),
		style: { minHeight: `${l}px` },
		children: [/* @__PURE__ */ a("div", {
			ref: f,
			"aria-hidden": "true",
			className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
			style: { gap: `${s}px` },
			"data-testid": "overflow-measurement-container",
			children: t.map((e, t) => /* @__PURE__ */ a("div", {
				"data-testid": "overflow-measurement-item",
				children: r(e, t, !1)
			}, `measure-${t}`))
		}), /* @__PURE__ */ a("div", {
			className: "flex flex-col",
			style: { gap: `${s}px` },
			"data-testid": "overflow-visible-container",
			children: p.map((e, t) => /* @__PURE__ */ a("div", {
				className: "transition-all duration-150",
				"data-testid": "overflow-visible-item",
				children: r(e, t, !0)
			}, `item-${t}`))
		})]
	});
};
l.displayName = "VerticalOverflowList";
//#endregion
export { l as VerticalOverflowList };
