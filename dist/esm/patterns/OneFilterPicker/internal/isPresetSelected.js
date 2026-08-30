import e from "lodash/isEqual";
//#region src/patterns/OneFilterPicker/internal/isPresetSelected.ts
var t = (t, n) => {
	let r = t.filter;
	if (typeof r != "object" || !r || Array.isArray(r)) return !1;
	let i = Object.keys(r).filter((e) => r[e] !== void 0), a = Object.keys(n).filter((e) => n[e] !== void 0);
	return i.length === a.length && Object.entries(r).filter(([, e]) => e !== void 0).every(([t, r]) => e(n[t], r));
};
//#endregion
export { t as isPresetSelected };
