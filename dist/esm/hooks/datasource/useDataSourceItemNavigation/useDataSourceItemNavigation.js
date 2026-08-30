import { resolveWindowNeighbors as e } from "./resolveWindowNeighbors.js";
import { useCallback as t, useEffect as n, useMemo as r, useRef as i, useState as a } from "react";
import { useControllableState as o } from "@radix-ui/react-use-controllable-state";
//#region src/hooks/datasource/useDataSourceItemNavigation/useDataSourceItemNavigation.ts
var s = (e, t) => "id" in e && (typeof e.id == "string" || typeof e.id == "number" || typeof e.id == "symbol") ? e.id : t ?? JSON.stringify(e);
function c(c) {
	let { dataSource: l, data: u, paginationInfo: d, setPage: f, loadMore: p, isLoading: m, idProvider: h, itemUrl: g, activeItemId: _, defaultActiveItemId: v, onActiveItemChange: y } = c, b = r(() => h || (l.idProvider ? (e, t) => l.idProvider(e, t) : s), [h, l.idProvider]), [x, S] = o({
		prop: _,
		defaultProp: v ?? null,
		onChange: (e) => y?.(e ?? null)
	}), C = x ?? null, w = i(null), T = i(!1), E = i(null), [D, O] = a(!1), k = t(() => {
		E.current !== null && (clearTimeout(E.current), E.current = null);
	}, []), A = t(() => {
		k(), w.current = null, T.current = !1, O(!1);
	}, [k]), j = t((e) => {
		A(), S(e);
	}, [A, S]), M = u.records, N = i(M), P = i(m), F = i(d), I = i(b), L = i(j);
	N.current = M, P.current = m, F.current = d, I.current = b, L.current = j;
	let R = t(() => {
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
	n(() => k, [k]), n(() => {
		!D || w.current === null || R();
	}, [D, R]);
	let { activeIndex: z, activeItem: B, previousItem: V, nextItem: H } = r(() => e({
		records: M,
		activeItemId: C,
		idProvider: b
	}), [
		M,
		C,
		b
	]), U = r(() => z === -1 || !d ? null : d.type === "pages" ? (d.currentPage - 1) * d.perPage + z : z, [z, d]), W = r(() => d ? d.type === "pages" ? d.currentPage < d.pagesCount : d.type === "infinite-scroll" && d.hasMore : !1, [d]), G = r(() => d ? d.type === "pages" && d.currentPage > 1 : !1, [d]), K = r(() => z === -1 ? !1 : z < M.length - 1 || W, [
		z,
		M.length,
		W
	]), q = r(() => z === -1 ? !1 : z > 0 || G, [z, G]), J = t(() => {
		if (!(w.current !== null || m) && z !== -1) {
			if (z < M.length - 1) {
				let e = M[z + 1];
				j(b(e, z + 1));
				return;
			}
			if (!(!W || !d)) {
				if (d.type === "pages") {
					w.current = {
						type: "first",
						targetPage: d.currentPage + 1
					}, O(!0);
					try {
						f(d.currentPage + 1);
					} catch (e) {
						throw A(), e;
					}
				} else d.type === "infinite-scroll" && (w.current = {
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
		d,
		f,
		p,
		b,
		j,
		A
	]), Y = t(() => {
		if (!(w.current !== null || m) && z !== -1) {
			if (z > 0) {
				let e = M[z - 1];
				j(b(e, z - 1));
				return;
			}
			if (!(!G || !d) && d.type === "pages") {
				w.current = {
					type: "last",
					targetPage: d.currentPage - 1
				}, O(!0);
				try {
					f(d.currentPage - 1);
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
		d,
		f,
		b,
		j,
		A
	]);
	n(() => {
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
			if (d?.type === "pages" && d.currentPage !== e.targetPage) {
				T.current && A();
				return;
			}
			let t = M[0];
			j(b(t, 0));
		} else if (e.type === "last") {
			if (d?.type === "pages" && d.currentPage !== e.targetPage) {
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
		d,
		b,
		j,
		A
	]);
	let X = D || w.current !== null && m, Z = r(() => !g || !H ? null : g(H) ?? null, [g, H]), Q = r(() => !g || !B ? null : g(B) ?? null, [g, B]), $ = r(() => !g || !V ? null : g(V) ?? null, [g, V]);
	return {
		activeItemId: C,
		activeItem: B,
		activeIndex: z,
		absoluteIndex: U,
		loadedItemsCount: M.length,
		totalItems: d?.total,
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
export { s as defaultIdProvider, c as useDataSourceItemNavigation };
