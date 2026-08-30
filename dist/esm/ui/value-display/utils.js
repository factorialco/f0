import "dompurify";
//#region src/ui/value-display/utils.ts
function e(e) {
	return typeof e == "object" && !!e && "placeholder" in e && typeof e.placeholder == "string";
}
function t(t, n) {
	return e(t) ? typeof t == "object" && t && n in t ? t[n] === void 0 : !0 : !1;
}
function n(t, n) {
	if (t !== void 0 && typeof t != "object") return t;
	if (!t || typeof t != "object") return;
	let r = n in t ? t[n] : void 0, i = e(t) ? t.placeholder : void 0;
	if (r !== void 0) return n === "date" && typeof r == "object" && r && "getTime" in r ? new Date(r.getTime()) : r;
	if (i !== void 0) return i;
}
function r(e) {
	if (i(e)) try {
		return e.toLocaleDateString();
	} catch {
		return String(e);
	}
	let t = n(e, "date");
	if (i(t)) try {
		return t.toLocaleDateString();
	} catch {
		return String(t);
	}
	return typeof t == "string" ? t : t == null ? "" : String(t);
}
function i(e) {
	return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
//#endregion
export { r as formatDateValue, e as hasPlaceholder, t as isShowingPlaceholder, n as resolveValue };
