import { collectExpandableNodeIds as e, computeExpandedByDepth as t } from "../utils.js";
import { useCallback as n, useEffect as r, useRef as i, useState as a } from "react";
//#region src/patterns/F0Graph/hooks/useExpandState.ts
function o({ roots: o, nodeMap: s, isLazyMode: c, lazyTree: l, controlledExpanded: u, defaultExpandedNodes: d, defaultExpandDepth: f, onExpandToggle: p, onExpandedNodesChange: m }) {
	let h = i(null);
	h.current === null && (h.current = d || (f === void 0 ? new Set(o.map((e) => e.id)) : t(o, f)));
	let [g, _] = a(() => h.current), v = u ?? g, y = u !== void 0, b = i(null), x = i(v);
	r(() => {
		x.current = v;
	}, [v]);
	let S = i(s);
	r(() => {
		S.current = s;
	}, [s]);
	let C = i(l);
	r(() => {
		C.current = l;
	}, [l]);
	let w = n((e) => {
		let t = x.current, n = t.has(e), r = new Set(t);
		if (n) {
			r.delete(e);
			let t = (e) => {
				for (let n of e.children) r.delete(n.id), t(n);
			}, n = S.current.get(e);
			n && t(n);
		} else r.add(e);
		if (b.current = e, y || _(r), c && !n) {
			let t = S.current.get(e);
			t && !t.childrenLoaded && C.current.expandNode(e);
		}
		p?.(e, !n), m?.(r);
	}, [
		y,
		p,
		m,
		c
	]), T = i(o);
	r(() => {
		T.current = o;
	}, [o]);
	let E = i(l.nodes);
	return r(() => {
		E.current = l.nodes;
	}, [l.nodes]), {
		expandedNodes: v,
		expandedNodesRef: x,
		anchorNodeRef: b,
		toggleExpand: w,
		expandAll: n(async () => {
			if (!c) {
				let t = e(T.current);
				y || _(t), m?.(t);
				return;
			}
			let t = new Set(x.current), n = /* @__PURE__ */ new Set(), r = [];
			for (let e of E.current) e.parentId === null && (e.childrenCount ?? 0) > 0 && (r.push(e.id), n.add(e.id));
			for (; r.length > 0;) {
				for (let e of r) t.add(e);
				let e = await Promise.all(r.map((e) => C.current.expandNode(e).then((t) => ({
					id: e,
					children: t
				})).catch(() => ({
					id: e,
					children: []
				})))), i = [];
				for (let { children: t } of e) for (let e of t) n.has(e.id) || (n.add(e.id), (e.childrenCount ?? 0) > 0 && i.push(e.id));
				r = i;
			}
			y || _(t), m?.(t);
		}, [
			c,
			y,
			m
		]),
		collapseAll: n(() => {
			let e = /* @__PURE__ */ new Set();
			y || _(e), m?.(e);
		}, [y, m])
	};
}
//#endregion
export { o as useExpandState };
