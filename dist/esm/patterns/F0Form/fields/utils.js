//#region src/patterns/F0Form/fields/utils.ts
function e(e, t) {
	let n = t[e.fieldId];
	if ("equalsTo" in e) return e.equalsTo instanceof Date && n instanceof Date ? n.getTime() === e.equalsTo.getTime() : n === e.equalsTo;
	if ("notEqualsTo" in e) return e.notEqualsTo instanceof Date && n instanceof Date ? n.getTime() !== e.notEqualsTo.getTime() : n !== e.notEqualsTo;
	if ("greaterThan" in e) {
		let t = e.greaterThan;
		return typeof n == "number" && typeof t == "number" ? n > t : n instanceof Date && t instanceof Date && n.getTime() > t.getTime();
	}
	if ("greaterThanOrEqual" in e) {
		let t = e.greaterThanOrEqual;
		return typeof n == "number" && typeof t == "number" ? n >= t : n instanceof Date && t instanceof Date && n.getTime() >= t.getTime();
	}
	if ("lowerThan" in e) {
		let t = e.lowerThan;
		return typeof n == "number" && typeof t == "number" ? n < t : n instanceof Date && t instanceof Date && n.getTime() < t.getTime();
	}
	if ("lowerThanOrEqual" in e) {
		let t = e.lowerThanOrEqual;
		return typeof n == "number" && typeof t == "number" ? n <= t : n instanceof Date && t instanceof Date && n.getTime() <= t.getTime();
	}
	if ("isEmpty" in e) {
		let t = n == null || n === "" || Array.isArray(n) && n.length === 0;
		return e.isEmpty ? t : !t;
	}
	return "matches" in e ? typeof n == "string" && e.matches.test(n) : "includes" in e ? Array.isArray(n) ? n.includes(e.includes) : n === e.includes : "notIncludes" in e ? Array.isArray(n) ? !n.includes(e.notIncludes) : n !== e.notIncludes : !0;
}
function t(t, n) {
	return typeof t == "function" ? t({ values: n }) : e(t, n);
}
function n(e, t, n) {
	return e ? (typeof e == "function" ? e({
		fieldValue: t,
		values: n
	}) : e) ?? null : null;
}
function r(e, t) {
	return e === void 0 ? !1 : typeof e == "function" ? e({ values: t }) : e;
}
function i(e, t) {
	if (e !== void 0) return typeof e == "function" ? e({ values: t }) : e;
}
//#endregion
export { i as evaluateDateConstraint, r as evaluateDisabled, t as evaluateRenderIf, n as resolveFieldAlert };
