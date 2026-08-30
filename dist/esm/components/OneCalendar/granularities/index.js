import { WeekStartDay as e } from "../types.js";
import { rangeSeparator as t } from "./consts.js";
import { dayGranularity as n } from "./day/index.js";
import { halfyearGranularity as r } from "./halfyear/index.js";
import { monthGranularity as i } from "./month/index.js";
import { createPeriodsGranularity as a, periodsGranularity as o } from "./periods/index.js";
import { quarterGranularity as s } from "./quarter/index.js";
import { rangeGranularity as c } from "./range/index.js";
import { createWeekGranularity as l, weekGranularity as u } from "./week/index.js";
import { yearGranularity as d } from "./year/index.js";
//#region src/components/OneCalendar/granularities/index.tsx
var f = {
	day: n,
	week: u,
	month: i,
	quarter: s,
	halfyear: r,
	year: d,
	range: c
}, p = (e) => e === "periods" ? o : f[e], m = (e) => [
	e.label ?? "",
	e.header ?? "",
	...e.periods.map((e) => `${e.label}|${e.description ?? ""}|${e.from.getTime()}|${e.to.getTime()}`)
].join("|~|"), h = /* @__PURE__ */ new Map(), g = 8, _ = (e) => {
	let t = m(e), n = h.get(t);
	if (n) return n;
	let r = a(e);
	if (h.size >= g) {
		let e = h.keys().next().value;
		e !== void 0 && h.delete(e);
	}
	return h.set(t, r), r;
};
function v(t) {
	let { weekStartsOn: n, periods: r } = typeof t == "number" ? { weekStartsOn: t } : t ?? {}, i = n ?? e.Monday;
	return {
		...i === e.Monday ? f : {
			...f,
			week: l(i)
		},
		periods: r ? _(r) : o
	};
}
//#endregion
export { v as getGranularityDefinitions, f as granularityDefinitions, t as rangeSeparator, p as resolveGranularityDefinition };
