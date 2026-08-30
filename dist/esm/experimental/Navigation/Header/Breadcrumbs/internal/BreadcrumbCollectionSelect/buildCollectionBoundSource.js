import { adaptDataAdapterToInfiniteScroll as e } from "../../../../../../hooks/datasource/adaptDataAdapterToInfiniteScroll.js";
import { resolveDataCollectionFilters as t } from "../../../../../../lib/providers/datacollection/readDataCollectionStorage.js";
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbCollectionSelect/buildCollectionBoundSource.ts
function n(n, r, i) {
	let a = i?.seed?.filters ?? !0, o = i?.seed?.sortings ?? !0, s = i?.showFilters ?? !1, c = n.currentFilters;
	if (a && r) {
		let e = t(r);
		if (e !== void 0) {
			let t = n.filters, r = t ? Object.fromEntries(Object.entries(e).filter(([e]) => e in t)) : e;
			(Object.keys(r).length > 0 || Object.keys(e).length === 0) && (c = r);
		}
	}
	let l = n.currentSortings;
	o && r && r.sortings !== void 0 && (r.sortings === null ? l = null : n.sortings && r.sortings.field in n.sortings && (l = {
		field: r.sortings.field,
		order: r.sortings.order
	}));
	let { filters: u, presets: d, presetsLoading: f, ...p } = n;
	return {
		...p,
		...s && u ? { filters: u } : {},
		currentFilters: c,
		currentSortings: l,
		dataAdapter: e(n.dataAdapter)
	};
}
//#endregion
export { n as buildCollectionBoundSource };
