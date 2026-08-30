import "../consts.js";
import { formatDateRange as e, formatDateToString as t, formatToPlaceholder as n, isAfterOrEqual as r, isBeforeOrEqual as i, toDateRangeString as a, toGranularityDateRange as o } from "../../utils.js";
import { MonthView as s } from "./MonthView.js";
import { jsx as c } from "react/jsx-runtime";
import { addMonths as l, addYears as u, endOfMonth as d, isSameMonth as f, isSameYear as p, parse as m, startOfMonth as h } from "date-fns";
import g from "@number-flow/react";
//#region src/components/OneCalendar/granularities/month/index.tsx
var _ = "MM/yyyy";
function v(e) {
	return o(e, h, d);
}
var y = (e, t) => ({
	from: h(l(e.from, t)),
	to: d(l(e.to, t))
}), b = (e) => t(e, _), x = (e, t = "en-US") => {
	let n = v(e);
	if (!n) return "";
	let r = (e) => new Intl.DateTimeFormat(t, {
		month: "long",
		year: "numeric"
	}).format(e);
	return !n.to || f(n.from, n.to) ? r(n.from) : p(n.from, n.to) ? `${new Intl.DateTimeFormat(t, { month: "long" }).format(n.from)} → ${r(n.to)}` : `${r(n.from)} → ${r(n.to)}`;
}, S = {
	calendarView: "month",
	add: y,
	getPrevNext: (e, t) => {
		let n = v(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: a, to: o } = n, { from: s, to: c } = y({
			from: a,
			to: o
		}, -1), { from: l, to: u } = y({
			from: a,
			to: o
		}, 1), f = t.min && h(t.min), p = t.max && d(t.max);
		return {
			prev: r(s, f) ? {
				from: s,
				to: c
			} : !1,
			next: i(u, p) ? {
				from: l,
				to: u
			} : !1
		};
	},
	toRangeString: (t) => e(t, "MM/yyyy"),
	toRange: (e) => v(e),
	toString: (e, t, n = "default", r = "en-US") => {
		let i = {
			default: b(e),
			long: x(e, r)
		};
		return i[n] ?? i.default;
	},
	toStringMaxWidth: () => 140,
	placeholder: () => n(_),
	fromString: (e) => {
		let t = a(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let [t, n] = e.trim().split(/[/.-\s+]/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n, i = m(t, "MMMM", (/* @__PURE__ */ new Date()).setFullYear(r)).getMonth() + 1 || m(t, "MMM", (/* @__PURE__ */ new Date()).setFullYear(r)).getMonth() + 1 || Number(t);
			return new Date(Number(r), Number(i) - 1, 1);
		};
		return v({
			from: i(n),
			to: r ? i(r) : void 0
		});
	},
	navigate: (e, t) => l(e, t),
	navigateUIView: (e, t) => u(e, t),
	label: (e) => /* @__PURE__ */ c(g, {
		format: {
			useGrouping: !1,
			maximumFractionDigits: 0
		},
		spinTiming: { duration: 150 },
		value: e.getFullYear()
	}),
	getViewDateFromDate: (e) => h(e),
	render: (e) => {
		let t = v(e.minDate), n = v(e.maxDate);
		return /* @__PURE__ */ c(s, {
			mode: e.mode,
			year: e.viewDate.getFullYear(),
			selected: e.selected,
			onSelect: e.onSelect,
			motionDirection: e.motionDirection,
			minDate: t ? t.from : void 0,
			maxDate: n ? n.to : void 0,
			compact: e.compact
		});
	}
};
//#endregion
export { S as monthGranularity, v as toMonthGranularityDateRange };
