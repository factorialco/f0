import { getOptionsWithDefaults as e } from "../utils.js";
import { NumberFilter as t } from "./NumberFilter.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/NumberFilter/index.tsx
var r = (e) => !e || e?.mode === "range" && e?.from?.value === e?.to?.value && e?.from?.value === void 0 || e?.mode === "single" && e?.value === void 0, i = {
	min: void 0,
	max: void 0
}, a = {
	emptyValue: void 0,
	render: (r) => {
		let a = e(r.schema.options, i);
		return /* @__PURE__ */ n(t, {
			...r,
			schema: {
				...r.schema,
				options: a
			}
		});
	},
	isEmpty: r,
	chipLabel: (e, t) => {
		let n = t.i18n;
		if (e?.mode === "single" || e?.mode === void 0) return e?.value === void 0 ? "" : n.t("filters.number.equalShort", { value: e?.value?.toString() });
		if (e?.mode === "range") {
			if (e?.from?.value !== void 0 && e?.to?.value !== void 0) return n.t("filters.number.range", {
				min: e?.from?.value,
				max: e?.to?.value,
				minStrict: e?.from?.closed ? "≥" : ">",
				maxStrict: e?.to?.closed ? "≤" : "<"
			});
			if (e?.to?.value !== void 0) return e?.to?.closed ? n.t("filters.number.lessThanOrEqualShort", { value: e?.to?.value }) : n.t("filters.number.lessThanShort", { value: e?.to?.value });
			if (e?.from?.value !== void 0) return e?.from?.closed ? n.t("filters.number.greaterThanOrEqualShort", { value: e?.from?.value }) : n.t("filters.number.greaterThanShort", { value: e?.from?.value });
		}
		return "";
	}
};
//#endregion
export { a as default, a as numberFilter };
