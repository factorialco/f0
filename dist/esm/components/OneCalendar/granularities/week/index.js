import { WeekStartDay as e } from "../../types.js";
import "../consts.js";
import { formatDateRange as t, formatToPlaceholder as n, isAfterOrEqual as r, isBeforeOrEqual as i, toDateRangeString as a, toGranularityDateRange as o } from "../../utils.js";
import { getEndOfWeek as s, getIsSameWeek as c, getStartOfWeek as l } from "./weekUtils.js";
import { WeekView as u } from "./WeekView.js";
import { jsx as d } from "react/jsx-runtime";
import { addDays as f, addMonths as p, formatDate as m, isSameMonth as h, isSameYear as g, parse as _, startOfMonth as v } from "date-fns";
//#region src/components/OneCalendar/granularities/week/index.tsx
var y = "'W'I yyyy";
function b(t, n = e.Monday) {
	return o(t, (e) => l(e, n), (e) => s(e, n));
}
var x = (t, n, r = e.Monday) => ({
	from: l(f(t.from, n * 7), r),
	to: s(f(t.to, n * 7), r)
}), S = (t, n = e.Monday) => {
	let r = b(t, n);
	return r ? !r.to || c(r.from, r.to, n) ? m(r.from, y) : g(r.from, r.to) ? `${m(r.from, "'W'I")} → ${m(r.to, y)}` : `${m(r.from, y)} → ${m(r.to, y)}` : "";
}, C = (t, n, r = e.Monday) => {
	let i = b(t, r);
	if (!i) return "";
	let a = (e, t = "singular") => (n[t] || "").replace("{{date}}", e);
	if (!i.to || c(i.from, i.to, r)) return a(m(i.from, "d MMM yyyy"));
	let o = l(i.to, r);
	return h(i.from, i.to) ? `${a(m(i.from, "d"), "plural")} → ${a(m(o, "d MMM yyyy"))}` : g(i.from, i.to) ? `${a(m(i.from, "d MMM"), "plural")} → ${a(m(o, "d MMM yyyy"))}` : `${a(m(i.from, "d MMM yyyy"), "plural")} → ${a(m(o, "d MMM yyyy"))}`;
}, w = (o = e.Monday) => ({
	weekStartsOn: o,
	calendarView: "week",
	add: function(e, t) {
		return x(e, t, this.weekStartsOn);
	},
	getPrevNext: function(t, n) {
		let a = b(t, this.weekStartsOn);
		if (!a) return {
			prev: !1,
			next: !1
		};
		let { from: o, to: c } = a, { from: u, to: d } = x({
			from: o,
			to: c
		}, -1, this.weekStartsOn), { from: f, to: p } = x({
			from: o,
			to: c
		}, 1, this.weekStartsOn), m = n.min && l(n.min, this.weekStartsOn ?? e.Monday), h = n.max && s(n.max, this.weekStartsOn ?? e.Monday);
		return {
			prev: r(u, m) ? {
				from: u,
				to: d
			} : !1,
			next: i(p, h) ? {
				from: f,
				to: p
			} : !1
		};
	},
	toRangeString: function(e) {
		return t(e, "'W'I yyyy");
	},
	toRange: function(e) {
		return b(e, this.weekStartsOn);
	},
	toString: function(e, t, n = "default") {
		let r = {
			default: S(e, this.weekStartsOn),
			long: C(e, {
				singular: t.date.granularities.week.longSingular,
				plural: t.date.granularities.week.longPlural
			}, this.weekStartsOn)
		};
		return r[n] ?? r.default;
	},
	toStringMaxWidth: function() {
		return 240;
	},
	placeholder: () => n(y),
	fromString: function(e) {
		let t = a(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let [t, n] = e.trim().split(/\s+/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n, i = Number(t.replace(/[wW\s]/g, ""));
			return _(`${i}`, "I", new Date(r, 0, 1));
		};
		return b({
			from: i(n),
			to: r ? i(r) : void 0
		}, this.weekStartsOn);
	},
	getViewDateFromDate: function(e) {
		return v(e);
	},
	navigate: function(e, t) {
		return f(e, t * 7);
	},
	navigateUIView: function(e, t) {
		return p(e, t);
	},
	label: function(e, t, n = "en-US") {
		return new Intl.DateTimeFormat(n, {
			month: "long",
			year: "numeric"
		}).format(e);
	},
	render: function(e) {
		let t = e.weekStartsOn === void 0 ? this.weekStartsOn : e.weekStartsOn, n = b(e.minDate, t), r = b(e.maxDate, t);
		return /* @__PURE__ */ d(u, {
			selected: e.selected,
			onSelect: e.onSelect,
			month: e.month,
			onMonthChange: e.onMonthChange,
			motionDirection: e.motionDirection,
			minDate: n ? n.from : void 0,
			maxDate: r ? r.to : void 0,
			compact: e.compact,
			weekStartsOn: t
		});
	}
}), T = w(e.Monday);
//#endregion
export { w as createWeekGranularity, b as toWeekGranularityDateRange, T as weekGranularity };
