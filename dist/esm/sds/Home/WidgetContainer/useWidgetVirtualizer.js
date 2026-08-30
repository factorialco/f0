import { useCallback as e, useLayoutEffect as t, useRef as n, useState as r } from "react";
import { defaultRangeExtractor as i, useVirtualizer as a } from "@tanstack/react-virtual";
//#region src/sds/Home/WidgetContainer/useWidgetVirtualizer.ts
var o = 12, s = 280, c = 2, l = /* @__PURE__ */ new Set([
	"auto",
	"scroll",
	"overlay"
]), u = (e) => {
	let t = e.parentElement;
	for (; t && t !== document.body && t !== document.documentElement;) {
		if (l.has(getComputedStyle(t).getPropertyValue("overflow-y"))) return t;
		t = t.parentElement;
	}
	return null;
};
function d({ config: l, count: d, gap: f, pinned: p = [], paused: m = !1 }) {
	let h = l === !1 ? null : l, [g, _] = r(null), [v, y] = r(null), b = h?.scrollElement ?? v, x = h != null && !m, S = h?.scrollElement != null;
	t(() => {
		!x || S || !g || y(u(g));
	}, [
		x,
		S,
		g
	]);
	let [C, w] = r(0);
	t(() => {
		if (!x || !g || !b) return;
		let e = () => {
			let e = g.getBoundingClientRect().top - b.getBoundingClientRect().top + b.scrollTop;
			w((t) => Math.abs(t - e) < 1 ? t : e);
		};
		if (e(), typeof ResizeObserver != "function") return;
		let t = new ResizeObserver(e);
		return t.observe(b), g.parentElement && t.observe(g.parentElement), () => t.disconnect();
	}, [
		x,
		g,
		b
	]);
	let T = x && b != null && d >= (h?.threshold ?? o), E = n(p);
	E.current = p;
	let D = p.join(","), O = e((e) => {
		let t = new Set(i(e));
		for (let n of E.current) n >= 0 && n < e.count && t.add(n);
		return [...t].sort((e, t) => e - t);
	}, [D]), k = a({
		enabled: T,
		count: d,
		gap: f,
		scrollMargin: C,
		rangeExtractor: O,
		overscan: h?.overscan ?? c,
		estimateSize: () => h?.estimateHeight ?? s,
		getScrollElement: () => b
	});
	return {
		listRef: _,
		measureRef: k.measureElement,
		window: T ? {
			placements: k.getVirtualItems().map(({ index: e, start: t }) => ({
				index: e,
				start: t - C
			})),
			totalSize: k.getTotalSize()
		} : null
	};
}
//#endregion
export { d as useWidgetVirtualizer };
