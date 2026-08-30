import { useItemNeighbors as e } from "../../../../hooks/datasource/itemNeighbors/useItemNeighbors.js";
import { useData as t } from "../../../../hooks/datasource/useData.js";
import { defaultIdProvider as n, useDataSourceItemNavigation as r } from "../../../../hooks/datasource/useDataSourceItemNavigation/useDataSourceItemNavigation.js";
import { useDataCollectionStorage as i } from "../../../../lib/providers/datacollection/DataCollectionStorageProvider.js";
import { subscribeToDataCollectionStorageChanges as a } from "../../../../lib/providers/datacollection/dataCollectionStorageEvents.js";
import { useDataCollectionSource as o } from "../useDataCollectionSource/useDataCollectionSource.js";
import { usePageHeaderItemNavigation as s } from "../../../../experimental/Navigation/Header/PageHeader/usePageHeaderItemNavigation.js";
import { seedFromStorage as c } from "./seedFromStorage.js";
import { useEffect as l, useMemo as u, useRef as d, useState as ee } from "react";
//#region src/patterns/OneDataCollection/hooks/useDataCollectionItemNavigation/useDataCollectionItemNavigation.ts
function f(f) {
	let { source: p, collectionId: m, activeItemId: h, defaultActiveItemId: te, onActiveItemChange: ne, idProvider: g, itemUrl: _, getItemTitle: v, enabled: y = !0, restorePersistedState: b = !0, currentFilters: x, navigationMode: S = "url", deps: re = [] } = f, C = i(), w = o(p, re), [T, E] = ee(null), D = T?.key === m && T.settled, O = d(w);
	O.current = w;
	let k = d(C);
	k.current = C;
	let A = d(null), j = x === void 0 ? null : JSON.stringify(x), M = d(x);
	M.current = x;
	let N = d(null), P = () => {
		let e = M.current;
		e !== void 0 && (N.current = JSON.stringify(e), O.current.setCurrentFilters(e));
	};
	l(() => {
		if (!y || A.current === m) return;
		if (!b) {
			A.current = m, P(), E({
				key: m,
				applied: null,
				settled: !1
			});
			return;
		}
		let e = !1;
		return (async () => {
			let t = null;
			try {
				let n = await k.current.get(m);
				n && !e && (t = c(n, O.current, O.current));
			} catch {}
			e || (A.current = m, P(), E({
				key: m,
				applied: t,
				settled: !1
			}));
		})(), () => {
			e = !0;
		};
	}, [
		m,
		y,
		b
	]), l(() => {
		!D || j === null || N.current !== j && P();
	}, [D, j]), l(() => {
		if (!(!y || !b)) return a(m, async () => {
			try {
				let e = await k.current.get(m);
				if (!e) return;
				let t = O.current;
				c(e, {
					filters: M.current === void 0 ? t.filters : void 0,
					sortings: t.sortings,
					search: t.search,
					grouping: t.grouping
				}, t);
			} catch {}
		});
	}, [
		m,
		y,
		b
	]);
	let { data: F, paginationInfo: I, setPage: ie, loadMore: L, isLoading: R, isInitialLoading: z } = t(w, {
		enabled: y && D,
		fetchParamsProvider: (e) => ({
			...e,
			navigationFilters: w.currentNavigationFilters
		})
	}, [JSON.stringify(w.currentNavigationFilters)]);
	l(() => {
		E((e) => e && e.key === m && !e.settled ? {
			...e,
			settled: !0
		} : e);
	}, [T, m]);
	let B = _ ?? p.itemUrl, V = r({
		dataSource: w,
		data: F,
		paginationInfo: I,
		setPage: ie,
		loadMore: L,
		isLoading: R,
		idProvider: g,
		itemUrl: B,
		activeItemId: h,
		defaultActiveItemId: te,
		onActiveItemChange: ne
	}), H = typeof V.activeItemId == "string" || typeof V.activeItemId == "number" ? V.activeItemId : null, U = V.activeItem !== null, W = U && V.nextItem === null && V.hasNext, G = U && V.previousItem === null && V.hasPrevious, K = H !== null && (!U || W || G), q = [...w.currentSortings ? [{
		field: w.currentSortings.field,
		order: w.currentSortings.order
	}] : [], ...w.currentGrouping ? [{
		field: w.currentGrouping.field,
		order: w.currentGrouping.order ?? "asc"
	}] : []], { neighbors: J, isSupported: ae } = e({
		dataAdapter: w.dataAdapter,
		id: H,
		filters: w.currentFilters,
		sortings: q,
		search: w.debouncedCurrentSearch,
		enabled: y && D && !z && !R && K,
		fetchParamsProvider: (e) => ({
			...e,
			navigationFilters: w.currentNavigationFilters
		})
	}), Y = u(() => g || (w.idProvider ? (e, t) => w.idProvider(e, t) : n), [g, w.idProvider]), X = u(() => {
		if (!K || J === null) return V;
		let e = V.previousItem ?? J.previous, t = V.nextItem ?? J.next, n = (e) => e && B ? B(e) ?? null : null;
		return {
			...V,
			previousItem: e,
			nextItem: t,
			previousItemUrl: V.previousItemUrl ?? n(e),
			nextItemUrl: V.nextItemUrl ?? n(t),
			absoluteIndex: V.absoluteIndex ?? (J.position === void 0 ? null : J.position - 1),
			totalItems: V.totalItems ?? J.total,
			hasPrevious: V.hasPrevious || e !== null,
			hasNext: V.hasNext || t !== null,
			goToPrevious: U ? V.goToPrevious : () => {
				J.previous && V.setActiveItemId(Y(J.previous));
			},
			goToNext: U ? V.goToNext : () => {
				J.next && V.setActiveItemId(Y(J.next));
			}
		};
	}, [
		V,
		K,
		J,
		U,
		B,
		Y
	]), Z = s(X, {
		getItemTitle: v,
		mode: S
	}), Q = y && D && ae && K && J === null, $ = d(null), oe = Z ?? (Q ? $.current : null);
	return l(() => {
		Z !== null && ($.current = Z);
	}, [Z]), {
		...X,
		isNavigating: X.isNavigating || Q,
		isReady: D && !z,
		navigation: oe,
		appliedCollectionState: T?.applied ?? null,
		dataSource: w,
		data: F,
		paginationInfo: I,
		isLoading: R
	};
}
//#endregion
export { f as useDataCollectionItemNavigation };
