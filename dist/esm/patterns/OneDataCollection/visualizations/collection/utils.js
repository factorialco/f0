//#region src/patterns/OneDataCollection/visualizations/collection/utils.ts
var e = (e) => e ? e.indeterminate || e.selectedCount !== void 0 && e.selectedCount > 0 && !e.checked ? "indeterminate" : e.checked : !1, t = (e) => (e || []).map((e) => e.type === "separator" ? e : {
	...e,
	type: "item"
});
//#endregion
export { t as actionsToDropdownItems, e as statusToChecked };
