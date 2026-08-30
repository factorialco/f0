import { d as e, f as t, m as n } from "./F0Dialog-Bv4ryFfh.js";
import { t as r } from "./useDataCollectionSource-VpIiogfp.js";
import { W as i } from "./F0Select-_dXXh4fu.js";
import { i as a, n as o, t as s } from "./useDataSourceItemNavigation-cVpNdrIy.js";
import { useEffect as c, useMemo as l, useRef as u, useState as d } from "react";
//#region src/experimental/Navigation/Header/PageHeader/usePageHeaderItemNavigation.ts
function f(e, t) {
	let n = t?.getItemTitle, r = t?.mode ?? "url", i = e !== null, a = e?.previousItem ?? null, o = e?.nextItem ?? null, s = e?.previousItemUrl ?? null, c = e?.nextItemUrl ?? null, u = e?.absoluteIndex ?? null, d = e?.totalItems, f = e?.hasPrevious ?? !1, p = e?.hasNext ?? !1, m = e?.goToPrevious, h = e?.goToNext;
	return l(() => {
		if (!i) return null;
		let e = u !== null && d !== void 0 ? {
			current: u + 1,
			total: d
		} : void 0, t = (e, t) => (e === null ? void 0 : n?.(e)) ?? t, l = r === "callback" ? f ? {
			onClick: m,
			title: t(a, "Previous")
		} : void 0 : s === null ? void 0 : {
			url: s,
			title: t(a, "Previous")
		}, g = r === "callback" ? p ? {
			onClick: h,
			title: t(o, "Next")
		} : void 0 : c === null ? void 0 : {
			url: c,
			title: t(o, "Next")
		};
		return !l && !g && !e ? null : {
			previous: l,
			next: g,
			counter: e
		};
	}, [
		i,
		r,
		a,
		o,
		s,
		c,
		u,
		d,
		f,
		p,
		m,
		h,
		n
	]);
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useDataCollectionItemNavigation/seedFromStorage.ts
var p = (e, t) => typeof t == "string" && t in e;
function m(t, n, r) {
	let i = {}, a = !1, o = e(t);
	if (o !== void 0 && n.filters) {
		let e = n.filters, t = Object.fromEntries(Object.entries(o).filter(([t]) => p(e, t)));
		(Object.keys(t).length > 0 || Object.keys(o).length === 0) && (r.setCurrentFilters(t), i.filters = t, a = !0);
	}
	let s = t.sortings;
	if (s === null) r.setCurrentSortings(null), i.sortings = null, a = !0;
	else if (s && n.sortings && p(n.sortings, s.field)) {
		let e = {
			field: s.field,
			order: s.order
		};
		r.setCurrentSortings(e), i.sortings = e, a = !0;
	}
	typeof t.search == "string" && n.search?.enabled && (r.setCurrentSearch(t.search), i.search = t.search, a = !0);
	let c = t.grouping;
	if (c?.field !== void 0 && n.grouping && p(n.grouping.groupBy, c.field)) {
		let e = {
			field: c.field,
			order: c.order
		};
		r.setCurrentGrouping(e), i.grouping = e, a = !0;
	}
	return a ? i : null;
}
//#endregion
//#region src/patterns/OneDataCollection/hooks/useDataCollectionItemNavigation/useDataCollectionItemNavigation.ts
function h(e) {
	let { source: p, collectionId: h, activeItemId: g, defaultActiveItemId: _, onActiveItemChange: v, idProvider: y, itemUrl: ee, getItemTitle: b, enabled: x = !0, restorePersistedState: S = !0, currentFilters: C, navigationMode: w = "url", deps: te = [] } = e, T = n(), E = r(p, te), [D, O] = d(null), k = D?.key === h && D.settled, A = u(E);
	A.current = E;
	let j = u(T);
	j.current = T;
	let M = u(null), N = C === void 0 ? null : JSON.stringify(C), P = u(C);
	P.current = C;
	let F = u(null), I = () => {
		let e = P.current;
		e !== void 0 && (F.current = JSON.stringify(e), A.current.setCurrentFilters(e));
	};
	c(() => {
		if (!x || M.current === h) return;
		if (!S) {
			M.current = h, I(), O({
				key: h,
				applied: null,
				settled: !1
			});
			return;
		}
		let e = !1;
		return (async () => {
			let t = null;
			try {
				let n = await j.current.get(h);
				n && !e && (t = m(n, A.current, A.current));
			} catch {}
			e || (M.current = h, I(), O({
				key: h,
				applied: t,
				settled: !1
			}));
		})(), () => {
			e = !0;
		};
	}, [
		h,
		x,
		S
	]), c(() => {
		!k || N === null || F.current !== N && I();
	}, [k, N]), c(() => {
		if (!(!x || !S)) return t(h, async () => {
			try {
				let e = await j.current.get(h);
				if (!e) return;
				let t = A.current;
				m(e, {
					filters: P.current === void 0 ? t.filters : void 0,
					sortings: t.sortings,
					search: t.search,
					grouping: t.grouping
				}, t);
			} catch {}
		});
	}, [
		h,
		x,
		S
	]);
	let { data: L, paginationInfo: R, setPage: z, loadMore: B, isLoading: V, isInitialLoading: H } = i(E, {
		enabled: x && k,
		fetchParamsProvider: (e) => ({
			...e,
			navigationFilters: E.currentNavigationFilters
		})
	}, [JSON.stringify(E.currentNavigationFilters)]);
	c(() => {
		O((e) => e && e.key === h && !e.settled ? {
			...e,
			settled: !0
		} : e);
	}, [D, h]);
	let U = ee ?? p.itemUrl, W = o({
		dataSource: E,
		data: L,
		paginationInfo: R,
		setPage: z,
		loadMore: B,
		isLoading: V,
		idProvider: y,
		itemUrl: U,
		activeItemId: g,
		defaultActiveItemId: _,
		onActiveItemChange: v
	}), G = typeof W.activeItemId == "string" || typeof W.activeItemId == "number" ? W.activeItemId : null, K = W.activeItem !== null, ne = K && W.nextItem === null && W.hasNext, re = K && W.previousItem === null && W.hasPrevious, q = G !== null && (!K || ne || re), ie = [...E.currentSortings ? [{
		field: E.currentSortings.field,
		order: E.currentSortings.order
	}] : [], ...E.currentGrouping ? [{
		field: E.currentGrouping.field,
		order: E.currentGrouping.order ?? "asc"
	}] : []], { neighbors: J, isSupported: ae } = a({
		dataAdapter: E.dataAdapter,
		id: G,
		filters: E.currentFilters,
		sortings: ie,
		search: E.debouncedCurrentSearch,
		enabled: x && k && !H && !V && q,
		fetchParamsProvider: (e) => ({
			...e,
			navigationFilters: E.currentNavigationFilters
		})
	}), Y = l(() => y || (E.idProvider ? (e, t) => E.idProvider(e, t) : s), [y, E.idProvider]), X = l(() => {
		if (!q || J === null) return W;
		let e = W.previousItem ?? J.previous, t = W.nextItem ?? J.next, n = (e) => e && U ? U(e) ?? null : null;
		return {
			...W,
			previousItem: e,
			nextItem: t,
			previousItemUrl: W.previousItemUrl ?? n(e),
			nextItemUrl: W.nextItemUrl ?? n(t),
			absoluteIndex: W.absoluteIndex ?? (J.position === void 0 ? null : J.position - 1),
			totalItems: W.totalItems ?? J.total,
			hasPrevious: W.hasPrevious || e !== null,
			hasNext: W.hasNext || t !== null,
			goToPrevious: K ? W.goToPrevious : () => {
				J.previous && W.setActiveItemId(Y(J.previous));
			},
			goToNext: K ? W.goToNext : () => {
				J.next && W.setActiveItemId(Y(J.next));
			}
		};
	}, [
		W,
		q,
		J,
		K,
		U,
		Y
	]), Z = f(X, {
		getItemTitle: b,
		mode: w
	}), Q = x && k && ae && q && J === null, $ = u(null), oe = Z ?? (Q ? $.current : null);
	return c(() => {
		Z !== null && ($.current = Z);
	}, [Z]), {
		...X,
		isNavigating: X.isNavigating || Q,
		isReady: k && !H,
		navigation: oe,
		appliedCollectionState: D?.applied ?? null,
		dataSource: E,
		data: L,
		paginationInfo: R,
		isLoading: V
	};
}
//#endregion
export { m as n, f as r, h as t };
