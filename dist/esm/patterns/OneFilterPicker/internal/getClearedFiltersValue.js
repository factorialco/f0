import { collectNestedFilterKeys as e } from "../filterTypes/InFilter/components/option-utils.js";
import { getFilterType as t } from "../filterTypes/getFilterType.js";
//#region src/patterns/OneFilterPicker/internal/getClearedFiltersValue.ts
function n(n) {
	let r = {};
	for (let [i, a] of Object.entries(n)) {
		let n = i;
		if (r[n] = t(a.type).emptyValue, !(a.type !== "in" || !("options" in a))) for (let t of e(a.options)) r[t] = [];
	}
	return r;
}
//#endregion
export { n as getClearedFiltersValue };
