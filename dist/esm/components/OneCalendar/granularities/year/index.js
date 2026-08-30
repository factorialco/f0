import "../consts.js";
import { formatDateRange as e, formatDateToString as t, formatToPlaceholder as n, isAfterOrEqual as r, isBeforeOrEqual as i, toDateRangeString as a, toGranularityDateRange as o } from "../../utils.js";
import { YearView as s } from "./YearView.js";
import { jsx as c } from "react/jsx-runtime";
import { addYears as l, endOfYear as u, parse as d, startOfYear as f } from "date-fns";
//#region src/components/OneCalendar/granularities/year/index.tsx
var p = "yyyy";
function m(e) {
	return o(e, f, u);
}
var h = (e, t) => ({
	from: f(l(e.from, t)),
	to: u(l(e.to, t))
}), g = {
	calendarView: "year",
	add: h,
	getPrevNext: (e, t) => {
		let n = m(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: a, to: o } = n, { from: s, to: c } = h({
			from: a,
			to: o
		}, -1), { from: l, to: d } = h({
			from: a,
			to: o
		}, 1), p = t.min && f(t.min), g = t.max && u(t.max);
		return {
			prev: r(s, p) && r(c, p) ? {
				from: s,
				to: c
			} : !1,
			next: i(d, g) && i(l, g) ? {
				from: l,
				to: d
			} : !1
		};
	},
	toRange: (e) => m(e),
	toRangeString: (t) => e(t, p),
	toString: (e, n, r = "default") => {
		let i = {
			default: t(e, p),
			long: t(e, p)
		};
		return i[r] ?? i.default;
	},
	toStringMaxWidth: () => 70,
	placeholder: () => n(p),
	fromString: (e) => {
		let t = a(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let t = e.trim();
			return d(t, "yyyy", /* @__PURE__ */ new Date());
		};
		return m({
			from: i(n),
			to: r ? i(r) : void 0
		});
	},
	getViewDateFromDate: (e) => f(e),
	navigate: (e, t) => l(e, t),
	navigateUIView: (e, t) => l(e, t * 10),
	label: (e) => {
		let t = e.getFullYear() - e.getFullYear() % 10;
		return `${t} → ${t + 9}`;
	},
	render: (e) => {
		let t = m(e.minDate), n = m(e.maxDate);
		return /* @__PURE__ */ c(s, {
			mode: e.mode,
			decade: e.viewDate.getFullYear(),
			selected: e.selected,
			onSelect: e.onSelect,
			motionDirection: e.motionDirection,
			minDate: t ? t.from : void 0,
			maxDate: n ? n.to : void 0
		});
	}
};
//#endregion
export { m as toYearGranularityDateRange, g as yearGranularity };
