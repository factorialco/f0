//#region src/lib/providers/datacollection/dataCollectionStorageEvents.ts
var e = /* @__PURE__ */ new Map(), t = (t, n) => {
	let r = e.get(t);
	return r || (r = /* @__PURE__ */ new Set(), e.set(t, r)), r.add(n), () => {
		r.delete(n), r.size === 0 && e.delete(t);
	};
}, n = (t) => {
	e.get(t)?.forEach((e) => e());
};
//#endregion
export { n as notifyDataCollectionStorageChange, t as subscribeToDataCollectionStorageChanges };
