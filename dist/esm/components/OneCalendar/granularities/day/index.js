import "../consts.js";
import { formatDate as e, formatDateRange as t, formatDateToString as n, formatToPlaceholder as r, isAfterOrEqual as i, isBeforeOrEqual as a, toDateRangeString as o, toGranularityDateRange as s } from "../../utils.js";
import { DayView as c } from "./DayView.js";
import { jsx as l } from "react/jsx-runtime";
import { addDays as u, addMonths as d, endOfDay as f, isSameDay as p, isSameMonth as m, isSameYear as h, parse as g, startOfDay as _, startOfMonth as v } from "date-fns";
//#region src/components/OneCalendar/granularities/day/index.tsx
var y = "dd/MM/yyyy";
function b(e) {
	return s(e, _, f);
}
var x = (e, t) => ({
	from: _(u(e.from, t)),
	to: f(u(e.to, t))
}), S = (t) => {
	let n = b(t);
	return n ? !n.to || p(n.from, n.to) ? e(n.from, "dd MMM yyyy") : m(n.from, n.to) ? `${e(n.from, "dd")} → ${e(n.to, "dd MMM yyyy")}` : h(n.from, n.to) ? `${e(n.from, "dd MMM")} → ${e(n.to, "dd MMM yyyy")}` : `${e(n.from, "dd MMM yyyy")} → ${e(n.to, "dd MMM yyyy")}` : "";
}, C = {
	calendarView: "day",
	add: x,
	getPrevNext: (e, t) => {
		let n = b(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: r, to: o } = n, { from: s, to: c } = x({
			from: r,
			to: o
		}, -1), { from: l, to: u } = x({
			from: r,
			to: o
		}, 1), d = t.min && _(t.min), p = t.max && f(t.max);
		return {
			prev: i(s, d) ? {
				from: s,
				to: c
			} : !1,
			next: a(u, p) ? {
				from: l,
				to: u
			} : !1
		};
	},
	toRange: (e) => b(e),
	toRangeString: (e) => t(e, y),
	toString: (e, t, r = "default") => {
		let i = {
			default: n(e, y),
			long: S(e)
		};
		return i[r] ?? i.default;
	},
	toStringMaxWidth: () => 160,
	placeholder: () => r(y),
	fromString: (e) => {
		let t = o(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let t = e.trim(), n = /* @__PURE__ */ new Date(), r = g(t, "d MMM yyyy", n);
			if (!isNaN(r.getTime())) return r;
			let i = g(t, y, n);
			if (!isNaN(i.getTime())) return i;
			let [a, o, s] = t.split(/[/.-]/);
			return !a || !o || !s ? /* @__PURE__ */ new Date(NaN) : new Date(Number(s), Number(o) - 1, Number(a));
		};
		return b({
			from: i(n),
			to: r ? i(r) : void 0
		});
	},
	navigate: (e, t) => u(e, t),
	navigateUIView: (e, t) => d(e, t),
	getViewDateFromDate: (e) => v(e),
	label: (e, t, n = "en-US") => new Intl.DateTimeFormat(n, {
		month: "long",
		year: "numeric"
	}).format(e),
	render: (e) => {
		let t = b(e.minDate), n = b(e.maxDate);
		return /* @__PURE__ */ l(c, {
			mode: e.mode,
			selected: e.selected,
			onSelect: e.onSelect,
			month: e.month,
			onMonthChange: e.onMonthChange,
			motionDirection: e.motionDirection,
			minDate: t ? t.from : void 0,
			maxDate: n ? n.to : void 0,
			compact: e.compact,
			weekStartsOn: e.weekStartsOn
		});
	}
};
//#endregion
export { y as DAY_FORMAT, C as dayGranularity, b as toDayGranularityDateRange };
