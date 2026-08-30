import { useEffect as e, useLayoutEffect as t, useRef as n, useState as r } from "react";
//#region src/patterns/OneDataCollection/hooks/useAutoPerPage.ts
function i(e, t) {
	if (!t || e.paginationType !== "pages") return !1;
	let n = e.perPage;
	return n === "auto" || n === void 0;
}
var a = 30, o = 10, s = 108, c = (e) => Math.min(30, Math.max(1, e));
function l(e = 48) {
	return s + 10 * e;
}
function u(e) {
	let t = Array.from(e.querySelectorAll("*")).filter((e) => {
		let t = getComputedStyle(e).overflowY;
		return t === "auto" || t === "scroll";
	});
	return t.length === 0 ? null : t.reduce((e, t) => t.scrollHeight > e.scrollHeight ? t : e);
}
function d(i, a, { rowHeight: o = 48, ready: l = !0, measureKey: d } = {}) {
	let [f, p] = r(void 0), m = n(void 0), h = n(!1);
	return t(() => {
		if (!a) {
			p(void 0), m.current = void 0, h.current = !1;
			return;
		}
		let e = i.current;
		if (!e) return;
		let t = e.clientHeight - s, n = c(Math.floor(t / o));
		m.current = n, h.current = !1, p(n);
	}, [
		a,
		o,
		d,
		i
	]), e(() => {
		if (!a || !l || h.current) return;
		let e = setTimeout(() => {
			let e = i.current, t = m.current;
			if (!e || t === void 0 || h.current) return;
			let n = u(e);
			if (!n || n.clientHeight === 0 || n.scrollHeight === 0) return;
			h.current = !0;
			let r = c(Math.floor(t * n.clientHeight / n.scrollHeight));
			p((e) => e === r ? e : r);
		}, 0);
		return () => clearTimeout(e);
	}, [
		a,
		l,
		f,
		d,
		i
	]), a ? f : void 0;
}
//#endregion
export { a as AUTO_PER_PAGE_MAX, o as AUTO_PER_PAGE_MIN_RESERVED_ROWS, l as getAutoPerPageMinHeight, i as shouldAutoSizePerPage, d as useAutoPerPage };
