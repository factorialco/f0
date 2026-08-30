import { useEffect as e, useRef as t } from "react";
//#region src/patterns/F0Graph/hooks/useViewportDataLoader.ts
function n({ nodeIds: n, loadVisibleNodeData: r, debounceMs: i = 200, enabled: a = !0 }) {
	let o = t(/* @__PURE__ */ new Set()), s = t(/* @__PURE__ */ new Set()), c = t(/* @__PURE__ */ new Set()), l = t(null), u = t(r);
	u.current = r, e(() => {
		if (c.current = new Set(n), !r || !a) return;
		let e = !1;
		for (let t of n) !o.current.has(t) && !s.current.has(t) && (s.current.add(t), e = !0);
		s.current.size !== 0 && (!e && l.current !== null || (l.current && clearTimeout(l.current), l.current = setTimeout(() => {
			l.current = null;
			let e = c.current, t = [];
			for (let n of s.current) e.has(n) && (t.push(n), o.current.add(n));
			s.current.clear(), t.length > 0 && u.current?.(t);
		}, i)));
	}, [
		n,
		r,
		i,
		a
	]), e(() => () => {
		l.current && clearTimeout(l.current), l.current = null;
	}, []);
}
//#endregion
export { n as useViewportDataLoader };
