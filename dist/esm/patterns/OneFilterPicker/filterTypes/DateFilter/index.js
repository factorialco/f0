import { getGranularitySimpleDefinition as e } from "../../../../components/OneCalendar/OneCalendar.js";
import { getOptionsWithDefaults as t } from "../utils.js";
import { DateFilter as n } from "./DateFilter.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/DateFilter/index.tsx
var i = (e, t) => !e || "from" in e && !e.from && t.schema.options.mode === "single" || "from" in e && !e.from && !e.to && t.schema.options.mode === "range", a = {
	mode: "single",
	view: "day"
}, o = {
	emptyValue: void 0,
	render: (e) => {
		let i = t(e.schema.options, a);
		return /* @__PURE__ */ r(n, {
			...e,
			schema: {
				...e.schema,
				options: i
			}
		});
	},
	isEmpty: i,
	chipLabel: (n, r) => {
		let i = t(r.schema.options, a);
		return e(i.view).toString(n, r.i18n);
	},
	formHeight: 520
};
//#endregion
export { o as dateFilter, o as default };
