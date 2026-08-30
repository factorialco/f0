import "./granularities/consts.js";
import { format as e, isAfter as t, isBefore as n, isEqual as r, max as i, min as a } from "date-fns";
//#region src/components/OneCalendar/utils.ts
var o = (e) => e.replace(/'([^']+)'/g, "$1").replace(/MM/g, "mm").replace(/dd/g, "dd").replace(/yyyy/g, "yyyy").replace(/I/g, "nn").replace(/Q/g, "n"), s = (e, t) => e && t ? i([e, t]) : e ?? t, c = (e, t) => e && t ? a([e, t]) : e ?? t, l = (e) => {
	if (e instanceof Date) return { from: e };
	if (e != null) return e;
}, u = (e) => e != null && e instanceof Date && !isNaN(e.getTime()), d = (e) => {
	if (e !== void 0) {
		if (typeof e == "string") {
			let [t, n] = e.split(/(?:\s+-\s+|\s+→\s+)/);
			return {
				from: t,
				to: n
			};
		}
		return e;
	}
}, f = (t, n) => e(t, n), p = (e, t) => {
	let n = l(e);
	if (!n) return {
		from: "",
		to: void 0
	};
	let r = f(n.from, t), i = n.to ? f(n.to, t) : void 0;
	return {
		from: r,
		to: i && r !== i ? i : void 0
	};
}, m = (e, t) => {
	let n = p(e, t);
	if (!n) return "-";
	let { from: r, to: i } = n;
	return `${r}${i && r !== i ? ` → ${i}` : ""}`;
};
function h(e, t, n) {
	let r = l(e);
	if (!r) return null;
	let { from: i, to: a } = r;
	return {
		from: t(i),
		to: n(a || i)
	};
}
var g = (e, t) => !t || n(e, t) || r(e, t), _ = (e, n) => !n || t(e, n) || r(e, n), v = ({ minDate: e, maxDate: t }) => {
	let n = [];
	return e && n.push({ before: e }), t && n.push({ after: t }), n;
}, y = (e, t, { minDate: n, maxDate: r }) => {
	let i = t.toRange(e), a = t.toRange(n), o = t.toRange(r);
	return !e || !!i?.from && u(i.from) && (!a?.from || _(i.from, a.from)) && (!o?.to || g(i.to, o.to));
};
//#endregion
export { c as earliestDate, f as formatDate, p as formatDateRange, m as formatDateToString, o as formatToPlaceholder, y as isActiveDate, _ as isAfterOrEqual, g as isBeforeOrEqual, u as isValidDate, s as latestDate, v as toCalendarPickerMatcher, l as toDateRange, d as toDateRangeString, h as toGranularityDateRange };
