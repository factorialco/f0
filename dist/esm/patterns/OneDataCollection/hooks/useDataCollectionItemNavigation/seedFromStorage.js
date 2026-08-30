import { resolveDataCollectionFilters as e } from "../../../../lib/providers/datacollection/readDataCollectionStorage.js";
//#region src/patterns/OneDataCollection/hooks/useDataCollectionItemNavigation/seedFromStorage.ts
var t = (e, t) => typeof t == "string" && t in e;
function n(n, r, i) {
	let a = {}, o = !1, s = e(n);
	if (s !== void 0 && r.filters) {
		let e = r.filters, n = Object.fromEntries(Object.entries(s).filter(([n]) => t(e, n)));
		(Object.keys(n).length > 0 || Object.keys(s).length === 0) && (i.setCurrentFilters(n), a.filters = n, o = !0);
	}
	let c = n.sortings;
	if (c === null) i.setCurrentSortings(null), a.sortings = null, o = !0;
	else if (c && r.sortings && t(r.sortings, c.field)) {
		let e = {
			field: c.field,
			order: c.order
		};
		i.setCurrentSortings(e), a.sortings = e, o = !0;
	}
	typeof n.search == "string" && r.search?.enabled && (i.setCurrentSearch(n.search), a.search = n.search, o = !0);
	let l = n.grouping;
	if (l?.field !== void 0 && r.grouping && t(r.grouping.groupBy, l.field)) {
		let e = {
			field: l.field,
			order: l.order
		};
		i.setCurrentGrouping(e), a.grouping = e, o = !0;
	}
	return o ? a : null;
}
//#endregion
export { n as seedFromStorage };
