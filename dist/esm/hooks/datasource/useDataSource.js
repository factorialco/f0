import { useDebouncedState as e } from "../useDebouncedState.js";
import { useEffect as t, useMemo as n, useState as r } from "react";
import { useDeepCompareEffect as i } from "@reactuses/core";
//#region src/hooks/datasource/useDataSource.ts
var a = (e) => e.paginationType ?? "no-pagination", o = (e) => e;
function s({ defaultFilters: a = {}, currentFilters: o, defaultGrouping: s, currentGrouping: c, filters: l, search: u, defaultSortings: d, currentSortings: f, dataAdapter: p, grouping: m, ...h }, g = []) {
	let [_, v] = r(o ?? a ?? {}), y = (e) => {
		if (typeof e == "function") v((t) => {
			let n = e(t);
			return JSON.stringify(n) === JSON.stringify(t) ? t : n;
		});
		else {
			if (JSON.stringify(_) === JSON.stringify(e)) return;
			v(e);
		}
	};
	i(() => {
		o && y(o);
	}, [o]);
	let [b, x] = r(f ?? d ?? null), S = (e) => {
		if (typeof e == "function") x((t) => {
			let n = e(t);
			return JSON.stringify(n) === JSON.stringify(t) ? t : n;
		});
		else {
			if (JSON.stringify(b) === JSON.stringify(e)) return;
			x(e);
		}
	};
	i(() => {
		f && S(f);
	}, [f]);
	let C = {
		enabled: !1,
		sync: !1,
		...u
	}, [w, T] = r(), [E, D] = e(w, 200);
	t(() => {
		C.sync || D(w);
	}, [
		w,
		C.sync,
		D
	]);
	let O = n(() => l, g), [k, A] = r(!1), j = n(() => p, g), M = n(() => m?.mandatory ? {
		field: Object.keys(m.groupBy)[0],
		order: "asc"
	} : void 0, [JSON.stringify(m)]), [N, P] = r(c ?? s ?? M);
	return t(() => {
		m?.mandatory && !N?.field && P(c ?? s ?? M);
	}, [
		m?.mandatory,
		N?.field,
		M
	]), i(() => {
		P(c);
	}, [c]), {
		...h,
		filters: O,
		currentFilters: _,
		setCurrentFilters: y,
		currentSortings: b,
		setCurrentSortings: S,
		search: u,
		currentSearch: w,
		setCurrentSearch: T,
		debouncedCurrentSearch: E,
		isLoading: k,
		setIsLoading: A,
		dataAdapter: j,
		setCurrentGrouping: P,
		currentGrouping: N,
		grouping: m
	};
}
//#endregion
export { o as createDataSourceDefinition, a as getDataSourcePaginationType, s as useDataSource };
