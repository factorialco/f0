import { formatDateRange as e, formatDateToString as t, formatToPlaceholder as n, isAfterOrEqual as r, isBeforeOrEqual as i, isValidDate as a, toDateRange as o, toDateRangeString as s } from "../../utils.js";
import { findPeriodByDate as c, findPeriodIndex as l, sortPeriods as u, toPeriodRange as d } from "./utils.js";
import { PeriodsView as f } from "./PeriodsView.js";
import { jsx as p } from "react/jsx-runtime";
import { addYears as m, endOfDay as h, parse as g, startOfDay as _ } from "date-fns";
//#region src/components/OneCalendar/granularities/periods/index.tsx
var v = "dd/MM/yyyy";
function y(e, t) {
	let n = o(e);
	if (!n) return null;
	let r = c(t, n.from);
	return r ? d(r) : {
		from: _(n.from),
		to: h(n.to ?? n.from)
	};
}
var b = (_) => {
	let b = u(_.periods), x = (e) => {
		let t = b[e];
		return t ? d(t) : void 0;
	}, S = (e, t) => {
		let n = l(b, e);
		if (n !== -1) return x(n + t);
	};
	return {
		calendarView: "periods",
		selectorLabel: _.label,
		hideDateInput: !0,
		getViewDateBounds: () => {
			let e = b.at(0), t = b.at(-1);
			if (!(!e || !t)) return {
				min: h(e.to),
				max: h(t.to)
			};
		},
		add: (e, t) => S(e, t) ?? e,
		getPrevNext: (e, t) => {
			let n = l(b, e);
			if (n === -1) return {
				prev: !1,
				next: !1
			};
			let a = x(n - 1), o = x(n + 1);
			return {
				prev: a && r(a.to, t.min) ? a : !1,
				next: o && i(o.from, t.max) ? o : !1
			};
		},
		toRangeString: (t) => e(t, v),
		toRange: (e) => y(e, b),
		toString: (e) => {
			let n = o(e), r = c(b, n?.from);
			return r ? r.label : n ? t(y(n, b), v) : "";
		},
		toStringMaxWidth: () => 240,
		placeholder: () => n(v),
		fromString: (e) => {
			let t = s(e);
			if (!t) return null;
			let n = g(t.from.trim(), v, /* @__PURE__ */ new Date());
			return a(n) ? y(n, b) : null;
		},
		navigate: (e, t) => S(e, t)?.from ?? e,
		navigateUIView: (e, t) => m(e, t),
		label: (e) => String(e.getFullYear()),
		getViewDateFromDate: (e) => y(e, b)?.to ?? e,
		render: (e) => /* @__PURE__ */ p(f, {
			periods: b,
			header: _.header,
			year: e.viewDate.getFullYear(),
			motionDirection: e.motionDirection,
			selected: e.selected,
			onSelect: e.onSelect,
			minDate: e.minDate,
			maxDate: e.maxDate,
			compact: e.compact
		})
	};
}, x = b({ periods: [] });
//#endregion
export { b as createPeriodsGranularity, x as periodsGranularity, y as toPeriodsGranularityDateRange };
