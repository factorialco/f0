//#region src/sds/chat/F0Chat/utils/natural-time.ts
var e = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
function t(t, n) {
	return Math.round((e(n) - e(t)) / 864e5);
}
function n(e, t) {
	return new Intl.DateTimeFormat(t, { timeStyle: "short" }).format(e);
}
function r(e, n, r, i) {
	let a = t(e, n);
	if (a <= 0) return r.today;
	if (a === 1) return r.yesterday;
	if (a < 7) return new Intl.DateTimeFormat(i, { weekday: "long" }).format(e);
	let o = e.getFullYear() === n.getFullYear();
	return new Intl.DateTimeFormat(i, {
		day: "numeric",
		month: "short",
		...o ? {} : { year: "numeric" }
	}).format(e);
}
function i(e, t, i, a) {
	return `${r(e, t, i, a)} ${n(e, a)}`;
}
//#endregion
export { t as calendarDaysApart, n as formatClock, r as formatRelativeDay, i as formatSeparator };
