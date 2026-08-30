import { useEffect as e, useMemo as t, useRef as n, useState as r } from "react";
//#region src/patterns/F0Graph/hooks/useDeferredMerge.ts
function i(i) {
	let { initialNodes: s, initialEdges: c, deferredNodes: l } = i, [u, d] = r(null), [f, p] = r(l ? "loading" : "idle"), [m, h] = r(null), g = n(l), _ = n(!0);
	return e(() => () => {
		_.current = !1;
	}, []), e(() => {
		if (g.current = l, !l) {
			p("idle"), d(null), h(null);
			return;
		}
		p("loading"), h(null), d(null);
		let e = typeof l == "function" ? l() : l, t = l;
		e.then((e) => {
			_.current && g.current === t && (d(e), p("resolved"));
		}, (e) => {
			_.current && g.current === t && (h(e instanceof Error ? e : Error(String(e))), p("error"));
		});
	}, [l]), {
		mergedNodes: t(() => a(s, u?.nodes), [s, u]),
		mergedEdges: t(() => o(c, u?.edges), [c, u]),
		deferredStatus: f,
		error: m
	};
}
function a(e, t) {
	if (!t || t.length === 0) return e;
	let n = /* @__PURE__ */ new Map();
	for (let t of e) n.set(t.id, t);
	for (let e of t) n.set(e.id, e);
	return Array.from(n.values());
}
function o(e, t) {
	if (!t || t.length === 0) return e;
	let n = /* @__PURE__ */ new Map();
	for (let t of e) n.set(t.id, t);
	for (let e of t) n.set(e.id, e);
	return Array.from(n.values());
}
//#endregion
export { i as useDeferredMerge };
