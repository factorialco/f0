import { promiseToObservable as e } from "../../../../../../lib/promise-to-observable.js";
import { useNestedDataContext as t } from "../providers/NestedProvider.js";
import { useCallback as n, useEffect as r, useRef as i, useState as a } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/hooks/useLoadChildren.ts
var o = (e) => e ? typeof e == "object" && "type" in e && e.type === "detailed" : !1, s = (e) => e ? Array.isArray(e) ? e : e.records : [], c = (e) => e && o(e) ? e?.type ?? "basic" : "basic", l = ({ rowId: o, item: l, source: u }) => {
	let { fetchedData: d, updateFetchedData: f, resetGeneration: p } = t(), m = d?.[o], h = s(m), [g, _] = a(h), [v, y] = a(m?.paginationInfo), [b, x] = a(!1), [S, C] = a(c(m)), w = i(new Map(h.length > 0 ? [[0, h]] : [])), T = i({
		page: m?.paginationInfo?.currentPage ?? 0,
		type: c(m),
		paginationInfo: m?.paginationInfo
	}), E = i(/* @__PURE__ */ new Map()), D = i(p);
	r(() => {
		D.current !== p && (D.current = p, E.current.forEach((e) => e.unsubscribe()), E.current.clear(), w.current.clear(), T.current = {
			page: 0,
			type: "basic",
			paginationInfo: void 0
		}, _([]), y(void 0), C("basic"));
	}, [p]);
	let O = n((e, t) => {
		let n = s(t);
		w.current.set(e, n);
		let r = [...w.current.entries()].sort(([e], [t]) => e - t).flatMap(([, e]) => e);
		_(r), e >= T.current.page && (T.current = {
			page: e,
			type: c(t),
			paginationInfo: t?.paginationInfo
		}, C(T.current.type), y(T.current.paginationInfo));
		let i = {
			records: r,
			type: T.current.type,
			paginationInfo: T.current.paginationInfo
		};
		return f(o, i), n;
	}, [o, f]), k = n(() => {
		if (g.length > 0 && !v?.hasMore) return g;
		let t = (v?.currentPage ?? 0) + 1;
		E.current.get(t)?.unsubscribe(), E.current.delete(t), x(!0);
		let n = u.fetchChildren?.({
			item: l,
			filters: u.currentFilters,
			pagination: v,
			sortings: u.currentSortings
		});
		if (!n) return x(!1), [];
		if (!("then" in n) && !("subscribe" in n)) {
			let e = O(t, n);
			return x(!1), e;
		}
		let r = "subscribe" in n ? n : e(n);
		return E.current.set(t, r.subscribe({
			next: (e) => {
				e.loading ? x(!0) : e.error ? x(!1) : e.data && (O(t, e.data), x(!1));
			},
			error: (e) => {
				x(!1), console.error("Error loading children:", e);
			},
			complete: () => {
				E.current.delete(t);
			}
		})), [];
	}, [
		g,
		l,
		u,
		v,
		O
	]);
	return r(() => {
		let e = E.current;
		return () => {
			e.forEach((e) => e.unsubscribe()), e.clear();
		};
	}, []), {
		children: g,
		loadChildren: k,
		isLoading: b,
		childrenType: S,
		paginationInfo: v
	};
};
//#endregion
export { l as useLoadChildren };
