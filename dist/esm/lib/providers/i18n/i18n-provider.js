"use client";
import { defaultTranslations as e } from "../../../i18n-provider-defaults.js";
import { createContext as t, useContext as n, useMemo as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/lib/providers/i18n/i18n-provider.tsx
var a = t(null), o = (e, t) => {
	let n = e.split("."), r = t;
	for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
	else return;
	return typeof r == "string" ? r : void 0;
}, s = (e) => typeof e == "object" && !!e && !Array.isArray(e), c = (e, t) => {
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = n[e];
		n[e] = s(r) && s(t) ? c(t, r) : r;
	}
	return n;
};
function l({ children: t, translations: n }) {
	let s = r(() => c(e, n), [n]), l = (e, t = {}) => {
		let n = o(e, s);
		if (n === void 0) return console.warn(`Translation key ${e} not found`), e;
		for (let [e, r] of Object.entries(t)) n = n.replace(`{{${e}}}`, r.toString());
		return n;
	};
	return /* @__PURE__ */ i(a.Provider, {
		value: {
			...s,
			t: l
		},
		children: t
	});
}
var u = {
	...e,
	t: (t, n = {}) => {
		let r = o(t, e);
		if (r === void 0) return t;
		for (let [e, t] of Object.entries(n)) r = r.replace(`{{${e}}}`, t.toString());
		return r;
	}
};
function d() {
	return n(a) ?? u;
}
var f = (e) => e;
//#endregion
export { l as I18nProvider, f as buildTranslations, d as useI18n };
