import "../consts.js";
import { toDateRange as e } from "../../utils.js";
import { endOfDay as t, isWithinInterval as n, startOfDay as r } from "date-fns";
//#region src/components/OneCalendar/granularities/periods/utils.ts
var i = (e) => [...e].sort((e, t) => e.from.getTime() - t.from.getTime()), a = (e) => ({
	from: r(e.from),
	to: t(e.to)
}), o = (e, t) => {
	if (t) return e.find((e) => {
		let { from: r, to: i } = a(e);
		return r <= i && n(t, {
			start: r,
			end: i
		});
	});
}, s = (t, n) => {
	let r = o(t, e(n)?.from);
	return r ? t.indexOf(r) : -1;
}, c = (e) => e.to.getFullYear(), l = (e, t) => e.filter((e) => c(e) === t), u = (e, t = "en-US") => {
	if (e.description !== void 0) return e.description;
	let n = new Intl.DateTimeFormat(t, {
		day: "numeric",
		month: "short"
	});
	return `${n.format(e.from)} → ${n.format(e.to)}`;
};
//#endregion
export { o as findPeriodByDate, s as findPeriodIndex, u as formatPeriodRange, c as periodYear, l as periodsOfYear, i as sortPeriods, a as toPeriodRange };
