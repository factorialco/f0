import { WeekStartDay as e } from "../../types.js";
import "../consts.js";
import { formatDateRange as t, formatToPlaceholder as n, isAfterOrEqual as r, isBeforeOrEqual as i, toDateRangeString as a, toGranularityDateRange as o } from "../../utils.js";
import { WeekView as s } from "./WeekView.js";
import { jsx as c } from "react/jsx-runtime";
import { addDays as l, addMonths as u, endOfISOWeek as d, endOfWeek as f, formatDate as p, isSameISOWeek as m, isSameMonth as h, isSameWeek as g, isSameYear as _, parse as v, startOfISOWeek as y, startOfMonth as b, startOfWeek as x } from "date-fns";
//#region src/components/OneCalendar/granularities/week/index.tsx
var S = "'W'I yyyy", C = (t, n) => n === e.Monday ? y(t) : x(t, { weekStartsOn: n }), w = (t, n) => n === e.Monday ? d(t) : f(t, { weekStartsOn: n }), T = (t, n, r) => r === e.Monday ? m(t, n) : g(t, n, { weekStartsOn: r });
function E(t, n = e.Monday) {
	return o(t, (e) => C(e, n), (e) => w(e, n));
}
var D = (t, n, r = e.Monday) => ({
	from: C(l(t.from, n * 7), r),
	to: w(l(t.to, n * 7), r)
}), O = (t, n = e.Monday) => {
	let r = E(t, n);
	return r ? !r.to || T(r.from, r.to, n) ? p(r.from, S) : _(r.from, r.to) ? `${p(r.from, "'W'I")} → ${p(r.to, S)}` : `${p(r.from, S)} → ${p(r.to, S)}` : "";
}, k = (t, n, r = e.Monday) => {
	let i = E(t, r);
	if (!i) return "";
	let a = (e, t = "singular") => (n[t] || "").replace("{{date}}", e);
	if (!i.to || T(i.from, i.to, r)) return a(p(i.from, "d MMM yyyy"));
	let o = C(i.to, r);
	return h(i.from, i.to) ? `${a(p(i.from, "d"), "plural")} → ${a(p(o, "d MMM yyyy"))}` : _(i.from, i.to) ? `${a(p(i.from, "d MMM"), "plural")} → ${a(p(o, "d MMM yyyy"))}` : `${a(p(i.from, "d MMM yyyy"), "plural")} → ${a(p(o, "d MMM yyyy"))}`;
}, A = (o = e.Monday) => ({
	weekStartsOn: o,
	calendarView: "week",
	add: function(e, t) {
		return D(e, t, this.weekStartsOn);
	},
	getPrevNext: function(t, n) {
		let a = E(t, this.weekStartsOn);
		if (!a) return {
			prev: !1,
			next: !1
		};
		let { from: o, to: s } = a, { from: c, to: l } = D({
			from: o,
			to: s
		}, -1, this.weekStartsOn), { from: u, to: d } = D({
			from: o,
			to: s
		}, 1, this.weekStartsOn), f = n.min && C(n.min, this.weekStartsOn ?? e.Monday), p = n.max && w(n.max, this.weekStartsOn ?? e.Monday);
		return {
			prev: r(c, f) ? {
				from: c,
				to: l
			} : !1,
			next: i(d, p) ? {
				from: u,
				to: d
			} : !1
		};
	},
	toRangeString: function(e) {
		return t(e, "'W'I yyyy");
	},
	toRange: function(e) {
		return E(e, this.weekStartsOn);
	},
	toString: function(e, t, n = "default") {
		let r = {
			default: O(e, this.weekStartsOn),
			long: k(e, {
				singular: t.date.granularities.week.longSingular,
				plural: t.date.granularities.week.longPlural
			}, this.weekStartsOn)
		};
		return r[n] ?? r.default;
	},
	toStringMaxWidth: function() {
		return 240;
	},
	placeholder: () => n(S),
	fromString: function(e) {
		let t = a(e);
		if (!t) return null;
		let { from: n, to: r } = t, i = (e) => {
			let [t, n] = e.trim().split(/\s+/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n, i = Number(t.replace(/[wW\s]/g, ""));
			return v(`${i}`, "I", new Date(r, 0, 1));
		};
		return E({
			from: i(n),
			to: r ? i(r) : void 0
		}, this.weekStartsOn);
	},
	getViewDateFromDate: function(e) {
		return b(e);
	},
	navigate: function(e, t) {
		return l(e, t * 7);
	},
	navigateUIView: function(e, t) {
		return u(e, t);
	},
	label: function(e, t, n = "en-US") {
		return new Intl.DateTimeFormat(n, {
			month: "long",
			year: "numeric"
		}).format(e);
	},
	render: function(e) {
		let t = e.weekStartsOn === void 0 ? this.weekStartsOn : e.weekStartsOn, n = E(e.minDate, t), r = E(e.maxDate, t);
		return /* @__PURE__ */ c(s, {
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
}), j = A(e.Monday);
//#endregion
export { A as createWeekGranularity, w as getEndOfWeek, T as getIsSameWeek, C as getStartOfWeek, E as toWeekGranularityDateRange, j as weekGranularity };
