import { useCallback as e, useEffect as t, useMemo as n, useRef as r, useState as i } from "react";
import { useResizeObserver as a } from "usehooks-ts";
//#region src/ui/OverflowList/useOverflowCalculation.ts
var o = 20;
function s(s, c, l) {
	let u = r(null), d = r(null), f = r(null), p = r(null), m = r(null), [h, g] = i(null), [_, v] = i(!1);
	a({
		ref: u,
		onResize: () => {
			x();
		}
	});
	let y = e(() => {
		if (l?.itemsWidth) return Array.isArray(l.itemsWidth) ? l.itemsWidth : Array(s.length).fill(l.itemsWidth);
		if (!p.current) return [];
		let e = p.current.children, t = [];
		for (let n = 0; n < e.length; n++) {
			let r = e[n].getBoundingClientRect().width;
			t.push(r);
		}
		return t;
	}, [l?.itemsWidth, s.length]), b = e(({ itemWidths: e, availableWidth: t }) => {
		let n = 0, r = 0;
		for (let i = 0; i < e.length; i++) {
			let a = r + e[i];
			if (a > t) break;
			r = a, n++;
		}
		return Math.max(l?.min ?? 0, Math.min(n, l?.max ?? s.length));
	}, [
		l?.max,
		l?.min,
		s.length
	]), x = e(() => {
		if (s.length === 0 || !u.current) return;
		let e = u.current.clientWidth, t = d.current?.offsetWidth || f.current?.offsetWidth || 32, n = y(), r = n.map((e) => e + c), i = e - t - c, a = b({
			itemWidths: r,
			availableWidth: i
		});
		a >= s.length && (l?.max === void 0 || s.length <= l.max) && (a = b({
			itemWidths: r,
			availableWidth: e
		}));
		let p = a >= s.length ? e : i, h = m.current;
		if (h !== null && a > h) {
			let e = b({
				itemWidths: r,
				availableWidth: p - o
			});
			e < a && (a = Math.max(e, h));
		}
		m.current = a, s.length - a === 1 && a > 0 && n.length > 0 && t === n[n.length - 1] - c && (a = s.length), g(a);
	}, [
		s,
		c,
		y,
		b,
		l?.max
	]);
	t(() => {
		m.current = null;
	}, [s.length]), t(() => {
		x();
	}, [x]), t(() => {
		v(!0);
	}, []);
	let { visibleItems: S, overflowItems: C } = n(() => h === null ? {
		visibleItems: [],
		overflowItems: []
	} : {
		visibleItems: s.slice(0, h),
		overflowItems: s.slice(h)
	}, [s, h]);
	return {
		containerRef: u,
		overflowButtonRef: d,
		customOverflowIndicatorRef: f,
		measurementContainerRef: p,
		visibleItems: S,
		overflowItems: C,
		isInitialized: _
	};
}
//#endregion
export { s as useOverflowCalculation };
