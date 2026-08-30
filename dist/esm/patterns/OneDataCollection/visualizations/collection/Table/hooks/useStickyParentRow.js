import { findScrollContainer as e } from "../lib/scroll.js";
import { useLayoutEffect as t, useState as n } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/hooks/useStickyParentRow.ts
var r = (r, i, a, o) => {
	let [s, c] = n(!1), l = o?.stickyTopOffset ?? 40;
	return t(() => {
		if (!r) {
			c(!1);
			return;
		}
		let t = i.current;
		if (!t) {
			c(!0);
			return;
		}
		let n = e(t);
		if (!n) {
			c(!0);
			return;
		}
		let o, s = () => {
			let e = a.current;
			if (!e) {
				c(!0);
				return;
			}
			let r = n.getBoundingClientRect().top + l + t.offsetHeight, i = e.getBoundingClientRect().top > r;
			c((e) => e === i ? e : i);
		}, u = () => {
			o !== void 0 && cancelAnimationFrame(o), o = requestAnimationFrame(s);
		};
		n.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", u);
		let d = new ResizeObserver(u);
		d.observe(t);
		let f = a.current;
		return f && d.observe(f), s(), () => {
			n.removeEventListener("scroll", u), window.removeEventListener("resize", u), d.disconnect(), o !== void 0 && cancelAnimationFrame(o);
		};
	}, [
		r,
		i,
		a,
		l
	]), { isSticky: s };
};
//#endregion
export { r as useStickyParentRow };
