//#region src/patterns/OneFilterPicker/filterTypes/InFilter/components/option-utils.ts
function e(t, n) {
	return t.label.toLowerCase().includes(n) ? !0 : t.children ? t.children.options.some((t) => e(t, n)) : !1;
}
function t(e, n) {
	if (!e.children || !n) return !1;
	let { filterKey: r, options: i } = e.children, a = n[r] ?? [];
	for (let e of i) if (a.includes(e.value) || t(e, n)) return !0;
	return !1;
}
function n(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		for (let r of e) r.children && (t.add(r.children.filterKey), n(r.children.options));
	}
	return "options" in e && Array.isArray(e.options) && n(e.options), [...t];
}
//#endregion
export { n as collectNestedFilterKeys, t as hasSelectedDescendant, e as optionMatchesSearch };
