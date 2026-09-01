import { getOptionsWithDefaults as e } from "../utils.js";
import { DateFilter as t } from "./DateFilter.js";
import { getGranularitySimpleDefinition as n } from "../../../../components/OneCalendar/OneCalendar.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/DateFilter/index.tsx
var i = (e, t) => !e || "from" in e && !e.from && t.schema.options.mode === "single" || "from" in e && !e.from && !e.to && t.schema.options.mode === "range", a = {
	mode: "single",
	view: "day"
}, o = {
	emptyValue: void 0,
	render: (n) => {
		let i = e(n.schema.options, a);
		return /* @__PURE__ */ r(t, {
			...n,
			schema: {
				...n.schema,
				options: i
			}
		});
	},
	isEmpty: i,
	chipLabel: (t, r) => {
		let i = e(r.schema.options, a);
		return n(i.view).toString(t, r.i18n);
	},
	formHeight: 520
};
//#endregion
export { o as dateFilter, o as default };
