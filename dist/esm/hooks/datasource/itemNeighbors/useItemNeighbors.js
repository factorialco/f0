import { resolveItemNeighbors as e } from "./resolveItemNeighbors.js";
import { useEffect as t, useRef as n, useState as r } from "react";
//#region src/hooks/datasource/itemNeighbors/useItemNeighbors.ts
var i = (e) => {
	if (Array.isArray(e)) return `[${e.map(i).join(",")}]`;
	if (typeof e == "object" && e) {
		let t = e;
		return `{${Object.keys(t).sort().map((e) => `${JSON.stringify(e)}:${i(t[e])}`).join(",")}}`;
	}
	return JSON.stringify(e) ?? "undefined";
}, a = 50;
function o({ dataAdapter: o, id: s, filters: c, sortings: l, search: u, enabled: d = !0, fetchParamsProvider: f, onError: p }) {
	let m = o.fetchItemNeighbors !== void 0, h = {
		filters: c,
		sortings: l,
		search: u
	}, g = f ? f(h) : h, _ = i(g), v = s === null ? null : `${String(s)}|${_}`, [y, b] = r(null), [x, S] = r(!1), [C, w] = r(null), T = n(o);
	T.current = o;
	let E = n(p);
	E.current = p;
	let D = n(g);
	D.current = g;
	let O = n(null), k = n(null), A = n(/* @__PURE__ */ new Map()), j = n(_);
	j.current !== _ && (j.current = _, A.current.clear()), t(() => {
		if (O.current = v, k.current?.(), k.current = null, !d || v === null || s === null) {
			S(!1);
			return;
		}
		let t = T.current.fetchItemNeighbors;
		if (!t) {
			S(!1);
			return;
		}
		let n = A.current.get(v);
		if (n) {
			b({
				key: v,
				neighbors: n
			}), S(!1);
			return;
		}
		S(!0);
		let { promise: r, cancel: i } = e(t({
			...D.current,
			id: s
		}));
		return k.current = i, r.then((e) => {
			if (O.current === v) {
				if (A.current.set(v, e), A.current.size > a) {
					let e = A.current.keys().next().value;
					e !== void 0 && A.current.delete(e);
				}
				b({
					key: v,
					neighbors: e
				}), S(!1);
			}
		}, (e) => {
			if (O.current !== v) return;
			let t = {
				message: "Error fetching item neighbors",
				cause: e
			};
			w({
				key: v,
				error: t
			}), S(!1), E.current?.(t);
		}), () => {
			k.current?.(), k.current = null;
		};
	}, [
		v,
		d,
		m,
		s
	]);
	let M = v !== null && d && m;
	return {
		isSupported: m,
		neighbors: M && y?.key === v ? y.neighbors : null,
		isResolving: M && x,
		error: M && C?.key === v ? C.error : null
	};
}
//#endregion
export { o as useItemNeighbors };
