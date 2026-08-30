import { useDataCollectionData as e } from "./useDataCollectionData.js";
import { mergeFiltersWithIntersection as t } from "./utils.js";
import { useCallback as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { useDeepCompareMemoize as c } from "use-deep-compare-effect";
//#region src/patterns/OneDataCollection/hooks/useDataCollectionData/useDataCollectionLanesData.tsx
var l = ({ source: n, lane: a, onError: s, onHookUpdate: c }) => {
	let [l, u] = o(!1), d = i(() => ({
		...n,
		isLoading: l,
		setIsLoading: u
	}), [n, l]), f = i(() => t(n.currentFilters, a.filters), [n.currentFilters, a.filters]), { data: p, search: m, setSearch: h, isInitialLoading: g, isLoading: _, isLoadingMore: v, error: y, paginationInfo: b, setPage: x, loadMore: S, totalItems: C, mergedFilters: w, summaries: T, committedQuery: E } = e(d, {
		filters: f,
		onError: s
	});
	return r(() => {
		c?.(a.id, {
			data: p,
			search: m,
			setSearch: h,
			isInitialLoading: g,
			isLoading: _,
			isLoadingMore: v,
			error: y,
			paginationInfo: b,
			setPage: x,
			loadMore: S,
			totalItems: C,
			mergedFilters: w,
			summaries: T,
			committedQuery: E
		});
	}, [
		p,
		m,
		h,
		g,
		_,
		v,
		y,
		b,
		x,
		S,
		C,
		w,
		T,
		E,
		c,
		a.id
	]), null;
};
function u(e, t = {}) {
	let { lanes: u } = e;
	if (!i(() => u && u.length > 0, [u])) throw Error("Lanes has not been configured on data source");
	let [d, f] = o({}), p = a({}), m = a(!1), h = a(!1);
	r(() => (h.current = !0, () => {
		h.current = !1;
	}), []);
	let g = a(t.onError);
	r(() => {
		g.current = t.onError;
	});
	let _ = n((e) => {
		g.current?.(e);
	}, []), v = n((e, t) => {
		p.current[e] = t, !m.current && (m.current = !0, queueMicrotask(() => {
			let e = p.current;
			p.current = {}, m.current = !1, h.current && f((t) => ({
				...t,
				...e
			}));
		}));
	}, []), y = {
		lanes: u,
		currentFilters: e.currentFilters,
		currentNavigationFilters: e.currentNavigationFilters,
		currentSortings: e.currentSortings,
		currentGrouping: e.currentGrouping,
		currentSearch: e.currentSearch,
		grouping: e.grouping,
		summaries: e.summaries,
		dataAdapter: e.dataAdapter,
		itemPreFilter: e.itemPreFilter
	}, b = c(y);
	return {
		lanesProvider: i(() => (u || []).map((t) => /* @__PURE__ */ s(l, {
			lane: t,
			onError: _,
			source: e,
			onHookUpdate: v
		}, String(t.id))), [b]),
		lanesHooks: d
	};
}
//#endregion
export { u as useDataCollectionLanesData };
