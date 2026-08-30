import "../consts.js";
import { formatToPlaceholder as e, isAfterOrEqual as t, isBeforeOrEqual as n } from "../../utils.js";
import { DAY_FORMAT as r, dayGranularity as i, toDayGranularityDateRange as a } from "../day/index.js";
import { addDays as o, differenceInDays as s, endOfDay as c, startOfDay as l } from "date-fns";
//#region src/components/OneCalendar/granularities/range/index.tsx
var u = (e, t) => ({
	from: l(o(e.from, t)),
	to: c(o(e.to, t))
}), d = e(r), f = {
	...i,
	calendarMode: "range",
	placeholder: () => `${d} → ${d}`,
	add: u,
	getPrevNext: (e, r) => {
		let i = a(e);
		if (!i) return {
			prev: !1,
			next: !1
		};
		let { from: o, to: d } = i, f = s(d, o) + 1, { from: p, to: m } = u({
			from: o,
			to: d
		}, -f), { from: h, to: g } = u({
			from: o,
			to: d
		}, f), _ = r.min && l(r.min), v = r.max && c(r.max);
		return {
			prev: t(p, _) ? {
				from: p,
				to: m
			} : !1,
			next: n(g, v) ? {
				from: h,
				to: g
			} : !1
		};
	},
	calendarView: "day",
	render: (e) => i.render({
		...e,
		mode: "range"
	})
};
//#endregion
export { f as rangeGranularity };
