import { getGranularityDefinitions as e } from "../../../../../components/OneCalendar/granularities/index.js";
import { DateNavigation as t } from "./DateNavigation.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/navigationFilters/filterTypes/DateNavigation/index.tsx
var r = (e) => "date" in e, i = {
	valueConverter: function(t, n, i) {
		let a = Array.isArray(n.granularity) ? n.granularity : [n.granularity], o = n.defaultGranularity || a[0] || "day";
		if (t ||= /* @__PURE__ */ new Date(), r(t)) return t;
		let s = e({ periods: n.periods })[o];
		return {
			value: s.toRange(t),
			valueString: s.toString(t, i),
			granularity: o
		};
	},
	render: (e) => /* @__PURE__ */ n(t, { ...e })
};
//#endregion
export { i as default };
