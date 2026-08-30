import { differenceInDays as e, format as t, formatDistanceToNowStrict as n, isToday as r, isYesterday as i } from "date-fns";
//#region src/lib/date.ts
function a(e, n) {
	return t(e, "p", { locale: n });
}
function o(e) {
	return t(e, "HH:mm");
}
function s(e, n) {
	return t(e, "LLL", { locale: n });
}
function c(e) {
	return e.getDate();
}
function l(e, t) {
	return n(e, {
		addSuffix: !0,
		locale: t
	});
}
function u(e, { locale: n, yesterdayRelative: a = !0 }) {
	return r(e) ? l(e, n) : i(e) ? a ? l(e, n) : t(e, "p", { locale: n }) : t(e, "PPPp", { locale: n });
}
var d = (t, n) => {
	let a = {
		today: [],
		yesterday: [],
		lastWeek: [],
		lastMonth: []
	};
	return t.forEach((t) => {
		let o = t[n], s = Math.abs(e(o, /* @__PURE__ */ new Date()));
		r(o) ? a.today.push(t) : i(o) ? a.yesterday.push(t) : s <= 7 ? a.lastWeek.push(t) : s <= 30 ? a.lastMonth.push(t) : a[o.getFullYear()] = [...a[o.getFullYear()] || [], t];
	}), a;
};
//#endregion
export { d as categorizeItemsByDate, a as formatTime, o as formatTime24Hours, s as getAbbreviateMonth, l as getAgo, c as getDayOfMonth, u as getDisplayDateBasedOnDuration };
