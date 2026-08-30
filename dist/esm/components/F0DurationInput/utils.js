import { durationUnits as e } from "./types.js";
//#region src/components/F0DurationInput/utils.ts
var t = [...e], n = ["hours", "minutes"], r = {
	days: 86400,
	hours: 3600,
	minutes: 60,
	seconds: 1
};
function i(e) {
	let t = Math.max(0, Math.floor(Number.isFinite(e) ? e : 0)), n = Math.floor(t / r.days);
	t %= r.days;
	let i = Math.floor(t / r.hours);
	return t %= r.hours, {
		days: n,
		hours: i,
		minutes: Math.floor(t / r.minutes),
		seconds: t % r.minutes
	};
}
function a(e) {
	return t.reduce((t, n) => {
		let i = e[n];
		return t + Math.max(0, Math.floor(Number.isFinite(i) ? i : 0)) * r[n];
	}, 0);
}
function o(e, n) {
	let i = Math.max(0, Math.floor(Number.isFinite(e) ? e : 0)), a = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}, o = t.filter((e) => n.includes(e));
	for (let e of o) a[e] = Math.floor(i / r[e]), i %= r[e];
	return a;
}
function s(e, t) {
	return t != null && e > t ? t : e < 0 ? 0 : e;
}
//#endregion
export { n as DEFAULT_UNITS, r as SECONDS_PER_UNIT, t as UNIT_ORDER, s as clampValue, a as fieldsToSeconds, i as secondsToFields, o as secondsToVisibleFields };
