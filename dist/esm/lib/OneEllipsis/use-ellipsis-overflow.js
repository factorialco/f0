import { useEffect as e, useState as t } from "react";
//#region src/lib/OneEllipsis/use-ellipsis-overflow.ts
var n = (e, t) => {
	if (t > 1) {
		let n = parseInt(window.getComputedStyle(e).lineHeight);
		return e.scrollHeight > n * t;
	}
	return e.scrollWidth > e.clientWidth;
};
function r({ disabled: r, lines: i, onChange: a, ref: o }) {
	let [s, c] = t(!1);
	return e(function() {
		let e = o?.current;
		if (!e) return;
		if (r) {
			c(!1), a?.(!1);
			return;
		}
		let t = () => {
			let t = n(e, i);
			c(t), a?.(t);
		};
		t();
		let s = requestAnimationFrame(t), l = setTimeout(t, 100), u = new ResizeObserver(t);
		return u.observe(e), () => {
			cancelAnimationFrame(s), clearTimeout(l), u.disconnect();
		};
	}, [
		r,
		i,
		a,
		o
	]), s;
}
//#endregion
export { r as useEllipsisOverflow };
