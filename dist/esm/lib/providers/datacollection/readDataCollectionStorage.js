import { getDataCollectionStorageKey as e } from "./dataCollectionStorageKey.js";
//#region src/lib/providers/datacollection/readDataCollectionStorage.ts
var t = (t) => {
	try {
		let n = localStorage.getItem(e(t));
		return n === null ? null : JSON.parse(n);
	} catch {
		return null;
	}
}, n = (e) => {
	if (e) return e.visualizationFilters?.[String(e.visualization ?? 0)] ?? e.filters;
}, r = (e, t) => {
	let n = String(e.visualization ?? 0), r = e.visualizationFilters?.[n] !== void 0;
	return {
		...e,
		filters: t,
		...r ? { visualizationFilters: {
			...e.visualizationFilters,
			[n]: t
		} } : {}
	};
};
//#endregion
export { r as mergeDataCollectionFilters, t as readDataCollectionStorage, n as resolveDataCollectionFilters };
