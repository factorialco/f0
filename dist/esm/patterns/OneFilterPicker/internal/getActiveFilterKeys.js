import { getFilterType as e } from "../filterTypes/getFilterType.js";
//#region src/patterns/OneFilterPicker/internal/getActiveFilterKeys.ts
var t = (t, n, r) => Object.keys(t).filter((i) => {
	let a = n[i], o = t[i];
	return !e(o.type).isEmpty(a, {
		schema: o,
		i18n: r
	});
});
//#endregion
export { t as getActiveFilterKeys };
