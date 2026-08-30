import "../consts.js";
import { isAfterOrEqual as e, isBeforeOrEqual as t, toDateRangeString as n, toGranularityDateRange as r } from "../../utils.js";
import { HalfYearView as i } from "./HalfyearView.js";
import { jsx as a } from "react/jsx-runtime";
import { addMonths as o, addYears as s, endOfMonth as c, endOfYear as l, getMonth as u, getYear as d, isSameYear as f, setMonth as p, startOfMonth as m, startOfYear as h } from "date-fns";
//#region src/components/OneCalendar/granularities/halfyear/index.tsx
var g = "Hn yyyy", _ = (e) => `${v(e)} ${e.getFullYear()}`, v = (e) => {
	let t = e.getMonth();
	return `H${Math.floor(t / 6) + 1}`;
}, y = (e) => {
	let t = x(e);
	if (!t) return {
		from: "",
		to: void 0
	};
	let n = _(t.from), r = t.to ? _(t.to) : void 0;
	return {
		from: n,
		to: r && n !== r ? r : void 0
	};
}, b = (e, t) => ({
	from: m(o(e.from, t * 6)),
	to: c(o(e.to, t * 6))
});
function x(e) {
	return r(e, (e) => u(e) < 6 ? h(e) : m(p(e, 6)), (e) => u(e) < 6 ? c(p(e, 5)) : l(e));
}
var S = (e, t) => {
	let n = x(e), r = x(t);
	return _(n.from) === _(r.from);
}, C = (e) => {
	let t = y(e);
	if (!t) return "-";
	let { from: n, to: r } = t;
	return `${n}${r && n !== r ? ` → ${r}` : ""}`;
}, w = (e) => {
	let t = x(e);
	return t ? !t.to || S(t.from, t.to) ? _(t.from) : f(t.from, t.to) ? `${v(t.from)} → ${v(t.to)} ${d(t.to)}` : `${_(t.from)} → ${_(t.to)}` : "";
}, T = {
	calendarView: "halfyear",
	add: b,
	getPrevNext: (n, r) => {
		let i = x(n);
		if (!i) return {
			prev: !1,
			next: !1
		};
		let { from: a, to: o } = i, { from: s, to: l } = b({
			from: a,
			to: o
		}, -1), { from: u, to: d } = b({
			from: a,
			to: o
		}, 1), f = r.min && m(r.min), p = r.max && c(r.max);
		return {
			prev: e(s, f) ? {
				from: s,
				to: l
			} : !1,
			next: t(d, p) ? {
				from: u,
				to: d
			} : !1
		};
	},
	toRangeString: (e) => y(e),
	toRange: (e) => x(e),
	toString: (e, t, n = "default") => {
		let r = {
			default: C(e),
			long: w(e)
		};
		return r[n] ?? r.default;
	},
	toStringMaxWidth: () => 155,
	placeholder: () => g,
	fromString: (e) => {
		let t = n(e);
		if (!t) return null;
		let { from: r, to: i } = t, a = (e) => {
			let [t, n] = e.trim().split(/\s+/), r = isNaN(Number(n)) ? (/* @__PURE__ */ new Date()).getFullYear() : +n, i = Number(t.replace(/[hH\s+]/g, "").trim());
			return new Date(r, (i - 1) * 6, 1);
		};
		return x({
			from: a(r),
			to: a(i || r)
		});
	},
	navigate: (e, t) => o(e, t * 6),
	navigateUIView: (e, t) => s(e, t * 5),
	label: (e) => {
		let t = Math.floor(e.getFullYear() / 5) * 5;
		return `${t} → ${t + 4}`;
	},
	getViewDateFromDate: (e) => h(e),
	render: (e) => {
		let t = x(e.minDate), n = x(e.maxDate);
		return /* @__PURE__ */ a(i, {
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
export { T as halfyearGranularity, x as toHalfYearGranularityDateRange };
