import { numericFormatter as e } from "./numericFormatter.js";
import { toNumericValue as t } from "./toNumericValue.js";
//#region src/lib/numeric/utils/normalizeValueWithFormatter.ts
var n = (n, r) => {
	if (n == null) return {
		numericValue: { value: void 0 },
		formatter: r?.formatter || e,
		formatterOptions: r?.formatterOptions || {}
	};
	let i = {
		formatter: r?.formatter || e,
		formatterOptions: r?.formatterOptions || {}
	};
	return typeof n == "number" ? {
		numericValue: { value: n },
		...i
	} : typeof n == "object" && n && "numericValue" in n ? {
		numericValue: t(n.numericValue),
		formatter: n.formatter ? n.formatter : i.formatter,
		formatterOptions: {
			...i.formatterOptions,
			...n.formatterOptions
		}
	} : {
		...i,
		numericValue: n
	};
};
//#endregion
export { n as normalizeNumericWithFormatter };
