import { o as e } from "./tooltip-BPSwDQpD.js";
import { J as t } from "./F0Select-_dXXh4fu.js";
import { useCallback as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
//#region src/hooks/datasource/itemNeighbors/resolveItemNeighbors.ts
function s(e) {
	if (t(e)) {
		let t = !1, n = null;
		return {
			promise: new Promise((r, i) => {
				n = e.subscribe({
					next: (e) => {
						t || e.loading || (e.error ? (n?.unsubscribe(), i(e.error)) : e.data !== void 0 && e.data !== null && (n?.unsubscribe(), r(e.data)));
					},
					error: (e) => {
						t || i(e);
					}
				});
			}),
			cancel: () => {
				t = !0, n?.unsubscribe();
			}
		};
	}
	let n = !1;
	return {
		promise: new Promise((t, r) => {
			Promise.resolve(e).then((e) => {
				n || t(e);
			}, (e) => {
				n || r(e);
			});
		}),
		cancel: () => {
			n = !0;
		}
	};
}
//#endregion
//#region src/hooks/datasource/itemNeighbors/useItemNeighbors.ts
var c = (e) => {
	if (Array.isArray(e)) return `[${e.map(c).join(",")}]`;
	if (typeof e == "object" && e) {
		let t = e;
		return `{${Object.keys(t).sort().map((e) => `${JSON.stringify(e)}:${c(t[e])}`).join(",")}}`;
	}
	return JSON.stringify(e) ?? "undefined";
}, l = 50;
function u({ dataAdapter: e, id: t, filters: n, sortings: i, search: u, enabled: d = !0, fetchParamsProvider: f, onError: p }) {
	let m = e.fetchItemNeighbors !== void 0, h = {
		filters: n,
		sortings: i,
		search: u
	}, g = f ? f(h) : h, _ = c(g), v = t === null ? null : `${String(t)}|${_}`, [y, b] = o(null), [x, S] = o(!1), [C, w] = o(null), T = a(e);
	T.current = e;
	let E = a(p);
	E.current = p;
	let D = a(g);
	D.current = g;
	let O = a(null), k = a(null), A = a(/* @__PURE__ */ new Map()), j = a(_);
	j.current !== _ && (j.current = _, A.current.clear()), r(() => {
		if (O.current = v, k.current?.(), k.current = null, !d || v === null || t === null) {
			S(!1);
			return;
		}
		let e = T.current.fetchItemNeighbors;
		if (!e) {
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
		let { promise: r, cancel: i } = s(e({
			...D.current,
			id: t
		}));
		return k.current = i, r.then((e) => {
			if (O.current === v) {
				if (A.current.set(v, e), A.current.size > l) {
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
		t
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
//#region src/hooks/datasource/useDataSourceItemNavigation/resolveWindowNeighbors.ts
function d({ records: e, activeItemId: t, idProvider: n }) {
	if (t == null) return {
		activeIndex: -1,
		activeItem: null,
		previousItem: null,
		nextItem: null,
		resolvedBy: "window"
	};
	let r = e.findIndex((e, r) => n(e, r) === t);
	return {
		activeIndex: r,
		activeItem: r >= 0 ? e[r] : null,
		previousItem: r > 0 ? e[r - 1] : null,
		nextItem: r >= 0 && r < e.length - 1 ? e[r + 1] : null,
		resolvedBy: "window"
	};
}
//#endregion
//#region src/hooks/datasource/useDataSourceItemNavigation/useDataSourceItemNavigation.ts
var f = (e, t) => "id" in e && (typeof e.id == "string" || typeof e.id == "number" || typeof e.id == "symbol") ? e.id : t ?? JSON.stringify(e);
function p(t) {
	let { dataSource: s, data: c, paginationInfo: l, setPage: u, loadMore: p, isLoading: m, idProvider: h, itemUrl: g, activeItemId: _, defaultActiveItemId: v, onActiveItemChange: y } = t, b = i(() => h || (s.idProvider ? (e, t) => s.idProvider(e, t) : f), [h, s.idProvider]), [x, S] = e({
		prop: _,
		defaultProp: v ?? null,
		onChange: (e) => y?.(e ?? null)
	}), C = x ?? null, w = a(null), T = a(!1), E = a(null), [D, O] = o(!1), k = n(() => {
		E.current !== null && (clearTimeout(E.current), E.current = null);
	}, []), A = n(() => {
		k(), w.current = null, T.current = !1, O(!1);
	}, [k]), j = n((e) => {
		A(), S(e);
	}, [A, S]), M = c.records, N = a(M), P = a(m), F = a(l), I = a(b), L = a(j);
	N.current = M, P.current = m, F.current = l, I.current = b, L.current = j;
	let R = n(() => {
		k(), E.current = setTimeout(() => {
			if (E.current = null, w.current === null || T.current || P.current) return;
			let e = w.current;
			if (e.type === "first" || e.type === "last") {
				let t = F.current;
				if (t?.type === "pages") {
					if (t.currentPage === e.targetPage) return;
					A();
				}
			} else if (e.type === "next-after-current") {
				let t = N.current;
				if (t.length > e.loadedItemsCount) {
					let n = e.previousId == null ? -1 : t.findIndex((t, n) => I.current(t, n) === e.previousId), r = t[n + 1];
					r && L.current(I.current(r, n + 1));
				}
			}
			A();
		}, 0);
	}, [A, k]);
	r(() => k, [k]), r(() => {
		!D || w.current === null || R();
	}, [D, R]);
	let { activeIndex: z, activeItem: B, previousItem: V, nextItem: H } = i(() => d({
		records: M,
		activeItemId: C,
		idProvider: b
	}), [
		M,
		C,
		b
	]), U = i(() => z === -1 || !l ? null : l.type === "pages" ? (l.currentPage - 1) * l.perPage + z : z, [z, l]), W = i(() => l ? l.type === "pages" ? l.currentPage < l.pagesCount : l.type === "infinite-scroll" && l.hasMore : !1, [l]), G = i(() => l ? l.type === "pages" && l.currentPage > 1 : !1, [l]), K = i(() => z === -1 ? !1 : z < M.length - 1 || W, [
		z,
		M.length,
		W
	]), q = i(() => z === -1 ? !1 : z > 0 || G, [z, G]), J = n(() => {
		if (!(w.current !== null || m) && z !== -1) {
			if (z < M.length - 1) {
				let e = M[z + 1];
				j(b(e, z + 1));
				return;
			}
			if (!(!W || !l)) {
				if (l.type === "pages") {
					w.current = {
						type: "first",
						targetPage: l.currentPage + 1
					}, O(!0);
					try {
						u(l.currentPage + 1);
					} catch (e) {
						throw A(), e;
					}
				} else l.type === "infinite-scroll" && (w.current = {
					type: "next-after-current",
					previousId: C,
					loadedItemsCount: M.length
				}, O(!0), p());
			}
		}
	}, [
		z,
		C,
		m,
		M,
		W,
		l,
		u,
		p,
		b,
		j,
		A
	]), Y = n(() => {
		if (!(w.current !== null || m) && z !== -1) {
			if (z > 0) {
				let e = M[z - 1];
				j(b(e, z - 1));
				return;
			}
			if (!(!G || !l) && l.type === "pages") {
				w.current = {
					type: "last",
					targetPage: l.currentPage - 1
				}, O(!0);
				try {
					u(l.currentPage - 1);
				} catch (e) {
					throw A(), e;
				}
			}
		}
	}, [
		z,
		m,
		M,
		G,
		l,
		u,
		b,
		j,
		A
	]);
	r(() => {
		if (w.current === null) return;
		if (m) {
			T.current = !0;
			return;
		}
		if (M.length === 0) {
			A();
			return;
		}
		let e = w.current;
		if (e.type === "first") {
			if (l?.type === "pages" && l.currentPage !== e.targetPage) {
				T.current && A();
				return;
			}
			let t = M[0];
			j(b(t, 0));
		} else if (e.type === "last") {
			if (l?.type === "pages" && l.currentPage !== e.targetPage) {
				T.current && A();
				return;
			}
			let t = M[M.length - 1];
			j(b(t, M.length - 1));
		} else if (e.type === "next-after-current") {
			if (M.length <= e.loadedItemsCount) {
				T.current && A();
				return;
			}
			if (e.previousId != null) {
				let t = M.findIndex((t, n) => b(t, n) === e.previousId);
				if (t >= 0 && t < M.length - 1) {
					let e = M[t + 1];
					j(b(e, t + 1));
				} else {
					A();
					return;
				}
			}
		}
		A();
	}, [
		M,
		m,
		l,
		b,
		j,
		A
	]);
	let X = D || w.current !== null && m, Z = i(() => !g || !H ? null : g(H) ?? null, [g, H]), Q = i(() => !g || !B ? null : g(B) ?? null, [g, B]), $ = i(() => !g || !V ? null : g(V) ?? null, [g, V]);
	return {
		activeItemId: C,
		activeItem: B,
		activeIndex: z,
		absoluteIndex: U,
		loadedItemsCount: M.length,
		totalItems: l?.total,
		previousItem: V,
		nextItem: H,
		activeItemUrl: Q,
		goToNext: J,
		goToPrevious: Y,
		hasNext: K,
		hasPrevious: q,
		setActiveItemId: j,
		isNavigating: X,
		nextItemUrl: Z,
		previousItemUrl: $
	};
}
//#endregion
export { s as a, u as i, p as n, d as r, f as t };
