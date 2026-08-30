import { subscribeToScroll as e } from "../lib/scroll.js";
import { useCallback as t, useLayoutEffect as n, useRef as r, useState as i } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/hooks/useCalculateConectorHeight.ts
var a = ({ nestedVariant: a, withHasMore: o, withAddRowActions: s, isSticky: c }) => {
	let [l, u] = i(null), [d, f] = i(null), [p, m] = i(0), h = r(null), g = r(null), _ = t((e) => {
		h.current = e, e && u(e);
	}, [u]), v = t((e) => {
		g.current = e, e && f(e);
	}, [f]);
	return n(() => {
		let t = l?.previousElementSibling;
		if (!l || !t) {
			m(0);
			return;
		}
		let n = !d || d.getBoundingClientRect().top === 0, r = () => n ? (l.getBoundingClientRect().top ?? 0) - 4 : (d?.getBoundingClientRect().top ?? 0) - 4, i = () => n ? l.getBoundingClientRect().bottom - 8 : (d?.getBoundingClientRect().bottom ?? 0) - 8, u = () => l.getBoundingClientRect().top ?? -8, f = () => t.getBoundingClientRect().height, p = () => o && a === "basic" ? 4 : 0, h = () => s && o && a === "basic" ? -4 : 0, g = () => {
			let e = (a === "basic" ? r() : i()) - u() + f() + p() + h(), n = 0;
			if (c) {
				let e = t.getBoundingClientRect().bottom, r = l.getBoundingClientRect().top;
				n = Math.max(0, e - r);
			}
			m(Math.max(0, e - n));
		};
		g();
		let _ = new MutationObserver(() => {
			g();
		}), v = l.parentElement;
		v && _.observe(v, {
			childList: !0,
			subtree: !0,
			attributes: !0
		});
		let y = new ResizeObserver(() => {
			g();
		});
		y.observe(l), d && y.observe(d);
		let b = c ? e(l, g) : void 0;
		return () => {
			_.disconnect(), y.disconnect(), b?.();
		};
	}, [
		l,
		d,
		a,
		c
	]), {
		setFirstChildRef: _,
		setLastChildRef: v,
		calculatedHeight: p
	};
};
//#endregion
export { a as useCalculateConectorHeight };
