//#region src/patterns/OneDataCollection/hooks/useDataCollectionData/utils.ts
function e(e, t) {
	let n = { ...e };
	for (let [r, i] of Object.entries(t)) {
		let t = e[r];
		if (Array.isArray(t) && Array.isArray(i) && t.length > 0 && i.length > 0) {
			let e = t.filter((e) => i.includes(e));
			n[r] = e.length > 0 ? e : i;
		} else n[r] = i;
	}
	return n;
}
//#endregion
export { e as mergeFiltersWithIntersection };
