import { promiseToObservable as e } from "../../lib/promise-to-observable.js";
import { getValueByPath as t } from "../../lib/objectPaths.js";
import { groupBy as n } from "./utils.js";
import { useCallback as r, useDeferredValue as i, useEffect as a, useMemo as o, useRef as s, useState as c } from "react";
//#region src/hooks/datasource/useData.ts
var l = Symbol("groupId");
function u() {
	let [e, t] = c(!0), [n, r] = c([]), [i, a] = c(null);
	return {
		isInitialLoading: e,
		setIsInitialLoading: t,
		data: n,
		setData: r,
		error: i,
		setError: a
	};
}
function d() {
	let [e, t] = c(null);
	return {
		paginationInfo: e,
		setPaginationInfo: t
	};
}
var ee = (e) => e, te = (e, t) => "id" in e ? `${e.id}` : t || JSON.stringify(e);
function f(f, { filters: h, enabled: g = !0, onError: ne, fetchParamsProvider: re = ee, onResponse: ie } = {}, _ = []) {
	let { dataAdapter: v, currentFilters: y, currentSortings: b, search: x, currentSearch: S, setCurrentSearch: ae, isLoading: C, setIsLoading: w, currentGrouping: T, grouping: E, idProvider: oe = te, itemPreFilter: D, currentPage: se, onPaginationChange: O } = f, k = s(), { isInitialLoading: ce, setIsInitialLoading: A, data: j, setData: M, error: le, setError: N } = u(), [ue, de] = c(0), { paginationInfo: P, setPaginationInfo: F } = d();
	a(() => {
		D && M((e) => {
			let t = e.length, n = e.filter(D), r = t - n.length;
			return de(r), F((e) => e ? {
				...e,
				total: e.total - r
			} : null), n;
		});
	}, [
		D,
		M,
		F
	]);
	let I = s(P);
	a(() => {
		I.current = P;
	}, [P]);
	let [L, R] = c(void 0), [z, B] = c(!1), [fe, V] = c(void 0), H = s(!1), U = s(j);
	U.current = j;
	let W = s(void 0), G = s(void 0), K = s(se);
	a(() => {
		O?.(P);
	}, [P, O]);
	let q = o(() => ({
		...y,
		...h
	}), [y, h]), J = i(S), Y = s(void 0);
	a(() => {
		Y.current = x?.enabled ? x?.sync ? S : J || S : void 0;
	}, [
		S,
		J,
		x?.enabled,
		x?.sync
	]);
	let X = (e, t, n) => {
		{
			let r = new Map(e.map((e, t) => [n(e, t), e]));
			for (let [e, i] of t.entries()) {
				let t = n(i, e);
				r.set(t, i);
			}
			return Array.from(r.values());
		}
	}, Z = r((e, t, n, r) => {
		ie?.(e);
		let i = [];
		if ("records" in e) {
			i = e.records;
			let n = v.paginationType;
			if (n && ["pages", "infinite-scroll"].includes(n) && n !== "no-pagination") {
				let r = {
					total: e.total,
					perPage: e.perPage
				};
				n === "pages" ? F({
					...r,
					type: "pages",
					currentPage: "currentPage" in e ? e.currentPage : 1,
					pagesCount: "pagesCount" in e ? e.pagesCount : Math.ceil(e.total / e.perPage)
				}) : n === "infinite-scroll" && F({
					...r,
					type: "infinite-scroll",
					cursor: "cursor" in e && e.cursor !== void 0 ? e.cursor : t ? String(e.perPage) : "0",
					hasMore: "hasMore" in e ? e.hasMore : j.length + e.records.length < e.total
				}), R(e.total);
			}
		} else i = e, R?.(e.length);
		M(t ? (e) => X(e, i, oe) : i), N(null), A(!1), w(!!n), B(!1), H.current = !1, r !== void 0 && V(r);
	}, [
		M,
		v,
		F,
		N,
		A,
		w,
		B,
		R,
		H,
		V
	]), pe = o(() => {
		let e = j.map((e) => ({
			...e,
			[l]: T?.field && t(e, T.field) || void 0
		}));
		if (T && T.field && E && E.groupBy[T.field]) {
			let t = n(e, l), r = T.field, i = E.groupBy[r];
			return {
				type: "grouped",
				records: e,
				groups: Array.from(t.entries()).map(([e, t]) => ({
					key: e,
					label: i.label(e, q),
					itemCount: i.itemCount?.(e, q),
					records: t
				}))
			};
		}
		return {
			type: "flat",
			records: e,
			groups: [{
				key: "all",
				label: "All",
				itemCount: e.length,
				records: e
			}]
		};
	}, [
		j,
		T,
		E,
		q
	]), Q = r((e) => {
		N({
			message: "Error fetching data",
			cause: e
		}), ne?.({
			message: "Error fetching data",
			cause: e
		}), A(!1), w(!1), B(!1), k.current = void 0, H.current = !1;
	}, [
		N,
		A,
		w
	]), $ = r(async ({ filters: t, currentPage: n = 1, search: r, appendMode: i = !1, cursor: a = null }) => {
		try {
			k.current &&= (k.current(), void 0);
			let o = [...b ? [{
				field: b.field,
				order: b.order
			}] : [], ...T ? [{
				field: T.field,
				order: T.order ?? "asc"
			}] : []], s = re({
				filters: t,
				search: r,
				sortings: o
			}), c = JSON.stringify({
				filters: t,
				search: r,
				sortings: o,
				currentPage: n,
				cursor: a
			});
			function l() {
				R(void 0);
				let e = "perPage" in v && typeof v.perPage == "number" ? v.perPage : 20;
				return v.fetchData({
					...s,
					pagination: { ...v.paginationType === "pages" ? {
						currentPage: n,
						perPage: e
					} : v.paginationType === "infinite-scroll" ? {
						cursor: a,
						perPage: e
					} : {} }
				});
			}
			let u = l();
			if (!("then" in u || "subscribe" in u)) {
				Z(u, i, void 0, c);
				return;
			}
			let d = ("subscribe" in u ? u : e(u)).subscribe({
				next: (e) => {
					e.data ? Z(e.data, i, e.loading, c) : e.loading ? w(!0) : e.error && Q(e.error);
				},
				error: Q,
				complete: () => {
					k.current = void 0;
				}
			});
			k.current = () => d.unsubscribe();
		} catch (e) {
			Q(e);
		}
	}, [
		Q,
		v,
		b,
		T,
		Z,
		w,
		..._
	]), me = r((e) => {
		p(P) && (w(!0), $({
			filters: q,
			currentPage: e,
			search: Y.current
		}));
	}, [
		Y.current,
		$,
		q,
		w,
		P,
		..._
	]), he = r(() => {
		let e = I.current;
		if (!(!e || C || z)) {
			if (!m(e)) {
				console.warn("loadMore is only applicable for infinite-scroll pagination type");
				return;
			}
			if (e.hasMore) {
				let t = e.cursor;
				B(!0), w(!0), H.current = !0, $({
					filters: q,
					appendMode: !0,
					cursor: t,
					search: Y.current
				});
			}
		}
	}, [
		$,
		C,
		q,
		I.current,
		Y.current,
		z,
		w,
		B,
		..._
	]);
	return a(() => {
		if (g && !H.current) {
			let e = "perPage" in v && typeof v.perPage == "number" ? v.perPage : void 0, t = I.current, n = JSON.stringify({
				filters: q,
				sortings: b,
				grouping: T,
				search: Y.current,
				paginationType: v.paginationType
			});
			if (v.paginationType === "pages" && e !== void 0 && n === W.current && G.current !== void 0 && e < G.current && p(t) && t.currentPage === 1 && U.current.length >= e) {
				G.current = e, M((t) => t.slice(0, e)), F((t) => t && t.type === "pages" ? {
					...t,
					perPage: e,
					pagesCount: Math.max(1, Math.ceil(t.total / e))
				} : t);
				return;
			}
			W.current = n, G.current = e, w(!0);
			let r = K.current;
			K.current = void 0;
			let i = v.paginationType === "infinite-scroll" ? 0 : r ?? 1;
			$({
				filters: q,
				currentPage: i,
				search: Y.current,
				cursor: v.paginationType === "infinite-scroll" ? "0" : null
			});
		}
	}, [
		$,
		q,
		w,
		g,
		v.paginationType,
		Y.current,
		..._
	]), a(() => () => {
		k.current?.(), w(!1);
	}, [w]), {
		data: pe,
		search: S,
		setSearch: ae,
		isInitialLoading: ce,
		isLoading: C,
		isLoadingMore: z,
		error: le,
		paginationInfo: P,
		setPage: me,
		loadMore: he,
		mergedFilters: q,
		totalItems: L ? L - ue : 0,
		committedQuery: fe
	};
}
function p(e) {
	return e !== null && e.type === "pages";
}
function m(e) {
	return e !== null && e.type === "infinite-scroll";
}
//#endregion
export { l as GROUP_ID_SYMBOL, m as isInfiniteScrollPagination, p as isPageBasedPagination, f as useData };
