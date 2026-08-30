import { getActiveFilterKeys as e } from "./getActiveFilterKeys.js";
//#region src/patterns/OneFilterPicker/internal/getActiveFiltersValue.ts
var t = (t, n, r) => {
	let i = {};
	for (let a of e(t, n, r)) i[a] = n[a];
	return i;
};
//#endregion
export { t as getActiveFiltersValue };
