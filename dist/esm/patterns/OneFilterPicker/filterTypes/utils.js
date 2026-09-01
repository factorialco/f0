import { filterTypes as e } from "./filters.js";
//#region src/patterns/OneFilterPicker/filterTypes/utils.ts
function t(e, t) {
	return {
		...t,
		...e
	};
}
var n = (t) => {
	let n = e[t];
	if (!n) throw Error(`Filter type ${t.toString()} not found`);
	return n;
};
//#endregion
export { n as getFilterType, t as getOptionsWithDefaults };
