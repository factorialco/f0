import { filterTypes as e } from "./filters.js";
//#region src/patterns/OneFilterPicker/filterTypes/getFilterType.ts
var t = (t) => {
	let n = e[t];
	if (!n) throw Error(`Filter type ${t.toString()} not found`);
	return n;
};
//#endregion
export { t as getFilterType };
