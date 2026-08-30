import "../consts.js";
import { formatDateRange as e, formatDateToString as t, formatToPlaceholder as n, isAfterOrEqual as r, isBeforeOrEqual as i, toDateRangeString as a, toGranularityDateRange as o } from "../../utils.js";
import { QuarterView as s } from "./QuarterView.js";
import { jsx as c } from "react/jsx-runtime";
import { addMonths as l, addYears as u, endOfQuarter as d, formatDate as f, isSameQuarter as p, isSameYear as m, startOfQuarter as h } from "date-fns";
//#region src/components/OneCalendar/granularities/quarter/index.tsx
var g = "'Q'Q yyyy";
function _(e) {
	return o(e, h, d);
}
var v = (e, t) => ({
	from: h(l(e.from, t * 3)),
	to: d(l(e.to, t * 3))
}), y = (e) => t(e, g), b = (e) => {
	let t = _(e);
	return t ? !t.to || p(t.from, t.to) ? f(t.from, "'Q'Q yyyy") : m(t.from, t.to) ? `${f(t.from, "'Q'Q")} → ${f(t.to, "'Q'Q yyyy")}` : `${f(t.from, "'Q'Q yyyy")} → ${f(t.to, "'Q'Q yyyy")}` : "";
}, x = {
	calendarView: "quarter",
	add: v,
	getPrevNext: (e, t) => {
		let n = _(e);
		if (!n) return {
			prev: !1,
			next: !1
		};
		let { from: a, to: o } = n, { from: s, to: c } = v({
			from: a,
			to: o
		}, -1), { from: l, to: u } = v({
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
	toRangeString: (t) => e(t, "'Q'Q yyyy"),
	toRange: (e) => _(e),
	toString: (e, t, n = "default") => {
		let r = {
			default: y(e),
			long: b(e)
		};
		return r[n] ?? r.default;
	},
	toStringMaxWidth: () => 110,
	placeholder: () => n(g),
	fromString: (e) => {
		let t = a(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let [t, n] = e.trim().split(/\s+/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n, i = Number(t.replace(/[qQ\s]/g, ""));
			return new Date(r, (i - 1) * 3, 1);
		};
		return _({
			from: i(n),
			to: r ? i(r) : void 0
		});
	},
	navigate: (e, t) => h(l(e, t * 3)),
	navigateUIView: (e, t) => h(u(e, t * 5)),
	label: (e) => {
		let t = Math.floor(e.getFullYear() / 5) * 5;
		return `${t} → ${t + 4}`;
	},
	getViewDateFromDate: (e) => h(e),
	render: (e) => {
		let t = _(e.minDate), n = _(e.maxDate);
		return /* @__PURE__ */ c(s, {
			mode: e.mode,
			year: e.viewDate.getFullYear(),
			selected: e.selected,
			onSelect: e.onSelect,
			motionDirection: e.motionDirection,
			minDate: t ? t.from : void 0,
			maxDate: n ? n.to : void 0
		});
	}
};
//#endregion
export { x as quarterGranularity, _ as toQuarterGranularityDateRange };
