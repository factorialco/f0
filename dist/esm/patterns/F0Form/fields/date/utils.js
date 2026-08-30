import { format as e, isValid as t, parse as n } from "date-fns";
//#region src/patterns/F0Form/fields/date/utils.ts
function r(e) {
	return !e || !(e instanceof Date) || isNaN(e.getTime()) ? "" : `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
}
function i(e) {
	if (!e) return;
	let [t, n] = e.split(":").map(Number);
	if (isNaN(t) || isNaN(n)) return;
	let r = /* @__PURE__ */ new Date();
	return r.setHours(t, n, 0, 0), r;
}
function a(e, t) {
	if (!e) return;
	let n = new Date(e);
	if (t) {
		let [e, r, i] = t.split(":").map(Number);
		n.setHours(e ?? 0, r ?? 0, i ?? 0, 0);
	} else n.setHours(0, 0, 0, 0);
	return n;
}
var o = (e) => e === "12h" ? "hh:mm a" : "HH:mm";
function s(t, n) {
	return !t || !(t instanceof Date) || isNaN(t.getTime()) ? "" : e(t, o(n));
}
function c(e, r) {
	let i = e.trim();
	if (!i) return;
	let a = n(i, o(r), /* @__PURE__ */ new Date());
	return t(a) ? a : void 0;
}
//#endregion
export { a as combineDateAndTime, s as dateToDisplayTime, r as dateToTimeString, c as displayTimeToDate, i as timeStringToDate };
